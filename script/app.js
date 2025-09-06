document.querySelectorAll('.slider').forEach(slider => {
  const wrapper = slider.querySelector('.slider__wrapper');
  const slides = slider.querySelectorAll('.slider__slide');
  const prevBtn = slider.querySelector('.slider__btn--prev');
  const nextBtn = slider.querySelector('.slider__btn--next');

  if (slides.length === 0) return;

  let currentIndex = 0;

  function updateSlidePosition() {
    const offset = -currentIndex * 100; 
    wrapper.style.transform = `translateX(${offset}%)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length; 
      updateSlidePosition();
    });
  }

  updateSlidePosition();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
