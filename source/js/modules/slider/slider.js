import Swiper from '../../vendor/swiper.js';

const initTrainerSlider = () => {
  const slider = new Swiper('.trainers__slider', {
    loop: true,
    navigation: {
      nextEl: '.trainers__button--next',
      prevEl: '.trainers__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: '1',
      },
      768: {
        slidesPerView: '2',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: '3',
      },
      1366: {
        slidesPerView: '4',
        spaceBetween: 40,
      },
    },
  });
};

const initReviewSlider = () => {
  const slider = new Swiper('.reviews__slider', {
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};

export {initTrainerSlider, initReviewSlider};
