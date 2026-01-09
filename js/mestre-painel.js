// --- CONFIGURAÇÃO ---
const { createClient } = window.supabase;
const supabaseUrl = "https://uoeixaiwyqjtbcqduzid.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

let combatentes = [];
let turnoAtual = 0;
let candidatosImportacao = [];
let selecionadosParaImportar = new Set();
let realtimeChannel = null;
let saveTimers = {};
let idAlvoEfeito = null; // Guarda quem vai receber o efeito enquanto o modal está aberto
let tempoRodadaAcumulado = 100;


// --- INICIALIZAÇÃO ---
window.onload = function() {
    window.toggleSelecaoImportacao = toggleSelecaoImportacao;
    renderizarLista();
    iniciarRealtime();
    carregarPersonagens();
};

// --- TOAST NOTIFICATION ---
function mostrarToast(msg, tipo = 'info') {
    const toast = document.getElementById('system-toast');
    const msgEl = document.getElementById('toast-msg');
    const iconEl = document.getElementById('toast-icon');
    
    msgEl.innerText = msg;
    toast.className = `fixed top-20 left-1/2 -translate-x-1/2 z-[60] px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-bold text-sm pointer-events-none border transition-all duration-300 transform `;
    
    if (tipo === 'info') {
        toast.classList.add('bg-blue-600', 'text-white', 'border-blue-400');
    } else if (tipo === 'magic') {
        toast.classList.add('bg-purple-600', 'text-white', 'border-purple-400');
    }

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1000);
}

// --- REALTIME LISTENER ---
function iniciarRealtime() {
    if (realtimeChannel) supabaseClient.removeChannel(realtimeChannel);
    
    realtimeChannel = supabaseClient
        .channel('painel-mestre-global')
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'Personagens' }, payload => {
            const novoDado = payload.new;
            const idMudou = String(novoDado.id);
            const index = combatentes.findIndex(c => c.id === idMudou);

            if (index !== -1) {
                // --- PASSO 1: LOG (ANTES DE TUDO) ---
                // Pega a referência que tínhamos guardada na memória
                const dadosAntigos = combatentes[index].dadosRaw || {}; 
                
                // Gera o log comparando o que tínhamos com o que chegou
                compararEGerarLog(combatentes[index].nome, dadosAntigos, novoDado.dados);

                // --- PASSO 2: ATUALIZAR REFERÊNCIA (A CORREÇÃO DO BUG) ---
                // Atualizamos o 'dadosRaw' IMEDIATAMENTE. 
                // Assim, na próxima execução, 'dadosAntigos' já será esta versão.
                combatentes[index].dadosRaw = novoDado.dados;

                // --- PASSO 3: SEGURANÇA DE UI ---
                // Se eu estiver digitando neste card, paro por aqui para não pular o cursor.
                // Mas note que o passo 2 (memória do log) já foi feito!
                if (saveTimers && saveTimers[idMudou]) return;

                // --- PASSO 4: ATUALIZAR VISUAL ---
                // Se não estou digitando, atualizo as barras e números visuais
                const dadosAtualizados = parseCharacterData(novoDado);
                
                // Mescla os dados novos (mantendo o dadosRaw atualizado)
                combatentes[index] = { 
                    ...combatentes[index], 
                    ...dadosAtualizados 
                };
                
                atualizarInterfaceUnitary(idMudou, combatentes[index]);
            }
        })
        .subscribe();
}

// --- SALVAMENTO ---
async function persistirAlteracoes(id) {
    if (id.startsWith('mob_')) return;
    const indicador = document.getElementById(`save-status-${id}`);
    if (indicador) indicador.innerHTML = `<svg class="animate-spin w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;

    try {
        // 1. Pega dados atuais do banco
        const { data, error } = await supabaseClient.from('Personagens').select('dados').eq('id', id).single();
        if (error) throw error;

        const charLocal = combatentes.find(c => c.id === id);
        if (!charLocal) return;

        const dadosJson = data.dados || {};
        if (!dadosJson.statusAtuais) dadosJson.statusAtuais = {};
        
        // 2. Atualiza Status
        dadosJson.statusAtuais.vida = charLocal.hpAtual;
        dadosJson.statusAtuais.mana = charLocal.manaAtual;
        dadosJson.statusAtuais.foco = charLocal.focoAtual;
        dadosJson.iniciativa = charLocal.iniciativa;
        
        // 3. ATENÇÃO: Salvar os Efeitos e Tempo também!
        dadosJson.efeitos = charLocal.efeitos || [];
        // Opcional: Salvar o tempo acumulado da timeline se quiser persistência de turno
        // dadosJson.tempoCombate = charLocal.tempoAcumulado || 0; 

        // 4. Envia pro banco
        const { error: updateError } = await supabaseClient.from('Personagens').update({ dados: dadosJson }).eq('id', id);
        if (updateError) throw updateError;

        if (indicador) {
            indicador.innerHTML = `<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
            setTimeout(() => indicador.innerHTML = '', 2000);
        }
        if (window.saveTimers && window.saveTimers[id]) delete window.saveTimers[id];

    } catch (err) {
        console.error("Erro ao salvar:", err);
        if (indicador) indicador.innerHTML = `<span class="text-red-500 text-xs">Erro!</span>`;
    }
}

