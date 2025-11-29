//Sistema de calculo de pontos disponiveis
var displayPontos = document.getElementById("Pontos_disponiveis")
var atributo = document.querySelectorAll(".atributo")
var pontosTotais = document.getElementById("nivel")

function calcularSoma() {
    var somaTotal = 0;
    var pontosTotais = parseInt(document.getElementById("nivel").value)

    atributo.forEach(input => {
        somaTotal += parseFloat(input.value);
    });
    var result =  pontosTotais + 4 - somaTotal
    displayPontos.textContent = result;
}

atributo.forEach(input => {
    input.addEventListener("input",calcularSoma)
})

pontosTotais.addEventListener("input", calcularSoma)

calcularSoma()





//Sistema de habilidades por classe aura e trilha
const campoNivel = document.getElementById('nivel');
const campoClasse = document.getElementById('classe-personagem');
const containerSelects = document.getElementById('container-selects');
const campoAura = document.getElementById('aura');
const campoTrilha = document.getElementById('trilha');

// --- ESTRUTURA DE DADOS PARA HABILIDADES DINÂMICAS ---
const habilidadesPorClasse = {
    mago_elemntental: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta Improvisada(C)', tier: 1 },
        { valor: 'intensificar', texto: 'Intensificar(C)', tier: 2 },
        { valor: 'ciclo-arcano', texto: 'Ciclo arcano(C)', tier: 2 },
        { valor: 'aniquilacao', texto: 'Aniquilação(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    mistico: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta Improvisada(C)', tier: 1 },
        { valor: 'espaço-extra', texto: 'Espaço Extra(C)', tier: 2 },
        { valor: 'agilizar-circulo', texto: 'Agilizar Círculo(C)', tier: 2 },
        { valor: 'gambiarra-do-mistico', texto: 'Gambiarra do Místico(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    mago_de_fronte: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'initerrupto', texto: 'Initerrupto(C)', tier: 2 },
        { valor: 'precisao', texto: 'Precisão(C)', tier: 2 },
        { valor: 'conjuracao-livre', texto: 'Conjuração Livre(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    fimbulwinter: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta Improvisada(C)', tier: 1 },
        { valor: 'resistencia-termica', texto: 'Resistência térmica(C)', tier: 2 },
        { valor: 'esfriar', texto: 'Esfriar(C)', tier: 2 },
        { valor: 'fimbulwinter', texto: 'Fimbulwinter(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    feengari: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'lua-artificial', texto: 'Lua artificial(C)', tier: 2 },
        { valor: 'ascensao-lunar', texto: 'Ascensão Lunar(C)', tier: 2 },
        { valor: 'transmutacao-lunar', texto: 'Transmutação Lunar(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    ascendente: [
        { valor: 'atalho-do-mago', texto: 'Atalho do Mago(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'acalmar', texto: 'Acalmar(C)', tier: 2 },
        { valor: 'consciencia', texto: 'Consciência(C)', tier: 2 },
        { valor: 'harmonia', texto: 'Harmonia(C)', tier: 3 },
        { valor: 'aprender-magia', texto: 'Aprender Magia(C)', tier: 1 },
    ],
    espadachim: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'ataque-do-trapaceiro', texto: 'Ataque do trapaceiro(C)', tier: 2 },
        { valor: 'finta-de-guerra', texto: 'Finta de guerra(C)', tier: 2 },
        { valor: 'ataque-do-trapaceiro-ii-passivo', texto: 'Ataque do trapaceiro II(passivo)(C)', tier: 3 },
    ],
    arma_de_corda: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'prender', texto: 'Prender(C)', tier: 2 },
        { valor: 'puxar', texto: 'Puxar(C)', tier: 2 },
        { valor: 'zona-segura', texto: 'Zona segura(C)', tier: 3 },
    ],
    nordico: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'iniciador', texto: 'Iniciador(C)', tier: 2 },
        { valor: 'maquina-de-matar', texto: 'Máquina de Matar(C)', tier: 2 },
        { valor: 'aniquilador-em-area', texto: 'Aniquilador em área(C)', tier: 3 },
    ],
    lanceiro: [
        { valor: 'precisao', texto: 'Precisão(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'arremesso', texto: 'Arremesso(C)', tier: 2 },
        { valor: 'calibrado', texto: 'Calibrado(C)', tier: 2 },
        { valor: 'estocada', texto: 'Estocada(C)', tier: 3 },
    ],
    atirador_de_elite: [
        { valor: 'calculo-exato-ii', texto: 'Cálculo exato II(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'disparo-rapido', texto: 'Disparo rápido(C)', tier: 2 },
        { valor: 'concentracao', texto: 'Concentração(C)', tier: 2 },
        { valor: 'chuva-de-projeteis', texto: 'Chuva de projeteis(C)', tier: 3 },
    ],
    assassino: [
        { valor: 'calculo-exato-i', texto: 'Cálculo exato I(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'apunhalar', texto: 'Apunhalar(C)', tier: 2 },
        { valor: 'furtividade-real', texto: 'Furtividade real(C)', tier: 2 },
        { valor: 'finalizador', texto: 'Finalizador(C)', tier: 3 },
    ],
    gladiador: [
        { valor: 'calculo-exato-i', texto: 'Cálculo exato I(C)', tier: 1 },
        { valor: 'finta', texto: 'Finta(C)', tier: 1 },
        { valor: 'berzerk', texto: 'Berzerk(C)', tier: 2 },
        { valor: 'quebracascos', texto: 'Quebracascos(C)', tier: 2 },
        { valor: 'ate-a-morte', texto: 'Até a morte(C)', tier: 3 },
    ],
    charlatao: [
        { valor: 'especialista', texto: 'Especialista(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'lingua-de-prata', texto: 'Lingua de prata(C)', tier: 2 },
        { valor: 'marca', texto: 'Marca(C)', tier: 2 },
        { valor: 'lider-tatico', texto: 'Lider tático(C)', tier: 3 },
    ],
    alquimista: [
        { valor: 'especialista', texto: 'Especialista(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'medico', texto: 'Médico(C)', tier: 2 },
        { valor: 'maos-rapidas', texto: 'Mãos rápidas(C)', tier: 2 },
        { valor: 'reanimacao', texto: 'Reanimação(C)', tier: 3 },
    ],
    artifice: [
        { valor: 'especialista', texto: 'Especialista(C)', tier: 1 },
        { valor: 'finta-improvisada', texto: 'Finta improvisada(C)', tier: 1 },
        { valor: 'aprimorador-treinado', texto: 'Aprimorador treinado(C)', tier: 2 },
        { valor: 'inventario-organizado', texto: 'Inventário organizado(C)', tier: 2 },
        { valor: 'tatica-de-guerrilha', texto: 'Tática de guerrilha(C)', tier: 3 },
    ],
};

const habilidadesPorAura = {
    reforco: [
        { valor: 'parrudo', texto: 'Parrudo(A)', tier: 1 },
        { valor: 'coagular', texto: 'Coagular(A)', tier: 2 },
        { valor: 'forca-maxima', texto: 'Força Máxima(A)', tier: 3 },
    ],    emissao: [
        { valor: 'explosao-magica', texto: 'Explosão Mágica(A)', tier: 1 },
        { valor: 'desvastar', texto: 'Devastar(A)', tier: 2 },
        { valor: 'raio-magico', texto: 'Raio mágico(A)', tier: 3 }
    ],
    transformacao: [
        { valor: 'flecha-precisa', texto: 'Adrenalina(A)', tier: 1 },
        { valor: 'agilizar-tempo', texto: 'Agilizar Tempo(A)', tier: 2 },
        { valor: 'agilizar-tempo-ii', texto: 'Agilizar Tempo II(A)', tier: 3 }
    ],
    materializacao: [
        { valor: 'familiar', texto: 'Familiar(A)', tier: 1 },
        { valor: 'arma-magica', texto: 'Arma Mágica(A)', tier: 2 },
        { valor: 'sutura', texto: 'Sutura(A)', tier: 3 }
    ],
    manipulacao: [
        { valor: 'as-na-manga', texto: 'Ás na manga(A)', tier: 1 },
        { valor: 'especializado', texto: 'Especializado(A)', tier: 2 },
        { valor: 'segunda-chance', texto: 'Segunda chance(A)', tier: 3 }
    ]
};

const habilidadesPorTrilha = {
    envoltura: [
        { valor: 'troca', texto: 'Troca(T)', tier: 1 },
        { valor: 'barganha-insana', texto: 'Barganha Insana(T)', tier: 2 },
        { valor: 'absorcao-vital', texto: 'Absorsão Vital(T)', tier: 3 },
    ],
    expansao: [
        { valor: 'dash', texto: 'Dash(T)', tier: 1 },
        { valor: 'ripostar', texto: 'Ripostar(T)', tier: 2 },
        { valor: 'correcao', texto: 'Correção(T)', tier: 3 }
    ],
    liberacao: [
        { valor: 'calmo-e-preciso', texto: 'Calmo e Preciso(T)', tier: 1 },
        { valor: 'respiro', texto: 'Respiro(T)', tier: 2 },
        { valor: 'comecar-com-tudo', texto: 'Começar com Tudo(T)', tier: 3 }
    ]
};

// CONSTANTE PARA O BÔNUS
const VALOR_BONUS_ATAQUE = 'bonus-ataque';
const OPCAO_BONUS_ATAQUE = { valor: VALOR_BONUS_ATAQUE, texto: 'Bônus de Ataque', tier: 1, maxRanks: 5, isBonus: true };

        // ATUALIZAÇÃO: Bônus agora ligados à AURA, não à CLASSE
const BONUS_ESPECIFICO_POR_AURA = {
    reforco:        { valor: 'bonus-vida', texto: 'Bônus de Vida', tier: 1, maxRanks: 3, isBonus: true },
    emissao:        { valor: 'bonus-mana', texto: 'Bônus de Mana', tier: 1, maxRanks: 3, isBonus: true },
    transformacao:  { valor: 'bonus-velocidade', texto: 'Bônus de Velocidade', tier: 1, maxRanks: 3, isBonus: true },
    materializacao: { valor: 'atributo-bonus', texto: 'Bônus de Atributos', tier: 1, maxRanks: 3, isBonus: true },
    manipulacao:    { valor: 'bonus-geral', texto: 'Bônus Geral', tier: 1, maxRanks: 3, isBonus: true },
};

function toRomano(num) {
    const romanos = ["I", "II", "III", "IV", "V", "VI", "VII"];
    return romanos[num - 1] || num;
}

function getOpcoesAtuais() {
    const classeSelecionada = campoClasse.value;
    const auraSelecionada = campoAura.value;
    const trilhaSelecionada = campoTrilha.value;
    const nivelPersonagem = parseInt(campoNivel.value) || 0;

    let maxTierAcessivel = 1;
    if (nivelPersonagem >= 13) maxTierAcessivel = 3;
    else if (nivelPersonagem >= 5) maxTierAcessivel = 2;

    const opcoesBase = [{ valor: '', texto: '-- Escolha uma habilidade --' }];
    const opcoesDaClasse = habilidadesPorClasse[classeSelecionada] || [];
    const opcoesDaAura = habilidadesPorAura[auraSelecionada] || [];
    const opcoesDaTrilha = habilidadesPorTrilha[trilhaSelecionada] || [];

    const opcoesFiltradas = [
        ...opcoesDaAura.filter(h => h.tier <= maxTierAcessivel),
        ...opcoesDaTrilha.filter(h => h.tier <= maxTierAcessivel),
        ...opcoesDaClasse.filter(h => h.tier <= maxTierAcessivel)
    ];

    // ALTERAÇÃO: Busca o bônus usando a AURA
    const bonusEspecifico = BONUS_ESPECIFICO_POR_AURA[auraSelecionada];

    return [...opcoesBase, ...opcoesFiltradas, OPCAO_BONUS_ATAQUE, bonusEspecifico].filter(item => item);
}

function getValoresSelecionados() {
    const selects = containerSelects.querySelectorAll('select');
    const contagem = {};
    const valoresUsados = new Set();
    selects.forEach(s => {
        const val = s.value;
        if (val) {
            valoresUsados.add(val);
            contagem[val] = (contagem[val] || 0) + 1;
        }
    });
    return { valoresUsados, contagem };
}

function calcularRankParaEsteSelect(selectAlvo, valorBonusProcurado) {
    const todosSelects = Array.from(containerSelects.querySelectorAll('select'));
    let contador = 0;
    for (let select of todosSelects) {
        if (select.value === valorBonusProcurado) contador++;
        if (select === selectAlvo) return contador;
    }
    return 0;
}

function popularUmSelect(selectElement) {
    const nivelPersonagem = parseInt(campoNivel.value) || 0;
    const opcoesGlobais = getOpcoesAtuais();
    const { valoresUsados, contagem } = getValoresSelecionados();
    const valorAtual = selectElement.value;

    let limiteBonusPermitido = 2;
    if (nivelPersonagem >= 13) limiteBonusPermitido = 5;
    else if (nivelPersonagem >= 5) limiteBonusPermitido = 4;

    selectElement.innerHTML = '';

    opcoesGlobais.forEach(opt => {
        const optionElement = document.createElement('option');
        optionElement.value = opt.valor;

        if (opt.isBonus) {
            const totalDesteBonus = contagem[opt.valor] || 0;
            //pegando uma variavel especifica dessa funcao e jogando na outra
            bonusAtaque(totalDesteBonus)
            //de volta a funcao normalmente
            if (valorAtual === opt.valor) {
                const rank = calcularRankParaEsteSelect(selectElement, opt.valor);
                optionElement.textContent = `${opt.texto} ${toRomano(rank)}`;
            } else {
                const proximoRank = totalDesteBonus + 1;
                optionElement.textContent = `${opt.texto} (Rank ${toRomano(proximoRank)})`;
            }
            
            let limiteMaximo = opt.maxRanks;
            if (opt.valor === VALOR_BONUS_ATAQUE) {
                limiteMaximo = Math.min(opt.maxRanks, limiteBonusPermitido);
            }

            if (totalDesteBonus >= limiteMaximo && valorAtual !== opt.valor) {
                optionElement.disabled = true;
                if (opt.valor === VALOR_BONUS_ATAQUE && limiteBonusPermitido < 5) {
                    optionElement.textContent += ` (Máx ${limiteBonusPermitido} neste nível)`;
                } else {
                    optionElement.textContent += ` (Máx ${limiteMaximo} atingido)`;
                }
            }
        } else {
            optionElement.textContent = opt.texto;
            const estaUsadoPorOutro = valoresUsados.has(opt.valor) && opt.valor !== valorAtual;
            if (estaUsadoPorOutro && opt.valor !== '') {
                optionElement.disabled = true;
                optionElement.textContent += ' (Já obtido)';
            }
        }
        selectElement.appendChild(optionElement);
    });
    selectElement.value = valorAtual;
    
    
}
//Funções de infraestrutura
function criarSelectParaNivel(numeroNivel) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'select-wrapper';
    const novoLabel = document.createElement('label');
    novoLabel.textContent = `Nível ${numeroNivel}:`;
    const novoSelect = document.createElement('select');
    novoSelect.id = `select-nivel-${numeroNivel}`;
    wrapperDiv.appendChild(novoLabel);
    wrapperDiv.appendChild(novoSelect);
    popularUmSelect(novoSelect);
    return wrapperDiv;
}

function atualizarSelectsPorNivel() {
    const nivelDesejado = parseInt(campoNivel.value) || 0;
    const selectsAtuais = containerSelects.querySelectorAll('.select-wrapper').length;
    if (nivelDesejado > selectsAtuais) {
        for (let i = selectsAtuais + 1; i <= nivelDesejado; i++) {
            const novoSelect = criarSelectParaNivel(i);
            containerSelects.appendChild(novoSelect);
        }
    } else if (nivelDesejado < selectsAtuais) {
        while (containerSelects.children.length > nivelDesejado) {
            containerSelects.removeChild(containerSelects.lastChild);
        }
    }
}

function atualizarOpcoesDeTodosOsSelects() {
    const todosOsSelects = containerSelects.querySelectorAll('select');
    todosOsSelects.forEach(popularUmSelect);
}

function onNivelChange() {
    atualizarOpcoesDeTodosOsSelects();
    atualizarSelectsPorNivel();
}


//Conclusao do sistema de escolha de habilidades
campoNivel.addEventListener('input', onNivelChange);
campoClasse.addEventListener('change', onNivelChange);
campoAura.addEventListener('change', onNivelChange);
campoTrilha.addEventListener('change', onNivelChange);

onNivelChange();


const Vigor = document.getElementById("vigor")
const Intelecto = document.getElementById("intelecto")
const Presenca = document.getElementById("presenca")
const Destreza = document.getElementById("destreza")
const Forca = document.getElementById("forca")
const Ataque = document.getElementById("ataque")

function calculoStatus() {
    const stat_Vida = document.getElementById("vida")
    const Vigor = parseInt(document.getElementById("vigor").value)
    const Vida = 20 + Vigor * 15
    stat_Vida.value = Vida

    const stat_Mana = document.getElementById("mana")
    const Intelecto = parseInt(document.getElementById("intelecto").value)
    const Mana = 15 + Intelecto * 15
    stat_Mana.value = Mana

    const stat_Foco = document.getElementById("foco")
    const Presenca = parseInt(document.getElementById("presenca").value)
    const Foco = 6 + Presenca * 5
    stat_Foco.value = Foco

    const stat_Carga = document.getElementById("carga")
    const Forca = parseInt(document.getElementById("forca").value)
    const Carga = 4 + Forca * 4
    stat_Carga.value = Carga

    const stat_Movimento = document.getElementById("movimento")
    const Destreza = parseInt(document.getElementById("destreza").value)
    const Movimento = 4 + Destreza * 4
    stat_Movimento.value = Movimento
}

atributo.forEach(input => {
    input.addEventListener("input",calculoStatus)
})
calculoStatus()


function bonusAtaque() {
    
    // 1. PRIMEIRO PASSO: Contar quantos "Bônus de Ataque" estão selecionados na tela
    let contadorBonus = 0;
    // Pega todos os selects dentro do container
    const todosSelects = document.getElementById('container-selects').querySelectorAll('select');
    
    todosSelects.forEach(select => {
        // Verifica se o valor deste select é o bônus de ataque
        if (select.value === 'bonus-ataque') {
            contadorBonus++;
        }
    });

    // Agora 'contadorBonus' é o número real (ex: 0, 1, 2, 3...)
    // Não precisa de parseInt pois o contador já é numérico.
    const stat_Ataque = contadorBonus; 

    // 2. SEGUNDO PASSO: Pegar a Classe e os Grupos
    // (Adicionei .value aqui para garantir que pegamos o texto da classe)
    const elClasse = document.getElementById("classe-personagem");
    if (!elClasse) return; // Segurança caso o elemento não exista
    const Classe = elClasse.value;

    // ATENÇÃO AOS NOMES: Eles devem ser IGUAIS aos values do seu HTML
    // Notei que você usou "mago_elemental" aqui, mas no HTML anterior estava "mago_elemntental" (com erro de digitação).
    // Certifique-se que estão idênticos.
    const Arcanista = ["mistico", "mago_elemental", "mago_de_fronte", "fimbulwinter", "feengari", "ascendente"];
    const Combatente = ["espadachim", "arma_de_corda", "nordico", "lanceiro"];
    const Especialista = ["atirador_de_elite", "assassino", "gladiador", "charlatao", "alquimista", "artifice"];

    // Elemento onde vamos escrever o resultado (assumindo que existe um input com id="Ataque")
    const elDisplayAtaque = document.getElementById("ataque"); 


    let Ataque_B = 0;

    // 3. TERCEIRO PASSO: Calcular baseado no grupo
    if (Arcanista.includes(Classe)) {
        Ataque_B = stat_Ataque * 4;
    } else if (Combatente.includes(Classe)) {
        Ataque_B = stat_Ataque * 3;
    } else if (Especialista.includes(Classe)) {
        Ataque_B = stat_Ataque * 3;
    }

    // 4. QUARTO PASSO: Exibir o resultado
    elDisplayAtaque.value = Ataque_B;
}

// O Event Listener fica super simples agora
containerSelects.addEventListener('change', function(event) {
    if (event.target.tagName === 'SELECT') {
        atualizarOpcoesDeTodosOsSelects();
        
        // Chamamos a função sem passar nada, e ela funciona!
        bonusAtaque(); 
    }
});