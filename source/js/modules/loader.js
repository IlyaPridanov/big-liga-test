const loader = document.querySelector('.main__loader');
const logo = document.querySelector('.main__loader-logo');
const grid = document.querySelector('.main__grid');
const right = document.querySelector('.main__right-column');
const nav = document.querySelector('nav');
const btn = document.querySelector('.hamburger');
const body = document.querySelector('body');

let flag = true;

window.addEventListener('load', () => {
  logo.classList.add('active');
});

const clickLoader = () => {
  window.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Enter') && flag) {
      loader.classList.remove('active');
      flag = !flag;
    }
  });

  const mobileDo = function () {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (flag) {
        loader.addEventListener('click', () => {
          loader.classList.remove('active');
          flag = !flag;
        });
      }

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

  mobileDo();

  window.addEventListener('orientationchange', function () {
    mobileDo();
  }, false);

  if (!document.fullscreenElement) {
    mobileDo();
  } else {
    if (document.exitFullscreen) {
      mobileDo();
    }
  }

};

export {clickLoader};