function atualizarStatus(id, campo, valor) {
    const index = combatentes.findIndex(c => c.id == id);
    if (index !== -1) {
        combatentes[index][campo] = parseInt(valor);
        atualizarInterfaceUnitary(id, combatentes[index]);
        if (saveTimers[id]) clearTimeout(saveTimers[id]);
        saveTimers[id] = setTimeout(() => { persistirAlteracoes(id); }, 1000);
    }
}

// --- LÓGICA DE TURNO E MODULO 1 (RESSONÂNCIA) ---
function proximoTurno() {
    if (combatentes.length === 0) return;

    // 1. Descobre quem é o primeiro da fila (pode ser char ou marker)
    let listaFila = combatentes.map(c => ({ 
        tipo: 'char', ref: c, tempo: c.tempoAcumulado || 0 
    }));
    
    // Adiciona o Marco de Rodada na simulação da fila
    listaFila.push({ tipo: 'marker', tempo: tempoRodadaAcumulado });
    
    // Ordena: Menor tempo primeiro. Desempate: Marker sempre por último para garantir que chars ajam antes da virada
    listaFila.sort((a, b) => {
        if (Math.abs(a.tempo - b.tempo) < 0.1) {
            if (a.tipo === 'marker') return 1; // Marker vai pro fim
            if (b.tipo === 'marker') return -1;
        }
        return a.tempo - b.tempo;
    });

    const primeiro = listaFila[0];

    // --- CENÁRIO A: É O MARCO DE RODADA ---
    if (primeiro.tipo === 'marker') {
        // Dispara os efeitos globais (dreno de mana, veneno, etc)
        processarFimDeRodada(); 
        
        // --- CORREÇÃO DA RODADA ---
        // Calcula a menor iniciativa da mesa para definir o tamanho da rodada
        // (A rodada anda na velocidade do mais lento)
        let menorIniciativa = 999;
        combatentes.forEach(c => {
            // Ignora quem tem 0 ou menos de iniciativa para não quebrar a conta, mínimo 1
            const inic = Math.max(1, c.iniciativa);
            if (inic < menorIniciativa) menorIniciativa = inic;
        });
        
        // Se não achou ninguém (lista vazia), usa padrão 10
        if (menorIniciativa === 999) menorIniciativa = 10;

        // O "Custo" da rodada é baseado no mais lento.
        // Assim, a rodada só será alcançada novamente quando o mais lento tiver agido.
        const incrementoRodada = 1000 / menorIniciativa;
        
        tempoRodadaAcumulado += incrementoRodada;
        
        // Chama recursivamente para pular o marco e ir para o próximo personagem imediatamente
        proximoTurno(); 
        return;
    }

    // --- CENÁRIO B: É UM PERSONAGEM ---
    const char = primeiro.ref;
    
    // Calcula o custo do turno baseado na iniciativa
    const iniciativa = Math.max(1, char.iniciativa);
    const custoTempo = 1000 / iniciativa;

    // Atualiza o tempo acumulado dele (joga ele para o final da fila)
    char.tempoAcumulado = (char.tempoAcumulado || 0) + custoTempo;

    // Atualiza a tela (Timeline visual e Destaque no Card)
    renderizarTimeline();
    
    // Se quiser salvar o tempo exato no banco para persistência entre refreshes:
    // persistirAlteracoes(char.id); 
}

