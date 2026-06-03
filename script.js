// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      if (navUl) navUl.classList.remove('active');
    }
  });
});

// Animação ao scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.card, .problem, .benefit');
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top <= windowHeight * 0.85) {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

function initAnimations() {
  const elements = document.querySelectorAll('.card, .problem, .benefit');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
  });
  
  setTimeout(() => {
    animateOnScroll();
  }, 300);
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);

// Fechar menu ao clicar fora (mobile)
document.addEventListener('click', (e) => {
  if (navUl && navUl.classList.contains('active') && 
      !navUl.contains(e.target) && 
      menuToggle && !menuToggle.contains(e.target)) {
    navUl.classList.remove('active');
  }
});