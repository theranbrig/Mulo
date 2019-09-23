module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_FooterStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/FooterStyles */ "./components/styles/FooterStyles.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/Footer.js";





var Footer = function Footer(_ref) {
  var darkMode = _ref.darkMode;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_FooterStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: darkMode ? 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_200/v1551529192/theran-logo.png' : 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_200/v1551529192/theran-logo-Original-dark.png',
    alt: "Theran Brigowatz Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-nav-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeClassName: "active",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeClassName: "active",
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeClassName: "active",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, " About Me")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activeClassName: "active",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Contact")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "*"), " I am an American living in the good Korea, but open to work around the world and free of time zones."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Thanks for visiting the bottom of the page.")));
};

Footer.propTypes = {
  darkMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/IconLink.js":
/*!********************************!*\
  !*** ./components/IconLink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/IconLink.js";



var IconLink = function IconLink(_ref) {
  var link = _ref.link,
      icon = _ref.icon,
      name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

IconLink.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (IconLink);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
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

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/Link.js";





var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  var className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className: className
  }));
};

ActiveLink.propTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-offcanvas */ "react-offcanvas");
/* harmony import */ var react_offcanvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_offcanvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-burgers */ "react-animated-burgers");
/* harmony import */ var react_animated_burgers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_burgers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavLinks */ "./components/NavLinks.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _context_DarkContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/DarkContext */ "./components/context/DarkContext.js");

var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/Nav.js";









var Nav = function Nav(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_DarkContext__WEBPACK_IMPORTED_MODULE_8__["DarkContext"]),
      darkMode = _useContext.darkMode;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "main-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/Default Photoshop Size.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desktop-nav-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavLinks__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))));
};

Nav.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/NavLinks.js":
/*!********************************!*\
  !*** ./components/NavLinks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toggle */ "react-toggle");
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toggle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _context_DarkContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/DarkContext */ "./components/context/DarkContext.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/UserContext */ "./components/context/UserContext.js");
var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/NavLinks.js";






var NavLinks = function NavLinks() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_DarkContext__WEBPACK_IMPORTED_MODULE_3__["DarkContext"]),
      darkMode = _useContext.darkMode,
      toggleDarkMode = _useContext.toggleDarkMode;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]),
      user = _useContext2.user,
      userLoading = _useContext2.userLoading;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "active",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "active",
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Products")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "active",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "About")), userLoading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Loading..."), user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "active",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Contact")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "active",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Sign In")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

/***/ }),

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_graphql_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/graphql.svg */ "./static/graphql.svg");
/* harmony import */ var _static_graphql_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_graphql_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_graphqldark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/graphqldark.svg */ "./static/graphqldark.svg");
/* harmony import */ var _static_graphqldark_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_graphqldark_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_DarkContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/DarkContext */ "./components/context/DarkContext.js");
var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/ProjectCard.js";







var ProjectCard = function ProjectCard(props) {
  var _props$project = props.project,
      title = _props$project.title,
      description = _props$project.description,
      tech = _props$project.tech,
      slug = _props$project.slug,
      icon = _props$project.icon;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_DarkContext__WEBPACK_IMPORTED_MODULE_5__["DarkContext"]),
      darkMode = _useContext.darkMode;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "individual-project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/project',
      query: {
        name: slug
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, tech.map(function (el) {
    if (el === 'graphql') {
      if (darkMode) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _static_graphql_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
          alt: "graphql",
          className: "graphql-logo",
          style: {
            padding: '0 7px 0 5px',
            height: '28px'
          },
          key: el,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _static_graphqldark_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: "graphql",
        className: "graphql-logo",
        style: {
          padding: '0 7px 0 5px',
          height: '28px'
        },
        key: el,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: el,
      key: el,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })))));
};

ProjectCard.propTypes = {
  project: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./components/context/DarkContext.js":
/*!*******************************************!*\
  !*** ./components/context/DarkContext.js ***!
  \*******************************************/
/*! exports provided: DarkContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkContext", function() { return DarkContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/context/DarkContext.js";


var DarkContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

var DarkProvider = function DarkProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var toggleDarkMode = function toggleDarkMode() {
    setDarkMode(!darkMode);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DarkContext.Provider, {
    value: {
      darkMode: darkMode,
      toggleDarkMode: toggleDarkMode
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.children);
};

DarkProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DarkProvider);

/***/ }),

