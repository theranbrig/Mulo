webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/http-status/lib/index.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var page = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/react-kawaii/lib/es/components/backpack/Backpack.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/backpack/Backpack.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/backpack/paths.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Backpack = function Backpack(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: size * 0.63,
    height: size,
    viewBox: "0 0 138 218"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "pocket__shape-path",
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].pocketShapePath
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "pocket__shape__shadow-path",
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].pocketShapeShadowPath
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-backpack",
    transform: "translate(0 -1)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "right-shoulder-strap",
    transform: "matrix(-1 0 0 1 125.901 13.054)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "right-shoulder-strap__back",
    fill: color,
    d: "M0 5.948v43.619l13.879-14.792z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "right-shoulder-strap__back__shadow",
    fill: "#FFF",
    fillRule: "nonzero",
    opacity: "0.4",
    d: "M0 5.948v43.619l13.879-14.792z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "right-shoulder-strap__front",
    fill: color,
    d: "M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "left-shoulder-strap",
    transform: "translate(11.896 13.054)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "left-shoulder-strap__back",
    fill: color,
    d: "M0 5.948v43.619l13.879-14.792z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "left-shoulder-strap__back_shadow",
    fill: "#FFF",
    fillRule: "nonzero",
    opacity: "0.4",
    d: "M0 5.948v43.619l13.879-14.792z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "left-shoulder-strap__front",
    fill: color,
    d: "M9.193 34.697L0 5.127 21.014 0l7.735 24.677z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "hanging-loop",
    transform: "translate(47.585)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "hanging-loop__back",
    fill: color,
    d: "M16.853 7.931h9.913L21.81.991z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "hanging-loop__back_shadow",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.14",
    d: "M16.853 7.931h9.913L21.81.991z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "hanging-loop__shape",
    fill: color,
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].hangingLoopShape
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "main-compartment",
    transform: "translate(0 26.617)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "main-compartment__shape",
    fill: color,
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].mainCompartmentShape
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "main-compartment__bottom-stripe",
    fill: "#121212",
    fillRule: "nonzero",
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].mainCompartmentBottomStripe,
    opacity: "0.07"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mood: mood,
    transform: "translate(36 70)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "main-compartment__top",
    fill: "#121212",
    fillRule: "nonzero",
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].mainCompartmentTop,
    opacity: "0.07"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "pocket",
    transform: "translate(12.888 135.981)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "mask-4",
    fill: "#fff"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#pocket__shape-path"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "pocket__shape",
    fill: color,
    xlinkHref: "#pocket__shape-path"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "mask-6",
    fill: "#fff"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#pocket__shape__shadow-path"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "pocket__shape__shadow",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.14",
    xlinkHref: "#pocket__shape__shadow-path"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Group-6",
    mask: "url(#mask-6)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(0 15.862)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "Rectangle-7",
    fill: "#33363B",
    opacity: "0.408",
    d: "M0 2.974h113.014v2.974H0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "Rectangle-7-Copy",
    fill: "#555D67",
    opacity: "0.408",
    d: "M0 0h113.014v2.974H0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "Rectangle-8",
    fill: "#6D727A",
    opacity: "0.587",
    d: "M107.066 0h5.948v5.948h-5.948z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "zip",
    fill: "#49505A",
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].zip,
    opacity: "0.746"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "brand",
    mask: "url(#mask-6)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(78.737 39.368)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "Rectangle-6",
    fill: "#FFFDFD",
    d: "M0 0h27.789v18.526H0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "Rectangle-6-Copy",
    fill: "#121212",
    opacity: "0.298",
    d: "M1.158 1.158h25.474v16.211H1.158z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "brand",
    fill: "#FFF",
    d: "M2.316 2.316h23.158v13.895H2.316z"
  })))))));
};

