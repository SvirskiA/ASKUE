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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/layout/scripts/order-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/order-list.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/order-list.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/GOST 2.304-81 type A.ttf */ "./src/layout/css/fonts/GOST 2.304-81 type A.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\r\n  font-family: 'GOST 2.304-81 type A'; \r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n@media print {\r\n  /* *,\r\n  *:before,\r\n  *:after,\r\n  *:first-letter,\r\n  p:first-line,\r\n  /* div:first-line, \r\n  blockquote:first-line,\r\n  li:first-line {\r\n      background: transparent !important;\r\n      color: #000 !important;\r\n      box-shadow: none !important;\r\n      text-shadow: none !important;\r\n  } */\r\n  /* здесь будут стили для печати */\r\n    header, .main-table, footer {\r\n    display: none !important;\r\n\r\n  }\r\n  .a4_div {\r\n    page-break-after: always !important;\r\n    break-after: always !important;\r\n    page-break-inside: avoid;\r\n    float: none !important; \r\n    border: none !important;\r\n  } \r\n\r\n  .сipher_table td{\r\n    font-size: 12pt;\r\n  }\r\n\r\n  .сipher_table tr:nth-child(1) td:nth-child(7){\r\n    font-size: 24pt;\r\n  }\r\n\r\n  .square_checked {\r\n    -webkit-print-color-adjust: exact;\r\n    color-adjust: exact;\r\n  }\r\n\r\n  @page {\r\n    size: auto;  \r\n    margin: 0;  \r\n  }\r\n/* h6 {\r\n  -webkit-display: none;\r\n}\t */\r\n}\r\n/* @media print and (-webkit-min-device-pixel-ratio:0)\r\nand (min-resolution:.001dpcm) {\r\nh6 {\r\n  -webkit-display: none;\r\n} \r\n} */\r\nh6 {\r\nheight: 1px;\r\n}\r\n\r\n* {\tmargin: 0;\r\npadding: 0;\r\nbox-sizing: border-box;\r\n\r\nfont-family: 'GOST 2.304-81 type A', sans-serif;\r\ncolor: black; \r\n}\r\n\r\n.container {\r\nwidth: 210mm;\r\nmargin: auto;\r\n/* background: url('/img/0001.jpg'); */\r\n}\r\nheader,\r\nfooter {\r\npadding: 15px 0;\r\nbackground: #48D1CC;\r\ncolor:  white;\r\n}\r\n/* КНОПКИ */\r\n.btn {\r\nwidth: 100%;\r\nheight: 30px;\r\nbackground: #008B8B;\r\ncolor: white;\r\nborder: none;\r\nborder-radius: 5px;\r\nmargin: 5px 0;\r\nfont-size: 21px;;\r\n}\r\n.btn:last-child{\r\nmargin: 20px 0;\r\n}\r\n.btn:hover, .input-btn:hover {\r\nbackground:\t#008C33;\r\nborder: #0b6603 solid 2px;\r\n}\r\n/*Div с верхней таблицой */\r\n.main-table {\r\nbackground: #AFEEEE;\r\nfont-size: 21px;\r\n}\r\n/*Легенды*/\r\nlegend{\r\npadding-top: 5px;\r\n}\r\n/*ТАБЛИЦЫ, общие свойства*/\r\ntable {\r\nborder-collapse: collapse;\r\n}\r\ntd, th {\r\nborder: 0.25mm solid #000;\r\n}\r\ntbody tr:nth-child(2n-1) {\r\nbackground: #e3f8ea;\r\n}\r\ntr:nth-child(2n), thead {\r\nbackground: #fff;\r\n}\r\n/*ТАБЛИЦА ИНФОРМАЦИИ*/\r\n.info_table {\r\nwidth: 100%;\r\n}\r\n.info_table td, .info_table th {\r\nborder: 2px solid #008B8B;\r\n}\r\n.info_table td:nth-child(1),  .info_table td:nth-child(2){\r\npadding-left: 5px;\r\n}\r\n.info_table td:last-child{\r\ntext-align: center;\r\n}\r\n.info_table th:first-child {\r\nwidth: 40mm;\r\n}\r\n.info_table th:last-child {\r\nwidth: 15mm;\r\n}\r\n.info_table .last_td {\r\nfont-weight: 800;\r\nbackground: #AFEEEE;\r\nborder: none;\r\ntext-align: right;\r\npadding-right: 5px;\r\n}\r\n/*КОНТЕЙНЕРЫ ДЛЯ ОПРОСНЫХ*/\r\n.order_container {\r\nbackground: #48D1CC;\r\n}\r\n.a4_div:nth-child(4n-2){\r\nbackground: #d0ecec;\r\n}\r\n.a4_div:nth-child(4n){\r\nbackground: #c1e6c1;\r\n}\r\n.a4_div {\r\nheight: 296.5mm;\r\ndisplay: block;\r\nborder: 1px solid black;\r\nposition: relative;\r\n}\r\n.a4_div_frame {\r\nfont-size: 11.5pt;\r\nheight: 287mm;\r\nwidth: 185mm;\r\nleft: 20mm;\r\nbottom: 5mm;\r\nborder: 0.6mm solid black;\r\nposition: absolute;\t\r\ndisplay: block; /*del*/\r\n}\r\n/*ОПИСАТЕЛЬНАЯ ТАБЛИЦА ОПРОСНОГО*/\r\n.legend_table {\r\nwidth: 50%;\r\ntext-align: center;\r\nmargin-left: 180px;\r\n}\r\n.descript_table {\r\nmargin-left: 80px;\r\nwidth: 140mm;\r\n}\r\n.descript_table td {\r\npadding: 1px 0 1px 5px;\r\n}\r\n/*ТАБЛИЦА-ОПРОСНЫЙ*/\r\n.order_table {\r\nwidth: 100%;\r\nmargin-top: 10px;\r\n}\r\n.order_table td:nth-child(1) {\r\nwidth: 15mm;\r\ntext-align: center;\r\nborder-left: none;\r\n}\r\n/* .order_table td:last-child{\r\n\r\n} */\r\n.order_table td:nth-child(2) {\r\nwidth: 70mm;\r\ntext-align: left;\r\npadding-left: 5px;\r\n}\r\n.order_table td:nth-child(3) {\r\ntext-align: left;\r\npadding-left: 5px;\r\nborder-right: none;\r\n}\r\n.order_table tr:nth-child(1) td {\r\ntext-align: center;\r\nheight: 30px;\r\npadding: 0;\r\n}\r\n.square {\r\nwidth: 12px;\r\nheight: 12px;\r\nborder: 1px solid #000;\r\nfloat: left;\r\nmargin-top: 2px;\r\nmargin-right: 5px;\r\nmargin-bottom: 1px;\r\n}\r\n.square:last-child {\r\nmargin-bottom: 2px;\r\n}\r\n.square_checked {\r\nbackground: #000;\r\n}\r\n\r\n/*свойства для опросника, где нужно в одну строку квадратики вписать*/\r\n.inline_block {\r\ndisplay: inline-block;\r\nwidth: 49%;\r\n}\r\n/*Примечание после опросного*/\r\n.note{\r\npadding: 5px;\r\n}\r\n/*РАМКА-ШИФР*/\r\n.сipher_table {\r\n  width: 100%;\r\nposition: absolute;\r\nbottom: 0;\r\ntext-align: center;\r\n}\r\n.сipher_table td{\r\n  line-height: 0.95;\r\n  font-size: 12pt;;\r\nbackground: #fff;\r\nborder-right: #000 solid 0.6mm;\r\nborder-left: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td:nth-child(4),\r\n.сipher_table tr:nth-child(5) td:nth-child(2){\r\nletter-spacing: -0.5px;\r\n/* font-size: 14px;\t */\r\n}\r\n.сipher_table td:nth-child(n+7){\r\nborder: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:first-child td,\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+5){\r\nborder-top: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(6) td:nth-child(6){\r\nborder-bottom: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table td:first-child {\r\nborder-left: none;\r\n}\r\n.сipher_table td:last-child {\r\nborder-right: none;\r\n}\r\n.сipher_table tr:last-child td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+4){\r\nborder-bottom: none;\t\r\n}\r\n.сipher_table tr:nth-child(n+6) td:nth-child(1), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(2), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(3) {\r\ntext-align: left;\r\npadding-left: 2px;\r\n}\r\n.сipher_table tr:first-child td:nth-child(1), \r\n.сipher_table tr:first-child td:nth-child(2), \r\n.сipher_table tr:first-child td:nth-child(3), \r\n.сipher_table tr:first-child td:nth-child(4),\r\n.сipher_table tr:first-child td:nth-child(6) {\r\nwidth: 10mm;\r\n}\r\n.сipher_table tr:first-child td:nth-child(5) {\r\nwidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(5) {\r\nwidth: 70mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(6),\r\n.сipher_table tr:nth-child(6) td:nth-child(7) {\r\nwidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(1) td:nth-child(7){\r\nfont-size: 24pt;\r\n}\r\n.сipher_table tr td:first-child{\r\nheight: 5mm;\r\n}\r\n.p_besp{\r\ndisplay: inline-block;\r\n/*margin-bottom: 10px;*/\r\n}\r\n.logo_besp{\r\ndisplay: inline-block;\r\nmargin: 0px 0 -12px 7px;\t\r\n}\r\n/*ПРЯЧЕМ ФОРМУ ВНЕСЕНИЯ СЧЕТЧИКОВ И АВТОМАТОВ ПОСЛЕ ЕЕ ЗАПОЛНЕНИЯ*/\r\n.hide_counters_n_breakers_container {\r\n  display: none;\r\n}\r\n\r\n/*ПОКАЗЫВАЕМ*/\r\n.hide_info_table_wrapper {\r\n  display: none;\r\n}\r\n.show_info_table_wrapper {\r\ndisplay: block;\r\n}\r\n.footer_show {\r\ndisplay: block;\t\r\n}\r\nfooter {\r\ndisplay: none;\r\n}\r\n\r\n/*ФОРМА ВВОДА СЧЕТЧИКОВ И ВЫКЛЮЧАТЕЛЕЙ*/\r\n.counters_n_breakers_container {\r\nbackground: #AFEEEE;\r\nfont-size: 21px;\r\nmin-height: 823px;\r\n}\r\n.counters_n_breakers_container input {\r\nfont-size: 21px;\t\r\n}\r\n/*нумерация листов*/\r\n.input_page{\r\nbackground: #48D1CC;\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\t\r\npadding-left: 40px;\r\n}\r\n/*СЧЕТЧИКИ*/\r\n.counters_wrapper{\r\nbackground: #AFEEEE;\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\t\r\npadding-left: 40px;\r\n\r\n}\r\n.input_page p,\r\n.counters_wrapper p{\r\npadding: 12px 0 2px 0;\r\n}\r\n.counters_wrapper .counter_note {\r\npadding: 0;\r\nfont-size: 16px;\r\ncolor: #0b6603;\r\n}\r\n.counters_wrapper .counter_note:last-child {\r\npadding-bottom: 5px;\r\n}\r\n.counters_n_breakers_container #counter-1f,\r\n.counters_n_breakers_container #counter-3f {\r\nwidth: 91%;\r\n}\r\n.input_page #input_page\r\n/*, .counters_n_breakers_container #counter-3f*/\r\n{\r\nmargin-bottom: 13px;\r\n}\r\n\r\n/*ВЫКЛЮЧАТЕЛИ*/\r\n.breaker_div_radio,\r\n.breaker_div {\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\r\npadding-left: 40px;\t\t\r\n}\r\n.breaker_div_radio{\r\npadding-bottom: 10px;\r\n}\r\n.breaker_div_radio:nth-child(2n-1){\r\n  background: #5fe67c;\r\n}\r\n.breaker_div_radio:nth-child(2n){\r\nbackground: #4ff9aa;\r\n}\r\n.breaker_div:nth-child(2n-1){\r\nbackground: #48D1CC;\r\n}\r\n.breaker_div:nth-child(2n){\r\nbackground: #AFEEEE;\r\n}\r\n.breaker_div_radio .breaker_p,\r\n.breaker_div .breaker_p{\r\ntext-align: center;\r\npadding: 15px 0 2px 0;\t\r\nmargin-left: -40px;\r\n}\r\n\r\n.breaker_div .input-p{\r\npadding: 8px 0 2px 0;\t\r\n}\r\n.breaker_div_radio label{\r\npadding: 3px 0 0 10px;\r\n}\r\n\r\n.breaker_div input:last-child{\r\nmargin-bottom: 12px;\r\n}\r\n\r\n\r\n/*формат (А4)*/\r\n.format_div{\r\nbottom: 1px;\r\n  right: 92px;\r\n  position: absolute;\r\n}\r\n\r\n/*БОКОВАЯ ЧАСТЬ РАМКИ*/\r\n.aside_frame {\r\n/*transform: rotate(-90.0deg); */\r\nposition: absolute;\r\nbottom: -0.5mm;\r\nleft: -13mm;\r\n}\r\n.aside_frame span{\r\n  transform: rotate(-90.0deg);\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -webkit-writing-mode: vertical-rl;\r\n  writing-mode: vertical-rl;\r\n}\r\n.aside_frame td{\r\ntext-align: center;\r\nborder: 0.6mm solid black;\r\nfont-size: 12pt;\r\ntransform: rotate(-90.0deg);\r\n\r\n}\r\n.aside_frame tr:nth-child(2n+1) td{\r\nheight: 25.3mm;\r\n}\r\n.aside_frame tr:nth-child(2) td{\r\nheight: 35.6mm;\r\n}\r\n.aside_frame td:first-child{\r\nwidth: 5mm;\r\n}\r\n.aside_frame td:last-child{\r\nwidth: 7mm;\r\nborder-right: none;\r\n} \r\n\r\n/*ввод № страницы*/\r\n#input_page{\r\ntext-align: center;\r\n}\r\n.signature{\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: -7px;\r\n  position: absolute;\r\n}\r\n.signature_boss {\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: 15px;\r\n  position: absolute;\r\n}\r\n.signature_boss2 {\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: 33px;\r\n  position: absolute;\r\n}", ""]);
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

/***/ "./src/layout/css/order-list.css":
/*!***************************************!*\
  !*** ./src/layout/css/order-list.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./order-list.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/order-list.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

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


function addCipherTable(project, sem, index, mainObj) {
  console.log(mainObj);
  var сipherTable = document.createElement("TABLE");
  сipherTable.classList.add('сipher_table');
  var body = document.createElement("TBODY");
  сipherTable.append(body); // строки

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

  body.append(row_1, row_2, row_3, row_4, row_5, row_6, row_7, row_8, row_9, row_10, row_11); // ячейки

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

  td1_7.innerHTML = "".concat(project.cipher, "-290-70-\u0410\u0423\u042D"); //1.7

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
  td6_5.innerHTML = 'Задание заводу на изготовление шкафов АСКУЭ'; //6.5

  td6_6.innerHTML = 'Стадия'; //6.6

  td6_7.innerHTML = 'Лист'; //6.7

  td6_8.innerHTML = 'Листов'; //6.8

  td7_5.innerHTML = project.stageOfProject; // 7.5

  td7_6.textContent = Object(_add_page_number__WEBPACK_IMPORTED_MODULE_0__["default"])(index, sem, mainObj);
  td9_1.innerHTML = 'Н. контр.'; //9.1

  td9_2.innerHTML = 'Горовой';

  if (project.isBossSignature) {
    var bossSignature = document.createElement("IMG");
    var bossSignature2 = document.createElement("IMG");
    bossSignature.classList.add('signature_boss');
    bossSignature2.classList.add('signature_boss2');
    bossSignature.setAttribute('src', './img/idelchik.png');
    bossSignature2.setAttribute('src', './img/idelchik.png');
    td9_3.append(bossSignature);
    td10_3.append(bossSignature2);
  }

  console.log(project);
  td9_5.innerHTML = sem.fullDecription; //9.5

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

  td10_2.innerHTML = 'Горовой'; //10.2

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

/***/ "./src/layout/scripts/cipher/add-page-number.js":
/*!******************************************************!*\
  !*** ./src/layout/scripts/cipher/add-page-number.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addPageNumber(index, sem, arrOfSems) {
  var input_page = +document.getElementById('input_page').value;
  var page;

  if (index === 0) {
    page = input_page + 1;
    return page;
  } else if (arrOfSems[index - 1].SEMType.split('-')[2] === sem.SEMType.split('-')[2] && arrOfSems[index - 1].SEMType.split('-')[3] === sem.SEMType.split('-')[3]) {
    var previousPage = +document.querySelector("#order_sheet > div:nth-child(".concat(index * 2, ") > div > table.\u0441ipher_table > tbody > tr:nth-child(7) > td:nth-child(6)")).textContent;
    console.log(+document.querySelector("#order_sheet > div:nth-child(".concat(index * 2, ") > div > table.\u0441ipher_table > tbody > tr:nth-child(7) > td:nth-child(6)")).textContent);
    page = previousPage + 1;
    console.log(previousPage, ' - previousPage/ same');
    return page;
  } else if (arrOfSems[index - 1].SEMType.split('-')[2] !== sem.SEMType.split('-')[2] || arrOfSems[index - 1].SEMType.split('-')[3] !== sem.SEMType.split('-')[3]) {
    // startTypeSemForNumList = sem.SEMType.split('-')[2] + sem.SEMType.split('-')[3];
    var _previousPage = +document.querySelector("#order_sheet > div:nth-child(".concat(index * 2, ") > div > table.\u0441ipher_table > tbody > tr:nth-child(7) > td:nth-child(6)")).textContent; // console.log(+document.querySelector(`#order_sheet > div:nth-child(${index * 2}) > div > table.сipher_table > tbody > tr:nth-child(7) > td:nth-child(5)`).textContent);


    page = _previousPage + 2; // console.log(previousPage, ' - previousPage/ not same');

    return page;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addPageNumber);

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
    } else if (this.counterCountInSEM === 2) {
      this.fullDecription = "".concat(this.SEMType, " (").concat(this.breaker1Value, " \u0410; ").concat(this.breaker2Value, " \u0410). ").concat(this.description, " \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ").concat(this.installation, ". \u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442");
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

/***/ "./src/layout/scripts/for-order-list/add-breakers-choise.js":
/*!******************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/add-breakers-choise.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breaker_default_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breaker-default-type */ "./src/layout/scripts/for-order-list/breaker-default-type.js");
 // функция добавляющая форму для выключателей