/***/ "./components/context/UserContext.js":
/*!*******************************************!*\
  !*** ./components/context/UserContext.js ***!
  \*******************************************/
/*! exports provided: UserContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data */ "./static/data.js");

var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/components/context/UserContext.js";



var UserContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

var UserProvider = function UserProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      userError = _useState4[0],
      setUserError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      userLoading = _useState6[0],
      setUserLoading = _useState6[1];

  var loginUser = function loginUser(name, password) {
    setUserLoading(true);
    var memberCheck = _static_data__WEBPACK_IMPORTED_MODULE_3__["users"].filter(function (member) {
      return name === member.username && password === member.password;
    });

    if (!memberCheck.length) {
      setUserError('Oops.  No member found matching those credentials.');
    } else {
      setUser(memberCheck[0]);
    }

    setUserLoading(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserContext.Provider, {
    value: {
      user: user,
      loginUser: loginUser,
      userLoading: userLoading,
      userError: userError
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.children);
};

UserProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserProvider);

/***/ }),

/***/ "./components/styles/FooterStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/FooterStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var FooterStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FooterStyles",
  componentId: "wfk4xc-0"
})(["border-top:3px solid ", ";display:flex;align-content:space-between;justify-content:space-between;width:100%;padding:10px;background-color:", ";@media (max-width:800px){display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr;align-items:center;}img{height:40px;}.footer-left{display:grid;grid-template-rows:1fr 20px;grid-template-columns:300px;grid-gap:5px;margin:10px;@media (max-width:800px){grid-template-columns:1fr 3fr;grid-template-rows:1fr;align-content:space-between;margin:0;}.footer-nav-links{display:grid;grid-template-rows:1fr;grid-template-columns:repeat(4,1fr);align-items:center;a{color:", ";@media (max-width:800px){text-align:end;}}.active{color:", ";}}}.footer-right{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1fr;grid-gap:5px;align-items:center;justify-items:end;p{margin:0;color:", ";font-family:", ";text-align:right;span{color:", ";}}@media (max-width:800px){font-size:0.8rem;}}"], function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.darkBlack;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.raleFont;
}, function (props) {
  return props.theme.blue;
});
/* harmony default export */ __webpack_exports__["default"] = (FooterStyles);

/***/ }),

/***/ "./components/styles/HomePageStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/HomePageStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var HomePageStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HomePageStyles",
  componentId: "s1loy7-0"
})(["background:", ";.main-content{width:100%;margin:0 auto;display:grid;grid-template-columns:1fr 3fr;grid-template-rows:1fr;align-items:center;justify-items:center;height:600px;border-bottom:2px solid ", ";@media (max-width:900px){grid-template-columns:1fr;}img.title-image{width:25%;}a{color:", ";}.side-pictures{background:linear-gradient(#ffffff67,#ffffff32),url('https://images.unsplash.com/photo-1503160814947-656030efef06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');background-size:cover;margin:0;width:100%;height:600px;border-right:2px solid ", ";img{height:100%;width:100%;}@media (max-width:900px){display:none;}}.title-box{text-align:center;background:linear-gradient(#ffffff67,#ffffff32),url('https://images.unsplash.com/photo-1541327883457-a5c8214cc9fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1614&q=80');background-size:cover;height:600px;img{margin-top:5%;}h2{text-align:center;font-family:", ";margin-top:25%;color:", ";text-shadow:1px 2px 2px #ffffff67,3px 3px 3px #ffffff45;}button{padding:12px;border:none;font-size:20px;font-family:", ";background:", ";letter-spacing:0.1rem;a{color:", ";}}}}.divider{p{color:", ";font-family:", ";font-size:24px;text-align:center;padding:10px;border-top:2px solid ", ";border-bottom:2px solid ", ";}}.about-layout{display:grid;max-width:100%;grid-template-columns:1fr 1fr 1fr;color:", ";img{max-width:60%;margin-left:20%;margin-top:10%;}h3{text-align:center;color:", ";font-family:", ";font-size:24px;letter-spacing:0.15rem;}p{font-family:", ";padding:20px;}}.active-link{color:", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.raleFont;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.rightFont;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.raleFont;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.rightFont;
}, function (props) {
  return props.theme.raleFont;
}, function (props) {
  return props.theme.white;
});
/* harmony default export */ __webpack_exports__["default"] = (HomePageStyles);

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NavStyles",
  componentId: "sc-17at5kn-0"
})([".navigation{display:flex;justify-content:space-between;background-color:", ";padding:10px;img{height:40px;width:auto;margin:10px;}border-bottom:3px solid ", ";}.desktop-nav-links{height:100%;display:grid;grid-template-rows:1fr;grid-template-columns:1fr 1fr 1fr 1fr;align-items:center;justify-items:center;grid-gap:20px;height:60px;@media (max-width:900px){display:none;}a{line-height:40px;color:", ";font-size:1.5rem;font-family:", ";border-bottom:transparent 1px solid;padding-bottom:1px;text-decoration:none;&:hover{border-bottom:", " 1px solid;}}.active{color:", ";}}div.main-logo img{font-family:", ";color:", ";height:40px;padding:0 0 0 20px;}"], function (props) {
  return props.theme.darkBlack;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.blue;
}, function (props) {
  return props.theme.raleFont;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.robFont;
}, function (props) {
  return props.theme.white;
});
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_ParticleParams_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/ParticleParams.json */ "./static/ParticleParams.json");
var _static_ParticleParams_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/ParticleParams.json */ "./static/ParticleParams.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _static_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/data */ "./static/data.js");
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.js");
/* harmony import */ var _components_IconLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IconLink */ "./components/IconLink.js");
/* harmony import */ var _components_styles_HomePageStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/HomePageStyles */ "./components/styles/HomePageStyles.js");
/* harmony import */ var _components_context_DarkContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/context/DarkContext */ "./components/context/DarkContext.js");
/* harmony import */ var _components_context_UserContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/context/UserContext */ "./components/context/UserContext.js");
var _jsxFileName = "/Users/theranbrigowatz/WebDev/projects/mulo/pages/index.js";

