
// --- DADOS (Mesma estrutura anterior, você pode expandir) ---
const dadosHabilidades = {
    classes: {
        mago_elemental: [
            { id: 'me_2', nome: 'Atalho do Mago', desc: 'Atalho do Mago é uma ação bônus que custa 1 ponto de Foco. Para cada ponto de Foco gasto dessa forma, o personagem gera imediatamente 4 pontos de Mana, convertendo concentração em energia mágica de maneira rápida e instintiva.', tier: 1 },
            { id: 'me_3', nome: 'Finta Improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'me_4', nome: 'Afinidade Elemental', desc: 'Afinidade Elemental é uma habilidade passiva sem custo. Sempre que o personagem conjura uma magia elemental e, em seguida, lança outra magia do mesmo elemento, a segunda magia recebe um bônus de +1 dado de dano adicional. Esse bônus aumenta para +2 dados no nível 8, +3 dados no nível 12 e +4 dados no nível 16.', tier: 2 },
            { id: 'me_5', nome: 'Ciclo arcano', desc: 'Ciclo Arcano é uma habilidade passiva sem custo. Após conjurar duas magias consecutivas de tipos diferentes, o personagem recebe um bônus de 50% de dano na próxima magia lançada.', tier: 2 },
            { id: 'me_6', nome: 'Aniquilação', desc: 'Aniquilação é uma habilidade passiva sem custo que se ativa sempre que o personagem obtém um acerto crítico. Caso o ataque crítico seja de alvo único, o dano passa a ser aplicado em área de alcance curto. Se o ataque já for um ataque em área, ele mantém sua área normal, mas passa a ser tratado mecanicamente como um ataque de alvo único, não sofrendo redução de dano por múltiplos alvos.', tier: 3 },
            
        ],

        mistico: [
            { id: 'mis_2', nome: 'Atalho do Mago', desc: 'Atalho do Mago é uma ação bônus que custa 1 ponto de Foco. Para cada ponto de Foco gasto dessa forma, o personagem gera imediatamente 4 pontos de Mana, convertendo concentração em energia mágica de maneira rápida e instintiva.', tier: 1 },
            { id: 'mis_3', nome: 'Finta Improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'mis_4', nome: 'Espaço Extra', desc: 'Espaço Extra é uma habilidade passiva sem custo que aumenta a capacidade do personagem de carregar círculos mágicos adicionais. Inicialmente, o personagem pode carregar 1 círculo extra. No nível 8, esse número aumenta para 2 círculos adicionais, no nível 12 para 3 círculos e no nível 16 para 4 círculos adicionais.', tier: 2 },
            { id: 'mis_5', nome: 'Agilizar Círculo', desc: 'Agilizar Círculo é ativada como uma ação bônus ao custo de 2 pontos de Foco. Essa habilidade permite ativar um círculo mágico utilizando uma ação bônus, em vez de consumir uma ação padrão ou turno completo.', tier: 2 },
            { id: 'mis_6', nome: 'Gambiarra do Místico', desc: 'Gambiarra do Místico é ativada como uma ação padrão ao custo de 4 pontos de Foco. O personagem pode reutilizar um círculo mágico que já tenha sido usado durante o combate. Caso deseje reutilizar novamente o mesmo círculo mais de uma vez, o custo da habilidade aumenta de forma exponencial a cada reutilização adicional.', tier: 3 },
            
        ],

        mago_de_fronte: [
            { id: 'mf_2', nome: 'Atalho do Mago', desc: 'Atalho do Mago é uma ação bônus que custa 1 ponto de Foco. Para cada ponto de Foco gasto dessa forma, o personagem gera imediatamente 4 pontos de Mana, convertendo concentração em energia mágica de maneira rápida e instintiva.', tier: 1 },
            { id: 'mf_3', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'mf_4', nome: 'Initerrupto', desc: 'Ininterrupto é ativado como uma ação bônus ao custo de 6 pontos de Foco. Caso o personagem seja interrompido enquanto canaliza uma magia e já tenha completado mais de 50% do tempo de canalização, ele pode liberar a magia imediatamente com 50% de sua eficiência, sendo essa liberação obrigatoriamente direcionada contra o alvo que causou a interrupção. Se a interrupção ocorrer antes de metade do tempo de canalização, a magia é completamente cancelada, sem gerar efeito.', tier: 2 },
            { id: 'mf_5', nome: 'Rotação Perfeita', desc: 'Rotação Perfeita é uma habilidade passiva sem custo. Sempre que o personagem acerta um ataque físico, a próxima magia conjurada recebe um bônus de +1d10 de dano. Esse bônus aumenta para +2d10 no nível 8, +3d10 no nível 12 e +4d10 no nível 16.', tier: 2 },
            { id: 'mf_6', nome: 'Conjuração Livre', desc: 'Conjuração Livre é ativada como uma ação bônus ao custo de 3 pontos de Foco. Essa habilidade permite que o personagem canalize uma magia utilizando apenas ações de movimento, preservando a ação padrão para outras ações. Esse efeito só pode ser aplicado a magias cuja canalização dure mais de um turno.', tier: 3 },
            
        ],

        fimbulwinter: [
            { id: 'fi_2', nome: 'Atalho do Mago', desc: 'Atalho do Mago é uma ação bônus que custa 1 ponto de Foco. Para cada ponto de Foco gasto dessa forma, o personagem gera imediatamente 4 pontos de Mana, convertendo concentração em energia mágica de maneira rápida e instintiva.', tier: 1 },
            { id: 'fi_3', nome: 'Finta Improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'fi_4', nome: 'Sangue Congelante', desc: 'Sangue Congelante é uma habilidade passiva que faz com que a temperatura corporal e a aura do personagem caiam naturalmente para abaixo de zero. A cada magia conjurada, o personagem eleva seu Estágio de Frio, representando o aprofundamento dessa condição. No Estágio 1, chamado Frio Leve, o personagem se torna imune a danos gélidos. No Estágio 2, Frio Profundo, o personagem passa a causar +1d10 de dano gélido adicional em suas magias, bônus que aumenta para +2d10 no nível 12 e +4d10 no nível 16, porém sofre –1 em testes sociais. No Estágio 3, Frio Absoluto, o bônus de dano gélido passa a ser +2d10, seguindo o mesmo escalonamento de níveis, o redutor em testes sociais aumenta para –2 e o movimento do personagem é reduzido em 50%.', tier: 2 },
            { id: 'fi_5', nome: 'Esfriar', desc: 'Corpo de Permafrost é uma habilidade passiva que faz com que a aura do personagem assuma as propriedades do Gelo Verdadeiro. Sempre que o personagem receber dano físico direto, o dano é reduzido em um valor igual a 2 vezes seu Estágio de Frio. Esse valor de redução aumenta para 4 vezes o Estágio de Frio no nível 12 e para 8 vezes no nível 16. Além disso, enquanto estiver no Estágio 3 de Frio, qualquer atacante que causar dano físico direto ao personagem sofre 1d10 de dano gélido de retorno, valor que aumenta para 2d10 no nível 12 e 4d10 no nível 16.', tier: 2 },
            { id: 'fi_6', nome: 'Fimbulwinter', desc: 'Coração de Inverno Eterno é um gatilho automático que se ativa sempre que o personagem obtém um acerto crítico. Nesse momento, sua temperatura cai instantaneamente para um estágio extremo e, por 1 turno, o personagem entra em um estado de Inanição. Durante esse turno, todas as criaturas em alcance curto sofrem –5 em jogadas de ataque e têm seu movimento reduzido pela metade. Criaturas adjacentes ao personagem sofrem 3d10 de dano gélido imediato e perdem completamente o movimento naquela rodada.', tier: 3 },
            
        ],

        feengari: [
            { id: 'fe_2', nome: 'Atalho do Mago', desc: 'Atalho do Mago é uma ação bônus que custa 1 ponto de Foco. Para cada ponto de Foco gasto dessa forma, o personagem gera imediatamente 4 pontos de Mana, convertendo concentração em energia mágica de maneira rápida e instintiva.', tier: 1 },
            { id: 'fe_3', nome: 'Finta improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'fe_4', nome: 'Lua artificial', desc: 'Lua Artificial é ativada como uma ação bônus ao custo de 2 pontos de Foco por rodada. Enquanto estiver sob luz do dia, o Fengari é obrigado a manter essa habilidade ativa para poder conjurar magias normalmente. Caso o personagem crie um ambiente escuro ou se desloque para uma área sem luz natural, Lua Artificial se torna desnecessária e pode ser desativada sem custo adicional.', tier: 2 },
            { id: 'fe_5', nome: 'Olhos do Vazio', desc: 'Olhos do Vazio é uma habilidade passiva em que o Feengari abdica da sensibilidade humana tradicional para enxergar a ausência, o “ruído negativo” e distorções da realidade. Sempre que o personagem gastar Mana, o Olhar do Vazio é ativado, permitindo enxergar através de escuridão normal e mágica, além de conceder +1d10 em testes de Percepção e Investigação. A partir do nível 12, o personagem passa a identificar auras, intenções hostis e criaturas ocultas como sombras vibrantes, porém perde completamente a capacidade de enxergar sob luz do dia. Após o nível 12, mesmo sem gastar Mana, sua visão durante o dia se torna constantemente desconfortável e instável.', tier: 2 },
            { id: 'fe_6', nome: 'Transmutação Lunar', desc: 'Lua Sangrenta do Abismo é uma habilidade passiva que desbloqueia a Carga Lunar, permitindo que o personagem utilize suas magias em suas versões Abissais sempre que disponíveis.', tier: 3 },
            
        ],

        ascendente: [
            { id: 'as_2', nome: 'Atalho do Mago', desc: 'Atalho do Mago é uma ação bônus que custa 1 ponto de Foco. Para cada ponto de Foco gasto dessa forma, o personagem gera imediatamente 4 pontos de Mana, convertendo concentração em energia mágica de maneira rápida e instintiva.', tier: 1 },
            { id: 'as_3', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'as_4', nome: 'Acalmar', desc: 'Acalmar é utilizada como uma ação padrão ao custo de 4 pontos de Foco. Ao ativá-la, o personagem inicia um processo de compreensão da entidade interior, reduzindo gradualmente sua influência. Isso permite que o usuário acalme a entidade e remova a máscara, retornando temporariamente ao controle pleno de si mesmo.', tier: 2 },
            { id: 'as_5', nome: 'Consciência', desc: 'Consciência é ativada como uma ação bônus ao custo de 4 pontos de Foco. Ao utilizá-la, o personagem e a entidade interior entram em sintonia parcial, passando a compartilhar sentidos. Enquanto o efeito estiver ativo, o personagem pode escolher livremente seus alvos em combate, ignorando interferências, impulsos ou distorções causadas pela entidade.', tier: 2 },
            { id: 'as_6', nome: 'Harmonia', desc: 'Harmonia é uma habilidade passiva que possui como pré-requisitos Acalmar e Consciência. Ao alcançá-la, o personagem finalmente compreende completamente a entidade, e a entidade passa a compreendê-lo da mesma forma. A partir desse ponto, ambos dividem pensamentos, sentidos e vontades, tornando-se efetivamente um só. O personagem obtém controle total sobre seus poderes e ações, mesmo enquanto utiliza a máscara.', tier: 3 },
            
        ],

        espadachim: [
            { id: 'esp_1', nome: 'Precisão', desc: 'Precisão é uma ação bônus que custa 3 pontos de Foco. Ela pode ser ativada antes de um ataque do personagem ou antes do ataque de um inimigo. Ao utilizá-la, o personagem recebe +3 de bônus em testes de ataque ou +3 de bônus em testes de defesa, conforme a escolha no momento da ativação.', tier: 1 },
            { id: 'esp_2', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'esp_3', nome: 'Ataque do trapaceiro', desc: 'Ataque do Trapaceiro é ativado como uma ação padrão ao custo de 3 pontos de Foco. O personagem realiza um ataque que causa apenas 50% do dano normal, mas simultaneamente executa uma Finta contra o alvo. Caso o alvo falhe no teste de resistência à Finta, o usuário recebe um bônus de +1d10 no próximo ataque contra esse mesmo alvo, bônus que evolui para +2d10 a partir do nível 12.', tier: 2 },
            { id: 'esp_4', nome: 'Finta de guerra', desc: 'Finta de Guerra é ativada como uma ação bônus ao custo de 2 pontos de Foco. O personagem pode realizar um ataque extra contra qualquer alvo que tenha sofrido uma Finta sua nesse mesmo turno. Esse ataque causa 100% do dano normal. Se o ataque acertar, o alvo fica Exposto, e enquanto não se recompor, qualquer ataque contra ele causa +1d10 de dano adicional.', tier: 2 },
            { id: 'esp_5', nome: 'Ataque do trapaceiro II', desc: 'Ataque do Trapaceiro II é uma habilidade passiva sem custo. Sempre que o personagem acerta dois ataques consecutivos no mesmo alvo durante um combate, ele ativa o efeito Leitura de Estilo. Enquanto esse efeito estiver ativo, seus ataques contra esse alvo passam a incluir automaticamente uma Finta embutida, e o Ataque do Trapaceiro passa a causar 100% do dano normal. Esse efeito só pode estar ativo contra um inimigo por vez; ao trocar de alvo, é necessário acertar dois ataques consecutivos novamente para reativar a Leitura de Estilo.', tier: 3 },
        ],

        arma_de_corda: [
            { id: 'adc_1', nome: 'Precisão', desc: 'Precisão é uma ação bônus que custa 3 pontos de Foco. Ela pode ser ativada antes de um ataque do personagem ou antes do ataque de um inimigo. Ao utilizá-la, o personagem recebe +3 de bônus em testes de ataque ou +3 de bônus em testes de defesa, conforme a escolha no momento da ativação.', tier: 1 },
            { id: 'adc_2', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'adc_3', nome: 'Enlaçar', desc: 'Enlaçar é ativado como uma ação padrão ao custo de 2 pontos de Foco. O ataque prende o inimigo, deixando-o Enraizado. Para escapar, o alvo deve vencer um teste de Força contra o personagem; em caso de falha, o alvo perde o turno. Enquanto o inimigo estiver enlaçado, o usuário não pode realizar ataques. A cada rodada em que o efeito se mantém, o personagem recebe um bônus cumulativo de +5 no teste de Força para manter o enlaçamento.', tier: 2 },
            { id: 'adc_4', nome: 'Puxão Brutal', desc: 'Puxão Brutal é ativado como uma ação de movimento e não possui custo. Caso um inimigo esteja Enlaçado, o personagem pode puxá-lo para qualquer ponto dentro de seu alcance, incluindo jogá-lo atrás de aliados ou contra armadilhas. Se o inimigo colidir com outro inimigo ou com um obstáculo sólido, ambos sofrem 2d10 de dano, valor que aumenta para 4d10 a partir do nível 12. Além disso, ambos devem realizar um teste de Força; em caso de falha, ficam Atordoados por 1 turno.', tier: 2 },
            { id: 'adc_5', nome: 'Zona segura', desc: 'Zona Segura é ativada como uma ação padrão ao custo de 6 pontos de Foco. O personagem gira sua arma em círculos, criando uma barreira cinética ao seu redor. Aliados dentro da zona recebem +2 de Defesa. Inimigos que tentarem entrar na área sofrem um ataque automático; caso esse ataque resulte em um acerto crítico, o inimigo é empurrado para fora da zona. O efeito dura 1 turno, podendo ser mantido por rodadas adicionais ao custo de Foco ou Mana.', tier: 3 },
        ],

        nordico: [
            { id: 'no_1', nome: 'Precisão', desc: 'Precisão é uma ação bônus que custa 3 pontos de Foco. Ela pode ser ativada antes de um ataque do personagem ou antes do ataque de um inimigo. Ao utilizá-la, o personagem recebe +3 de bônus em testes de ataque ou +3 de bônus em testes de defesa, conforme a escolha no momento da ativação.', tier: 1 },
            { id: 'no_2', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'no_3', nome: 'Iniciador', desc: 'Iniciador é uma habilidade passiva e não possui custo. Sempre que o Nórdico ataca um inimigo que ainda não sofreu dano naquela rodada, ele causa 50% a mais de dano. Caso o ataque acerte, o alvo deve realizar um teste de Força; em caso de falha, o Nórdico pode escolher entre empurrar o inimigo 1 metro ou derrubá-lo no chão.', tier: 2 },
            { id: 'no_4', nome: 'Tormenta Nórdica', desc: 'Tormenta Nórdica é ativada como uma ação padrão ao custo de 6 pontos de Foco e pode ser utilizada de duas formas. Na primeira, o Nórdico gira seu machado, criando uma tempestade de aço que causa dano a todos os inimigos em alcance curto; cada inimigo atingido deve realizar um teste de Força e, em caso de falha, é arremessado para longe. Na segunda forma, o Nórdico desfere um golpe devastador contra o solo, rachando o chão; o ataque causa dano total em linha reta, atingindo todos os inimigos em alcance médio alinhados, e ignora armaduras leves.', tier: 2 },
            { id: 'no_5', nome: 'Sangue de Gigante', desc: 'Sangue do Gigante é uma habilidade passiva e não possui custo. Para cada inimigo adjacente ao Nórdico, ele recebe um bônus de +50% no dano causado e +2 de Armadura temporária.', tier: 3 },
        ],

        lanceiro: [
            { id: 'lan_1', nome: 'Precisão', desc: 'Precisão é uma ação bônus que custa 3 pontos de Foco. Ela pode ser ativada antes de um ataque do personagem ou antes do ataque de um inimigo. Ao utilizá-la, o personagem recebe +3 de bônus em testes de ataque ou +3 de bônus em testes de defesa, conforme a escolha no momento da ativação.', tier: 1 },
            { id: 'lan_2', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'lan_3', nome: 'Arremesso', desc: 'Arremesso é ativado como uma ação padrão ao custo de 1 ponto de Foco. O personagem arremessa sua lança a uma distância máxima igual ao nível do personagem multiplicado por 3 metros. Caso o ataque seja um acerto crítico, o alvo é automaticamente empalado, ficando preso no local até o próximo turno.', tier: 2 },
            { id: 'lan_4', nome: 'Calibrado', desc: 'Calibrado é uma habilidade passiva e não possui custo. Ela aumenta a margem de ameaça dos ataques do personagem em +2. A partir do nível 8, esse bônus aumenta para +4, e no nível 12 passa a ser +6.', tier: 2 },
            { id: 'lan_5', nome: 'Estocada', desc: 'Estocada é ativada como uma ação padrão ao custo de 5 pontos de Foco. O personagem realiza um ataque extremamente preciso; caso o ataque seja um acerto crítico, ele ignora bloqueios e esquivas. Se Estocada for utilizada em conjunto com Arremesso, o dano total do ataque é multiplicado por 3.', tier: 3 },
        ],

        atirador_de_elite: [
            { id: 'ae_1', nome: 'Cálculo Exato', desc: 'Cálculo Exato é uma ação bônus que custa 5 pontos de Foco e deve ser ativada antes da realização de um ataque. Ao utilizar essa habilidade, o personagem escolhe um dos dois efeitos a seguir. No Golpe Inevitável, o ataque realizado acerta automaticamente o alvo, ignorando testes de ataque, embora ainda esteja sujeito a efeitos que neguem dano ou anulem o impacto. No Golpe Friamente Calculado, o personagem executa o ataque com precisão extrema, rolando dados adicionais de dano equivalentes a +1d10 para cada metade inteira do atributo associado à arma utilizada (arredondando para baixo). O bônus de dano é aplicado apenas a esse ataque.', tier: 1 },
            { id: 'ae_2', nome: 'Finta Improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'ae_3', nome: 'Disparo rápido', desc: 'Ao ativar Disparo Rápido, gastando 3 pontos de Foco, um ataque à distância passa a consumir apenas a ação padrão, em vez de exigir o uso do turno completo. Essa habilidade permite executar disparos com maior agilidade dentro da mesma rodada.', tier: 2 },
            { id: 'ae_4', nome: 'Concentração', desc: 'Concentração é uma habilidade passiva e não possui custo. A cada rodada em que o personagem não sofre ataques, seu dano aumenta em 100%, podendo acumular progressivamente até um máximo de 400%. Caso o personagem seja alvo de um ataque, mesmo que o ataque erre, o efeito de Concentração é imediatamente reiniciado.', tier: 2 },
            { id: 'ae_5', nome: 'Chuva de projeteis', desc: 'Chuva de Projéteis consome o turno completo e possui um custo base de 4 pontos de Foco, multiplicado para cada projétil adicional disparado. A habilidade permite disparar mais de um projétil em um único ataque; a cada projétil adicional adicionado, o custo da habilidade dobra em relação ao anterior.', tier: 3 },
        ],

        assassino: [
            { id: 'ass_1', nome: 'Cálculo exato I', desc: 'Cálculo Exato é uma ação bônus que custa 5 pontos de Foco e deve ser ativada antes da realização de um ataque. Ao utilizar essa habilidade, o personagem escolhe um dos dois efeitos a seguir. No Golpe Inevitável, o ataque realizado acerta automaticamente o alvo, ignorando testes de ataque, embora ainda esteja sujeito a efeitos que neguem dano ou anulem o impacto. No Golpe Friamente Calculado, o personagem executa o ataque com precisão extrema, rolando dados adicionais de dano equivalentes a +1d10 para cada metade inteira do atributo associado à arma utilizada (arredondando para baixo). O bônus de dano é aplicado apenas a esse ataque.', tier: 1 },
            { id: 'ass_2', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'ass_3', nome: 'Apunhalar', desc: 'Apunhalar consome 3 pontos de Foco e exige que o usuário esteja em furtividade no momento da ativação. O ataque realizado multiplica o dano causado por 2 vezes e ignora completamente todas as resistências do alvo. A partir do nível 8, caso o alvo esteja com 50% ou menos da Vida máxima, o multiplicador de dano aumenta para 3 vezes.', tier: 2 },
            { id: 'ass_4', nome: 'Furtividade real', desc: 'Furtividade Real é uma habilidade passiva sem custo. Enquanto estiver furtivo, o personagem não tem mais sua movimentação reduzida pela metade. A partir do nível 16, o personagem passa a poder realizar ataques sem perder o estado de furtividade.', tier: 2 },
            { id: 'ass_5', nome: 'Finalizador Sombrio', desc: 'Finalizador Sombrio é ativado como uma ação padrão ao custo de 20 pontos de Foco e exige que o personagem tenha causado dano ao alvo na mesma rodada. Caso o dano máximo possível da arma utilizada, somado aos bônus aplicáveis, seja suficiente para reduzir o alvo a zero de Vida, o alvo é executado instantaneamente, sem necessidade de rolagem adicional. Após a execução, o personagem ativa Extinção Furtiva, recebendo um bônus de 3 metros de movimento. A partir do nível 16, executar um alvo com Finalizador Sombrio concede uma ação padrão extra.', tier: 3 },
        ],

        gladiador: [
            { id: 'gla_1', nome: 'Cálculo exato I', desc: 'Cálculo Exato é uma ação bônus que custa 5 pontos de Foco e deve ser ativada antes da realização de um ataque. Ao utilizar essa habilidade, o personagem escolhe um dos dois efeitos a seguir. No Golpe Inevitável, o ataque realizado acerta automaticamente o alvo, ignorando testes de ataque, embora ainda esteja sujeito a efeitos que neguem dano ou anulem o impacto. No Golpe Friamente Calculado, o personagem executa o ataque com precisão extrema, rolando dados adicionais de dano equivalentes a +1d10 para cada metade inteira do atributo associado à arma utilizada (arredondando para baixo). O bônus de dano é aplicado apenas a esse ataque.', tier: 1 },
            { id: 'gla_2', nome: 'Finta', desc: 'Finta é uma ação padrão sem custo. Ao utilizá-la, o personagem pode gastar sua ação de ataque para tentar derrubar ou desarmar o alvo, representando uma manobra técnica executada sem gasto adicional de recursos.', tier: 1 },
            { id: 'gla_3', nome: 'Berzerk', desc: 'Berzerk é ativado como uma ação bônus ao custo de 4 pontos de Foco, devendo ser usado imediatamente após um ataque. Ao entrar em modo Berzerk, o personagem passa a realizar ataques adicionais conforme o estágio alcançado. No primeiro estágio, é realizado um ataque causando 50% do dano normal. No segundo estágio, são realizados dois ataques, cada um causando 50% do dano. No terceiro estágio, o personagem realiza um ataque com 50% do dano e outro com 100% do dano. No quarto estágio, são realizados dois ataques com 100% do dano cada. Para manter o quarto estágio ativo, é necessário gastar 1 ponto de Foco por rodada.', tier: 2 },
            { id: 'gla_4', nome: 'Quebracascos', desc: 'Quebracascos pode ser ativada como uma ação padrão ao custo de 15 pontos de Foco. Essa habilidade só pode ser utilizada enquanto o personagem estiver no estágio final do Berzerk e permite realizar um ataque quádruplo em uma única ação.', tier: 2 },
            { id: 'gla_5', nome: 'Até a morte', desc: 'Até a Morte é uma habilidade passiva e não possui custo. Sempre que o personagem sofrer um ataque não massivo que normalmente reduziria sua Vida a 0, deixando-o inconsciente, sua Vida é reduzida para 1 em vez disso, permitindo que continue lutando normalmente. Caso o personagem receba outro ataque enquanto estiver com 1 ponto de Vida, ele cai inconsciente normalmente.', tier: 3 },
        ],

        charlatao: [
            { id: 'cha_1', nome: 'Especialista', desc: 'Especialista é uma ação bônus que custa 4 pontos de Foco. Ao ativar essa habilidade, o personagem recebe +1d10 em qualquer teste à sua escolha, seja ele ofensivo, defensivo ou utilitário. O bônus é aplicado a um único teste e deve ser declarado antes da rolagem.', tier: 1 },
            { id: 'cha_2', nome: 'Finta improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'cha_3', nome: 'Lingua de prata', desc: 'Língua de Prata é ativada como uma ação padrão ao custo de 4 pontos de Foco por alvo. Ao usar essa habilidade, o alvo torna-se altamente suscetível ao que está sendo dito, interpretando as palavras do usuário de forma favorável. Caso o alvo seja hostil, ambos realizam um teste de Presença contra Presença; se o alvo vencer o teste, ele resiste à técnica e o efeito não é aplicado.', tier: 2 },
            { id: 'cha_4', nome: 'Marca', desc: 'Marca é ativada como uma ação padrão ao custo de 4 pontos de Foco e só pode ser usada em alvos que estejam sob o efeito de Língua de Prata. Quando utilizada em um inimigo, todos os ataques direcionados a esse alvo causam 50% a mais de dano enquanto o efeito durar. Quando utilizada em um aliado, todos os inimigos próximos são forçados a atacá-lo por até 2 rodadas, podendo resistir ao efeito com um teste de Presença.', tier: 2 },
            { id: 'cha_5', nome: 'Lider tático', desc: 'Líder Tático é ativada como uma ação padrão ao custo de 8 pontos de Foco e só pode ser usada em alvos afetados por Língua de Prata, encerrando esse efeito após a ativação. Quando utilizada em um inimigo, o usuário pode negar uma ação padrão do alvo; ao gastar o dobro do custo, é possível negar um turno inteiro. Quando utilizada em um aliado, o usuário pode gastar sua ação para ordenar uma ação específica, concedendo ao aliado uma ação extra de sua escolha.', tier: 3 },
        ],

        alquimista: [
            { id: 'alq_1', nome: 'Especialista', desc: 'Especialista é uma ação bônus que custa 4 pontos de Foco. Ao ativar essa habilidade, o personagem recebe +1d10 em qualquer teste à sua escolha, seja ele ofensivo, defensivo ou utilitário. O bônus é aplicado a um único teste e deve ser declarado antes da rolagem.', tier: 1 },
            { id: 'alq_2', nome: 'Finta improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'alq_3', nome: 'Médico', desc: 'Médico é ativada como uma ação padrão ao custo base de 3 pontos de Foco e permite curar um aliado adjacente. A quantidade de cura depende do custo adicional investido: com o custo padrão, o alvo recupera 1d4 de Vida; ao dobrar o custo, a cura passa a ser 1d6; com custo triplo, 1d8; e com custo quádruplo, 1d10. Além disso, o usuário adiciona um dado extra de cura para cada nível de personagem, utilizando sempre o tipo de dado correspondente ao custo escolhido (por exemplo, no nível 9, uma cura padrão resultaria em 9d4).', tier: 2 },
            { id: 'alq_4', nome: 'Mãos rápidas', desc: 'Mãos Rápidas é ativada como uma ação bônus ao custo de 1 ponto de Foco. Ao usá-la, o personagem recebe uma ação padrão adicional na rodada, porém essa ação extra deve obrigatoriamente ser utilizada para uma atividade diferente daquela realizada na primeira ação padrão.', tier: 2 },
            { id: 'alq_5', nome: 'Reanimação', desc: 'Reanimação é ativada como uma ação padrão ao custo de 14 pontos de Foco e permite trazer de volta à vida um aliado morto em campo de batalha. Para isso, o usuário deve realizar um teste de Medicina com DT 50. Em caso de sucesso, o aliado retorna inconsciente com 1 ponto de Vida, podendo ser acordado com uma ação padrão. Caso esse aliado volte a ter sua Vida reduzida a 0 novamente, ele morre de forma definitiva, e novas tentativas de Reanimação passam a exigir um teste de Medicina com DT 60.', tier: 3 },
        ],

        artifice: [
            { id: 'art_1', nome: 'Especialista', desc: 'Especialista é uma ação bônus que custa 4 pontos de Foco. Ao ativar essa habilidade, o personagem recebe +1d10 em qualquer teste à sua escolha, seja ele ofensivo, defensivo ou utilitário. O bônus é aplicado a um único teste e deve ser declarado antes da rolagem.', tier: 1 },
            { id: 'art_2', nome: 'Finta improvisada', desc: 'Finta Improvisada é uma ação padrão que custa 2 pontos de Foco. Ao utilizá-la, o personagem substitui sua ação de ataque por uma manobra improvisada, podendo tentar derrubar ou desarmar o alvo.', tier: 1 },
            { id: 'art_3', nome: 'Aprimorador treinado', desc: 'Torreta de Combate consome o turno completo e custa 8 pontos de Foco. Ao ser ativada, o usuário cria uma torreta autônoma que ataca automaticamente uma vez por rodada o inimigo designado. A Vida da torreta e seu dano são definidos com base no nível do Artífice. A torreta permanece ativa até ser destruída ou desativada voluntariamente.', tier: 2 },
            { id: 'art_4', nome: 'Arpimorador Treinado', desc: 'Aprimorador Treinado é uma habilidade de interlúdio e não possui custo. Durante um interlúdio, o personagem pode gastar tempo refinando uma arma ou armadura. A arma aprimorada recebe um bônus de 50% no dano causado, enquanto uma armadura aprimorada concede 50% a mais de resistência. O efeito dura por uma cena completa de combate.', tier: 2 },
            { id: 'art_5', nome: 'Carga Sublime', desc: 'Carga Sublime é ativada como uma ação padrão ao custo de 6 pontos de Foco. O usuário insere um cartucho especial que, ao ser disparado, cria um campo com raio de até 8 metros que permanece ativo por 2 rodadas. O campo pode assumir um dos seguintes efeitos: Suporte, concedendo +6 de Defesa aos aliados dentro da área; Contenção, impedindo o movimento dos inimigos afetados; ou Sobrecarga, que libera uma onda de choque, podendo ser aplicada em área ou direcionada para um ponto específico.', tier: 3 },
        ],

        },
    auras: {
        reforco: [
            { id: 'ref_1', nome: 'Parrudo', desc: 'Parrudo é uma reação que custa 9 pontos de Mana e 3 pontos de Foco. Ao ser ativada, o personagem absorve metade do dano recebido, desde que o ataque não seja capaz de retirar mais da metade de sua Vida máxima em um único golpe. A habilidade evolui conforme o nível: no nível 4 o custo passa a 15 Mana e 3 Foco; no nível 8, 21 Mana e 3 Foco; no nível 12, 30 Mana e 4 Foco; no nível 16, 45 Mana e 5 Foco. A partir do nível 16, Parrudo pode absorver metade do dano de qualquer ataque, independentemente de sua magnitude.', tier: 1 },
            { id: 'ref_2', nome: 'Força Máxima', desc: 'DForça Máxima é uma ação bônus que custa 20 pontos de Mana. Ao ativá-la, o personagem converte o dano sofrido na rodada atual em poder ofensivo, adicionando +1d6 de dano ao ataque para cada 10 pontos de dano recebidos na mesma rodada. A habilidade escala com o nível: no nível 8 o custo passa a 30 Mana; no nível 12, 40 Mana; e no nível 16, 50 Mana.', tier: 2 },
            { id: 'ref_3', nome: 'Coagular', desc: 'Coagular é uma ação padrão que custa 30 pontos de Mana e 5 pontos de Foco. Ao utilizá-la, o personagem restaura metade da Vida perdida. Para cada ferida recuperada, o custo da habilidade aumenta progressivamente. Caso Coagular seja usada novamente, feridas que já tenham sido recuperadas anteriormente não entram no cálculo.', tier: 3 },
        ],

        emissao: [
            { id: 'emi_1', nome: 'Explosão Mágica', desc: 'Explosão Mágica é uma ação padrão que custa 12 pontos de Mana e 1 ponto de Foco. O personagem libera uma explosão de energia etérea que afeta todas as criaturas em um raio de 3 metros, causando 1d10 de dano etéreo para cada ponto de Intelecto. A habilidade progride com o nível: no nível 4 o raio aumenta para 6 metros; no nível 8 o dano passa a ser 1d12 por Intelecto; no nível 12 o raio aumenta para 12 metros; e no nível 16 o dano passa a ser 1d20 por Intelecto.', tier: 1 },
            { id: 'emi_2', nome: 'Devastar', desc: 'Devastar é uma ação bônus que custa 12 pontos de Mana fixos e 3 pontos de Foco por alvo adicional. Ao ativá-la, o personagem pode expandir um ataque corpo a corpo para atingir inimigos adicionais, desde que possua movimento suficiente para alcançá-los. O ataque progride de alvo em alvo, e o personagem termina a ação adjacente ao último inimigo atingido. A progressão de custo ocorre no nível 8 (20 Mana), nível 12 (28 Mana) e nível 16 (36 Mana).', tier: 2 },
            { id: 'emi_3', nome: 'Raio mágico', desc: 'Raio Mágico é uma ação padrão que custa 30 pontos de Mana e 2 pontos de Foco. O personagem dispara ou invoca um raio inevitável contra um alvo em alcance longo que esteja em sua linha de visão. O raio causa (Intelecto + Nível) / 2 d10 de dano etéreo e drena Vida, Mana e Foco do alvo atingido.', tier: 3 },
        ],

        transformacao: [
            { id: 'tra_1', nome: 'Agilizar Tempo', desc: 'Agilizar Tempo é usada como uma ação bônus ao custo de 12 pontos de Mana. Ao ativá-la, o personagem recebe imediatamente uma ação de movimento adicional na rodada.', tier: 1 },
            { id: 'tra_2', nome: 'Adrenalina', desc: 'Adrenalina é uma reação que custa 6 pontos de Mana. Ao utilizá-la, o personagem recebe imediatamente uma ação de movimento adicional, podendo agir mesmo fora do próprio turno.', tier: 2 },
            { id: 'tra_3', nome: 'Agilizar Tempo II', desc: 'Agilizar Tempo II é uma ação bônus que custa 15 pontos de Mana. Ao utilizá-la, o personagem recebe imediatamente uma ação padrão adicional na rodada.', tier: 3 },
        ],

        materializacao: [
            { id: 'mat_1', nome: 'Arma Mágica', desc: 'Arma Mágica é uma ação bônus que custa 14 pontos de Mana. Ao utilizá-la, o personagem conjura uma arma que causa dano etéreo adicional equivalente a 1d8 por ponto de Intelecto. A habilidade evolui conforme o nível: no nível 4 o custo passa a 24 Mana e o dano para 1d10 por Intelecto; no nível 12 o custo passa a 36 Mana e o dano para 1d12 por Intelecto; no nível 16 o custo passa a 48 Mana e o dano para 1d20 por Intelecto.', tier: 1},
            { id: 'mat_2', nome: 'Sutura', desc: 'Sutura é uma ação bônus que custa 8 pontos de Mana e 2 pontos de Foco por ferimento ativo. Ao utilizá-la, o personagem causa (Intelecto + Nível) / 2 d10 de dano adicional por ferimento existente no alvo. Após a aplicação da habilidade, todos os ferimentos são imediatamente fechados. A progressão de custo ocorre no nível 8 (14 Mana), nível 12 (20 Mana) e nível 16 (26 Mana).', tier: 2 },
            { id: 'mat_3', nome: 'Familiar', desc: 'Familiar é conjurado com tempo de um turno e custo de Mana variável à escolha do personagem. Ao utilizá-la, o personagem invoca um familiar com os mesmos atributos que ele. O dano do familiar é equivalente ao dano base do conjurador, e sua Vida é igual à quantidade de Mana gasta na invocação, podendo o personagem investir quantos pontos desejar.', tier: 3 },
        ],

        manipulacao: [
            { id: 'man_1', nome: 'Ás na manga', desc: 'Calmo e Preciso é ativada como uma ação de movimento ao custo de 3 pontos de Foco e deve ser usada antes de um ataque. Ao utilizá-la, o personagem sacrifica sua ação de movimento para realizar um ataque extremamente preciso; caso o ataque acerte, ele causa automaticamente o dano máximo possível. Se o ataque já consumir naturalmente a ação de movimento, Calmo e Preciso passa a consumir a ação da próxima rodada.', tier: 1 },
            { id: 'man_2', nome: 'Segunda chance', desc: 'Segunda Chance é uma ação bônus que custa 8 pontos de Mana e 2 pontos de Foco. Ao ativá-la, o personagem ou um aliado pode rerrolar um teste que tenha falhado, sendo obrigado a aceitar o novo resultado. A habilidade pode ser utilizada mais de uma vez, desde que os custos sejam pagos. O custo de Mana aumenta no nível 8 (14 Mana), nível 12 (18 Mana) e nível 16 (22 Mana).', tier: 2 },
            { id: 'man_3', nome: 'Especializado', desc: 'Especializado é uma ação bônus que custa 25 pontos de Mana e 5 pontos de Foco. Ao ativá-la, o personagem pode substituir o atributo normalmente utilizado em um teste por outro de sua preferência. A habilidade possui um limite de 2 usos por dia, que aumenta para 4 usos diários no nível 16, quando o custo passa a ser 40 pontos de Mana.', tier: 3 },
        ],
            },
    trilhas: {
        envoltura: [
        { id: 'env_1', nome: 'Troca', desc: 'Troca é uma ação bônus que custa 4 pontos de Mana. Ao utilizá-la, o personagem converte energia mágica em concentração, gerando 1 ponto de Foco para cada 4 pontos de Mana gastos dessa forma. A conversão ocorre imediatamente como parte da ação bônus.', tier: 1 },
        { id: 'env_2', nome: 'Absorsão Vital', desc: 'Absorção Vital é uma ação bônus que custa 20 pontos de Mana e 4 pontos de Foco e deve ser ativada antes de um ataque. Ao utilizá-la, o personagem passa a recuperar Vida equivalente a 50% do dano causado pelo ataque. A habilidade evolui conforme o nível: no nível 8, o custo passa a 30 Mana e 6 Foco; no nível 12, o custo passa a 40 Mana e 8 Foco e a recuperação aumenta para 75% do dano causado; no nível 16, o custo passa a 50 Mana e 10 Foco, e o personagem recupera 100% do dano causado como Vida.', tier: 2 },
        { id: 'env_3', nome: 'Barganha Insana', desc: 'Barganha Insana é uma ação bônus que custa 10% da Mana máxima do personagem e 50% de sua Vida atual. Ao utilizá-la, o personagem recupera toda a Mana imediatamente, ficando com 90% de sua Mana máxima. Até o fim da cena, sua Mana máxima é reduzida para 90% do valor normal.', tier: 3 },
        ],

        expansao: [
            { id: 'exp_1', nome: 'Ripostar', desc: 'Ripostar é uma reação que inicialmente custa 10 pontos de Mana. Sempre que o personagem consegue evitar completamente um golpe inimigo, ele pode realizar imediatamente um contra-ataque contra o agressor. A habilidade evolui com o nível: no nível 4, o custo passa a 15 Mana e o contra-ataque pode ser realizado caso o personagem evite ao menos 75% do dano do ataque; no nível 8, o custo passa a 20 Mana e o requisito cai para 50% do dano evitado; no nível 12, o custo passa a 25 Mana e basta evitar 25% do dano; no nível 16, o custo passa a 30 Mana e o personagem pode sempre contra-atacar ao ser atingido, independentemente da quantidade de dano evitada.', tier: 1 },
            { id: 'exp_2', nome: 'Correção', desc: 'Correção é uma ação bônus que custa 12 pontos de Mana. Ela pode ser usada imediatamente após um ataque ou uma defesa para aumentar em +2 o resultado obtido. A habilidade pode ser utilizada múltiplas vezes, desde que o personagem tenha Mana suficiente para pagar o custo a cada ativação.', tier: 2 },
            { id: 'exp_3', nome: 'Dash', desc: 'Dash é uma ação bônus cujo custo é de 2 pontos de Mana por metro percorrido. Ao utilizá-la, o personagem se teleporta instantaneamente para um ponto visível em até 8 metros de distância. Essa habilidade também pode ser usada como reação após qualquer ataque e pode ser combinada com ações de furtividade. No nível 16, a distância máxima do teleporte aumenta para 32 metros.', tier: 3 },
        ],

        liberacao: [
            { id: 'lib_1', nome: 'Começar com Tudo', desc: 'Começar com Tudo é uma ação bônus que custa 6 pontos de Mana. Ao ativá-la, o primeiro ataque bem-sucedido do personagem contra um inimigo causa dano crítico automaticamente. Caso o ataque já resulte em um acerto crítico natural no dado, o efeito é transferido para o próximo ataque realizado pelo personagem.', tier: 1 },
            { id: 'lib_2', nome: 'Ás na Manga', desc: 'Ás na Manga é uma ação padrão com custo contínuo de 2 pontos de Mana por rodada. Enquanto a habilidade estiver ativa, o personagem passa a gerar 1 ponto de Foco sempre que utiliza uma ação padrão. Ao gastar 1 ponto adicional de Mana na mesma rodada, esse ganho aumenta para 2 pontos de Foco. Enquanto Ás na Manga estiver ativa, o personagem ignora os efeitos de Exaustão. A habilidade escala com o nível: no nível 8, tanto o custo quanto os bônus são dobrados; no nível 12, são triplicados; e no nível 16, são quadruplicados.', tier: 2 },
            { id: 'lib_3', nome: 'Respiro', desc: 'Respiro é uma ação bônus que custa 25 pontos de Mana e deve ser utilizada antes de um ataque. Ao ativá-la, o personagem entra no estado de Transcendido por até 3 rodadas. Caso deseje encerrar esse estado antes do tempo, o personagem pode gastar 10 pontos adicionais de Mana como ação bônus para retornar ao normal.', tier: 3 },
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
        { id: 'mag_ar_1', tier: 1, nome: 'Manipulação Cinética', desc: 'Permite controlar o movimento por energia cinética, empurrando, puxando ou levitando objetos e criaturas leves ou médias dentro de alcance médio, além de possibilitar a autolevitação. Alvos resistentes podem resistir com força. Gasta pouca mana.<span class="termo-destaque" data-tooltip="Custo: 4 + (2 × MP) mana\nCanalização: ação padrão\nAlcance: (10 + MP) m\nAlvos: objetos ou criaturas leves ou médias; pode afetar o próprio conjurador\nÁrea: alvo único\nEfeito: empurra, puxa ou levita o alvo\nDeslocamento: até (5 + MP) m em qualquer direção válida\nResistência: criaturas podem fazer Teste de Força contra DT (5 + MP) para evitar o deslocamento\nObservações: não causa dano direto; objetos não realizam teste; não permite esmagamento para causar dano\n">Informações Detalhadas</span>' },

        { id: 'mag_terra_1', tier: 1, nome: 'Bala de Pedra', desc: 'Comprime e dispara uma pedra em alta velocidade contra um único alvo, causando dano contundente e perfurante ao impacto. Gasta uma quantidade pequena de mana e funciona a longo alcance.<span class="termo-destaque" data-tooltip="Custo: 4 + (2 × MP) mana\nCanalização: ação padrão\nAlcance: longo (35 m)\nAlvos: único\nÁrea: nenhuma\nTipo de dano: físico\nDano: (MP / 2,5) d10\nObservações: requer linha de visão; conta como ataque mágico à distância\n">Informações Detalhadas</span>' },

        { id: 'mag_fogo_1', tier: 1, nome: 'Bola de Fogo', desc: 'Dispara uma esfera ígnea que causa dano de fogo ao atingir o alvo e o deixa Incendiado. Requer uma quantidade moderada de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Ação: ação padrão\nCusto: 4 + (2 × MP) mana\nCanalização: instantânea\nAlcance: médio (15 m)\nAlvo: único\nDano: fogo\nEfeito: [MP/2,8 d10] de dano\nAplica Incendiado">Informações Detalhadas</span>' },

        { id: 'mag_agua_1', tier: 1, nome: `Criação d'água`, desc: 'Gera um bolsão de água que pode ser manipulado à distância. As magias subsequentes de água consomem o conteúdo do bolsão. Gasta uma quantidade pequena de mana e o alcance é médio.<span class="termo-destaque" data-tooltip="Ação: ação padrão\nCusto: 4 + (2 × MP) mana\nCanalização: instantânea\nAlcance: [12 + (MP × 2)] m\nEfeito: gera 6 Unidades de Água\nBolsão é origem de magias de água">Informações Detalhadas</span>' },
        


        { id: 'mag_ar_2', tier: 2, nome: 'Corte de Ar', desc: 'Lança uma lâmina invisível de ar comprimido em linha reta, atingindo alvos em alcance médio. Causa dano cortante à distância e pode impedir a reação imediata do alvo. Gasta mana moderada.<span class="termo-destaque" data-tooltip="Custo: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nAlcance: médio (15 m)\nÁrea: linha reta até o limite do alcance\nTipo de dano: físico\nDano: (MP / 2) d10\nEfeito adicional: alvo deve realizar Teste de Presença (DT 15)\nFalha no teste: alvo não pode reagir ao primeiro ataque recebido até o início do próximo turno\nObservações: atinge o primeiro alvo na linha; não atravessa obstáculos sólidos\n">Informações Detalhadas</span>' },

        { id: 'mag_terra_2', tier: 2, nome: 'Estalagmite', desc: 'Faz surgir uma lança de pedra do solo, causando dano em área ao emergir. Gasta uma quantidade moderada de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Custo: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nAlcance: médio (15 m)\nÁrea: raio de 2 m a partir do ponto escolhido\nTipo de dano: físico\nDano: (MP / 1,8) d10\nObservações: requer solo ou superfície compatível; criaturas aéreas não são afetadas\n">Informações Detalhadas</span>' },

        { id: 'mag_fogo_2', tier: 2, nome: 'Labareda', desc: 'Uma coluna de fogo irrompe do solo, causando dano de fogo e deixando os alvos incendiados. Gasta uma quantidade moderada de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nAlcance: médio (15 m)\nÁrea: raio de 3 m\nDano: fogo\nEfeito: [MP/2 d10] de dano\nAplica Incendiado">Informações Detalhadas</span>' },

        { id: 'mag_agua_2', tier: 2, nome: `Chicote d'água`, desc: 'Dispara um golpe rápido de água que causa dano em um alvo em alcance curto. Gasta uma quantidade moderada de mana e consome unidades de água do bolsão.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCusto adicional: 2 Unidades de Água\nCanalização: 1 turno\nAlcance: curto (5 m)\nAlvo: único\nDano: físico\nEfeito: [MP/1,8 d10] de dano">Informações Detalhadas</span>' },
        


        { id: 'mag_ar_3', tier: 3, nome: 'Vento Dual', desc: 'Cria vórtices de ar opostos que puxam ou empurram criaturas dentro de uma área. O conjurador define a direção do deslocamento, e alvos mais fortes podem resistir. Gasta muita mana.<span class="termo-destaque" data-tooltip="Custo: 35 + (MP × 1,11) mana\nCanalização: 1 turno + ação padrão\nAlcance: (12 + MP × 3) m\nÁrea: área circular definida pelo conjurador\nEfeito: deslocamento forçado (puxar ou empurrar)\nDeslocamento: entre (4 + MP) e (6 + MP × 1,5) m\nResistência: Teste de Força contra DT (5 + MP × 1,3)\nObservações: não causa dano; conjurador escolhe a direção do deslocamento\n">Informações Detalhadas</span>' },

        { id: 'mag_terra_3', tier: 3, nome: 'Imobilização', desc: 'Faz o solo agarrar um alvo, imobilizando-o por vários turnos. O alvo pode tentar se libertar, sofrendo dano se falhar. Gasta uma quantidade significativa de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Custo: 35 + (MP × 1,11) mana\nCanalização: 1 turno + ação padrão\nAlcance: médio (15 m)\nAlvos: único\nDuração máxima: até 3 turnos\nTipo de dano: físico (esmagamento)\nResistência: Teste de Força contra DT (10 + MP × 1,5)\nFalha no teste: alvo permanece imobilizado e sofre (MP / 3,5) d10 de dano\nTentativas subsequentes: DT reduzida em 10 a cada tentativa\nInteração: aliados podem ajudar na liberação\nObservações: requer contato com o solo; criaturas aéreas ou incorpóreas são imunes\n">Informações Detalhadas</span>' },

        { id: 'mag_fogo_3', tier: 3, nome: 'Parede de Fogo', desc: 'Ergue uma parede de fogo que bloqueia projéteis e causa dano de fogo a quem atravessar ou permanecer próxima. Gasta uma quantidade significativa de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nAlcance: médio (15 m)\nÁrea: [5 + MP] m × 3 m\nDuração: até 4 turnos\nDano: fogo\nEfeito: atravessar causa [MP/2 d12]\nAdjacente causa [MP/1,4 d12]\nAplica Incendiado\nBloqueia visão">Informações Detalhadas</span>' },

        { id: 'mag_agua_3', tier: 3, nome: 'Nuvem de Vapor', desc: 'Cria uma área de vapor denso, permitindo lançar magias de água de qualquer ponto dentro da área. Gasta uma quantidade significativa de mana e consome unidades de água do bolsão.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCusto adicional: 6 Unidades de Água\nCanalização: 1 turno\nÁrea: raio de 6 m\nDuração: enquanto houver vapor\nEfeito: magias podem partir da área\nConsome vapor ao conjurar">Informações Detalhadas</span>' },


        
        { id: 'mag_ar_4', tier: 4, nome: 'Velocidade Máxima', desc: 'Concede a si mesmo ou a um aliado em alcance curto um grande aumento de velocidade e esquiva por alguns turnos. Gasta muita mana.<span class="termo-destaque" data-tooltip="Custo: 60 + (MP / 2) mana\nCanalização: 2 turnos\nAlcance: curto (5 m)\nAlvos: si mesmo ou um aliado\nDuração: (MP / 4) turnos\nEfeito: +50% em velocidade de movimento e esquiva\nObservações: não acumula com outros efeitos de velocidade; termina se o alvo ficar inconsciente\n">Informações Detalhadas</span>' },

        { id: 'mag_terra_4', tier: 4, nome: 'Nuvem de Fumaça', desc: 'Cria uma nuvem de fumaça que reduz a visão e torna os ataques à distância mais difíceis. Gasta uma grande quantidade de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Custo: 60 + (MP / 2) mana\nCanalização: 2 turnos\nAlcance: (MP) m\nÁrea: raio de (MP / 3) m\nDuração: 3 turnos\nEfeito: visão severamente reduzida dentro da área\nPenalidades: desvantagem em Percepção visual\nAtaques à distância: falham automaticamente se atravessarem a fumaça\nBônus: testes de Furtividade dentro da área têm vantagem\nObservações: não impede movimento; pode ser dispersada por ventos fortes\n">Informações Detalhadas</span>' },

        { id: 'mag_fogo_4', tier: 4, nome: 'Imbuir', desc: 'Encanta uma arma corpo a corpo, fazendo com que cause dano adicional de fogo em cada golpe. Gasta uma grande quantidade de mana e tem alcance curto.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCanalização: 2 turnos\nAlcance: toque\nDuração: [MP/3] turnos\nDano adicional: fogo\nEfeito: +[MP/4 d12] por ataque\nNão acumula">Informações Detalhadas</span>' },

        { id: 'mag_agua_4', tier: 4, nome: 'Corte de Água', desc: 'Projeta uma lâmina de água de alta pressão que causa dano em um único alvo ou em uma área em cone. Gasta uma quantidade grande de mana e consome unidades de água do bolsão.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCusto adicional: 4 Unidades de Água\nCanalização: 2 turnos\nAlcance: médio (15 m)\nForma: alvo único ou cone\nDano: físico\nEfeito: [MP/1,3 d12] de dano">Informações Detalhadas</span>' },
       


        { id: 'mag_ar_5', tier: 5, nome: 'Barreira de Ar', desc: 'Ergue uma parede de vento que bloqueia projéteis vindos de fora, permitindo ataques de dentro para fora. Permanece por várias rodadas e tem grande extensão. Gasta uma quantidade extrema de mana.<span class="termo-destaque" data-tooltip="Custo: 120 + (MP / 5) mana\nCanalização: 3 turnos\nAlcance: médio (15 m)\nDuração: (MP / 2) rodadas\nDimensões: comprimento máximo de (5 + MP) m\nEfeito: bloqueia projéteis vindos de fora\nInteração: ataques disparados de dentro atravessam livremente\nObservações: não bloqueia visão; criaturas podem atravessar a barreira\n">Informações Detalhadas</span>' },  

        { id: 'mag_terra_5', tier: 5, nome: 'Terremoto', desc: 'Faz o solo tremer, derrubando criaturas e afetando estruturas próximas. Gasta uma quantidade massiva de mana e tem alcance grande, afetando uma vasta área.<span class="termo-destaque" data-tooltip="Custo: 120 + (MP / 5) mana\nCanalização: 3 turnos\nÁrea: raio de até (MP × 5) m\nResistência: Teste de Força contra DT (4 × MP)\nFalha no teste: criatura fica derrubada e desarmada\nEfeito adicional: estruturas próximas sofrem dano de soterramento conforme o porte\nObservações: não afeta criaturas voadoras; pode causar colapso estrutural\n">Informações Detalhadas</span>' },

        { id: 'mag_fogo_5', tier: 5, nome: 'Chama Incansável', desc: 'Reativa queimaduras causadas anteriormente, causando dano adicional e renovando o efeito de queimadura. Gasta uma quantidade massiva de mana e tem alcance médio.<span class="termo-destaque" data-tooltip="Ação: 3 turnos\nCusto: 120 + (MP / 5) mana\nCanalização: 3 turnos\nAlvo: inimigo incendiado por você\nDano: fogo\nEfeito: [MP/2 d20] imediato\nRenova Incendiado (2 turnos)">Informações Detalhadas</span>' },

        { id: 'mag_agua_5', tier: 5, nome: 'Prisão Aquática', desc: 'Cria um domo de água que bloqueia a visão e projéteis. Gasta uma quantidade massiva de mana e consome unidades de água do bolsão.<span class="termo-destaque" data-tooltip="Ação: 3 turnos\nCusto: 120 + (MP / 5) mana\nCusto adicional: 6 Unidades de Água\nCanalização: 3 turnos\nAlcance: médio (15 m)\nÁrea: domo (3 m raio)\nDuração: [MP/2] turnos\nEfeito: bloqueia projéteis e visão\nTeste Vigor [DT 15 + MP × 1,5] para escapar\nFalha aplica Afogando">Informações Detalhadas</span>' },
    ],
    fimbulwinter: [
        { id: 'fim_1', tier: 1, nome: 'Globo de Neve', desc: 'Congela uma grande área do terreno, transformando o local em um campo permanentemente gelado enquanto o efeito durar. Dentro do Globo de Neve, todas as magias do Fimbulwinter exigem significativamente menos mana para serem conjuradas. Gasta uma quantidade moderada de mana.<span class="termo-destaque" data-tooltip="Ação: ação padrão\nCusto: 4 + (2 × MP) mana\nCanalização: instantânea\nÁrea: raio de [5 + MP] m\nDuração: enquanto o Fimbulwinter permanecer\nEfeito: terreno congelado\nMagias Fimbulwinter custam metade">Informações Detalhadas</span>' },
        { id: 'fim_2', tier: 1, nome: 'Lâmina de Gelo', desc: 'Cria várias lâminas afiadas de gelo que podem ser atiradas rapidamente. As lâminas podem atingir um único alvo ou serem distribuídas entre vários inimigos, causando dano cortante a cada impacto. Gasta uma quantidade pequena de mana e funciona a curto ou médio alcance.<span class="termo-destaque" data-tooltip="Ação: ação padrão\nCusto: 4 + (2 × MP) mana\nCanalização: instantânea\nAlcance: médio (15 m)\nAlvos: até 5\nDano: gelo\nEfeito: [MP/3,5 d10] por lâmina">Informações Detalhadas</span>' },
        { id: 'fim_3', tier: 2, nome: 'Resfriar', desc: 'Imbuí um item adjacente com frio extremo. Criaturas que não dominam o poder do Fimbulwinter sofrem dano contínuo ao utilizar o item e têm grande dificuldade em executar ações enquanto o efeito persistir. Gasta uma quantidade moderada de mana e exige contato próximo.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nAlcance: curto (5 m)\nAlvo: item equipado\nDano: gelo\nEfeito: usuário não-Fimbulwinter sofre [MP/3 d10]/rodada (máx. 3)\n–2 dados em ações">Informações Detalhadas</span>' },
        { id: 'fim_4', tier: 3, nome: 'Prender no Gelo', desc: 'Após um inimigo ser afetado por uma magia de Fimbulwinter, você tenta congelá-lo parcialmente. O frio reduz progressivamente sua capacidade de agir, podendo levá-lo à completa imobilização caso permaneça preso por tempo prolongado. O alvo pode tentar resistir ou receber ajuda de aliados para se libertar. Gasta uma quantidade significativa de mana e funciona a médio alcance.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nAlcance: médio (15 m)\nPré-requisito: alvo atingido por magia Fimbulwinter\nResistência: Força [DT 10 + MP × 1,5]\nEfeito: falha 1 perde Movimento\nFalha 2 perde Turno\nDT –10 por tentativa">Informações Detalhadas</span>' },
        { id: 'fim_5', tier: 3, nome: 'Restauração Gélida', desc: 'Utiliza o frio para selar ferimentos, interromper sangramentos e reduzir inflamações, restaurando parte da vitalidade do usuário. Não pode ser utilizada se o conjurador estiver inconsciente ou à beira da morte. Gasta uma quantidade significativa de mana e afeta apenas o próprio usuário.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nAlvo: si mesmo\nCura: [MP/3 d12]\nRestrição: não funciona a 0 de Vida">Informações Detalhadas</span>' },
        { id: 'fim_6', tier: 4, nome: 'Raio de Gelo', desc: 'Dispara um feixe concentrado de energia gélida em alcance longo, causando dano elevado e congelamento interno. Se o alvo estiver dentro de um Globo de Neve, o efeito é intensificado, causando mais dano e prejudicando temporariamente suas ações. Gasta uma quantidade grande de mana.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCanalização: 2 turnos\nAlcance: longo (35 m)\nDano: gelo\nEfeito: [MP/1,4 d12]\nNo Globo: [MP/1,1 d12]\n–1 dado por 2 rodadas">Informações Detalhadas</span>' },
        { id: 'fim_7', tier: 4, nome: 'Veneno Glacial', desc: 'Cria uma névoa quase invisível de frio extremo em uma grande área. Criaturas que inalarem o vapor sofrem congelamento interno e dano contínuo. Exposição repetida reduz drasticamente a capacidade de movimento dos alvos. Gasta uma quantidade grande de mana e permanece ativa por vários turnos.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCanalização: 2 turnos\nÁrea: até área do Globo de Neve\nResistência: Vigor [DT 15 + MP]\nDano: gelo\nEfeito: [MP/1,4 d10]\n2 rodadas reduzem Movimento pela metade">Informações Detalhadas</span>' },
        { id: 'fim_8', tier: 5, nome: 'Clone de Gelo', desc: 'Dano perfurante.Cria um clone idêntico ao conjurador feito de gelo sólido. O clone possui suas próprias ações e pode usar as mesmas habilidades do original, mas se desfaz após sofrer alguns golpes. Ele só pode existir dentro de um Globo de Neve. Gasta uma quantidade massiva de mana e dura alguns turnos.<span class="termo-destaque" data-tooltip="Ação: 3 turnos\nCusto: 120 + (MP / 5) mana\nCanalização: 3 turnos\nDuração: [MP/3] rodadas\nPV do clone: 3 golpes\nRestrição: não sai do Globo\nEfeito: age em rodada própria">Informações Detalhadas</span>' },
    ],
    feengari: [
        { id: 'fee_1', tier: 1, nome: 'Alma Sombria', desc: 'Dispara um projétil etéreo em linha reta que atravessa o ar como uma sombra condensada, atingindo um alvo em alcance médio e causando dano etéreo direto. Gasta uma quantidade pequena de mana e é uma magia ofensiva simples e confiável. Nos níveis altos possui uma versão especial.<span class="termo-destaque" data-tooltip="Ação: ação padrão\nCusto: 4 + (2 × MP) mana\nCanalização: instantânea\nAlcance: médio (15 m)\nForma: linha reta\nDano: etéreo\nEfeito: [MP/2,5 d10]">Informações Detalhadas</span>' },
        { id: 'fee_2', tier: 2, nome: 'Escuridão Descendente', desc: 'O conjurador se projeta rapidamente através das sombras em um deslocamento curto, surgindo em outro ponto e liberando uma onda de energia sombria no local de chegada. O impacto causa dano sombrio em uma pequena área ao redor. Gasta uma quantidade moderada de mana e combina mobilidade com dano.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nMovimento: dash curto (5 m)\nÁrea: pequena ao redor do impacto\nDano: sombrio\nEfeito: [MP/2 d10]">Informações Detalhadas</span>' },
        { id: 'fee_3', tier: 2, nome: 'Caminhar das Sombras', desc: 'Permite ao conjurador se teleportar instantaneamente para qualquer região sem luz dentro de um grande alcance. O deslocamento é silencioso e não quebra furtividade. Gasta mana moderada e exige que o destino esteja envolto em sombras ou escuridão total.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nAlcance: [10 + (MP × 2)] m\nRestrição: área sem luz\nEfeito: teleporte sem quebrar furtividade">Informações Detalhadas</span>' },
        { id: 'fee_4', tier: 3, nome: 'Dança da Penumbra', desc: 'O corpo do conjurador se dissolve parcialmente nas sombras, tornando-se invisível por alguns turnos. A invisibilidade pode ser quebrada caso alguém perceba sua presença com atenção extrema. Qualquer ataque realizado encerra o efeito imediatamente. Gasta uma quantidade significativa de mana e é ideal para infiltração ou reposicionamento.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nDuração: ~[MP/4] rodadas\nEfeito: invisibilidade\nRevelação: Presença [DT 12 + Mod. Aura]\nAtacar encerra">Informações Detalhadas</span>' },
        { id: 'fee_5', tier: 3, nome: 'Sombra Viva', desc: 'Cria uma sombra autônoma ligada à vontade do conjurador. Ela se move livremente em curto alcance, mas não ataca nem interage fisicamente com o ambiente. A sombra se dissipa ao ser atingida. Pode servir como ponto de origem para Caminhar das Sombras, permitindo conjurar ambas as magias em uma única ação prolongada. Gasta uma quantidade significativa de mana. Nos níveis altos possui uma versão especial.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nAlcance: curto (5 m)\nPV: 1\nEfeito: ponto válido para Caminhar das Sombras">Informações Detalhadas</span>' },
        { id: 'fee_6', tier: 4, nome: 'Murmúrios do Vazio', desc: 'Sussurros etéreos invadem a mente de um alvo em alcance médio, distorcendo percepções, emoções ou implantando memórias falsas. O efeito pode durar vários turnos dependendo da resistência mental do alvo. Aliados podem ajudar a vítima a romper a influência sombria. Gasta muita mana e exige concentração.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCanalização: 2 turnos\nAlcance: médio (15 m)\nResistência: Presença [DT 15 + MP]\nDuração: 2 a 4 rodadas conforme falha">Informações Detalhadas</span>' },
        { id: 'fee_7', tier: 4, nome: 'Silêncio Sombrio', desc: 'Cria uma zona de escuridão densa que abafa sons e reduz drasticamente a visão dentro da área. Criaturas no interior têm dificuldade em perceber ameaças e se comunicar. O efeito pode ser mantido por vários turnos ao custo contínuo de mana. Gasta uma quantidade grande de mana e controla fortemente o campo de batalha.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\n+6 por rodada mantida\nCanalização: 2 turnos\nÁrea: raio de [6 + MP] m\nDuração: até 4 rodadas\nEfeito: visão adjacente apenas\n–2 dados em Presença">Informações Detalhadas</span>' },
        { id: 'fee_8', tier: 5, nome: 'Grito do Abismo', desc: 'O conjurador libera um grito distorcido e antinatural que se propaga em cone, causando dano massivo e desorientação mental. Alvos afetados têm seus movimentos prejudicados temporariamente caso não resistam à pressão psicológica do som. Gasta uma quantidade massiva de mana. Nos níveis altos possui uma versão especial.<span class="termo-destaque" data-tooltip="Ação: 3 turnos\nCusto: 120 + (MP / 5) mana\nCanalização: 3 turnos\nÁrea: cone médio (15 m)\nDano: etéreo\nEfeito: [MP/1,5 d20]\nResistência: Presença [DT 15 + MP]\n–1 movimento por 1 rodada">Informações Detalhadas</span>' },
    ],
    ascendente: [
        { id: 'asc_1', tier: 1,nome: 'Eco da Raiva', desc: 'O conjurador canaliza sua fúria acumulada e a libera em uma explosão violenta ao seu redor. A onda de impacto causa dano físico amplificado por energia primal em alcance curto e empurra os inimigos atingidos para longe. Gasta uma quantidade pequena de mana e é eficaz para abrir espaço em combate próximo.<span class="termo-destaque" data-tooltip="Ação: ação padrão\nCusto: 4 + (2 × MP) mana\nCanalização: instantânea\nAlcance: curto (5 m)\nÁrea: explosão ao redor do conjurador\nDano: físico\nEfeito: [MP/2,5 d10]\nEmpurra inimigos">Informações Detalhadas</span>' },
        { id: 'asc_2', tier: 2,nome: 'Rugido Bestial', desc: 'A fera interior do conjurador se manifesta através de um rugido primal que ecoa em uma ampla área ao redor. Inimigos afetados devem resistir mentalmente ou sofrem penalidades graduais, que variam desde dificuldade em atacar até a perda total de ações no próximo turno, dependendo da intensidade da falha. Gasta uma quantidade moderada de mana e é focada em controle psicológico agressivo.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nÁrea: raio de [MP + 5] m\nResistência: Presença [DT 10 + (MP × 2)]\nEfeito: penalidades graduais conforme falha">Informações Detalhadas</span>' },
        { id: 'asc_3', tier: 2,nome: 'Chama Ancestral', desc: 'O conjurador desperta um poder antigo adormecido em seu sangue. Durante alguns turnos, todos os seus ataques corpo a corpo passam a causar dano mágico adicional, manifestado como energia ancestral incandescente que envolve seus golpes. Gasta uma quantidade moderada de mana e fortalece o combate direto.<span class="termo-destaque" data-tooltip="Ação: turno\nCusto: 20 + (MP × 1,3) mana\nCanalização: 1 turno\nDuração: 4 turnos\nTipo de dano: etéreo\nEfeito: +[MP/4 d10] em ataques corpo a corpo">Informações Detalhadas</span>' },
        { id: 'asc_4', tier: 3,nome: 'Abraçar a Dor', desc: 'O conjurador aceita a própria dor como combustível para o poder. Enquanto o efeito durar, quanto mais ferido estiver, maior será o dano que causa. Em estados críticos de vida, o poder alcança níveis extremos. Gasta uma quantidade significativa de mana e recompensa estilos de combate arriscados.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nDuração: [MP/3] rodadas\nEfeito: bônus de dano escalando com Vida">Informações Detalhadas</span>' },
        { id: 'asc_5', tier: 3,nome: 'Físico Monstruoso', desc: 'O corpo do conjurador se distorce de forma brutal, músculos se expandem e a carne se torna mais resistente. Durante a duração do efeito, ele ganha aumento significativo de mobilidade e uma grande quantidade de proteção física. Gasta uma quantidade significativa de mana e transforma o conjurador em uma ameaça frontal dominante.<span class="termo-destaque" data-tooltip="Ação: turno + ação padrão\nCusto: 35 + (MP × 1,11) mana\nCanalização: 1 turno\nDuração: [MP/3] turnos\nEfeito: +[MP/5] m movimento\n+[MP] armadura">Informações Detalhadas</span>' },
        { id: 'asc_6', tier: 4,nome: 'Fúria Incontrolável', desc: 'O conjurador marca um inimigo visível como foco absoluto de sua raiva. Enquanto o alvo estiver marcado, o conjurador ignora efeitos de controle e impedimentos, avançando implacavelmente em sua direção com maior mobilidade. Se o alvo cair, o efeito se encerra imediatamente. Gasta uma quantidade grande de mana e força confrontos diretos.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCanalização: 2 turnos\nAlvo: 1 inimigo visível\nDuração: [1 + MP/4] turnos\nEfeito: ignora controle\n+3 m ao avançar">Informações Detalhadas</span>' },
        { id: 'asc_7', tier: 4,nome: 'Roubo Primordial', desc: 'Os ataques físicos do conjurador passam a drenar vitalidade dos inimigos, convertendo parte do dano causado em cura. Quanto mais ferido o conjurador estiver, mais potente se torna o efeito de drenagem. Derrotar um inimigo sob esse efeito resulta em uma recuperação massiva de vida. Gasta uma quantidade grande de mana e sustenta combates prolongados.<span class="termo-destaque" data-tooltip="Ação: 2 turnos\nCusto: 60 + (MP / 2) mana\nCanalização: 2 turnos\nDuração: [1 + MP/4] turnos\nEfeito: roubo de vida\ncura escalonada por Vida">Informações Detalhadas</span>' },
        { id: 'asc_8', tier: 5,nome: 'Ignorar Dor', desc: 'O conjurador suprime completamente os sinais de colapso físico. Enquanto o efeito durar, ele continua lutando mesmo após sofrer ferimentos fatais, ignorando a queda por exaustão ou morte iminente. Quando a magia termina, caso ainda esteja gravemente ferido, o corpo finalmente cede. Gasta uma quantidade massiva de mana.<span class="termo-destaque" data-tooltip="Ação: 3 turnos\nCusto: 120 + (MP / 5) mana\nCanalização: 3 turnos\nDuração: [MP/4] turnos\nEfeito: não cai a 0 de Vida\nqueda ao fim do efeito">Informações Detalhadas</span>' },
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