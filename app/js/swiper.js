const MySwiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 9,
  allowTouchMove: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 420,
  },
  mousewheel: {
    invert: true,
  },
  firstSlideMessage: "Este é o primeiro slide",
});
