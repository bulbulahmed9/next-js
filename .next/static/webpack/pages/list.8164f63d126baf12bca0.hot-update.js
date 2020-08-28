webpackHotUpdate_N_E("pages/list",{

/***/ "./src/pages/list.js":
/*!***************************!*\
  !*** ./src/pages/list.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Bulbul Ahmed\\Desktop\\next-app\\src\\pages\\list.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var List = function List(_ref) {
  var list = _ref.list;
  console.log(list);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, " List Page "), list.map(function (e) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "posts/".concat(e.id),
      href: "[posts]/[post]",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, " ", e.title, " ")));
  }));
};

_c = List;
List.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://jsonplaceholder.typicode.com/posts");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            list: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZSIsImlkIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFHdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxFQUdDQSxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsV0FDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUUsa0JBQVdBLENBQUMsQ0FBQ0MsRUFBYixDQUFSO0FBQTJCLFVBQUksRUFBQyxnQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBS0QsQ0FBQyxDQUFDRSxLQUFQLE1BREosQ0FESixDQURNO0FBQUEsR0FBVixDQUhELENBQVA7QUFZSCxDQWhCRDs7S0FBTVAsSTtBQW1CTkEsSUFBSSxDQUFDUSxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNIQyxLQUFLLENBQUMsNENBQUQsQ0FERjs7QUFBQTtBQUNmQyxhQURlO0FBQUE7QUFBQSxpQkFFRkEsR0FBRyxDQUFDQyxJQUFKLEVBRkU7O0FBQUE7QUFFZkMsY0FGZTtBQUFBLDJDQUdaO0FBQUVYLGdCQUFJLEVBQUVXO0FBQVIsV0FIWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQU1lWixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saXN0LjgxNjRmNjNkMTI2YmFmMTJiY2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBMaXN0ID0gKHsgbGlzdCB9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8aDE+IExpc3QgUGFnZSA8L2gxPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdC5tYXAoZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgcG9zdHMvJHtlLmlkfWB9IGhyZWY9XCJbcG9zdHNdL1twb3N0XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT4ge2UudGl0bGV9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbkxpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpXHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7IGxpc3Q6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==