Backpack.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Backpack.defaultProps = {
  size: 240,
  mood: 'blissful',
  color: '#FFD882'
};
/* harmony default export */ __webpack_exports__["default"] = (Backpack);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/backpack/paths.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/backpack/paths.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  pocketShapePath: 'M11.329 0h90.555c7.42 0 11.13 2.538 11.13 7.614v49.828c0 5.325-3.36 7.987-10.082 7.987H11.414c-8.474 0-12.23-2.6-11.267-7.802V7.263C.147 2.42 3.875 0 11.33 0z',
  pocketShapeShadowPath: 'M11.329 0h90.555c7.42 0 11.13 2.538 11.13 7.614v49.828c0 5.325-3.36 7.987-10.082 7.987H11.414c-8.474 0-12.23-2.6-11.267-7.802V7.263C.147 2.42 3.875 0 11.33 0z',
  hangingLoopShape: 'M0 33.872c3.088-9.656 5.841-16.215 8.258-19.678 1.945-2.786 4.895-4.488 6.72-6.462 3.444-3.722 5.393-6.574 6.665-6.574 1.12 0-3.688 3.488-5.891 10.96-1.04 3.529-2.014 10.78-2.919 21.754H0zm43.62.992H30.8c-.904-11.217-1.876-18.63-2.915-22.237-2.2-7.636-7.029-11.47-5.91-11.47 1.271 0 3.243 3.183 6.682 6.987 1.824 2.018 4.77 3.758 6.713 6.606 2.415 3.539 5.164 10.244 8.25 20.114z',
  mainCompartmentShape: 'M68.899 0c38.235 0 68.898 34.267 68.898 76.539v93.207c0 14.095-10.283 21.584-22.966 21.584H22.966C10.283 191.33 0 183.84 0 169.746V76.54C0 34.267 30.664 0 68.899 0z',
  mainCompartmentBottomStripe: 'M137.797 156.949v13.373c0 13.924-10.283 21.324-22.966 21.324H22.966c-12.683 0-22.966-7.4-22.966-21.324v-13.373h137.797z',
  mainCompartmentTop: 'M137.797 82.423v-5.948C137.797 34.423 107.134.333 68.9.333S-.001 34.423 0 76.475v5.948C0 40.371 30.664 6.281 68.899 6.281s68.898 34.09 68.898 76.142z',
  zip: 'M109.285 1.983h2.028l.547 8.922h-2.974l.4-8.922zm.592 6.94v.99h.991v-.99h-.99z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/browser/Browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/browser/Browser.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/browser/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Browser = function Browser(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 1.44,
    height: size,
    viewBox: "0 0 200 139",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-browser"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-browser__body",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-browser__shape",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-browser__shadow",
    fill: "#121212",
    opacity: ".1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "address-bar",
    transform: "translate(.097)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].addressBar,
    fill: "#111"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    fill: "#FFF",
    cx: "168.855",
    cy: "10.901",
    rx: "3.4",
    ry: "3.395"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    fill: "#FFF",
    cx: "180.074",
    cy: "10.901",
    rx: "3.4",
    ry: "3.395"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "address",
    transform: "translate(12.654 5.47)",
    fill: "#FFF"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: ".277",
    y: ".163",
    width: "145.775",
    height: "10.563",
    rx: "5.282"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(67 63)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))));
};

Browser.propTypes = {
  /**
   * Size of the width
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Browser.defaultProps = {
  size: 180,
  mood: 'ko',
  color: '#FDA7DC'
};
/* harmony default export */ __webpack_exports__["default"] = (Browser);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/browser/paths.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/browser/paths.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  shape: 'M199.648 71.479V22.712C199.645 10.22 189.412-.003 176.902 0L22.74.006C10.233.006 0 10.228 0 22.72v92.044l.055-.01c.403 3.632 3.537 22.819 24.729 22.819 23.407 0 144.572 1.377 152.834 0 8.261-1.377 22.03-4.13 22.03-23.408V71.479z',
  shadow: 'M134.155 138.181c22.682.029 40.563-.108 43.562-.608 8.262-1.377 22.03-4.13 22.03-23.408V22.712C199.746 10.22 189.513-.003 177.002 0h-10.427c12.449.071 22.607 10.265 22.61 22.712v91.453c0 19.277-13.769 22.031-22.03 23.408-2.515.42-15.497.583-33 .608z',
  addressBar: 'M0 22.712C0 10.228 10.23.006 22.733.006L176.842 0c12.506-.003 22.736 10.22 22.738 22.712'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/cat/Cat.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/cat/Cat.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/cat/paths.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Cat = function Cat(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size * 0.84,
    height: size,
    viewBox: "0 0 185 220"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Kawaii-Builder",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-cat"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-cat_tail",
    transform: "translate(29.23 153.846)",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z",
    id: "tail_inner_shadow",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z",
    id: "tail_inner",
    fill: "#121212",
    opacity: "0.25"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-cat_legs",
    transform: "translate(81 190)",
    fill: color,
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].legs,
    id: "kawaii-cat_legs_inner"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-cat_arms",
    transform: "translate(58 132)",
    fill: color,
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M55.949.205s27.948 51.641 2 53.898",
    id: "arm-r"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.641.205s-27.949 51.641-2 53.898",
    id: "arm-l"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-cat_arms-shadow",
    transform: "translate(58 132)",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M55.949.205s27.948 51.641 2 53.898",
    id: "arm-r"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.641.205s-27.949 51.641-2 53.898",
    id: "arm-l"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].body,
    id: "kawaii-cat_body",
    fill: color,
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-cat_ears",
    transform: "translate(34 23)",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.25"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M103.795 2.897s18.718-8.974 13.077 8.975",
    id: "kawaii-cat_ear-r"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.923 2.538S-3.795-6.436 1.846 11.513",
    id: "kawaii-cat_ear-l"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M92.243 190.282h.004v-48.667h-.004c7.075-.36 11.946-2.615 11.946-2.615 16.709 54.254-11.62 51.324-11.946 51.282-.376.042-28.705 2.972-11.945-51.282 0 0 4.869 2.255 11.942 2.615z",
    id: "kawaii-cat_belly",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.25"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mood: mood,
    transform: "translate(59 67)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M96.935 77.625c-.975-2.106-8.13-2.227-8.889 0-.47 1.458 2.746 4.454 4.372 4.373 1.663-.121 5.095-3.118 4.517-4.373z",
    id: "kawaii-cat_nose",
    fill: "#121212",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-cat_shadow",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.1"
  })))));
};