function renderizarTimeline() {
    const track = document.getElementById('timeline-track');
    if (!track) return;

    // 1. CLONE PARA SIMULAÇÃO
    // Criamos uma cópia dos tempos atuais para simular o futuro sem estragar o jogo real
    let simulacao = combatentes.map(c => ({
        id: c.id,
        nome: c.nome,
        avatar: c.nome.charAt(0),
        iniciativa: Math.max(1, c.iniciativa),
        tempo: c.tempoAcumulado || 0,
        tipo: c.tipo,
        cor: c.tipo === 'monstro' ? 'text-red-400' : 'text-blue-400'
    }));

    // Variável local para simular o avanço do Marco de Rodada
    let simTempoRodada = tempoRodadaAcumulado;

    let listaVisual = [];
    const PASSOS_FUTUROS = 15; // Quantos turnos queremos ver no futuro

    // 2. LOOP DE PREVISÃO
    for (let i = 0; i < PASSOS_FUTUROS; i++) {
        // Cria lista de candidatos (Chars simulados + Marco de Rodada simulado)
        let candidatos = simulacao.map(c => ({ ...c, tipoObj: 'char' }));
        
        candidatos.push({ 
            tipoObj: 'marker', 
            tempo: simTempoRodada 
        });

        // Descobre quem age primeiro nessa iteração
        candidatos.sort((a, b) => {
            if (Math.abs(a.tempo - b.tempo) < 0.1) {
                // Se empatar, marker fica por último
                if (a.tipoObj === 'marker') return 1;
                if (b.tipoObj === 'marker') return -1;
            }
            return a.tempo - b.tempo;
        });

        const vencedor = candidatos[0];
        
        // Adiciona à lista visual final
        // Copiamos os dados para que o valor de 'tempo' fique "congelado" nesse passo
        listaVisual.push({ ...vencedor });

        // AVANÇA O TEMPO NA SIMULAÇÃO
        if (vencedor.tipoObj === 'marker') {
            // Avança a rodada baseada no mais lento da simulação
            let menorIniciativa = 999;
            simulacao.forEach(c => {
                if (c.iniciativa < menorIniciativa) menorIniciativa = c.iniciativa;
            });
            if (menorIniciativa === 999) menorIniciativa = 10;
            
            simTempoRodada += (1000 / menorIniciativa);
        } else {
            // Avança o personagem específico na simulação
            // Precisamos atualizar o objeto dentro da array 'simulacao' para as próximas iterações
            const charNaSimulacao = simulacao.find(c => c.id === vencedor.id);
            charNaSimulacao.tempo += (1000 / charNaSimulacao.iniciativa);
        }
    }

    // 3. RENDERIZAÇÃO HTML
    let html = '';
    listaVisual.forEach((item, idx) => {
        if (item.tipoObj === 'marker') {
            html += `<div class="timeline-marker" title="Fim da Rodada"></div>`;
        } else {
            const isFirst = idx === 0;
            const classeFirst = isFirst ? 'first' : 'opacity-70 scale-90';
            
            html += `
            <div class="timeline-card ${classeFirst}">
                <div class="font-bold text-lg ${item.cor}">${item.avatar}</div>
                <div class="text-[8px] text-slate-400 truncate w-10 text-center">${item.nome}</div>
                <div class="absolute -bottom-2 bg-slate-800 text-[8px] px-1 rounded border border-slate-600">${Math.floor(item.tempo)}</div>
            </div>`;
        }
    });

    track.innerHTML = html;

    // 4. DESTAQUE NO CARD PRINCIPAL (Apenas para o atual real)
    const atualId = listaVisual[0].tipoObj === 'char' ? listaVisual[0].id : null;
    
    combatentes.forEach(c => {
        const card = document.getElementById(`card-${c.id}`);
        if (card) {
            if (c.id === atualId) {
                card.classList.add('active-turn', 'border-purple-500');
                card.classList.remove('opacity-90', 'border-slate-800');
            } else {
                card.classList.remove('active-turn', 'border-purple-500');
                card.classList.add('opacity-90', 'border-slate-800');
            }
        }
    });
}

// --- FUNÇÃO AUXILIAR DE CÁLCULO (NOVA) ---
function calcularCustoRessonancia(char) {
    // 1. Se for monstro ou não tiver dados detalhados, usa regra simples (Nível)
    if (char.tipo === 'monstro' || !char.dadosRaw) {
        return char.nivel > 0 ? char.nivel : 1;
    }

    const nivel = char.nivel || 0;
    const dados = char.dadosRaw; // O JSON completo que salvamos no Módulo 6
    const inventario = dados.inventario || [];
    const afinidadeID = dados.afinidade || ""; // Ex: 'afin-env'

    // 2. Filtra Itens Mágicos Equipados
    // Nota: O Painel do Mestre precisa confiar que o JSON salvo tem 'equipado: true'
    const qtdItensMagicos = inventario.filter(i => i.equipado === true && i.isMagico === true).length;

    // 3. Custo Base: Nível + (10 por item mágico)
    let custo = nivel + (qtdItensMagicos * 10);

    // 4. Desconto de Afinidade (Envoltura)
    if (afinidadeID === 'afin-env') {
        const multiplicador = Math.floor(nivel / 4) / 4;
        custo = Math.floor(custo - (custo * multiplicador));
    }

    // 5. Retorna valor formatado (mínimo 0)
    return Math.max(0, parseFloat(custo.toFixed(2)));
}

