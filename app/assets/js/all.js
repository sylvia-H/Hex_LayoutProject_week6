var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop:true,
  initialSlide : 1,
  grabCursor: true,
  autoplay: {
    delay: 1600,
    disableOnInteraction: false,
    reverseDirection: true,
  }
  
});