Cat.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Cat.defaultProps = {
  size: 320,
  mood: 'excited',
  color: '#596881'
};
/* harmony default export */ __webpack_exports__["default"] = (Cat);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/cat/paths.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/cat/paths.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  body: 'M113.876 132.295c.91 2.705 21.818 65.749-6.184 65.397H77.846c-27.898.35-7.248-62.228-6.195-65.365-19.954-2.157-47.848-9.752-55.173-35.81-3.673-1.957-6.497-3.081-6.497-3.081l4.667-5.333S-3.096 89.64 1.109 85.436s13.333-15.744 13.333-15.744-11.23 2.103-9.128 0c1.044-1.044 6.153-3.788 12.67-8.442 3.162-9.69 8.325-17.38 14.502-23.48-4.482-10.424-.853-20.191 1.822-21.206 2.226-.83 14.75 3.197 21.214 5.384 4.043-6.006 6.53-12.307 6.53-12.307l5.333 4.667S65.846-3.436 70.05.769s15.744 13.334 15.744 13.334-2.103-11.231 0-9.129c2.051 2.052 10.667 19.795 27.436 33.077-9.487-7.436-22-14.41-37.949-21.23-10.77 4.615-19.897 9.076-27.641 13.64 8.462-5.743 14.41-20.82 14.41-20.82l5.334 4.667S65.846-3.436 70.05.769c4.2 4.2 15.712 13.308 15.744 13.334-.008-.041-2.099-11.227 0-9.129.862.863 2.885 4.5 6.187 9.412l.48-.018v-.009s.052 0 .153.004l.154-.004c.306.019.832.04 1.554.084 3.182-4.76 5.14-8.265 5.985-9.11 2.102-2.102 0 9.129 0 9.129s11.538-9.129 15.743-13.334 2.667 13.539 2.667 13.539L124.05 10s2.475 6.22 6.474 12.204c6.58-2.216 18.582-6.04 20.757-5.23 2.672 1.014 6.296 10.76 1.838 21.17 6.084 6.113 11.15 13.797 14.24 23.454 6.28 4.443 11.16 7.077 12.178 8.094 2.103 2.103-9.128 0-9.128 0s9.128 11.539 13.334 15.744c4.018 4.018-12.005 2.792-13.437 2.675l-.01.097 4.575 5.228s-2.6 1.034-6.054 2.846c-7.188 26.118-34.949 33.806-54.942 36.013z',
  shadow: 'M167.36 61.598c6.28 4.443 11.16 7.077 12.178 8.094 2.103 2.103-9.128 0-9.128 0s9.128 11.539 13.334 15.744c4.018 4.018-12.005 2.792-13.437 2.675l-.01.097 4.575 5.228s-2.6 1.034-6.054 2.846c-7.17 26.053-34.81 33.768-54.791 35.996-.72.08-1.433-.184-2.142-.791.847-.136 1.701-.282 2.562-.44 23.176-4.238 50.835-16.837 47.912-53.816-3.869-48.949-50.714-59.804-69.841-62.199-.02-.224-.038-.448-.056-.673 0 0 .667.011 1.878.085a1.95 1.95 0 0 1 .132-.224c3.094-4.646 5.004-8.055 5.836-8.887 2.102-2.102 0 9.129 0 9.129s11.538-9.129 15.743-13.334 2.667 13.539 2.667 13.539L124.05 10s2.508 6.302 6.554 12.323c1.037-.522 2.307-.958 2.492-1.02 10.446-3.511 16.508-4.954 18.185-4.329 2.672 1.014 6.296 10.76 1.838 21.17 6.084 6.113 11.15 13.797 14.24 23.454z',
  legs: 'M8.846 3.692C7.36 11.59 4.59 20.615 8.692 28.205c.667 1.23-1.897 1.487-2.513 1.59C4.744 29.949 3 29.333 2.231 28c-4.36-8.051.102-18.205 1.743-26.667C4.18.205 9.154 2 8.846 3.693zM14.128 14.359c-.256 4.872 1.026 9.692 2.667 14.205.872 2.36 6.564.872 5.743-1.436-1.487-4.154-2.717-8.513-2.615-12.923.103-3.23 1.026-6.308 2.256-9.282 1.129-2.82-4.153-2.718-5.025-.564h-.513c-1.282 3.23-2.359 6.513-2.513 10z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/common/face/Face.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/common/face/paths.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Face = function Face(_ref) {
  var mood = _ref.mood,
      uniqueId = _ref.uniqueId,
      rest = _objectWithoutProperties(_ref, ["mood", "uniqueId"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", _extends({
    id: "kawaii-face"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].defs,
    id: "kawaii-face__path-1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__mouth",
    transform: "translate(18.000000, 16.000000)"
  }, (mood === 'blissful' || mood === 'lovestruck' || mood === 'excited') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__mouth__joy",
    transform: "translate(0.000000, 1.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "kawaii-face__mask-2-".concat(uniqueId),
    fill: "white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#kawaii-face__path-1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "Combined-Shape",
    fill: "#000000",
    xlinkHref: "#kawaii-face__path-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].tongue,
    id: "kawaii-face__tongue",
    fill: "#E74144",
    mask: "url(#kawaii-face__mask-2-".concat(uniqueId),
    transform: "translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)"
  })), mood === 'happy' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].happy,
    id: "kawaii-face__mouth__happy",
    fill: "#000000"
  }), mood === 'shocked' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "kawaii-face__mouth__shocked",
    cx: "15",
    cy: "14",
    rx: "9",
    ry: "10",
    fill: "#000000"
  }), (mood === 'sad' || mood === 'ko') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].sad,
    id: "kawaii-face__mouth__sad",
    fill: "#000000",
    transform: "translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__blush",
    transform: "translate(0.000000, 15.000000)",
    fill: "#000000",
    opacity: "0.2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "Oval",
    cx: "3",
    cy: "3",
    r: "3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "Oval",
    cx: "63",
    cy: "3",
    r: "3"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__eyes",
    transform: "translate(2.000000, 0.000000)",
    fill: "#000000"
  }, mood === 'blissful' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__eyes__arc",
    transform: "translate(1.000000, 0.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].bliss1,
    id: "Fill-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].bliss2,
    id: "Fill-5"
  })), (mood === 'happy' || mood === 'sad' || mood === 'shocked' || mood === 'excited') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__eyes__circle",
    transform: "translate(1.000000, 2.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "Oval-3",
    cx: "4.5",
    cy: "4.5",
    r: "4.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    id: "Oval-3",
    cx: "56.5",
    cy: "4.5",
    r: "4.5"
  })), mood === 'lovestruck' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__eyes__heart",
    transform: "translate(0.000000, 2.000000)",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].lovestruck1,
    id: "Shape"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].lovestruck2,
    id: "Shape"
  })), mood === 'ko' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-face__eyes__ko",
    transform: "translate(1.500000, 1.000000)",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].ko1,
    id: "Cross"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].ko2,
    id: "Cross"
  }))));
};

