var swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 800, // Aumenta este valor para hacer que el deslizamiento sea más lento
  pagination: false,
});

const logo = document.querySelector('.logo2 img');

window.addEventListener('scroll', () => {
  const triggerPosition = logo.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (triggerPosition < windowHeight) {
    logo.classList.add('visible');
  }
});
  
