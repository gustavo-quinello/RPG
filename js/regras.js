// Inicializa ícones
lucide.createIcons();

// SISTEMA DE BUSCA DE REGRAS
function searchRules() {
    const input = document.getElementById('searchInput');
    const term = input.value.toUpperCase();
    
    // Seleciona todas as SEÇÕES PRINCIPAIS
    const mainSections = document.querySelectorAll('.main-section');

    mainSections.forEach(section => {
        // 1. Verifica se o Título Principal da Seção (H2) dá match
        const sectionTitle = section.querySelector('.section-title h2')?.innerText.toUpperCase() || "";
        const isSectionMatch = sectionTitle.includes(term);

        // Seleciona todos os GRUPOS (Subdivisões) dentro desta seção
        const subGroups = section.querySelectorAll('.sub-section-group');
        let sectionHasVisibleContent = false;

        subGroups.forEach(group => {
            // 2. Verifica se o Título da Subdivisão (H3) dá match
            const subTitle = group.querySelector('.sub-title h3')?.innerText.toUpperCase() || "";
            const isSubMatch = subTitle.includes(term);

            // Seleciona todos os ARTICLES dentro deste grupo
            const articles = group.querySelectorAll('article');
            let groupHasVisibleContent = false;

            articles.forEach(article => {
                // 3. Verifica se o Título do Artigo dá match
                const articleTitle = article.querySelector('h3')?.innerText.toUpperCase() || "";
                const isArticleMatch = articleTitle.includes(term);

                // LÓGICA DE EXIBIÇÃO DO ARTIGO
                // Mostra o artigo se: 
                // A seção inteira deu match OU o subtítulo deu match OU o próprio artigo deu match
                if (isSectionMatch || isSubMatch || isArticleMatch) {
                    article.style.display = ""; // Mostra
                    groupHasVisibleContent = true; // Marca que este grupo tem coisa pra mostrar
                } else {
                    article.style.display = "none"; // Esconde
                }
            });

            // LÓGICA DE EXIBIÇÃO DO GRUPO (SUBDIVISÃO)
            // Se o usuário pesquisou "Atributos" (isSubMatch), mostramos o grupo todo,
            // mesmo que os artigos individuais não tenham dado match no texto,
            // nós forçamos a exibição deles no loop acima via 'isSubMatch'.
            
            if (isSectionMatch || isSubMatch || groupHasVisibleContent) {
                group.style.display = "";
                sectionHasVisibleContent = true;
            } else {
                group.style.display = "none";
            }
        });

        // LÓGICA DE EXIBIÇÃO DA SEÇÃO PRINCIPAL
        if (isSectionMatch || sectionHasVisibleContent) {
            section.style.display = "";
        } else {
            section.style.display = "none";
        }
    });
}