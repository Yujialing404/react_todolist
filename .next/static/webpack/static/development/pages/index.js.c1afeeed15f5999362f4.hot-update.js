webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

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

  /* const [inputValue, handleInputChange] = useState('');
  const [list, submit] = useState([]); */

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

  /* return (
        <Fragment>
            <input 
            value={inputValue}
            onChange={(e) => handleInputChange(inputValue = e.target.value)}
            />
            <button onClick={() => submit(list = [...list,inputValue],inputValue = '')}>Submit</button>
            <ul>
                {list.map((value,index) => {
                    return (
                    <div key={index}>
                        <button onClick={() => remove(list = [...list],list.splice(index,1))}>Remove</button>
                        <li>{value}</li>
                    </div>
                    )
                })}
            </ul>
        </Fragment>
  ); */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('heaven'),
      name = _useState2[0],
      setName = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = "counterWithHook ".concat(count);
  }, [count]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('you name is', name);
  }, [name]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Counter with Hook"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "You click ", count, " times"), __jsx("button", {
    onClick: function onClick(e) {
      return setCount(function (count) {
        return count + 1;
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Click me"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("input", {
    placeholder: "\u8F93\u5165\u59D3\u540D",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), "your name is ", name));
}

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=index.js.c1afeeed15f5999362f4.hot-update.js.map