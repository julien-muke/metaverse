"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        onClick: ()=>handleClick(id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: \"planet-04\",\n                className: \"absolute w-full h-full object-cover rounded-[24px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px] leading-[20.16px] text-white uppercase\",\n                        children: \"Enter Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Begonias\\\\metaverse\\\\components\\\\ExploreCard.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBRVI7QUFDVTtBQUV6QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFO1dBQ3BFLDhEQUFDVCxxREFBVTtRQUNUVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUNqREssV0FBVyxZQUVWLE9BRENKLFdBQVdKLEtBQUssNEJBQTRCLHdCQUF3QixFQUNyRTtRQUNEUyxTQUFXLElBQU1KLFlBQVlMOzswQkFFN0IsOERBQUNVO2dCQUNDQyxLQUFLVjtnQkFDTFcsS0FBSTtnQkFDSkosV0FBVTs7Ozs7O1lBRVhKLFdBQVdKLG1CQUNWLDhEQUFDYTtnQkFBR0wsV0FBVTswQkFDWE47Ozs7OzBDQUdILDhEQUFDSTtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNGO3dCQUNDRSxXQUFXLEdBQXFCLE9BQWxCWCwwREFBaUIsRUFBQztrQ0FFaEMsNEVBQUNhOzRCQUNDQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKSixXQUFVOzs7Ozs7Ozs7OztrQ0FHZCw4REFBQ087d0JBQUVQLFdBQVU7a0NBQWlFOzs7Ozs7a0NBRzlFLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FDWE47Ozs7Ozs7Ozs7O3lCQUdOOzs7Ozs7O0FBQ1M7S0FwQ1JIO0FBdUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRXhwbG9yZUNhcmQuanN4PzIzY2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XHJcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XHJcblxyXG5jb25zdCBFeHBsb3JlQ2FyZCA9ICh7IGlkLCBpbWdVcmwsIHRpdGxlLCBpbmRleCwgYWN0aXZlLCBoYW5kbGVDbGljayB9KSA9PiAoXHJcbiAgPG1vdGlvbi5kaXZcclxuICAgIHZhcmlhbnRzPXtmYWRlSW4oJ3JpZ2h0JywgJ3NwcmluZycsIGluZGV4ICogMC41LCAwLjc1KX1cclxuICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlICR7XHJcbiAgICAgIGFjdGl2ZSA9PT0gaWQgPyAnbGc6ZmxleC1bMy41XSBmbGV4LVsxMF0nIDogJ2xnOmZsZXgtWzAuNV0gZmxleC1bMl0nXHJcbiAgICB9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LVsxNzBweF0gaC1bNzAwcHhdIHRyYW5zaXRpb24tW2ZsZXhdIGR1cmF0aW9uLVswLjdzXSBlYXNlLW91dC1mbGV4IGN1cnNvci1wb2ludGVyYH1cclxuICAgIG9uQ2xpY2sgPSB7KCkgPT4gaGFuZGxlQ2xpY2soaWQpfVxyXG4gID5cclxuICAgIDxpbWdcclxuICAgICAgc3JjPXtpbWdVcmx9XHJcbiAgICAgIGFsdD1cInBsYW5ldC0wNFwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQtWzI0cHhdXCJcclxuICAgIC8+XHJcbiAgICB7YWN0aXZlICE9PSBpZCA/IChcclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgc206dGV4dC1bMjZweF0gdGV4dC1bMThweF0gdGV4dC13aGl0ZSBhYnNvbHV0ZSB6LTAgbGc6Ym90dG9tLTIwIGxnOnJvdGF0ZS1bLTkwZGVnXSBsZzpvcmlnaW4tWzAsMF1cIj5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvaDM+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOCBmbGV4IGp1c3RpZnktc3RhcnQgdy1mdWxsIGZsZXgtY29sIGJnLVtyZ2JhKDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF1cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5mbGV4Q2VudGVyfSB3LVs2MHB4XSBoLVs2MHB4XSByb3VuZGVkLVsyNHB4XSBnbGFzc21vcnBoaXNtIG1iLVsxNnB4XWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvaGVhZHNldC5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJoZWFkc2V0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgaC0xLzIgb2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyMC4xNnB4XSB0ZXh0LXdoaXRlIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgRW50ZXIgTWV0YXZlcnNlXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC1bMjRweF0gZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVszMnB4XSB0ZXh0LVsyNHB4XSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApfVxyXG4gIDwvbW90aW9uLmRpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVDYXJkOyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJmYWRlSW4iLCJFeHBsb3JlQ2FyZCIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJpbmRleCIsImFjdGl2ZSIsImhhbmRsZUNsaWNrIiwiZGl2IiwidmFyaWFudHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJmbGV4Q2VudGVyIiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});