var swiper = new Swiper(".swiper-container", {
  loop:true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  initialSlide : 1,
  grabCursor: true,
  breakpoints: {
    768:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  autoplay: {
    delay: 1600,
  }
  
});