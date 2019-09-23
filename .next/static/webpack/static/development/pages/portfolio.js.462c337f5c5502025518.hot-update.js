webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _context_DarkContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/DarkContext */ "./components/context/DarkContext.js");

var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/Layout.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    margin: 0 auto;\n  }\n  /* raleway-300 - latin */\n  @font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 300;\n    src: url('../static/fonts/raleway-v14-latin-300.eot'); /* IE9 Compat Modes */\n    src: local('Raleway Light'), local('Raleway-Light'),\n        url('../static/fonts/raleway-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('../static/fonts/raleway-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */\n        url('../static/fonts/raleway-v14-latin-300.woff') format('woff'), /* Modern Browsers */\n        url('../static/fonts/raleway-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */\n        url('../static/fonts/raleway-v14-latin-300.svg#Raleway') format('svg'); /* Legacy iOS */\n  }\n  /* raleway-regular - latin */\n  @font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../static/fonts/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local('Raleway'), local('Raleway-Regular'),\n        url('../static/fonts/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('../static/fonts/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n        url('../static/fonts/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */\n        url('../static/fonts/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n        url('../static/fonts/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */\n  }\n  raleway-600 - latin\n  @font-face {\n    font-family: 'Raleway';\n    font-style: normal;\n    font-weight: 600;\n    src: url('../static/fonts/raleway-v14-latin-600.eot'); /* IE9 Compat Modes */\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),\n        url('../static/fonts/raleway-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('../static/fonts/raleway-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */\n        url('../static/fonts/raleway-v14-latin-600.woff') format('woff'), /* Modern Browsers */\n        url('../static/fonts/raleway-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */\n        url('../static/fonts/raleway-v14-latin-600.svg#Raleway') format('svg'); /* Legacy iOS */\n  }\n  /* righteous-regular - latin */\n  @font-face {\n    font-family: 'Righteous';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../static/fonts/righteous-v8-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local('Righteous'), local('Righteous-Regular'),\n        url('../static/fonts/righteous-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('../static/fonts/righteous-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n        url('../static/fonts/righteous-v8-latin-regular.woff') format('woff'), /* Modern Browsers */\n        url('../static/fonts/righteous-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n        url('../static/fonts/righteous-v8-latin-regular.svg#Righteous') format('svg'); /* Legacy iOS */\n  }\n\n  /* roboto-regular - latin */\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    src: url('../static/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */\n    src: local('Roboto'), local('Roboto-Regular'),\n        url('../static/fonts/roboto-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('../static/fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n        url('../static/fonts/roboto-v20-latin-regular.woff') format('woff'), /* Modern Browsers */\n        url('../static/fonts/roboto-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */\n        url('../static/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n  /* roboto-300 - latin */\n  @font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: url('../static/fonts/roboto-v20-latin-300.eot'); /* IE9 Compat Modes */\n    src: local('Roboto Light'), local('Roboto-Light'),\n        url('../static/fonts/roboto-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('../static/fonts/roboto-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */\n        url('../static/fonts/roboto-v20-latin-300.woff') format('woff'), /* Modern Browsers */\n        url('../static/fonts/roboto-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */\n        url('../static/fonts/roboto-v20-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var darkTheme = {
  darkBlack: '#454545',
  black: '#343434',
  white: 'white',
  blue: 'rgb(23, 211, 211)',
  transparent: '#13131394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
  rightFont: 'Righteous'
};
var lightTheme = {
  darkBlack: 'gainsboro',
  black: 'white',
  white: '#232323',
  blue: '#40a4c8',
  transparent: '#f3f3f394',
  raleFont: 'Raleway',
  robFont: 'Roboto',
  rightFont: 'Righteous'
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject()); // later in your app

var Layout = function Layout(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_DarkContext__WEBPACK_IMPORTED_MODULE_6__["DarkContext"]),
      darkMode = _useContext.darkMode,
      toggleDarkMode = _useContext.toggleDarkMode;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: darkMode ? darkTheme : lightTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggleDarkMode: toggleDarkMode,
    darkMode: darkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    darkMode: darkMode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=portfolio.js.462c337f5c5502025518.hot-update.js.map