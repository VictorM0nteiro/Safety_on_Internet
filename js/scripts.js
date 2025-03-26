// Função para o menu responsivo
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('active');
    }
  }
  
  // Função para o botão "Voltar ao topo"
  window.onscroll = function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  };
  
  // Evento de clique para "Voltar ao topo"
  document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
    }
  
    // Marcar página atual no menu como ativa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
      const menu = document.getElementById('menu');
      const menuBtn = document.querySelector('.menu-btn');
      
      if (menu && menu.classList.contains('active') && 
          !menu.contains(event.target) && 
          !menuBtn.contains(event.target)) {
        menu.classList.remove('active');
      }
    });
  });
  