function processarFimDeRodada() {
    let afetadosRessonancia = 0;
    let totalDano = 0;
    let totalCura = 0;
    let precisaRedesenharTela = false;

    combatentes.forEach(char => {
        let mudouAlgo = false;

        // --- 1. LÓGICA DE RESSONÂNCIA (ATUALIZADA) ---
        if (char.ressonancia === true) {
            // Usa a nova função complexa de cálculo
            const custo = calcularCustoRessonancia(char);
            
            // Drena a mana (garantindo que não fique negativa se não quiser)
            const novaMana = Math.max(0, char.manaAtual - custo);
            
            // Só aplica se houve mudança (para evitar salvar sem necessidade)
            if (novaMana !== char.manaAtual) {
                // Se o custo for quebrado (ex: 2.5), arredondamos a mana atual ou mantemos decimal?
                // Geralmente RPG trabalha com inteiros na barra, mas vamos aceitar decimal:
                char.manaAtual = parseFloat(novaMana.toFixed(2)); 
                
                afetadosRessonancia++;
                mudouAlgo = true;
                
                // Opcional: Mostrar Toast específico para quem perdeu muita mana
                if (custo > 20) mostrarToast(`${char.nome} sobrecarregou! -${custo} MP`, 'magic');
            }
        }

        // 2. Efeitos (Módulo 3 e 4 mantidos iguais)
        if (char.efeitos && char.efeitos.length > 0) {
            const qtdInicial = char.efeitos.length;
            
            char.efeitos.forEach(ef => {
                if (ef.mods) {
                    if (ef.mods.vida !== 0) {
                        const antes = char.hpAtual;
                        char.hpAtual = Math.min(char.hpMax, Math.max(0, char.hpAtual + ef.mods.vida));
                        if (char.hpAtual !== antes) {
                            mudouAlgo = true;
                            if (ef.mods.vida < 0) totalDano += Math.abs(ef.mods.vida);
                            else totalCura += ef.mods.vida;
                        }
                    }
                    if (ef.mods.mana !== 0) {
                        const antes = char.manaAtual;
                        char.manaAtual = Math.min(char.manaMax, Math.max(0, char.manaAtual + ef.mods.mana));
                        if (char.manaAtual !== antes) mudouAlgo = true;
                    }
                    if (ef.mods.foco !== 0) {
                        const antes = char.focoAtual;
                        char.focoAtual = Math.min(char.focoMax, Math.max(0, char.focoAtual + ef.mods.foco));
                        if (char.focoAtual !== antes) mudouAlgo = true;
                    }
                }
            });

            char.efeitos = char.efeitos.filter(ef => {
                if (ef.duracao === 0) return true;
                ef.duracao -= 1;
                return ef.duracao > 0;
            });
            
            if (char.efeitos.length !== qtdInicial || char.efeitos.some(ef => ef.duracao >= 0)) {
                mudouAlgo = true;
                precisaRedesenharTela = true;
            }
        }

        // Salva e Atualiza
        if (mudouAlgo) {
            atualizarInterfaceUnitary(char.id, char);
            persistirAlteracoes(char.id);
        }
    });

    if (precisaRedesenharTela) {
        renderizarLista();
    }

    // Feedback
    let msg = [];
    if (afetadosRessonancia > 0) msg.push(`${afetadosRessonancia} em ressonância`);
    if (totalDano > 0) msg.push(`-${totalDano} HP`);
    
    if (msg.length > 0) {
        mostrarToast(`Nova Rodada: ${msg.join(', ')}`, 'magic');
    } else {
        mostrarToast('Nova Rodada Iniciada', 'info');
    }
}

function ordenarIniciativa() {
    combatentes.sort((a, b) => b.iniciativa - a.iniciativa);
    turnoAtual = 0;
    renderizarLista();
}

