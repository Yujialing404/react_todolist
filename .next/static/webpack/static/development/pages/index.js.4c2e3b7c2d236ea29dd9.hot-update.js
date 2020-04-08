webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Front End\\react\\todolist\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Example() {
  //const [count, setCount] = useState(0);
  //默认情况下 它会在第一次 render 和之后的每次 update 后运行

  /* useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      inputValue = _useState[0],
      handleInputChange = _useState[1]; //const [list, submit] = useState([]);

  /* handleInputChange = (e) => {
      inputValue = e.target.value
  } */

  /* submit = () => {
      list = [...list,inputValue];
      inputValue = ''
  } */

  /* remove = (index) => {
      const list = [...list];
      list.splice(index,1);
      } */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('you name is', name);
  }, [name]);
  return __jsx(Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("input", {
    value: inputValue,
    onChange: function onChange(e) {
      return handleInputChange(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, inputValue));
}

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=index.js.4c2e3b7c2d236ea29dd9.hot-update.js.map