/* eslint-disable no-console */

/* eslint-disable react/no-unescaped-entities */













var Home = function Home() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context_DarkContext__WEBPACK_IMPORTED_MODULE_10__["DarkContext"]),
      darkMode = _useContext.darkMode;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context_UserContext__WEBPACK_IMPORTED_MODULE_11__["UserContext"]),
      user = _useContext2.user,
      userLoading = _useContext2.userLoading;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "MULO | Online Thrift Store")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_styles_HomePageStyles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "side-pictures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/Default Photoshop Size.png",
    alt: "Theran Brigowatz Logo",
    className: "title-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "They loved it. You'll love it too."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Shop Now ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "fas fa-arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Welcome to the new world of fashion. ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "See Our Latest Fashion Choices"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "about-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "about-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1551310357-b26c1af069c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "High-Quality"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Lorem ipsum dolor amet organic prism whatever tumblr. Kickstarter four dollar toast kitsch jianbing. Enamel pin tofu green juice chambray forage 3 wolf moon austin live-edge. PBR&B succulents waistcoat +1 letterpress gentrify. DIY pok pok heirloom echo park umami. Vegan forage four dollar toast venmo, meh hella bitters ennui cardigan godard kitsch before they sold out whatever.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "about-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1505734169265-a86113baa6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Fashion Forward"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Lorem ipsum dolor amet austin DIY vape before they sold out sartorial organic. Cronut af keffiyeh kinfolk lyft fixie sriracha irony. Four dollar toast farm-to-table mixtape raw denim whatever salvia. Cloud bread chambray jianbing, hella squid literally hot chicken fashion axe master cleanse photo booth small batch. Jianbing craft beer mumblecore cloud bread flexitarian kitsch. PBR&B single-origin coffee church-key put a bird on it, ethical brunch jean shorts.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "about-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Environmentally Sustainable"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Lorem ipsum dolor amet flannel vegan irony portland jianbing. Intelligentsia pop-up distillery ugh, street art woke leggings shabby chic readymade pabst paleo iPhone. Bitters franzen vinyl, you probably haven't heard of them narwhal la croix cornhole street art next level lo-fi prism palo santo blog adaptogen. Etsy pinterest flannel scenester celiac knausgaard, disrupt migas.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/ParticleParams.json":