// --- RENDERIZAÇÃO ---
function atualizarInterfaceUnitary(id, char) {
    const hpBar = document.getElementById(`bar-hp-${id}`);
    const mpBar = document.getElementById(`bar-mp-${id}`);
    const focoBar = document.getElementById(`bar-foco-${id}`);

    if(hpBar) hpBar.style.width = `${char.hpMax > 0 ? Math.min(100, (char.hpAtual / char.hpMax) * 100) : 0}%`;
    if(mpBar) mpBar.style.width = `${char.manaMax > 0 ? Math.min(100, (char.manaAtual / char.manaMax) * 100) : 0}%`;
    if(focoBar) focoBar.style.width = `${char.focoMax > 0 ? Math.min(100, (char.focoAtual / char.focoMax) * 100) : 0}%`;

    const inputHp = document.getElementById(`input-hp-${id}`);
    const inputMp = document.getElementById(`input-mp-${id}`);
    const inputFoco = document.getElementById(`input-foco-${id}`);

    if (inputHp && document.activeElement !== inputHp) inputHp.value = char.hpAtual;
    if (inputMp && document.activeElement !== inputMp) inputMp.value = char.manaAtual;
    if (inputFoco && document.activeElement !== inputFoco) inputFoco.value = char.focoAtual;

    const card = document.getElementById(`card-${id}`);
    if (card) {
        if (char.ressonancia) card.classList.add('card-ressonancia');
        else card.classList.remove('card-ressonancia');
    }
}

// --- FUNÇÕES DO MÓDULO 2 ---

function abrirModalEfeitos(id) {
    idAlvoEfeito = id;
    document.getElementById('modal-efeitos').classList.remove('hidden');
    document.getElementById('input-efeito-custom').value = '';
    document.getElementById('input-duracao-efeito').value = '3';
    
    // Limpa os modificadores
    document.getElementById('mod-vida').value = '';
    document.getElementById('mod-mana').value = '';
    document.getElementById('mod-foco').value = '';
}


// Fecha o modal
function fecharModalEfeitos() {
    document.getElementById('modal-efeitos').classList.add('hidden');
    idAlvoEfeito = null;
}
function aplicarEfeito(nome, icone, corTexto, corBorda) {
    if (!idAlvoEfeito) return;
    
    const duracao = parseInt(document.getElementById('input-duracao-efeito').value) || 0;
    
    // MÓDULO 4: Captura os modificadores
    const modVida = parseInt(document.getElementById('mod-vida').value) || 0;
    const modMana = parseInt(document.getElementById('mod-mana').value) || 0;
    const modFoco = parseInt(document.getElementById('mod-foco').value) || 0;

    adicionarDadosEfeito(idAlvoEfeito, {
        id: Date.now().toString(),
        nome: nome,
        icone: icone,
        classes: `${corTexto} ${corBorda}`,
        duracao: duracao,
        mods: { vida: modVida, mana: modMana, foco: modFoco } // Salva no objeto
    });
    
    fecharModalEfeitos();
}

// Adiciona efeito digitado manualmente
function aplicarEfeitoCustom() {
    const nome = document.getElementById('input-efeito-custom').value;
    if (!nome || !idAlvoEfeito) return;
    
    aplicarEfeito(nome, '✨', 'text-white', 'border-slate-400');
}

// Lógica central de adicionar ao array de combatentes
function adicionarDadosEfeito(charId, efeitoObj) {
    const index = combatentes.findIndex(c => c.id === charId);
    if (index !== -1) {
        // Inicializa array se não existir
        if (!combatentes[index].efeitos) combatentes[index].efeitos = [];
        
        // Adiciona o efeito
        combatentes[index].efeitos.push(efeitoObj);
        
        // Atualiza a tela imediatamente
        renderizarLista(); 
        
        // (Opcional) Salvar no Supabase se quiser persistência agora, 
        // mas podemos deixar para o próximo módulo se preferir.
        // persistirAlteracoes(charId); 
    }
}

// Remove um efeito ao clicar nele
function removerEfeito(charId, efeitoId) {
    const index = combatentes.findIndex(c => c.id === charId);
    if (index !== -1 && combatentes[index].efeitos) {
        combatentes[index].efeitos = combatentes[index].efeitos.filter(e => e.id !== efeitoId);
        renderizarLista();
        // persistirAlteracoes(charId);
    }
}