Face.propTypes = {
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'])
};
Face.defaultProps = {
  mood: 'blissful'
};
/* harmony default export */ __webpack_exports__["default"] = (Face);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/common/face/paths.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/common/face/paths.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  defs: 'M1.45656876,3.14684877 C1.45656876,3.14684877 1.45656876,3.14684877 1.45656876,3.14684877 L0,3.14685315 C0,2.31818182 0.346033696,1.50734266 0.949429952,0.922027972 C1.55390756,0.335664336 2.38979521,0 3.2440659,0 L25.9525272,0 C26.8067979,0 27.6416041,0.335664336 28.2460818,0.922027972 C28.8505594,1.50734266 29.1965931,2.31818182 29.1965931,3.14685315 C29.1890236,5.85734266 28.240675,8.44825175 26.7127199,10.6814685 C25.1771954,12.9104895 23.0317865,14.8122378 20.4040931,16.0227273 C18.6544603,16.8251748 16.6809868,17.3087413 14.5982965,17.3076923 C11.4666916,17.3076923 8.61299495,16.2241259 6.33025392,14.5951049 C4.0399434,12.9587413 2.264358,10.779021 1.16245695,8.33811189 C0.431460764,6.70909091 0.0010813553,4.95314685 0,3.14685315 L1.45656896,3.14685315 Z',
  tongue: 'M9.59865983,9.95467851 C9.59865983,9.95467851 9.59865983,9.95467851 9.59865983,9.95467851 L9,9.95467851 C9,9.66740582 9.14222222,9.38631493 9.39022222,9.18340586 C9.63866667,8.98013316 10.3333333,8 15,8 C19.6666667,8 20.3608889,8.98013316 20.6093333,9.18340586 C20.8577778,9.38631493 21,9.66740582 21,9.95467851 C20.9968889,10.8943148 20.6071111,11.7924965 19.9791111,12.5666783 C19.348,13.3394055 18.4662222,13.9986781 17.3862222,14.4183144 C16.6671111,14.6964962 15.856,14.8641326 15,14.8637689 C13.7128889,14.8637689 12.54,14.4881326 11.6017778,13.9234054 C10.6604444,13.3561327 9.93066667,12.6004964 9.47777778,11.7543147 C9.17733333,11.1895875 9.00044444,10.5808603 9,9.95467851 L9.59865983,9.95467851 Z',
  happy: 'M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,0 21.9999984,0 C20.8953319,0 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,0 7.9999998,0 C6.89533325,0 6,0.895333245 6,1.9999998',
  sad: 'M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,7.10542736e-15 21.9999984,7.10542736e-15 C20.8953319,7.10542736e-15 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,7.10542736e-15 7.9999998,7.10542736e-15 C6.89533325,7.10542736e-15 6,0.895333245 6,1.9999998',
  bliss1: 'M11.3298651,9.72876106 C9.83321993,9.72876106 8.62018766,8.55758439 8.62018766,7.11258087 C8.62018766,6.27104292 7.91115541,5.58647579 7.03954249,5.58647579 C6.16883282,5.58647579 5.45889734,6.27104292 5.45889734,7.11258087 C5.45889734,8.55758439 4.2467683,9.72876106 2.74921991,9.72876106 C1.25257476,9.72876106 0.0395424927,8.55758439 0.0395424927,7.11258087 C0.0395424927,3.38626826 3.18005862,0.354115435 7.03954249,0.354115435 C10.8999296,0.354115435 14.0395425,3.38626826 14.0395425,7.11258087 C14.0395425,8.55758439 12.8274135,9.72876106 11.3298651,9.72876106',
  bliss2: 'M57.3298651,9.72876106 C55.8332199,9.72876106 54.6201877,8.55758439 54.6201877,7.11258087 C54.6201877,6.27104292 53.9111554,5.58647579 53.0395425,5.58647579 C52.1688328,5.58647579 51.4588973,6.27104292 51.4588973,7.11258087 C51.4588973,8.55758439 50.2467683,9.72876106 48.7492199,9.72876106 C47.2525748,9.72876106 46.0395425,8.55758439 46.0395425,7.11258087 C46.0395425,3.38626826 49.1800586,0.354115435 53.0395425,0.354115435 C56.8999296,0.354115435 60.0395425,3.38626826 60.0395425,7.11258087 C60.0395425,8.55758439 58.8274135,9.72876106 57.3298651,9.72876106',
  lovestruck1: 'M11.980165,2.98190092 C11.8050001,1.25390423 10.4403753,0.000206846623 8.73257491,0.000206846623 C7.5948106,0.000206846623 6.55305237,0.548970938 5.96686143,1.42848278 C5.38597852,0.537594374 4.38691529,0 3.26738291,0 C1.55981331,0 0.194957712,1.25369738 0.0200235653,2.98169407 C0.00617653522,3.05802048 -0.0505962882,3.45971662 0.12203002,4.11479988 C0.370814995,5.05967525 0.945466744,5.91912297 1.78344285,6.59964836 C1.78344285,6.59964836 4.36682268,10 5.96409202,10 C7.56136137,10 10.216515,6.59985521 10.216515,6.59985521 C11.0544911,5.91912297 11.6291428,5.0598821 11.8779278,4.11479988 C12.0505541,3.45992347 11.9937813,3.05822732 11.980165,2.98190092 Z',
  lovestruck2: 'M62.980165,2.98190092 C62.8050001,1.25390423 61.4403753,0.000206846623 59.7325749,0.000206846623 C58.5948106,0.000206846623 57.5530524,0.548970938 56.9668614,1.42848278 C56.3859785,0.537594374 55.3869153,0 54.2673829,0 C52.5598133,0 51.1949577,1.25369738 51.0200236,2.98169407 C51.0061765,3.05802048 50.9494037,3.45971662 51.12203,4.11479988 C51.370815,5.05967525 51.9454667,5.91912297 52.7834428,6.59964836 C52.7834428,6.59964836 55.3668227,10 56.964092,10 C58.5613614,10 61.216515,6.59985521 61.216515,6.59985521 C62.0544911,5.91912297 62.6291428,5.0598821 62.8779278,4.11479988 C63.0505541,3.45992347 62.9937813,3.05822732 62.980165,2.98190092 Z',
  shocked1: 'M5.29976191,8.12776191 L7.18533333,10.0133333 C7.576,10.404 8.088,10.5993333 8.6,10.5993333 C9.11133333,10.5993333 9.62333333,10.404 10.014,10.0133333 C10.7953333,9.23266667 10.7953333,7.966 10.014,7.18533333 L8.12814284,5.29966667 L10.014,3.414 C10.7953333,2.63333333 10.7953333,1.36666667 10.014,0.586 C9.23266667,-0.195333333 7.96666667,-0.195333333 7.18533333,0.586 L5.29976191,2.47157143 L3.414,0.586 C2.63266667,-0.195333333 1.36733333,-0.195333333 0.586,0.586 C-0.195333333,1.36666667 -0.195333333,2.63333333 0.586,3.414 L2.47166667,5.29966667 L0.586,7.18533333 C-0.195333333,7.966 -0.195333333,9.23266667 0.586,10.0133333 C0.976666667,10.404 1.488,10.5993333 2,10.5993333 C2.512,10.5993333 3.02333333,10.404 3.414,10.0133333 L5.29976191,8.12776191 Z',
  shocked2: 'M51.2997619,8.12776191 L53.1853333,10.0133333 C53.576,10.404 54.088,10.5993333 54.6,10.5993333 C55.1113333,10.5993333 55.6233333,10.404 56.014,10.0133333 C56.7953333,9.23266667 56.7953333,7.966 56.014,7.18533333 L54.1281428,5.29966667 L56.014,3.414 C56.7953333,2.63333333 56.7953333,1.36666667 56.014,0.586 C55.2326667,-0.195333333 53.9666667,-0.195333333 53.1853333,0.586 L51.2997619,2.47157143 L49.414,0.586 C48.6326667,-0.195333333 47.3673333,-0.195333333 46.586,0.586 C45.8046667,1.36666667 45.8046667,2.63333333 46.586,3.414 L48.4716667,5.29966667 L46.586,7.18533333 C45.8046667,7.966 45.8046667,9.23266667 46.586,10.0133333 C46.9766667,10.404 47.488,10.5993333 48,10.5993333 C48.512,10.5993333 49.0233333,10.404 49.414,10.0133333 L51.2997619,8.12776191 Z',
  ko1: 'M52.9142136,5.03553391 L50.4393398,2.56066017 C49.8535534,1.97487373 49.8535534,1.02512627 50.4393398,0.439339828 C51.0251263,-0.146446609 51.9748737,-0.146446609 52.5606602,0.439339828 L55.0355339,2.91421356 L57.5104076,0.439339828 C58.0961941,-0.146446609 59.0459415,-0.146446609 59.631728,0.439339828 C60.2175144,1.02512627 60.2175144,1.97487373 59.631728,2.56066017 L57.1568542,5.03553391 L59.631728,7.51040764 C60.2175144,8.09619408 60.2175144,9.04594155 59.631728,9.63172798 C59.0459415,10.2175144 58.0961941,10.2175144 57.5104076,9.63172798 L55.0355339,7.15685425 L52.5606602,9.63172798 C51.9748737,10.2175144 51.0251263,10.2175144 50.4393398,9.63172798 C49.8535534,9.04594155 49.8535534,8.09619408 50.4393398,7.51040764 L52.9142136,5.03553391 Z',
  ko2: 'M2.91421356,5.03553391 L0.439339828,2.56066017 C-0.146446609,1.97487373 -0.146446609,1.02512627 0.439339828,0.439339828 C1.02512627,-0.146446609 1.97487373,-0.146446609 2.56066017,0.439339828 L5.03553391,2.91421356 L7.51040764,0.439339828 C8.09619408,-0.146446609 9.04594155,-0.146446609 9.63172798,0.439339828 C10.2175144,1.02512627 10.2175144,1.97487373 9.63172798,2.56066017 L7.15685425,5.03553391 L9.63172798,7.51040764 C10.2175144,8.09619408 10.2175144,9.04594155 9.63172798,9.63172798 C9.04594155,10.2175144 8.09619408,10.2175144 7.51040764,9.63172798 L5.03553391,7.15685425 L2.56066017,9.63172798 C1.97487373,10.2175144 1.02512627,10.2175144 0.439339828,9.63172798 C-0.146446609,9.04594155 -0.146446609,8.09619408 0.439339828,7.51040764 L2.91421356,5.03553391 Z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Wrapper(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', _objectSpread({}, props, {
    style: _objectSpread({
      position: 'relative'
    }, props.style || {})
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/creditCard/CreditCard.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/creditCard/CreditCard.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/creditCard/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var CreditCard = function CreditCard(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 1.38,
    height: size,
    viewBox: "0 0 198 143",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-creditCard"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-creditCard__body",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-creditCard__shape",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-creditCard__shadow",
    fill: "#000",
    opacity: ".1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "kawaii-creditCard__stripe",
    fill: "#000",
    d: "M0 17h198v27H0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(66 73)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))));
};

CreditCard.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
CreditCard.defaultProps = {
  size: 200,
  mood: 'blissful',
  color: '#83D1FB'
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCard);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/creditCard/paths.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/creditCard/paths.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  shape: 'M187.018 143H10.982C4.916 143 0 138.097 0 132.047V10.953C0 4.903 4.916 0 10.982 0h176.036C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953',
  shadow: 'M176.018 143c6.066 0 10.982-4.903 10.982-10.953V10.953C187 4.903 182.084 0 176.018 0h11C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953h-11z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/file/File.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/file/File.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/file/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var File = function File(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 0.68,
    height: size,
    viewBox: "0 0 105 153",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-file"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-file__body",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-file__shape",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-file__shadow",
    fill: "#000",
    opacity: ".1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "kawaii-file__fold",
    fill: "#000",
    opacity: ".2",
    d: "M70.1445,0 L70.1445,22.641 C70.1445,29.387 75.6135,34.855 82.3595,34.855 L104.9995,34.855 L70.1445,0"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(20 66)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))));
};

