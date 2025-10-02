(function(){
  const slides = [
    "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    "https://images.pexels.com/photos/14553709/pexels-photo-14553709.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920",
    "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920",
    "https://images.pexels.com/photos/4126712/pexels-photo-4126712.jpeg"
  ];

  const bg = document.getElementById('bg');
  const slideEls = [];

  // Preload images and create slides
  slides.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onload = () => { console.log("Loaded:", url); }; // optional
    const div = document.createElement('div');
    div.className = 'slide';
    div.style.backgroundImage = `url(${url})`;
    bg.appendChild(div);
    slideEls.push(div);
  });

  let index = 0;
  function showSlide(i) {
    slideEls.forEach((s, idx) => s.classList.toggle('active', idx === i));
  }

  // Wait a short moment to ensure slides are in DOM
  setTimeout(() => {
    showSlide(index);
    setInterval(() => {
      index = (index + 1) % slideEls.length;
      showSlide(index);
    }, 8000);
  }, 100);
})();