function createBreakerWrapper(pairOfPhaseAndAmpere, index, outBreakerDefault, inputBreakerDefault) {
  var brakersWrapper = document.getElementById('brakers_wrapper'); // создание обертки

  var breakerDiv = document.createElement("DIV");
  breakerDiv.classList.add('breaker_div'); // создание верхнего Р

  var breakerP = document.createElement("P");
  breakerP.classList.add('breaker_p');
  breakerP.innerHTML = '<u>' + 'Ведите данные для ЩУЭ с отходящей линией: ' + '<b>' + pairOfPhaseAndAmpere.split(' - ')[0] + 'Ф ' + pairOfPhaseAndAmpere.split(' - ')[1] + 'A' + '</b>' + '</u>'; // создание Р для радио

  var radioP = document.createElement("P");
  radioP.classList.add('radio_p');
  radioP.innerHTML = 'Выберите тип вводного аппарата:'; // создание лейбла для кнопки радио №1

  var radioLabel1 = document.createElement("LABEL");
  radioLabel1.setAttribute('for', 'breaker-radio-' + index + '-1');
  radioLabel1.innerHTML = 'рубильник' + '<br>'; // создание кнопки радио №1

  var breakerRadio1 = document.createElement("INPUT");
  breakerRadio1.setAttribute('name', 'breaker-radio-' + index);
  breakerRadio1.setAttribute('id', 'breaker-radio-' + index + '-1');
  breakerRadio1.setAttribute('type', 'radio'); // создание лейбла для кнопки радио №2

  var radioLabel2 = document.createElement("LABEL");
  radioLabel2.setAttribute('for', 'breaker-radio-' + index + '-2');
  radioLabel2.innerHTML = 'автоматический выключатель' + '<br>'; // создание кнопки радио №2	

  var breakerRadio2 = document.createElement("INPUT");
  breakerRadio2.setAttribute('name', 'breaker-radio-' + index);
  breakerRadio2.setAttribute('id', 'breaker-radio-' + index + '-2');
  breakerRadio2.setAttribute('checked', '');
  breakerRadio2.setAttribute('type', 'radio'); // создание лейбла для кнопки радио №3

  var radioLabel3 = document.createElement("LABEL");
  radioLabel3.setAttribute('for', 'breaker-radio-' + index + '-3');
  radioLabel3.innerHTML = 'выключатель нагрузки'; // создание кнопки радио №3	

  var breakerRadio3 = document.createElement("INPUT");
  breakerRadio3.setAttribute('name', 'breaker-radio-' + index);
  breakerRadio3.setAttribute('id', 'breaker-radio-' + index + '-3');
  breakerRadio3.setAttribute('type', 'radio'); // создание Р для инпута вводного аппарата

  var inputBreakerP = document.createElement("P");
  inputBreakerP.classList.add('input-p');
  inputBreakerP.innerHTML = 'Марка, Iном. вводного аппарата:'; // создание инпута вводного аппарата

  var inputBreaker = document.createElement("INPUT");
  inputBreaker.setAttribute('id', 'input-breaker' + index);
  inputBreaker.setAttribute('size', '20');
  inputBreaker.setAttribute('type', 'text');
  inputBreaker.setAttribute('value', inputBreakerDefault); // создание Р для инпута отходящего АВ

  var outBreakerP = document.createElement("P");
  outBreakerP.classList.add('input-p');
  outBreakerP.innerHTML = 'Марка, Iном. АВ на отходящих линиях:'; // создание инпута отходящего АВ

  var outBreaker = document.createElement("INPUT");
  outBreaker.setAttribute('id', 'out-breaker' + index);
  outBreaker.setAttribute('size', '20');
  outBreaker.setAttribute('type', 'text');
  outBreaker.setAttribute('value', outBreakerDefault); // outBreakerrDefaultValue обявляется ниже в цикле
  // вставляем

  breakerDiv.append(breakerP, radioP); // вставляем кнопки и лейблы

  breakerDiv.append(breakerRadio1, radioLabel1, breakerRadio2, radioLabel2, breakerRadio3, radioLabel3); // вставляем инпуты

  breakerDiv.append(inputBreakerP, inputBreaker, outBreakerP, outBreaker);
  brakersWrapper.append(breakerDiv);
}

function addBreakersChoise(arr) {
  for (var i = 0; i < arr.length; i++) {
    var breakersAmpersValues = [10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125];
    var phase = arr[i].split(' - ')[0];
    var ampereOut = arr[i].split(' - ')[1];
    var ampereIn = breakersAmpersValues[breakersAmpersValues.indexOf(+ampereOut) + 1];
    var outBreakerType = Object(_breaker_default_type__WEBPACK_IMPORTED_MODULE_0__["default"])(+ampereOut);
    var inputBreakerType = Object(_breaker_default_type__WEBPACK_IMPORTED_MODULE_0__["default"])(ampereIn); // значения по умочанию для инпутов ввода выключателей

    var outBreakerrDefaultValue = "".concat(outBreakerType, " ").concat(phase, "P C").concat(ampereOut);
    var inputBreakerDefaultValue = "".concat(inputBreakerType, " ").concat(phase, "P C").concat(ampereIn);
    createBreakerWrapper(arr[i], i, outBreakerrDefaultValue, inputBreakerDefaultValue);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addBreakersChoise);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/add-sum-sem.js":
/*!**********************************************************!*\
  !*** ./src/layout/scripts/for-order-list/add-sum-sem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addSumSem(arrOfSem) {
  var tbody = document.getElementById('info_table').getElementsByTagName('TBODY')[0]; //Создаем строку таблицы и добавляем ее		

  var row1 = document.createElement("TR");
  var row2 = document.createElement("TR");
  tbody.append(row1, row2); // Создаем ячейки в вышесозданной строке
  // и добавляем тх

  var td1_1 = document.createElement("TD");
  td1_1.classList.add('last_td');
  var td1_2 = document.createElement("TD");
  td1_2.classList.add('last_td');
  var td1_3 = document.createElement("TD");
  td1_3.classList.add('last_td');
  var td2_1 = document.createElement("TD");
  td2_1.classList.add('last_td');
  var td2_2 = document.createElement("TD");
  td2_2.classList.add('last_td');
  var td2_3 = document.createElement("TD");
  td2_3.classList.add('last_td');
  row1.append(td1_1, td1_2, td1_3);
  row2.append(td2_1, td2_2, td2_3);
  var sumOfCount = 0;
  var sumOfSem = 0;

  for (var i = 0; i < arrOfSem.length; i += 1) {
    sumOfSem += arrOfSem[i].countOfSEM;
    sumOfCount += arrOfSem[i].countOfSEM * arrOfSem[i].counterCountInSEM;
  } // Наполняем ячейки


  td1_2.innerHTML = 'Всего счетчиков:';
  td1_3.innerHTML = sumOfCount;
  td2_2.innerHTML = 'Всего щитков:';
  td2_3.innerHTML = sumOfSem;
}

/* harmony default export */ __webpack_exports__["default"] = (addSumSem);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/breaker-default-type.js":
/*!*******************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/breaker-default-type.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function breakerDefaultType(value) {
  var breakerType;

  if (value <= 63) {
    breakerType = 'ВА-47-29';
  } else if (value <= 100) {
    breakerType = 'ВА-47-100';
  } else if (value = 125) {
    breakerType = 'ВА-47-150';
  } else {
    breakerType = '';
  }

  return breakerType;
}

/* harmony default export */ __webpack_exports__["default"] = (breakerDefaultType);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/contacts-table.js":
/*!*************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/contacts-table.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function contactsTable(sem, dataOfProject) {
  // создание верхней таблицы опросного
  var descriptTable = document.createElement("TABLE");
  descriptTable.classList.add('descript_table');
  var tableBody = document.createElement("TBODY");
  descriptTable.append(tableBody); // строки

  var row1 = document.createElement("TR");
  var row2 = document.createElement("TR");
  var row3 = document.createElement("TR");
  var row4 = document.createElement("TR");
  var row5 = document.createElement("TR");
  var row6 = document.createElement("TR"); // место где будут строки

  tableBody.append(row1, row2, row3, row4, row5, row6); // ячейки

  var td1_1 = document.createElement("TD");
  var td1_2 = document.createElement("TD");
  var td2_1 = document.createElement("TD");
  var td2_2 = document.createElement("TD");
  var td3_1 = document.createElement("TD");
  var td3_2 = document.createElement("TD");
  var td4_1 = document.createElement("TD");
  var td4_2 = document.createElement("TD");
  var td5_1 = document.createElement("TD");
  var td5_2 = document.createElement("TD");
  var td6_1 = document.createElement("TD");
  var td6_2 = document.createElement("TD"); // места ячеек

  row1.append(td1_1, td1_2);
  row2.append(td2_1, td2_2);
  row3.append(td3_1, td3_2);
  row4.append(td4_1, td4_2);
  row5.append(td5_1, td5_2);
  row6.append(td6_1, td6_2); // Наполняем ячейки

  td1_1.textContent = 'Наименование организации';
  td2_1.textContent = 'Представитель заказчика';
  td3_1.textContent = 'Контактный телефон';
  td4_1.textContent = 'Тип щитка';
  td4_2.textContent = sem.SEMType;
  td5_1.textContent = 'Количество щитков';
  td5_2.textContent = "\u0421\u043C. ".concat(dataOfProject.cipher, "-103-70-\u0410\u0423\u042D.\u0421\u041E");
  td6_1.textContent = 'Наименование объекта';
  return descriptTable;
}

/* harmony default export */ __webpack_exports__["default"] = (contactsTable);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/create-info-table.js":
/*!****************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/create-info-table.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createInfoTable = function createInfoTable(sem) {
  //Создаем строку таблицы	
  var row = document.createElement("TR"); // Создаем ячейки в вышесозданной строке

  var td1 = document.createElement("TD");
  var td2 = document.createElement("TD");
  var td3 = document.createElement("TD"); // Наполняем ячейки

  td1.textContent = sem.SEMType;

  if (sem.counterCountInSEM === 1) {
    td2.textContent = "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ".concat(sem.installation, ". ").concat(sem.description, " (").concat(sem.breaker1Value, " \u0410)");
  } else if (sem.counterCountInSEM === 2) {
    td2.textContent = "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ".concat(sem.installation, ". ").concat(sem.description, " (").concat(sem.breaker1Value, " \u0410; ").concat(sem.breaker2Value, " \u0410)");
  }

  td3.textContent = sem.countOfSEM;
  row.append(td1, td2, td3);
  return row;
};

/* harmony default export */ __webpack_exports__["default"] = (createInfoTable);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/create-order-table.js":
/*!*****************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/create-order-table.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createOrderTable(index) {
  var orderTable = document.createElement("TABLE");
  orderTable.classList.add('order_table');
  var tBody = document.createElement("TBODY");
  orderTable.appendChild(tBody); // строки

  for (var i = 0; i < 12; i += 1) {
    var row = document.createElement("TR"); // row.classList.add('order_row' + index + '_' + i);

    row.classList.add('order_row', 'order_row' + index + '_' + i);
    tBody.append(row);

    for (var j = 0; j <= 2; j += 1) {
      var td = document.createElement("TD"); // td.classList.add('td' + i + '_' + j);

      td.classList.add('td' + index + '_' + i + '_' + j);
      td.textContent = '';
      row.appendChild(td);
    }
  }

  return orderTable;
}

/* harmony default export */ __webpack_exports__["default"] = (createOrderTable);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/fill-order-table.js":
/*!***************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/fill-order-table.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function findTd(list, row, column) {
  var elem = document.querySelector('.td' + list + '_' + row + '_' + column);
  return elem;
}

function createSquare(flag1, flag2, text) {
  var wrapper = document.createElement('DIV');
  var square = document.createElement('DIV');
  square.classList.add('square');
  var para = document.createElement('P');
  para.textContent = text;

  if (flag1 === 1) {
    wrapper.classList.add('inline_block');
  }

  if (flag2 === 1) {
    para.classList.add('inline_block');
  }

  wrapper.append(square, para);
  return wrapper;
}

function createP(text) {
  var para = document.createElement('P');
  para.textContent = text;
  return para;
}

function fillOrderTable(sem, index, arrayOfPhasesAndAmperes) {
  // Наполняем ячейки
  var td1_1 = findTd(index, 0, 0);
  td1_1.textContent = '№';
  var td1_2 = findTd(index, 0, 1);
  td1_2.textContent = 'Запрашиваемые данные';
  var td1_3 = findTd(index, 0, 2);
  td1_3.textContent = 'Ответ заказчика';

  for (var i = 1; i < 12; i += 1) {
    var td1 = findTd(index, i, 0);
    td1.textContent = i;
  } // Тип исполнения корпуса


  var td2_2 = findTd(index, 1, 1);
  td2_2.textContent = 'Тип исполнения корпуса';
  var td2_3 = findTd(index, 1, 2);
  td2_3.append(createSquare(1, 1, 'металлический'), createSquare(1, 1, 'пластмассовый'));

  if (sem.SEMType.split('-')[1] === '1') {
    td2_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[1] === '2') {
    td2_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } // Тип щитка


  var td3_2 = findTd(index, 2, 1);
  td3_2.textContent = 'Тип щитка';
  var td3_3 = findTd(index, 2, 2);
  td3_3.append(createSquare(0, 0, 'однофазный'), createSquare(0, 0, 'трехфазный'), createSquare(0, 0, 'однофазный и трехфазный'));

  if (sem.SEMType.split('-')[2] === '1') {
    td3_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[2] === '2') {
    td3_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[2] === '3') {
    td3_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } // Тип ввода


  var td4_2 = findTd(index, 3, 1);
  td4_2.textContent = 'Тип ввода';
  var td4_3 = findTd(index, 3, 2);
  td4_3.append(createSquare(1, 1, 'воздушный'), createSquare(1, 1, 'кабельный'));

  if (sem.SEMType.split('-')[4] === '1' || sem.SEMType.split('-')[4] === '4') {
    td4_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '2') {
    td4_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } // Тип вводного аппарата


  var td5_2 = findTd(index, 4, 1);
  td5_2.textContent = 'Тип вводного аппарата';
  var td5_3 = findTd(index, 4, 2);
  td5_3.append(createSquare(0, 0, 'рубильник'), createSquare(0, 0, 'автоматический выключатель'), createSquare(0, 0, 'выключатель нагрузки'));
  var indexOfbreaker1 = arrayOfPhasesAndAmperes.indexOf(sem.outBreaker1);
  var indexOfbreaker2 = arrayOfPhasesAndAmperes.indexOf(sem.outBreaker2);
  var breakerRadioChoice1_1 = document.getElementById("breaker-radio-".concat(indexOfbreaker1, "-1"));
  var breakerRadioChoice1_2 = document.getElementById("breaker-radio-".concat(indexOfbreaker1, "-2"));
  var breakerRadioChoice1_3 = document.getElementById("breaker-radio-".concat(indexOfbreaker1, "-3"));
  var breakerRadioChoice2_1 = document.getElementById("breaker-radio-".concat(indexOfbreaker2, "-1"));
  var breakerRadioChoice2_2 = document.getElementById("breaker-radio-".concat(indexOfbreaker2, "-2"));
  var breakerRadioChoice2_3 = document.getElementById("breaker-radio-".concat(indexOfbreaker2, "-3"));

  if (breakerRadioChoice1_1.checked) {
    td5_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (breakerRadioChoice1_2.checked) {
    td5_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (breakerRadioChoice1_3.checked) {
    td5_3.childNodes[2].childNodes[0].classList.add('square_checked');
  }

  if (breakerRadioChoice2_1 !== null && breakerRadioChoice2_1.checked) {
    td5_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (breakerRadioChoice2_2 !== null && breakerRadioChoice2_2.checked) {
    td5_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (breakerRadioChoice2_3 !== null && breakerRadioChoice2_3.checked) {
    td5_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } // Марка, Iном АВ


  var td6_2 = findTd(index, 5, 1);
  td6_2.textContent = 'Марка, Iном вводного аппарата';
  var td6_3 = findTd(index, 5, 2);
  var inputBreaker1 = document.getElementById("input-breaker".concat(indexOfbreaker1));
  var inputBreaker2 = document.getElementById("input-breaker".concat(indexOfbreaker2));

  if (sem.counterCountInSEM === 1) {
    td6_3.textContent = inputBreaker1.value;
  } else if (sem.counterCountInSEM === 2) {
    td6_3.innerHTML = inputBreaker1.value + '<br>' + inputBreaker2.value;
  } // Тип отходящей линии


  var td7_2 = findTd(index, 6, 1);
  td7_2.textContent = 'Тип отходящей линии';
  var td7_3 = findTd(index, 6, 2);
  td7_3.append(createSquare(1, 0, 'воздушная'), createSquare(1, 0, '3ф воздушная, 1ф кабельная'), createSquare(1, 0, 'кабельная'), createSquare(1, 0, '3ф кабельная, 1ф воздушная'), createSquare(1, 0, '1 кабельная, 1 воздушная'));

  if (sem.inputFromSem.toLowerCase() === 'в' || sem.inputFromSem.toLowerCase() === 'вв') {
    td7_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem.toLowerCase() === '1фк') {
    td7_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem.toLowerCase() === 'к' || sem.inputFromSem.toLowerCase() === 'кк') {
    td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem.toLowerCase() === '3фк') {
    td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem.toLowerCase() === 'вк' || sem.inputFromSem.toLowerCase() === 'кв') {
    td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else {
    alert("\u0447\u0442\u043E-\u0442\u043E \u043D\u0435 \u0442\u043E \u0441 \u0442\u0438\u043F\u043E\u043C \u043E\u0442\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u0432 ".concat(sem, ". \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 ").concat(sem.inputFromSem));
  } // Марка, Iном. АВ


  var td8_2 = findTd(index, 7, 1);
  td8_2.textContent = 'Марка, Iном. автоматического выключателя на отходящих линиях';
  var td8_3 = findTd(index, 7, 2);
  var outBreaker1 = document.getElementById("out-breaker".concat(indexOfbreaker1));
  var outBreaker2 = document.getElementById("out-breaker".concat(indexOfbreaker2));

  if (sem.counterCountInSEM === 1) {
    td8_3.textContent = outBreaker1.value;
  } else if (sem.counterCountInSEM === 2) {
    td8_3.innerHTML = outBreaker1.value + '<br>' + outBreaker2.value;
  } // Количество счетчиков	


  var td9_2 = findTd(index, 8, 1);
  td9_2.textContent = 'Количество счетчиков';
  var td9_3 = findTd(index, 8, 2);
  td9_3.append(createSquare(1, 1, '1'), createSquare(1, 1, '2'));

  if (sem.counterCountInSEM === 1) {
    td9_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.counterCountInSEM === 2) {
    td9_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } // Марка счетчика


  var td10_2 = findTd(index, 9, 1);
  td10_2.textContent = 'Марка счетчика';
  var td10_3 = findTd(index, 9, 2);
  var counter1f = document.getElementById('counter-1f');
  var counter3f = document.getElementById('counter-3f');

  if (sem.counterCountInSEM === 1 && sem.phase1Value === 1) {
    td10_3.textContent = counter1f.value;
  } else if (sem.counterCountInSEM === 1 && sem.phase1Value === 3) {
    td10_3.textContent = counter3f.value;
  } else if (sem.counterCountInSEM === 2 && sem.phase1Value === 1 && sem.phase2Value === 1) {
    // td10_3.innerHTML = counter1f.value + '<br>' + counter1f.value;
    td10_3.textContent = counter1f.value;
  } else if (sem.counterCountInSEM === 2 && sem.phase1Value === 3 && sem.phase2Value === 3) {
    // td10_3.innerHTML = counter2f.value + '<br>' + counter2f.value;
    td10_3.textContent = counter3f.value;
  } else if (sem.counterCountInSEM === 2 && sem.phase1Value === 3 && sem.phase2Value === 1) {
    td10_3.innerHTML = counter3f.value + '<br>' + counter1f.value;
  } else {
    alert("\u0447\u0442\u043E-\u0442\u043E \u043D\u0435 \u0442\u043E \u0441 \u0444\u0430\u0437\u0430\u043C\u0438 \u0443 \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u0430 \u0432 ".concat(sem.SEMType));
  } // Способ установки


  var td11_2 = findTd(index, 10, 1);
  td11_2.textContent = 'Способ установки щитка';
  var td11_3 = findTd(index, 10, 2);
  td11_3.append(createSquare(0, 0, 'на железобетонной опоре'), createSquare(0, 0, 'на выносной стойке'), createSquare(0, 0, 'на внешней стене здания'), createSquare(0, 0, 'на железобетонной приставке ПТ43-2'));

  if (sem.SEMType.split('-')[4] === '1') {
    td11_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '2') {
    td11_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '3') {
    td11_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '4') {
    td11_3.childNodes[3].childNodes[0].classList.add('square_checked');
  } // Арматура для установки


  var td12_2 = findTd(index, 11, 1);
  td12_2.textContent = 'Арматура для установки и крепления щитка (в зависимости от способа установки)';
  var td12_3 = findTd(index, 11, 2);
  td12_3.append(createP('-установка на железобетонной опоре:'), createSquare(0, 0, 'к опоре СВ-95'), createSquare(0, 0, 'к опоре СВ-110'), createP('-установка на выносной стойке:'), createSquare(0, 0, 'к выносной стойке'), createP('-установка на внешней стене здания:'), createSquare(0, 0, 'к внешней стене здания'), createP('-установка на железобетонной приставке ПТ43-2:'), createSquare(0, 0, 'к приставке ПТ43-2 (только воздушный ввод)'));

  if (sem.SEMType.split('-')[4] === '1' && sem.pillarType.toLowerCase() == 'св-95') {
    td12_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '1' && sem.pillarType.toLowerCase() == 'св-110') {
    td12_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '2') {
    td12_3.childNodes[4].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '3') {
    td12_3.childNodes[6].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '4') {
    td12_3.childNodes[8].childNodes[0].classList.add('square_checked');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (fillOrderTable);

/***/ }),