function renderizarLista() {
    const container = document.getElementById('combat-list');
    if (combatentes.length === 0) {
        container.innerHTML = `<div class="text-center py-24 text-slate-500 border-2 border-dashed border-slate-700 rounded-xl bg-slate-900/50"><p class="text-lg font-medium">Arena vazia</p></div>`;
        return;
    }

    let html = '';
    combatentes.forEach((char, index) => {
        const isActive = index === turnoAtual;
        let cardClasses = `relative flex flex-col md:flex-row items-center gap-4 p-4 rounded-xl border transition-all duration-300 card-enter `;
        if (isActive) cardClasses += 'active-turn border-purple-500 '; else cardClasses += 'bg-slate-900 border-slate-800 opacity-90 ';
        if (char.ressonancia) cardClasses += 'card-ressonancia ';
        if (char.hpAtual <= 0) cardClasses += 'grayscale opacity-50 ';

        const avatarBg = char.tipo === 'monstro' ? 'bg-red-900/40 text-red-400' : 'bg-blue-900/40 text-blue-400';
        const hpPct = char.hpMax > 0 ? Math.min(100, Math.max(0, (char.hpAtual / char.hpMax) * 100)) : 0;
        const mpPct = char.manaMax > 0 ? Math.min(100, Math.max(0, (char.manaAtual / char.manaMax) * 100)) : 0;
        const focoPct = char.focoMax > 0 ? Math.min(100, Math.max(0, (char.focoAtual / char.focoMax) * 100)) : 0;

        // --- RENDERIZAÇÃO DOS EFEITOS (EM COLUNA) ---
        let htmlEfeitos = '';
        if (char.efeitos && char.efeitos.length > 0) {
            // Alterado para 'flex-col' (coluna) e removido 'col-span-3'
            htmlEfeitos = `<div class="flex flex-col gap-1 mt-2 w-full">`;
            char.efeitos.forEach(ef => {
                const textoDuracao = ef.duracao > 0 ? `(${ef.duracao})` : '';

                // MÓDULO 4: Texto do Modificador
                let textoMod = '';
                if (ef.mods) {
                    if (ef.mods.vida < 0) textoMod += ` <span class="text-red-400 font-bold">${ef.mods.vida}</span>`;
                    if (ef.mods.vida > 0) textoMod += ` <span class="text-green-400 font-bold">+${ef.mods.vida}</span>`;
                    // Você pode adicionar mana/foco aqui se quiser, mas pode poluir muito o card. HP é o principal.
                }

                htmlEfeitos += `
                    <div onclick="removerEfeito('${char.id}', '${ef.id}')" 
                        class="cursor-pointer bg-slate-950 border ${ef.classes || 'border-slate-600 text-slate-300'} px-2 py-0.5 rounded text-[10px] uppercase font-bold flex items-center gap-1 hover:bg-red-900/50 hover:border-red-500 transition-colors w-fit" title="Clique para remover">
                        <span>${ef.icone}</span> ${ef.nome} ${textoMod} <span class="ml-1 text-[9px] opacity-70">${textoDuracao}</span>
                    </div>
                `;
            });
            htmlEfeitos += `</div>`;
        }

        html += `
        <div id="card-${char.id}" class="${cardClasses}">
            
            <!-- Coluna 1: Avatar, Info e EFEITOS -->
            <div class="flex items-center gap-4 w-full md:w-auto min-w-[200px] self-start">
                <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${avatarBg}">
                    ${char.nome.charAt(0)}
                </div>
                <div class="overflow-hidden w-full">
                    <h3 class="font-bold text-lg text-slate-100 truncate w-32 flex items-center gap-2">
                        ${char.nome}
                        <span id="save-status-${char.id}"></span>
                    </h3>
                    <div class="text-xs text-slate-400">Nv. ${char.nivel} - ${char.classe}</div>
                    
                    <!-- Efeitos inseridos aqui (agora em coluna) -->
                    ${htmlEfeitos}
                </div>
            </div>

            <!-- Coluna 2: Barras -->
            <div class="flex-1 w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-2">
                <div class="flex items-center gap-2"><span class="text-red-500 text-xs font-bold w-6">HP</span><div class="flex-1 h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800"><div id="bar-hp-${char.id}" class="h-full bg-red-600 transition-all duration-300" style="width: ${hpPct}%"></div></div><input type="number" id="input-hp-${char.id}" class="w-14 bg-slate-950 border border-slate-700 rounded text-center text-sm text-red-200 outline-none focus:border-red-500" value="${char.hpAtual}" oninput="atualizarStatus('${char.id}', 'hpAtual', this.value)"></div>
                <div class="flex items-center gap-2"><span class="text-cyan-500 text-xs font-bold w-6">MP</span><div class="flex-1 h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800"><div id="bar-mp-${char.id}" class="h-full bg-cyan-600 transition-all duration-300" style="width: ${mpPct}%"></div></div><input type="number" id="input-mp-${char.id}" class="w-14 bg-slate-950 border border-slate-700 rounded text-center text-sm text-cyan-200 outline-none focus:border-cyan-500" value="${char.manaAtual}" oninput="atualizarStatus('${char.id}', 'manaAtual', this.value)"></div>
                <div class="flex items-center gap-2"><span class="text-amber-500 text-xs font-bold w-6">FP</span><div class="flex-1 h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800"><div id="bar-foco-${char.id}" class="h-full bg-amber-500 transition-all duration-300" style="width: ${focoPct}%"></div></div><input type="number" id="input-foco-${char.id}" class="w-14 bg-slate-950 border border-slate-700 rounded text-center text-sm text-amber-200 outline-none focus:border-amber-500" value="${char.focoAtual}" oninput="atualizarStatus('${char.id}', 'focoAtual', this.value)"></div>
            </div>

            <!-- Coluna 3: Iniciativa e Botões (CORRIGIDO) -->
            <div class="flex items-center gap-2 border-l border-slate-800 pl-4">
                <div class="text-center">
                    <label class="text-[9px] text-slate-500 uppercase font-bold block">Inic</label>
                    <input type="number" class="w-12 bg-transparent text-xl font-bold text-center text-yellow-500 outline-none border-b border-transparent focus:border-yellow-500" value="${char.iniciativa}" onchange="atualizarStatus('${char.id}', 'iniciativa', this.value)">
                </div>
                
                <!-- Botão Efeitos -->
                <button onclick="abrirModalEfeitos('${char.id}')" class="text-slate-500 hover:text-yellow-400 transition-colors p-2" title="Adicionar Efeito">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </button>

                <!-- Botão Remover -->
                <button onclick="removerCombatente('${char.id}')" class="text-slate-600 hover:text-red-500 transition-colors p-2" title="Remover Ficha">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// --- SUPORTE ---
async function carregarPersonagens() {
    try {
        const { data, error } = await supabaseClient.from('Personagens').select('*');
        if (error) throw error;
        if (data) {
            data.forEach(novo => {
                const idx = combatentes.findIndex(c => c.id === String(novo.id));
                if(idx !== -1 && !saveTimers[String(novo.id)]) {
                    const parsed = parseCharacterData(novo);
                    combatentes[idx] = { ...combatentes[idx], ...parsed };
                }
            });
            renderizarLista();
        }
    } catch (err) { console.error(err); }
}

function parseCharacterData(char) {
    const dados = char.dados || {};
    return {
        id: String(char.id),
        nome: char.nome,
        classe: (char.classe || 'N/C').toUpperCase(),
        nivel: char.nivel || 0,
        ressonancia: char.ressonancia === true,
        iniciativa: parseInt(dados.iniciativa || 0),
        hpAtual: parseInt(dados.statusAtuais?.vida || dados.statusCalculados?.vida || 0), 
        hpMax: parseInt(dados.statusCalculados?.vida || 0),
        manaAtual: parseInt(dados.statusAtuais?.mana || dados.statusCalculados?.mana || 0), 
        manaMax: parseInt(dados.statusCalculados?.mana || 0),
        focoAtual: parseInt(dados.statusAtuais?.foco || dados.statusCalculados?.foco || 0), 
        focoMax: parseInt(dados.statusCalculados?.foco || 0),    
        tipo: 'jogador',
        dadosRaw: dados, 
    };
}

async function abrirModalImportacao() {
    document.getElementById('modal-importacao').classList.remove('hidden');
    const lista = document.getElementById('lista-importacao');
    lista.innerHTML = '<p class="text-slate-500 text-center col-span-2 py-8">Buscando...</p>';
    try {
        const { data, error } = await supabaseClient.from('Personagens').select('*').order('nome', { ascending: true });
        if (error) throw error;
        candidatosImportacao = data.map(parseCharacterData);
        selecionadosParaImportar.clear();
        renderizarListaImportacao();
    } catch (err) { fecharModalImportacao(); }
}
function renderizarListaImportacao() {
    const container = document.getElementById('lista-importacao');
    const termo = document.getElementById('busca-importacao').value.toLowerCase();
    const filtrados = candidatosImportacao.filter(p => p.nome.toLowerCase().includes(termo));
    if (filtrados.length === 0) { container.innerHTML = '<p class="text-slate-500 col-span-2 text-center">Nada encontrado.</p>'; return; }
    let html = '';
    filtrados.forEach(char => {
        const jaEmCombate = combatentes.some(c => c.id === char.id);
        const selecionado = selecionadosParaImportar.has(char.id);
        const cardClass = jaEmCombate ? "bg-slate-950 opacity-50 cursor-not-allowed" : (selecionado ? "bg-blue-900/30 border-blue-500" : "bg-slate-800 hover:bg-slate-700");
        const onclick = jaEmCombate ? '' : `onclick="toggleSelecaoImportacao('${char.id}')"`;
        const check = selecionado ? `<svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>` : `<div class="w-6 h-6 rounded-full border-2 border-slate-600"></div>`;
        html += `<div ${onclick} class="border rounded-lg p-3 cursor-pointer flex justify-between items-center transition-all ${cardClass}"><div class="flex items-center gap-3 overflow-hidden"><div class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center font-bold text-slate-400">${char.nome.charAt(0)}</div><div><h4 class="font-bold text-slate-200 truncate">${char.nome}</h4></div></div><div>${jaEmCombate ? '--' : check}</div></div>`;
    });
    container.innerHTML = html;
}
function toggleSelecaoImportacao(id) { const strId = String(id); if (selecionadosParaImportar.has(strId)) selecionadosParaImportar.delete(strId); else selecionadosParaImportar.add(strId); renderizarListaImportacao(); }
function confirmarImportacao() { 
    const novos = candidatosImportacao.filter(c => selecionadosParaImportar.has(c.id)); if (novos.length > 0) { combatentes = [...combatentes, ...novos]; renderizarLista(); } fecharModalImportacao(); renderizarTimeline() }
