self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DarkModeToggle.js":
/*!**************************************!*\
  !*** ./components/DarkModeToggle.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ExternalLinks */ "./components/ExternalLinks.js");
/* harmony import */ var _components_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DarkModeToggle */ "./components/DarkModeToggle.js");
/* harmony import */ var _components_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/jerolan/workspace/jerolan.github.com/pages/index.js";



function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-6xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "pt-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Jerome"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Software Engineer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "max-w-2xl pt-40",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "I'm an engineer passionate about technology, culture and team building. Big fan of UX Design and Lean Thinking. I'm focused on teaching modern / basic concepts driven by a collaborative environment with techniques like Pair Programing. I love to build products that people want to use."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/html/",
          children: "https://github.com/jerolan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/css/",
          children: "https://twitter.com/sediceyerom"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "space-y-4 py-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default, {
          title: "Sharing my ideas in software",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://medium.com/yellowme/react-in-theory-70379c23fbfc",
            children: "React In Theory (Eng)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://medium.com/tauon/trabajando-con-monorepos-cf941c7d57dc",
            children: "Trabajando con Monorepos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://medium.com/tauon/design-systems-con-react-sketchapp-2243c7fdbcfa",
            children: "Design Systems con React Sketchapp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://medium.com/tauon/que-es-un-api-y-c%C3%B3mo-consumirla-21eeb130ef14",
            children: "\xBFQu\xE9 es un API? y c\xF3mo consumirla"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default, {
          title: "Sharing my ideas in software",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://gbm.com/",
            children: ["Unleashing the financial potential of Mexico and our people at", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "underline",
              children: "GBM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://yellowme.mx/",
            children: ["Growing teams at", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "underline",
              children: "Yellowme"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://www.joinenso.com/",
            children: ["Creating a new generation of financial services at", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "underline",
              children: "Enso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default, {
          title: "Bringing a community closer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://www.facebook.com/javascriptmerida/",
            children: "JavaScript Merida"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExternalLinks__WEBPACK_IMPORTED_MODULE_2__.default.Link, {
            href: "https://www.awayfromjs.dev/",
            children: "Away from JavaScript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFDLE1BQWxCO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFTLGlCQUFTLEVBQUMsaUJBQW5CO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFpQkU7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBRyxjQUFJLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkYsZUFzQkU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsOERBQUQ7QUFBZSxlQUFLLEVBQUMsOEJBQXJCO0FBQUEsa0NBQ0UsOERBQUMsbUVBQUQ7QUFBb0IsZ0JBQUksRUFBQywwREFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSw4REFBQyxtRUFBRDtBQUFvQixnQkFBSSxFQUFDLGdFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQU9FLDhEQUFDLG1FQUFEO0FBQW9CLGdCQUFJLEVBQUMsMEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGLGVBVUUsOERBQUMsbUVBQUQ7QUFBb0IsZ0JBQUksRUFBQyw0RUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBZ0JFLDhEQUFDLDhEQUFEO0FBQWUsZUFBSyxFQUFDLDhCQUFyQjtBQUFBLGtDQUNFLDhEQUFDLG1FQUFEO0FBQW9CLGdCQUFJLEVBQUMsa0JBQXpCO0FBQUEsc0dBRUU7QUFBTSx1QkFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFLDhEQUFDLG1FQUFEO0FBQW9CLGdCQUFJLEVBQUMsc0JBQXpCO0FBQUEsd0RBRUU7QUFBTSx1QkFBTSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQVNFLDhEQUFDLG1FQUFEO0FBQW9CLGdCQUFJLEVBQUMsMkJBQXpCO0FBQUEsMEZBRUU7QUFBTSx1QkFBTSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGLGVBK0JFLDhEQUFDLDhEQUFEO0FBQWUsZUFBSyxFQUFDLDZCQUFyQjtBQUFBLGtDQUNFLDhEQUFDLG1FQUFEO0FBQW9CLGdCQUFJLEVBQUMsNENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUsOERBQUMsbUVBQUQ7QUFBb0IsZ0JBQUksRUFBQyw2QkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUVEO0tBcEV1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YWRmNzJiNjNiMjE3YzY1MzU2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgRXh0ZXJuYWxMaW5rcyBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHRlcm5hbExpbmtzXCI7XG5pbXBvcnQgRGFya01vZGVUb2dnbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGFya01vZGVUb2dnbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwdC04XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPkplcm9tZTwvcD5cbiAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEYXJrTW9kZVRvZ2dsZSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWF4LXctMnhsIHB0LTQwXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJJ20gYW4gZW5naW5lZXIgcGFzc2lvbmF0ZSBhYm91dCB0ZWNobm9sb2d5LCBjdWx0dXJlIGFuZCB0ZWFtXG4gICAgICAgICAgICBidWlsZGluZy4gQmlnIGZhbiBvZiBVWCBEZXNpZ24gYW5kIExlYW4gVGhpbmtpbmcuIEknbSBmb2N1c2VkIG9uXG4gICAgICAgICAgICB0ZWFjaGluZyBtb2Rlcm4gLyBiYXNpYyBjb25jZXB0cyBkcml2ZW4gYnkgYSBjb2xsYWJvcmF0aXZlXG4gICAgICAgICAgICBlbnZpcm9ubWVudCB3aXRoIHRlY2huaXF1ZXMgbGlrZSBQYWlyIFByb2dyYW1pbmcuIEkgbG92ZSB0byBidWlsZFxuICAgICAgICAgICAgcHJvZHVjdHMgdGhhdCBwZW9wbGUgd2FudCB0byB1c2UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9odG1sL1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9qZXJvbGFuPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIvY3NzL1wiPmh0dHBzOi8vdHdpdHRlci5jb20vc2VkaWNleWVyb208L2E+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHB5LTJcIj5cbiAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyB0aXRsZT1cIlNoYXJpbmcgbXkgaWRlYXMgaW4gc29mdHdhcmVcIj5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzLkxpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS95ZWxsb3dtZS9yZWFjdC1pbi10aGVvcnktNzAzNzljMjNmYmZjXCI+XG4gICAgICAgICAgICAgIFJlYWN0IEluIFRoZW9yeSAoRW5nKVxuICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzLkxpbms+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcy5MaW5rIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vdGF1b24vdHJhYmFqYW5kby1jb24tbW9ub3JlcG9zLWNmOTQxYzdkNTdkY1wiPlxuICAgICAgICAgICAgICBUcmFiYWphbmRvIGNvbiBNb25vcmVwb3NcbiAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rcy5MaW5rPlxuICAgICAgICAgICAgPEV4dGVybmFsTGlua3MuTGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL3RhdW9uL2Rlc2lnbi1zeXN0ZW1zLWNvbi1yZWFjdC1za2V0Y2hhcHAtMjI0M2M3ZmRiY2ZhXCI+XG4gICAgICAgICAgICAgIERlc2lnbiBTeXN0ZW1zIGNvbiBSZWFjdCBTa2V0Y2hhcHBcbiAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rcy5MaW5rPlxuICAgICAgICAgICAgPEV4dGVybmFsTGlua3MuTGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL3RhdW9uL3F1ZS1lcy11bi1hcGkteS1jJUMzJUIzbW8tY29uc3VtaXJsYS0yMWVlYjEzMGVmMTRcIj5cbiAgICAgICAgICAgICAgwr9RdcOpIGVzIHVuIEFQST8geSBjw7NtbyBjb25zdW1pcmxhXG4gICAgICAgICAgICA8L0V4dGVybmFsTGlua3MuTGluaz5cbiAgICAgICAgICA8L0V4dGVybmFsTGlua3M+XG5cbiAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyB0aXRsZT1cIlNoYXJpbmcgbXkgaWRlYXMgaW4gc29mdHdhcmVcIj5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzLkxpbmsgaHJlZj1cImh0dHBzOi8vZ2JtLmNvbS9cIj5cbiAgICAgICAgICAgICAgVW5sZWFzaGluZyB0aGUgZmluYW5jaWFsIHBvdGVudGlhbCBvZiBNZXhpY28gYW5kIG91ciBwZW9wbGUgYXRcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+R0JNPC9zcGFuPlxuICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzLkxpbms+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcy5MaW5rIGhyZWY9XCJodHRwczovL3llbGxvd21lLm14L1wiPlxuICAgICAgICAgICAgICBHcm93aW5nIHRlYW1zIGF0XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+WWVsbG93bWU8L3NwYW4+XG4gICAgICAgICAgICA8L0V4dGVybmFsTGlua3MuTGluaz5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzLkxpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmpvaW5lbnNvLmNvbS9cIj5cbiAgICAgICAgICAgICAgQ3JlYXRpbmcgYSBuZXcgZ2VuZXJhdGlvbiBvZiBmaW5hbmNpYWwgc2VydmljZXMgYXRcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj5FbnNvPC9zcGFuPlxuICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzLkxpbms+XG4gICAgICAgICAgPC9FeHRlcm5hbExpbmtzPlxuXG4gICAgICAgICAgPEV4dGVybmFsTGlua3MgdGl0bGU9XCJCcmluZ2luZyBhIGNvbW11bml0eSBjbG9zZXJcIj5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzLkxpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9qYXZhc2NyaXB0bWVyaWRhL1wiPlxuICAgICAgICAgICAgICBKYXZhU2NyaXB0IE1lcmlkYVxuICAgICAgICAgICAgPC9FeHRlcm5hbExpbmtzLkxpbms+XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcy5MaW5rIGhyZWY9XCJodHRwczovL3d3dy5hd2F5ZnJvbWpzLmRldi9cIj5cbiAgICAgICAgICAgICAgQXdheSBmcm9tIEphdmFTY3JpcHRcbiAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rcy5MaW5rPlxuICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9