/***/ "./src/layout/scripts/for-order-list/legend-of-order-list.js":
/*!*******************************************************************!*\
  !*** ./src/layout/scripts/for-order-list/legend-of-order-list.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createLegendOfOrderList() {
  var legend = document.createElement("LEGEND");
  legend.classList.add('legend_table');
  legend.innerHTML = 'ОПРОСНЫЙ ЛИСТ <br> на изготовление <br> щитка учета электроэнергии выносного типа';
  return legend;
}

/* harmony default export */ __webpack_exports__["default"] = (createLegendOfOrderList);

/***/ }),

/***/ "./src/layout/scripts/order-list.js":
/*!******************************************!*\
  !*** ./src/layout/scripts/order-list.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_order_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/order-list.css */ "./src/layout/css/order-list.css");
/* harmony import */ var _css_order_list_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_order_list_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/main-object-collect */ "./src/layout/scripts/data/main-object-collect.js");
/* harmony import */ var _for_order_list_add_breakers_choise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./for-order-list/add-breakers-choise */ "./src/layout/scripts/for-order-list/add-breakers-choise.js");
/* harmony import */ var _for_order_list_create_info_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./for-order-list/create-info-table */ "./src/layout/scripts/for-order-list/create-info-table.js");
/* harmony import */ var _for_order_list_contacts_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./for-order-list/contacts-table */ "./src/layout/scripts/for-order-list/contacts-table.js");
/* harmony import */ var _for_order_list_legend_of_order_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./for-order-list/legend-of-order-list */ "./src/layout/scripts/for-order-list/legend-of-order-list.js");
/* harmony import */ var _for_order_list_create_order_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./for-order-list/create-order-table */ "./src/layout/scripts/for-order-list/create-order-table.js");
/* harmony import */ var _for_order_list_fill_order_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./for-order-list/fill-order-table */ "./src/layout/scripts/for-order-list/fill-order-table.js");
/* harmony import */ var _cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cipher/add-cipher-table */ "./src/layout/scripts/cipher/add-cipher-table.js");
/* harmony import */ var _cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cipher/add-aside-table */ "./src/layout/scripts/cipher/add-aside-table.js");
/* harmony import */ var _for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./for-order-list/add-sum-sem */ "./src/layout/scripts/for-order-list/add-sum-sem.js");











