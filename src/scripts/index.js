'use strict';

import '../styles/style.sass';

const createBuildEndCakeLevel = document.querySelectorAll('.create__build-end-cake-level');
const createBuildLabelLevel = document.querySelectorAll('.create__build-label-level');
const createBuildLabelMain = document.querySelectorAll('.create__build-label-main');
const mainLevel = document.querySelectorAll('.main-level');
const createBuildLabelCream = document.querySelectorAll('.create__build-label-cream');
const creamLevel = document.querySelectorAll('.cream-level');
const createBuildLabelCreamCoating = document.querySelectorAll('.create__build-label-cream-coating');
const createBuildLabelTopping = document.querySelectorAll('.create__build-label-topping');
const toppingRes = document.querySelectorAll('.topping-res');

// количество уровней
createBuildLabelLevel.forEach(item => {
  item.addEventListener('click', event => {
    const dataInfo = event.target.dataset.info;

    createBuildEndCakeLevel.forEach(level => {
      console.log(level.dataset.level);
      
      switch(dataInfo) {
        case 'level-3':
          level.classList.remove('block-hidden');   
          break;
        case 'level-2':
          if (level.dataset.level === 'level-2' || level.dataset.level === 'level-1') {
            level.classList.remove('block-hidden');
          } else {
            level.classList.add('block-hidden'); 
          }
          break;
        case 'level-1':
          if (level.dataset.level !== 'level-1') {
            level.classList.add('block-hidden');
          }
          break;
      }
    })
  })
})

// основа уровней
createBuildLabelMain.forEach(item => {
  item.addEventListener('click', event => {
    const dataBuild = event.target.dataset.main;
    
    mainLevel.forEach(main => {
      const lastSymbData = dataBuild[dataBuild.length-1];
      const classMain = dataBuild.replace('-' + lastSymbData, '');

      if (main.dataset.level === lastSymbData) {
        main.className = `main-level ${classMain}`;
      }
    })
  })
})

// крем
createBuildLabelCream.forEach(item => {
  item.addEventListener('click', event => {
    const dataCream = event.target.dataset.cream;

    creamLevel.forEach(cream => {
      cream.className = `cream-level ${dataCream}`;
    })
  })
})

// крем для покрытия
createBuildLabelCreamCoating.forEach(item => {
  item.addEventListener('click', event => {
    const dataCoatingCream = event.target.dataset.cream;

    createBuildEndCakeLevel.forEach(level => {
      if (!level.classList.contains('block-hidden')) {
        level.className = `create__build-end-cake-level ${dataCoatingCream}`;
      }
    })
  })
})

// топпинг
createBuildLabelTopping.forEach(item => {
  item.addEventListener('click', event => {
    const dataTopping = event.target.dataset.topping;

    toppingRes.forEach(topping => {
      if (dataTopping !== 'with-out-topping') {
        topping.className = `topping-res ${dataTopping}`;
      } else {
        topping.className = 'topping-res';
      }
    })
  })
})

