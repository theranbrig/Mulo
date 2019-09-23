webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
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
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Click more on a project below to see the process, read the code, and use the deploy."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "project-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _static_data__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (project) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      project: project,
      key: project.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.339406baf6e2df2c2402.hot-update.js.map