import {initTrainerSlider} from '../slider/slider.js';

const initTrainers = () => {
  const slidesParent = document.querySelector('[data-trainers-slides]');
  const breakpoint = window.matchMedia('(max-width: 1199px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      slidesParent.addEventListener('click', (evt) => {
        const slide = evt.target.closest('.swiper-slide');
        if (slide) {
          slide.classList.toggle('is-active');
        }
      });
    }
  };
  breakpointChecker();
  initTrainerSlider();
};

export {initTrainers};
