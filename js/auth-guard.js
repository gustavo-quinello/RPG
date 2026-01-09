/**
 * AUTH GUARD - RPG MANAGER V2
 * * Este script deve ser importado no <head> de TODAS as páginas protegidas
 * (dashboard.html, ficha.html, combate.html, etc).
 * * Função:
 * 1. Verifica se existe sessão ativa.
 * 2. Se NÃO houver -> Redireciona para login.html.
 * 3. Se houver -> Carrega dados do perfil (Role) e injeta no window.currentUser.
 */

const GUARD_CONFIG = {
    loginPage: 'index.html',
    supabaseUrl: "https://uoeixaiwyqjtbcqduzid.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA"
};

// Inicializa Supabase (Global no escopo da janela)
if (typeof supabase === 'undefined') {
    console.error("AuthGuard: Supabase SDK não encontrado. Certifique-se de importar o CDN antes deste script.");
} else {
    window.sbClient = supabase.createClient(GUARD_CONFIG.supabaseUrl, GUARD_CONFIG.supabaseKey);
    runAuthCheck();
}

async function runAuthCheck() {
    try {
        // 1. Verifica Sessão
        const { data: { session }, error } = await window.sbClient.auth.getSession();

        if (error || !session) {
            // Sem sessão -> Kick
            console.warn("AuthGuard: Acesso negado. Redirecionando...");
            window.location.href = GUARD_CONFIG.loginPage;
            return;
        }

        // 2. Sessão existe -> Carregar Perfil
        // Isso garante que sabemos se é Player ou Mestre antes da página renderizar
        const { data: profile, error: profileError } = await window.sbClient
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

        if (profileError) {
            console.error("AuthGuard: Erro ao carregar perfil.", profileError);
            // Opcional: Deslogar se não tiver perfil válido
            return;
        }
                // Tratamento do Nome de Usuário
        // Se profile.username estiver vazio, pega a parte do email antes do '@'
        let displayUser = profile.username;
        if (displayUser && session.user.email) {
            displayUser = session.user.email.split('@')[0];
        }

        // 3. Sucesso -> Salva dados globais para uso na aplicação
        window.currentUser = {
            id: session.user.id,
            username: displayUser.toUpperCase(),
            role: profile.role, // 'gamemaster' ou 'player'
            email: session.user.email
        };

        console.log(`AuthGuard: Bem-vindo, ${profile.username} [${profile.role}]`);
        
        // Dispara evento customizado para avisar a página que está tudo pronto
        document.dispatchEvent(new CustomEvent('auth:ready', { detail: window.currentUser }));

    } catch (err) {
        console.error("AuthGuard: Erro crítico.", err);
        window.location.href = GUARD_CONFIG.loginPage;
    }
}

/**
 * Função utilitária para Logout
 * Pode ser chamada por qualquer botão de sair: onclick="doLogout()"
 */
window.doLogout = async function() {
    await window.sbClient.auth.signOut();
    window.location.href = GUARD_CONFIG.loginPage;
}