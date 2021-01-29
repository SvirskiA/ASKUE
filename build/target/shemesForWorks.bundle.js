/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/layout/scripts/scheme_works.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/style_scheme_order.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/style_scheme_order.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/GOST 2.304-81 type A.ttf */ "./src/layout/css/fonts/GOST 2.304-81 type A.ttf");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/1-1.jpg */ "./src/layout/img/1-1.jpg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/1-2.jpg */ "./src/layout/img/1-2.jpg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/2-1.jpg */ "./src/layout/img/2-1.jpg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/2-2.jpg */ "./src/layout/img/2-2.jpg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/3-2.jpg */ "./src/layout/img/3-2.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'GOST 2.304-81 type A'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n/*\r\n@font-face {\r\n    font-family: 'GOST 2.304-81 type A'; \r\n    src: url('fonts/GOST 2.304-81 type A.ttf'); \r\n}\r\n*/\r\n@media print {\r\n    /* здесь будут стили для печати */\r\n    header, footer {\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.a3_div {\r\n\t\tpage-break-after: always !important;\r\n\t\tbreak-after: always !important;\r\n\t\tfloat: none !important; \r\n\t\t/*border: none !important; */\r\n\t} \r\n\r\n\t.сipher_table td{\r\n\t\tfont-size: 12pt;\r\n\t}\r\n\t\r\n\t.сipher_table tr:nth-child(1) td:nth-child(7){\r\n\t\tfont-size: 24pt;\r\n\t}\r\n\t\r\n\t.a3_div_frame {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tcolor-adjust: exact;\r\n\t}\r\n\t\r\n\t@page {\r\n\t\tsize: auto;  \r\n\t\tmargin: 0;  \r\n\t}\r\n\t/* h6 {\r\n\t\t-webkit-display: none;\r\n\t}\t */\r\n}\r\n\r\n* {\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: 'GOST 2.304-81 type A', sans-serif;\r\n\tcolor: black; \r\n}\r\n\r\nh6 {\r\n\theight: 1px;\r\n}\r\n\r\n.container {\r\n\twidth: 421mm;\r\n\tmargin: auto;\r\n\t/* background: url('/img/0001.jpg'); */\r\n}\r\n\r\nheader,\r\nfooter {\r\n\tpadding: 15px 0;\r\n\tbackground: #48D1CC;\r\n\tcolor:  white;\r\n}\r\n/* КНОПКИ */\r\n.btn {\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tbackground: #008B8B;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\tmargin: 5px 0;\r\n\tfont-size: 21px;\r\n}\r\n.btn:last-child{\r\n\tmargin: 20px 0;\r\n}\r\n.btn:hover, .input-btn:hover {\r\n\tbackground:\t#008C33;\r\n\tborder: #0b6603 solid 2px;\r\n}\r\n\r\n\r\n/*ТАБЛИЦЫ, общие свойства*/\r\ntable {\r\n\tborder-collapse: collapse;\r\n}\r\ntd, th {\r\n\tborder: 0.25mm solid #000;\r\n}\r\n/* tbody tr:nth-child(2n-1) {\r\n\tbackground: #e3f8ea;\r\n}\r\ntr:nth-child(2n), thead {\r\n\tbackground: #fff;\r\n} */\r\n\r\n/*КОНТЕЙНЕРЫ*/\r\n.scheme_container {\r\n\tbackground: #AFEEEE;\r\n}\r\n/* .a3_div:nth-child(4n-2){\r\n\tbackground: #d0ecec;\r\n}\r\n.a3_div:nth-child(4n){\r\n\tbackground: #c1e6c1;\r\n} */\r\n\r\n.a3_div {\r\n\theight: 296.5mm;\r\n\tdisplay: block;\r\n\tborder: 1px solid black;\r\n\tposition: relative;\r\n\tbackground: #fff;\r\n}\r\n.a3_div_frame {\r\n\tfont-size: 12pt;\r\n\theight: 287mm;\r\n\twidth: 395mm;\r\n\tleft: 20mm;\r\n\tbottom: 5mm;\r\n\tborder: 0.6mm solid black;\r\n\tposition: absolute;\t\r\n\tdisplay: block; /*del*/\r\n}\r\n\r\n/*Примечание*/\r\n.note{\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 58mm;\r\n    width: 180mm;\r\n}\r\n\r\n/*РАМКА-ШИФР*/\r\n.сipher_table {\r\n  /*  width: 100%;*/\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\ttext-align: center;\r\n}\r\n.сipher_table td{\r\n    line-height: 0.95;\r\n    font-size: 12pt;\r\n\tbackground: #fff;\r\n\tborder-right: #000 solid 0.6mm;\r\n\tborder-left: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td:nth-child(4),\r\n.сipher_table tr:nth-child(5) td:nth-child(2){\r\n\tletter-spacing: -0.5px;\r\n\t/* font-size: 14px;\t */\r\n}\r\n.сipher_table td:nth-child(n+7){\r\n\tborder: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:first-child td,\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+5){\r\n\tborder-top: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(6) td:nth-child(6){\r\n\tborder-bottom: #000 solid 0.6mm;\t\r\n}\r\n/*.сipher_table td:first-child {\r\n\tborder-left: none;\r\n}*/\r\n.сipher_table td:last-child {\r\n\tborder-right: none;\r\n}\r\n.сipher_table tr:last-child td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+4){\r\n\tborder-bottom: none;\t\r\n}\r\n.сipher_table tr:nth-child(n+6) td:nth-child(1), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(2), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(3) {\r\n\ttext-align: left;\r\n\tpadding-left: 2px;\r\n}\r\n.сipher_table tr:first-child td:nth-child(1), \r\n.сipher_table tr:first-child td:nth-child(2), \r\n.сipher_table tr:first-child td:nth-child(3), \r\n.сipher_table tr:first-child td:nth-child(4),\r\n.сipher_table tr:first-child td:nth-child(6) {\r\n\twidth: 10mm;\r\n}\r\n.сipher_table tr:first-child td:nth-child(5) {\r\n\twidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(9) td:nth-child(5),\r\n.сipher_table tr:nth-child(6) td:nth-child(5) {\r\n\twidth: 70mm;\r\n\tpadding: 0 3px;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(6),\r\n.сipher_table tr:nth-child(6) td:nth-child(7) {\r\n\twidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(1) td:nth-child(7){\r\n\tfont-size: 24pt;\r\n}\r\n.сipher_table tr td:first-child{\r\n\theight: 5mm;\r\n}\r\n.p_besp{\r\n\tdisplay: inline-block;\r\n\t/*margin-bottom: 10px;*/\r\n}\r\n.logo_besp{\r\n\tdisplay: inline-block;\r\n\tmargin: 0px 0 -12px 7px;\t\r\n}\r\n\r\n\r\n/* .breaker_div_radio .radio_p, */\r\n.breaker_div .input-p{\r\n\tpadding: 8px 0 2px 0;\t\r\n}\r\n.breaker_div_radio label{\r\n\tpadding: 3px 0 0 10px;\r\n}\r\n/* .breaker_div label:last-child {\r\n    margin-bottom: 8px;\r\n} */\r\n.breaker_div input:last-child{\r\n\tmargin-bottom: 12px;\r\n}\r\n/* .сipher_table tr:last-child td{\r\n\tborder-bottom: none;\r\n} */\r\n\r\n/*формат (А3)*/\r\n.format_div{\r\n\tbottom: 1px;\r\n    right: 92px;\r\n    position: absolute;\r\n}\r\n\r\n/*БОКОВАЯ ЧАСТЬ РАМКИ*/\r\n .aside_frame {\r\n\t/*transform: rotate(-90.0deg); */\r\n\tposition: absolute;\r\n\tbottom: -0.5mm;\r\n\tleft: -13mm;\r\n}\r\n .aside_frame span{\r\n    transform: rotate(-90.0deg);\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n\t-webkit-writing-mode: vertical-rl;\r\n\twriting-mode: vertical-rl;\r\n }\r\n.aside_frame td{\r\n\ttext-align: center;\r\n\tborder: 0.6mm solid black;\r\n\tfont-size: 12pt;\r\n\ttransform: rotate(-90.0deg);\r\n/*\twhite-space: nowrap;\r\n\tvertical-align: middle;*/\r\n}\r\n.aside_frame tr:nth-child(2n+1) td{\r\n\theight: 25.3mm;\r\n}\r\n.aside_frame tr:nth-child(2) td{\r\n\theight: 35.6mm;\r\n}\r\n.aside_frame td:first-child{\r\n\twidth: 5mm;\r\n}\r\n.aside_frame td:last-child{\r\n\twidth: 7mm;\r\n\tborder-right: none;\r\n} \r\n\r\n\r\n/*картинки схем*/\r\n.sem1_1,\r\n.sem1_2,\r\n.sem2_1,\r\n.sem2_2,\r\n.sem3_2 {\r\n\tbackground-size: 100%;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n.sem1_1 {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.sem1_2 {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n.sem2_1 {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n.sem2_2 {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n.sem3_2 {\r\n\tbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n\r\n.signature{\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: -7px;\r\n\tposition: absolute;\r\n  }\r\n  .signature_boss {\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: 15px;\r\n\tposition: absolute;\r\n  }\r\n  .signature_boss2 {\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: 33px;\r\n\tposition: absolute;\r\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/layout/css/fonts/GOST 2.304-81 type A.ttf":
/*!*******************************************************!*\
  !*** ./src/layout/css/fonts/GOST 2.304-81 type A.ttf ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4faeafd4973f88920074e46e555b12fc.ttf");

/***/ }),

/***/ "./src/layout/css/style_scheme_order.css":
/*!***********************************************!*\
  !*** ./src/layout/css/style_scheme_order.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style_scheme_order.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/style_scheme_order.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/layout/img/1-1.jpg":
/*!********************************!*\
  !*** ./src/layout/img/1-1.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6e7665a1d9f668ce90fb0425fed6591.jpg");

/***/ }),

/***/ "./src/layout/img/1-2.jpg":
/*!********************************!*\
  !*** ./src/layout/img/1-2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44fb34fd593f2709bc36de6d42d380a1.jpg");

/***/ }),

/***/ "./src/layout/img/2-1.jpg":
/*!********************************!*\
  !*** ./src/layout/img/2-1.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f0497fd846d7deed0d3538a7b1c18e82.jpg");

/***/ }),

/***/ "./src/layout/img/2-2.jpg":
/*!********************************!*\
  !*** ./src/layout/img/2-2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7f10ba4dbcd5f25134f4696194f8a68f.jpg");

/***/ }),

/***/ "./src/layout/img/3-2.jpg":
/*!********************************!*\
  !*** ./src/layout/img/3-2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1dcadf2ef2aaa4c987d82d6f1524a42.jpg");

/***/ }),

