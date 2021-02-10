const loader = document.querySelector('.main__loader');
const grid = document.querySelector('.main__grid');
const right = document.querySelector('.main__right-column');
const nav = document.querySelector('nav');
const btn = document.querySelector('.hamburger');
const body = document.querySelector('body');

let flag = true;

const clickLoader = () => {
  window.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Enter') && flag) {
      loader.classList.remove('active');
      flag = !flag;
    }
  });

  if (window.matchMedia('(max-width: 1023px)').matches) {
    grid.addEventListener('click', () => {
      right.classList.toggle('active');
    });

    btn.addEventListener('click', () => {
      nav.classList.toggle('active');
      btn.classList.toggle('js-btn-active');
      body.classList.toggle('hidden');
    });
  }

};

export {clickLoader};
