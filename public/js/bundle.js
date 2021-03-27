/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/footer.ts":
/*!***************************!*\
  !*** ./src/app/footer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.footer = void 0;
var footer = function () {
    var date = new Date();
    var writer = 'Flanell';
    return ("<div class=\"footer\">\n            <div>\n                &copy; " + writer + " " + date.getFullYear() + "\n            </div>    \n        </>");
};
exports.footer = footer;


/***/ }),

/***/ "./src/app/header.ts":
/*!***************************!*\
  !*** ./src/app/header.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Header = void 0;
var Header = (function () {
    function Header() {
        this.title = "Flanell";
    }
    Header.prototype.injectHeaderToDOM = function () {
        return "<div>Welcome to " + this.title + "</div>";
    };
    return Header;
}());
exports.Header = Header;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/

exports.__esModule = true;
var header_1 = __webpack_require__(/*! ./header */ "./src/app/header.ts");
var footer_1 = __webpack_require__(/*! ./footer */ "./src/app/footer.ts");
(function () {
    var root = document.getElementById('root');
    var h = new header_1.Header();
    root.innerHTML = h.injectHeaderToDOM();
    root.innerHTML += '<h1>Helluu world!</h1>';
    root.innerHTML += footer_1.footer();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW5lbGwuZGV2Ly4vc3JjL2FwcC9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vZmFuZWxsLmRldi8uL3NyYy9hcHAvaGVhZGVyLnRzIiwid2VicGFjazovL2ZhbmVsbC5kZXYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmFuZWxsLmRldi8uL3NyYy9hcHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQSxjQUFjOzs7Ozs7Ozs7OztBQ1JEO0FBQ2Isa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGNBQWM7Ozs7Ozs7VUNaZDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2Isa0JBQWtCO0FBQ2xCLGVBQWUsbUJBQU8sQ0FBQyxxQ0FBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMscUNBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5mb290ZXIgPSB2b2lkIDA7XHJcbnZhciBmb290ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgd3JpdGVyID0gJ0ZsYW5lbGwnO1xyXG4gICAgcmV0dXJuIChcIjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgJmNvcHk7IFwiICsgd3JpdGVyICsgXCIgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIlxcbiAgICAgICAgICAgIDwvZGl2PiAgICBcXG4gICAgICAgIDwvPlwiKTtcclxufTtcclxuZXhwb3J0cy5mb290ZXIgPSBmb290ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkhlYWRlciA9IHZvaWQgMDtcclxudmFyIEhlYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiRmxhbmVsbFwiO1xyXG4gICAgfVxyXG4gICAgSGVhZGVyLnByb3RvdHlwZS5pbmplY3RIZWFkZXJUb0RPTSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCI8ZGl2PldlbGNvbWUgdG8gXCIgKyB0aGlzLnRpdGxlICsgXCI8L2Rpdj5cIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGVhZGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLkhlYWRlciA9IEhlYWRlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi9oZWFkZXJcIik7XHJcbnZhciBmb290ZXJfMSA9IHJlcXVpcmUoXCIuL2Zvb3RlclwiKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICAgIHZhciBoID0gbmV3IGhlYWRlcl8xLkhlYWRlcigpO1xyXG4gICAgcm9vdC5pbm5lckhUTUwgPSBoLmluamVjdEhlYWRlclRvRE9NKCk7XHJcbiAgICByb290LmlubmVySFRNTCArPSAnPGgxPkhlbGx1dSB3b3JsZCE8L2gxPic7XHJcbiAgICByb290LmlubmVySFRNTCArPSBmb290ZXJfMS5mb290ZXIoKTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==