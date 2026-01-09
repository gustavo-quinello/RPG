// Inicializa ícones
lucide.createIcons();

// --- 1. CONFIGURAÇÃO SUPABASE (CORRIGIDA) ---
// Usamos 'sbClient' para evitar conflito com a variável global 'supabase' da biblioteca
const supabaseUrl = "https://uoeixaiwyqjtbcqduzid.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA"

// Verifica se a biblioteca carregou
let sbClient;
if (typeof window.supabase !== 'undefined') {
    sbClient = window.supabase.createClient(supabaseUrl, supabaseKey);
    console.log("Supabase inicializado com sucesso.");
} else {
    console.error("ERRO CRÍTICO: Biblioteca Supabase não carregada.");
    document.getElementById('feedback-msg').textContent = "Erro de conexão com o servidor.";
    document.getElementById('feedback-msg').classList.remove('hidden');
}

// Domínio fictício para técnica "Invisible Email"
const EMAIL_DOMAIN = "@rpg.sistema";

// --- 2. LÓGICA DE UI (TABS & SLIDESHOW) ---
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const formLogin = document.getElementById('login-form');
const formRegister = document.getElementById('register-form');
const feedbackMsg = document.getElementById('feedback-msg');

// Toggle Forms com Animação Suave
function switchTab(mode) {
    feedbackMsg.classList.add('hidden'); // Limpa mensagens
    
    if (mode === 'login') {
        // Estilos dos Botões
        tabLogin.classList.add('bg-slate-700', 'text-white', 'shadow-md');
        tabLogin.classList.remove('text-slate-400', 'hover:text-white');
        tabRegister.classList.remove('bg-slate-700', 'text-white', 'shadow-md');
        tabRegister.classList.add('text-slate-400', 'hover:text-white');
        
        // Transição: Esconde Register -> Mostra Login
        formRegister.classList.add('fade-out');
        
        setTimeout(() => {
            formRegister.classList.add('hidden-layout');
            formLogin.classList.remove('hidden-layout');
            
            // Pequeno delay para o browser renderizar o display:block antes da opacidade
            requestAnimationFrame(() => {
                formLogin.classList.remove('fade-out');
            });
        }, 300);

    } else {
        // Estilos dos Botões
        tabRegister.classList.add('bg-slate-700', 'text-white', 'shadow-md');
        tabRegister.classList.remove('text-slate-400', 'hover:text-white');
        tabLogin.classList.remove('bg-slate-700', 'text-white', 'shadow-md');
        tabLogin.classList.add('text-slate-400', 'hover:text-white');

        // Transição: Esconde Login -> Mostra Register
        formLogin.classList.add('fade-out');

        setTimeout(() => {
            formLogin.classList.add('hidden-layout');
            formRegister.classList.remove('hidden-layout');
            
            requestAnimationFrame(() => {
                formRegister.classList.remove('fade-out');
            });
        }, 300);
    }
}
tabLogin.addEventListener('click', () => switchTab('login'));
tabRegister.addEventListener('click', () => switchTab('register'));

// Slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

console.log(`Slides encontrados: ${slides.length}`);

if (slides.length > 0) {
    setInterval(() => {
        // Remove active do atual
        slides[currentSlide].classList.remove('active');
        // Calcula próximo
        currentSlide = (currentSlide + 1) % slides.length;
        // Adiciona active no próximo
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Função de Feedback Visual
function showMessage(msg, type) {
    feedbackMsg.textContent = msg;
    feedbackMsg.classList.remove('hidden', 'bg-red-900/50', 'text-red-200', 'border-red-700', 'bg-emerald-900/50', 'text-emerald-200', 'border-emerald-700');
    
    if (type === 'error') {
        feedbackMsg.classList.add('bg-red-900/50', 'text-red-200', 'border-red-700', 'border');
    } else {
        feedbackMsg.classList.add('bg-emerald-900/50', 'text-emerald-200', 'border-emerald-700', 'border');
    }
}

// --- 3. LÓGICA DE AUTH (LOGIN) ---
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-login');
    const originalText = btn.innerHTML;
    
    // UI Loading
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Conjurando...`;
    lucide.createIcons();

    const username = document.getElementById('login-user').value.trim();
    const password = document.getElementById('login-pass').value;
    const email = username + EMAIL_DOMAIN;

    try {
        if (!sbClient) throw new Error("Supabase não inicializado.");

        const { data, error } = await sbClient.auth.signInWithPassword({ email, password });

        if (error) throw error;

        // Sucesso Login
        showMessage("Acesso concedido. Entrando...", "success");
        
        // Redirecionamento seguro
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Alvo do redirecionamento
        }, 1000);

    } catch (err) {
        console.error(err);
        showMessage("Usuário ou senha inválidos.", "error");
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
});

// --- 4. LÓGICA DE AUTH (REGISTRO) ---
formRegister.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-register');
    const originalText = btn.innerHTML;
    
    // UI Loading
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Inscrevendo...`;
    lucide.createIcons();

    const username = document.getElementById('reg-user').value.trim();
    const password = document.getElementById('reg-pass').value;
    
    // Validações básicas
    if(username.includes(' ')) {
        showMessage("O nome de usuário não pode conter espaços.", "error");
        btn.disabled = false;
        btn.innerHTML = originalText;
        return;
    }
    if(username.length < 3) {
        showMessage("Nome muito curto (min 3 letras).", "error");
        btn.disabled = false;
        btn.innerHTML = originalText;
        return;
    }

    const email = username + EMAIL_DOMAIN;

    try {
        if (!sbClient) throw new Error("Supabase não inicializado.");

        // 1. Criar Auth User
        const { data: authData, error: authError } = await sbClient.auth.signUp({ 
            email, 
            password 
        });

        if (authError) throw authError;

        if (authData.user) {
            // 2. Criar entrada na tabela Profiles (Crucial para o sistema de Username)
            const { error: profileError } = await sbClient
                .from('profiles')
                .insert([
                    { 
                        id: authData.user.id, 
                        username: username, 
                        role: 'jogador' 
                    }
                ]);

                showMessage("Registro concluído! Entrando...", "success");
                setTimeout(() => {
                        window.location.href = "dashboard.html";
                }, 1500);
        }

    } catch (err) {
        console.error(err);
        let msg = "Erro ao registrar.";
        if(err.message && err.message.includes("already registered")) msg = "Este nome de usuário já existe.";
        if(err.message && err.message.includes("Password should be")) msg = "A senha deve ter pelo menos 6 caracteres.";
        showMessage(msg, "error");
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
});

// --- 5. VERIFICAÇÃO INICIAL (AUTH GUARD SIMPLIFICADO) ---
// Se já estiver logado, manda para o dashboard direto ao abrir a pagina
(async () => {
    if (sbClient) {
        const { data: { session } } = await sbClient.auth.getSession();
        if (session) {
            // Opcional: Mostrar loading ou redirecionar
            console.log("Usuário já logado. Redirecionando...");
            window.location.href = "dashboard.html";
        }
    }
})();