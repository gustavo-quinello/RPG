// 1. CONFIGURAÇÃO SUPABASE (Suas Chaves)
const { createClient } = supabase;
const supabaseUrl = "https://uoeixaiwyqjtbcqduzid.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Elementos DOM
const container = document.getElementById('lista-resultados');
const inputBusca = document.getElementById('input-busca');
const badgeUser = document.getElementById('user-badge');

// Estado Local
let currentUserRole = null; // Será preenchido pelo evento auth:ready
let isMaster = false;

// 2. ESCUTA O EVENTO DE AUTENTICAÇÃO (O Coração da Lógica)
document.addEventListener('auth:ready', (event) => {
    const user = event.detail;
    
    // Define o role
    currentUserRole = user.role;
    // Normaliza verificação de mestre (aceita 'mestre' ou 'gamemaster' para compatibilidade)
    isMaster = currentUserRole === 'mestre' || currentUserRole === 'gamemaster';

    // Atualiza visual do badge no topo
    badgeUser.textContent = isMaster ? "Mestre da Mesa" : "Aventureiro";
    badgeUser.className = isMaster 
        ? "text-xs font-bold text-purple-400 uppercase tracking-wider" 
        : "text-xs font-bold text-emerald-400 uppercase tracking-wider";

    // Só agora que sabemos quem é o usuário, buscamos os dados
    buscarPersonagens();
});

// 3. FUNÇÃO DE BUSCA (Lógica Principal)
async function buscarPersonagens() {
    const termo = inputBusca.value;
    
    // Estado de Loading Visual
    container.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center py-12 text-slate-500 animate-pulse">
            <i data-lucide="loader-2" class="w-8 h-8 mb-2 animate-spin"></i>
            <p>Consultando os arquivos...</p>
        </div>
    `;
    lucide.createIcons();

    try {
        // Monta a query
        let query = supabaseClient
            .from('Personagens')
            .select('id, nome, classe, nivel, permissao');

        // APLICAÇÃO DA REGRA DE NEGÓCIO (CARGOS)
        if (!isMaster) {
            // Jogador só vê fichas marcadas como 'jogador' (públicas para party)
            query = query.eq('permissao', 'jogador');
        }
        // Se for mestre, não aplica filtro extra (vê tudo)

        // Aplica filtro de texto se houver digitação
        if (termo) {
            query = query.ilike('nome', `%${termo}%`);
        }

        // Ordenação padrão
        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) throw error;

        renderizarCards(data);

    } catch (erro) {
        console.error(erro);
        container.innerHTML = `
            <div class="col-span-full text-center py-8 text-red-400 bg-red-900/10 border border-red-900/30 rounded-lg">
                <p class="font-bold">Erro na conexão</p>
                <p class="text-sm opacity-70">${erro.message}</p>
            </div>
        `;
    }
}

// 4. FUNÇÃO DE TOGGLE PERMISSÃO (NOVA)
async function togglePermission(event, id, currentPermissao) {
    // Impede que o clique no botão abra a ficha
    event.stopPropagation();
    event.preventDefault();

    if(!isMaster) return;

    // Lógica de inversão
    const novaPermissao = currentPermissao === 'jogador' ? 'mestre' : 'jogador';
    const botao = event.currentTarget; // Referência visual ao botão clicado
    
    // Feedback visual imediato (Otimismo)
    const iconOriginal = botao.innerHTML;
    botao.innerHTML = '<i class="animate-spin w-3 h-3 mr-1 inline"></i> Salvando...';
    
    try {
        const { error } = await supabaseClient
            .from('Personagens')
            .update({ permissao: novaPermissao })
            .eq('id', id);

        if (error) throw error;

        // Recarrega a lista para confirmar a mudança e reordenar se necessário
        // (Poderíamos apenas atualizar o DOM, mas recarregar garante consistência)
        buscarPersonagens();

    } catch (err) {
        console.error("Erro ao mudar permissão:", err);
        alert("Falha ao atualizar permissão.");
        buscarPersonagens(); // Reverte visualmente
    }
}

// 5. RENDERIZAÇÃO
function renderizarCards(lista) {
    container.innerHTML = '';

    if (!lista || lista.length === 0) {
        container.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-600 border border-dashed border-slate-800 rounded-xl">
                <i data-lucide="ghost" class="w-12 h-12 mb-3 opacity-50"></i>
                <p>Nenhuma ficha encontrada.</p>
                ${!isMaster ? '<p class="text-xs mt-1 text-slate-700">(Você está vendo apenas fichas públicas)</p>' : ''}
            </div>
        `;
        lucide.createIcons();
        return;
    }

    lista.forEach(char => {
        const classeFormatada = char.classe ? char.classe.replace(/_/g, ' ').toUpperCase() : 'DESCONHECIDO';
        const isNpc = char.permissao !== 'jogador'; 
        
        // Cria o Card
        const card = document.createElement('div');
        card.onclick = () => window.location.href = `ficha.html?id=${char.id}`;
        
        card.className = "group cursor-pointer relative bg-slate-950 border border-slate-800 rounded-xl p-5 card-hover transition-all flex flex-col justify-between h-36 overflow-hidden select-none";
        
        // Monta o botão de permissão (apenas se for mestre)
        let btnPermissaoHTML = '';
        if (isMaster) {
            btnPermissaoHTML = `
                <button 
                    onclick="togglePermission(event, '${char.id}', '${char.permissao}')"
                    class="mt-3 z-20 relative flex items-center justify-center w-full text-[10px] py-1.5 rounded border font-bold transition-all hover:brightness-110 active:scale-95 shadow-lg
                    ${char.permissao === 'jogador' 
                        ? 'bg-blue-900/30 text-blue-400 border-blue-500/30 hover:bg-blue-900/50' 
                        : 'bg-red-900/30 text-red-400 border-red-500/30 hover:bg-red-900/50'}"
                    title="Alternar visibilidade"
                >
                    ${char.permissao === 'jogador' 
                        ? '<i data-lucide="eye" class="w-3 h-3 mr-1.5"></i> VISÍVEL: TODOS' 
                        : '<i data-lucide="eye-off" class="w-3 h-3 mr-1.5"></i> VISÍVEL: APENAS MESTRE'}
                </button>
            `;
        }

        card.innerHTML = `
            <!-- Background Decorativo -->
            <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <i data-lucide="${isNpc ? 'skull' : 'shield'}" class="w-24 h-24 text-slate-200"></i>
            </div>

            <div class="z-10 w-full">
                <div class="flex justify-between items-start mb-1">
                    <h3 class="text-lg font-bold text-slate-100 group-hover:text-purple-400 transition-colors truncate pr-2">${char.nome}</h3>
                    <span class="bg-slate-900 border border-slate-700 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded">
                        LVL ${char.nivel || 1}
                    </span>
                </div>
                
                <p class="text-xs font-bold text-purple-500/80 tracking-widest uppercase mb-1">${classeFormatada}</p>
                
                ${btnPermissaoHTML}
            </div>
        `;
        
        container.appendChild(card);
    });
    
    lucide.createIcons();
}

// Setup da Busca com Debounce (para não flodar o banco enquanto digita)
let timeout = null;
inputBusca.addEventListener('keyup', () => {
    clearTimeout(timeout);
    timeout = setTimeout(buscarPersonagens, 300);
});