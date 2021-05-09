/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.sass */ \"./src/styles/style.sass\");\n\n\n\nconst createBuildEndCakeLevel = document.querySelectorAll('.create__build-end-cake-level');\nconst createBuildLabelLevel = document.querySelectorAll('.create__build-label-level');\nconst createBuildLabelMain = document.querySelectorAll('.create__build-label-main');\nconst mainLevel = document.querySelectorAll('.main-level');\nconst createBuildLabelCream = document.querySelectorAll('.create__build-label-cream');\nconst creamLevel = document.querySelectorAll('.cream-level');\nconst createBuildLabelCreamCoating = document.querySelectorAll('.create__build-label-cream-coating');\nconst createBuildLabelTopping = document.querySelectorAll('.create__build-label-topping');\nconst toppingRes = document.querySelectorAll('.topping-res'); // количество уровней\n\ncreateBuildLabelLevel.forEach(item => {\n  item.addEventListener('click', event => {\n    const dataInfo = event.target.dataset.info;\n    createBuildEndCakeLevel.forEach(level => {\n      console.log(level.dataset.level);\n\n      switch (dataInfo) {\n        case 'level-3':\n          level.classList.remove('block-hidden');\n          break;\n\n        case 'level-2':\n          if (level.dataset.level === 'level-2' || level.dataset.level === 'level-1') {\n            level.classList.remove('block-hidden');\n          } else {\n            level.classList.add('block-hidden');\n          }\n\n          break;\n\n        case 'level-1':\n          if (level.dataset.level !== 'level-1') {\n            level.classList.add('block-hidden');\n          }\n\n          break;\n      }\n    });\n  });\n}); // основа уровней\n\ncreateBuildLabelMain.forEach(item => {\n  item.addEventListener('click', event => {\n    const dataBuild = event.target.dataset.main;\n    mainLevel.forEach(main => {\n      const lastSymbData = dataBuild[dataBuild.length - 1];\n      const classMain = dataBuild.replace('-' + lastSymbData, '');\n\n      if (main.dataset.level === lastSymbData) {\n        main.className = `main-level ${classMain}`;\n      }\n    });\n  });\n}); // крем\n\ncreateBuildLabelCream.forEach(item => {\n  item.addEventListener('click', event => {\n    const dataCream = event.target.dataset.cream;\n    creamLevel.forEach(cream => {\n      cream.className = `cream-level ${dataCream}`;\n    });\n  });\n}); // крем для покрытия\n\ncreateBuildLabelCreamCoating.forEach(item => {\n  item.addEventListener('click', event => {\n    const dataCoatingCream = event.target.dataset.cream;\n    createBuildEndCakeLevel.forEach(level => {\n      if (!level.classList.contains('block-hidden')) {\n        level.className = `create__build-end-cake-level ${dataCoatingCream}`;\n      }\n    });\n  });\n}); // топпинг\n\ncreateBuildLabelTopping.forEach(item => {\n  item.addEventListener('click', event => {\n    const dataTopping = event.target.dataset.topping;\n    toppingRes.forEach(topping => {\n      if (dataTopping !== 'with-out-topping') {\n        topping.className = `topping-res ${dataTopping}`;\n      } else {\n        topping.className = 'topping-res';\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/style.sass?");

/***/ })

/******/ });