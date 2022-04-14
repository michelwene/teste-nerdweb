const MySwiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 9,
  allowTouchMove: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      width: 250,
      scrollbar: {
        dragSize: 100,
      },
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      width: 400,
      scrollbar: {
        dragSize: 150,
      },
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      width: 550,
      scrollbar: {
        dragSize: 200,
      },
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      width: 650,
      scrollbar: {
        dragSize: 250,
      },
    },

    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      width: 850,
      scrollbar: {
        dragSize: 300,
      },
    },

    // when window width is >= 1200px
    1200: {
      slidesPerView: 7,
      width: 1020,
      scrollbar: {
        dragSize: 350,
      },
    },

    // when window width is >= 1600px
    1600: {
      slidesPerView: 8,
      width: 1400,
      scrollbar: {
        dragSize: 400,
      },
    },
  },
  firstSlideMessage: "Este é o primeiro slide",
});

const MySwiper2 = new Swiper(".mySwiper2", {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 3,
  allowTouchMove: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      scrollbar: {
        dragSize: 200,
      },
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      scrollbar: {
        dragSize: 250,
      },
    },

    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      scrollbar: {
        dragSize: 300,
      },
    },

    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      scrollbar: {
        dragSize: 350,
      },
    },
  },
  firstSlideMessage: "Este é o primeiro slide",
});

const MySwiper3 = new Swiper(".mySwiper3", {
  speed: 400,
  spaceBetween: 24,
  slidesPerView: 9,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove: true,
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      scrollbar: {
        dragSize: 100,
      },
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      scrollbar: {
        dragSize: 300,
      },
    },

    // when window width is >= 992px
    992: {
      slidesPerView: 1,
      scrollbar: {
        dragSize: 400,
      },
    },

    1020: {
      slidesPerView: 2,
      scrollbar: {
        dragSize: 400,
      },
    },

    1200: {
      slidesPerView: 3,
      scrollbar: {
        dragSize: 400,
      },
    },
  },
  firstSlideMessage: "Este é o primeiro slide",
});