var userInput = localStorage.getItem("userInput");
userInput = Object(_data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__["default"])(userInput);
console.log(userInput);
var projectData = JSON.parse(localStorage.getItem("projectData"));
console.log(projectData);
var arrCounterBreakers = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = userInput[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var elem = _step.value;

    if (arrCounterBreakers.indexOf(elem.outBreaker1) === -1) {
      arrCounterBreakers.push(elem.outBreaker1);
    }

    if (elem.outBreaker2 !== null && arrCounterBreakers.indexOf(elem.outBreaker2) === -1) {
      console.log(arrCounterBreakers.indexOf(elem.outBreaker2), elem.outBreaker2);
      arrCounterBreakers.push(elem.outBreaker2);
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

arrCounterBreakers.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(arrCounterBreakers);
Object(_for_order_list_add_breakers_choise__WEBPACK_IMPORTED_MODULE_2__["default"])(arrCounterBreakers);
var getOrderListsButton = document.getElementById('get-order-lists');

getOrderListsButton.onclick = function (e) {
  e.preventDefault();
  var breakersWrapper = document.getElementById('counters-input');
  breakersWrapper.classList.add('hidden');

  for (var i = 0; i < userInput.length; i += 1) {
    var countersAndBreakersWrapper = document.getElementById('counters_n_breakers_container');
    countersAndBreakersWrapper.classList.add('hide_counters_n_breakers_container'); // add main table

    var infoTableWrapper = document.getElementById('info_table_wrapper');
    infoTableWrapper.classList.add('show_info_table_wrapper');
    var infoTable = document.querySelector('.info_table_body');
    var rowForInfoTable = Object(_for_order_list_create_info_table__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]);
    infoTable.append(rowForInfoTable); // add wrapper

    var orderWrapper = document.getElementById('order_sheet');
    var h6_break = document.createElement("H6");
    h6_break.classList.add('h6_break');
    var a4div = document.createElement("DIV");
    a4div.classList.add('a4_div');
    var a4div_frame = document.createElement("DIV");
    a4div_frame.classList.add('a4_div_frame');
    orderWrapper.append(h6_break, a4div);
    a4div.append(a4div_frame); // add Legend in wrapper

    a4div_frame.append(Object(_for_order_list_legend_of_order_list__WEBPACK_IMPORTED_MODULE_5__["default"])()); // add description table in wrapper

    a4div_frame.append(Object(_for_order_list_contacts_table__WEBPACK_IMPORTED_MODULE_4__["default"])(userInput[i], projectData)); // add order table in wrapper

    a4div_frame.append(Object(_for_order_list_create_order_table__WEBPACK_IMPORTED_MODULE_6__["default"])(i)); // add note in wrapper

    var note = document.createElement("P");
    note.classList.add('note');
    a4div_frame.append(note);
    note.textContent = 'Дополнение: Щиток выносного учета должен соответствовать требованиям СТП 33243.20.262-17.'; // add cipher in wrapper

    a4div_frame.append(Object(_cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_8__["default"])(projectData, userInput[i], i, userInput)); // add aside frame in wrapper

    a4div_frame.append(Object(_cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_9__["default"])());
  }

  for (var _i = 0; _i < userInput.length; _i += 1) {
    Object(_for_order_list_fill_order_table__WEBPACK_IMPORTED_MODULE_7__["default"])(userInput[_i], _i, arrCounterBreakers);
  } // add counters sum


  Object(_for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_10__["default"])(userInput);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvb3JkZXItbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9mb250cy9HT1NUIDIuMzA0LTgxIHR5cGUgQS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvb3JkZXItbGlzdC5jc3M/MWM2YiIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1hc2lkZS10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1jaXBoZXItdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtcGFnZS1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvYWRkLWJyZWFrZXJzLWNob2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvYWRkLXN1bS1zZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2JyZWFrZXItZGVmYXVsdC10eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itb3JkZXItbGlzdC9jb250YWN0cy10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvY3JlYXRlLWluZm8tdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2NyZWF0ZS1vcmRlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvZmlsbC1vcmRlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvbGVnZW5kLW9mLW9yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL29yZGVyLWxpc3QuanMiXSwibmFtZXMiOlsiYWRkQXNpZGVUYWJsZSIsImFzaWRlX2ZyYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicm93MSIsInJvdzIiLCJyb3czIiwiYXBwZW5kIiwidGQxXzEiLCJzcGFuX3RkMV8xIiwidGQxXzIiLCJ0ZDJfMSIsInNwYW5fdGQyXzEiLCJ0ZDJfMiIsInRkM18xIiwic3Bhbl90ZDNfMSIsInRkM18yIiwiaW5uZXJIVE1MIiwiYWRkQ2lwaGVyVGFibGUiLCJwcm9qZWN0Iiwic2VtIiwiaW5kZXgiLCJtYWluT2JqIiwiY29uc29sZSIsImxvZyIsItGBaXBoZXJUYWJsZSIsInJvd18xIiwicm93XzIiLCJyb3dfMyIsInJvd180Iiwicm93XzUiLCJyb3dfNiIsInJvd183Iiwicm93XzgiLCJyb3dfOSIsInJvd18xMCIsInJvd18xMSIsInRkMV8zIiwidGQxXzQiLCJ0ZDFfNSIsInRkMV82IiwidGQxXzciLCJzZXRBdHRyaWJ1dGUiLCJ0ZDJfMyIsInRkMl80IiwidGQyXzUiLCJ0ZDJfNiIsInRkM18zIiwidGQzXzQiLCJ0ZDNfNSIsInRkM182IiwidGQzXzciLCJ0ZDRfMSIsInRkNF8yIiwidGQ0XzMiLCJ0ZDRfNCIsInRkNF81IiwidGQ0XzYiLCJ0ZDVfMSIsInRkNV8yIiwidGQ1XzMiLCJ0ZDVfNCIsInRkNV81IiwidGQ1XzYiLCJ0ZDZfMSIsInRkNl8yIiwidGQ2XzMiLCJ0ZDZfNCIsInRkNl81IiwidGQ2XzYiLCJ0ZDZfNyIsInRkNl84IiwidGQ3XzEiLCJ0ZDdfMiIsInRkN18zIiwidGQ3XzQiLCJ0ZDdfNSIsInRkN182IiwidGQ3XzciLCJ0ZDhfMSIsInRkOF8yIiwidGQ4XzMiLCJ0ZDhfNCIsInRkOV8xIiwidGQ5XzIiLCJ0ZDlfMyIsInRkOV80IiwidGQ5XzUiLCJ0ZDlfNiIsInRkMTBfMSIsInRkMTBfMiIsInRkMTBfMyIsInRkMTBfNCIsInRkMTFfMSIsInRkMTFfMiIsInRkMTFfMyIsInRkMTFfNCIsImNpcGhlciIsIm5hbWVPZlByb2plY3QiLCJuYW1lT2ZCb3NzIiwic3BsaXQiLCJkIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsInRvZGF5Iiwic3RhZ2VPZlByb2plY3QiLCJ0ZXh0Q29udGVudCIsImFkZFBhZ2VOdW1iZXIiLCJpc0Jvc3NTaWduYXR1cmUiLCJib3NzU2lnbmF0dXJlIiwiYm9zc1NpZ25hdHVyZTIiLCJmdWxsRGVjcmlwdGlvbiIsInBfYmVzcCIsImxvZ29fYmVzcCIsIm5hbWVPZkRldmVsb3BlciIsImlzRGV2ZWxvcGVyU2lnbmF0dXJlIiwiZGV2ZWxvcGVyU2lnbmF0dXJlIiwiYXJyT2ZTZW1zIiwiaW5wdXRfcGFnZSIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYWdlIiwiU0VNVHlwZSIsInByZXZpb3VzUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJtYWluT2JqZWN0Q29sbGVjdCIsInN0ciIsImFycmF5T2ZVc2VySW5wdXQiLCJyZXN1bHRBcnJheSIsImxlZ2VuZEFycmF5IiwiU0VNIiwiYXJyIiwiY291bnRPZlNFTSIsImluZGV4T2YiLCJicmVha2VyMVZhbHVlIiwiYnJlYWtlcjJWYWx1ZSIsImNvdW50ZXJDb3VudEluU0VNIiwibGVuZ3RoIiwiaW5wdXRGcm9tU2VtIiwicGlsbGFyVHlwZSIsInBoYXNlMVZhbHVlIiwicGhhc2UyVmFsdWUiLCJvdXRCcmVha2VyMSIsIm91dEJyZWFrZXIyIiwidG9Mb3dlckNhc2UiLCJkZXNjcmlwdGlvbiIsImFsZXJ0IiwiaW5zdGFsbGF0aW9uIiwiaSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVCcmVha2VyV3JhcHBlciIsInBhaXJPZlBoYXNlQW5kQW1wZXJlIiwib3V0QnJlYWtlckRlZmF1bHQiLCJpbnB1dEJyZWFrZXJEZWZhdWx0IiwiYnJha2Vyc1dyYXBwZXIiLCJicmVha2VyRGl2IiwiYnJlYWtlclAiLCJyYWRpb1AiLCJyYWRpb0xhYmVsMSIsImJyZWFrZXJSYWRpbzEiLCJyYWRpb0xhYmVsMiIsImJyZWFrZXJSYWRpbzIiLCJyYWRpb0xhYmVsMyIsImJyZWFrZXJSYWRpbzMiLCJpbnB1dEJyZWFrZXJQIiwiaW5wdXRCcmVha2VyIiwib3V0QnJlYWtlclAiLCJvdXRCcmVha2VyIiwiYWRkQnJlYWtlcnNDaG9pc2UiLCJicmVha2Vyc0FtcGVyc1ZhbHVlcyIsInBoYXNlIiwiYW1wZXJlT3V0IiwiYW1wZXJlSW4iLCJvdXRCcmVha2VyVHlwZSIsImJyZWFrZXJEZWZhdWx0VHlwZSIsImlucHV0QnJlYWtlclR5cGUiLCJvdXRCcmVha2VyckRlZmF1bHRWYWx1ZSIsImlucHV0QnJlYWtlckRlZmF1bHRWYWx1ZSIsImFkZFN1bVNlbSIsImFyck9mU2VtIiwidGJvZHkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN1bU9mQ291bnQiLCJzdW1PZlNlbSIsImJyZWFrZXJUeXBlIiwiY29udGFjdHNUYWJsZSIsImRhdGFPZlByb2plY3QiLCJkZXNjcmlwdFRhYmxlIiwidGFibGVCb2R5Iiwicm93NCIsInJvdzUiLCJyb3c2IiwiY3JlYXRlSW5mb1RhYmxlIiwicm93IiwidGQxIiwidGQyIiwidGQzIiwiY3JlYXRlT3JkZXJUYWJsZSIsIm9yZGVyVGFibGUiLCJ0Qm9keSIsImoiLCJ0ZCIsImZpbmRUZCIsImxpc3QiLCJjb2x1bW4iLCJlbGVtIiwiY3JlYXRlU3F1YXJlIiwiZmxhZzEiLCJmbGFnMiIsInRleHQiLCJ3cmFwcGVyIiwic3F1YXJlIiwicGFyYSIsImNyZWF0ZVAiLCJmaWxsT3JkZXJUYWJsZSIsImFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzIiwiY2hpbGROb2RlcyIsImluZGV4T2ZicmVha2VyMSIsImluZGV4T2ZicmVha2VyMiIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMSIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMiIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMyIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMSIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMiIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMyIsImNoZWNrZWQiLCJpbnB1dEJyZWFrZXIxIiwiaW5wdXRCcmVha2VyMiIsImNvdW50ZXIxZiIsImNvdW50ZXIzZiIsInRkMTJfMiIsInRkMTJfMyIsImNyZWF0ZUxlZ2VuZE9mT3JkZXJMaXN0IiwibGVnZW5kIiwidXNlcklucHV0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2plY3REYXRhIiwiSlNPTiIsInBhcnNlIiwiYXJyQ291bnRlckJyZWFrZXJzIiwiZ2V0T3JkZXJMaXN0c0J1dHRvbiIsIm9uY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJicmVha2Vyc1dyYXBwZXIiLCJjb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlciIsImluZm9UYWJsZVdyYXBwZXIiLCJpbmZvVGFibGUiLCJyb3dGb3JJbmZvVGFibGUiLCJvcmRlcldyYXBwZXIiLCJoNl9icmVhayIsImE0ZGl2IiwiYTRkaXZfZnJhbWUiLCJub3RlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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S0FBSyxHQUFHL0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNK0QsS0FBSyxHQUFHaEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNZ0UsS0FBSyxHQUFHakUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFFQSxNQUFNaUUsS0FBSyxHQUFHbEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQWlFLE9BQUssQ0FBQ3RCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHbkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQWtFLE9BQUssQ0FBQ3ZCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNd0IsS0FBSyxHQUFHcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNb0UsS0FBSyxHQUFHckUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNcUUsS0FBSyxHQUFHdEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXFFLE9BQUssQ0FBQzFCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNMkIsS0FBSyxHQUFHdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNdUUsS0FBSyxHQUFHeEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNd0UsS0FBSyxHQUFHekUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFFQSxNQUFNeUUsS0FBSyxHQUFHMUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXlFLE9BQUssQ0FBQzlCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNK0IsS0FBSyxHQUFHM0UsUUFBUSxDQUFDQyxh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R0FBR3lGLFNBQVMsQ0FBQ3BHLE1BQTlCLEVBQXNDVyxFQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDNUNxRSxvRkFBYyxDQUFDb0IsU0FBUyxDQUFDekYsRUFBRCxDQUFWLEVBQWVBLEVBQWYsRUFBa0IrRixrQkFBbEIsQ0FBZDtBQUNELEdBckR3QyxDQXVEekM7OztBQUNBOUQsOEVBQVMsQ0FBQ3dELFNBQUQsQ0FBVDtBQUdELENBM0RELEMiLCJmaWxlIjoib3JkZXJMaXN0RW50cnkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGF5b3V0L3NjcmlwdHMvb3JkZXItbGlzdC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi9mb250cy9HT1NUIDIuMzA0LTgxIHR5cGUgQS50dGZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQSc7IFxcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXHJcXG59XFxyXFxuQG1lZGlhIHByaW50IHtcXHJcXG4gIC8qICosXFxyXFxuICAqOmJlZm9yZSxcXHJcXG4gICo6YWZ0ZXIsXFxyXFxuICAqOmZpcnN0LWxldHRlcixcXHJcXG4gIHA6Zmlyc3QtbGluZSxcXHJcXG4gIC8qIGRpdjpmaXJzdC1saW5lLCBcXHJcXG4gIGJsb2NrcXVvdGU6Zmlyc3QtbGluZSxcXHJcXG4gIGxpOmZpcnN0LWxpbmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcXHJcXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIH0gKi9cXHJcXG4gIC8qINC30LTQtdGB0Ywg0LHRg9C00YPRgiDRgdGC0LjQu9C4INC00LvRjyDQv9C10YfQsNGC0LggKi9cXHJcXG4gICAgaGVhZGVyLCAubWFpbi10YWJsZSwgZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgfVxcclxcbiAgLmE0X2RpdiB7XFxyXFxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cyAhaW1wb3J0YW50O1xcclxcbiAgICBicmVhay1hZnRlcjogYWx3YXlzICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXHJcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgfSBcXHJcXG5cXHJcXG4gIC7RgWlwaGVyX3RhYmxlIHRke1xcclxcbiAgICBmb250LXNpemU6IDEycHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAu0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcbiAgICBmb250LXNpemU6IDI0cHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3F1YXJlX2NoZWNrZWQge1xcclxcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxyXFxuICAgIGNvbG9yLWFkanVzdDogZXhhY3Q7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAcGFnZSB7XFxyXFxuICAgIHNpemU6IGF1dG87ICBcXHJcXG4gICAgbWFyZ2luOiAwOyAgXFxyXFxuICB9XFxyXFxuLyogaDYge1xcclxcbiAgLXdlYmtpdC1kaXNwbGF5OiBub25lO1xcclxcbn1cXHQgKi9cXHJcXG59XFxyXFxuLyogQG1lZGlhIHByaW50IGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApXFxyXFxuYW5kIChtaW4tcmVzb2x1dGlvbjouMDAxZHBjbSkge1xcclxcbmg2IHtcXHJcXG4gIC13ZWJraXQtZGlzcGxheTogbm9uZTtcXHJcXG59IFxcclxcbn0gKi9cXHJcXG5oNiB7XFxyXFxuaGVpZ2h0OiAxcHg7XFxyXFxufVxcclxcblxcclxcbioge1xcdG1hcmdpbjogMDtcXHJcXG5wYWRkaW5nOiAwO1xcclxcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuZm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQScsIHNhbnMtc2VyaWY7XFxyXFxuY29sb3I6IGJsYWNrOyBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxud2lkdGg6IDIxMG1tO1xcclxcbm1hcmdpbjogYXV0bztcXHJcXG4vKiBiYWNrZ3JvdW5kOiB1cmwoJy9pbWcvMDAwMS5qcGcnKTsgKi9cXHJcXG59XFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxucGFkZGluZzogMTVweCAwO1xcclxcbmJhY2tncm91bmQ6ICM0OEQxQ0M7XFxyXFxuY29sb3I6ICB3aGl0ZTtcXHJcXG59XFxyXFxuLyog0JrQndCe0J/QmtCYICovXFxyXFxuLmJ0biB7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxuaGVpZ2h0OiAzMHB4O1xcclxcbmJhY2tncm91bmQ6ICMwMDhCOEI7XFxyXFxuY29sb3I6IHdoaXRlO1xcclxcbmJvcmRlcjogbm9uZTtcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxubWFyZ2luOiA1cHggMDtcXHJcXG5mb250LXNpemU6IDIxcHg7O1xcclxcbn1cXHJcXG4uYnRuOmxhc3QtY2hpbGR7XFxyXFxubWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcbi5idG46aG92ZXIsIC5pbnB1dC1idG46aG92ZXIge1xcclxcbmJhY2tncm91bmQ6XFx0IzAwOEMzMztcXHJcXG5ib3JkZXI6ICMwYjY2MDMgc29saWQgMnB4O1xcclxcbn1cXHJcXG4vKkRpdiDRgSDQstC10YDRhdC90LXQuSDRgtCw0LHQu9C40YbQvtC5ICovXFxyXFxuLm1haW4tdGFibGUge1xcclxcbmJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuZm9udC1zaXplOiAyMXB4O1xcclxcbn1cXHJcXG4vKtCb0LXQs9C10L3QtNGLKi9cXHJcXG5sZWdlbmR7XFxyXFxucGFkZGluZy10b3A6IDVweDtcXHJcXG59XFxyXFxuLyrQotCQ0JHQm9CY0KbQqywg0L7QsdGJ0LjQtSDRgdCy0L7QudGB0YLQstCwKi9cXHJcXG50YWJsZSB7XFxyXFxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxudGQsIHRoIHtcXHJcXG5ib3JkZXI6IDAuMjVtbSBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG50Ym9keSB0cjpudGgtY2hpbGQoMm4tMSkge1xcclxcbmJhY2tncm91bmQ6ICNlM2Y4ZWE7XFxyXFxufVxcclxcbnRyOm50aC1jaGlsZCgybiksIHRoZWFkIHtcXHJcXG5iYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG4vKtCi0JDQkdCb0JjQptCQINCY0J3QpNCe0KDQnNCQ0KbQmNCYKi9cXHJcXG4uaW5mb190YWJsZSB7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRkLCAuaW5mb190YWJsZSB0aCB7XFxyXFxuYm9yZGVyOiAycHggc29saWQgIzAwOEI4QjtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGQ6bnRoLWNoaWxkKDEpLCAgLmluZm9fdGFibGUgdGQ6bnRoLWNoaWxkKDIpe1xcclxcbnBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0ZDpsYXN0LWNoaWxke1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xcclxcbndpZHRoOiA0MG1tO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0aDpsYXN0LWNoaWxkIHtcXHJcXG53aWR0aDogMTVtbTtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgLmxhc3RfdGQge1xcclxcbmZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuYmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG5ib3JkZXI6IG5vbmU7XFxyXFxudGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxucGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG4vKtCa0J7QndCi0JXQmdCd0JXQoNCrINCU0JvQryDQntCf0KDQntCh0J3Qq9ClKi9cXHJcXG4ub3JkZXJfY29udGFpbmVyIHtcXHJcXG5iYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcbn1cXHJcXG4uYTRfZGl2Om50aC1jaGlsZCg0bi0yKXtcXHJcXG5iYWNrZ3JvdW5kOiAjZDBlY2VjO1xcclxcbn1cXHJcXG4uYTRfZGl2Om50aC1jaGlsZCg0bil7XFxyXFxuYmFja2dyb3VuZDogI2MxZTZjMTtcXHJcXG59XFxyXFxuLmE0X2RpdiB7XFxyXFxuaGVpZ2h0OiAyOTYuNW1tO1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcclxcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmE0X2Rpdl9mcmFtZSB7XFxyXFxuZm9udC1zaXplOiAxMS41cHQ7XFxyXFxuaGVpZ2h0OiAyODdtbTtcXHJcXG53aWR0aDogMTg1bW07XFxyXFxubGVmdDogMjBtbTtcXHJcXG5ib3R0b206IDVtbTtcXHJcXG5ib3JkZXI6IDAuNm1tIHNvbGlkIGJsYWNrO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHRcXHJcXG5kaXNwbGF5OiBibG9jazsgLypkZWwqL1xcclxcbn1cXHJcXG4vKtCe0J/QmNCh0JDQotCV0JvQrNCd0JDQryDQotCQ0JHQm9CY0KbQkCDQntCf0KDQntCh0J3QntCT0J4qL1xcclxcbi5sZWdlbmRfdGFibGUge1xcclxcbndpZHRoOiA1MCU7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbm1hcmdpbi1sZWZ0OiAxODBweDtcXHJcXG59XFxyXFxuLmRlc2NyaXB0X3RhYmxlIHtcXHJcXG5tYXJnaW4tbGVmdDogODBweDtcXHJcXG53aWR0aDogMTQwbW07XFxyXFxufVxcclxcbi5kZXNjcmlwdF90YWJsZSB0ZCB7XFxyXFxucGFkZGluZzogMXB4IDAgMXB4IDVweDtcXHJcXG59XFxyXFxuLyrQotCQ0JHQm9CY0KbQkC3QntCf0KDQntCh0J3Qq9CZKi9cXHJcXG4ub3JkZXJfdGFibGUge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbm1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcbi5vcmRlcl90YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xcclxcbndpZHRoOiAxNW1tO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5ib3JkZXItbGVmdDogbm9uZTtcXHJcXG59XFxyXFxuLyogLm9yZGVyX3RhYmxlIHRkOmxhc3QtY2hpbGR7XFxyXFxuXFxyXFxufSAqL1xcclxcbi5vcmRlcl90YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcclxcbndpZHRoOiA3MG1tO1xcclxcbnRleHQtYWxpZ246IGxlZnQ7XFxyXFxucGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi5vcmRlcl90YWJsZSB0ZDpudGgtY2hpbGQoMykge1xcclxcbnRleHQtYWxpZ246IGxlZnQ7XFxyXFxucGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG4ub3JkZXJfdGFibGUgdHI6bnRoLWNoaWxkKDEpIHRkIHtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuaGVpZ2h0OiAzMHB4O1xcclxcbnBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5zcXVhcmUge1xcclxcbndpZHRoOiAxMnB4O1xcclxcbmhlaWdodDogMTJweDtcXHJcXG5ib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbmZsb2F0OiBsZWZ0O1xcclxcbm1hcmdpbi10b3A6IDJweDtcXHJcXG5tYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG5tYXJnaW4tYm90dG9tOiAxcHg7XFxyXFxufVxcclxcbi5zcXVhcmU6bGFzdC1jaGlsZCB7XFxyXFxubWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG4uc3F1YXJlX2NoZWNrZWQge1xcclxcbmJhY2tncm91bmQ6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8q0YHQstC+0LnRgdGC0LLQsCDQtNC70Y8g0L7Qv9GA0L7RgdC90LjQutCwLCDQs9C00LUg0L3Rg9C20L3QviDQsiDQvtC00L3RgyDRgdGC0YDQvtC60YMg0LrQstCw0LTRgNCw0YLQuNC60Lgg0LLQv9C40YHQsNGC0YwqL1xcclxcbi5pbmxpbmVfYmxvY2sge1xcclxcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG53aWR0aDogNDklO1xcclxcbn1cXHJcXG4vKtCf0YDQuNC80LXRh9Cw0L3QuNC1INC/0L7RgdC70LUg0L7Qv9GA0L7RgdC90L7Qs9C+Ki9cXHJcXG4ubm90ZXtcXHJcXG5wYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi8q0KDQkNCc0JrQkC3QqNCY0KTQoCovXFxyXFxuLtGBaXBoZXJfdGFibGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbmJvdHRvbTogMDtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRke1xcclxcbiAgbGluZS1oZWlnaHQ6IDAuOTU7XFxyXFxuICBmb250LXNpemU6IDEycHQ7O1xcclxcbmJhY2tncm91bmQ6ICNmZmY7XFxyXFxuYm9yZGVyLXJpZ2h0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcbmJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZDpudGgtY2hpbGQoMil7XFxyXFxubGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4vKiBmb250LXNpemU6IDE0cHg7XFx0ICovXFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOm50aC1jaGlsZChuKzcpe1xcclxcbmJvcmRlcjogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQobis1KXtcXHJcXG5ib3JkZXItdG9wOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KXtcXHJcXG5ib3JkZXItYm90dG9tOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcclxcbmJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bGFzdC1jaGlsZCB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKG4rNCl7XFxyXFxuYm9yZGVyLWJvdHRvbTogbm9uZTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDEpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMiksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgzKSB7XFxyXFxudGV4dC1hbGlnbjogbGVmdDtcXHJcXG5wYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDEpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMiksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgzKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg2KSB7XFxyXFxud2lkdGg6IDEwbW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg1KSB7XFxyXFxud2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNSkge1xcclxcbndpZHRoOiA3MG1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDYpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNykge1xcclxcbndpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcbmZvbnQtc2l6ZTogMjRwdDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGR7XFxyXFxuaGVpZ2h0OiA1bW07XFxyXFxufVxcclxcbi5wX2Jlc3B7XFxyXFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbi8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcclxcbn1cXHJcXG4ubG9nb19iZXNwe1xcclxcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5tYXJnaW46IDBweCAwIC0xMnB4IDdweDtcXHRcXHJcXG59XFxyXFxuLyrQn9Cg0K/Qp9CV0Jwg0KTQntCg0JzQoyDQktCd0JXQodCV0J3QmNCvINCh0KfQldCi0KfQmNCa0J7QkiDQmCDQkNCS0KLQntCc0JDQotCe0JIg0J/QntCh0JvQlSDQldCVINCX0JDQn9Ce0JvQndCV0J3QmNCvKi9cXHJcXG4uaGlkZV9jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCf0J7QmtCQ0JfQq9CS0JDQldCcKi9cXHJcXG4uaGlkZV9pbmZvX3RhYmxlX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnNob3dfaW5mb190YWJsZV93cmFwcGVyIHtcXHJcXG5kaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmZvb3Rlcl9zaG93IHtcXHJcXG5kaXNwbGF5OiBibG9jaztcXHRcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG5kaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCk0J7QoNCc0JAg0JLQktCe0JTQkCDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JLQq9Ca0JvQrtCn0JDQotCV0JvQldCZKi9cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIge1xcclxcbmJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuZm9udC1zaXplOiAyMXB4O1xcclxcbm1pbi1oZWlnaHQ6IDgyM3B4O1xcclxcbn1cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgaW5wdXQge1xcclxcbmZvbnQtc2l6ZTogMjFweDtcXHRcXHJcXG59XFxyXFxuLyrQvdGD0LzQtdGA0LDRhtC40Y8g0LvQuNGB0YLQvtCyKi9cXHJcXG4uaW5wdXRfcGFnZXtcXHJcXG5iYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcbmJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuYm9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcbnBhZGRpbmctbGVmdDogNDBweDtcXHJcXG59XFxyXFxuLyrQodCn0JXQotCn0JjQmtCYKi9cXHJcXG4uY291bnRlcnNfd3JhcHBlcntcXHJcXG5iYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbmJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuYm9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcbnBhZGRpbmctbGVmdDogNDBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgcCxcXHJcXG4uY291bnRlcnNfd3JhcHBlciBwe1xcclxcbnBhZGRpbmc6IDEycHggMCAycHggMDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX3dyYXBwZXIgLmNvdW50ZXJfbm90ZSB7XFxyXFxucGFkZGluZzogMDtcXHJcXG5mb250LXNpemU6IDE2cHg7XFxyXFxuY29sb3I6ICMwYjY2MDM7XFxyXFxufVxcclxcbi5jb3VudGVyc193cmFwcGVyIC5jb3VudGVyX25vdGU6bGFzdC1jaGlsZCB7XFxyXFxucGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTFmLFxcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0zZiB7XFxyXFxud2lkdGg6IDkxJTtcXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgI2lucHV0X3BhZ2VcXHJcXG4vKiwgLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTNmKi9cXHJcXG57XFxyXFxubWFyZ2luLWJvdHRvbTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyrQktCr0JrQm9Cu0KfQkNCi0JXQm9CYKi9cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8sXFxyXFxuLmJyZWFrZXJfZGl2IHtcXHJcXG5ib3JkZXI6ICMwMDhCOEIgc29saWQgMnB4O1xcclxcbmJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5wYWRkaW5nLWxlZnQ6IDQwcHg7XFx0XFx0XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpb3tcXHJcXG5wYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvOm50aC1jaGlsZCgybi0xKXtcXHJcXG4gIGJhY2tncm91bmQ6ICM1ZmU2N2M7XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbzpudGgtY2hpbGQoMm4pe1xcclxcbmJhY2tncm91bmQ6ICM0ZmY5YWE7XFxyXFxufVxcclxcbi5icmVha2VyX2RpdjpudGgtY2hpbGQoMm4tMSl7XFxyXFxuYmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2Om50aC1jaGlsZCgybil7XFxyXFxuYmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvIC5icmVha2VyX3AsXFxyXFxuLmJyZWFrZXJfZGl2IC5icmVha2VyX3B7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbnBhZGRpbmc6IDE1cHggMCAycHggMDtcXHRcXHJcXG5tYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxufVxcclxcblxcclxcbi5icmVha2VyX2RpdiAuaW5wdXQtcHtcXHJcXG5wYWRkaW5nOiA4cHggMCAycHggMDtcXHRcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvIGxhYmVse1xcclxcbnBhZGRpbmc6IDNweCAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyZWFrZXJfZGl2IGlucHV0Omxhc3QtY2hpbGR7XFxyXFxubWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyrRhNC+0YDQvNCw0YIgKNCQNCkqL1xcclxcbi5mb3JtYXRfZGl2e1xcclxcbmJvdHRvbTogMXB4O1xcclxcbiAgcmlnaHQ6IDkycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi8q0JHQntCa0J7QktCQ0K8g0KfQkNCh0KLQrCDQoNCQ0JzQmtCYKi9cXHJcXG4uYXNpZGVfZnJhbWUge1xcclxcbi8qdHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpOyAqL1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5ib3R0b206IC0wLjVtbTtcXHJcXG5sZWZ0OiAtMTNtbTtcXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHNwYW57XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXHJcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0ZHtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuYm9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5mb250LXNpemU6IDEycHQ7XFxyXFxudHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpO1xcclxcblxcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdHI6bnRoLWNoaWxkKDJuKzEpIHRke1xcclxcbmhlaWdodDogMjUuM21tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdHI6bnRoLWNoaWxkKDIpIHRke1xcclxcbmhlaWdodDogMzUuNm1tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGQ6Zmlyc3QtY2hpbGR7XFxyXFxud2lkdGg6IDVtbTtcXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHRkOmxhc3QtY2hpbGR7XFxyXFxud2lkdGg6IDdtbTtcXHJcXG5ib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG4vKtCy0LLQvtC0IOKEliDRgdGC0YDQsNC90LjRhtGLKi9cXHJcXG4jaW5wdXRfcGFnZXtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaWduYXR1cmV7XFxyXFxuICBtYXgtd2lkdGg6IDY1cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzM3B4O1xcclxcbiAgYm90dG9tOiAtN3B4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3Mge1xcclxcbiAgbWF4LXdpZHRoOiA2NXB4O1xcclxcbiAgbWF4LWhlaWdodDogMzNweDtcXHJcXG4gIGJvdHRvbTogMTVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZV9ib3NzMiB7XFxyXFxuICBtYXgtd2lkdGg6IDY1cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzM3B4O1xcclxcbiAgYm90dG9tOiAzM3B4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRmYWVhZmQ0OTczZjg4OTIwMDc0ZTQ2ZTU1NWIxMmZjLnR0ZlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vcmRlci1saXN0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJmdW5jdGlvbiBhZGRBc2lkZVRhYmxlKCkge1xyXG5cclxuXHR2YXIgYXNpZGVfZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcblx0YXNpZGVfZnJhbWUuY2xhc3NMaXN0LmFkZCgnYXNpZGVfZnJhbWUnKTtcclxuXHJcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEJPRFlcIik7XHJcblx0YXNpZGVfZnJhbWUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcblxyXG5cdHZhciByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHZhciByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHZhciByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuXHRib2R5LmFwcGVuZChyb3cxLCByb3cyLCByb3czKTtcclxuXHJcblx0dmFyIHRkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkMV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMik7XHJcblx0cm93Mi5hcHBlbmQodGQyXzEsIHRkMl8yKTtcclxuXHRyb3czLmFwcGVuZCh0ZDNfMSwgdGQzXzIpO1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0YHQv9Cw0L3Ri1xyXG5cdHRkMV8xLmFwcGVuZChzcGFuX3RkMV8xKTtcclxuXHR0ZDJfMS5hcHBlbmQoc3Bhbl90ZDJfMSk7XHJcblx0dGQzXzEuYXBwZW5kKHNwYW5fdGQzXzEpO1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0c3Bhbl90ZDFfMS5pbm5lckhUTUwgPSAn0JjQvdCyLiBOINC/0L7QtNC7Lic7XHJcblx0dGQxXzIuaW5uZXJIVE1MID0gJyc7XHJcblx0c3Bhbl90ZDJfMS5pbm5lckhUTUwgPSAn0J/QvtC00L/QuNGB0Ywg0Lgg0LTQsNGC0LAnO1xyXG5cdHRkMl8yLmlubmVySFRNTCA9ICcnO1xyXG5cdHNwYW5fdGQzXzEuaW5uZXJIVE1MID0gJ9CS0LfQsNC80LXQvSDQuNC90LIuIE4nO1xyXG5cdHRkM18yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRyZXR1cm4gYXNpZGVfZnJhbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEFzaWRlVGFibGU7XHJcbiIsImltcG9ydCBhZGRQYWdlTnVtYmVyIGZyb20gJy4vYWRkLXBhZ2UtbnVtYmVyJztcclxuXHJcbmZ1bmN0aW9uIGFkZENpcGhlclRhYmxlKHByb2plY3QsIHNlbSwgaW5kZXgsIG1haW5PYmopIHtcclxuXHJcblx0Y29uc29sZS5sb2cobWFpbk9iailcclxuXHRjb25zdCDRgWlwaGVyVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcblx00YFpcGhlclRhYmxlLmNsYXNzTGlzdC5hZGQoJ9GBaXBoZXJfdGFibGUnKTtcclxuXHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHTRgWlwaGVyVGFibGUuYXBwZW5kKGJvZHkpO1xyXG5cdC8vINGB0YLRgNC+0LrQuFxyXG5cdGNvbnN0IHJvd18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd181ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd184ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd185ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18xMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Ly8g0LzQtdGB0YLQviDQs9C00LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60LhcclxuXHRib2R5LmFwcGVuZChyb3dfMSwgcm93XzIsIHJvd18zLCByb3dfNCwgcm93XzUsIHJvd182LCByb3dfNywgcm93XzgsIHJvd185LCByb3dfMTAsIHJvd18xMSk7XHJcblx0Ly8g0Y/Rh9C10LnQutC4XHJcblx0Y29uc3QgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDFfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQzXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDNfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ1XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkNl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ2XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDZfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cdGNvbnN0IHRkNl82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl83ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl84ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN18yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN183LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblxyXG5cdGNvbnN0IHRkOF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ4XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ4XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDhfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDhfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ5XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDlfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV81LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblx0Y29uc3QgdGQ5XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzYuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcclxuXHR0ZDlfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDEwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTBfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTBfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDEwXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkMTFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDExXzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDExXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMV8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMTFfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93XzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMsIHRkMV80LCB0ZDFfNSwgdGQxXzYsIHRkMV83KTtcclxuXHRyb3dfMi5hcHBlbmQodGQyXzEsIHRkMl8yLCB0ZDJfMywgdGQyXzQsIHRkMl81LCB0ZDJfNik7XHJcblx0cm93XzMuYXBwZW5kKHRkM18xLCB0ZDNfMiwgdGQzXzMsIHRkM180LCB0ZDNfNSwgdGQzXzYsIHRkM183KTtcclxuXHRyb3dfNC5hcHBlbmQodGQ0XzEsIHRkNF8yLCB0ZDRfMywgdGQ0XzQsIHRkNF81LCB0ZDRfNik7XHJcblx0cm93XzUuYXBwZW5kKHRkNV8xLCB0ZDVfMiwgdGQ1XzMsIHRkNV80LCB0ZDVfNSwgdGQ1XzYpO1xyXG5cdHJvd182LmFwcGVuZCh0ZDZfMSwgdGQ2XzIsIHRkNl8zLCB0ZDZfNCwgdGQ2XzUsIHRkNl82LCB0ZDZfNywgdGQ2XzgpO1xyXG5cdHJvd183LmFwcGVuZCh0ZDdfMSwgdGQ3XzIsIHRkN18zLCB0ZDdfNCwgdGQ3XzUsIHRkN182LCB0ZDdfNyk7XHJcblx0cm93XzguYXBwZW5kKHRkOF8xLCB0ZDhfMiwgdGQ4XzMsIHRkOF80KTtcclxuXHRyb3dfOS5hcHBlbmQodGQ5XzEsIHRkOV8yLCB0ZDlfMywgdGQ5XzQsIHRkOV81LCB0ZDlfNik7XHJcblx0cm93XzEwLmFwcGVuZCh0ZDEwXzEsIHRkMTBfMiwgdGQxMF8zLCB0ZDEwXzQpO1xyXG5cdHJvd18xMS5hcHBlbmQodGQxMV8xLCB0ZDExXzIsIHRkMTFfMywgdGQxMV80KTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV83LmlubmVySFRNTCA9IGAke3Byb2plY3QuY2lwaGVyfS0yOTAtNzAt0JDQo9CtYDsgLy8xLjdcclxuXHJcblx0dGQzXzcuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lT2ZQcm9qZWN0OyAvLzMuN1xyXG5cclxuXHR0ZDVfMS5pbm5lckhUTUwgPSAn0JjQt9C8Lic7IC8vNS4xXHJcblx0dGQ1XzIuaW5uZXJIVE1MID0gJ9Ca0L7Quy7Qo9GHLic7IC8vNS4yXHJcblx0dGQ1XzMuaW5uZXJIVE1MID0gJ9Cb0LjRgdGCJzsgLy81LjNcclxuXHR0ZDVfNC5pbm5lckhUTUwgPSAn4oSW0LTQvtC6Lic7IC8vNS40XHJcblx0dGQ1XzUuaW5uZXJIVE1MID0gJ9Cf0L7QtNC/0LjRgdGMJzsgLy81LjVcclxuXHR0ZDVfNi5pbm5lckhUTUwgPSAn0JTQsNGC0LAnOyAvLzUuNlxyXG5cclxuXHR0ZDZfMS5pbm5lckhUTUwgPSAn0KPRgtCyLic7IC8vNi4xXHJcblx0dGQ2XzIuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lT2ZCb3NzLnNwbGl0KCcgJylbMF07IC8vNi4yXHJcblx0dGQ2XzMuaW5uZXJIVE1MID0gJyc7IC8vNi4zXHJcblxyXG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG5cdC8vIGNvbnN0IGRheSA9IGQuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcclxuXHRjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcblxyXG5cdGxldCB0b2RheTtcclxuXHRpZiAobW9udGggPCAxMCkge1xyXG5cdFx0dG9kYXkgPSBgMCR7bW9udGh9LiR7eWVhci5zcGxpdCgnJylbMl19JHt5ZWFyLnNwbGl0KCcnKVszXX1gXHJcblx0fSBlbHNlIHtcclxuXHRcdHRvZGF5ID0gYCR7bW9udGh9LiR7eWVhci5zcGxpdCgnJylbMl19JHt5ZWFyLnNwbGl0KCcnKVszXX1gXHJcblx0fVxyXG5cclxuXHR0ZDZfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDlfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDEwXzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblx0dGQxMV80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cclxuXHR0ZDZfNS5pbm5lckhUTUwgPSAn0JfQsNC00LDQvdC40LUg0LfQsNCy0L7QtNGDINC90LAg0LjQt9Cz0L7RgtC+0LLQu9C10L3QuNC1INGI0LrQsNGE0L7QsiDQkNCh0JrQo9CtJzsgLy82LjVcclxuXHR0ZDZfNi5pbm5lckhUTUwgPSAn0KHRgtCw0LTQuNGPJzsgLy82LjZcclxuXHR0ZDZfNy5pbm5lckhUTUwgPSAn0JvQuNGB0YInOyAvLzYuN1xyXG5cdHRkNl84LmlubmVySFRNTCA9ICfQm9C40YHRgtC+0LInOyAvLzYuOFxyXG5cclxuXHR0ZDdfNS5pbm5lckhUTUwgPSBwcm9qZWN0LnN0YWdlT2ZQcm9qZWN0O1x0XHRcdC8vIDcuNVxyXG5cdHRkN182LnRleHRDb250ZW50ID0gYWRkUGFnZU51bWJlcihpbmRleCwgc2VtLCBtYWluT2JqKVxyXG5cclxuXHR0ZDlfMS5pbm5lckhUTUwgPSAn0J0uINC60L7QvdGC0YAuJzsgLy85LjFcclxuXHR0ZDlfMi5pbm5lckhUTUwgPSAn0JPQvtGA0L7QstC+0LknO1xyXG5cclxuXHRpZiAocHJvamVjdC5pc0Jvc3NTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgYm9zc1NpZ25hdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRjb25zdCBib3NzU2lnbmF0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRib3NzU2lnbmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZV9ib3NzJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmVfYm9zczInKTtcclxuXHRcdGJvc3NTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvaWRlbGNoaWsucG5nJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9pZGVsY2hpay5wbmcnKTtcclxuXHRcdHRkOV8zLmFwcGVuZChib3NzU2lnbmF0dXJlKTtcclxuXHRcdHRkMTBfMy5hcHBlbmQoYm9zc1NpZ25hdHVyZTIpO1xyXG5cdH1cclxuXHJcblx0Y29uc29sZS5sb2cocHJvamVjdClcclxuXHR0ZDlfNS5pbm5lckhUTUwgPSBzZW0uZnVsbERlY3JpcHRpb247IC8vOS41XHJcblxyXG5cdGNvbnN0IHBfYmVzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdHBfYmVzcC5jbGFzc0xpc3QuYWRkKCdwX2Jlc3AnKTtcclxuXHRwX2Jlc3Auc2V0QXR0cmlidXRlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cdHRkOV82LmFwcGVuZChwX2Jlc3ApO1xyXG5cdHBfYmVzcC5pbm5lckhUTUwgPSAn0KDQo9CfJyArICc8QlI+JyArICdcItCR0LXQu9GN0L3QtdGA0LPQvtGB0LXRgtGM0L/RgNC+0LXQutGCXCInO1xyXG5cdGNvbnN0IGxvZ29fYmVzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0bG9nb19iZXNwLmNsYXNzTGlzdC5hZGQoJ2xvZ29fYmVzcCcpO1xyXG5cdGxvZ29fYmVzcC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9sb2dvX2Jlc3AuanBnJyk7XHJcblx0dGQ5XzYuYXBwZW5kKGxvZ29fYmVzcCk7XHJcblx0LypcdHRkOV82LmlubmVySFRNTCA9ICfQoNCj0J8gXCLQkdC10LvRjdC90LXRgNCz0L7RgdC10YLRjNC/0YDQvtC10LrRglwiJzsgLy85LjYqL1xyXG5cclxuXHR0ZDEwXzEuaW5uZXJIVE1MID0gJ9Cf0YDQvtCy0LXRgNC40LsnOyAvLzEwLjFcclxuXHR0ZDEwXzIuaW5uZXJIVE1MID0gJ9CT0L7RgNC+0LLQvtC5JzsgLy8xMC4yXHJcblxyXG5cdHRkMTFfMS5pbm5lckhUTUwgPSAn0KDQsNC30YDQsNCxLic7IC8vMTEuMVxyXG5cdHRkMTFfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkRldmVsb3Blci5zcGxpdCgnICcpWzBdOyAvLzExLjJcclxuXHJcblx0aWYgKHByb2plY3QuaXNEZXZlbG9wZXJTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgZGV2ZWxvcGVyU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGRldmVsb3BlclNpZ25hdHVyZS5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmUnKTtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQmtGA0LDQv9C40LLQuNC90LAg0KIuINChXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2tyYXBpdmluYS5wbmcnKTtcclxuXHRcdH0gZWxzZSBpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0KHQstC40YDRgdC60LjQuSDQkC4g0JUuXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0fSBlbHNlIGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQmNC00LXQu9GM0YfQuNC6INCTLiDQoC5cIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvaWRlbGNoaWsucG5nJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHR9XHJcblx0XHR0ZDExXzMuYXBwZW5kKGRldmVsb3BlclNpZ25hdHVyZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4g0YFpcGhlclRhYmxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRDaXBoZXJUYWJsZTtcclxuIiwiZnVuY3Rpb24gYWRkUGFnZU51bWJlcihpbmRleCwgc2VtLCBhcnJPZlNlbXMpIHtcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9wYWdlJykudmFsdWU7XHJcblx0bGV0IHBhZ2U7XHJcblxyXG5cdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0cGFnZSA9IGlucHV0X3BhZ2UgKyAxO1xyXG5cdFx0cmV0dXJuIHBhZ2U7XHJcblx0fSBlbHNlIGlmIChhcnJPZlNlbXNbaW5kZXggLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gJiYgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRsZXQgcHJldmlvdXNQYWdlID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNvcmRlcl9zaGVldCA+IGRpdjpudGgtY2hpbGQoJHtpbmRleCAqIDJ9KSA+IGRpdiA+IHRhYmxlLtGBaXBoZXJfdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg3KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50O1xyXG5cdFx0Y29uc29sZS5sb2coK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNvcmRlcl9zaGVldCA+IGRpdjpudGgtY2hpbGQoJHtpbmRleCAqIDJ9KSA+IGRpdiA+IHRhYmxlLtGBaXBoZXJfdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg3KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50KTtcclxuXHRcdHBhZ2UgPSBwcmV2aW91c1BhZ2UgKyAxO1xyXG5cdFx0Y29uc29sZS5sb2cocHJldmlvdXNQYWdlLCAnIC0gcHJldmlvdXNQYWdlLyBzYW1lJyk7XHJcblx0XHRyZXR1cm4gcGFnZTtcclxuXHR9IGVsc2UgaWYgKGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSB8fCBhcnJPZlNlbXNbaW5kZXggLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbM10gIT09IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10pIHtcclxuXHRcdC8vIHN0YXJ0VHlwZVNlbUZvck51bUxpc3QgPSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICsgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXTtcclxuXHRcdGxldCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblx0XHQvLyBjb25zb2xlLmxvZygrZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDUpYCkudGV4dENvbnRlbnQpO1xyXG5cdFx0cGFnZSA9IHByZXZpb3VzUGFnZSArIDI7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhwcmV2aW91c1BhZ2UsICcgLSBwcmV2aW91c1BhZ2UvIG5vdCBzYW1lJyk7XHJcblx0XHRyZXR1cm4gcGFnZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFBhZ2VOdW1iZXI7XHJcbiIsImZ1bmN0aW9uIG1haW5PYmplY3RDb2xsZWN0KHN0cikge1xyXG5cdGxldCBhcnJheU9mVXNlcklucHV0ID0gc3RyLnNwbGl0KCdcXG4nKTtcclxuXHJcblx0bGV0IHJlc3VsdEFycmF5ID0gW107XHJcblxyXG5cdGxldCBsZWdlbmRBcnJheSA9IGFycmF5T2ZVc2VySW5wdXRbMF0uc3BsaXQoJywnKTtcclxuXHJcblx0ZnVuY3Rpb24gU0VNKGFycikge1xyXG5cclxuXHRcdHRoaXMuY291bnRPZlNFTSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0JrQvtC70LjRh9C10YHRgtCy0L4nKV07XHJcblx0XHR0aGlzLmJyZWFrZXIxVmFsdWUgPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ0nQndCe0Jxf0JDQkjEnKV0uc3BsaXQoJyAnKVswXTtcclxuXHRcdHRoaXMuYnJlYWtlcjJWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMicpXS5zcGxpdCgnICcpWzBdIHx8IG51bGw7XHJcblx0XHR0aGlzLlNFTVR5cGUgPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9Cp0KPQrScpXTtcclxuXHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPSArdGhpcy5TRU1UeXBlLnNwbGl0KCctJylbM107XHJcblxyXG5cdFx0aWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDFcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQkic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV07XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQktCSJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGlsbGFyVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0J7Qn9Ce0KDQqycpXSB8fCAn0KHQki05NSc7XHJcblxyXG5cdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAzO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3V0QnJlYWtlcjEgPSBgJHt0aGlzLnBoYXNlMVZhbHVlfSAtICR7dGhpcy5icmVha2VyMVZhbHVlfWA7XHJcblx0XHR0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyID9cclxuXHRcdFx0dGhpcy5vdXRCcmVha2VyMiA9IGAke3RoaXMucGhhc2UyVmFsdWV9IC0gJHt0aGlzLmJyZWFrZXIyVmFsdWV9YCA6XHJcblx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBudWxsO1xyXG5cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LInKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQuicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQsicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQuicpKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6INC60LDQsdC10LvRjNC90LDRjyDQuCDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3Ri9C1Lic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJzHRhNC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8sIDHRhCAtINC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICcz0YTQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDogM9GEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLCAx0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQsicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LLQvtC30LTRg9GI0L3Ri9C1Lic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGVydChgJHt0aGlzLmlucHV0RnJvbVNlbX0g0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiAke3RoaXMuU0VNVHlwZX0sINC/0LXRgNC10L/RgNC+0LLQtdGA0YzRgtC1INCy0LLQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICfRgdCyLTk1Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQki05NSc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICfRgdCyLTExMCcpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItMTEwJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JA7ICR7dGhpcy5icmVha2VyMlZhbHVlfSDQkCkuICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259LiDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCYDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXlPZlVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0aWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPT09IDYpIHtcclxuXHRcdFx0cmVzdWx0QXJyYXkucHVzaChuZXcgU0VNKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKSkpO1xyXG5cdFx0fSBlbHNlIGlmIChhcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RoID4gNCkge1xyXG5cdFx0XHRhbGVydChg0LTQu9C40L3QsCDQvNCw0YHRgdC40LLQsCAke2FycmF5T2ZVc2VySW5wdXRbaV19ID0gJHthcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RofSDQstC80LXRgdGC0L4gNiBcXG4g0LTQsNC90L3Ri9C5INC80LDRgdGB0LjQsiDQvdC1INCx0YPQtNC10YIg0L7QsdGA0LDQsdC+0YLQsNC9YCk7XHJcblx0XHQgIH1cclxuXHR9XHJcblx0Y29uc29sZS5sb2cocmVzdWx0QXJyYXkpO1xyXG5cclxuXHRyZXN1bHRBcnJheS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRpZiAoYS5TRU1UeXBlID4gYi5TRU1UeXBlKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5PYmplY3RDb2xsZWN0O1xyXG4iLCJpbXBvcnQgYnJlYWtlckRlZmF1bHRUeXBlIGZyb20gJy4vYnJlYWtlci1kZWZhdWx0LXR5cGUnO1xyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70Y/RjtGJ0LDRjyDRhNC+0YDQvNGDINC00LvRjyDQstGL0LrQu9GO0YfQsNGC0LXQu9C10LlcclxuZnVuY3Rpb24gY3JlYXRlQnJlYWtlcldyYXBwZXIocGFpck9mUGhhc2VBbmRBbXBlcmUsIGluZGV4LCBvdXRCcmVha2VyRGVmYXVsdCwgaW5wdXRCcmVha2VyRGVmYXVsdCkge1xyXG5cdGNvbnN0IGJyYWtlcnNXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyYWtlcnNfd3JhcHBlcicpO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0L7QsdC10YDRgtC60LhcclxuXHRjb25zdCBicmVha2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuXHRicmVha2VyRGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZXJfZGl2Jyk7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQstC10YDRhdC90LXQs9C+INCgXHJcblx0Y29uc3QgYnJlYWtlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRicmVha2VyUC5jbGFzc0xpc3QuYWRkKCdicmVha2VyX3AnKTtcclxuXHRicmVha2VyUC5pbm5lckhUTUwgPSAnPHU+JyArICfQktC10LTQuNGC0LUg0LTQsNC90L3Ri9C1INC00LvRjyDQqdCj0K0g0YEg0L7RgtGF0L7QtNGP0YnQtdC5INC70LjQvdC40LXQuTogJyArICc8Yj4nICsgcGFpck9mUGhhc2VBbmRBbXBlcmUuc3BsaXQoJyAtICcpWzBdICsgJ9CkICcgKyBwYWlyT2ZQaGFzZUFuZEFtcGVyZS5zcGxpdCgnIC0gJylbMV0gKyAnQScgKyAnPC9iPicgKyAnPC91Pic7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQoCDQtNC70Y8g0YDQsNC00LjQvlxyXG5cdGNvbnN0IHJhZGlvUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdHJhZGlvUC5jbGFzc0xpc3QuYWRkKCdyYWRpb19wJyk7XHJcblx0cmFkaW9QLmlubmVySFRNTCA9ICfQktGL0LHQtdGA0LjRgtC1INGC0LjQvyDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LA6JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC70LXQudCx0LvQsCDQtNC70Y8g0LrQvdC+0L/QutC4INGA0LDQtNC40L4g4oSWMVxyXG5cdGNvbnN0IHJhZGlvTGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG5cdHJhZGlvTGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0xJyk7XHJcblx0cmFkaW9MYWJlbDEuaW5uZXJIVE1MID0gJ9GA0YPQsdC40LvRjNC90LjQuicgKyAnPGJyPic7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYxXHJcblx0Y29uc3QgYnJlYWtlclJhZGlvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuXHRicmVha2VyUmFkaW8xLnNldEF0dHJpYnV0ZSgnbmFtZScsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCk7XHJcblx0YnJlYWtlclJhZGlvMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0xJyk7XHJcblx0YnJlYWtlclJhZGlvMS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC70LXQudCx0LvQsCDQtNC70Y8g0LrQvdC+0L/QutC4INGA0LDQtNC40L4g4oSWMlxyXG5cdGNvbnN0IHJhZGlvTGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG5cdHJhZGlvTGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0yJyk7XHJcblx0cmFkaW9MYWJlbDIuaW5uZXJIVE1MID0gJ9Cw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lkg0LLRi9C60LvRjtGH0LDRgtC10LvRjCcgKyAnPGJyPic7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYyXHRcclxuXHRjb25zdCBicmVha2VyUmFkaW8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG5cdGJyZWFrZXJSYWRpbzIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4KTtcclxuXHRicmVha2VyUmFkaW8yLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTInKTtcclxuXHRicmVha2VyUmFkaW8yLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcclxuXHRicmVha2VyUmFkaW8yLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LvQtdC50LHQu9CwINC00LvRjyDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYzXHJcblx0Y29uc3QgcmFkaW9MYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcblx0cmFkaW9MYWJlbDMuc2V0QXR0cmlidXRlKCdmb3InLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTMnKTtcclxuXHRyYWRpb0xhYmVsMy5pbm5lckhUTUwgPSAn0LLRi9C60LvRjtGH0LDRgtC10LvRjCDQvdCw0LPRgNGD0LfQutC4JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDRgNCw0LTQuNC+IOKEljNcdFxyXG5cdGNvbnN0IGJyZWFrZXJSYWRpbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcblx0YnJlYWtlclJhZGlvMy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXgpO1xyXG5cdGJyZWFrZXJSYWRpbzMuc2V0QXR0cmlidXRlKCdpZCcsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCArICctMycpO1xyXG5cdGJyZWFrZXJSYWRpbzMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQoCDQtNC70Y8g0LjQvdC/0YPRgtCwINCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsFxyXG5cdGNvbnN0IGlucHV0QnJlYWtlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRpbnB1dEJyZWFrZXJQLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXAnKTtcclxuXHRpbnB1dEJyZWFrZXJQLmlubmVySFRNTCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8LiDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LA6J1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LjQvdC/0YPRgtCwINCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsFxyXG5cdGNvbnN0IGlucHV0QnJlYWtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuXHRpbnB1dEJyZWFrZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dC1icmVha2VyJyArIGluZGV4KTtcclxuXHRpbnB1dEJyZWFrZXIuc2V0QXR0cmlidXRlKCdzaXplJywgJzIwJyk7XHJcblx0aW5wdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0aW5wdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpbnB1dEJyZWFrZXJEZWZhdWx0KTtcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INCgINC00LvRjyDQuNC90L/Rg9GC0LAg0L7RgtGF0L7QtNGP0YnQtdCz0L4g0JDQklxyXG5cdGNvbnN0IG91dEJyZWFrZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0b3V0QnJlYWtlclAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcCcpO1xyXG5cdG91dEJyZWFrZXJQLmlubmVySFRNTCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8LiDQkNCSINC90LAg0L7RgtGF0L7QtNGP0YnQuNGFINC70LjQvdC40Y/RhTonXHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQuNC90L/Rg9GC0LAg0L7RgtGF0L7QtNGP0YnQtdCz0L4g0JDQklxyXG5cdGNvbnN0IG91dEJyZWFrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcblx0b3V0QnJlYWtlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ291dC1icmVha2VyJyArIGluZGV4KTtcclxuXHRvdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgnc2l6ZScsICcyMCcpO1xyXG5cdG91dEJyZWFrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHRvdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvdXRCcmVha2VyRGVmYXVsdCk7IC8vIG91dEJyZWFrZXJyRGVmYXVsdFZhbHVlINC+0LHRj9Cy0LvRj9C10YLRgdGPINC90LjQttC1INCyINGG0LjQutC70LVcclxuXHJcblx0Ly8g0LLRgdGC0LDQstC70Y/QtdC8XHJcblx0YnJlYWtlckRpdi5hcHBlbmQoYnJlYWtlclAsIHJhZGlvUCk7XHJcblx0Ly8g0LLRgdGC0LDQstC70Y/QtdC8INC60L3QvtC/0LrQuCDQuCDQu9C10LnQsdC70YtcclxuXHRicmVha2VyRGl2LmFwcGVuZChicmVha2VyUmFkaW8xLCByYWRpb0xhYmVsMSwgYnJlYWtlclJhZGlvMiwgcmFkaW9MYWJlbDIsIGJyZWFrZXJSYWRpbzMsIHJhZGlvTGFiZWwzKTtcclxuXHQvLyDQstGB0YLQsNCy0LvRj9C10Lwg0LjQvdC/0YPRgtGLXHJcblx0YnJlYWtlckRpdi5hcHBlbmQoaW5wdXRCcmVha2VyUCwgaW5wdXRCcmVha2VyLCBvdXRCcmVha2VyUCwgb3V0QnJlYWtlcik7XHJcblxyXG5cdGJyYWtlcnNXcmFwcGVyLmFwcGVuZChicmVha2VyRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQnJlYWtlcnNDaG9pc2UoYXJyKXtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuXHRcdGxldCBicmVha2Vyc0FtcGVyc1ZhbHVlcyA9IFsxMCwgMTMsIDE2LCAyMCwgMjUsIDMyLCA0MCwgNTAsIDYzLCA4MCwgMTAwLCAxMjVdO1xyXG5cdCAgXHJcblx0XHRsZXQgcGhhc2UgPSBhcnJbaV0uc3BsaXQoJyAtICcpWzBdO1xyXG5cdFx0bGV0IGFtcGVyZU91dCA9IGFycltpXS5zcGxpdCgnIC0gJylbMV07XHJcblx0XHRsZXQgYW1wZXJlSW4gPSBicmVha2Vyc0FtcGVyc1ZhbHVlc1ticmVha2Vyc0FtcGVyc1ZhbHVlcy5pbmRleE9mKCthbXBlcmVPdXQpICsgMV1cclxuXHQgIFxyXG5cdFx0bGV0IG91dEJyZWFrZXJUeXBlID0gYnJlYWtlckRlZmF1bHRUeXBlKCthbXBlcmVPdXQpO1xyXG5cdFx0bGV0IGlucHV0QnJlYWtlclR5cGUgPSBicmVha2VyRGVmYXVsdFR5cGUoYW1wZXJlSW4pO1xyXG5cdFx0Ly8g0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtGH0LDQvdC40Y4g0LTQu9GPINC40L3Qv9GD0YLQvtCyINCy0LLQvtC00LAg0LLRi9C60LvRjtGH0LDRgtC10LvQtdC5XHJcblx0XHRsZXQgb3V0QnJlYWtlcnJEZWZhdWx0VmFsdWUgPSBgJHtvdXRCcmVha2VyVHlwZX0gJHtwaGFzZX1QIEMke2FtcGVyZU91dH1gO1xyXG5cdFx0bGV0IGlucHV0QnJlYWtlckRlZmF1bHRWYWx1ZSA9IGAke2lucHV0QnJlYWtlclR5cGV9ICR7cGhhc2V9UCBDJHthbXBlcmVJbn1gO1xyXG5cdFx0Y3JlYXRlQnJlYWtlcldyYXBwZXIoYXJyW2ldLCBpLCBvdXRCcmVha2VyckRlZmF1bHRWYWx1ZSwgaW5wdXRCcmVha2VyRGVmYXVsdFZhbHVlKTtcclxuXHQgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQnJlYWtlcnNDaG9pc2U7XHJcbiIsImZ1bmN0aW9uIGFkZFN1bVNlbShhcnJPZlNlbSkge1xyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGUnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVEJPRFknKVswXTtcclxuXHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0Ysg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LVcdFx0XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHRib2R5LmFwcGVuZChyb3cxLCByb3cyKTtcclxuXHQvLyDQodC+0LfQtNCw0LXQvCDRj9GH0LXQudC60Lgg0LIg0LLRi9GI0LXRgdC+0LfQtNCw0L3QvdC+0Lkg0YHRgtGA0L7QutC1XHJcblx0Ly8g0Lgg0LTQvtCx0LDQstC70Y/QtdC8INGC0YVcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfMS5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzIuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV8zLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHJcblx0Y29uc3QgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQyXzEuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMl8yLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDJfMy5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMiwgdGQyXzMpO1xyXG5cclxuXHRsZXQgc3VtT2ZDb3VudCA9IDA7XHJcblx0bGV0IHN1bU9mU2VtID0gMDtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJPZlNlbS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3VtT2ZTZW0gKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTTtcclxuXHRcdHN1bU9mQ291bnQgKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTSAqIGFyck9mU2VtW2ldLmNvdW50ZXJDb3VudEluU0VNO1xyXG5cdH1cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGB0YfQtdGC0YfQuNC60L7QsjonO1xyXG5cdHRkMV8zLmlubmVySFRNTCA9IHN1bU9mQ291bnQ7XHJcblxyXG5cdHRkMl8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGJ0LjRgtC60L7QsjonO1xyXG5cdHRkMl8zLmlubmVySFRNTCA9IHN1bU9mU2VtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTdW1TZW07XHJcbiIsImZ1bmN0aW9uIGJyZWFrZXJEZWZhdWx0VHlwZSh2YWx1ZSkge1xyXG5cdGxldCBicmVha2VyVHlwZTtcclxuXHRpZiAodmFsdWUgPD0gNjMpIHtcclxuXHRcdGJyZWFrZXJUeXBlID0gJ9CS0JAtNDctMjknO1xyXG5cdH0gZWxzZSBpZiAodmFsdWUgPD0gMTAwKSB7XHJcblx0XHRicmVha2VyVHlwZSA9ICfQktCQLTQ3LTEwMCc7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA9IDEyNSkge1xyXG5cdFx0YnJlYWtlclR5cGUgPSAn0JLQkC00Ny0xNTAnO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRicmVha2VyVHlwZSA9ICcnO1xyXG5cdH1cclxuXHRyZXR1cm4gYnJlYWtlclR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFrZXJEZWZhdWx0VHlwZTtcclxuIiwiZnVuY3Rpb24gY29udGFjdHNUYWJsZShzZW0sIGRhdGFPZlByb2plY3QpIHtcclxuXHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQstC10YDRhdC90LXQuSDRgtCw0LHQu9C40YbRiyDQvtC/0YDQvtGB0L3QvtCz0L5cclxuXHRjb25zdCBkZXNjcmlwdFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdGRlc2NyaXB0VGFibGUuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRfdGFibGUnKTtcclxuXHJcblx0Y29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdGRlc2NyaXB0VGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcblx0Ly8g0YHRgtGA0L7QutC4XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3c1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Ly8g0LzQtdGB0YLQviDQs9C00LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60LhcclxuXHR0YWJsZUJvZHkuYXBwZW5kKHJvdzEsIHJvdzIsIHJvdzMsIHJvdzQsIHJvdzUsIHJvdzYpO1xyXG5cclxuXHQvLyDRj9GH0LXQudC60LhcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHQvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuXHRyb3cxLmFwcGVuZCh0ZDFfMSwgdGQxXzIpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMik7XHJcblx0cm93My5hcHBlbmQodGQzXzEsIHRkM18yKTtcclxuXHRyb3c0LmFwcGVuZCh0ZDRfMSwgdGQ0XzIpO1xyXG5cdHJvdzUuYXBwZW5kKHRkNV8xLCB0ZDVfMik7XHJcblx0cm93Ni5hcHBlbmQodGQ2XzEsIHRkNl8yKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8xLnRleHRDb250ZW50ID0gJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4JztcclxuXHR0ZDJfMS50ZXh0Q29udGVudCA9ICfQn9GA0LXQtNGB0YLQsNCy0LjRgtC10LvRjCDQt9Cw0LrQsNC30YfQuNC60LAnO1xyXG5cdHRkM18xLnRleHRDb250ZW50ID0gJ9Ca0L7QvdGC0LDQutGC0L3Ri9C5INGC0LXQu9C10YTQvtC9JztcclxuXHR0ZDRfMS50ZXh0Q29udGVudCA9ICfQotC40L8g0YnQuNGC0LrQsCc7XHJcblx0dGQ0XzIudGV4dENvbnRlbnQgPSBzZW0uU0VNVHlwZTtcclxuXHR0ZDVfMS50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQviDRidC40YLQutC+0LInO1xyXG5cdHRkNV8yLnRleHRDb250ZW50ID0gYNCh0LwuICR7ZGF0YU9mUHJvamVjdC5jaXBoZXJ9LTEwMy03MC3QkNCj0K0u0KHQnmA7XHJcblx0dGQ2XzEudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC+0LHRitC10LrRgtCwJztcclxuXHJcblx0cmV0dXJuIGRlc2NyaXB0VGFibGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RzVGFibGU7XHJcbiIsImxldCBjcmVhdGVJbmZvVGFibGUgPSBmdW5jdGlvbiAoc2VtKSB7XHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0YtcdFxyXG5cdGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cdC8vINCh0L7Qt9C00LDQtdC8INGP0YfQtdC50LrQuCDQsiDQstGL0YjQtdGB0L7Qt9C00LDQvdC90L7QuSDRgdGC0YDQvtC60LVcclxuXHRsZXQgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGxldCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0bGV0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMS50ZXh0Q29udGVudCA9IHNlbS5TRU1UeXBlO1xyXG5cdGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdHRkMi50ZXh0Q29udGVudCA9IGDQo9GB0YLQsNC90L7QstC60LAgJHtzZW0uaW5zdGFsbGF0aW9ufS4gJHtzZW0uZGVzY3JpcHRpb259ICgke3NlbS5icmVha2VyMVZhbHVlfSDQkClgO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHR0ZDIudGV4dENvbnRlbnQgPSBg0KPRgdGC0LDQvdC+0LLQutCwICR7c2VtLmluc3RhbGxhdGlvbn0uICR7c2VtLmRlc2NyaXB0aW9ufSAoJHtzZW0uYnJlYWtlcjFWYWx1ZX0g0JA7ICR7c2VtLmJyZWFrZXIyVmFsdWV9INCQKWA7XHJcblx0fVxyXG5cdHRkMy50ZXh0Q29udGVudCA9IHNlbS5jb3VudE9mU0VNO1xyXG5cclxuXHRyb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cdHJldHVybiByb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluZm9UYWJsZTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlT3JkZXJUYWJsZShpbmRleCkge1xyXG5cclxuXHRjb25zdCBvcmRlclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdG9yZGVyVGFibGUuY2xhc3NMaXN0LmFkZCgnb3JkZXJfdGFibGUnKTtcclxuXHJcblx0Y29uc3QgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEJPRFlcIik7XHJcblx0b3JkZXJUYWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcblx0Ly8g0YHRgtGA0L7QutC4XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkgKz0gMSkge1xyXG5cdFx0bGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRcdC8vIHJvdy5jbGFzc0xpc3QuYWRkKCdvcmRlcl9yb3cnICsgaW5kZXggKyAnXycgKyBpKTtcclxuXHRcdHJvdy5jbGFzc0xpc3QuYWRkKCdvcmRlcl9yb3cnLCAnb3JkZXJfcm93JyArIGluZGV4ICsgJ18nICsgaSk7XHJcblx0XHR0Qm9keS5hcHBlbmQocm93KTtcclxuXHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPD0gMjsgaiArPSAxKSB7XHJcblx0XHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRcdFx0XHRcdC8vIHRkLmNsYXNzTGlzdC5hZGQoJ3RkJyArIGkgKyAnXycgKyBqKTtcclxuXHRcdFx0dGQuY2xhc3NMaXN0LmFkZCgndGQnICsgaW5kZXggKyAnXycgKyBpICsgJ18nICsgaik7XHJcblx0XHRcdHRkLnRleHRDb250ZW50ID0gJyc7XHJcblx0XHRcdHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb3JkZXJUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JkZXJUYWJsZTtcclxuIiwiZnVuY3Rpb24gZmluZFRkKGxpc3QsIHJvdywgY29sdW1uKXtcclxuXHRsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZCcgKyBsaXN0ICsgJ18nICsgcm93ICsgJ18nICsgY29sdW1uKTtcclxuXHRyZXR1cm4gZWxlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3F1YXJlIChmbGFnMSwgZmxhZzIsIHRleHQpe1xyXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHJcblx0Y29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcblx0c3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG5cdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XHJcblx0cGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0aWYgKGZsYWcxID09PSAxKSB7XHJcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lubGluZV9ibG9jaycpO1xyXG5cdH1cclxuXHRpZiAoZmxhZzIgPT09IDEpIHtcclxuXHRcdHBhcmEuY2xhc3NMaXN0LmFkZCgnaW5saW5lX2Jsb2NrJyk7XHJcblx0fVxyXG5cdHdyYXBwZXIuYXBwZW5kKHNxdWFyZSwgcGFyYSk7XHJcblx0cmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVAgKHRleHQpe1xyXG5cdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XHJcblx0cGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0cmV0dXJuIHBhcmE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxPcmRlclRhYmxlKHNlbSwgaW5kZXgsIGFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzKSB7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHRsZXQgdGQxXzEgPSBmaW5kVGQoaW5kZXgsIDAsIDApO1xyXG5cdHRkMV8xLnRleHRDb250ZW50ID0gJ+KElic7XHJcblxyXG5cdGxldCB0ZDFfMiA9IGZpbmRUZChpbmRleCwgMCwgMSk7XHJcblx0dGQxXzIudGV4dENvbnRlbnQgPSAn0JfQsNC/0YDQsNGI0LjQstCw0LXQvNGL0LUg0LTQsNC90L3Ri9C1JztcclxuXHJcblx0bGV0IHRkMV8zID0gZmluZFRkKGluZGV4LCAwLCAyKTtcclxuXHR0ZDFfMy50ZXh0Q29udGVudCA9ICfQntGC0LLQtdGCINC30LDQutCw0LfRh9C40LrQsCc7XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgMTI7IGkgKz0gMSkge1xyXG5cdFx0bGV0IHRkMSA9IGZpbmRUZChpbmRleCwgaSwgMCk7XHJcblx0XHR0ZDEudGV4dENvbnRlbnQgPSBpO1xyXG5cdH1cclxuXHJcblx0Ly8g0KLQuNC/INC40YHQv9C+0LvQvdC10L3QuNGPINC60L7RgNC/0YPRgdCwXHJcblx0bGV0IHRkMl8yID0gZmluZFRkKGluZGV4LCAxLCAxKTtcclxuXHR0ZDJfMi50ZXh0Q29udGVudCA9ICfQotC40L8g0LjRgdC/0L7Qu9C90LXQvdC40Y8g0LrQvtGA0L/Rg9GB0LAnO1xyXG5cclxuXHRsZXQgdGQyXzMgPSBmaW5kVGQoaW5kZXgsIDEsIDIpO1xyXG5cdHRkMl8zLmFwcGVuZChjcmVhdGVTcXVhcmUoMSwgMSwgJ9C80LXRgtCw0LvQu9C40YfQtdGB0LrQuNC5JyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAxLCfQv9C70LDRgdGC0LzQsNGB0YHQvtCy0YvQuScpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMV0gPT09ICcxJykge1xyXG5cdFx0dGQyXzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzFdID09PSAnMicpIHtcclxuXHRcdHRkMl8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0KLQuNC/INGJ0LjRgtC60LBcclxuXHRsZXQgdGQzXzIgPSBmaW5kVGQoaW5kZXgsIDIsIDEpO1xyXG5cdHRkM18yLnRleHRDb250ZW50ID0gJ9Ci0LjQvyDRidC40YLQutCwJztcclxuXHJcblx0bGV0IHRkM18zID0gZmluZFRkKGluZGV4LCAyLCAyKTtcclxuXHR0ZDNfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDAsIDAsICfQvtC00L3QvtGE0LDQt9C90YvQuScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9GC0YDQtdGF0YTQsNC30L3Ri9C5JyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQvtC00L3QvtGE0LDQt9C90YvQuSDQuCDRgtGA0LXRhdGE0LDQt9C90YvQuScpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJykge1xyXG5cdFx0dGQzXzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicpIHtcclxuXHRcdHRkM18zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzMnKSB7XHJcblx0XHR0ZDNfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDQstCy0L7QtNCwXHJcblx0bGV0IHRkNF8yID0gZmluZFRkKGluZGV4LCAzLCAxKTtcclxuXHR0ZDRfMi50ZXh0Q29udGVudCA9ICfQotC40L8g0LLQstC+0LTQsCc7XHJcblxyXG5cdGxldCB0ZDRfMyA9IGZpbmRUZChpbmRleCwgMywgMik7XHJcblx0dGQ0XzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgxLCAxLCAn0LLQvtC30LTRg9GI0L3Ri9C5JyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAxLCAn0LrQsNCx0LXQu9GM0L3Ri9C5JykpO1xyXG5cclxuXHRpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnIHx8IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0dGQ0XzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMicpIHtcclxuXHRcdHRkNF8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0KLQuNC/INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsFxyXG5cdGxldCB0ZDVfMiA9IGZpbmRUZChpbmRleCwgNCwgMSk7XHJcblx0dGQ1XzIudGV4dENvbnRlbnQgPSAn0KLQuNC/INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsCc7XHJcblxyXG5cdGxldCB0ZDVfMyA9IGZpbmRUZChpbmRleCwgNCwgMik7XHJcblx0dGQ1XzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgwLCAwLCAn0YDRg9Cx0LjQu9GM0L3QuNC6JyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQuSDQstGL0LrQu9GO0YfQsNGC0LXQu9GMJyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQstGL0LrQu9GO0YfQsNGC0LXQu9GMINC90LDQs9GA0YPQt9C60LgnKSk7XHJcblxyXG5cdGxldCBpbmRleE9mYnJlYWtlcjEgPSBhcnJheU9mUGhhc2VzQW5kQW1wZXJlcy5pbmRleE9mKHNlbS5vdXRCcmVha2VyMSk7XHJcblx0bGV0IGluZGV4T2ZicmVha2VyMiA9IGFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzLmluZGV4T2Yoc2VtLm91dEJyZWFrZXIyKTtcclxuXHJcblx0bGV0IGJyZWFrZXJSYWRpb0Nob2ljZTFfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBicmVha2VyLXJhZGlvLSR7aW5kZXhPZmJyZWFrZXIxfS0xYCk7XHJcblx0bGV0IGJyZWFrZXJSYWRpb0Nob2ljZTFfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBicmVha2VyLXJhZGlvLSR7aW5kZXhPZmJyZWFrZXIxfS0yYCk7XHJcblx0bGV0IGJyZWFrZXJSYWRpb0Nob2ljZTFfMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBicmVha2VyLXJhZGlvLSR7aW5kZXhPZmJyZWFrZXIxfS0zYCk7XHJcblxyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UyXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMn0tMWApO1xyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMn0tMmApO1xyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UyXzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMn0tM2ApO1xyXG5cclxuXHRpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMV8xLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMV8yLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMV8zLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHRpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMl8xICE9PSBudWxsICYmIGJyZWFrZXJSYWRpb0Nob2ljZTJfMS5jaGVja2VkKSB7XHJcblx0XHR0ZDVfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKGJyZWFrZXJSYWRpb0Nob2ljZTJfMiAhPT0gbnVsbCAmJiBicmVha2VyUmFkaW9DaG9pY2UyXzIuY2hlY2tlZCkge1xyXG5cdFx0dGQ1XzMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChicmVha2VyUmFkaW9DaG9pY2UyXzMgIT09IG51bGwgJiYgYnJlYWtlclJhZGlvQ2hvaWNlMl8zLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQsNGA0LrQsCwgSdC90L7QvCDQkNCSXHJcblx0bGV0IHRkNl8yID0gZmluZFRkKGluZGV4LCA1LCAxKTtcclxuXHR0ZDZfMi50ZXh0Q29udGVudCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsCc7XHJcblxyXG5cdGxldCB0ZDZfMyA9IGZpbmRUZChpbmRleCwgNSwgMik7XHJcblxyXG5cdGxldCBpbnB1dEJyZWFrZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0LWJyZWFrZXIke2luZGV4T2ZicmVha2VyMX1gKTtcclxuXHRsZXQgaW5wdXRCcmVha2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dC1icmVha2VyJHtpbmRleE9mYnJlYWtlcjJ9YCk7XHJcblxyXG5cdGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDEpe1xyXG5cdFx0dGQ2XzMudGV4dENvbnRlbnQgPSBpbnB1dEJyZWFrZXIxLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHR0ZDZfMy5pbm5lckhUTUwgPSBpbnB1dEJyZWFrZXIxLnZhbHVlICsgJzxicj4nICsgaW5wdXRCcmVha2VyMi52YWx1ZTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDQvtGC0YXQvtC00Y/RidC10Lkg0LvQuNC90LjQuFxyXG5cdGxldCB0ZDdfMiA9IGZpbmRUZChpbmRleCwgNiwgMSk7XHJcblx0dGQ3XzIudGV4dENvbnRlbnQgPSAn0KLQuNC/INC+0YLRhdC+0LTRj9GJ0LXQuSDQu9C40L3QuNC4JztcclxuXHJcblx0bGV0IHRkN18zID0gZmluZFRkKGluZGV4LCA2LCAyKTtcclxuXHR0ZDdfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDEsIDAsICfQstC+0LfQtNGD0YjQvdCw0Y8nKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDAsICcz0YQg0LLQvtC30LTRg9GI0L3QsNGPLCAx0YQg0LrQsNCx0LXQu9GM0L3QsNGPJyksXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDAsICfQutCw0LHQtdC70YzQvdCw0Y8nKSxcclxuXHRjcmVhdGVTcXVhcmUoMSwgMCwgJzPRhCDQutCw0LHQtdC70YzQvdCw0Y8sIDHRhCDQstC+0LfQtNGD0YjQvdCw0Y8nKSxcclxuXHRjcmVhdGVTcXVhcmUoMSwgMCwgJzEg0LrQsNCx0LXQu9GM0L3QsNGPLCAxINCy0L7Qt9C00YPRiNC90LDRjycpKTtcclxuXHJcblx0aWYgKHNlbS5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9CyJyB8fCBzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQstCyJykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICcx0YTQuicpIHtcclxuXHRcdHRkN18zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9C60LonKSB7XHJcblx0XHR0ZDdfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJzPRhNC6Jykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQutCyJykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGFsZXJ0KGDRh9GC0L4t0YLQviDQvdC1INGC0L4g0YEg0YLQuNC/0L7QvCDQvtGC0YXQvtC00Y/RidC10Lkg0LIgJHtzZW19LiDQn9GA0L7QstC10YDRj9C50YLQtSAke3NlbS5pbnB1dEZyb21TZW19YCk7XHJcblx0fVxyXG5cclxuXHQvLyDQnNCw0YDQutCwLCBJ0L3QvtC8LiDQkNCSXHJcblx0bGV0IHRkOF8yID0gZmluZFRkKGluZGV4LCA3LCAxKTtcclxuXHR0ZDhfMi50ZXh0Q29udGVudCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8LiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtCz0L4g0LLRi9C60LvRjtGH0LDRgtC10LvRjyDQvdCwINC+0YLRhdC+0LTRj9GJ0LjRhSDQu9C40L3QuNGP0YUnO1xyXG5cclxuXHRsZXQgdGQ4XzMgPSBmaW5kVGQoaW5kZXgsIDcsIDIpO1xyXG5cclxuXHRsZXQgb3V0QnJlYWtlcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3V0LWJyZWFrZXIke2luZGV4T2ZicmVha2VyMX1gKTtcclxuXHRsZXQgb3V0QnJlYWtlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3V0LWJyZWFrZXIke2luZGV4T2ZicmVha2VyMn1gKTtcclxuXHJcblx0aWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMSl7XHJcblx0XHR0ZDhfMy50ZXh0Q29udGVudCA9IG91dEJyZWFrZXIxLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHR0ZDhfMy5pbm5lckhUTUwgPSBvdXRCcmVha2VyMS52YWx1ZSArICc8YnI+JyArIG91dEJyZWFrZXIyLnZhbHVlO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vINCa0L7Qu9C40YfQtdGB0YLQstC+INGB0YfQtdGC0YfQuNC60L7Qslx0XHJcblx0bGV0IHRkOV8yID0gZmluZFRkKGluZGV4LCA4LCAxKTtcclxuXHR0ZDlfMi50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdGH0LXRgtGH0LjQutC+0LInO1xyXG5cclxuXHRsZXQgdGQ5XzMgPSBmaW5kVGQoaW5kZXgsIDgsIDIpO1xyXG5cdHRkOV8zLmFwcGVuZChjcmVhdGVTcXVhcmUoMSwgMSwgJzEnKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDEsICcyJykpO1xyXG5cclxuXHRpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHR0ZDlfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0dGQ5XzMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fVxyXG5cclxuXHQvLyDQnNCw0YDQutCwINGB0YfQtdGC0YfQuNC60LBcclxuXHRsZXQgdGQxMF8yID0gZmluZFRkKGluZGV4LCA5LCAxKTtcclxuXHR0ZDEwXzIudGV4dENvbnRlbnQgPSAn0JzQsNGA0LrQsCDRgdGH0LXRgtGH0LjQutCwJztcclxuXHJcblx0bGV0IHRkMTBfMyA9IGZpbmRUZChpbmRleCwgOSwgMik7XHJcblxyXG5cdGxldCBjb3VudGVyMWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlci0xZicpO1xyXG5cdGxldCBjb3VudGVyM2YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlci0zZicpO1xyXG5cclxuXHRpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMSkge1xyXG5cdFx0dGQxMF8zLnRleHRDb250ZW50ID0gY291bnRlcjFmLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMykge1xyXG5cdFx0dGQxMF8zLnRleHRDb250ZW50ID0gY291bnRlcjNmLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMSAmJiBzZW0ucGhhc2UyVmFsdWUgPT09IDEpIHtcclxuXHRcdC8vIHRkMTBfMy5pbm5lckhUTUwgPSBjb3VudGVyMWYudmFsdWUgKyAnPGJyPicgKyBjb3VudGVyMWYudmFsdWU7XHJcblx0XHR0ZDEwXzMudGV4dENvbnRlbnQgPSBjb3VudGVyMWYudmFsdWU7XHJcblx0fSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIgJiYgc2VtLnBoYXNlMVZhbHVlID09PSAzICYmIHNlbS5waGFzZTJWYWx1ZSA9PT0gMykge1xyXG5cdFx0Ly8gdGQxMF8zLmlubmVySFRNTCA9IGNvdW50ZXIyZi52YWx1ZSArICc8YnI+JyArIGNvdW50ZXIyZi52YWx1ZTtcclxuXHRcdHRkMTBfMy50ZXh0Q29udGVudCA9IGNvdW50ZXIzZi52YWx1ZTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0ucGhhc2UxVmFsdWUgPT09IDMgJiYgc2VtLnBoYXNlMlZhbHVlID09PSAxKSB7XHJcblx0XHR0ZDEwXzMuaW5uZXJIVE1MID0gY291bnRlcjNmLnZhbHVlICsgJzxicj4nICsgY291bnRlcjFmLnZhbHVlO1xyXG5cdH0gZWxzZSB7IGFsZXJ0KGDRh9GC0L4t0YLQviDQvdC1INGC0L4g0YEg0YTQsNC30LDQvNC4INGDINGB0YfQtdGC0YfQuNC60LAg0LIgJHtzZW0uU0VNVHlwZX1gKX1cclxuXHJcblx0Ly8g0KHQv9C+0YHQvtCxINGD0YHRgtCw0L3QvtCy0LrQuFxyXG5cdGxldCB0ZDExXzIgPSBmaW5kVGQoaW5kZXgsIDEwLCAxKTtcclxuXHR0ZDExXzIudGV4dENvbnRlbnQgPSAn0KHQv9C+0YHQvtCxINGD0YHRgtCw0L3QvtCy0LrQuCDRidC40YLQutCwJztcclxuXHJcblx0bGV0IHRkMTFfMyA9IGZpbmRUZChpbmRleCwgMTAsIDIpO1xyXG5cdHRkMTFfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDAsIDAsICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L7Qv9C+0YDQtScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C90LAg0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y8nKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTInKSk7XHJcblxyXG5cdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScpIHtcclxuXHRcdHRkMTFfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0dGQxMV8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHR0ZDExXzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnNCcpIHtcclxuXHRcdHRkMTFfMy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCQ0YDQvNCw0YLRg9GA0LAg0LTQu9GPINGD0YHRgtCw0L3QvtCy0LrQuFxyXG5cdGxldCB0ZDEyXzIgPSBmaW5kVGQoaW5kZXgsIDExLCAxKTtcclxuXHR0ZDEyXzIudGV4dENvbnRlbnQgPSAn0JDRgNC80LDRgtGD0YDQsCDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC4INC4INC60YDQtdC/0LvQtdC90LjRjyDRidC40YLQutCwICjQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YHQv9C+0YHQvtCx0LAg0YPRgdGC0LDQvdC+0LLQutC4KSc7XHJcblxyXG5cdGxldCB0ZDEyXzMgPSBmaW5kVGQoaW5kZXgsIDExLCAyKTtcclxuXHR0ZDEyXzMuYXBwZW5kKGNyZWF0ZVAgKCct0YPRgdGC0LDQvdC+0LLQutCwINC90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQvtC/0L7RgNC1OicpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C6INC+0L/QvtGA0LUg0KHQki05NScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C6INC+0L/QvtGA0LUg0KHQki0xMTAnKSxcclxuXHRjcmVhdGVQICgnLdGD0YHRgtCw0L3QvtCy0LrQsCDQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1OicpLFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0Log0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnKSxcclxuXHRjcmVhdGVQICgnLdGD0YHRgtCw0L3QvtCy0LrQsCDQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPOicpLFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0Log0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y8nKSxcclxuXHRjcmVhdGVQICgnLdGD0YHRgtCw0L3QvtCy0LrQsCDQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yOicpLFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0Log0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yICjRgtC+0LvRjNC60L4g0LLQvtC30LTRg9GI0L3Ri9C5INCy0LLQvtC0KScpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiBzZW0ucGlsbGFyVHlwZS50b0xvd2VyQ2FzZSgpID09ICfRgdCyLTk1Jykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHNlbS5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT0gJ9GB0LItMTEwJykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzInKSB7XHJcblx0XHR0ZDEyXzMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMycpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzZdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbOF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbGxPcmRlclRhYmxlO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVMZWdlbmRPZk9yZGVyTGlzdCgpIHtcclxuXHRjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEVHRU5EXCIpO1xyXG5cdGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdsZWdlbmRfdGFibGUnKTtcclxuXHJcblx0bGVnZW5kLmlubmVySFRNTCA9ICfQntCf0KDQntCh0J3Qq9CZINCb0JjQodCiIDxicj4g0L3QsCDQuNC30LPQvtGC0L7QstC70LXQvdC40LUgPGJyPiDRidC40YLQutCwINGD0YfQtdGC0LAg0Y3Qu9C10LrRgtGA0L7RjdC90LXRgNCz0LjQuCDQstGL0L3QvtGB0L3QvtCz0L4g0YLQuNC/0LAnO1xyXG5cclxuXHRyZXR1cm4gbGVnZW5kO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMZWdlbmRPZk9yZGVyTGlzdDtcclxuIiwiaW1wb3J0ICcuLi9jc3Mvb3JkZXItbGlzdC5jc3MnO1xyXG5cclxuaW1wb3J0IG1haW5PYmplY3RDb2xsZWN0IGZyb20gJy4vZGF0YS9tYWluLW9iamVjdC1jb2xsZWN0JztcclxuaW1wb3J0IGFkZEJyZWFrZXJzQ2hvaXNlIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvYWRkLWJyZWFrZXJzLWNob2lzZSc7XHJcbmltcG9ydCBjcmVhdGVJbmZvVGFibGUgZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9jcmVhdGUtaW5mby10YWJsZSc7XHJcbmltcG9ydCBjb250YWN0c1RhYmxlIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvY29udGFjdHMtdGFibGUnO1xyXG5pbXBvcnQgY3JlYXRlTGVnZW5kT2ZPcmRlckxpc3QgZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9sZWdlbmQtb2Ytb3JkZXItbGlzdCc7XHJcbmltcG9ydCBjcmVhdGVPcmRlclRhYmxlIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvY3JlYXRlLW9yZGVyLXRhYmxlJztcclxuaW1wb3J0IGZpbGxPcmRlclRhYmxlIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvZmlsbC1vcmRlci10YWJsZSc7XHJcbmltcG9ydCBhZGRDaXBoZXJUYWJsZSBmcm9tICcuL2NpcGhlci9hZGQtY2lwaGVyLXRhYmxlJztcclxuaW1wb3J0IGFkZEFzaWRlVGFibGUgZnJvbSAnLi9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlJztcclxuaW1wb3J0IGFkZFN1bVNlbSBmcm9tICcuL2Zvci1vcmRlci1saXN0L2FkZC1zdW0tc2VtJztcclxuXHJcbmxldCB1c2VySW5wdXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbnB1dFwiKTtcclxudXNlcklucHV0ID0gbWFpbk9iamVjdENvbGxlY3QodXNlcklucHV0KTtcclxuY29uc29sZS5sb2codXNlcklucHV0KTtcclxuXHJcbmxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0RGF0YVwiKSk7XHJcblxyXG5jb25zb2xlLmxvZyhwcm9qZWN0RGF0YSk7XHJcblxyXG5sZXQgYXJyQ291bnRlckJyZWFrZXJzID0gW107XHJcblxyXG5mb3IgKGxldCBlbGVtIG9mIHVzZXJJbnB1dCkge1xyXG4gIGlmIChhcnJDb3VudGVyQnJlYWtlcnMuaW5kZXhPZihlbGVtLm91dEJyZWFrZXIxKSA9PT0gLTEpIHtcclxuICAgIGFyckNvdW50ZXJCcmVha2Vycy5wdXNoKGVsZW0ub3V0QnJlYWtlcjEpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW0ub3V0QnJlYWtlcjIgIT09IG51bGxcclxuICAgICYmIGFyckNvdW50ZXJCcmVha2Vycy5pbmRleE9mKGVsZW0ub3V0QnJlYWtlcjIpID09PSAtMSkge1xyXG4gICAgY29uc29sZS5sb2coYXJyQ291bnRlckJyZWFrZXJzLmluZGV4T2YoZWxlbS5vdXRCcmVha2VyMiksIGVsZW0ub3V0QnJlYWtlcjIpXHJcbiAgICBhcnJDb3VudGVyQnJlYWtlcnMucHVzaChlbGVtLm91dEJyZWFrZXIyKVxyXG4gIH1cclxufVxyXG5cclxuYXJyQ291bnRlckJyZWFrZXJzLnNvcnQoKGEsIGIpID0+IHtcclxuICBpZiAoYSA+IGIpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKGFyckNvdW50ZXJCcmVha2Vycyk7XHJcbmFkZEJyZWFrZXJzQ2hvaXNlKGFyckNvdW50ZXJCcmVha2Vycyk7XHJcblxyXG5sZXQgZ2V0T3JkZXJMaXN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtb3JkZXItbGlzdHMnKTtcclxuXHJcbmdldE9yZGVyTGlzdHNCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCBicmVha2Vyc1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlcnMtaW5wdXQnKTtcclxuICBicmVha2Vyc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lcicpO1xyXG4gICAgY291bnRlcnNBbmRCcmVha2Vyc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZV9jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIGFkZCBtYWluIHRhYmxlXHJcbiAgICBjb25zdCBpbmZvVGFibGVXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGVfd3JhcHBlcicpO1xyXG4gICAgaW5mb1RhYmxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93X2luZm9fdGFibGVfd3JhcHBlcicpO1xyXG4gICAgY29uc3QgaW5mb1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9fdGFibGVfYm9keScpO1xyXG4gICAgY29uc3Qgcm93Rm9ySW5mb1RhYmxlID0gY3JlYXRlSW5mb1RhYmxlKHVzZXJJbnB1dFtpXSlcclxuICAgIGluZm9UYWJsZS5hcHBlbmQocm93Rm9ySW5mb1RhYmxlKTtcclxuXHJcbiAgICAvLyBhZGQgd3JhcHBlclxyXG4gICAgY29uc3Qgb3JkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyX3NoZWV0Jyk7XHJcblxyXG4gICAgY29uc3QgaDZfYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDZcIik7XHJcbiAgICBoNl9icmVhay5jbGFzc0xpc3QuYWRkKCdoNl9icmVhaycpO1xyXG5cclxuICAgIGNvbnN0IGE0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGE0ZGl2LmNsYXNzTGlzdC5hZGQoJ2E0X2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGE0ZGl2X2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGE0ZGl2X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2E0X2Rpdl9mcmFtZScpO1xyXG5cclxuICAgIG9yZGVyV3JhcHBlci5hcHBlbmQoaDZfYnJlYWssIGE0ZGl2KTtcclxuICAgIGE0ZGl2LmFwcGVuZChhNGRpdl9mcmFtZSk7XHJcblxyXG4gICAgLy8gYWRkIExlZ2VuZCBpbiB3cmFwcGVyXHJcbiAgICBhNGRpdl9mcmFtZS5hcHBlbmQoY3JlYXRlTGVnZW5kT2ZPcmRlckxpc3QoKSk7XHJcblxyXG4gICAgLy8gYWRkIGRlc2NyaXB0aW9uIHRhYmxlIGluIHdyYXBwZXJcclxuICAgIGE0ZGl2X2ZyYW1lLmFwcGVuZChjb250YWN0c1RhYmxlKHVzZXJJbnB1dFtpXSwgcHJvamVjdERhdGEpKTtcclxuXHJcbiAgICAvLyBhZGQgb3JkZXIgdGFibGUgaW4gd3JhcHBlclxyXG4gICAgYTRkaXZfZnJhbWUuYXBwZW5kKGNyZWF0ZU9yZGVyVGFibGUoaSkpO1xyXG4gICAgLy8gYWRkIG5vdGUgaW4gd3JhcHBlclxyXG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdCAgbm90ZS5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XHJcblx0ICBhNGRpdl9mcmFtZS5hcHBlbmQobm90ZSk7XHJcbiAgICBub3RlLnRleHRDb250ZW50ID0gJ9CU0L7Qv9C+0LvQvdC10L3QuNC1OiDQqdC40YLQvtC6INCy0YvQvdC+0YHQvdC+0LPQviDRg9GH0LXRgtCwINC00L7Qu9C20LXQvSDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YLRgNC10LHQvtCy0LDQvdC40Y/QvCDQodCi0J8gMzMyNDMuMjAuMjYyLTE3Lic7XHJcbiAgICBcclxuICAgIC8vIGFkZCBjaXBoZXIgaW4gd3JhcHBlclxyXG4gICAgYTRkaXZfZnJhbWUuYXBwZW5kKGFkZENpcGhlclRhYmxlKHByb2plY3REYXRhLCB1c2VySW5wdXRbaV0sIGksIHVzZXJJbnB1dCkpO1xyXG4gICAgLy8gYWRkIGFzaWRlIGZyYW1lIGluIHdyYXBwZXJcclxuICAgIGE0ZGl2X2ZyYW1lLmFwcGVuZChhZGRBc2lkZVRhYmxlKCkpO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZmlsbE9yZGVyVGFibGUodXNlcklucHV0W2ldLCBpLCBhcnJDb3VudGVyQnJlYWtlcnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIGNvdW50ZXJzIHN1bVxyXG4gIGFkZFN1bVNlbSh1c2VySW5wdXQpO1xyXG5cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9