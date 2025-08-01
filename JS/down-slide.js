document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('sliderTrack');
  const slides = document.querySelectorAll('.slide-down');
  const totalSlides = slides.length;
  const realSlides = totalSlides - 1; // Last slide is a clone for looping
  let currentIndex = 0;

  const animations = ['fadeInUp', 'zoomIn', 'fadeInLeft', 'fadeInRight'];

  function animateText(index) {
    const text = slides[index]?.querySelector('.slide-text-down');
    if (!text) return;

    const anim = animations[Math.floor(Math.random() * animations.length)];

    text.style.animation = 'none';
    text.style.opacity = '0';
    void text.offsetHeight;
    text.style.animation = `${anim} 1.5s ease forwards`;

    setTimeout(() => {
      text.style.opacity = '1';
    }, 1600);
  }

  function showSlide(index, animate = true) {
    const offset = -index * 100;
    track.style.transition = animate ? 'transform 1s ease-in-out' : 'none';
    track.style.transform = `translateX(${offset}%)`;

    if (animate) animateText(index);
  }

  function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);

    if (currentIndex === realSlides) {
      setTimeout(() => {
        currentIndex = 0;
        showSlide(currentIndex, false);
      }, 1000);
    }
  }

  showSlide(currentIndex);
  animateText(currentIndex);
  setInterval(nextSlide, 8000);
});