function filtrarListaImportacao() { renderizarListaImportacao(); }
function fecharModalImportacao() { document.getElementById('modal-importacao').classList.add('hidden'); }
function adicionarMonstro() { const idRandom = Math.random().toString(36).substr(2, 9); combatentes.push({ id: `mob_${idRandom}`, nome: 'Monstro', classe: 'Inimigo', nivel: 1, iniciativa: Math.floor(Math.random() * 20) + 1, hpAtual: 30, hpMax: 30, manaAtual: 0, manaMax: 0, focoAtual: 0, focoMax: 0, tipo: 'monstro', ressonancia: false }); renderizarLista(); }
function removerCombatente(id) { combatentes = combatentes.filter(c => c.id !== id); if (turnoAtual >= combatentes.length) turnoAtual = 0; renderizarLista(); }

// --- LÓGICA DO HISTÓRICO (MÓDULO 6) ---

function toggleLog() {
    const log = document.getElementById('combat-log');
    const arrow = document.getElementById('log-arrow');
    log.classList.toggle('log-minimized');
    arrow.classList.toggle('rotate-180');
}

function adicionarLog(msg, tipo = 'info') {
    const container = document.getElementById('log-content');
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const div = document.createElement('div');
    div.className = 'log-entry animate-pulse'; // Animação rápida ao entrar
    div.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-msg ${tipo}">${msg}</span>`;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight; // Auto-scroll para o fim
    
    // Remove animação depois de um tempo
    setTimeout(() => div.classList.remove('animate-pulse'), 1000);
}

