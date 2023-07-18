const video = document.querySelector('[data-video]');
const preview = document.querySelector('[data-preview]');
const button = document.querySelector('[data-video-button]');

const initVideoButton = () => {
  button.addEventListener('click', () => {
    preview.classList.add('is-hidden');
    button.classList.add('is-hidden');
    video.src += '&autoplay=1';
  });
};

export {initVideoButton};