/***/ "./src/layout/scripts/cipher/add-aside-table.js":
/*!******************************************************!*\
  !*** ./src/layout/scripts/cipher/add-aside-table.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addAsideTable() {
  var aside_frame = document.createElement("TABLE");
  aside_frame.classList.add('aside_frame');
  var body = document.createElement("TBODY");
  aside_frame.appendChild(body);
  var row1 = document.createElement("TR");
  var row2 = document.createElement("TR");
  var row3 = document.createElement("TR");
  body.append(row1, row2, row3);
  var td1_1 = document.createElement("TD");
  var span_td1_1 = document.createElement("SPAN");
  var td1_2 = document.createElement("TD");
  var td2_1 = document.createElement("TD");
  var span_td2_1 = document.createElement("SPAN");
  var td2_2 = document.createElement("TD");
  var td3_1 = document.createElement("TD");
  var span_td3_1 = document.createElement("SPAN");
  var td3_2 = document.createElement("TD"); // места ячеек

  row1.append(td1_1, td1_2);
  row2.append(td2_1, td2_2);
  row3.append(td3_1, td3_2); // Наполняем спаны

  td1_1.append(span_td1_1);
  td2_1.append(span_td2_1);
  td3_1.append(span_td3_1); // Наполняем ячейки

  span_td1_1.innerHTML = 'Инв. N подл.';
  td1_2.innerHTML = '';
  span_td2_1.innerHTML = 'Подпись и дата';
  td2_2.innerHTML = '';
  span_td3_1.innerHTML = 'Взамен инв. N';
  td3_2.innerHTML = '';
  return aside_frame;
}

/* harmony default export */ __webpack_exports__["default"] = (addAsideTable);

/***/ }),

/***/ "./src/layout/scripts/cipher/add-cipher-table.js":
/*!*******************************************************!*\
  !*** ./src/layout/scripts/cipher/add-cipher-table.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_page_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-page-number */ "./src/layout/scripts/cipher/add-page-number.js");


function addCipherTable(project, subsection, typeOfPage, sem, index, mainObj, shemePages) {
  console.log(mainObj);
  var сipherTable = document.createElement("TABLE");
  сipherTable.classList.add('сipher_table');
  var tbody = document.createElement("TBODY");
  сipherTable.append(tbody); // строки

  var row_1 = document.createElement("TR");
  var row_2 = document.createElement("TR");
  var row_3 = document.createElement("TR");
  var row_4 = document.createElement("TR");
  var row_5 = document.createElement("TR");
  var row_6 = document.createElement("TR");
  var row_7 = document.createElement("TR");
  var row_8 = document.createElement("TR");
  var row_9 = document.createElement("TR");
  var row_10 = document.createElement("TR");
  var row_11 = document.createElement("TR"); // место где будут строки

  tbody.append(row_1, row_2, row_3, row_4, row_5, row_6, row_7, row_8, row_9, row_10, row_11); // const row1 = tbody[0];

  /*
  for (let i = 0; i < 11; i += 1) {
  	const row = document.createElement("TR");
  	tbody.append(row);
  for (let i = 0; i < 7; i += 1) {
  	const row = tbody.childNodes[0];
  	console.log(tbody.childNodes)
  	const td = document.createElement("TD");
  	row.append(td);
  }
  */
  // console.log(row1)
  // ячейки

  var td1_1 = document.createElement("TD");
  var td1_2 = document.createElement("TD");
  var td1_3 = document.createElement("TD");
  var td1_4 = document.createElement("TD");
  var td1_5 = document.createElement("TD");
  var td1_6 = document.createElement("TD");
  var td1_7 = document.createElement("TD");
  td1_7.setAttribute('colspan', '4');
  td1_7.setAttribute('rowspan', '2');
  var td2_1 = document.createElement("TD");
  var td2_2 = document.createElement("TD");
  var td2_3 = document.createElement("TD");
  var td2_4 = document.createElement("TD");
  var td2_5 = document.createElement("TD");
  var td2_6 = document.createElement("TD");
  var td3_1 = document.createElement("TD");
  var td3_2 = document.createElement("TD");
  var td3_3 = document.createElement("TD");
  var td3_4 = document.createElement("TD");
  var td3_5 = document.createElement("TD");
  var td3_6 = document.createElement("TD");
  var td3_7 = document.createElement("TD");
  td3_7.setAttribute('colspan', '4');
  td3_7.setAttribute('rowspan', '3');
  var td4_1 = document.createElement("TD");
  var td4_2 = document.createElement("TD");
  var td4_3 = document.createElement("TD");
  var td4_4 = document.createElement("TD");
  var td4_5 = document.createElement("TD");
  var td4_6 = document.createElement("TD");
  var td5_1 = document.createElement("TD");
  var td5_2 = document.createElement("TD");
  var td5_3 = document.createElement("TD");
  var td5_4 = document.createElement("TD");
  var td5_5 = document.createElement("TD");
  var td5_6 = document.createElement("TD");
  var td6_1 = document.createElement("TD");
  td6_1.setAttribute('colspan', '2');
  var td6_2 = document.createElement("TD");
  td6_2.setAttribute('colspan', '2');
  var td6_3 = document.createElement("TD");
  var td6_4 = document.createElement("TD");
  var td6_5 = document.createElement("TD");
  td6_5.setAttribute('rowspan', '3');
  var td6_6 = document.createElement("TD");
  var td6_7 = document.createElement("TD");
  var td6_8 = document.createElement("TD");
  var td7_1 = document.createElement("TD");
  td7_1.setAttribute('colspan', '2');
  var td7_2 = document.createElement("TD");
  td7_2.setAttribute('colspan', '2');
  var td7_3 = document.createElement("TD");
  var td7_4 = document.createElement("TD");
  var td7_5 = document.createElement("TD");
  td7_5.setAttribute('rowspan', '2');
  var td7_6 = document.createElement("TD");
  td7_6.setAttribute('rowspan', '2');
  var td7_7 = document.createElement("TD");
  td7_7.setAttribute('rowspan', '2');
  var td8_1 = document.createElement("TD");
  td8_1.setAttribute('colspan', '2');
  var td8_2 = document.createElement("TD");
  td8_2.setAttribute('colspan', '2');
  var td8_3 = document.createElement("TD");
  var td8_4 = document.createElement("TD");
  var td9_1 = document.createElement("TD");
  td9_1.setAttribute('colspan', '2');
  var td9_2 = document.createElement("TD");
  td9_2.setAttribute('colspan', '2');
  var td9_3 = document.createElement("TD");
  var td9_4 = document.createElement("TD");
  var td9_5 = document.createElement("TD");
  td9_5.setAttribute('rowspan', '3');
  var td9_6 = document.createElement("TD");
  td9_6.setAttribute('colspan', '3');
  td9_6.setAttribute('rowspan', '3');
  var td10_1 = document.createElement("TD");
  td10_1.setAttribute('colspan', '2');
  var td10_2 = document.createElement("TD");
  td10_2.setAttribute('colspan', '2');
  var td10_3 = document.createElement("TD");
  var td10_4 = document.createElement("TD");
  var td11_1 = document.createElement("TD");
  td11_1.setAttribute('colspan', '2');
  var td11_2 = document.createElement("TD");
  td11_2.setAttribute('colspan', '2');
  var td11_3 = document.createElement("TD");
  var td11_4 = document.createElement("TD"); // места ячеек

  row_1.append(td1_1, td1_2, td1_3, td1_4, td1_5, td1_6, td1_7);
  row_2.append(td2_1, td2_2, td2_3, td2_4, td2_5, td2_6);
  row_3.append(td3_1, td3_2, td3_3, td3_4, td3_5, td3_6, td3_7);
  row_4.append(td4_1, td4_2, td4_3, td4_4, td4_5, td4_6);
  row_5.append(td5_1, td5_2, td5_3, td5_4, td5_5, td5_6);
  row_6.append(td6_1, td6_2, td6_3, td6_4, td6_5, td6_6, td6_7, td6_8);
  row_7.append(td7_1, td7_2, td7_3, td7_4, td7_5, td7_6, td7_7);
  row_8.append(td8_1, td8_2, td8_3, td8_4);
  row_9.append(td9_1, td9_2, td9_3, td9_4, td9_5, td9_6);
  row_10.append(td10_1, td10_2, td10_3, td10_4);
  row_11.append(td11_1, td11_2, td11_3, td11_4); // Наполняем ячейки

  td1_7.innerHTML = "".concat(project.cipher, "-").concat(subsection, "-70-\u0410\u0423\u042D"); //1.7

  td3_7.innerHTML = project.nameOfProject; //3.7

  td5_1.innerHTML = 'Изм.'; //5.1

  td5_2.innerHTML = 'Кол.Уч.'; //5.2

  td5_3.innerHTML = 'Лист'; //5.3

  td5_4.innerHTML = '№док.'; //5.4

  td5_5.innerHTML = 'Подпись'; //5.5

  td5_6.innerHTML = 'Дата'; //5.6

  td6_1.innerHTML = 'Утв.'; //6.1

  td6_2.innerHTML = project.nameOfBoss.split(' ')[0]; //6.2

  td6_3.innerHTML = ''; //6.3

  var d = new Date(); // const day = d.getDate();

  var month = d.getMonth() + 1;
  var year = d.getFullYear().toString();
  var today;

  if (month < 10) {
    today = "0".concat(month, ".").concat(year.split('')[2]).concat(year.split('')[3]);
  } else {
    today = "".concat(month, ".").concat(year.split('')[2]).concat(year.split('')[3]);
  }

  td6_4.innerHTML = today;
  td9_4.innerHTML = today;
  td10_4.innerHTML = today;
  td11_4.innerHTML = today;

  if (typeOfPage === 'order' || typeOfPage === 'orderSheme') {
    td6_5.innerHTML = 'Задание заводу на изготовление шкафов АСКУЭ'; //6.5
  } else if (typeOfPage === 'works' || typeOfPage === 'worksSheme') {
    td6_5.innerHTML = 'Электрические сети 0,4-10 кВ. АСКУЭ'; //6.5
  }

  td6_6.innerHTML = 'Стадия'; //6.6

  td6_7.innerHTML = 'Лист'; //6.7

  td6_8.innerHTML = 'Листов'; //6.8

  td7_5.innerHTML = project.stageOfProject; // 7.5

  if (typeOfPage === 'order') {
    td7_6.textContent = Object(_add_page_number__WEBPACK_IMPORTED_MODULE_0__["addOrderPageNumber"])(index, sem, mainObj);
  } else if (typeOfPage === 'orderSheme') {
    td7_6.textContent = Object(_add_page_number__WEBPACK_IMPORTED_MODULE_0__["addOrderShemePageNumber"])(index, shemePages); // исправить ниже, чтоб отличалась нумерация
  } else if (typeOfPage === 'works') {
    td7_6.textContent = Object(_add_page_number__WEBPACK_IMPORTED_MODULE_0__["addScopeOfWorksPageNumber"])(index, shemePages);
  } else if (typeOfPage === 'worksSheme') {
    td7_6.textContent = Object(_add_page_number__WEBPACK_IMPORTED_MODULE_0__["addShemeScopeOfWorksPageNumber"])(index);
  }

  td9_1.textContent = 'Н. контр.'; //9.1

  td9_2.textContent = 'Свирский';

  if (project.isBossSignature) {
    var bossSignature = document.createElement("IMG");
    var bossSignature2 = document.createElement("IMG");
    bossSignature.classList.add('signature_boss');
    bossSignature2.classList.add('signature_boss2');
    bossSignature.setAttribute('src', './img/svirski3.png');
    bossSignature2.setAttribute('src', './img/svirski3.png');
    td9_3.append(bossSignature);
    td10_3.append(bossSignature2);
  } // console.log(project);


  if (typeOfPage === 'order') {
    td9_5.textContent = sem.fullDecription; //9.5
  } else if (typeOfPage === 'orderSheme' || typeOfPage === 'worksSheme') {
    if (sem.SEMType.split('-')[2] === '1' && sem.SEMType.split('-')[3] === '1') {
      td9_5.textContent = 'Щиток учета с однофазным вводом. Схема электрическая принципиальная'; //9.5
    } else if (sem.SEMType.split('-')[2] === '1' && sem.SEMType.split('-')[3] === '2') {
      td9_5.textContent = 'Щиток учета с двумя однофазными вводами. Схема электрическая принципиальная'; //9.5
    } else if (sem.SEMType.split('-')[2] === '2' && sem.SEMType.split('-')[3] === '1') {
      td9_5.textContent = 'Щиток учета с трехфазным вводом. Схема электрическая принципиальная'; //9.5
    } else if (sem.SEMType.split('-')[2] === '2' && sem.SEMType.split('-')[3] === '2') {
      td9_5.textContent = 'Щиток учета с двумя трехфазными вводами. Схема электрическая принципиальная'; //9.5
    } else if (sem.SEMType.split('-')[2] === '3' && sem.SEMType.split('-')[3] === '2') {
      td9_5.textContent = 'Щиток учета с трехфазным и однофазным вводом. Схема электрическая принципиальная'; //9.5
    }
  } else if (typeOfPage === 'works') {
    td9_5.textContent = "".concat(sem.decriptionForWorks, ". \u0412\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u044A\u0435\u043C\u043E\u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435"); //9.5
  }

  var p_besp = document.createElement("P");
  p_besp.classList.add('p_besp');
  p_besp.setAttribute('display', 'inline-block');
  td9_6.append(p_besp);
  p_besp.innerHTML = 'РУП' + '<BR>' + '"Белэнергосетьпроект"';
  var logo_besp = document.createElement("IMG");
  logo_besp.classList.add('logo_besp');
  logo_besp.setAttribute('src', './img/logo_besp.jpg');
  td9_6.append(logo_besp);
  /*	td9_6.innerHTML = 'РУП "Белэнергосетьпроект"'; //9.6*/

  td10_1.innerHTML = 'Проверил'; //10.1

  td10_2.innerHTML = 'Свирский'; //10.2

  td11_1.innerHTML = 'Разраб.'; //11.1

  td11_2.innerHTML = project.nameOfDeveloper.split(' ')[0]; //11.2

  if (project.isDeveloperSignature) {
    var developerSignature = document.createElement("IMG");
    developerSignature.classList.add('signature');

    if (project.nameOfDeveloper === "Крапивина Т. С") {
      developerSignature.setAttribute('src', './img/krapivina.png');
    } else if (project.nameOfDeveloper === "Свирский А. Е.") {
      developerSignature.setAttribute('src', './img/svirski3.png');
    } else if (project.nameOfDeveloper === "Идельчик Г. Р.") {
      developerSignature.setAttribute('src', './img/idelchik.png');
    } else {
      developerSignature.setAttribute('src', './img/svirski3.png');
    }

    td11_3.append(developerSignature);
  }

  return сipherTable;
}

