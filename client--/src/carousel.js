const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function goToSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active-slide', i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === currentSlide);
  });
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'), 10);
    goToSlide(index);
  });
});

// Auto-advance every 5 seconds
setInterval(() => goToSlide(currentSlide + 1), 5000);

// Initialize
goToSlide(0);