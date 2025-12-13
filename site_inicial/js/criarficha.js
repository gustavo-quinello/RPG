
// --- DADOS (Mesma estrutura anterior, você pode expandir) ---
const dadosHabilidades = {
    classes: {
        mago_elemental: [
            { id: 'me_2', nome: 'Atalho do Mago', desc: 'Descrição genérica.', tier: 1 },
            { id: 'me_3', nome: 'Finta Improvisada', desc: 'Descrição genérica.', tier: 1 },
            { id: 'me_4', nome: 'Afinidade Elemental', desc: 'Afinidade Elemental - [Passivo] - [sem custo] - Sempre que conjurar uma magia elemental, recebe +1d10 de dano adicional do mesmo elemento. Nível 8: aumenta para +2d10. Nível 12: aumenta para +3d10. Nível 16: aumenta para +4d10.', tier: 2 },
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

const gruposDeClasse = {
    arcanista: ["mago_elemental", "mistico", "mago_de_fronte", "fimbulwinter", "feengari", "ascendente"],
    combatente: ["espadachim", "arma_de_corda", "nordico", "lanceiro"],
    especialista: ["atirador_de_elite", "assassino", "gladiador", "charlatao", "alquimista", "artifice"]
};

const dadosAfinidade = {
    auras: {
        reforco: { nome: "Mestre da Fortitude", desc: "Aumenta o multiplicador de vida por nível." },
        emissao: { nome: "Canalizador Puro", desc: "Aumenta o multiplicador de Mana por nível." },
        transformacao: { nome: "Passo Fluído", desc: "Aumenta o multiplicador de Movimento por nível." },
        materializacao: { nome: "Centro Mental", desc: "Aumenta o multiplicador de Foco por nível." },
        manipulacao: { nome: "Harmonia Elementar", desc: "Aumenta levemente todos os multiplicadores principais." },
    },
   grupos_classes: {
        arcanista: {id:"arcanista", nome: "Despertar Arcano", desc: "Ganha magias extras e reduz o tempo da primeira conjuração." },
        combatente: { nome: "Veterano de Batalha", desc: "Sua defesa decai menos a cada ataque recebido." },
        especialista: { nome: "Perito Especial", desc: "Concede dados de vantagem em testes não ofensivos." }
    },
    trilhas: {
        envoltura: { nome: "Fluxo Eficiente", desc: "Reduz o gasto de Mana passiva." },
        expansao: { nome: "Juggernaut", desc: "Aumenta a Classe de Armadura." },
        liberacao: { nome: "Arsenal Expandido", desc: "Permite carregar mais utilitários na bolsa." }
    }
};

// --- NOVOS DADOS: MAGIAS ---
// Para colocar uma informacao do tipo TOOLTIPS basta seguir esse padrao: (...)<span class="termo-destaque" data-tooltip="Lorem\n->esse sinal serve para pular linha\ndigite o que quiser">Valor que aparece na caixa e que possui a interacao</span>(...)
const dadosMagias = {
    genericas: [
        { id: 'mag_ar_1', tier: 1, nome: 'Manipulação Cinética', desc: 'Permite controlar a força e o movimento de objetos, criaturas ou do próprio corpo. O usuário pode levitar, empurrar ou puxar alvos leves a médios, inclusive se erguendo do chão. Criaturas mais resistentes podem tentar resistir ao efeito. Gasta uma quantidade moderada de mana e funciona a médio alcance.' },
        { id: 'mag_terra_1', tier: 1, nome: 'Bala de Pedra', desc: 'Comprime e dispara uma pedra em alta velocidade contra um único alvo, causando dano contundente e perfurante ao impacto. Gasta uma pequena quantidade de mana e funciona a longo alcance.' },
        { id: 'mag_fogo_1', tier: 1, nome: 'Bola de Fogo', desc: 'Dispara uma esfera ígnea que causa dano de fogo ao atingir o alvo e o deixa incendiado. Requer uma quantidade moderada de mana e tem alcance médio.' },
        { id: 'mag_agua_1', tier: 1, nome: `Criação d'água`, desc: 'Gera um bolsão de água que pode ser manipulado à distância. As magias subsequentes de água consomem o conteúdo do bolsão. Gasta uma quantidade pequena de mana e o alcance é médio.' },
        
        { id: 'mag_ar_2', tier: 2, nome: 'Corte de Ar', desc: 'O usuário comprime o ar e o lança como uma lâmina invisível em linha reta, atingindo um alvo em alcance médio. O ataque causa dano cortante significativo e, caso o alvo falhe em resistir, ele fica incapaz de reagir ao próximo ataque recebido. Consome bastante mana.' },
        { id: 'mag_terra_2', tier: 2, nome: 'Estalagmite', desc: 'Faz surgir uma lança de pedra do solo, causando dano em área ao emergir. Gasta uma quantidade moderada de mana e tem alcance médio.' },
        { id: 'mag_fogo_2', tier: 2, nome: 'Labareda', desc: 'Uma coluna de fogo irrompe do solo, causando dano de fogo e deixando os alvos incendiados. Gasta uma quantidade moderada de mana e tem alcance médio.' },
        { id: 'mag_agua_2', tier: 2, nome: `Chicote d'água`, desc: 'Dispara um golpe rápido de água que causa dano em um alvo em alcance curto. Gasta uma quantidade moderada de mana e consome unidades de água do bolsão.' },
        
        { id: 'mag_ar_3', tier: 3, nome: 'Vento Dual', desc: 'Conjura duas correntes de ar opostas que criam vórtices controlados em uma área ampla. Esses vórtices podem puxar ou empurrar criaturas na direção escolhida, deslocando múltiplos alvos ao mesmo tempo. Criaturas podem tentar resistir à força do vento. Gasta muita mana e possui alcance longo.' },
        { id: 'mag_terra_3', tier: 3, nome: 'Imobilização', desc: 'Faz o solo agarrar um alvo, imobilizando-o por vários turnos. O alvo pode tentar se libertar, sofrendo dano se falhar. Gasta uma quantidade significativa de mana e tem alcance médio.' },
        { id: 'mag_fogo_3', tier: 3, nome: 'Parede de Fogo', desc: 'Ergue uma parede de fogo que bloqueia projéteis e causa dano de fogo a quem atravessar ou permanecer próxima. Gasta uma grande quantidade de mana e tem alcance médio.' },
        { id: 'mag_agua_3', tier: 3, nome: 'Nuvem de Vapor', desc: 'Cria uma área de vapor denso, permitindo lançar magias de água de qualquer ponto dentro da área. Gasta uma quantidade significativa de mana e consome unidades de água do bolsão.' },
        
        { id: 'mag_ar_4', tier: 4, nome: 'Velocidade Máxima', desc: 'Concede a si mesmo ou a um aliado em alcance curto um impulso extremo de movimento. A velocidade e a capacidade de esquiva do alvo aumentam em 50% por alguns turnos, permitindo deslocamentos rápidos e ações evasivas quase instantâneas. Consome muita mana.' },
        { id: 'mag_terra_4', tier: 4, nome: 'Nuvem de Fumaça', desc: 'Cria uma nuvem de fumaça que reduz a visão e torna os ataques à distância mais difíceis. Gasta uma grande quantidade de mana e tem alcance médio.' },
        { id: 'mag_fogo_4', tier: 4, nome: 'Imbuir', desc: 'Encanta uma arma corpo a corpo, fazendo com que cause dano adicional de fogo em cada golpe. Gasta uma grande quantidade de mana e tem alcance curto.' },
        { id: 'mag_agua_4', tier: 4, nome: 'Corte de Água', desc: 'Projeta uma lâmina de água de alta pressão que causa dano em um único alvo ou em uma área em cone. Gasta uma quantidade significativa de mana e consome unidades de água do bolsão.' },
       
        { id: 'mag_ar_5', tier: 5, nome: 'Barreira de Ar', desc: 'Ergue uma poderosa parede de vento comprimido em alcance médio que bloqueia projéteis vindos de fora. A barreira permanece ativa por várias rodadas e permite que ataques disparados de dentro atravessem livremente, funcionando como uma defesa direcional estratégica. Gasta uma quantidade massiva de mana.' },       
        { id: 'mag_terra_5', tier: 5, nome: 'Terremoto', desc: 'Faz o solo tremer, derrubando criaturas e afetando estruturas próximas. Gasta uma grande quantidade de mana e tem alcance grande, afetando uma vasta área.' },
        { id: 'mag_fogo_5', tier: 5, nome: 'Chama Incansável', desc: 'Reativa queimaduras causadas anteriormente, causando dano adicional e renovando o efeito de queimadura. Gasta uma grande quantidade de mana e tem alcance médio.' },
        { id: 'mag_agua_5', tier: 5, nome: 'Prisão Aquática', desc: 'Cria um domo de água que bloqueia a visão e projéteis. Gasta uma grande quantidade de mana e consome unidades de água do bolsão.' },
    ],
    fimbulwinter: [
        { id: 'fim_1', tier: 1, nome: 'Globo de Neve', desc: 'Congela uma grande área do terreno, transformando o local em um campo permanentemente gelado enquanto o efeito durar. Dentro do Globo de Neve, todas as magias do Fimbulwinter exigem significativamente menos mana para serem conjuradas.' },
        { id: 'fim_2', tier: 1, nome: 'Lâmina de Gelo', desc: 'Cria várias lâminas afiadas de gelo que podem ser atiradas rapidamente. As lâminas podem atingir um único alvo ou serem distribuídas entre vários inimigos, causando dano cortante a cada impacto. Gasta pouca mana e funciona a curto ou médio alcance.' },
        { id: 'fim_3', tier: 2, nome: 'Resfriar', desc: 'Imbuí um item adjacente com frio extremo. Criaturas que não dominam o poder do Fimbulwinter sofrem dano contínuo ao utilizar o item e têm grande dificuldade em executar ações enquanto o efeito persistir. Gasta uma quantidade moderada de mana e exige contato próximo.' },
        { id: 'fim_4', tier: 3, nome: 'Prender no Gelo', desc: 'Após um inimigo ser afetado por uma magia de Fimbulwinter, você tenta congelá-lo parcialmente. O frio reduz progressivamente sua capacidade de agir, podendo levá-lo à completa imobilização caso permaneça preso por tempo prolongado. O alvo pode tentar resistir ou receber ajuda de aliados para se libertar. Gasta muita mana e funciona a médio alcance.' },
        { id: 'fim_5', tier: 3, nome: 'Restauração Gélida', desc: 'Utiliza o frio para selar ferimentos, interromper sangramentos e reduzir inflamações, restaurando parte da vitalidade do usuário. Não pode ser utilizada se o conjurador estiver inconsciente ou à beira da morte. Gasta muita mana e afeta apenas o próprio usuário.' },
        { id: 'fim_6', tier: 4, nome: 'Raio de Gelo', desc: 'Dispara um feixe concentrado de energia gélida em alcance longo, causando dano elevado e congelamento interno. Se o alvo estiver dentro de um Globo de Neve, o efeito é intensificado, causando mais dano e prejudicando temporariamente suas ações. Gasta uma grande quantidade de mana.' },
        { id: 'fim_7', tier: 4, nome: 'Veneno Glacial', desc: 'Cria uma névoa quase invisível de frio extremo em uma grande área. Criaturas que inalarem o vapor sofrem congelamento interno e dano contínuo. Exposição repetida reduz drasticamente a capacidade de movimento dos alvos. Gasta muita mana e permanece ativa por vários turnos.' },
        { id: 'fim_8', tier: 5, nome: 'Clone de Gelo', desc: 'Dano perfurante.Cria um clone idêntico ao conjurador feito de gelo sólido. O clone possui suas próprias ações e pode usar as mesmas habilidades do original, mas se desfaz após sofrer alguns golpes. Ele só pode existir dentro de um Globo de Neve. Gasta uma quantidade massiva de mana e dura alguns turnos.' },
    ],
    feengari: [
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
        { id: 'fee_1', nome: 'Raio Lunar', desc: 'Dano <span class="termo-destaque" data-tooltip="Raio de 10m\nDuração: 1 hora\nSem custo adicional">20</span> radiante.' },
    ],
    ascendente: [
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
        { id: 'asc_1', nome: 'Cura Leve', desc: 'Recupera vida.' },
    ]
};

function getDadosAfinidadeClasse(idClasse) {
    // 1. Verifica se é Arcanista
    if (gruposDeClasse.arcanista.includes(idClasse)) {
        return dadosAfinidade.grupos_classes.arcanista;
    }
    // 2. Verifica se é Combatente
    if (gruposDeClasse.combatente.includes(idClasse)) {
        return dadosAfinidade.grupos_classes.combatente;
    }
    // 3. Verifica se é Especialista
    if (gruposDeClasse.especialista.includes(idClasse)) {
        return dadosAfinidade.grupos_classes.especialista;
    }
    
    // Fallback de segurança (caso a classe não esteja em nenhum grupo)
    return { nome: "Classe Desconhecida", desc: "Sem afinidade definida." };
}

// --- ESTADO ---
let pontosGastosHabilidades = 0;
let habilidadesSelecionadas = new Set();
let afinidadeEscolhida = null
let magiasSelecionadas = new Set();
let pontosGastosMagia = 0; // NOVO ESTADO

// --- ELEMENTOS ---
const elNivel = document.getElementById('nivel');
const inputsAtributos = document.querySelectorAll('.input-atributo');
const inputsPericias = document.querySelectorAll('.input-pericia');
const inputsGerais = document.querySelectorAll('select, #nivel');

function getAtributo(id) {
    return parseInt(document.getElementById(id).value) || 0;
}

function calcularStatus(nivel) {
    const forca = getAtributo('attr-forca');
    const destreza = getAtributo('attr-destreza');
    const vigor = getAtributo('attr-vigor');
    const intelecto = getAtributo('attr-intelecto');
    const presenca = getAtributo('attr-presenca');
    const classe = document.getElementById('classe').value;
    const combat_points = (nivel < 3 ? 0 
    : nivel < 6 ? 1 
    : nivel < 8 ? 2
    : nivel < 11 ? 3 
    : nivel < 15 ? 4
    : 5);
    const mod_generico = (nivel < 3 ? 0 : 1);
    const mod_afinidade = (nivel < 4 ? 0
        : nivel < 8 ? 1
        : nivel < 12 ? 2
        : nivel < 16 ? 3
        : 4
    )


    // FÓRMULAS
    let vida = 20 + (vigor * 16) + nivel * 4;
    let mana = 15 + (intelecto * 16) + nivel * 4;
    let foco = 6 + (presenca * 4) + nivel;
    let carga = 4 + forca * 2;
    let movimento = 2 + destreza + Math.floor(nivel * 0.2);

    let bloqueio = 0;
    if (gruposDeClasse.combatente.includes(classe)) bloqueio = forca * 3 + combat_points * 3 + 2 * mod_generico;
    else if (gruposDeClasse.arcanista.includes(classe)) bloqueio = forca * 3 + combat_points * 2 + 2 * mod_generico;
    else bloqueio = forca * 3 + combat_points + 2 * mod_generico;

    let esquiva = 0;
    if (gruposDeClasse.combatente.includes(classe)) esquiva = destreza * 3 + combat_points * 3 + 2 * mod_generico;
    else if (gruposDeClasse.arcanista.includes(classe)) esquiva = destreza * 3 + combat_points * 2 + 2 * mod_generico;
    else esquiva = destreza * 3 + combat_points + 2 * mod_generico;

    // Cálculo Bônus de Ataque (Simplificado por grupo)
    let ataqueBonus = 0;
    if (gruposDeClasse.combatente.includes(classe)) ataqueBonus = combat_points * 3;
    else if (gruposDeClasse.arcanista.includes(classe)) ataqueBonus = combat_points * 3;
    else ataqueBonus = combat_points * 3;

    if (afinidadeEscolhida) {
        if (afinidadeEscolhida.id === 'reforco') {
            vida = parseInt((20 + (vigor * 16) + nivel * 4) * (1 + (mod_afinidade * 2.5) /10))
        } else if (afinidadeEscolhida.id === 'emissao') {
            mana = parseInt((15 + (intelecto * 16) + nivel * 4) * (1 + (mod_afinidade * 2.5) /10))
        } else if (afinidadeEscolhida.id === 'transformacao') {
            movimento = parseInt((2 + destreza + (nivel * 0.2)) * (1 + (mod_afinidade * 2.5) /10))
        } else if (afinidadeEscolhida.id === 'materializacao') {
            foco = parseInt((6 + (presenca * 4) + nivel) * (1 + (mod_afinidade * 2.5) /10))
        } else if (afinidadeEscolhida.id === 'manipulacao') {
            vida = parseInt((20 + (vigor * 16) + nivel * 4) * (1 + mod_afinidade /10))
            mana = parseInt((15 + (intelecto * 16) + nivel * 4) * (1 + mod_afinidade /10))
            movimento = parseInt((2 + destreza + (nivel * 0.2)) * (1 + mod_afinidade /10))
            foco = parseInt((6 + (presenca * 4) + nivel) * (1 + mod_afinidade /10))
        } else if (afinidadeEscolhida.id === 'liberacao') {
            carga = parseInt((4 + forca * 2) * (1+(mod_afinidade/4)))
        }
    }

    // Atualiza HTML
    document.getElementById('stat-vida').textContent = vida;
    document.getElementById('stat-mana').textContent = mana;
    document.getElementById('stat-foco').textContent = foco;
    document.getElementById('stat-carga').textContent = carga;
    document.getElementById('stat-movimento').textContent = movimento + 'm';
    document.getElementById('stat-bloqueio').textContent = bloqueio;
    document.getElementById('stat-esquiva').textContent = esquiva;
    document.getElementById('stat-ataque').textContent = '+' + ataqueBonus;
}

// --- RENDERIZA O GRIMÓRIO (NOVA FUNÇÃO) ---
function renderizarGrimorio(classe, saldoMagia) {
    const container = document.getElementById('lista-magias');
    container.innerHTML = '';

    // 1. Ler o valor da Perícia Arcano
    const per_Arcano = parseInt(document.getElementById('per-arcano').value) || 0;

    // 2. Determinar o Tier Máximo de Magia desbloqueado
    // Regra Sugerida: Tier 1 (0-4), Tier 2 (5-9), Tier 3 (10+)
    let maxTierMagia = 0;
    if (per_Arcano >= 25) maxTierMagia = 5;
    else if (per_Arcano >= 20) maxTierMagia = 4;
    else if (per_Arcano >= 15) maxTierMagia = 3;
    else if (per_Arcano >= 10) maxTierMagia = 2;
    else if (per_Arcano >= 5) maxTierMagia = 1;

    let lista = [];
    // Lógica de seleção de lista
    if (classe === 'fimbulwinter') lista = dadosMagias.fimbulwinter;
    else if (classe === 'feengari') lista = dadosMagias.feengari;
    else if (classe === 'ascendente') lista = dadosMagias.ascendente;
    else lista = dadosMagias.genericas;

    if (!lista) return;

    lista.forEach(magia => {
        const btn = document.createElement('div');
        btn.className = 'btn-magia';
        
                // --- LÓGICA DE BLOQUEIO POR TIER ---
        // Se a magia for de um tier superior ao permitido pela perícia
        if (magia.tier > maxTierMagia) {
            btn.classList.add('bloqueado');
            btn.textContent = `🔒 ${magia.nome} (Req. Perícia ${magia.tier * 5})`;
            // Não adicionamos onclick, então ele não faz nada
        } else {
            if (magiasSelecionadas.has(magia.id)) {
                btn.classList.add('selecionado');
                btn.textContent = magia.nome;
                btn.dataset.state = 2;
            } else {
                btn.textContent = magia.nome;
                btn.dataset.state = 0;
            }

            btn.onclick = () => {
                const st = parseInt(btn.dataset.state);
                btn.classList.remove('selecionado', 'info');
                if (st === 0) {
                    btn.dataset.state = 1; 
                    btn.innerHTML = magia.desc; btn.classList.add('info');
                } else if (st === 1) {
                    if (saldoMagia > 0) {
                        btn.dataset.state = 2; btn.textContent = magia.nome; btn.classList.add('selecionado');
                        magiasSelecionadas.add(magia.id);
                        pontosGastosMagia++;
                        atualizarTudo();
                    } else {
                        alert("Sem pontos de magia suficientes!");
                        btn.dataset.state = 0; btn.textContent = magia.nome;
                    }
                } else {
                    btn.dataset.state = 0; btn.textContent = magia.nome;
                    magiasSelecionadas.delete(magia.id);
                    pontosGastosMagia--;
                    atualizarTudo();
                }
            };
        }
        container.appendChild(btn);
    });
}

// --- ATUALIZAÇÃO GERAL ---
function atualizarTudo() {
    const nivel = parseInt(elNivel.value) || 1;
    const classeAtual = document.getElementById('classe').value;
    const intelecto = getAtributo('attr-intelecto');
    // 1. PONTOS
    const pontosTotaisAttr = Math.floor(nivel/2) + 6;
    const pontosTotaisSkill = Math.ceil(nivel * 3/4 - 1)-
    (nivel < 3 ? 0 
    : nivel < 6 ? 1 
    : nivel < 11 ? 2 
    : 3);
    
    let gastosAttr = 0;
    inputsAtributos.forEach(i => gastosAttr += (parseInt(i.value)||0));
    
    const saldoAttr = pontosTotaisAttr - gastosAttr;
    const saldoSkill = pontosTotaisSkill - pontosHabilidadesGastos;

    document.getElementById('pts-attr-atual').textContent = saldoAttr;
    document.getElementById('pts-attr-total').textContent = pontosTotaisAttr;
    document.getElementById('pts-skill-atual').textContent = saldoSkill;
    document.getElementById('pts-skill-total').textContent = pontosTotaisSkill;

    // Cor de erro se negativo
    document.getElementById('pts-attr-atual').style.color = saldoAttr < 0 ? 'var(--color-danger)' : 'var(--color-attr)';
    document.getElementById('pts-skill-atual').style.color = saldoSkill < 0 ? 'var(--color-danger)' : 'var(--color-primary)';

    // 2. AFINIDADE
    const containerAfinidade = document.getElementById('container-afinidade');
    if (nivel >= 4) {
        containerAfinidade.style.display = 'flex';
        renderizarAfinidades();
    } else {
        containerAfinidade.style.display = 'none';
        afinidadeEscolhida = null;
    }

    let pontosTotaisMagia = Math.floor(nivel / 2);

    if (afinidadeEscolhida && afinidadeEscolhida.id === 'arcanista') {
        pontosTotaisMagia = Math.floor(nivel / 2) + intelecto;
    }
    const saldoMagia = pontosTotaisMagia - pontosGastosMagia;
    


    const elPtsMagiaAtual = document.getElementById('pts-magia-atual');
    const elPtsMagiaTotal = document.getElementById('pts-magia-total');
    if(elPtsMagiaAtual && elPtsMagiaTotal) {
        elPtsMagiaAtual.textContent = saldoMagia;
        elPtsMagiaTotal.textContent = pontosTotaisMagia;
        elPtsMagiaAtual.style.color = saldoMagia < 0 ? 'var(--color-life)' : 'var(--color-magic)';
    }

    // GRIMÓRIO - LÓGICA DE EXIBIÇÃO
    const containerGrimorio = document.getElementById('container-grimorio');
    if (gruposDeClasse.arcanista.includes(classeAtual)) {
        containerGrimorio.style.display = 'flex';
        renderizarGrimorio(classeAtual, saldoMagia);
    } else {
        containerGrimorio.style.display = 'none';
        magiasSelecionadas.clear();
        pontosGastosMagia = 0;
    }

    // 3. HABILIDADES
    const maxTier = nivel >= 12 ? 3 : (nivel >= 4 ? 2 : 1);
    renderizarColuna('lista-aura', dadosHabilidades.auras[document.getElementById('aura').value], maxTier, saldoSkill);
    renderizarColuna('lista-classe', dadosHabilidades.classes[document.getElementById('classe').value], maxTier, saldoSkill);
    renderizarColuna('lista-trilha', dadosHabilidades.trilhas[document.getElementById('trilha').value], maxTier, saldoSkill);

    // --- PERÍCIAS ---
    
    const pontosTotaisPericia = intelecto * 5;
    let gastosPericia = 0;
    inputsPericias.forEach(i => gastosPericia += (parseInt(i.value) || 0));
    const saldoPericia = pontosTotaisPericia - gastosPericia;

    document.getElementById('pts-pericia-atual').textContent = saldoPericia;
    document.getElementById('pts-pericia-total').textContent = pontosTotaisPericia;
    document.getElementById('pts-pericia-atual').style.color = saldoPericia < 0 ? 'var(--color-life)' : 'var(--color-skill)';


    // 4. STATUS (Chama a nova função)
    calcularStatus(nivel);
}

// --- NOVA FUNÇÃO DE RENDERIZAR AFINIDADES ---
function renderizarAfinidades() {
    const container = document.getElementById('lista-afinidades');
    container.innerHTML = ''; // Limpa

    // Pega as escolhas atuais dos Dropdowns
    const aura = document.getElementById('aura').value;
    const classe = document.getElementById('classe').value;
    const trilha = document.getElementById('trilha').value;

 
    const opcoes = [
        { origem: 'AURA', id: aura, ...dadosAfinidade.auras[aura] },
        { origem: 'CLASSE', id: classe, ...getDadosAfinidadeClasse(classe) },  
        { origem: 'TRILHA', id: trilha, ...dadosAfinidade.trilhas[trilha] }
    ];


    opcoes.forEach(opt => {
        const card = document.createElement('div');
        card.className = 'card-afinidade';
        if (afinidadeEscolhida && afinidadeEscolhida.nome === opt.nome) card.classList.add('selecionado');
        
        card.innerHTML = `
            <div style="font-size:0.7rem; opacity:0.7; margin-bottom:5px;">${opt.origem}</div>
            <h3 style="margin:0 0 5px 0; font-size:1rem;">${opt.nome}</h3>
            <div style="font-size:0.85rem; opacity:0.9;">${opt.desc}</div>
        `;
        card.onclick = () => {
            afinidadeEscolhida = (afinidadeEscolhida && afinidadeEscolhida.nome === opt.nome) ? null : opt;
            renderizarAfinidades();
            const nivel = parseInt(elNivel.value) || 1;
            calcularStatus(nivel);
            atualizarTudo();
        };
        container.appendChild(card);
    });
}

// --- RENDERIZADOR ---
function renderizarColuna(id, lista, maxTier, saldo) {
    const el = document.getElementById(id);
    el.innerHTML = '';
    if(!lista) return;
    lista.forEach(h => {
        const btn = document.createElement('button');
        btn.className = 'btn-habilidade';
        const sel = habilidadesSelecionadas.has(h.id);
        
        if(h.tier > maxTier) {
            btn.classList.add('bloqueado');
            btn.textContent = `🔒 ${h.nome} (Nível ${h.tier * 8 - 12})`;
        } else {
            if(sel) {
                btn.classList.add('selecionado');
                btn.textContent = h.nome;
                btn.dataset.state = 2;
            } else {
                btn.textContent = `${h.nome}`;
                btn.dataset.state = 0;
            }
            
            btn.onclick = () => {
                const st = parseInt(btn.dataset.state);
                btn.classList.remove('selecionado', 'info');
                
                if(st === 0) {
                    btn.dataset.state = 1;
                    btn.textContent = h.desc;
                    btn.classList.add('info');
                } else if(st === 1) {
                    if(saldo > 0) {
                        btn.dataset.state = 2;
                        btn.textContent = h.nome;
                        btn.classList.add('selecionado');
                        pontosHabilidadesGastos++;
                        habilidadesSelecionadas.add(h.id);
                        atualizarTudo();
                    } else {
                        alert("Sem pontos!");
                        btn.dataset.state = 0; btn.textContent = `${h.nome}`;
                    }
                } else {
                    btn.dataset.state = 0;
                    btn.textContent = `${h.nome}`;
                    pontosHabilidadesGastos--;
                    habilidadesSelecionadas.delete(h.id);
                    atualizarTudo();
                }
            }
        }
        el.appendChild(btn);
    });
}

// --- NOVA FUNÇÃO DE SALVAR ---
function salvarFicha() {
    // 1. Coleta Inputs Básicos
    const ficha = {
        nome: document.querySelector('.input-nome').value,
        origem: {
            aura: document.getElementById('aura').value,
            classe: document.getElementById('classe').value,
            trilha: document.getElementById('trilha').value
        },
        nivel: parseInt(document.getElementById('nivel').value),
        
        // 2. Coleta Atributos
        atributos: {
            forca: getAtributo('attr-forca'),
            destreza: getAtributo('attr-destreza'),
            vigor: getAtributo('attr-vigor'),
            intelecto: getAtributo('attr-intelecto'),
            presenca: getAtributo('attr-presenca')
        },

        pericias: {
            medicina: getAtributo('per-medicina'),
            arcano: getAtributo('per-arcano'),
            diplomacia: getAtributo('per-diplomacia'),
            adestrar: getAtributo('per-adestrar'),
            tecnologia: getAtributo('per-tecnologia')
        },
        // 4. Coleta Habilidades e Magias (Converte Set para Array)
        habilidades: Array.from(habilidadesSelecionadas),
        magias: Array.from(magiasSelecionadas),

        // 5. Coleta Afinidade
        afinidade: afinidadeEscolhida ? afinidadeEscolhida.nome : null,

        // 6. Snapshot dos Status Calculados (Opcional, mas útil)
        statusCalculados: {
            vida: document.getElementById('stat-vida').textContent,
            mana: document.getElementById('stat-mana').textContent,
            foco: document.getElementById('stat-foco').textContent
        }
    };

    console.log("--- FICHA CRIADA COM SUCESSO ---");
    console.log(JSON.stringify(ficha, null, 2));
    alert("Ficha criada! Veja o console (F12) para o JSON.");
    
    // AQUI VOCÊ COLOCARIA O CÓDIGO DE ENVIO PARA O BACKEND
    // Exemplo: fetch('/api/salvar', { method: 'POST', body: JSON.stringify(ficha) ... })
}


// --- LISTENERS ---
inputsGerais.forEach(el => {
    el.addEventListener('change', (e) => {
        if(e.target.id !== 'nivel') { pontosHabilidadesGastos=0; habilidadesSelecionadas.clear(); }
        atualizarTudo();
    });
    if(el.id==='nivel') el.addEventListener('input', atualizarTudo);
});
inputsAtributos.forEach(el => el.addEventListener('input', atualizarTudo));
inputsPericias.forEach(el => el.addEventListener('input', atualizarTudo));

atualizarTudo();