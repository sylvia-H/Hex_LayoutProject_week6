"use strict";

var swiper = new Swiper(".swiper-container", {
  // 添加 observe 參數進行自動初始化
  observer: true,
  observeParents: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
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
