/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/brain.png":
/*!***********************!*\
  !*** ./src/brain.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"aeb7b7debf8134af108ea6cca100246a.png\");\n\n//# sourceURL=webpack://drop-down-menu/./src/brain.png?");

/***/ }),

/***/ "./src/love.png":
/*!**********************!*\
  !*** ./src/love.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e1f49c9bcd9cd0d1e48893530762559b.png\");\n\n//# sourceURL=webpack://drop-down-menu/./src/love.png?");

/***/ }),

/***/ "./src/lungs.png":
/*!***********************!*\
  !*** ./src/lungs.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d0728c66b1b2d205749ff2371b2cab3e.png\");\n\n//# sourceURL=webpack://drop-down-menu/./src/lungs.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_brain_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/brain.png */ \"./src/brain.png\");\n/* harmony import */ var _src_love_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/love.png */ \"./src/love.png\");\n/* harmony import */ var _src_lungs_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/lungs.png */ \"./src/lungs.png\");\nconst container = document.querySelector(\".container\");\r\nconst logo = document.querySelector(\".logo\");\r\n\r\n\r\n\r\nconst content = [\r\n  {\r\n    iconName: \"Heart\",\r\n    iconPng: _src_love_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  },\r\n  {\r\n    iconName: \"Brain\",\r\n    iconPng: _src_brain_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n  },\r\n  {\r\n    iconName: \"Lung\",\r\n    iconPng: _src_lungs_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  },\r\n];\r\n\r\nlogo.addEventListener(\"click\", function () {\r\n  console.log(\"click\");\r\n  if (container.style.height == \"100px\" || !container.style.height) {\r\n    container.style.height = \"100vh\";\r\n    container.style.justifyContent = \"space-between\";\r\n    let iconContainer = document.createElement(\"div\");\r\n    iconContainer.className = \"iconContainer\";\r\n    content.forEach((ele) => {\r\n      console.log(ele.iconName);\r\n      let div = document.createElement(\"div\");\r\n      let iconImg = document.createElement(\"img\");\r\n      iconImg.src = ele.iconPng;\r\n      div.append(iconImg);\r\n      iconContainer.append(div);\r\n    });\r\n    container.appendChild(iconContainer);\r\n    container.addEventListener(\"mouseover\", mouseOver);\r\n    container.addEventListener(\"mouseleave\", mouseLeave);\r\n  } else {\r\n    container.style.height = \"100px\";\r\n    container.style.width = \"50px\";\r\n    container.style.justifyContent = \"center\";\r\n    container.removeEventListener(\"mouseover\", mouseOver);\r\n    mouseLeave();\r\n    container.removeChild(document.querySelector(\".iconContainer\"));\r\n  }\r\n});\r\nfunction mouseOver() {\r\n  console.log(\"you pressed on it\");\r\n  if (!document.querySelector(\".expand\")) {\r\n    let expand = document.createElement(\"div\");\r\n    expand.innerText = \"e\";\r\n    expand.classList.add(\"expand\");\r\n    expand.addEventListener(\"click\", function () {\r\n      if (container.style.width == \"300px\") {\r\n        container.style.width = \"50px\";\r\n        for (let s = 0; s < content.length; s++) {\r\n          if (s < content.length) {\r\n            document\r\n              .querySelector(\".iconContainer\")\r\n              .children[s].removeChild(\r\n                document.querySelector(\".iconContainer\").children[s].lastChild\r\n              );\r\n          } else {\r\n            s = 0;\r\n          }\r\n        }\r\n      } else {\r\n        container.style.width = \"300px\";\r\n        let i = 0;\r\n        content.forEach((ele) => {\r\n          let currentText = ele.iconName;\r\n          let textDiv = document.createElement(\"div\");\r\n          textDiv.innerText = currentText;\r\n          console.log(currentText);\r\n          document.querySelector(\".iconContainer\").children[i].append(textDiv);\r\n          i++;\r\n        });\r\n      }\r\n    });\r\n    container.append(expand);\r\n    container.addEventListener(\"mousemove\", function (e) {\r\n      if (expand) {\r\n        expand.style.top = `${e.clientY - 17}px`;\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction mouseLeave() {\r\n  if (document.querySelector(\".expand\")) {\r\n    container.removeChild(document.querySelector(\".expand\"));\r\n  }\r\n  console.log(\"you left on it\");\r\n}\r\n\r\nfunction createNames(ele) {}\r\n\n\n//# sourceURL=webpack://drop-down-menu/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;