/*!************************************!*\
  !*** ./static/ParticleParams.json ***!
  \************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = {"particles":{"number":{"value":170,"density":{"enable":true,"value_area":1000}},"color":{"value":"#dcdcdc"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#efefef","opacity":0.36076771369474264,"width":1},"move":{"enable":true,"speed":0.25,"direction":"none","random":true,"straight":false,"out_mode":false,"bounce":true,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true};

/***/ }),

/***/ "./static/data.js":
/*!************************!*\
  !*** ./static/data.js ***!
  \************************/
/*! exports provided: default, icons, skills, users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icons", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Grouper',
  technology: 'Next.js React, Graphql, Prisma',
  created: 'Winter 2018',
  description: 'Realtime Group Shopping App',
  slug: 'grouper',
  image: 'https://i.imgur.com/AdmJjnY.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551527103/Fish.png',
  extendedDescription: 'Group shopping and lists made easy. Check them off as you go and get real-time updates as you shop. Split up and let others get items. Mark them off as you find them. This was built to utilize Next.js with React on the frontend for quick SSR React Components and caching. Apollo Boost works to connect the backend data to the client side, as well has hold local state. All GraphQL Mutations and Queries are handled through Apollo. The API uses GraphQL with a GraphQL server to connect to a Prisma database that is built using PostgreSQL. The relational data structure allows for quick querying to the server. A testing suite was built using Jest and Enzyme to make sure that everything is up and running properly. Snapshot testing was integrated as well. The app is deployed using Heroku on both the front and back ends. This was a quick five day build meant to act as a coding challenge interview, so it is far from perfect yet.',
  gitLink: 'https://github.com/theranbrig/grouper',
  deployLink: 'https://grouper-frontend.herokuapp.com/',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_300/v1559996358/Grouper_New_Home.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_300/v1559996358/Grouper_List.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_300/v1559996358/Grouper_Add_Item.png'],
  icon: 'fas fa-fish',
  tech: ['devicon-react-original', 'graphql', 'devicon-javascript-plain', 'devicon-nodejs-plain', 'devicon-css3-plain', 'devicon-heroku-plain', 'devicon-postgresql-plain']
}, {
  title: 'Grown',
  technology: 'Next.js React, Graphql, Prisma',
  created: 'Fall 2018',
  description: 'Farmers Market Shopping App',
  slug: 'grown-farms',
  image: 'https://i.imgur.com/G6UWh3c.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Farm.png',
  extendedDescription: 'Grown is a full-stack JavaScript project built upon React and GraphQL. It is a place for farmers to sell their products online and for consumers to order products online for later pick up at farmer markets. It is built primarily with React and Apollo on the client side, with GraphQL Yoga amd Prisma connected on the backend.As of right now the farms are available as stores where users can order products. Markets and search are planned features for the next sprint and are coming later. Also I plan on updating the styling in order to fit in more with the feel of the app and product. It is a work in progress still. I welcome feedback and suggestions.',
  gitLink: 'https://github.com/theranbrig/grown',
  deployLink: 'https://grownfarms.herokuapp.com/',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967944/3_-_eBabmvL.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967943/2_-_kQF1X9z.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967943/1_-_BmMq37W.png'],
  icon: 'fas fa-leaf',
  tech: ['devicon-react-original', 'graphql', 'devicon-javascript-plain', 'devicon-nodejs-plain', 'devicon-css3-plain', 'devicon-heroku-plain', 'devicon-postgresql-plain']
}, {
  title: 'Wiki-What',
  technology: 'Express, Node, SQL',
  created: 'Summer 2018',
  description: 'RESTful Wiki Collaboration Site',
  slug: 'wiki-what',
  image: 'https://i.imgur.com/zQDt9KE.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Globe.png',
  extendedDescription: 'Full RESTful API site for wiki collaboration.  Users are able to upgrade to premium features through Stripe payments.  There is full authentication and crediential checking for premium feature users.  The entire app has been unit and integration tested with Jasmine.  There are full CRUD capabilities for both users and Wikis.  It uses a markdown editor with uniform styling.  I also worked to make sure that the Wiki styling is both clean, modern and stylish; something that is often missing from most Wiki sites.  Though it is primarily meant to be used as a full desktop site, it is mobile responsive.  This was primarily an back-end project to build a complete REST app.  All back-end components are modular and separated for easy scaling and feature addition.  It uses PostgreSQL as a database for wikis and users, with validation that is handled by Passport',
  gitLink: 'https://github.com/theranbrig/wiki-what',
  deployLink: 'https://wikiwhat-theranbrig.herokuapp.com/',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967917/MKnPtcn.jpg'],
  icon: 'fas fa-globe',
  tech: ['devicon-javascript-plain', 'devicon-express-original', 'devicon-nodejs-plain', 'devicon-css3-plain', 'devicon-heroku-plain', 'devicon-postgresql-plain', 'devicon-jasmine-plain']
}, {
  title: 'Vane',
  technology: 'React, Firebase, MaterialUI',
  created: 'Spring 2018',
  description: 'React Mobile Weather PWA',
  slug: 'vane',
  image: 'https://i.imgur.com/0cvRvQK.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Cloud.png',
  extendedDescription: 'This quick and simple mobile app was built in order to solidify my foundation for ReactJS in my developer boot camp. I built this as an extra project on my own to make sure that I had a good handle on the basic concepts of ReactJS.  This was first built by fetching data from the Yahoo Weather API and using Axios to handle the API requests. Axios ensured that I can handle my API requests with each search that is performed, without further complicating my app life cycle. Components were then rendered out using ReactJS and Material UI. Material UI was used to help with a responsive UX and UI, and helped to maintain styling. I also added styling that that uses a color palette based on the temperature from hot to cold. Screenshots of the color palette in the app can be found here. Finally I have added Firebase in to allow for user authentication via Google. Users may save cities for quick access when signed in.',
  gitLink: 'https://github.com/theranbrig/weather-app',
  deployLink: 'https://vane.netlify.com',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967962/3_-_ucAXrQ2.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967961/1_-_rGAttGs.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551967961/2_-_rSS6yu3.png'],
  icon: 'fas fa-cloud-sun-rain',
  tech: ['devicon-javascript-plain', 'devicon-react-original', 'devicon-css3-plain', 'devicon-html5-plain']
}, // {
//   title: 'NintenDB',
//   technology: 'React, Firebase, Node, Express',
//   created: 'Spring 2019',
//   description: 'IGDB.com API Project',
//   slug: 'nintendb',
//   image: 'https://i.imgur.com/0cvRvQK.png',
//   logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Cloud.png',
//   extendedDescription:
//     "This was built to utilize IGDB.com's APIcalyse and their API.  It is a simple express app on the backend that pulls in data from their API.  All views are done using React on the frontend and it is styled with NES.css for a bit of old school 8-bit styling.  Users may save games after going through random classic games.  User authentication and the database layer is built using Google Firebase for rapid development.",
//   gitLink: 'https://github.com/theranbrig/igdb-project',
//   screenShots: [
//     'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_74,w_689/v1559473764/Screen_Shot_2019-06-02_at_8.06.50_PM.png',
//     'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_662/v1559473764/Screen_Shot_2019-06-02_at_8.07.55_PM.png',
//     'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,w_741/v1559473764/Screen_Shot_2019-06-02_at_8.06.40_PM.png',
//   ],
//   icon: 'fas fa-gamepad',
//   tech: [
//     'devicon-javascript-plain',
//     'devicon-react-original',
//     'devicon-css3-plain',
//     'devicon-html5-plain',
//     'devicon-nodejs-plain',
//     'devicon-heroku-plain',
//   ],
// },
{
  title: 'Bloc Jams',
  technology: 'React, SemanticUI',
  created: 'Spring 2018',
  description: 'React Spotify-like Clone',
  slug: 'bloc-jams',
  image: 'https://i.imgur.com/F3bHADS.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526991/Headphones.png',
  extendedDescription: 'Bloc Jams is a my first React SPA that was built as part of my curriculum through Bloc. It is an SPA for albums and music that uses React Router to create a responsive page that works on mobile as well. I started out by building the basic routes with React Router. After that I built up the functionality of the library, album, and music player controls using React. The page was then finally styled through the use of Semantic UI - React. This was my first time working to build an SPA completely with React. It was a learning experience in managing state and props, while building a responsive webpage.',
  gitLink: 'https://github.com/theranbrig/bloc-jams',
  deployLink: 'https://bloc-jams-theran.netlify.com/',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551969057/1_-_gQ4Hrit.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551969413/2_-_tsYxipW.png', 'https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551969059/3_-_p9Pd8c9.png'],
  icon: 'fas fa-headphones-alt',
  tech: ['devicon-javascript-plain', 'devicon-react-original', 'devicon-css3-plain', 'devicon-html5-plain']
}, {
  title: 'Bloc Chat',
  technology: 'React, Firebase, MaterialUI',
  created: 'Spring 2018',
  description: 'Web Chat with Firebase and React',
  slug: 'bloc-chat',
  image: 'https://i.imgur.com/0CEeP9p.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526992/Chat.png',
  extendedDescription: 'Bloc Chat was built as my second project using React. This was part of my curriculum with Bloc.io and was a great experience in learning the concepts of how to build a React app. The app was first built by creating a list of chat rooms that dynamically updates when a user adds a new chat room. After that, displayed messages for each chat room were generated. In order to create messages as a registered user, Firebase was added for user authentication and to save messages for each user. All messages only display within the given chat room in which they were created. Messages and chat rooms may be deleted and edited when necessary. The page was styled using Material UI. It is mobile responsive, though it is best used on a desktop platform. This was my first time using a database with React and it was a good experience in further learning React and showing the power that it has when used with a dynamic database like Firebase.',
  gitLink: 'https://github.com/theranbrig/bloc-chat',
  deployLink: 'https://bloc-chat-theran.netlify.com',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_520/v1551968890/xTD2VWq.png'],
  icon: 'far fa-comment-alt',
  tech: ['devicon-javascript-plain', 'devicon-react-original', 'devicon-css3-plain', 'devicon-html5-plain']
}, {
  title: 'News Bites',
  technology: 'Vanilla Javascript, SemanticUI',
  created: 'April 2018',
  description: 'News Site using Vanilla JavaScript',
  slug: 'news-bites',
  image: 'https://i.imgur.com/D54iVFi.png',
  logo: 'https://res.cloudinary.com/dq7uyauun/image/upload/v1551526991/Forks.png',
  extendedDescription: 'The purpose of this assignment was to use an API for the first time and display it on a page. I used the fetch method to make AJAX requests and built the site using HTML, CSS, and Vanilla JavaScript. I used News API to get headlines from major news categories and the page can be updated and viewed easily. It was my first time using an API in conjunction with HTML. I plan on refactoring some of the code in the future, adding a search function, and making a few design tweeks along the way.',
  gitLink: 'https://github.com/theranbrig/api_news_bites',
  deployLink: 'https://news-bites.netlify.com',
  screenShots: ['https://res.cloudinary.com/dq7uyauun/image/upload/c_scale,q_80,w_600/v1551967917/oBIjR9C.png'],
  icon: 'fas fa-utensils',
  tech: ['devicon-javascript-plain', 'devicon-css3-plain', 'devicon-html5-plain']
}]);
var icons = [{
  skill: 'HTML',
  icon: 'devicon-html5-plain'
}, {
  skill: 'CSS',
  icon: 'devicon-css3-plain'
}, {
  skill: 'JavaScript',
  icon: 'devicon-javascript-plain'
}, {
  skill: 'React',
  icon: 'devicon-react-original'
}, {
  skill: 'Node.js',
  icon: 'devicon-nodejs-plain'
}, {
  skill: 'Git',
  icon: 'devicon-github-plain'
}, {
  skill: 'PostgreSQL',
  icon: 'devicon-postgresql-plain'
}];
var skills = ['Express', 'MVC Architecture', 'Jasmine', 'Jest', 'MongoDB', 'Sass', 'Styled Components', 'Semantic UI', 'Bootstrap', 'Material UI', 'Heroku', 'Photoshop'];
var users = [{
  id: '1',
  username: 'trendyman',
  password: '123456789'
}, {
  id: '2',
  username: 'hiplady',
  password: '123456789'
}, {
  id: '3',
  username: 'coolkat',
  password: '123456789'
}];

/***/ }),

