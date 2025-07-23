
// Right Slide

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.right-slider .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 4000); // change the pictures every 4 seconds
});

// text animation

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const animations = ['fadeInUp', 'fadeInLeft', 'fadeInRight', 'zoomIn'];

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    const text = slide.querySelector('.slide-text');
    text.style.opacity = 0;
    text.style.animation = '';
  });

  const nextSlide = slides[index];
  nextSlide.classList.add('active');

  const text = nextSlide.querySelector('.slide-text');
  const animation = animations[Math.floor(Math.random() * animations.length)];

  setTimeout(() => {
    text.style.animation = `${animation} 1.2s ease forwards`;
  }, 200); // wait a little bit time for show slide 
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // cahnge every 4 seconds

showSlide(currentSlide);
