// --- Menu ---
const btnMenu = document.getElementById('btn-menu');
const menuLista = document.getElementById('menu-lista');

// Função para abrir/fechar o menu ao clicar
btnMenu.addEventListener('click', () => {
    menuLista.classList.toggle('aberto');
    if (menuLista.classList.contains('aberto')) {
        btnMenu.innerHTML = '✕';
    } else {
        btnMenu.innerHTML = '☰';
    }
});

// Fecha o menu se o usuário clicar em qualquer lugar fora dele
document.addEventListener('click', (event) => {
    if (!btnMenu.contains(event.target) && !menuLista.contains(event.target)) {
        menuLista.classList.remove('aberto');
        btnMenu.innerHTML = '☰';
    }
});
// --- Fim Menu ---

// --- Formulário e mensagem ---

const modal = document.getElementById('modal-contato');
const btnAbrir = document.getElementById('abrir-form');
const btnFechar = document.querySelector('.fechar-modal');
const form = document.getElementById('form-contato');

// Abrir modal
btnAbrir.onclick = () => modal.style.display = "block";

// Fechar ao clicar no x
btnFechar.onclick = () => modal.style.display = "none";

// Fechar ao clicar fora
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// Validação e Simulação de Envio
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // RegEx simples para validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validação se há campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    // Validação do formato do e-mail
    if (!emailRegex.test(email)) {
        alert("⚠️ Por favor, insira um e-mail válido (ex: usuario@dominio.com).");
        return;
    }

    // Simulação em caso de sucesso
    console.log("Enviando dados:", { nome, email, mensagem }); // Dá para ver no F12 do navegador
    
    // Feedback visual
    alert(`✅ Sucesso, ${nome}! Sua mensagem foi enviada com sucesso.`);
    
    // Limpeza
    form.reset();
    modal.style.display = "none";
});
// --- Fim formulário e mensagem ---