File.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
File.defaultProps = {
  size: 200,
  mood: 'ko',
  color: '#83D1FB'
};
/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/file/paths.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/file/paths.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  shape: 'M14.938 0C7.24 0 .998 6.24.998 13.938v125.124C1 146.76 7.24 153 14.938 153h76.124c7.698 0 13.939-6.24 13.939-13.938V35.569c0-.457-.183-.895-.505-1.218L70.65.504',
  shadow: 'M105,34.8555 L95.954,34.8555 C95.961,35.1885 95.979,35.5195 95.979,35.8545 L95.979,138.9965 C95.979,146.7255 89.648,152.9895 81.836,152.9895 L90.927,152.9895 C98.739,152.9895 105.07,146.7255 105.07,138.9965 L105.07,35.8545 C105.07,35.5215 105.066,35.1885 105.059,34.8555 L105,34.8555 Z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/ghost/Ghost.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/ghost/Ghost.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/ghost/paths.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Ghost = function Ghost(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 0.77,
    height: size,
    viewBox: "0 0 130 168",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-ghost"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-ghost__body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-ghost__shape",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-ghost__shadow",
    fillOpacity: ".1",
    fill: "#000000"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mood: mood,
    transform: "translate(34 57)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }))));
};

Ghost.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Ghost.defaultProps = {
  size: 240,
  mood: 'blissful',
  color: '#E0E4E8'
};
/* harmony default export */ __webpack_exports__["default"] = (Ghost);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/ghost/paths.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/ghost/paths.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  shape: 'M63.004.034C27.572 1.238 0 36.002 0 76.472v76.272c0 8.116 5.832 14.718 13 14.718s13-6.602 13-14.718c0-2.705 1.944-4.906 4.333-4.906 2.39 0 4.334 2.2 4.334 4.906 0 8.116 5.831 14.718 13 14.718 3.472 0 6.737-1.53 9.192-4.31 2.456-2.78 3.808-6.477 3.807-10.408 0-2.712 1.939-4.906 4.334-4.906 2.39 0 4.333 2.2 4.333 4.906 0 8.116 5.832 14.718 13 14.718 7.169 0 13-6.602 13-14.718 0-2.705 1.944-4.906 4.334-4.906 2.39 0 4.333 2.2 4.333 4.906 0 8.116 5.832 14.718 13 14.718s13-6.602 13-14.718V73.592c0-41.028-29.82-74.82-66.996-73.558z',
  shadow: 'M111.5 166.08c4.427-2.35 7.5-7.444 7.5-13.336V73.592C119 35.918 93.857 4.346 60.962.412a6.603 6.603 0 0 1 2.042-.378C100.181-1.228 130 32.564 130 73.592v79.152c0 8.116-5.832 14.718-13 14.718-1.965 0-3.829-.496-5.5-1.383z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/iceCream/IceCream.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/iceCream/IceCream.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/iceCream/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var IceCream = function IceCream(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 0.5,
    height: size,
    viewBox: "0 0 110 220",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-iceCream"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].stick,
    id: "kawaii-iceCream__stick",
    fill: "#FCCB7E"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-iceCream__shape",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-iceCream__shadow",
    fill: "#000000",
    opacity: ".1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(22.000000, 81.000000)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))));
};

