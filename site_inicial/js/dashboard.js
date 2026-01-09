// Inicializa ícones
lucide.createIcons();

/**
 * LÓGICA DE UI DO DASHBOARD
 */
document.addEventListener('auth:ready', (event) => {
    const user = event.detail;

    // 1. Atualiza Nome
    const nameEl = document.getElementById('user-name');
    nameEl.textContent = user.username;

    // 2. Define se é Mestre (Aceita 'mestre' ou 'gamemaster' para compatibilidade)
    const isMaster = user.role === 'mestre' || user.role === 'gamemaster';

    // 3. Atualiza Badge de Cargo (Role)
    const roleEl = document.getElementById('user-role');
    roleEl.textContent = isMaster ? 'Mestre da Mesa' : 'Aventureiro';
    roleEl.className = `text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
        isMaster ? 'role-badge-mestre' : 'role-badge-jogador'
    }`;

    // 4. Lógica de Exibição do Painel de Combate
    // Se for Mestre, removemos a classe 'hidden' do card
    if (isMaster) {
        const cardCombate = document.getElementById('card-combate');
        if (cardCombate) {
            cardCombate.classList.remove('hidden');
        }
    }
});
