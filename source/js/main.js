import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initVideoButton} from './modules/video/video.js';
import {initTabs} from './modules/tabs/init-tabs.js';
import {initAccordions} from './modules/accordion/init-accordion.js';
import {initTrainers} from './modules/trainers/trainers.js';
import {initReviewSlider} from './modules/slider/slider.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  initVideoButton();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initTabs();
    initTrainers();
    initAccordions();
    initReviewSlider();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