/* harmony default export */ __webpack_exports__["default"] = (addCipherTable);

/***/ }),

/***/ "./src/layout/scripts/cipher/add-format.js":
/*!*************************************************!*\
  !*** ./src/layout/scripts/cipher/add-format.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addFormat(format) {
  var format_div = document.createElement("DIV");
  format_div.classList.add('format_div');
  var formatPara = document.createElement("P");
  formatPara.classList.add('format');
  formatPara.textContent = "\u0424\u043E\u0440\u043C\u0430\u0442 ".concat(format);
  format_div.append(formatPara);
  return format_div;
}

/* harmony default export */ __webpack_exports__["default"] = (addFormat);

/***/ }),

/***/ "./src/layout/scripts/cipher/add-page-number.js":
/*!******************************************************!*\
  !*** ./src/layout/scripts/cipher/add-page-number.js ***!
  \******************************************************/
/*! exports provided: addOrderPageNumber, addOrderShemePageNumber, addShemeScopeOfWorksPageNumber, addScopeOfWorksPageNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrderPageNumber", function() { return addOrderPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrderShemePageNumber", function() { return addOrderShemePageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShemeScopeOfWorksPageNumber", function() { return addShemeScopeOfWorksPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScopeOfWorksPageNumber", function() { return addScopeOfWorksPageNumber; });
function addOrderPageNumber(index, sem, arrOfSems) {
  var input_page = localStorage.getItem('userOrderPageInput');

  if (index === 0) {
    return +input_page + 1;
  } else if (arrOfSems[index - 1].SEMType.split('-')[2] === sem.SEMType.split('-')[2] && arrOfSems[index - 1].SEMType.split('-')[3] === sem.SEMType.split('-')[3]) {
    var previousPage = +document.querySelector("#order_sheet > div:nth-child(".concat(index * 2, ") > div > table.\u0441ipher_table > tbody > tr:nth-child(7) > td:nth-child(6)")).textContent;
    return +previousPage + 1;
  } else if (arrOfSems[index - 1].SEMType.split('-')[2] !== sem.SEMType.split('-')[2] || arrOfSems[index - 1].SEMType.split('-')[3] !== sem.SEMType.split('-')[3]) {
    var _previousPage = +document.querySelector("#order_sheet > div:nth-child(".concat(index * 2, ") > div > table.\u0441ipher_table > tbody > tr:nth-child(7) > td:nth-child(6)")).textContent;

    return _previousPage + 2;
  }
}

function addOrderShemePageNumber(index, shemePages) {
  var input_page = localStorage.getItem('userOrderPageInput');
  console.log(shemePages);
  console.log(input_page, shemePages[index], index);
  return +input_page + shemePages[index] + index;
} //


function addShemeScopeOfWorksPageNumber(index) {
  var input_page = localStorage.getItem('userWorksPageInput');
  console.log(input_page, index);
  return +input_page + index;
}

function addScopeOfWorksPageNumber(index, shemePagesSum) {
  var input_page = localStorage.getItem('userWorksPageInput');
  console.log(input_page, index, shemePagesSum);
  return +input_page + index + shemePagesSum.length;
} //




/***/ }),

/***/ "./src/layout/scripts/data/main-object-collect.js":
/*!********************************************************!*\
  !*** ./src/layout/scripts/data/main-object-collect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function mainObjectCollect(str) {
  var arrayOfUserInput = str.split('\n');
  var resultArray = [];
  var legendArray = arrayOfUserInput[0].split(',');

  function SEM(arr) {
    this.countOfSEM = +arr[legendArray.indexOf('Количество')];
    this.breaker1Value = +arr[legendArray.indexOf('IНОМ_АВ1')].split(' ')[0];
    this.breaker2Value = +arr[legendArray.indexOf('IНОМ_АВ2')].split(' ')[0] || null;
    this.SEMType = arr[legendArray.indexOf('ТИП_ЩУЭ')];
    this.counterCountInSEM = +this.SEMType.split('-')[3];

    if (this.counterCountInSEM === 1 && arr[legendArray.indexOf('ТИП_ВВОДА')].length === 0) {
      this.inputFromSem = 'В';
    } else if (this.counterCountInSEM === 1) {
      this.inputFromSem = arr[legendArray.indexOf('ТИП_ВВОДА')];
    } else if (this.counterCountInSEM === 2 && arr[legendArray.indexOf('ТИП_ВВОДА')].length === 0) {
      this.inputFromSem = 'ВВ';
    } else {
      this.inputFromSem = arr[legendArray.indexOf('ТИП_ВВОДА')];
    }

    this.pillarType = arr[legendArray.indexOf('ТИП_ОПОРЫ')] || 'СВ-95';

    if (this.SEMType.split('-')[2] === '3') {
      this.phase1Value = 3;
      this.phase2Value = 1;
    } else if (this.SEMType.split('-')[2] === '2' && this.counterCountInSEM === 2) {
      this.phase1Value = 3;
      this.phase2Value = 3;
    } else if (this.SEMType.split('-')[2] === '1' && this.counterCountInSEM === 2) {
      this.phase1Value = 1;
      this.phase2Value = 1;
    } else if (this.SEMType.split('-')[2] === '2' && this.counterCountInSEM === 1) {
      this.phase1Value = 3;
      this.phase2Value = null;
    } else if (this.SEMType.split('-')[2] === '1' && this.counterCountInSEM === 1) {
      this.phase1Value = 1;
      this.phase2Value = null;
    }

    this.outBreaker1 = "".concat(this.phase1Value, " - ").concat(this.breaker1Value);
    this.counterCountInSEM === 2 ? this.outBreaker2 = "".concat(this.phase2Value, " - ").concat(this.breaker2Value) : this.outBreaker2 = null;

    if (this.counterCountInSEM === 1 && this.inputFromSem.toLowerCase() === 'в') {
      this.description = 'Отходящая линия: воздушная.';
    } else if (this.counterCountInSEM === 1 && this.inputFromSem.toLowerCase() === 'к') {
      this.description = 'Отходящая линия: кабельная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem.toLowerCase() === 'к' || this.inputFromSem.toLowerCase() === 'кв' || this.inputFromSem.toLowerCase() === 'вк') {
      this.description = 'Отходящие линии: кабельная и воздушная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem.toLowerCase() === 'кк') {
      this.description = 'Отходящие линии: кабельные.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem.toLowerCase() === '1фк') {
      this.description = 'Отходящие линии: 3ф - воздушная, 1ф - кабельная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem.toLowerCase() === '3фк') {
      this.description = 'Отходящие линии: 3ф - кабельная, 1ф - воздушная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem.toLowerCase() === 'вв') {
      this.description = 'Отходящие линии: воздушные.';
    } else {
      alert("".concat(this.inputFromSem, " \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ").concat(this.SEMType, ", \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"));
    }

    if (this.SEMType.split('-')[4] === '1' && this.pillarType.toLowerCase() === 'св-95') {
      this.installation = 'на опоре СВ-95';
    } else if (this.SEMType.split('-')[4] === '1' && this.pillarType.toLowerCase() === 'св-110') {
      this.installation = 'на опоре СВ-110';
    } else if (this.SEMType.split('-')[4] === '2') {
      this.installation = 'на выносной стойке';
    } else if (this.SEMType.split('-')[4] === '3') {
      this.installation = 'на внешней стене здания';
    } else if (this.SEMType.split('-')[4] === '4') {
      this.installation = 'на железобетонной приставке ПТ43-2';
    }

    if (this.counterCountInSEM === 1) {
      this.fullDecription = "".concat(this.SEMType, " (").concat(this.breaker1Value, " \u0410). ").concat(this.description, " \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ").concat(this.installation, ". \u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442");
      this.decriptionForWorks = "".concat(this.SEMType, ". ").concat(this.description, " \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ").concat(this.installation);
    } else if (this.counterCountInSEM === 2) {
      this.fullDecription = "".concat(this.SEMType, " (").concat(this.breaker1Value, " \u0410; ").concat(this.breaker2Value, " \u0410). ").concat(this.description, " \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ").concat(this.installation, ". \u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442");
      this.decriptionForWorks = "".concat(this.SEMType, ". ").concat(this.description, " \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ").concat(this.installation);
    }
  }

  for (var i = 1; i < arrayOfUserInput.length; i += 1) {
    if (arrayOfUserInput[i].split(',').length === 6) {
      resultArray.push(new SEM(arrayOfUserInput[i].split(',')));
    } else if (arrayOfUserInput[i].split(',').length > 4) {
      alert("\u0434\u043B\u0438\u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 ".concat(arrayOfUserInput[i], " = ").concat(arrayOfUserInput[i].split(',').length, " \u0432\u043C\u0435\u0441\u0442\u043E 6 \n \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D"));
    }
  }

  console.log(resultArray);
  resultArray.sort(function (a, b) {
    if (a.SEMType > b.SEMType) {
      return 1;
    } else {
      return -1;
    }
  });
  return resultArray;
}

/* harmony default export */ __webpack_exports__["default"] = (mainObjectCollect);

