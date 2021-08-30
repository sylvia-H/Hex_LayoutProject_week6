"use strict";

var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  initialSlide: 1,
  grabCursor: true,
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
//# sourceMappingURL=all.js.map
