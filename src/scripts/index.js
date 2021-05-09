import '../styles/style.sass';

const createBuildEndCakeLevel = document.querySelectorAll('.create__build-end-cake-level');
const createBuildLabelLevel = document.querySelectorAll('.create__build-label-level');

createBuildLabelLevel.forEach(item => {
  item.addEventListener('click', () => {
    if (window.getComputedStyle(item, ':before').backgroundColor === 'rgb(238, 112, 122)') {
      const dataInfo = item.dataset.info;
    }
  })
})