/***/ }),

/***/ "./src/layout/scripts/scheme_works.js":
/*!********************************************!*\
  !*** ./src/layout/scripts/scheme_works.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scheme_order_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style_scheme_order.css */ "./src/layout/css/style_scheme_order.css");
/* harmony import */ var _css_style_scheme_order_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scheme_order_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/main-object-collect */ "./src/layout/scripts/data/main-object-collect.js");
/* harmony import */ var _cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cipher/add-cipher-table */ "./src/layout/scripts/cipher/add-cipher-table.js");
/* harmony import */ var _cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cipher/add-aside-table */ "./src/layout/scripts/cipher/add-aside-table.js");
/* harmony import */ var _cipher_add_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cipher/add-format */ "./src/layout/scripts/cipher/add-format.js");





var userInput = localStorage.getItem("userInput");
userInput = Object(_data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__["default"])(userInput);
var projectData = JSON.parse(localStorage.getItem("projectData"));
var uniqueSems = []; // let shemePages = [];

for (var i = 0; i < userInput.length; i += 1) {
  console.log(i);

  if (i === 0) {
    uniqueSems.push(userInput[i]); // shemePages.push(i);
  } else if (userInput[i].SEMType.split('-')[2] !== userInput[i - 1].SEMType.split('-')[2] || userInput[i].SEMType.split('-')[3] !== userInput[i - 1].SEMType.split('-')[3]) {
    uniqueSems.push(userInput[i]); // shemePages.push(i);
  }
}

