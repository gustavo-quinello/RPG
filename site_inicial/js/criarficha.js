
// --- DADOS (Adicionei descrições genéricas) ---
const dadosHabilidades = {
    classes: {
        mago_elemental: [
            { id: 'me_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'me_3', nome: 'Finta Improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'me_4', nome: 'Intensificar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'me_5', nome: 'Ciclo arcano', desc: 'Descrição genérica.', tier: 2 },
            { id: 'me_6', nome: 'Aniquilação', desc: 'Descrição genérica.', tier: 3 },
            
        ],

        mistico: [
            { id: 'mis_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'mis_3', nome: 'Finta Improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'mis_4', nome: 'Espaço Extra', desc: 'Descrição genérica.', tier: 2 },
            { id: 'mis_5', nome: 'Agilizar Círculo', desc: 'Descrição genérica.', tier: 2 },
            { id: 'mis_6', nome: 'Gambiarra do Místico', desc: 'Descrição genérica.', tier: 3 },
            
        ],

        mago_de_fronte: [
            { id: 'mf_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'mf_3', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'mf_4', nome: 'Initerrupto', desc: 'Descrição genérica.', tier: 2 },
            { id: 'mf_5', nome: 'Precisão', desc: 'Descrição genérica.', tier: 2 },
            { id: 'mf_6', nome: 'Conjuração Livre', desc: 'Descrição genérica.', tier: 3 },
            
        ],

        fimbulwinter: [
            { id: 'fi_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'fi_3', nome: 'Finta Improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'fi_4', nome: 'Resistência térmica', desc: 'Descrição genérica.', tier: 2 },
            { id: 'fi_5', nome: 'Esfriar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'fi_6', nome: 'Fimbulwinter', desc: 'Descrição genérica.', tier: 3 },
            
        ],

        feengari: [
            { id: 'fe_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'fe_3', nome: 'Finta improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'fe_4', nome: 'Lua artificial', desc: 'Descrição genérica.', tier: 2 },
            { id: 'fe_5', nome: 'Ascensão Lunar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'fe_6', nome: 'Transmutação Lunar', desc: 'Descrição genérica.', tier: 3 },
            
        ],

        ascendente: [
            { id: 'as_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'as_3', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'as_4', nome: 'Acalmar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'as_5', nome: 'Consciência', desc: 'Descrição genérica.', tier: 2 },
            { id: 'as_6', nome: 'Harmonia', desc: 'Descrição genérica.', tier: 3 },
            
        ],

        espadachim: [
            { id: 'esp_1', nome: 'Precisão', desc: 'Descrição genérica.', tier: 1 },
            { id: 'esp_2', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'esp_3', nome: 'Ataque do trapaceiro', desc: 'Descrição genérica.', tier: 2 },
            { id: 'esp_4', nome: 'Finta de guerra', desc: 'Descrição genérica.', tier: 2 },
            { id: 'esp_5', nome: 'Ataque do trapaceiro II(passivo)', desc: 'Descrição genérica.', tier: 3 },
        ],

        arma_de_corda: [
            { id: 'adc_1', nome: 'Precisão', desc: 'Descrição genérica.', tier: 1 },
            { id: 'adc_2', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'adc_3', nome: 'Prender', desc: 'Descrição genérica.', tier: 2 },
            { id: 'adc_4', nome: 'Puxar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'adc_5', nome: 'Zona segura', desc: 'Descrição genérica.', tier: 3 },
        ],

        nordico: [
            { id: 'no_1', nome: 'Precisão', desc: 'Descrição genérica.', tier: 1 },
            { id: 'no_2', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'no_3', nome: 'Iniciador', desc: 'Descrição genérica.', tier: 2 },
            { id: 'no_4', nome: 'Máquina de Matar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'no_5', nome: 'Aniquilador em área', desc: 'Descrição genérica.', tier: 3 },
        ],

        lanceiro: [
            { id: 'lan_1', nome: 'Precisão', desc: 'Descrição genérica.', tier: 1 },
            { id: 'lan_2', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'lan_3', nome: 'Arremesso', desc: 'Descrição genérica.', tier: 2 },
            { id: 'lan_4', nome: 'Calibrado', desc: 'Descrição genérica.', tier: 2 },
            { id: 'lan_5', nome: 'Estocada', desc: 'Descrição genérica.', tier: 3 },
        ],

        atirador_de_elite: [
            { id: 'ae_1', nome: 'Cálculo exato II', desc: 'Descrição genérica.', tier: 1 },
            { id: 'ae_2', nome: 'Finta improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'ae_3', nome: 'Disparo rápido', desc: 'Descrição genérica.', tier: 2 },
            { id: 'ae_4', nome: 'Concentração', desc: 'Descrição genérica.', tier: 2 },
            { id: 'ae_5', nome: 'Chuva de projeteis', desc: 'Descrição genérica.', tier: 3 },
        ],

        assassino: [
            { id: 'ass_1', nome: 'Cálculo exato I', desc: 'Descrição genérica.', tier: 1 },
            { id: 'ass_2', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'ass_3', nome: 'Apunhalar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'ass_4', nome: 'Furtividade real', desc: 'Descrição genérica.', tier: 2 },
            { id: 'ass_5', nome: 'Finalizador', desc: 'Descrição genérica.', tier: 3 },
        ],

        gladiador: [
            { id: 'gla_1', nome: 'Cálculo exato I', desc: 'Descrição genérica.', tier: 1 },
            { id: 'gla_2', nome: 'Finta', desc: 'Descrição genérica.', tier: 1 },
            { id: 'gla_3', nome: 'Berzerk', desc: 'Descrição genérica.', tier: 2 },
            { id: 'gla_4', nome: 'Quebracascos', desc: 'Descrição genérica.', tier: 2 },
            { id: 'gla_5', nome: 'Até a morte', desc: 'Descrição genérica.', tier: 3 },
        ],

        charlatao: [
            { id: 'cha_1', nome: 'Especialista', desc: 'Descrição genérica.', tier: 1 },
            { id: 'cha_2', nome: 'Finta improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'cha_3', nome: 'Lingua de prata', desc: 'Descrição genérica.', tier: 2 },
            { id: 'cha_4', nome: 'Marca', desc: 'Descrição genérica.', tier: 2 },
            { id: 'cha_5', nome: 'Lider tático', desc: 'Descrição genérica.', tier: 3 },
        ],

        alquimista: [
            { id: 'alq_1', nome: 'Especialista', desc: 'Descrição genérica.', tier: 1 },
            { id: 'alq_2', nome: 'Finta improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'alq_3', nome: 'Médico', desc: 'Descrição genérica.', tier: 2 },
            { id: 'alq_4', nome: 'Mãos rápidas', desc: 'Descrição genérica.', tier: 2 },
            { id: 'alq_5', nome: 'Reanimação', desc: 'Descrição genérica.', tier: 3 },
        ],

        artifice: [
            { id: 'art_1', nome: 'Especialista', desc: 'Descrição genérica.', tier: 1 },
            { id: 'art_2', nome: 'Finta improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'art_3', nome: 'Aprimorador treinado', desc: 'Descrição genérica.', tier: 2 },
            { id: 'art_4', nome: 'Inventário organizado', desc: 'Descrição genérica.', tier: 2 },
            { id: 'art_5', nome: 'Tática de guerrilha', desc: 'Descrição genérica.', tier: 3 },
        ],

        },
        auras: {
            reforco: [
            { id: 'ref_1', nome: 'Parrudo', desc: 'Descrição genérica.', tier: 1 },
            { id: 'ref_2', nome: 'Coagular', desc: 'Descrição genérica.', tier: 2 },
            { id: 'ref_3', nome: 'Força Máxima', desc: 'Descrição genérica.', tier: 3 },
        ],

        emissao: [
            { id: 'emi_1', nome: 'Explosão Mágica', desc: 'Descrição genérica.', tier: 1 },
            { id: 'emi_2', nome: 'Devastar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'emi_3', nome: 'Raio mágico', desc: 'Descrição genérica.', tier: 3 },
        ],

        transformacao: [
            { id: 'tra_1', nome: 'Adrenalina', desc: 'Descrição genérica.', tier: 1 },
            { id: 'tra_2', nome: 'Agilizar Tempo', desc: 'Descrição genérica.', tier: 2 },
            { id: 'tra_3', nome: 'Agilizar Tempo II', desc: 'Descrição genérica.', tier: 3 },
        ],

        materializacao: [
            { id: 'mat_1', nome: 'Familiar', desc: 'Descrição genérica.', tier: 1 },
            { id: 'mat_2', nome: 'Arma Mágica', desc: 'Descrição genérica.', tier: 2 },
            { id: 'mat_3', nome: 'Sutura', desc: 'Descrição genérica.', tier: 3 },
        ],

        manipulacao: [
            { id: 'man_1', nome: 'Ás na manga', desc: 'Descrição genérica.', tier: 1 },
            { id: 'man_2', nome: 'Especializado', desc: 'Descrição genérica.', tier: 2 },
            { id: 'man_3', nome: 'Segunda chance', desc: 'Descrição genérica.', tier: 3 },
        ],
        },
        trilhas: {
            envoltura: [
            { id: 'env_1', nome: 'Troca', desc: 'Descrição genérica.', tier: 1 },
            { id: 'env_2', nome: 'Barganha Insana', desc: 'Descrição genérica.', tier: 2 },
            { id: 'env_3', nome: 'Absorsão Vital', desc: 'Descrição genérica.', tier: 3 },
        ],

        expansao: [
            { id: 'exp_1', nome: 'Dash', desc: 'Descrição genérica.', tier: 1 },
            { id: 'exp_2', nome: 'Ripostar', desc: 'Descrição genérica.', tier: 2 },
            { id: 'exp_3', nome: 'Correção', desc: 'Descrição genérica.', tier: 3 },
        ],

        liberacao: [
            { id: 'lib_1', nome: 'Calmo e Preciso', desc: 'Descrição genérica.', tier: 1 },
            { id: 'lib_2', nome: 'Respiro', desc: 'Descrição genérica.', tier: 2 },
            { id: 'lib_3', nome: 'Começar com Tudo', desc: 'Descrição genérica.', tier: 3 },
        ],
    }
};

// --- ESTADO GLOBAL ---
let pontosGastos = 0;
let habilidadesSelecionadas = new Set(); // Guarda os IDs das habilidades pegas

// --- ELEMENTOS DOM ---
const elNivel = document.getElementById('nivel');
const elPontosTxt = document.getElementById('pontos-txt');
const elPontosMax = document.getElementById('pontos-max');
const controles = document.querySelectorAll('select, input');

// --- FUNÇÃO PRINCIPAL: CALCULAR E RENDERIZAR ---
function atualizarTudo() {
const nivel = parseInt(elNivel.value) || 1;

// 1. Calcula Pontos Disponíveis (Exemplo: 1 ponto por nível)
// Você pode mudar essa fórmula.
const totalPontosPermitidos = Math.ceil(nivel * 3/4 - 1)-
    (nivel < 3 ? 0 
    : nivel < 6 ? 1 
    : nivel < 11 ? 2 
    : 3); 

elPontosMax.textContent = totalPontosPermitidos;
elPontosTxt.textContent = totalPontosPermitidos - pontosGastos;

// 2. Define Tier Máximo baseado no nível
let maxTier = 1;
if (nivel >= 13) maxTier = 3;
else if (nivel >= 5) maxTier = 2;

// 3. Renderiza as 3 Colunas
renderizarColuna('lista-aura', dadosHabilidades.auras[document.getElementById('aura').value], maxTier, totalPontosPermitidos);
renderizarColuna('lista-classe', dadosHabilidades.classes[document.getElementById('classe').value], maxTier, totalPontosPermitidos);
renderizarColuna('lista-trilha', dadosHabilidades.trilhas[document.getElementById('trilha').value], maxTier, totalPontosPermitidos);
}

// --- RENDERIZADOR DE COLUNA ---
function renderizarColuna(containerId, listaHabilidades, maxTier, totalPontos) {
const container = document.getElementById(containerId);
container.innerHTML = ''; // Limpa a coluna

if (!listaHabilidades) return;

listaHabilidades.forEach(habilidade => {
    const btn = document.createElement('button');
    btn.className = 'btn-habilidade';
    
    // Verifica se está selecionado
    const isSelecionado = habilidadesSelecionadas.has(habilidade.id);
    
    // Verifica se está bloqueado por nível
    if (habilidade.tier > maxTier) {
        btn.classList.add('estado-bloqueado');
        btn.textContent = `🔒 ${habilidade.nome} (Nível ${habilidade.tier * 8 - 12})`;
        btn.disabled = true;
    } else {
        // Configura o Estado Inicial Visual
        if (isSelecionado) {
            btn.classList.add('estado-selecionado');
            btn.textContent = habilidade.nome;
            btn.dataset.state = 2; // Estado 2: Selecionado
        } else {
            btn.classList.add('estado-padrao');
            btn.textContent = `${habilidade.nome}`;
            btn.dataset.state = 0; // Estado 0: Neutro
        }

        // --- LÓGICA DO CLIQUE (O LOOP DE 3 ESTADOS) ---
        btn.onclick = () => {
            const estadoAtual = parseInt(btn.dataset.state);
            const pontosDisponiveis = totalPontos - pontosGastos;

            // Reset visual
            btn.classList.remove('estado-padrao', 'estado-info', 'estado-selecionado');

            // MÁQUINA DE ESTADOS
            if (estadoAtual === 0) {
                // 0 -> 1: Mostrar Info
                btn.dataset.state = 1;
                btn.textContent = habilidade.desc;
                btn.classList.add('estado-info');
            } 
            else if (estadoAtual === 1) {
                // 1 -> 2: Tentar Selecionar
                if (pontosDisponiveis > 0) {
                    btn.dataset.state = 2;
                    btn.textContent = habilidade.nome;
                    btn.classList.add('estado-selecionado');
                    
                    // Lógica de dados
                    pontosGastos++;
                    habilidadesSelecionadas.add(habilidade.id);
                    atualizarDisplayPontos(totalPontos);
                } else {
                    alert("Você não tem pontos suficientes!");
                    // Volta para estado 0
                    btn.dataset.state = 0;
                    btn.textContent = `${habilidade.nome} (T${habilidade.tier})`;
                    btn.classList.add('estado-padrao');
                }
            } 
            else if (estadoAtual === 2) {
                // 2 -> 0: Deselecionar
                btn.dataset.state = 0;
                btn.textContent = `${habilidade.nome} (T${habilidade.tier})`;
                btn.classList.add('estado-padrao');

                // Lógica de dados
                pontosGastos--;
                habilidadesSelecionadas.delete(habilidade.id);
                atualizarDisplayPontos(totalPontos);
            }
        };
    }

    container.appendChild(btn);
});
}

function atualizarDisplayPontos(total) {
elPontosTxt.textContent = total - pontosGastos;
}

// --- EVENTOS ---
// Se mudar Nível, Aura, Classe ou Trilha, re-renderiza tudo.
// CUIDADO: Ao mudar classe/aura, se você tiver habilidades selecionadas da classe antiga,
// elas continuarão contando nos pontos gastos mas sumirão da tela.
// O ideal seria resetar os pontos ao mudar de classe. Vou adicionar isso.

controles.forEach(ctrl => {
ctrl.addEventListener('change', (e) => {
    // Se mudou algo que altera as listas (Classe/Aura/Trilha), resetamos as escolhas para evitar bugs
    if (e.target.id !== 'nivel') {
        pontosGastos = 0;
        habilidadesSelecionadas.clear();
    }
    atualizarTudo();
});
ctrl.addEventListener('input', atualizarTudo); // Para o number input
});

// Início
atualizarTudo();