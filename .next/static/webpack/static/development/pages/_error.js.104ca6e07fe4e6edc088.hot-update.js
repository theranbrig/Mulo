webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/http-status/lib/index.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index], index);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

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

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, css, keyframes, createGlobalStyle, isStyledComponent, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, ServerStyleSheet, StyleSheetManager, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && process.env.SC_ATTR || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper (see https://www.styled-components.com/docs/api#css), which ensures the styles are injected correctly.\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = document.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = document.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var el = document.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.1.3");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(document.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.1.3" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.1.3", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(id) {
  return document.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.1.3" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCss = function objToCss(obj, prevKey) {
  var css = Object.keys(obj).filter(function (key) {
    return !isFalsish(obj[key]);
  }).map(function (key) {
    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
    return hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';';
  }).join(' ');
  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (executionContext) {
      var shouldThrow = false;

      try {
        // eslint-disable-next-line new-cap
        if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(new chunk(executionContext))) {
          shouldThrow = true;
        }
      } catch (e) {
        /* */
      }

      if (shouldThrow) {
        throw new StyledComponentsError(13, getComponentName(chunk));
      }

      return flatten(chunk(executionContext), executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCss(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

var isHMREnabled =  true && module.hot;

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = !isHMREnabled && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
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

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(this.props.children)
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        /* prepend style html to chunk */
        this.push(html + chunk);
        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });
    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var didWarnAboutClassNameUsage = new Set();

var classNameUsageCheckInjector = (function (target) {
  var elementClassName = '';

  var targetCDM = target.componentDidMount;

  // eslint-disable-next-line no-param-reassign
  target.componentDidMount = function componentDidMount() {
    if (typeof targetCDM === 'function') {
      targetCDM.call(this);
    }

    var forwardTarget = this.props.forwardedComponent.target;

    if (target.props && target.props.suppressClassNameWarning || target.attrs && target.attrs.suppressClassNameWarning || didWarnAboutClassNameUsage.has(forwardTarget)) {
      return;
    }

    didWarnAboutClassNameUsage.add(forwardTarget);

    var classNames = elementClassName.replace(/ +/g, ' ').trim().split(' ');
    // eslint-disable-next-line react/no-find-dom-node
    var node = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this);
    var selector = classNames.map(function (s) {
      return '.' + s;
    }).join('');

    if (node && node.nodeType === 1 && !classNames.every(function (className) {
      return node.classList && node.classList.contains(className);
    }) && !node.querySelector(selector)) {
      console.warn('It looks like you\'ve wrapped styled() around your React component (' + getComponentName(forwardTarget) + '), but the className prop is not being passed down to a child. No styles will be rendered unless className is composed within your React component.');
    }
  };

  var prevRenderInner = target.renderInner;

  // eslint-disable-next-line no-param-reassign
  target.renderInner = function renderInner() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var element = prevRenderInner.apply(this, args);

    elementClassName = element.props.className;

    return element;
  };
});

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".')
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }

    if ( true && IS_BROWSER) {
      classNameUsageCheckInjector(_this);
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else if (theme !== undefined) {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps), this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(this.props.theme || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.attrs, this.props);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ( true && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') continue;else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_8__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, this.props.className, styledComponentId, this.attrs.className, generatedClassName).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ( true && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  });

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent() {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ( true && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ( true && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ( true && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

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

/***/ 1:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Ftheranbrigowatz%2FWebDev%2Fprojects%2Fmulo%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.104ca6e07fe4e6edc088.hot-update.js.map