for (var _i = 0; _i < uniqueSems.length; _i += 1) {
  var schemeWrapper = document.getElementById('scheme_wrapper');
  var h6_break = document.createElement("H6");
  h6_break.classList.add('h6_break');
  var a3div = document.createElement("DIV");
  a3div.classList.add('a3_div');
  schemeWrapper.append(h6_break, a3div);
  var a3div_frame = document.createElement("DIV");
  a3div_frame.classList.add('a3_div_frame');
  a3div.append(a3div_frame);

  if (uniqueSems[_i].SEMType.split('-')[2] === '1' && uniqueSems[_i].SEMType.split('-')[3] === '1') {
    a3div_frame.classList.add('sem1_1');
  } else if (uniqueSems[_i].SEMType.split('-')[2] === '2' && uniqueSems[_i].SEMType.split('-')[3] === '1') {
    a3div_frame.classList.add('sem2_1');
  } else if (uniqueSems[_i].SEMType.split('-')[2] === '1' && uniqueSems[_i].SEMType.split('-')[3] === '2') {
    a3div_frame.classList.add('sem1_2');
  } else if (uniqueSems[_i].SEMType.split('-')[2] === '2' && uniqueSems[_i].SEMType.split('-')[3] === '2') {
    a3div_frame.classList.add('sem2_2');
  } else if (uniqueSems[_i].SEMType.split('-')[2] === '3' && uniqueSems[_i].SEMType.split('-')[3] === '2') {
    a3div_frame.classList.add('sem3_2');
  }

  var note = document.createElement("P");
  note.classList.add('note');
  a3div_frame.appendChild(note);
  note.innerHTML = 'Примечания: <br>1. * Тип (рубильник, автоматический выключатель или выключатель нагрузки) и марку вводных аппаратов принять согласно опросным листам. <br> 2. Марки указанного на чертеже оборудования принять согласно опросным листам.'; // add cipher in wrapper

  a3div_frame.append(Object(_cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_2__["default"])(projectData, '103', 'worksSheme', uniqueSems[_i], _i, userInput)); // add aside frame in wrapper

  a3div_frame.append(Object(_cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_3__["default"])());
  a3div.append(Object(_cipher_add_format__WEBPACK_IMPORTED_MODULE_4__["default"])('A3'));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc3R5bGVfc2NoZW1lX29yZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9zdHlsZV9zY2hlbWVfb3JkZXIuY3NzPzlhZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9pbWcvMS0xLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2ltZy8xLTIuanBnIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvaW1nLzItMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9pbWcvMi0yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2ltZy8zLTIuanBnIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWNpcGhlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtcGFnZS1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvc2NoZW1lX3dvcmtzLmpzIl0sIm5hbWVzIjpbImFkZEFzaWRlVGFibGUiLCJhc2lkZV9mcmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJvdzEiLCJyb3cyIiwicm93MyIsImFwcGVuZCIsInRkMV8xIiwic3Bhbl90ZDFfMSIsInRkMV8yIiwidGQyXzEiLCJzcGFuX3RkMl8xIiwidGQyXzIiLCJ0ZDNfMSIsInNwYW5fdGQzXzEiLCJ0ZDNfMiIsImlubmVySFRNTCIsImFkZENpcGhlclRhYmxlIiwicHJvamVjdCIsInN1YnNlY3Rpb24iLCJ0eXBlT2ZQYWdlIiwic2VtIiwiaW5kZXgiLCJtYWluT2JqIiwic2hlbWVQYWdlcyIsImNvbnNvbGUiLCJsb2ciLCLRgWlwaGVyVGFibGUiLCJ0Ym9keSIsInJvd18xIiwicm93XzIiLCJyb3dfMyIsInJvd180Iiwicm93XzUiLCJyb3dfNiIsInJvd183Iiwicm93XzgiLCJyb3dfOSIsInJvd18xMCIsInJvd18xMSIsInRkMV8zIiwidGQxXzQiLCJ0ZDFfNSIsInRkMV82IiwidGQxXzciLCJzZXRBdHRyaWJ1dGUiLCJ0ZDJfMyIsInRkMl80IiwidGQyXzUiLCJ0ZDJfNiIsInRkM18zIiwidGQzXzQiLCJ0ZDNfNSIsInRkM182IiwidGQzXzciLCJ0ZDRfMSIsInRkNF8yIiwidGQ0XzMiLCJ0ZDRfNCIsInRkNF81IiwidGQ0XzYiLCJ0ZDVfMSIsInRkNV8yIiwidGQ1XzMiLCJ0ZDVfNCIsInRkNV81IiwidGQ1XzYiLCJ0ZDZfMSIsInRkNl8yIiwidGQ2XzMiLCJ0ZDZfNCIsInRkNl81IiwidGQ2XzYiLCJ0ZDZfNyIsInRkNl84IiwidGQ3XzEiLCJ0ZDdfMiIsInRkN18zIiwidGQ3XzQiLCJ0ZDdfNSIsInRkN182IiwidGQ3XzciLCJ0ZDhfMSIsInRkOF8yIiwidGQ4XzMiLCJ0ZDhfNCIsInRkOV8xIiwidGQ5XzIiLCJ0ZDlfMyIsInRkOV80IiwidGQ5XzUiLCJ0ZDlfNiIsInRkMTBfMSIsInRkMTBfMiIsInRkMTBfMyIsInRkMTBfNCIsInRkMTFfMSIsInRkMTFfMiIsInRkMTFfMyIsInRkMTFfNCIsImNpcGhlciIsIm5hbWVPZlByb2plY3QiLCJuYW1lT2ZCb3NzIiwic3BsaXQiLCJkIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsInRvZGF5Iiwic3RhZ2VPZlByb2plY3QiLCJ0ZXh0Q29udGVudCIsImFkZE9yZGVyUGFnZU51bWJlciIsImFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyIiwiYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlciIsImFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciIsImlzQm9zc1NpZ25hdHVyZSIsImJvc3NTaWduYXR1cmUiLCJib3NzU2lnbmF0dXJlMiIsImZ1bGxEZWNyaXB0aW9uIiwiU0VNVHlwZSIsImRlY3JpcHRpb25Gb3JXb3JrcyIsInBfYmVzcCIsImxvZ29fYmVzcCIsIm5hbWVPZkRldmVsb3BlciIsImlzRGV2ZWxvcGVyU2lnbmF0dXJlIiwiZGV2ZWxvcGVyU2lnbmF0dXJlIiwiYWRkRm9ybWF0IiwiZm9ybWF0IiwiZm9ybWF0X2RpdiIsImZvcm1hdFBhcmEiLCJhcnJPZlNlbXMiLCJpbnB1dF9wYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZXZpb3VzUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzaGVtZVBhZ2VzU3VtIiwibGVuZ3RoIiwibWFpbk9iamVjdENvbGxlY3QiLCJzdHIiLCJhcnJheU9mVXNlcklucHV0IiwicmVzdWx0QXJyYXkiLCJsZWdlbmRBcnJheSIsIlNFTSIsImFyciIsImNvdW50T2ZTRU0iLCJpbmRleE9mIiwiYnJlYWtlcjFWYWx1ZSIsImJyZWFrZXIyVmFsdWUiLCJjb3VudGVyQ291bnRJblNFTSIsImlucHV0RnJvbVNlbSIsInBpbGxhclR5cGUiLCJwaGFzZTFWYWx1ZSIsInBoYXNlMlZhbHVlIiwib3V0QnJlYWtlcjEiLCJvdXRCcmVha2VyMiIsInRvTG93ZXJDYXNlIiwiZGVzY3JpcHRpb24iLCJhbGVydCIsImluc3RhbGxhdGlvbiIsImkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwidXNlcklucHV0IiwicHJvamVjdERhdGEiLCJKU09OIiwicGFyc2UiLCJ1bmlxdWVTZW1zIiwic2NoZW1lV3JhcHBlciIsImdldEVsZW1lbnRCeUlkIiwiaDZfYnJlYWsiLCJhM2RpdiIsImEzZGl2X2ZyYW1lIiwibm90ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHLHNDQUFzQyxtQkFBTyxDQUFDLGlIQUF5RDtBQUN2RyxvQ0FBb0MsbUJBQU8sQ0FBQyx5RkFBa0M7QUFDOUUsb0NBQW9DLG1CQUFPLENBQUMsZ0RBQWdCO0FBQzVELG9DQUFvQyxt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aUwsYUFBVyxDQUFDL0ssV0FBWixDQUF3QmdMLElBQXhCO0FBQ0FBLE1BQUksQ0FBQ2xLLFNBQUwsR0FBaUIsME9BQWpCLENBN0I4QyxDQThCOUM7O0FBQ0FpSyxhQUFXLENBQUMzSyxNQUFaLENBQW1CVyx3RUFBYyxDQUFDd0osV0FBRCxFQUFjLEtBQWQsRUFBcUIsWUFBckIsRUFBbUNHLFVBQVUsQ0FBQ1QsRUFBRCxDQUE3QyxFQUFrREEsRUFBbEQsRUFBcURLLFNBQXJELENBQWpDLEVBL0I4QyxDQWdDOUM7O0FBQ0FTLGFBQVcsQ0FBQzNLLE1BQVosQ0FBbUJYLHVFQUFhLEVBQWhDO0FBRUFxTCxPQUFLLENBQUMxSyxNQUFOLENBQWEySCxrRUFBUyxDQUFDLElBQUQsQ0FBdEI7QUFDQSxDIiwiZmlsZSI6InNoZW1lc0ZvcldvcmtzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xheW91dC9zY3JpcHRzL3NjaGVtZV93b3Jrcy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9mb250cy9HT1NUIDIuMzA0LTgxIHR5cGUgQS50dGZcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1nLzEtMS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vaW1nLzEtMi5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLi4vaW1nLzItMS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSByZXF1aXJlKFwiLi4vaW1nLzItMi5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLi4vaW1nLzMtMi5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnOyBcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXHJcXG59XFxyXFxuLypcXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQSc7IFxcclxcbiAgICBzcmM6IHVybCgnZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmJyk7IFxcclxcbn1cXHJcXG4qL1xcclxcbkBtZWRpYSBwcmludCB7XFxyXFxuICAgIC8qINC30LTQtdGB0Ywg0LHRg9C00YPRgiDRgdGC0LjQu9C4INC00LvRjyDQv9C10YfQsNGC0LggKi9cXHJcXG4gICAgaGVhZGVyLCBmb290ZXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG5cXHR9XFxyXFxuXFx0LmEzX2RpdiB7XFxyXFxuXFx0XFx0cGFnZS1icmVhay1hZnRlcjogYWx3YXlzICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0YnJlYWstYWZ0ZXI6IGFsd2F5cyAhaW1wb3J0YW50O1xcclxcblxcdFxcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IFxcclxcblxcdFxcdC8qYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICovXFxyXFxuXFx0fSBcXHJcXG5cXHJcXG5cXHQu0YFpcGhlcl90YWJsZSB0ZHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDEycHQ7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCgxKSB0ZDpudGgtY2hpbGQoNyl7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyNHB0O1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQuYTNfZGl2X2ZyYW1lIHtcXHJcXG5cXHRcXHQtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxyXFxuXFx0XFx0Y29sb3ItYWRqdXN0OiBleGFjdDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0QHBhZ2Uge1xcclxcblxcdFxcdHNpemU6IGF1dG87ICBcXHJcXG5cXHRcXHRtYXJnaW46IDA7ICBcXHJcXG5cXHR9XFxyXFxuXFx0LyogaDYge1xcclxcblxcdFxcdC13ZWJraXQtZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFx0ICovXFxyXFxufVxcclxcblxcclxcbioge1xcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrOyBcXHJcXG59XFxyXFxuXFxyXFxuaDYge1xcclxcblxcdGhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNDIxbW07XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdC8qIGJhY2tncm91bmQ6IHVybCgnL2ltZy8wMDAxLmpwZycpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG5cXHRjb2xvcjogIHdoaXRlO1xcclxcbn1cXHJcXG4vKiDQmtCd0J7Qn9Ca0JggKi9cXHJcXG4uYnRuIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogIzAwOEI4QjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRtYXJnaW46IDVweCAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDtcXHJcXG59XFxyXFxuLmJ0bjpsYXN0LWNoaWxke1xcclxcblxcdG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG4uYnRuOmhvdmVyLCAuaW5wdXQtYnRuOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOlxcdCMwMDhDMzM7XFxyXFxuXFx0Ym9yZGVyOiAjMGI2NjAzIHNvbGlkIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyrQotCQ0JHQm9CY0KbQqywg0L7QsdGJ0LjQtSDRgdCy0L7QudGB0YLQstCwKi9cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxudGQsIHRoIHtcXHJcXG5cXHRib3JkZXI6IDAuMjVtbSBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG4vKiB0Ym9keSB0cjpudGgtY2hpbGQoMm4tMSkge1xcclxcblxcdGJhY2tncm91bmQ6ICNlM2Y4ZWE7XFxyXFxufVxcclxcbnRyOm50aC1jaGlsZCgybiksIHRoZWFkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKtCa0J7QndCi0JXQmdCd0JXQoNCrKi9cXHJcXG4uc2NoZW1lX2NvbnRhaW5lciB7XFxyXFxuXFx0YmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG59XFxyXFxuLyogLmEzX2RpdjpudGgtY2hpbGQoNG4tMil7XFxyXFxuXFx0YmFja2dyb3VuZDogI2QwZWNlYztcXHJcXG59XFxyXFxuLmEzX2RpdjpudGgtY2hpbGQoNG4pe1xcclxcblxcdGJhY2tncm91bmQ6ICNjMWU2YzE7XFxyXFxufSAqL1xcclxcblxcclxcbi5hM19kaXYge1xcclxcblxcdGhlaWdodDogMjk2LjVtbTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuLmEzX2Rpdl9mcmFtZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB0O1xcclxcblxcdGhlaWdodDogMjg3bW07XFxyXFxuXFx0d2lkdGg6IDM5NW1tO1xcclxcblxcdGxlZnQ6IDIwbW07XFxyXFxuXFx0Ym90dG9tOiA1bW07XFxyXFxuXFx0Ym9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFx0XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7IC8qZGVsKi9cXHJcXG59XFxyXFxuXFxyXFxuLyrQn9GA0LjQvNC10YfQsNC90LjQtSovXFxyXFxuLm5vdGV7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiA1OG1tO1xcclxcbiAgICB3aWR0aDogMTgwbW07XFxyXFxufVxcclxcblxcclxcbi8q0KDQkNCc0JrQkC3QqNCY0KTQoCovXFxyXFxuLtGBaXBoZXJfdGFibGUge1xcclxcbiAgLyogIHdpZHRoOiAxMDAlOyovXFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRke1xcclxcbiAgICBsaW5lLWhlaWdodDogMC45NTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcclxcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZDpudGgtY2hpbGQoMil7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG5cXHQvKiBmb250LXNpemU6IDE0cHg7XFx0ICovXFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOm50aC1jaGlsZChuKzcpe1xcclxcblxcdGJvcmRlcjogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQobis1KXtcXHJcXG5cXHRib3JkZXItdG9wOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KXtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4vKi7RgWlwaGVyX3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHRib3JkZXItbGVmdDogbm9uZTtcXHJcXG59Ki9cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmxhc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZChuKzQpe1xcclxcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgxKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDIpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMykge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgxKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDIpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMyksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg0KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNikge1xcclxcblxcdHdpZHRoOiAxMG1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNSkge1xcclxcblxcdHdpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKDUpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNSkge1xcclxcblxcdHdpZHRoOiA3MG1tO1xcclxcblxcdHBhZGRpbmc6IDAgM3B4O1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDYpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNykge1xcclxcblxcdHdpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcblxcdGZvbnQtc2l6ZTogMjRwdDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGR7XFxyXFxuXFx0aGVpZ2h0OiA1bW07XFxyXFxufVxcclxcbi5wX2Jlc3B7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcclxcbn1cXHJcXG4ubG9nb19iZXNwe1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRtYXJnaW46IDBweCAwIC0xMnB4IDdweDtcXHRcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLmJyZWFrZXJfZGl2X3JhZGlvIC5yYWRpb19wLCAqL1xcclxcbi5icmVha2VyX2RpdiAuaW5wdXQtcHtcXHJcXG5cXHRwYWRkaW5nOiA4cHggMCAycHggMDtcXHRcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvIGxhYmVse1xcclxcblxcdHBhZGRpbmc6IDNweCAwIDAgMTBweDtcXHJcXG59XFxyXFxuLyogLmJyZWFrZXJfZGl2IGxhYmVsOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufSAqL1xcclxcbi5icmVha2VyX2RpdiBpbnB1dDpsYXN0LWNoaWxke1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi8qIC7RgWlwaGVyX3RhYmxlIHRyOmxhc3QtY2hpbGQgdGR7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyrRhNC+0YDQvNCw0YIgKNCQMykqL1xcclxcbi5mb3JtYXRfZGl2e1xcclxcblxcdGJvdHRvbTogMXB4O1xcclxcbiAgICByaWdodDogOTJweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCR0J7QmtCe0JLQkNCvINCn0JDQodCi0Kwg0KDQkNCc0JrQmCovXFxyXFxuIC5hc2lkZV9mcmFtZSB7XFxyXFxuXFx0Lyp0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7ICovXFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogLTAuNW1tO1xcclxcblxcdGxlZnQ6IC0xM21tO1xcclxcbn1cXHJcXG4gLmFzaWRlX2ZyYW1lIHNwYW57XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHQtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxyXFxuXFx0d3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXHJcXG4gfVxcclxcbi5hc2lkZV9mcmFtZSB0ZHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5cXHRmb250LXNpemU6IDEycHQ7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpO1xcclxcbi8qXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyovXFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMm4rMSkgdGR7XFxyXFxuXFx0aGVpZ2h0OiAyNS4zbW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMikgdGR7XFxyXFxuXFx0aGVpZ2h0OiAzNS42bW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0ZDpmaXJzdC1jaGlsZHtcXHJcXG5cXHR3aWR0aDogNW1tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGQ6bGFzdC1jaGlsZHtcXHJcXG5cXHR3aWR0aDogN21tO1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59IFxcclxcblxcclxcblxcclxcbi8q0LrQsNGA0YLQuNC90LrQuCDRgdGF0LXQvCovXFxyXFxuLnNlbTFfMSxcXHJcXG4uc2VtMV8yLFxcclxcbi5zZW0yXzEsXFxyXFxuLnNlbTJfMixcXHJcXG4uc2VtM18yIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbTFfMSB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuLnNlbTFfMiB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuLnNlbTJfMSB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XFxyXFxuLnNlbTJfMiB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG59XFxyXFxuLnNlbTNfMiB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25hdHVyZXtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IC03cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgfVxcclxcbiAgLnNpZ25hdHVyZV9ib3NzIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IDE1cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgfVxcclxcbiAgLnNpZ25hdHVyZV9ib3NzMiB7XFxyXFxuXFx0bWF4LXdpZHRoOiA2NXB4O1xcclxcblxcdG1heC1oZWlnaHQ6IDMzcHg7XFxyXFxuXFx0Ym90dG9tOiAzM3B4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIH1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRmYWVhZmQ0OTczZjg4OTIwMDc0ZTQ2ZTU1NWIxMmZjLnR0ZlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZV9zY2hlbWVfb3JkZXIuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDZlNzY2NWExZDlmNjY4Y2U5MGZiMDQyNWZlZDY1OTEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ0ZmIzNGZkNTkzZjI3MDliYzM2ZGU2ZDQyZDM4MGExLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMDQ5N2ZkODQ2ZDdkZWVkMGQzNTM4YTdiMWMxOGU4Mi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2YxMGJhNGRiY2Q1ZjI1MTM0ZjQ2OTYxOTRmOGE2OGYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQxZGNhZGYyZWYyYWFhNGM5ODdkODJkNmYxNTI0YTQyLmpwZ1wiOyIsImZ1bmN0aW9uIGFkZEFzaWRlVGFibGUoKSB7XHJcblxyXG5cdHZhciBhc2lkZV9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHRhc2lkZV9mcmFtZS5jbGFzc0xpc3QuYWRkKCdhc2lkZV9mcmFtZScpO1xyXG5cclxuXHR2YXIgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHRhc2lkZV9mcmFtZS5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcblx0dmFyIHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dmFyIHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dmFyIHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cdGJvZHkuYXBwZW5kKHJvdzEsIHJvdzIsIHJvdzMpO1xyXG5cclxuXHR2YXIgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHRkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93MS5hcHBlbmQodGQxXzEsIHRkMV8yKTtcclxuXHRyb3cyLmFwcGVuZCh0ZDJfMSwgdGQyXzIpO1xyXG5cdHJvdzMuYXBwZW5kKHRkM18xLCB0ZDNfMik7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRgdC/0LDQvdGLXHJcblx0dGQxXzEuYXBwZW5kKHNwYW5fdGQxXzEpO1xyXG5cdHRkMl8xLmFwcGVuZChzcGFuX3RkMl8xKTtcclxuXHR0ZDNfMS5hcHBlbmQoc3Bhbl90ZDNfMSk7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHRzcGFuX3RkMV8xLmlubmVySFRNTCA9ICfQmNC90LIuIE4g0L/QvtC00LsuJztcclxuXHR0ZDFfMi5pbm5lckhUTUwgPSAnJztcclxuXHRzcGFuX3RkMl8xLmlubmVySFRNTCA9ICfQn9C+0LTQv9C40YHRjCDQuCDQtNCw0YLQsCc7XHJcblx0dGQyXzIuaW5uZXJIVE1MID0gJyc7XHJcblx0c3Bhbl90ZDNfMS5pbm5lckhUTUwgPSAn0JLQt9Cw0LzQtdC9INC40L3Qsi4gTic7XHJcblx0dGQzXzIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdHJldHVybiBhc2lkZV9mcmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQXNpZGVUYWJsZTtcclxuIiwiaW1wb3J0IHsgYWRkT3JkZXJQYWdlTnVtYmVyLCAgYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIsIGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciwgYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcn0gZnJvbSAnLi9hZGQtcGFnZS1udW1iZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2lwaGVyVGFibGUocHJvamVjdCwgc3Vic2VjdGlvbiwgdHlwZU9mUGFnZSwgc2VtLCBpbmRleCwgbWFpbk9iaiwgc2hlbWVQYWdlcykge1xyXG5cclxuXHRjb25zb2xlLmxvZyhtYWluT2JqKVxyXG5cdGNvbnN0INGBaXBoZXJUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHTRgWlwaGVyVGFibGUuY2xhc3NMaXN0LmFkZCgn0YFpcGhlcl90YWJsZScpO1xyXG5cclxuXHRjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHTRgWlwaGVyVGFibGUuYXBwZW5kKHRib2R5KTtcclxuXHQvLyDRgdGC0YDQvtC60LhcclxuXHRcclxuXHRjb25zdCByb3dfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuXHJcblx0Ly8g0LzQtdGB0YLQviDQs9C00LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60LhcclxuXHR0Ym9keS5hcHBlbmQocm93XzEsIHJvd18yLCByb3dfMywgcm93XzQsIHJvd181LCByb3dfNiwgcm93XzcsIHJvd184LCByb3dfOSwgcm93XzEwLCByb3dfMTEpO1xyXG5cclxuLy8gY29uc3Qgcm93MSA9IHRib2R5WzBdO1xyXG4vKlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDExOyBpICs9IDEpIHtcclxuXHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dGJvZHkuYXBwZW5kKHJvdyk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcblx0Y29uc3Qgcm93ID0gdGJvZHkuY2hpbGROb2Rlc1swXTtcclxuXHRjb25zb2xlLmxvZyh0Ym9keS5jaGlsZE5vZGVzKVxyXG5cdGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHJvdy5hcHBlbmQodGQpO1xyXG59XHJcbiovXHJcbi8vIGNvbnNvbGUubG9nKHJvdzEpXHJcblx0Ly8g0Y/Rh9C10LnQutC4XHJcblx0Y29uc3QgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDFfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQzXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDNfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ1XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkNl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ2XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDZfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cdGNvbnN0IHRkNl82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl83ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl84ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN18yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN183LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblxyXG5cdGNvbnN0IHRkOF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ4XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ4XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDhfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDhfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ5XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDlfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV81LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblx0Y29uc3QgdGQ5XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzYuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcclxuXHR0ZDlfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDEwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTBfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTBfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDEwXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkMTFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDExXzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDExXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMV8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMTFfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93XzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMsIHRkMV80LCB0ZDFfNSwgdGQxXzYsIHRkMV83KTtcclxuXHRyb3dfMi5hcHBlbmQodGQyXzEsIHRkMl8yLCB0ZDJfMywgdGQyXzQsIHRkMl81LCB0ZDJfNik7XHJcblx0cm93XzMuYXBwZW5kKHRkM18xLCB0ZDNfMiwgdGQzXzMsIHRkM180LCB0ZDNfNSwgdGQzXzYsIHRkM183KTtcclxuXHRyb3dfNC5hcHBlbmQodGQ0XzEsIHRkNF8yLCB0ZDRfMywgdGQ0XzQsIHRkNF81LCB0ZDRfNik7XHJcblx0cm93XzUuYXBwZW5kKHRkNV8xLCB0ZDVfMiwgdGQ1XzMsIHRkNV80LCB0ZDVfNSwgdGQ1XzYpO1xyXG5cdHJvd182LmFwcGVuZCh0ZDZfMSwgdGQ2XzIsIHRkNl8zLCB0ZDZfNCwgdGQ2XzUsIHRkNl82LCB0ZDZfNywgdGQ2XzgpO1xyXG5cdHJvd183LmFwcGVuZCh0ZDdfMSwgdGQ3XzIsIHRkN18zLCB0ZDdfNCwgdGQ3XzUsIHRkN182LCB0ZDdfNyk7XHJcblx0cm93XzguYXBwZW5kKHRkOF8xLCB0ZDhfMiwgdGQ4XzMsIHRkOF80KTtcclxuXHRyb3dfOS5hcHBlbmQodGQ5XzEsIHRkOV8yLCB0ZDlfMywgdGQ5XzQsIHRkOV81LCB0ZDlfNik7XHJcblx0cm93XzEwLmFwcGVuZCh0ZDEwXzEsIHRkMTBfMiwgdGQxMF8zLCB0ZDEwXzQpO1xyXG5cdHJvd18xMS5hcHBlbmQodGQxMV8xLCB0ZDExXzIsIHRkMTFfMywgdGQxMV80KTtcclxuXHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHR0ZDFfNy5pbm5lckhUTUwgPSBgJHtwcm9qZWN0LmNpcGhlcn0tJHtzdWJzZWN0aW9ufS03MC3QkNCj0K1gOyAvLzEuN1xyXG5cclxuXHR0ZDNfNy5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZlByb2plY3Q7IC8vMy43XHJcblxyXG5cdHRkNV8xLmlubmVySFRNTCA9ICfQmNC30LwuJzsgLy81LjFcclxuXHR0ZDVfMi5pbm5lckhUTUwgPSAn0JrQvtC7LtCj0YcuJzsgLy81LjJcclxuXHR0ZDVfMy5pbm5lckhUTUwgPSAn0JvQuNGB0YInOyAvLzUuM1xyXG5cdHRkNV80LmlubmVySFRNTCA9ICfihJbQtNC+0LouJzsgLy81LjRcclxuXHR0ZDVfNS5pbm5lckhUTUwgPSAn0J/QvtC00L/QuNGB0YwnOyAvLzUuNVxyXG5cdHRkNV82LmlubmVySFRNTCA9ICfQlNCw0YLQsCc7IC8vNS42XHJcblxyXG5cdHRkNl8xLmlubmVySFRNTCA9ICfQo9GC0LIuJzsgLy82LjFcclxuXHR0ZDZfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkJvc3Muc3BsaXQoJyAnKVswXTsgLy82LjJcclxuXHR0ZDZfMy5pbm5lckhUTUwgPSAnJzsgLy82LjNcclxuXHJcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblx0Ly8gY29uc3QgZGF5ID0gZC5nZXREYXRlKCk7XHJcblx0Y29uc3QgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cdGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuXHJcblx0bGV0IHRvZGF5O1xyXG5cdGlmIChtb250aCA8IDEwKSB7XHJcblx0XHR0b2RheSA9IGAwJHttb250aH0uJHt5ZWFyLnNwbGl0KCcnKVsyXX0ke3llYXIuc3BsaXQoJycpWzNdfWBcclxuXHR9IGVsc2Uge1xyXG5cdFx0dG9kYXkgPSBgJHttb250aH0uJHt5ZWFyLnNwbGl0KCcnKVsyXX0ke3llYXIuc3BsaXQoJycpWzNdfWBcclxuXHR9XHJcblxyXG5cdHRkNl80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkOV80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkMTBfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDExXzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblxyXG5cdFxyXG5cdGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXInIHx8IHR5cGVPZlBhZ2UgPT09ICdvcmRlclNoZW1lJykge1xyXG5cdFx0dGQ2XzUuaW5uZXJIVE1MID0gJ9CX0LDQtNCw0L3QuNC1INC30LDQstC+0LTRgyDQvdCwINC40LfQs9C+0YLQvtCy0LvQtdC90LjQtSDRiNC60LDRhNC+0LIg0JDQodCa0KPQrSc7IC8vNi41XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnIHx8IHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0dGQ2XzUuaW5uZXJIVE1MID0gJ9Ct0LvQtdC60YLRgNC40YfQtdGB0LrQuNC1INGB0LXRgtC4IDAsNC0xMCDQutCSLiDQkNCh0JrQo9CtJzsgLy82LjVcclxuXHR9XHJcblx0dGQ2XzYuaW5uZXJIVE1MID0gJ9Ch0YLQsNC00LjRjyc7IC8vNi42XHJcblx0dGQ2XzcuaW5uZXJIVE1MID0gJ9Cb0LjRgdGCJzsgLy82LjdcclxuXHR0ZDZfOC5pbm5lckhUTUwgPSAn0JvQuNGB0YLQvtCyJzsgLy82LjhcclxuXHJcblx0dGQ3XzUuaW5uZXJIVE1MID0gcHJvamVjdC5zdGFnZU9mUHJvamVjdDtcdFx0XHQvLyA3LjVcclxuXHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkT3JkZXJQYWdlTnVtYmVyKGluZGV4LCBzZW0sIG1haW5PYmopO1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKTtcclxuXHJcblx0XHQvLyDQuNGB0L/RgNCw0LLQuNGC0Ywg0L3QuNC20LUsINGH0YLQvtCxINC+0YLQu9C40YfQsNC70LDRgdGMINC90YPQvNC10YDQsNGG0LjRj1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKTtcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgpO1xyXG5cdH1cclxuXHRcclxuXHR0ZDlfMS50ZXh0Q29udGVudCA9ICfQnS4g0LrQvtC90YLRgC4nOyAvLzkuMVxyXG5cdHRkOV8yLnRleHRDb250ZW50ID0gJ9Ch0LLQuNGA0YHQutC40LknO1xyXG5cclxuXHRpZiAocHJvamVjdC5pc0Jvc3NTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgYm9zc1NpZ25hdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRjb25zdCBib3NzU2lnbmF0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRib3NzU2lnbmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZV9ib3NzJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmVfYm9zczInKTtcclxuXHRcdGJvc3NTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdHRkOV8zLmFwcGVuZChib3NzU2lnbmF0dXJlKTtcclxuXHRcdHRkMTBfMy5hcHBlbmQoYm9zc1NpZ25hdHVyZTIpO1xyXG5cdH1cclxuXHJcblx0Ly8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcblxyXG5cdGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXInKSB7XHJcblx0XHR0ZDlfNS50ZXh0Q29udGVudCA9IHNlbS5mdWxsRGVjcmlwdGlvbjsgLy85LjVcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlclNoZW1lJyB8fCB0eXBlT2ZQYWdlID09PSAnd29ya3NTaGVtZScpIHtcclxuXHRcdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzEnKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDQvtC00L3QvtGE0LDQt9C90YvQvCDQstCy0L7QtNC+0LwuINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINC00LLRg9C80Y8g0L7QtNC90L7RhNCw0LfQvdGL0LzQuCDQstCy0L7QtNCw0LzQuC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcxJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0YLRgNC10YXRhNCw0LfQvdGL0Lwg0LLQstC+0LTQvtC8LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDQtNCy0YPQvNGPINGC0YDQtdGF0YTQsNC30L3Ri9C80Lgg0LLQstC+0LTQsNC80LguINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINGC0YDQtdGF0YTQsNC30L3Ri9C8INC4INC+0LTQvdC+0YTQsNC30L3Ri9C8INCy0LLQvtC00L7QvC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3JrcycpIHtcclxuXHRcdHRkOV81LnRleHRDb250ZW50ID0gYCR7c2VtLmRlY3JpcHRpb25Gb3JXb3Jrc30uINCS0LXQtNC+0LzQvtGB0YLRjCDQvtCx0YrQtdC80L7QsiDRgdGC0YDQvtC40YLQtdC70YzQvdGL0YUg0Lgg0LzQvtC90YLQsNC20L3Ri9GFINGA0LDQsdC+0YIg0L/QviDRg9GB0YLQsNC90L7QstC60LVgOyAvLzkuNVxyXG5cdH0gXHJcblxyXG5cclxuXHRjb25zdCBwX2Jlc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRwX2Jlc3AuY2xhc3NMaXN0LmFkZCgncF9iZXNwJyk7XHJcblx0cF9iZXNwLnNldEF0dHJpYnV0ZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHR0ZDlfNi5hcHBlbmQocF9iZXNwKTtcclxuXHRwX2Jlc3AuaW5uZXJIVE1MID0gJ9Cg0KPQnycgKyAnPEJSPicgKyAnXCLQkdC10LvRjdC90LXRgNCz0L7RgdC10YLRjNC/0YDQvtC10LrRglwiJztcclxuXHRjb25zdCBsb2dvX2Jlc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG5cdGxvZ29fYmVzcC5jbGFzc0xpc3QuYWRkKCdsb2dvX2Jlc3AnKTtcclxuXHRsb2dvX2Jlc3Auc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvbG9nb19iZXNwLmpwZycpO1xyXG5cdHRkOV82LmFwcGVuZChsb2dvX2Jlc3ApO1xyXG5cdC8qXHR0ZDlfNi5pbm5lckhUTUwgPSAn0KDQo9CfIFwi0JHQtdC70Y3QvdC10YDQs9C+0YHQtdGC0YzQv9GA0L7QtdC60YJcIic7IC8vOS42Ki9cclxuXHJcblx0dGQxMF8xLmlubmVySFRNTCA9ICfQn9GA0L7QstC10YDQuNC7JzsgLy8xMC4xXHJcblx0dGQxMF8yLmlubmVySFRNTCA9ICfQodCy0LjRgNGB0LrQuNC5JzsgLy8xMC4yXHJcblxyXG5cdHRkMTFfMS5pbm5lckhUTUwgPSAn0KDQsNC30YDQsNCxLic7IC8vMTEuMVxyXG5cdHRkMTFfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkRldmVsb3Blci5zcGxpdCgnICcpWzBdOyAvLzExLjJcclxuXHJcblx0aWYgKHByb2plY3QuaXNEZXZlbG9wZXJTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgZGV2ZWxvcGVyU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGRldmVsb3BlclNpZ25hdHVyZS5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmUnKTtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQmtGA0LDQv9C40LLQuNC90LAg0KIuINChXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2tyYXBpdmluYS5wbmcnKTtcclxuXHRcdH0gZWxzZSBpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0KHQstC40YDRgdC60LjQuSDQkC4g0JUuXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0fSBlbHNlIGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQmNC00LXQu9GM0YfQuNC6INCTLiDQoC5cIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvaWRlbGNoaWsucG5nJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHR9XHJcblx0XHR0ZDExXzMuYXBwZW5kKGRldmVsb3BlclNpZ25hdHVyZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4g0YFpcGhlclRhYmxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRDaXBoZXJUYWJsZTtcclxuIiwiZnVuY3Rpb24gYWRkRm9ybWF0KGZvcm1hdCkge1xyXG5cclxuXHRjb25zdCBmb3JtYXRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuXHRmb3JtYXRfZGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1hdF9kaXYnKTtcclxuXHJcblx0Y29uc3QgZm9ybWF0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdGZvcm1hdFBhcmEuY2xhc3NMaXN0LmFkZCgnZm9ybWF0Jyk7XHJcblx0XHJcblx0Zm9ybWF0UGFyYS50ZXh0Q29udGVudCA9IGDQpNC+0YDQvNCw0YIgJHtmb3JtYXR9YDtcclxuXHRmb3JtYXRfZGl2LmFwcGVuZChmb3JtYXRQYXJhKTtcclxuXHJcblx0cmV0dXJuIGZvcm1hdF9kaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEZvcm1hdDtcclxuIiwiZnVuY3Rpb24gYWRkT3JkZXJQYWdlTnVtYmVyKGluZGV4LCBzZW0sIGFyck9mU2Vtcykge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck9yZGVyUGFnZUlucHV0Jyk7XHJcblxyXG5cdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0cmV0dXJuICtpbnB1dF9wYWdlICsgMTtcclxuXHR9IGVsc2UgaWYgKGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSBcclxuXHRcdCYmIGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSkge1xyXG5cdFx0Y29uc3QgcHJldmlvdXNQYWdlID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNvcmRlcl9zaGVldCA+IGRpdjpudGgtY2hpbGQoJHtpbmRleCAqIDJ9KSA+IGRpdiA+IHRhYmxlLtGBaXBoZXJfdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg3KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHJldHVybiArcHJldmlvdXNQYWdlICsgMTtcclxuXHR9IGVsc2UgaWYgKGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSBcclxuXHRcdHx8IGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVszXSAhPT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSkge1xyXG5cdFx0Y29uc3QgcHJldmlvdXNQYWdlID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNvcmRlcl9zaGVldCA+IGRpdjpudGgtY2hpbGQoJHtpbmRleCAqIDJ9KSA+IGRpdiA+IHRhYmxlLtGBaXBoZXJfdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg3KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHJldHVybiBwcmV2aW91c1BhZ2UgKyAyO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXMpIHtcclxuXHRcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJPcmRlclBhZ2VJbnB1dCcpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhzaGVtZVBhZ2VzKTtcclxuXHRjb25zb2xlLmxvZyhpbnB1dF9wYWdlLCBzaGVtZVBhZ2VzW2luZGV4XSwgaW5kZXgpO1xyXG5cclxuXHRyZXR1cm4gK2lucHV0X3BhZ2UgKyBzaGVtZVBhZ2VzW2luZGV4XSArIGluZGV4O1xyXG59XHJcbi8vXHJcbmZ1bmN0aW9uIGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCkge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcldvcmtzUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIGluZGV4KTtcclxuXHJcblx0cmV0dXJuICtpbnB1dF9wYWdlICsgaW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXNTdW0pIHtcclxuXHRcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJXb3Jrc1BhZ2VJbnB1dCcpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhpbnB1dF9wYWdlLCBpbmRleCwgc2hlbWVQYWdlc1N1bSk7XHJcblxyXG5cdHJldHVybiAraW5wdXRfcGFnZSArIGluZGV4ICtzaGVtZVBhZ2VzU3VtLmxlbmd0aDtcclxufVxyXG4vL1xyXG5leHBvcnQgeyBhZGRPcmRlclBhZ2VOdW1iZXIsICBhZGRPcmRlclNoZW1lUGFnZU51bWJlciwgYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyLCBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyfSA7XHJcbiIsImZ1bmN0aW9uIG1haW5PYmplY3RDb2xsZWN0KHN0cikge1xyXG5cdGxldCBhcnJheU9mVXNlcklucHV0ID0gc3RyLnNwbGl0KCdcXG4nKTtcclxuXHJcblx0bGV0IHJlc3VsdEFycmF5ID0gW107XHJcblxyXG5cdGxldCBsZWdlbmRBcnJheSA9IGFycmF5T2ZVc2VySW5wdXRbMF0uc3BsaXQoJywnKTtcclxuXHJcblx0ZnVuY3Rpb24gU0VNKGFycikge1xyXG5cclxuXHRcdHRoaXMuY291bnRPZlNFTSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0JrQvtC70LjRh9C10YHRgtCy0L4nKV07XHJcblx0XHR0aGlzLmJyZWFrZXIxVmFsdWUgPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ0nQndCe0Jxf0JDQkjEnKV0uc3BsaXQoJyAnKVswXTtcclxuXHRcdHRoaXMuYnJlYWtlcjJWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMicpXS5zcGxpdCgnICcpWzBdIHx8IG51bGw7XHJcblx0XHR0aGlzLlNFTVR5cGUgPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9Cp0KPQrScpXTtcclxuXHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPSArdGhpcy5TRU1UeXBlLnNwbGl0KCctJylbM107XHJcblxyXG5cdFx0aWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDFcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQkic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV07XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQktCSJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGlsbGFyVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0J7Qn9Ce0KDQqycpXSB8fCAn0KHQki05NSc7XHJcblxyXG5cdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAzO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3V0QnJlYWtlcjEgPSBgJHt0aGlzLnBoYXNlMVZhbHVlfSAtICR7dGhpcy5icmVha2VyMVZhbHVlfWA7XHJcblx0XHR0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyID9cclxuXHRcdFx0dGhpcy5vdXRCcmVha2VyMiA9IGAke3RoaXMucGhhc2UyVmFsdWV9IC0gJHt0aGlzLmJyZWFrZXIyVmFsdWV9YCA6XHJcblx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBudWxsO1xyXG5cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LInKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQuicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQsicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQuicpKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6INC60LDQsdC10LvRjNC90LDRjyDQuCDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3Ri9C1Lic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJzHRhNC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8sIDHRhCAtINC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICcz0YTQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDogM9GEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLCAx0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQsicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LLQvtC30LTRg9GI0L3Ri9C1Lic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGVydChgJHt0aGlzLmlucHV0RnJvbVNlbX0g0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiAke3RoaXMuU0VNVHlwZX0sINC/0LXRgNC10L/RgNC+0LLQtdGA0YzRgtC1INCy0LLQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICfRgdCyLTk1Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQki05NSc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICfRgdCyLTExMCcpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItMTEwJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0XHR0aGlzLmRlY3JpcHRpb25Gb3JXb3JrcyA9IGAke3RoaXMuU0VNVHlwZX0uICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259YDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQOyAke3RoaXMuYnJlYWtlcjJWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXlPZlVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0aWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPT09IDYpIHtcclxuXHRcdFx0cmVzdWx0QXJyYXkucHVzaChuZXcgU0VNKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKSkpO1xyXG5cdFx0fSBlbHNlIGlmIChhcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RoID4gNCkge1xyXG5cdFx0XHRhbGVydChg0LTQu9C40L3QsCDQvNCw0YHRgdC40LLQsCAke2FycmF5T2ZVc2VySW5wdXRbaV19ID0gJHthcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RofSDQstC80LXRgdGC0L4gNiBcXG4g0LTQsNC90L3Ri9C5INC80LDRgdGB0LjQsiDQvdC1INCx0YPQtNC10YIg0L7QsdGA0LDQsdC+0YLQsNC9YCk7XHJcblx0XHQgIH1cclxuXHR9XHJcblx0Y29uc29sZS5sb2cocmVzdWx0QXJyYXkpO1xyXG5cclxuXHRyZXN1bHRBcnJheS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRpZiAoYS5TRU1UeXBlID4gYi5TRU1UeXBlKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5PYmplY3RDb2xsZWN0O1xyXG4iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZV9zY2hlbWVfb3JkZXIuY3NzJztcclxuXHJcbmltcG9ydCBtYWluT2JqZWN0Q29sbGVjdCBmcm9tICcuL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdCc7XHJcbmltcG9ydCBhZGRDaXBoZXJUYWJsZSBmcm9tICcuL2NpcGhlci9hZGQtY2lwaGVyLXRhYmxlJztcclxuaW1wb3J0IGFkZEFzaWRlVGFibGUgZnJvbSAnLi9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlJztcclxuaW1wb3J0IGFkZEZvcm1hdCBmcm9tICcuL2NpcGhlci9hZGQtZm9ybWF0JztcclxuXHJcbmxldCB1c2VySW5wdXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbnB1dFwiKTtcclxudXNlcklucHV0ID0gbWFpbk9iamVjdENvbGxlY3QodXNlcklucHV0KTtcclxuXHJcbmxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0RGF0YVwiKSk7XHJcblxyXG5sZXQgdW5pcXVlU2VtcyA9IFtdO1xyXG4vLyBsZXQgc2hlbWVQYWdlcyA9IFtdO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRjb25zb2xlLmxvZyhpKVxyXG5cdGlmIChpID09PSAwKSB7XHJcblx0XHR1bmlxdWVTZW1zLnB1c2godXNlcklucHV0W2ldKTtcclxuXHRcdC8vIHNoZW1lUGFnZXMucHVzaChpKTtcclxuXHR9IGVsc2UgaWYgKHVzZXJJbnB1dFtpXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09IHVzZXJJbnB1dFtpIC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdXHJcblx0XHR8fCB1c2VySW5wdXRbaV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdICE9PSB1c2VySW5wdXRbaSAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVszXSkge1xyXG5cdFx0dW5pcXVlU2Vtcy5wdXNoKHVzZXJJbnB1dFtpXSk7XHJcblx0XHQvLyBzaGVtZVBhZ2VzLnB1c2goaSk7XHJcblx0fVxyXG59XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVuaXF1ZVNlbXMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRjb25zdCBzY2hlbWVXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjaGVtZV93cmFwcGVyJyk7XHJcblxyXG4gICAgY29uc3QgaDZfYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDZcIik7XHJcbiAgICBoNl9icmVhay5jbGFzc0xpc3QuYWRkKCdoNl9icmVhaycpO1xyXG4gICAgXHJcblx0Y29uc3QgYTNkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgYTNkaXYuY2xhc3NMaXN0LmFkZCgnYTNfZGl2Jyk7XHJcbiAgICBcclxuXHRzY2hlbWVXcmFwcGVyLmFwcGVuZChoNl9icmVhaywgYTNkaXYpO1xyXG5cclxuXHRjb25zdCBhM2Rpdl9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcblx0YTNkaXZfZnJhbWUuY2xhc3NMaXN0LmFkZCgnYTNfZGl2X2ZyYW1lJyk7XHJcblx0YTNkaXYuYXBwZW5kKGEzZGl2X2ZyYW1lKTtcclxuXHRpZiAodW5pcXVlU2Vtc1tpXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJyAmJiB1bmlxdWVTZW1zW2ldLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzEnKSB7XHJcblx0XHRhM2Rpdl9mcmFtZS5jbGFzc0xpc3QuYWRkKCdzZW0xXzEnKTtcclxuXHR9IGVsc2UgaWYgKHVuaXF1ZVNlbXNbaV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgdW5pcXVlU2Vtc1tpXS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcxJykge1xyXG5cdFx0YTNkaXZfZnJhbWUuY2xhc3NMaXN0LmFkZCgnc2VtMl8xJyk7XHJcblx0fSBlbHNlIGlmICh1bmlxdWVTZW1zW2ldLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnICYmIHVuaXF1ZVNlbXNbaV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdGEzZGl2X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ3NlbTFfMicpO1xyXG5cdH0gZWxzZSBpZiAodW5pcXVlU2Vtc1tpXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJyAmJiB1bmlxdWVTZW1zW2ldLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRhM2Rpdl9mcmFtZS5jbGFzc0xpc3QuYWRkKCdzZW0yXzInKTtcclxuXHR9IGVsc2UgaWYgKHVuaXF1ZVNlbXNbaV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycgJiYgdW5pcXVlU2Vtc1tpXS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0YTNkaXZfZnJhbWUuY2xhc3NMaXN0LmFkZCgnc2VtM18yJyk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0bm90ZS5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XHJcblx0YTNkaXZfZnJhbWUuYXBwZW5kQ2hpbGQobm90ZSk7XHJcblx0bm90ZS5pbm5lckhUTUwgPSAn0J/RgNC40LzQtdGH0LDQvdC40Y86IDxicj4xLiAqINCi0LjQvyAo0YDRg9Cx0LjQu9GM0L3QuNC6LCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC5INCy0YvQutC70Y7Rh9Cw0YLQtdC70Ywg0LjQu9C4INCy0YvQutC70Y7Rh9Cw0YLQtdC70Ywg0L3QsNCz0YDRg9C30LrQuCkg0Lgg0LzQsNGA0LrRgyDQstCy0L7QtNC90YvRhSDQsNC/0L/QsNGA0LDRgtC+0LIg0L/RgNC40L3Rj9GC0Ywg0YHQvtCz0LvQsNGB0L3QviDQvtC/0YDQvtGB0L3Ri9C8INC70LjRgdGC0LDQvC4gPGJyPiAyLiDQnNCw0YDQutC4INGD0LrQsNC30LDQvdC90L7Qs9C+INC90LAg0YfQtdGA0YLQtdC20LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNGPINC/0YDQuNC90Y/RgtGMINGB0L7Qs9C70LDRgdC90L4g0L7Qv9GA0L7RgdC90YvQvCDQu9C40YHRgtCw0LwuJztcclxuXHQvLyBhZGQgY2lwaGVyIGluIHdyYXBwZXJcclxuXHRhM2Rpdl9mcmFtZS5hcHBlbmQoYWRkQ2lwaGVyVGFibGUocHJvamVjdERhdGEsICcxMDMnLCAnd29ya3NTaGVtZScsIHVuaXF1ZVNlbXNbaV0sIGksIHVzZXJJbnB1dCkpO1xyXG5cdC8vIGFkZCBhc2lkZSBmcmFtZSBpbiB3cmFwcGVyXHJcblx0YTNkaXZfZnJhbWUuYXBwZW5kKGFkZEFzaWRlVGFibGUoKSk7XHJcblxyXG5cdGEzZGl2LmFwcGVuZChhZGRGb3JtYXQoJ0EzJykpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=