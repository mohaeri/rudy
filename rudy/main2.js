 var swiperFeatures = new Swiper(".features-swiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".features-swiper .swiper-pagination",
    },
    navigation: {
      nextEl: ".features-swiper .btn-next",
      prevEl: ".features-swiper .btn-prev",
    },
  });