/***/ "./static/graphql.svg":
/*!****************************!*\
  !*** ./static/graphql.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJnYWluc2Jvcm8iIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5HcmFwaFFMIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xNC4wNTEgMi43NTFsNC45MzUgMi44NWMuODE2LS44NTkgMi4xNzMtLjg5MyAzLjAzMi0uMDc3LjE0OC4xNC4yNzQuMzAxLjM3Ny40NzcuNTg5IDEuMDI4LjIzMiAyLjMzOS0uNzk2IDIuOTI4LS4xNzQuMS0uMzYxLjE3NS0uNTU4LjIyM3Y1LjY5OWMxLjE0Ni4yNzMgMS44NTQgMS40MjMgMS41OCAyLjU2OS0uMDQ4LjIwNC0uMTI3LjQtLjIzMi41ODEtLjU5MiAxLjAyMy0xLjkwMSAxLjM3NC0yLjkyNy43ODItLjE5Ni0uMTEzLS4zNzUtLjI1OS0uNTI2LS40MjlsLTQuOTA1IDIuODMyYy4zNzIgMS4xMjQtLjIzOCAyLjMzNS0xLjM2MSAyLjcwNi0uMjE3LjA3MS0uNDQyLjEwOC0uNjcuMTA4LTEuMTgxLjAwMS0yLjEzOS0uOTU1LTIuMTQtMi4xMzYgMC0uMjA1LjAyOS0uNDEuMDg4LS42MDlsLTQuOTM2LTIuODQ3Yy0uODE2Ljg1NC0yLjE3MS44ODctMy4wMjYuMDctLjg1NC0uODE2LS44ODYtMi4xNzEtLjA3LTMuMDI2LjI4My0uMjk3LjY0Ni0uNTA2IDEuMDQ0LS42MDNsLjAwMS01LjY5OWMtMS4xNS0uMjc2LTEuODU4LTEuNDMzLTEuNTgxLTIuNTg0LjA0Ny0uMTk4LjEyMy0uMzg5LjIyNC0uNTY2LjU5Mi0xLjAyNCAxLjkwMi0xLjM3NCAyLjkyNy0uNzgyLjE3Ny4xMDEuMzM5LjIyOC40OC4zNzdsNC45MzgtMi44NUM5LjYxMyAxLjYxMiAxMC4yNi40MjMgMTEuMzkuMDg4IDExLjU4Ny4wMjkgMTEuNzk0IDAgMTIgMGMxLjE4MS0uMDAxIDIuMTM5Ljk1NCAyLjE0IDIuMTM0LjAwMS4yMDktLjAzLjQxOC0uMDg5LjYxN3ptLS41MTUuODc3Yy0uMDE5LjAyMS0uMDM3LjAzOS0uMDU4LjA1OGw2LjQ2MSAxMS4xOWMuMDI2LS4wMDkuMDU2LS4wMTYuMDgyLS4wMjNWOS4xNDZjLTEuMTQ1LS4yODMtMS44NDItMS40NDItMS41NTgtMi41ODguMDA2LS4wMjQuMDEyLS4wNDkuMDE5LS4wNzJsLTQuOTQ2LTIuODU4em0tMy4wMTUuMDU5bC0uMDYtLjA2LTQuOTQ2IDIuODUyYy4zMjcgMS4xMzUtLjMyNyAyLjMxOC0xLjQ2MSAyLjY0NS0uMDI2LjAwOC0uMDUxLjAxNC0uMDc2LjAyMXY1LjcwOGwuMDg0LjAyMyA2LjQ2MS0xMS4xOS0uMDAyLjAwMXptMi4wNzYuNTA3Yy0uMzkuMTEyLS44MDMuMTEyLTEuMTkyIDBsLTYuNDYgMTEuMTg5Yy4yOTQuMjgzLjUwMi42NDUuNiAxLjA0MWgxMi45MTFjLjA5Ny0uMzk4LjMwNy0uNzYxLjYwMy0xLjA0NEwxMi41OTcgNC4xOTR6bS45ODYgMTYuMjI3bDQuOTEzLTIuODM4Yy0uMDE1LS4wNDctLjAyNy0uMDk0LS4wMzgtLjE0Mkg1LjU0MmwtLjAyMS4wODMgNC45MzkgMi44NTJjLjM4OC0uNDA0LjkzNC0uNjUzIDEuNTQtLjY1My42MjcgMCAxLjE5LjI2OSAxLjU4My42OTh6Ii8+PC9zdmc+Cg=="

/***/ }),