IceCream.propTypes = {
  /**
   * Size of the width
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
IceCream.defaultProps = {
  size: 300,
  mood: 'blissful',
  color: '#FDA7DC'
};
/* harmony default export */ __webpack_exports__["default"] = (IceCream);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/iceCream/paths.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/iceCream/paths.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  stick: 'M56.142 219.63h-3.964c-4.36 0-7.927-3.53-7.927-7.843v-31.372h19.818v31.372c0 4.314-3.568 7.843-7.927 7.843z',
  shape: 'M57.184 0h-4.34C24.19 0 .75 23.192.75 51.54v113.456c0 8.502 6.964 15.392 15.558 15.392H93.72c8.593 0 15.557-6.89 15.557-15.392V51.54C109.277 23.192 85.837 0 57.184 0z',
  shadow: 'M83.97 180.388c8.593 0 15.557-6.89 15.557-15.392V51.54c0-27.41-21.913-49.998-49.264-51.464.938-.05 1.881-.076 2.83-.076h4.34c28.653 0 52.094 23.192 52.094 51.54v113.456c0 8.502-6.964 15.392-15.557 15.392h-10z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/mug/Mug.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/mug/Mug.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/mug/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Mug = function Mug(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 1.5,
    height: size,
    viewBox: "0 0 172 115",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-mug"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-mug__body",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-mug__shape",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-mug__shadow",
    fill: "#000",
    opacity: ".1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(71 42)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))));
};