// A FUNÇÃO DETETIVE
function compararEGerarLog(nome, dadosAntigos, dadosNovos) {
    if (!dadosAntigos || !dadosNovos) return;

    // 1. Status Atuais (Vida, Mana, Foco)
    const statsA = dadosAntigos.statusAtuais || {};
    const statsN = dadosNovos.statusAtuais || {};

    // Vida
    const diffVida = (parseInt(statsN.vida) || 0) - (parseInt(statsA.vida) || 0);
    if (diffVida !== 0) {
        if (diffVida < 0) adicionarLog(`${nome} perdeu ${Math.abs(diffVida)} HP`, 'log-dano');
        else adicionarLog(`${nome} recuperou ${diffVida} HP`, 'log-cura');
    }

    // Mana
    const diffMana = (parseInt(statsN.mana) || 0) - (parseInt(statsA.mana) || 0);
    if (diffMana !== 0) {
        if (diffMana < 0) adicionarLog(`${nome} gastou ${Math.abs(diffMana)} MP`, 'log-mana');
        else adicionarLog(`${nome} recuperou ${diffMana} MP`, 'log-mana');
    }

    // Foco (Opcional, pode poluir se mudar muito)
    const diffFoco = (parseInt(statsN.foco) || 0) - (parseInt(statsA.foco) || 0);
    if (diffFoco !== 0) {
        adicionarLog(`${nome} Foco: ${statsA.foco} -> ${statsN.foco}`, 'log-info');
    }

    // 2. Inventário (Equipar/Desequipar)
    const invA = dadosAntigos.inventario || [];
    const invN = dadosNovos.inventario || [];

    // Verifica itens equipados
    // Mapeia por ID ou Nome para comparar
    invN.forEach(itemN => {
        const itemA = invA.find(i => i.instancia_id === itemN.instancia_id || i.nome === itemN.nome);
        
        if (itemA) {
            // Se o item já existia, vê se mudou o status 'equipado'
            if (itemN.equipado && !itemA.equipado) {
                adicionarLog(`${nome} equipou: ${itemN.nome}`, 'log-item');
            } else if (!itemN.equipado && itemA.equipado) {
                adicionarLog(`${nome} desequipou: ${itemN.nome}`, 'log-info');
            }
        }
    });
}        