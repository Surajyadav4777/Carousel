// script.js
$(document).ready(function() {
  const $carousel = $('.carousel');
  const $prevBtn = $('.prev-btn');
  const $nextBtn = $('.next-btn');
  const itemWidth = $('.carousel-item').width();
  let currentIndex = 0;

  $nextBtn.click(function() {
    if (currentIndex < $('.carousel-item').length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  $prevBtn.click(function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = $('.carousel-item').length - 1;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * itemWidth;
    $carousel.css('transform', 'translateX(' + translateValue + 'px)');
  }

  // Automatically rotate through the featured products every 3 seconds
  setInterval(function() {
    $nextBtn.click();
  }, 3000);
});
