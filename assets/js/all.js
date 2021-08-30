"use strict";

var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  grabCursor: true,
  initialSlide: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  autoplay: {
    delay: 1600
  }
});
AOS.init({
  offset: 100,
  duration: 800
});
//# sourceMappingURL=all.js.map