Mug.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Mug.defaultProps = {
  size: 170,
  mood: 'blissful',
  color: '#A6E191'
};
/* harmony default export */ __webpack_exports__["default"] = (Mug);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/mug/paths.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/mug/paths.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  shape: 'M17.591 22.258h21.5V5.565C39.091 2.49 41.718 0 44.955 0h121.181C169.374 0 172 2.49 172 5.565v70.483C172 97.526 153.588 115 130.955 115H80.136c-20.764 0-37.93-14.72-40.633-33.733C17.283 78.701 0 60.722 0 38.952c0-9.205 7.891-16.694 17.591-16.694zm20.627 47.704V33.387h-21.5c-3.233 0-5.863 2.496-5.863 5.565 0 15.485 11.835 28.37 27.363 31.01z',
  shadow: 'M156.99 0h9.106C169.356 0 172 2.49 172 5.565v70.483C172 97.526 153.462 115 130.673 115h-16.89 7.784c22.79 0 41.327-17.474 41.327-38.952V5.565c0-3.074-2.644-5.565-5.903-5.565H106z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/planet/Planet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/planet/Planet.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/planet/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var Planet = function Planet(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size,
    height: size,
    version: "1.1",
    viewBox: "0 0 134 134",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shape,
    id: "kawaii-planet__shape--path"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-planet__shadow--path"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-planet"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-planet__body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "mask-2",
    fill: "#fff"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#kawaii-planet__shape--path"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "kawaii-planet__shape",
    fill: color,
    xlinkHref: "#kawaii-planet__shape--path"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "mask-4",
    fill: "#fff"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#kawaii-planet__shadow--path"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    id: "kawaii-planet__shadow",
    fill: "#000000",
    opacity: ".1",
    xlinkHref: "#kawaii-planet__shadow--path"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(34 57)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))));
};

Planet.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Planet.defaultProps = {
  size: 190,
  mood: 'blissful',
  color: '#FCCB7E'
};
/* harmony default export */ __webpack_exports__["default"] = (Planet);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/planet/paths.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/planet/paths.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  shape: 'M67 134c37.003 0 67-29.997 67-67S104.003 0 67 0 0 29.997 0 67s29.997 67 67 67z',
  shadow: 'M61.5 133.777C95.93 130.98 123 102.151 123 67 123 31.849 95.93 3.02 61.5.223A67.906 67.906 0 0 1 67 0c37.003 0 67 29.997 67 67s-29.997 67-67 67c-1.852 0-3.686-.075-5.5-.223z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/speechBubble/SpeechBubble.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/speechBubble/SpeechBubble.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paths */ "./node_modules/react-kawaii/lib/es/components/speechBubble/paths.js");
/* harmony import */ var _common_face_Face__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/face/Face */ "./node_modules/react-kawaii/lib/es/components/common/face/Face.js");
/* harmony import */ var _utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getUniqueId */ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js");
/* harmony import */ var _common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/wrapper/Wrapper */ "./node_modules/react-kawaii/lib/es/components/common/wrapper/Wrapper.js");







var SpeechBubble = function SpeechBubble(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: size * 1.3,
    height: size,
    viewBox: "0 0 186 143",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Kawaii-Builder",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Kawaii-speechBubble",
    transform: "translate(-27 -57)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "kawaii-speechBubble",
    transform: "translate(27 57)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].body,
    id: "kawaii-speechBubble_body",
    fill: color,
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: _paths__WEBPACK_IMPORTED_MODULE_2__["default"].shadow,
    id: "kawaii-speechBubble_shadow",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.07"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_face_Face__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mood: mood,
    transform: "translate(60 46)",
    uniqueId: Object(_utils_getUniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))))));
};

