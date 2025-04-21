
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    let scrollAmount = 0;
    let scrollStep = 1;
  
    if (window.innerWidth < 768 && slider) {
      setInterval(() => {
        scrollAmount += scrollStep;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }, 50);
    }
  });
  