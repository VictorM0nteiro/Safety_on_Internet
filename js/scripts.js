// Função para o menu responsivo
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Função para o botão "Voltar ao topo"
window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
};

document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a"); // Seleciona todos os links do menu
    const currentPage = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Adiciona a classe na página atual
        } else {
            link.classList.remove("active");
        }
    });
});