/***/ "./static/graphqldark.svg":
/*!********************************!*\
  !*** ./static/graphqldark.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjMyMzIzIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R3JhcGhRTCBpY29uPC90aXRsZT48cGF0aCBkPSJNMTQuMDUxIDIuNzUxbDQuOTM1IDIuODVjLjgxNi0uODU5IDIuMTczLS44OTMgMy4wMzItLjA3Ny4xNDguMTQuMjc0LjMwMS4zNzcuNDc3LjU4OSAxLjAyOC4yMzIgMi4zMzktLjc5NiAyLjkyOC0uMTc0LjEtLjM2MS4xNzUtLjU1OC4yMjN2NS42OTljMS4xNDYuMjczIDEuODU0IDEuNDIzIDEuNTggMi41NjktLjA0OC4yMDQtLjEyNy40LS4yMzIuNTgxLS41OTIgMS4wMjMtMS45MDEgMS4zNzQtMi45MjcuNzgyLS4xOTYtLjExMy0uMzc1LS4yNTktLjUyNi0uNDI5bC00LjkwNSAyLjgzMmMuMzcyIDEuMTI0LS4yMzggMi4zMzUtMS4zNjEgMi43MDYtLjIxNy4wNzEtLjQ0Mi4xMDgtLjY3LjEwOC0xLjE4MS4wMDEtMi4xMzktLjk1NS0yLjE0LTIuMTM2IDAtLjIwNS4wMjktLjQxLjA4OC0uNjA5bC00LjkzNi0yLjg0N2MtLjgxNi44NTQtMi4xNzEuODg3LTMuMDI2LjA3LS44NTQtLjgxNi0uODg2LTIuMTcxLS4wNy0zLjAyNi4yODMtLjI5Ny42NDYtLjUwNiAxLjA0NC0uNjAzbC4wMDEtNS42OTljLTEuMTUtLjI3Ni0xLjg1OC0xLjQzMy0xLjU4MS0yLjU4NC4wNDctLjE5OC4xMjMtLjM4OS4yMjQtLjU2Ni41OTItMS4wMjQgMS45MDItMS4zNzQgMi45MjctLjc4Mi4xNzcuMTAxLjMzOS4yMjguNDguMzc3bDQuOTM4LTIuODVDOS42MTMgMS42MTIgMTAuMjYuNDIzIDExLjM5LjA4OCAxMS41ODcuMDI5IDExLjc5NCAwIDEyIDBjMS4xODEtLjAwMSAyLjEzOS45NTQgMi4xNCAyLjEzNC4wMDEuMjA5LS4wMy40MTgtLjA4OS42MTd6bS0uNTE1Ljg3N2MtLjAxOS4wMjEtLjAzNy4wMzktLjA1OC4wNThsNi40NjEgMTEuMTljLjAyNi0uMDA5LjA1Ni0uMDE2LjA4Mi0uMDIzVjkuMTQ2Yy0xLjE0NS0uMjgzLTEuODQyLTEuNDQyLTEuNTU4LTIuNTg4LjAwNi0uMDI0LjAxMi0uMDQ5LjAxOS0uMDcybC00Ljk0Ni0yLjg1OHptLTMuMDE1LjA1OWwtLjA2LS4wNi00Ljk0NiAyLjg1MmMuMzI3IDEuMTM1LS4zMjcgMi4zMTgtMS40NjEgMi42NDUtLjAyNi4wMDgtLjA1MS4wMTQtLjA3Ni4wMjF2NS43MDhsLjA4NC4wMjMgNi40NjEtMTEuMTktLjAwMi4wMDF6bTIuMDc2LjUwN2MtLjM5LjExMi0uODAzLjExMi0xLjE5MiAwbC02LjQ2IDExLjE4OWMuMjk0LjI4My41MDIuNjQ1LjYgMS4wNDFoMTIuOTExYy4wOTctLjM5OC4zMDctLjc2MS42MDMtMS4wNDRMMTIuNTk3IDQuMTk0em0uOTg2IDE2LjIyN2w0LjkxMy0yLjgzOGMtLjAxNS0uMDQ3LS4wMjctLjA5NC0uMDM4LS4xNDJINS41NDJsLS4wMjEuMDgzIDQuOTM5IDIuODUyYy4zODgtLjQwNC45MzQtLjY1MyAxLjU0LS42NTMuNjI3IDAgMS4xOS4yNjkgMS41ODMuNjk4eiIvPjwvc3ZnPgo="

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/theranbrigowatz/WebDev/projects/mulo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animated-burgers":
/*!*****************************************!*\
  !*** external "react-animated-burgers" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-burgers");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-offcanvas":
/*!**********************************!*\
  !*** external "react-offcanvas" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-offcanvas");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-toggle":
/*!*******************************!*\
  !*** external "react-toggle" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toggle");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map