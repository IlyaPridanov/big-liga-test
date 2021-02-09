const loader = document.querySelector('.main__loader');
let flag = true;

const clickLoader = () => {
  window.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Enter') && flag) {
      loader.classList.remove('active');
      flag = !flag;
    }
  });
};

export {clickLoader};