SpeechBubble.propTypes = {
  /**
   * Size of the width
   * */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  mood: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
SpeechBubble.defaultProps = {
  size: 220,
  mood: 'happy',
  color: '#83D1FB'
};
/* harmony default export */ __webpack_exports__["default"] = (SpeechBubble);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/components/speechBubble/paths.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/components/speechBubble/paths.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var paths = {
  body: 'M186 19.335C185.997 8.701 176.464-.002 164.809 0L21.186.005C9.533.005 0 8.708 0 19.342v78.362l.05-.008c.377 3.092 3.297 19.426 23.04 19.426h35.435l-.098 21.646c.054 1.205.216 1.98.485 2.323.405.516 1.424 1.77 3.724 1.887 2.3.116 2.336-.265 2.743-.31.271-.03 2.41-1.43 6.418-4.198l29.944-21.348c39.824.406 61.07.406 63.735 0C173.172 115.95 186 113.606 186 97.194V19.335z',
  shadow: 'M165.512 116.482c7.683-1.166 20.488-3.498 20.488-19.82V19.23C185.997 8.653 176.481-.002 164.846 0h-9.697c11.577.06 21.025 8.691 21.027 19.23v77.432c0 16.322-12.805 18.654-20.487 19.82-2.34.355-14.412.494-30.689.515 21.094.024 37.723-.092 40.512-.515z'
};
/* harmony default export */ __webpack_exports__["default"] = (paths);

/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/index.js ***!
  \***************************************************/
/*! exports provided: Browser, Cat, CreditCard, Ghost, IceCream, Mug, Planet, SpeechBubble, Backpack, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_browser_Browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/browser/Browser */ "./node_modules/react-kawaii/lib/es/components/browser/Browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _components_browser_Browser__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_creditCard_CreditCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/creditCard/CreditCard */ "./node_modules/react-kawaii/lib/es/components/creditCard/CreditCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCard", function() { return _components_creditCard_CreditCard__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_ghost_Ghost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ghost/Ghost */ "./node_modules/react-kawaii/lib/es/components/ghost/Ghost.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ghost", function() { return _components_ghost_Ghost__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_iceCream_IceCream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/iceCream/IceCream */ "./node_modules/react-kawaii/lib/es/components/iceCream/IceCream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IceCream", function() { return _components_iceCream_IceCream__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _components_mug_Mug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mug/Mug */ "./node_modules/react-kawaii/lib/es/components/mug/Mug.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mug", function() { return _components_mug_Mug__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _components_planet_Planet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/planet/Planet */ "./node_modules/react-kawaii/lib/es/components/planet/Planet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Planet", function() { return _components_planet_Planet__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _components_speechBubble_SpeechBubble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/speechBubble/SpeechBubble */ "./node_modules/react-kawaii/lib/es/components/speechBubble/SpeechBubble.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpeechBubble", function() { return _components_speechBubble_SpeechBubble__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _components_backpack_Backpack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/backpack/Backpack */ "./node_modules/react-kawaii/lib/es/components/backpack/Backpack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Backpack", function() { return _components_backpack_Backpack__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _components_cat_Cat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cat/Cat */ "./node_modules/react-kawaii/lib/es/components/cat/Cat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return _components_cat_Cat__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _components_file_File__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/file/File */ "./node_modules/react-kawaii/lib/es/components/file/File.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _components_file_File__WEBPACK_IMPORTED_MODULE_9__["default"]; });













/***/ }),

/***/ "./node_modules/react-kawaii/lib/es/utils/getUniqueId.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-kawaii/lib/es/utils/getUniqueId.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
To prevent the SVGs masks being used with the same id
*/
var getUniqueId = function getUniqueId() {
  if (typeof window === 'undefined') return;
  var id = Math.random().toString(36).substring(2, 15);
  return id;
};

/* harmony default export */ __webpack_exports__["default"] = (getUniqueId);

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_kawaii__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-kawaii */ "./node_modules/react-kawaii/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/pages/_error.js";





var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "_error__ErrorStyles",
  componentId: "sc-18kcxx4-0"
})(["background-color:#232323;height:100vh;margin:0 auto;text-align:center;display:grid;grid-template-rows:1fr;grid-template-columns:1fr;align-items:center;padding:15px;button{background:#232323;border:none;}h2,h1{font-family:'Raleway',sans-serif;}h1{font-size:3rem;color:#40a4c8;}h2{color:gainsboro;}"]);

var ErrorPage = function ErrorPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isHappy = _useState2[0],
      setIsHappy = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Oops...Something Went Wrong")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Oops...Something went wrong."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Are you sure you're in the right place?"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "This is Hank. He is feeling blue that you are in the wrong place."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "However if you poke his belly you can cheer him up and he might take you back home."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setIsHappy(true);
      setTimeout(function () {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
          pathname: '/'
        });
      }, 1000);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_kawaii__WEBPACK_IMPORTED_MODULE_2__["Ghost"], {
    size: 200,
    mood: isHappy ? 'blissful' : 'sad',
    color: isHappy ? 'Gainsboro' : '#40a4c8',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

/***/ }),

/***/ 2:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.b732ad29a39f424488e6.hot-update.js.map