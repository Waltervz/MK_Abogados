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

// Selecciona todos los elementos con la clase "carousel"
const carousels = document.querySelectorAll('.carousel');

// Agrega un evento de clic a cada elemento "carousel"
carousels.forEach(carousel => {
  const items = carousel.querySelectorAll('.carousel-item');
  let index = 0;

  // Función para mostrar el siguiente elemento del carrusel
  const nextSlide = () => {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
  };

  // Función para mostrar el elemento anterior del carrusel
  const prevSlide = () => {
    items[index].classList.remove('active');
    index = (index - 1 + items.length) % items.length;
    items[index].classList.add('active');
  };

  // Agrega eventos de clic a los botones de control (opcional)
  const nextButton = carousel.querySelector('.next-button');
  if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
  }

  const prevButton = carousel.querySelector('.prev-button');
  if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
  }

  // Inicializa el carrusel
  items[index].classList.add('active');
});

