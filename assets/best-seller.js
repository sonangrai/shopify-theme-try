(function () {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    loopedSlides: 4,
    centeredSlides: false,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        loopedSlides: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        loopedSlides: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        loopedSlides: 2,
        spaceBetween: 10,
      },
      675: {
        slidesPerView: 1,
        loopedSlides: 1,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();
