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
exports.push([module.i, "@font-face {\r\n  font-family: 'GOST 2.304-81 type A'; \r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n@media print {\r\n  /* *,\r\n  *:before,\r\n  *:after,\r\n  *:first-letter,\r\n  p:first-line,\r\n  /* div:first-line, \r\n  blockquote:first-line,\r\n  li:first-line {\r\n      background: transparent !important;\r\n      color: #000 !important;\r\n      box-shadow: none !important;\r\n      text-shadow: none !important;\r\n  } */\r\n  /* здесь будут стили для печати */\r\n    header, .main-table, footer {\r\n    display: none !important;\r\n\r\n  }\r\n  .a4_div {\r\n    page-break-after: always !important;\r\n    break-after: always !important;\r\n    page-break-inside: avoid;\r\n    float: none !important; \r\n    border: none !important;\r\n  } \r\n\r\n  .сipher_table td{\r\n    font-size: 12pt;\r\n  }\r\n\r\n  .сipher_table tr:nth-child(1) td:nth-child(7){\r\n    font-size: 24pt;\r\n  }\r\n\r\n  .square_checked {\r\n    -webkit-print-color-adjust: exact;\r\n    color-adjust: exact;\r\n  }\r\n\r\n  @page {\r\n    size: auto;  \r\n    margin: 0;  \r\n  }\r\n/* h6 {\r\n  -webkit-display: none;\r\n}\t */\r\n}\r\n/* @media print and (-webkit-min-device-pixel-ratio:0)\r\nand (min-resolution:.001dpcm) {\r\nh6 {\r\n  -webkit-display: none;\r\n} \r\n} */\r\nh6 {\r\nheight: 1px;\r\n}\r\n\r\n* {\tmargin: 0;\r\npadding: 0;\r\nbox-sizing: border-box;\r\n\r\nfont-family: 'GOST 2.304-81 type A', sans-serif;\r\ncolor: black; \r\n}\r\n\r\n.container {\r\nwidth: 210mm;\r\nmargin: auto;\r\n/* background: url('/img/0001.jpg'); */\r\n}\r\nheader,\r\nfooter {\r\npadding: 15px 0;\r\nbackground: #48D1CC;\r\ncolor:  white;\r\n}\r\n/* КНОПКИ */\r\n.btn {\r\nwidth: 100%;\r\nheight: 30px;\r\nbackground: #008B8B;\r\ncolor: white;\r\nborder: none;\r\nborder-radius: 5px;\r\nmargin: 5px 0;\r\nfont-size: 21px;;\r\n}\r\n.btn:last-child{\r\nmargin: 20px 0;\r\n}\r\n.btn:hover, .input-btn:hover {\r\nbackground:\t#008C33;\r\nborder: #0b6603 solid 2px;\r\n}\r\n/*Div с верхней таблицой */\r\n.main-table {\r\nbackground: #AFEEEE;\r\nfont-size: 21px;\r\n}\r\n/*Легенды*/\r\nlegend{\r\npadding-top: 5px;\r\n}\r\n/*ТАБЛИЦЫ, общие свойства*/\r\ntable {\r\nborder-collapse: collapse;\r\n}\r\ntd, th {\r\nborder: 0.25mm solid #000;\r\n}\r\ntbody tr:nth-child(2n-1) {\r\nbackground: #e3f8ea;\r\n}\r\ntr:nth-child(2n), thead {\r\nbackground: #fff;\r\n}\r\n/*ТАБЛИЦА ИНФОРМАЦИИ*/\r\n.info_table {\r\nwidth: 100%;\r\n}\r\n.info_table td, .info_table th {\r\nborder: 2px solid #008B8B;\r\n}\r\n.info_table td:nth-child(1),  .info_table td:nth-child(2){\r\npadding-left: 5px;\r\n}\r\n.info_table td:last-child{\r\ntext-align: center;\r\n}\r\n.info_table th:first-child {\r\nwidth: 40mm;\r\n}\r\n.info_table th:last-child {\r\nwidth: 15mm;\r\n}\r\n.info_table .last_td {\r\nfont-weight: 800;\r\nbackground: #AFEEEE;\r\nborder: none;\r\ntext-align: right;\r\npadding-right: 5px;\r\n}\r\n/*КОНТЕЙНЕРЫ ДЛЯ ОПРОСНЫХ*/\r\n.order_container {\r\nbackground: #48D1CC;\r\n}\r\n.a4_div:nth-child(4n-2){\r\nbackground: #d0ecec;\r\n}\r\n.a4_div:nth-child(4n){\r\nbackground: #c1e6c1;\r\n}\r\n.a4_div {\r\nheight: 296.5mm;\r\ndisplay: block;\r\nborder: 1px solid black;\r\nposition: relative;\r\n}\r\n.a4_div_frame {\r\nfont-size: 11.5pt;\r\nheight: 287mm;\r\nwidth: 185mm;\r\nleft: 20mm;\r\nbottom: 5mm;\r\nborder: 0.6mm solid black;\r\nposition: absolute;\t\r\ndisplay: block; /*del*/\r\n}\r\n/*ОПИСАТЕЛЬНАЯ ТАБЛИЦА ОПРОСНОГО*/\r\n.legend_table {\r\nwidth: 50%;\r\ntext-align: center;\r\nmargin-left: 180px;\r\n}\r\n.descript_table {\r\nmargin-left: 80px;\r\nwidth: 140mm;\r\n}\r\n.descript_table td {\r\npadding: 1px 0 1px 5px;\r\n}\r\n/*ТАБЛИЦА-ОПРОСНЫЙ*/\r\n.order_table {\r\nwidth: 100%;\r\nmargin-top: 10px;\r\n}\r\n.order_table td:nth-child(1) {\r\nwidth: 15mm;\r\ntext-align: center;\r\nborder-left: none;\r\n}\r\n/* .order_table td:last-child{\r\n\r\n} */\r\n.order_table td:nth-child(2) {\r\nwidth: 70mm;\r\ntext-align: left;\r\npadding-left: 5px;\r\n}\r\n.order_table td:nth-child(3) {\r\ntext-align: left;\r\npadding-left: 5px;\r\nborder-right: none;\r\n}\r\n.order_table tr:nth-child(1) td {\r\ntext-align: center;\r\nheight: 30px;\r\npadding: 0;\r\n}\r\n.square {\r\nwidth: 12px;\r\nheight: 12px;\r\nborder: 1px solid #000;\r\nfloat: left;\r\nmargin-top: 2px;\r\nmargin-right: 5px;\r\nmargin-bottom: 1px;\r\n}\r\n.square:last-child {\r\nmargin-bottom: 2px;\r\n}\r\n.square_checked {\r\nbackground: #000;\r\n}\r\n\r\n/*свойства для опросника, где нужно в одну строку квадратики вписать*/\r\n.inline_block {\r\ndisplay: inline-block;\r\nwidth: 49%;\r\n}\r\n/*Примечание после опросного*/\r\n.note{\r\npadding: 5px;\r\n}\r\n/*РАМКА-ШИФР*/\r\n.сipher_table {\r\n  width: 100%;\r\nposition: absolute;\r\nbottom: 0;\r\ntext-align: center;\r\n}\r\n.сipher_table td{\r\n  line-height: 0.95;\r\n  font-size: 12pt;;\r\nbackground: #fff;\r\nborder-right: #000 solid 0.6mm;\r\nborder-left: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td:nth-child(4),\r\n.сipher_table tr:nth-child(5) td:nth-child(2){\r\nletter-spacing: -0.5px;\r\n/* font-size: 14px;\t */\r\n}\r\n.сipher_table td:nth-child(n+7){\r\nborder: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:first-child td,\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+5){\r\nborder-top: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(6) td:nth-child(6){\r\nborder-bottom: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table td:first-child {\r\nborder-left: none;\r\n}\r\n.сipher_table td:last-child {\r\nborder-right: none;\r\n}\r\n.сipher_table tr:last-child td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+4){\r\nborder-bottom: none;\t\r\n}\r\n.сipher_table tr:nth-child(n+6) td:nth-child(1), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(2), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(3) {\r\ntext-align: left;\r\npadding-left: 2px;\r\n}\r\n.сipher_table tr:first-child td:nth-child(1), \r\n.сipher_table tr:first-child td:nth-child(2), \r\n.сipher_table tr:first-child td:nth-child(3), \r\n.сipher_table tr:first-child td:nth-child(4),\r\n.сipher_table tr:first-child td:nth-child(6) {\r\nwidth: 10mm;\r\n}\r\n.сipher_table tr:first-child td:nth-child(5) {\r\nwidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(5) {\r\nwidth: 70mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(6),\r\n.сipher_table tr:nth-child(6) td:nth-child(7) {\r\nwidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(1) td:nth-child(7){\r\nfont-size: 24pt;\r\n}\r\n.сipher_table tr td:first-child{\r\nheight: 5mm;\r\n}\r\n.p_besp{\r\ndisplay: inline-block;\r\n/*margin-bottom: 10px;*/\r\n}\r\n.logo_besp{\r\ndisplay: inline-block;\r\nmargin: 0px 0 -12px 7px;\t\r\n}\r\n/*ПРЯЧЕМ ФОРМУ ВНЕСЕНИЯ СЧЕТЧИКОВ И АВТОМАТОВ ПОСЛЕ ЕЕ ЗАПОЛНЕНИЯ*/\r\n.hide_counters_n_breakers_container {\r\n  display: none;\r\n}\r\n\r\n/*ПОКАЗЫВАЕМ*/\r\n.hide_info_table_wrapper {\r\n  display: none;\r\n}\r\n.show_info_table_wrapper {\r\ndisplay: block;\r\n}\r\n.footer_show {\r\ndisplay: block;\t\r\n}\r\nfooter {\r\ndisplay: none;\r\n}\r\n\r\n/*ФОРМА ВВОДА СЧЕТЧИКОВ И ВЫКЛЮЧАТЕЛЕЙ*/\r\n.counters_n_breakers_container {\r\nbackground: #AFEEEE;\r\nfont-size: 21px;\r\nmin-height: 823px;\r\n}\r\n.counters_n_breakers_container input {\r\nfont-size: 21px;\t\r\n}\r\n/*нумерация листов*/\r\n.input_page{\r\n/* background: #48D1CC; */\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\t\r\npadding-left: 40px;\r\n}\r\n.input_page p {\r\n  display: inline-block;\r\n}\r\n/*СЧЕТЧИКИ*/\r\n.counters_wrapper{\r\nbackground: #AFEEEE;\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\t\r\npadding-left: 40px;\r\n\r\n}\r\n.input_page p,\r\n.counters_wrapper p{\r\npadding-top: 15px;\r\n}\r\n.counters_wrapper .counter_note {\r\npadding: 0;\r\nfont-size: 16px;\r\ncolor: #0b6603;\r\n}\r\n.counters_wrapper .counter_note:last-child {\r\npadding-bottom: 5px;\r\n}\r\n.counters_n_breakers_container #counter-1f,\r\n.counters_n_breakers_container #counter-3f {\r\nwidth: 91%;\r\n}\r\n.input_page #input_page\r\n/*, .counters_n_breakers_container #counter-3f*/\r\n{\r\nmargin-bottom: 13px;\r\n}\r\n\r\n/*ВЫКЛЮЧАТЕЛИ*/\r\n.breaker_div_radio,\r\n.breaker_div {\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\r\npadding-left: 40px;\t\t\r\n}\r\n.breaker_div_radio{\r\npadding-bottom: 10px;\r\n}\r\n.breaker_div_radio:nth-child(2n-1){\r\n  background: #5fe67c;\r\n}\r\n.breaker_div_radio:nth-child(2n){\r\nbackground: #4ff9aa;\r\n}\r\n.breaker_div:nth-child(2n-1){\r\nbackground: #48D1CC;\r\n}\r\n.breaker_div:nth-child(2n){\r\nbackground: #AFEEEE;\r\n}\r\n.breaker_div_radio .breaker_p,\r\n.breaker_div .breaker_p{\r\ntext-align: center;\r\npadding: 15px 0 2px 0;\t\r\nmargin-left: -40px;\r\n}\r\n\r\n.breaker_div .input-p{\r\npadding: 8px 0 2px 0;\t\r\n}\r\n.breaker_div_radio label{\r\npadding: 3px 0 0 10px;\r\n}\r\n\r\n.breaker_div input:last-child{\r\nmargin-bottom: 12px;\r\n}\r\n\r\n\r\n/*формат (А4)*/\r\n.format_div{\r\nbottom: 1px;\r\n  right: 92px;\r\n  position: absolute;\r\n}\r\n\r\n/*БОКОВАЯ ЧАСТЬ РАМКИ*/\r\n.aside_frame {\r\n/*transform: rotate(-90.0deg); */\r\nposition: absolute;\r\nbottom: -0.5mm;\r\nleft: -13mm;\r\n}\r\n.aside_frame span{\r\n  transform: rotate(-90.0deg);\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -webkit-writing-mode: vertical-rl;\r\n  writing-mode: vertical-rl;\r\n}\r\n.aside_frame td{\r\ntext-align: center;\r\nborder: 0.6mm solid black;\r\nfont-size: 12pt;\r\ntransform: rotate(-90.0deg);\r\n\r\n}\r\n.aside_frame tr:nth-child(2n+1) td{\r\nheight: 25.3mm;\r\n}\r\n.aside_frame tr:nth-child(2) td{\r\nheight: 35.6mm;\r\n}\r\n.aside_frame td:first-child{\r\nwidth: 5mm;\r\n}\r\n.aside_frame td:last-child{\r\nwidth: 7mm;\r\nborder-right: none;\r\n} \r\n\r\n/*ввод № страницы*/\r\n#input_page{\r\ntext-align: center;\r\n}\r\n.signature{\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: -7px;\r\n  position: absolute;\r\n}\r\n.signature_boss {\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: 15px;\r\n  position: absolute;\r\n}\r\n.signature_boss2 {\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: 33px;\r\n  position: absolute;\r\n}", ""]);
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



module.exports = content.locals || {};

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
/* harmony import */ var _table_for_order_n_works_create_info_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-for-order_n_works/create-info-table */ "./src/layout/scripts/table-for-order_n_works/create-info-table.js");
/* harmony import */ var _for_order_list_contacts_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./for-order-list/contacts-table */ "./src/layout/scripts/for-order-list/contacts-table.js");
/* harmony import */ var _for_order_list_legend_of_order_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./for-order-list/legend-of-order-list */ "./src/layout/scripts/for-order-list/legend-of-order-list.js");
/* harmony import */ var _for_order_list_create_order_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./for-order-list/create-order-table */ "./src/layout/scripts/for-order-list/create-order-table.js");
/* harmony import */ var _for_order_list_fill_order_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./for-order-list/fill-order-table */ "./src/layout/scripts/for-order-list/fill-order-table.js");
/* harmony import */ var _cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cipher/add-cipher-table */ "./src/layout/scripts/cipher/add-cipher-table.js");
/* harmony import */ var _cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cipher/add-aside-table */ "./src/layout/scripts/cipher/add-aside-table.js");
/* harmony import */ var _cipher_add_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cipher/add-format */ "./src/layout/scripts/cipher/add-format.js");
/* harmony import */ var _for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./for-order-list/add-sum-sem */ "./src/layout/scripts/for-order-list/add-sum-sem.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var userInput = localStorage.getItem("userInput");
userInput = Object(_data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__["default"])(userInput);
console.log(userInput); // if (localStorage.getItem('userPageInput')) {
//   const userPageInput = document.getElementById('input_page');
//   userPageInput.value = localStorage.getItem('userPageInput');
// }

var projectData = JSON.parse(localStorage.getItem("projectData"));
console.log(projectData);
var arrCounterBreakers = [];

var _iterator = _createForOfIteratorHelper(userInput),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
  _iterator.e(err);
} finally {
  _iterator.f();
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
  e.preventDefault(); // const userPageInput = document.getElementById('input_page').value;
  // localStorage.setItem("userPageInput", userPageInput);

  var countersAndBreakersWrapper = document.getElementById('counters_n_breakers_container');
  countersAndBreakersWrapper.classList.add('hide_counters_n_breakers_container');

  for (var i = 0; i < userInput.length; i += 1) {
    // add main table
    var infoTableWrapper = document.getElementById('info_table_wrapper');
    infoTableWrapper.classList.add('show_info_table_wrapper');
    var infoTable = document.querySelector('.info_table_body');
    var rowForInfoTable = Object(_table_for_order_n_works_create_info_table__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i], true);
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

    a4div_frame.append(Object(_cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_8__["default"])(projectData, '290', 'order', userInput[i], i, userInput)); // add aside frame in wrapper

    a4div_frame.append(Object(_cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_9__["default"])());
    a4div.append(Object(_cipher_add_format__WEBPACK_IMPORTED_MODULE_10__["default"])('A4'));
  }

  for (var _i = 0; _i < userInput.length; _i += 1) {
    Object(_for_order_list_fill_order_table__WEBPACK_IMPORTED_MODULE_7__["default"])(userInput[_i], _i, arrCounterBreakers);
  } // add counters sum


  Object(_for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_11__["default"])(userInput);
}; // const shemeBtn = document.getElementById('sсheme_order_sheet__wrapper');
// shemeBtn.onclick = function(e) {
//     e.preventDefault();
//     const userPageInput = document.getElementById('input_page').value;
//     localStorage.setItem("userPageInput", userPageInput);
//     location.href = 'sсheme_order_sheet.html';
// }

/***/ }),

/***/ "./src/layout/scripts/table-for-order_n_works/create-info-table.js":
/*!*************************************************************************!*\
  !*** ./src/layout/scripts/table-for-order_n_works/create-info-table.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createInfoTable = function createInfoTable(sem, needBreakersInfo) {
  //Создаем строку таблицы	
  var row = document.createElement("TR"); // Создаем ячейки в вышесозданной строке

  var td1 = document.createElement("TD");
  var td2 = document.createElement("TD");
  var td3 = document.createElement("TD"); // Наполняем ячейки

  td1.textContent = sem.SEMType;

  if (needBreakersInfo) {
    if (sem.counterCountInSEM === 1) {
      td2.textContent = "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ".concat(sem.installation, ". ").concat(sem.description, " (").concat(sem.breaker1Value, " \u0410)");
    } else if (sem.counterCountInSEM === 2) {
      td2.textContent = "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ".concat(sem.installation, ". ").concat(sem.description, " (").concat(sem.breaker1Value, " \u0410; ").concat(sem.breaker2Value, " \u0410)");
    }
  } else {
    td2.textContent = "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 ".concat(sem.installation, ". ").concat(sem.description);
  }

  td3.textContent = sem.countOfSEM;
  row.append(td1, td2, td3);
  return row;
};

/* harmony default export */ __webpack_exports__["default"] = (createInfoTable);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvb3JkZXItbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9mb250cy9HT1NUIDIuMzA0LTgxIHR5cGUgQS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvb3JkZXItbGlzdC5jc3M/MWM2YiIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1hc2lkZS10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1jaXBoZXItdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLXBhZ2UtbnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2FkZC1icmVha2Vycy1jaG9pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2FkZC1zdW0tc2VtLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itb3JkZXItbGlzdC9icmVha2VyLWRlZmF1bHQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvY29udGFjdHMtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2NyZWF0ZS1vcmRlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvZmlsbC1vcmRlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvbGVnZW5kLW9mLW9yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3RhYmxlLWZvci1vcmRlcl9uX3dvcmtzL2NyZWF0ZS1pbmZvLXRhYmxlLmpzIl0sIm5hbWVzIjpbImFkZEFzaWRlVGFibGUiLCJhc2lkZV9mcmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJvdzEiLCJyb3cyIiwicm93MyIsImFwcGVuZCIsInRkMV8xIiwic3Bhbl90ZDFfMSIsInRkMV8yIiwidGQyXzEiLCJzcGFuX3RkMl8xIiwidGQyXzIiLCJ0ZDNfMSIsInNwYW5fdGQzXzEiLCJ0ZDNfMiIsImlubmVySFRNTCIsImFkZENpcGhlclRhYmxlIiwicHJvamVjdCIsInN1YnNlY3Rpb24iLCJ0eXBlT2ZQYWdlIiwic2VtIiwiaW5kZXgiLCJtYWluT2JqIiwic2hlbWVQYWdlcyIsImNvbnNvbGUiLCJsb2ciLCLRgWlwaGVyVGFibGUiLCJ0Ym9keSIsInJvd18xIiwicm93XzIiLCJyb3dfMyIsInJvd180Iiwicm93XzUiLCJyb3dfNiIsInJvd183Iiwicm93XzgiLCJyb3dfOSIsInJvd18xMCIsInJvd18xMSIsInRkMV8zIiwidGQxXzQiLCJ0ZDFfNSIsInRkMV82IiwidGQxXzciLCJzZXRBdHRyaWJ1dGUiLCJ0ZDJfMyIsInRkMl80IiwidGQyXzUiLCJ0ZDJfNiIsInRkM18zIiwidGQzXzQiLCJ0ZDNfNSIsInRkM182IiwidGQzXzciLCJ0ZDRfMSIsInRkNF8yIiwidGQ0XzMiLCJ0ZDRfNCIsInRkNF81IiwidGQ0XzYiLCJ0ZDVfMSIsInRkNV8yIiwidGQ1XzMiLCJ0ZDVfNCIsInRkNV81IiwidGQ1XzYiLCJ0ZDZfMSIsInRkNl8yIiwidGQ2XzMiLCJ0ZDZfNCIsInRkNl81IiwidGQ2XzYiLCJ0ZDZfNyIsInRkNl84IiwidGQ3XzEiLCJ0ZDdfMiIsInRkN18zIiwidGQ3XzQiLCJ0ZDdfNSIsInRkN182IiwidGQ3XzciLCJ0ZDhfMSIsInRkOF8yIiwidGQ4XzMiLCJ0ZDhfNCIsInRkOV8xIiwidGQ5XzIiLCJ0ZDlfMyIsInRkOV80IiwidGQ5XzUiLCJ0ZDlfNiIsInRkMTBfMSIsInRkMTBfMiIsInRkMTBfMyIsInRkMTBfNCIsInRkMTFfMSIsInRkMTFfMiIsInRkMTFfMyIsInRkMTFfNCIsImNpcGhlciIsIm5hbWVPZlByb2plY3QiLCJuYW1lT2ZCb3NzIiwic3BsaXQiLCJkIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsInRvZGF5Iiwic3RhZ2VPZlByb2plY3QiLCJ0ZXh0Q29udGVudCIsImFkZE9yZGVyUGFnZU51bWJlciIsImFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyIiwiYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlciIsImFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciIsImlzQm9zc1NpZ25hdHVyZSIsImJvc3NTaWduYXR1cmUiLCJib3NzU2lnbmF0dXJlMiIsImZ1bGxEZWNyaXB0aW9uIiwiU0VNVHlwZSIsImRlY3JpcHRpb25Gb3JXb3JrcyIsInBfYmVzcCIsImxvZ29fYmVzcCIsIm5hbWVPZkRldmVsb3BlciIsImlzRGV2ZWxvcGVyU2lnbmF0dXJlIiwiZGV2ZWxvcGVyU2lnbmF0dXJlIiwiYWRkRm9ybWF0IiwiZm9ybWF0IiwiZm9ybWF0X2RpdiIsImZvcm1hdFBhcmEiLCJhcnJPZlNlbXMiLCJpbnB1dF9wYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZXZpb3VzUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzaGVtZVBhZ2VzU3VtIiwibGVuZ3RoIiwibWFpbk9iamVjdENvbGxlY3QiLCJzdHIiLCJhcnJheU9mVXNlcklucHV0IiwicmVzdWx0QXJyYXkiLCJsZWdlbmRBcnJheSIsIlNFTSIsImFyciIsImNvdW50T2ZTRU0iLCJpbmRleE9mIiwiYnJlYWtlcjFWYWx1ZSIsImJyZWFrZXIyVmFsdWUiLCJjb3VudGVyQ291bnRJblNFTSIsImlucHV0RnJvbVNlbSIsInBpbGxhclR5cGUiLCJwaGFzZTFWYWx1ZSIsInBoYXNlMlZhbHVlIiwib3V0QnJlYWtlcjEiLCJvdXRCcmVha2VyMiIsInRvTG93ZXJDYXNlIiwiZGVzY3JpcHRpb24iLCJhbGVydCIsImluc3RhbGxhdGlvbiIsImkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiY3JlYXRlQnJlYWtlcldyYXBwZXIiLCJwYWlyT2ZQaGFzZUFuZEFtcGVyZSIsIm91dEJyZWFrZXJEZWZhdWx0IiwiaW5wdXRCcmVha2VyRGVmYXVsdCIsImJyYWtlcnNXcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJicmVha2VyRGl2IiwiYnJlYWtlclAiLCJyYWRpb1AiLCJyYWRpb0xhYmVsMSIsImJyZWFrZXJSYWRpbzEiLCJyYWRpb0xhYmVsMiIsImJyZWFrZXJSYWRpbzIiLCJyYWRpb0xhYmVsMyIsImJyZWFrZXJSYWRpbzMiLCJpbnB1dEJyZWFrZXJQIiwiaW5wdXRCcmVha2VyIiwib3V0QnJlYWtlclAiLCJvdXRCcmVha2VyIiwiYWRkQnJlYWtlcnNDaG9pc2UiLCJicmVha2Vyc0FtcGVyc1ZhbHVlcyIsInBoYXNlIiwiYW1wZXJlT3V0IiwiYW1wZXJlSW4iLCJvdXRCcmVha2VyVHlwZSIsImJyZWFrZXJEZWZhdWx0VHlwZSIsImlucHV0QnJlYWtlclR5cGUiLCJvdXRCcmVha2VyckRlZmF1bHRWYWx1ZSIsImlucHV0QnJlYWtlckRlZmF1bHRWYWx1ZSIsImFkZFN1bVNlbSIsImFyck9mU2VtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdW1PZkNvdW50Iiwic3VtT2ZTZW0iLCJ2YWx1ZSIsImJyZWFrZXJUeXBlIiwiY29udGFjdHNUYWJsZSIsImRhdGFPZlByb2plY3QiLCJkZXNjcmlwdFRhYmxlIiwidGFibGVCb2R5Iiwicm93NCIsInJvdzUiLCJyb3c2IiwiY3JlYXRlT3JkZXJUYWJsZSIsIm9yZGVyVGFibGUiLCJ0Qm9keSIsInJvdyIsImoiLCJ0ZCIsImZpbmRUZCIsImxpc3QiLCJjb2x1bW4iLCJlbGVtIiwiY3JlYXRlU3F1YXJlIiwiZmxhZzEiLCJmbGFnMiIsInRleHQiLCJ3cmFwcGVyIiwic3F1YXJlIiwicGFyYSIsImNyZWF0ZVAiLCJmaWxsT3JkZXJUYWJsZSIsImFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzIiwidGQxIiwiY2hpbGROb2RlcyIsImluZGV4T2ZicmVha2VyMSIsImluZGV4T2ZicmVha2VyMiIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMSIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMiIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMyIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMSIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMiIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMyIsImNoZWNrZWQiLCJpbnB1dEJyZWFrZXIxIiwiaW5wdXRCcmVha2VyMiIsImNvdW50ZXIxZiIsImNvdW50ZXIzZiIsInRkMTJfMiIsInRkMTJfMyIsImNyZWF0ZUxlZ2VuZE9mT3JkZXJMaXN0IiwibGVnZW5kIiwidXNlcklucHV0IiwicHJvamVjdERhdGEiLCJKU09OIiwicGFyc2UiLCJhcnJDb3VudGVyQnJlYWtlcnMiLCJnZXRPcmRlckxpc3RzQnV0dG9uIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvdW50ZXJzQW5kQnJlYWtlcnNXcmFwcGVyIiwiaW5mb1RhYmxlV3JhcHBlciIsImluZm9UYWJsZSIsInJvd0ZvckluZm9UYWJsZSIsImNyZWF0ZUluZm9UYWJsZSIsIm9yZGVyV3JhcHBlciIsImg2X2JyZWFrIiwiYTRkaXYiLCJhNGRpdl9mcmFtZSIsIm5vdGUiLCJuZWVkQnJlYWtlcnNJbmZvIiwidGQyIiwidGQzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEcsc0NBQXNDLG1CQUFPLENBQUMsaUhBQXlEO0FBQ3ZHLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFrQztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSwwQ0FBMEMsNERBQTRELE1BQU0sa0JBQWtCLDBKQUEwSiw2Q0FBNkMsaUNBQWlDLHNDQUFzQyx1Q0FBdUMsT0FBTyxnRkFBZ0YsaUNBQWlDLFdBQVcsZUFBZSw0Q0FBNEMs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O0FBQ0EsTUFBTTRELEtBQUssR0FBRzdELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTZELEtBQUssR0FBRzlELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTThELEtBQUssR0FBRy9ELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTStELEtBQUssR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWdFLEtBQUssR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWlFLEtBQUssR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWtFLEtBQUssR0FBR25FLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTW1FLEtBQUssR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTW9FLEtBQUssR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTXFFLEtBQUssR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FxRSxPQUFLLENBQUN0QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXVCLEtBQUssR0FBR3ZFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FzRSxPQUFLLENBQUN2QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXdCLEtBQUssR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXdFLEtBQUssR0FBR3pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXlFLEtBQUssR0FBRzFFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0F5RSxPQUFLLENBQUMxQixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTTJCLEtBQUssR0FBRzNFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTJFLEtBQUssR0FBRzVFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTRFLEtBQUssR0FBRzdFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTTZFLEtBQUssR0FBRzlFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0E2RSxPQUFLLENBQUM5QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTStCLEtBQUssR0FBRy9FLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0E4RSxPQUFLLENBQUMvQixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTWdDLEtBQUssR0FBR2hGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWdGLEtBQUssR0FBR2pGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWlGLEtBQUssR0FBR2xGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FpRixPQUFLLENBQUNsQyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTW1DLEtBQUssR0FBR25GLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FrRixPQUFLLENBQUNuQyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTW9DLEtBQUssR0FBR3BGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FtRixPQUFLLENBQUNwQyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBRUEsTUFBTXFDLEtBQUssR0FBR3JGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FvRixPQUFLLENBQUNyQyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXNDLEtBQUssR0FBR3RGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FxRixPQUFLLENBQUN0QyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXVDLEtBQUssR0FBR3ZGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXVGLEtBQUssR0FBR3hGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTXdGLEtBQUssR0FBR3pGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0F3RixPQUFLLENBQUN6QyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTTBDLEtBQUssR0FBRzFGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0F5RixPQUFLLENBQUMxQyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTTJDLEtBQUssR0FBRzNGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTJGLEtBQUssR0FBRzVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTRGLEtBQUssR0FBRzdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0E0RixPQUFLLENBQUM3QyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTThDLEtBQUssR0FBRzlGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0E2RixPQUFLLENBQUM5QyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0E4QyxPQUFLLENBQUM5QyxZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBRUEsTUFBTStDLE1BQU0sR0FBRy9GLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0E4RixRQUFNLENBQUMvQyxZQUFQLENBQW9CLFNBQXBCLEVBQStCLEdBQS9CO0FBQ0EsTUFBTWdELE1BQU0sR0FBR2hHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0ErRixRQUFNLENBQUNoRCxZQUFQLENBQW9CLFNBQXBCLEVBQStCLEdBQS9CO0FBQ0EsTUFBTWlELE1BQU0sR0FBR2pHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0EsTUFBTWlHLE1BQU0sR0FBR2xHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBRUEsTUFBTWtHLE1BQU0sR0FBR25HLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0FrRyxRQUFNLENBQUNuRCxZQUFQLENBQW9CLFNBQXBCLEVBQStCLEdBQS9CO0FBQ0EsTUFBTW9ELE1BQU0sR0FBR3BHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0FtRyxRQUFNLENBQUNwRCxZQUFQLENBQW9CLFNBQXBCLEVBQStCLEdBQS9CO0FBQ0EsTUFBTXFELE1BQU0sR0FBR3JHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmO0FBQ0EsTUFBTXFHLE1BQU0sR0FBR3RHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFmLENBekl5RixDQTJJekY7O0FBQ0ErQixPQUFLLENBQUN2QixNQUFOLENBQWFDLEtBQWIsRUFBb0JFLEtBQXBCLEVBQTJCK0IsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDQyxLQUF6QyxFQUFnREMsS0FBaEQsRUFBdURDLEtBQXZEO0FBQ0FkLE9BQUssQ0FBQ3hCLE1BQU4sQ0FBYUksS0FBYixFQUFvQkUsS0FBcEIsRUFBMkJrQyxLQUEzQixFQUFrQ0MsS0FBbEMsRUFBeUNDLEtBQXpDLEVBQWdEQyxLQUFoRDtBQUNBbEIsT0FBSyxDQUFDekIsTUFBTixDQUFhTyxLQUFiLEVBQW9CRSxLQUFwQixFQUEyQm1DLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsS0FBekMsRUFBZ0RDLEtBQWhELEVBQXVEQyxLQUF2RDtBQUNBdEIsT0FBSyxDQUFDMUIsTUFBTixDQUFhaUQsS0FBYixFQUFvQkMsS0FBcEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsS0FBekMsRUFBZ0RDLEtBQWhEO0FBQ0EzQixPQUFLLENBQUMzQixNQUFOLENBQWF1RCxLQUFiLEVBQW9CQyxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDQyxLQUF6QyxFQUFnREMsS0FBaEQ7QUFDQWhDLE9BQUssQ0FBQzVCLE1BQU4sQ0FBYTZELEtBQWIsRUFBb0JDLEtBQXBCLEVBQTJCQyxLQUEzQixFQUFrQ0MsS0FBbEMsRUFBeUNDLEtBQXpDLEVBQWdEQyxLQUFoRCxFQUF1REMsS0FBdkQsRUFBOERDLEtBQTlEO0FBQ0F2QyxPQUFLLENBQUM3QixNQUFOLENBQWFxRSxLQUFiLEVBQW9CQyxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDQyxLQUF6QyxFQUFnREMsS0FBaEQsRUFBdURDLEtBQXZEO0FBQ0E3QyxPQUFLLENBQUM5QixNQUFOLENBQWE0RSxLQUFiLEVBQW9CQyxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDO0FBQ0FoRCxPQUFLLENBQUMvQixNQUFOLENBQWFnRixLQUFiLEVBQW9CQyxLQUFwQixFQUEyQkMsS0FBM0IsRUFBa0NDLEtBQWxDLEVBQXlDQyxLQUF6QyxFQUFnREMsS0FBaEQ7QUFDQXJELFFBQU0sQ0FBQ2hDLE1BQVAsQ0FBY3NGLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCQyxNQUE5QixFQUFzQ0MsTUFBdEM7QUFDQXhELFFBQU0sQ0FBQ2pDLE1BQVAsQ0FBYzBGLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCQyxNQUE5QixFQUFzQ0MsTUFBdEMsRUF0SnlGLENBeUp6Rjs7QUFDQXZELE9BQUssQ0FBQzVCLFNBQU4sYUFBcUJFLE9BQU8sQ0FBQ2tGLE1BQTdCLGNBQXVDakYsVUFBdkMsNEJBMUp5RixDQTBKN0I7O0FBRTVEbUMsT0FBSyxDQUFDdEMsU0FBTixHQUFrQkUsT0FBTyxDQUFDbUYsYUFBMUIsQ0E1SnlGLENBNEpoRDs7QUFFekN4QyxPQUFLLENBQUM3QyxTQUFOLEdBQWtCLE1BQWxCLENBOUp5RixDQThKL0Q7O0FBQzFCOEMsT0FBSyxDQUFDOUMsU0FBTixHQUFrQixTQUFsQixDQS9KeUYsQ0ErSjVEOztBQUM3QitDLE9BQUssQ0FBQy9DLFNBQU4sR0FBa0IsTUFBbEIsQ0FoS3lGLENBZ0svRDs7QUFDMUJnRCxPQUFLLENBQUNoRCxTQUFOLEdBQWtCLE9BQWxCLENBakt5RixDQWlLOUQ7O0FBQzNCaUQsT0FBSyxDQUFDakQsU0FBTixHQUFrQixTQUFsQixDQWxLeUYsQ0FrSzVEOztBQUM3QmtELE9BQUssQ0FBQ2xELFNBQU4sR0FBa0IsTUFBbEIsQ0FuS3lGLENBbUsvRDs7QUFFMUJtRCxPQUFLLENBQUNuRCxTQUFOLEdBQWtCLE1BQWxCLENBckt5RixDQXFLL0Q7O0FBQzFCb0QsT0FBSyxDQUFDcEQsU0FBTixHQUFrQkUsT0FBTyxDQUFDb0YsVUFBUixDQUFtQkMsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEIsQ0FBOUIsQ0FBbEIsQ0F0S3lGLENBc0tyQzs7QUFDcERsQyxPQUFLLENBQUNyRCxTQUFOLEdBQWtCLEVBQWxCLENBdkt5RixDQXVLbkU7O0FBRXRCLE1BQU13RixDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFWLENBekt5RixDQTBLekY7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHRixDQUFDLENBQUNHLFFBQUYsS0FBZSxDQUE3QjtBQUNBLE1BQU1DLElBQUksR0FBR0osQ0FBQyxDQUFDSyxXQUFGLEdBQWdCQyxRQUFoQixFQUFiO0FBRUEsTUFBSUMsS0FBSjs7QUFDQSxNQUFJTCxLQUFLLEdBQUcsRUFBWixFQUFnQjtBQUNmSyxTQUFLLGNBQU9MLEtBQVAsY0FBZ0JFLElBQUksQ0FBQ0wsS0FBTCxDQUFXLEVBQVgsRUFBZSxDQUFmLENBQWhCLFNBQW9DSyxJQUFJLENBQUNMLEtBQUwsQ0FBVyxFQUFYLEVBQWUsQ0FBZixDQUFwQyxDQUFMO0FBQ0EsR0FGRCxNQUVPO0FBQ05RLFNBQUssYUFBTUwsS0FBTixjQUFlRSxJQUFJLENBQUNMLEtBQUwsQ0FBVyxFQUFYLEVBQWUsQ0FBZixDQUFmLFNBQW1DSyxJQUFJLENBQUNMLEtBQUwsQ0FBVyxFQUFYLEVBQWUsQ0FBZixDQUFuQyxDQUFMO0FBQ0E7O0FBRURqQyxPQUFLLENBQUN0RCxTQUFOLEdBQWtCK0YsS0FBbEI7QUFDQXRCLE9BQUssQ0FBQ3pFLFNBQU4sR0FBa0IrRixLQUFsQjtBQUNBaEIsUUFBTSxDQUFDL0UsU0FBUCxHQUFtQitGLEtBQW5CO0FBQ0FaLFFBQU0sQ0FBQ25GLFNBQVAsR0FBbUIrRixLQUFuQjs7QUFHQSxNQUFJM0YsVUFBVSxLQUFLLE9BQWYsSUFBMEJBLFVBQVUsS0FBSyxZQUE3QyxFQUEyRDtBQUMxRG1ELFNBQUssQ0FBQ3ZELFNBQU4sR0FBa0IsNkNBQWxCLENBRDBELENBQ087QUFDakUsR0FGRCxNQUVPLElBQUlJLFVBQVUsS0FBSyxPQUFmLElBQTBCQSxVQUFVLEtBQUssWUFBN0MsRUFBMkQ7QUFDakVtRCxTQUFLLENBQUN2RCxTQUFOLEdBQWtCLHFDQUFsQixDQURpRSxDQUNSO0FBQ3pEOztBQUNEd0QsT0FBSyxDQUFDeEQsU0FBTixHQUFrQixRQUFsQixDQWhNeUYsQ0FnTTdEOztBQUM1QnlELE9BQUssQ0FBQ3pELFNBQU4sR0FBa0IsTUFBbEIsQ0FqTXlGLENBaU0vRDs7QUFDMUIwRCxPQUFLLENBQUMxRCxTQUFOLEdBQWtCLFFBQWxCLENBbE15RixDQWtNN0Q7O0FBRTVCK0QsT0FBSyxDQUFDL0QsU0FBTixHQUFrQkUsT0FBTyxDQUFDOEYsY0FBMUIsQ0FwTXlGLENBb003Qzs7QUFFNUMsTUFBSTVGLFVBQVUsS0FBSyxPQUFuQixFQUE0QjtBQUMzQjRELFNBQUssQ0FBQ2lDLFdBQU4sR0FBb0JDLDJFQUFrQixDQUFDNUYsS0FBRCxFQUFRRCxHQUFSLEVBQWFFLE9BQWIsQ0FBdEM7QUFDQSxHQUZELE1BRU8sSUFBSUgsVUFBVSxLQUFLLFlBQW5CLEVBQWlDO0FBQ3ZDNEQsU0FBSyxDQUFDaUMsV0FBTixHQUFvQkUsZ0ZBQXVCLENBQUM3RixLQUFELEVBQVFFLFVBQVIsQ0FBM0MsQ0FEdUMsQ0FHdkM7QUFDQSxHQUpNLE1BSUEsSUFBSUosVUFBVSxLQUFLLE9BQW5CLEVBQTRCO0FBQ2xDNEQsU0FBSyxDQUFDaUMsV0FBTixHQUFvQkcsa0ZBQXlCLENBQUM5RixLQUFELEVBQVFFLFVBQVIsQ0FBN0M7QUFDQSxHQUZNLE1BRUEsSUFBSUosVUFBVSxLQUFLLFlBQW5CLEVBQWlDO0FBQ3ZDNEQsU0FBSyxDQUFDaUMsV0FBTixHQUFvQkksdUZBQThCLENBQUMvRixLQUFELENBQWxEO0FBQ0E7O0FBRURnRSxPQUFLLENBQUMyQixXQUFOLEdBQW9CLFdBQXBCLENBbE55RixDQWtOeEQ7O0FBQ2pDMUIsT0FBSyxDQUFDMEIsV0FBTixHQUFvQixVQUFwQjs7QUFFQSxNQUFJL0YsT0FBTyxDQUFDb0csZUFBWixFQUE0QjtBQUMzQixRQUFNQyxhQUFhLEdBQUcxSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdEI7QUFDQSxRQUFNMEgsY0FBYyxHQUFHM0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0F5SCxpQkFBYSxDQUFDeEgsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZ0JBQTVCO0FBQ0F3SCxrQkFBYyxDQUFDekgsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsaUJBQTdCO0FBQ0F1SCxpQkFBYSxDQUFDMUUsWUFBZCxDQUEyQixLQUEzQixFQUFrQyxvQkFBbEM7QUFDQTJFLGtCQUFjLENBQUMzRSxZQUFmLENBQTRCLEtBQTVCLEVBQW1DLG9CQUFuQztBQUNBMkMsU0FBSyxDQUFDbEYsTUFBTixDQUFhaUgsYUFBYjtBQUNBekIsVUFBTSxDQUFDeEYsTUFBUCxDQUFja0gsY0FBZDtBQUNBLEdBOU53RixDQWdPekY7OztBQUVBLE1BQUlwRyxVQUFVLEtBQUssT0FBbkIsRUFBNEI7QUFDM0JzRSxTQUFLLENBQUN1QixXQUFOLEdBQW9CNUYsR0FBRyxDQUFDb0csY0FBeEIsQ0FEMkIsQ0FDYTtBQUN4QyxHQUZELE1BRU8sSUFBSXJHLFVBQVUsS0FBSyxZQUFmLElBQStCQSxVQUFVLEtBQUssWUFBbEQsRUFBZ0U7QUFDdEUsUUFBSUMsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUE5QixJQUFxQ2xGLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBdkUsRUFBNEU7QUFDM0ViLFdBQUssQ0FBQ3VCLFdBQU4sR0FBb0IscUVBQXBCLENBRDJFLENBQ2dCO0FBQzNGLEtBRkQsTUFFTyxJQUFJNUYsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUE5QixJQUFxQ2xGLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBdkUsRUFBNEU7QUFDbEZiLFdBQUssQ0FBQ3VCLFdBQU4sR0FBb0IsNkVBQXBCLENBRGtGLENBQ2lCO0FBQ25HLEtBRk0sTUFFQSxJQUFJNUYsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUE5QixJQUFxQ2xGLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBdkUsRUFBNEU7QUFDbEZiLFdBQUssQ0FBQ3VCLFdBQU4sR0FBb0IscUVBQXBCLENBRGtGLENBQ1M7QUFDM0YsS0FGTSxNQUVBLElBQUk1RixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQTlCLElBQXFDbEYsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUF2RSxFQUE0RTtBQUNsRmIsV0FBSyxDQUFDdUIsV0FBTixHQUFvQiw2RUFBcEIsQ0FEa0YsQ0FDaUI7QUFDbkcsS0FGTSxNQUVBLElBQUk1RixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQTlCLElBQXFDbEYsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUF2RSxFQUE0RTtBQUNsRmIsV0FBSyxDQUFDdUIsV0FBTixHQUFvQixrRkFBcEIsQ0FEa0YsQ0FDc0I7QUFDeEc7QUFDRCxHQVpNLE1BWUEsSUFBSTdGLFVBQVUsS0FBSyxPQUFuQixFQUE0QjtBQUNsQ3NFLFNBQUssQ0FBQ3VCLFdBQU4sYUFBdUI1RixHQUFHLENBQUNzRyxrQkFBM0IsbVZBRGtDLENBQzhFO0FBQ2hIOztBQUdELE1BQU1DLE1BQU0sR0FBRy9ILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0E4SCxRQUFNLENBQUM3SCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNBNEgsUUFBTSxDQUFDL0UsWUFBUCxDQUFvQixTQUFwQixFQUErQixjQUEvQjtBQUNBOEMsT0FBSyxDQUFDckYsTUFBTixDQUFhc0gsTUFBYjtBQUNBQSxRQUFNLENBQUM1RyxTQUFQLEdBQW1CLFFBQVEsTUFBUixHQUFpQix1QkFBcEM7QUFDQSxNQUFNNkcsU0FBUyxHQUFHaEksUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0ErSCxXQUFTLENBQUM5SCxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixXQUF4QjtBQUNBNkgsV0FBUyxDQUFDaEYsWUFBVixDQUF1QixLQUF2QixFQUE4QixxQkFBOUI7QUFDQThDLE9BQUssQ0FBQ3JGLE1BQU4sQ0FBYXVILFNBQWI7QUFDQTs7QUFFQWpDLFFBQU0sQ0FBQzVFLFNBQVAsR0FBbUIsVUFBbkIsQ0FoUXlGLENBZ1ExRDs7QUFDL0I2RSxRQUFNLENBQUM3RSxTQUFQLEdBQW1CLFVBQW5CLENBalF5RixDQWlRMUQ7O0FBRS9CZ0YsUUFBTSxDQUFDaEYsU0FBUCxHQUFtQixTQUFuQixDQW5ReUYsQ0FtUTNEOztBQUM5QmlGLFFBQU0sQ0FBQ2pGLFNBQVAsR0FBbUJFLE9BQU8sQ0FBQzRHLGVBQVIsQ0FBd0J2QixLQUF4QixDQUE4QixHQUE5QixFQUFtQyxDQUFuQyxDQUFuQixDQXBReUYsQ0FvUS9COztBQUUxRCxNQUFJckYsT0FBTyxDQUFDNkcsb0JBQVosRUFBaUM7QUFDaEMsUUFBTUMsa0JBQWtCLEdBQUduSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBM0I7QUFDQWtJLHNCQUFrQixDQUFDakksU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLFdBQWpDOztBQUNBLFFBQUlrQixPQUFPLENBQUM0RyxlQUFSLEtBQTRCLGdCQUFoQyxFQUFrRDtBQUNqREUsd0JBQWtCLENBQUNuRixZQUFuQixDQUFnQyxLQUFoQyxFQUF1QyxxQkFBdkM7QUFDQSxLQUZELE1BRU8sSUFBSTNCLE9BQU8sQ0FBQzRHLGVBQVIsS0FBNEIsZ0JBQWhDLEVBQWtEO0FBQ3hERSx3QkFBa0IsQ0FBQ25GLFlBQW5CLENBQWdDLEtBQWhDLEVBQXVDLG9CQUF2QztBQUNBLEtBRk0sTUFFQSxJQUFJM0IsT0FBTyxDQUFDNEcsZUFBUixLQUE0QixnQkFBaEMsRUFBa0Q7QUFDeERFLHdCQUFrQixDQUFDbkYsWUFBbkIsQ0FBZ0MsS0FBaEMsRUFBdUMsb0JBQXZDO0FBQ0EsS0FGTSxNQUVBO0FBQ05tRix3QkFBa0IsQ0FBQ25GLFlBQW5CLENBQWdDLEtBQWhDLEVBQXVDLG9CQUF2QztBQUNBOztBQUNEcUQsVUFBTSxDQUFDNUYsTUFBUCxDQUFjMEgsa0JBQWQ7QUFDQTs7QUFFRCxTQUFPckcsV0FBUDtBQUNBOztBQUVjViw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUMxUkE7QUFBQSxTQUFTZ0gsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFFMUIsTUFBTUMsVUFBVSxHQUFHdEksUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FxSSxZQUFVLENBQUNwSSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixZQUF6QjtBQUVBLE1BQU1vSSxVQUFVLEdBQUd2SSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbkI7QUFDQXNJLFlBQVUsQ0FBQ3JJLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFFBQXpCO0FBRUFvSSxZQUFVLENBQUNuQixXQUFYLGtEQUFtQ2lCLE1BQW5DO0FBQ0FDLFlBQVUsQ0FBQzdILE1BQVgsQ0FBa0I4SCxVQUFsQjtBQUVBLFNBQU9ELFVBQVA7QUFDQTs7QUFFY0Ysd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNmLGtCQUFULENBQTRCNUYsS0FBNUIsRUFBbUNELEdBQW5DLEVBQXdDZ0gsU0FBeEMsRUFBbUQ7QUFFbEQsTUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsb0JBQXJCLENBQW5COztBQUVBLE1BQUlsSCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNoQixXQUFPLENBQUNnSCxVQUFELEdBQWMsQ0FBckI7QUFDQSxHQUZELE1BRU8sSUFBSUQsU0FBUyxDQUFDL0csS0FBSyxHQUFHLENBQVQsQ0FBVCxDQUFxQm9HLE9BQXJCLENBQTZCbkIsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsTUFBK0NsRixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLENBQS9DLElBQ1A4QixTQUFTLENBQUMvRyxLQUFLLEdBQUcsQ0FBVCxDQUFULENBQXFCb0csT0FBckIsQ0FBNkJuQixLQUE3QixDQUFtQyxHQUFuQyxFQUF3QyxDQUF4QyxNQUErQ2xGLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsQ0FENUMsRUFDdUU7QUFDN0UsUUFBTWtDLFlBQVksR0FBRyxDQUFDNUksUUFBUSxDQUFDNkksYUFBVCx3Q0FBdURwSCxLQUFLLEdBQUcsQ0FBL0Qsb0ZBQTRJMkYsV0FBbEs7QUFFQSxXQUFPLENBQUN3QixZQUFELEdBQWdCLENBQXZCO0FBQ0EsR0FMTSxNQUtBLElBQUlKLFNBQVMsQ0FBQy9HLEtBQUssR0FBRyxDQUFULENBQVQsQ0FBcUJvRyxPQUFyQixDQUE2Qm5CLEtBQTdCLENBQW1DLEdBQW5DLEVBQXdDLENBQXhDLE1BQStDbEYsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixDQUEvQyxJQUNQOEIsU0FBUyxDQUFDL0csS0FBSyxHQUFHLENBQVQsQ0FBVCxDQUFxQm9HLE9BQXJCLENBQTZCbkIsS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsTUFBK0NsRixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLENBRDVDLEVBQ3VFO0FBQzdFLFFBQU1rQyxhQUFZLEdBQUcsQ0FBQzVJLFFBQVEsQ0FBQzZJLGFBQVQsd0NBQXVEcEgsS0FBSyxHQUFHLENBQS9ELG9GQUE0STJGLFdBQWxLOztBQUVBLFdBQU93QixhQUFZLEdBQUcsQ0FBdEI7QUFDQTtBQUNEOztBQUVELFNBQVN0Qix1QkFBVCxDQUFpQzdGLEtBQWpDLEVBQXdDRSxVQUF4QyxFQUFvRDtBQUVuRCxNQUFNOEcsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsb0JBQXJCLENBQW5CO0FBRUEvRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTRHLFVBQVosRUFBd0I5RyxVQUFVLENBQUNGLEtBQUQsQ0FBbEMsRUFBMkNBLEtBQTNDO0FBRUEsU0FBTyxDQUFDZ0gsVUFBRCxHQUFjOUcsVUFBVSxDQUFDRixLQUFELENBQXhCLEdBQWtDQSxLQUF6QztBQUNBLEMsQ0FDRDs7O0FBQ0EsU0FBUytGLDhCQUFULENBQXdDL0YsS0FBeEMsRUFBK0M7QUFFOUMsTUFBTWdILFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLG9CQUFyQixDQUFuQjtBQUVBL0csU0FBTyxDQUFDQyxHQUFSLENBQVk0RyxVQUFaLEVBQXdCaEgsS0FBeEI7QUFFQSxTQUFPLENBQUNnSCxVQUFELEdBQWNoSCxLQUFyQjtBQUNBOztBQUVELFNBQVM4Rix5QkFBVCxDQUFtQzlGLEtBQW5DLEVBQTBDcUgsYUFBMUMsRUFBeUQ7QUFFeEQsTUFBTUwsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsb0JBQXJCLENBQW5CO0FBRUEvRyxTQUFPLENBQUNDLEdBQVIsQ0FBWTRHLFVBQVosRUFBd0JoSCxLQUF4QixFQUErQnFILGFBQS9CO0FBRUEsU0FBTyxDQUFDTCxVQUFELEdBQWNoSCxLQUFkLEdBQXFCcUgsYUFBYSxDQUFDQyxNQUExQztBQUNBLEMsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUEsU0FBU0MsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDO0FBQy9CLE1BQUlDLGdCQUFnQixHQUFHRCxHQUFHLENBQUN2QyxLQUFKLENBQVUsSUFBVixDQUF2QjtBQUVBLE1BQUl5QyxXQUFXLEdBQUcsRUFBbEI7QUFFQSxNQUFJQyxXQUFXLEdBQUdGLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsQ0FBb0J4QyxLQUFwQixDQUEwQixHQUExQixDQUFsQjs7QUFFQSxXQUFTMkMsR0FBVCxDQUFhQyxHQUFiLEVBQWtCO0FBRWpCLFNBQUtDLFVBQUwsR0FBa0IsQ0FBQ0QsR0FBRyxDQUFDRixXQUFXLENBQUNJLE9BQVosQ0FBb0IsWUFBcEIsQ0FBRCxDQUF0QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBQ0gsR0FBRyxDQUFDRixXQUFXLENBQUNJLE9BQVosQ0FBb0IsVUFBcEIsQ0FBRCxDQUFILENBQXFDOUMsS0FBckMsQ0FBMkMsR0FBM0MsRUFBZ0QsQ0FBaEQsQ0FBdEI7QUFDQSxTQUFLZ0QsYUFBTCxHQUFxQixDQUFDSixHQUFHLENBQUNGLFdBQVcsQ0FBQ0ksT0FBWixDQUFvQixVQUFwQixDQUFELENBQUgsQ0FBcUM5QyxLQUFyQyxDQUEyQyxHQUEzQyxFQUFnRCxDQUFoRCxDQUFELElBQXVELElBQTVFO0FBQ0EsU0FBS21CLE9BQUwsR0FBZXlCLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDSSxPQUFaLENBQW9CLFNBQXBCLENBQUQsQ0FBbEI7QUFDQSxTQUFLRyxpQkFBTCxHQUF5QixDQUFDLEtBQUs5QixPQUFMLENBQWFuQixLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQTFCOztBQUVBLFFBQUksS0FBS2lELGlCQUFMLEtBQTJCLENBQTNCLElBQ0FMLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDSSxPQUFaLENBQW9CLFdBQXBCLENBQUQsQ0FBSCxDQUFzQ1QsTUFBdEMsS0FBaUQsQ0FEckQsRUFDd0Q7QUFDdkQsV0FBS2EsWUFBTCxHQUFvQixHQUFwQjtBQUNBLEtBSEQsTUFHTyxJQUFJLEtBQUtELGlCQUFMLEtBQTJCLENBQS9CLEVBQWtDO0FBQ3hDLFdBQUtDLFlBQUwsR0FBb0JOLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDSSxPQUFaLENBQW9CLFdBQXBCLENBQUQsQ0FBdkI7QUFDQSxLQUZNLE1BRUEsSUFBSSxLQUFLRyxpQkFBTCxLQUEyQixDQUEzQixJQUNQTCxHQUFHLENBQUNGLFdBQVcsQ0FBQ0ksT0FBWixDQUFvQixXQUFwQixDQUFELENBQUgsQ0FBc0NULE1BQXRDLEtBQWlELENBRDlDLEVBQ2lEO0FBQ3ZELFdBQUthLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxLQUhNLE1BR0E7QUFDTixXQUFLQSxZQUFMLEdBQW9CTixHQUFHLENBQUNGLFdBQVcsQ0FBQ0ksT0FBWixDQUFvQixXQUFwQixDQUFELENBQXZCO0FBQ0E7O0FBRUQsU0FBS0ssVUFBTCxHQUFrQlAsR0FBRyxDQUFDRixXQUFXLENBQUNJLE9BQVosQ0FBb0IsV0FBcEIsQ0FBRCxDQUFILElBQXlDLE9BQTNEOztBQUVBLFFBQUksS0FBSzNCLE9BQUwsQ0FBYW5CLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsTUFBK0IsR0FBbkMsRUFBd0M7QUFDdkMsV0FBS29ELFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsS0FIRCxNQUdPLElBQUksS0FBS2xDLE9BQUwsQ0FBYW5CLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsTUFBK0IsR0FBL0IsSUFDUCxLQUFLaUQsaUJBQUwsS0FBMkIsQ0FEeEIsRUFDMkI7QUFDakMsV0FBS0csV0FBTCxHQUFtQixDQUFuQjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxLQUpNLE1BSUEsSUFBSSxLQUFLbEMsT0FBTCxDQUFhbkIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixHQUEvQixJQUNQLEtBQUtpRCxpQkFBTCxLQUEyQixDQUR4QixFQUMyQjtBQUNqQyxXQUFLRyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNBLEtBSk0sTUFJQSxJQUFJLEtBQUtsQyxPQUFMLENBQWFuQixLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLE1BQStCLEdBQS9CLElBQ1AsS0FBS2lELGlCQUFMLEtBQTJCLENBRHhCLEVBQzJCO0FBQ2pDLFdBQUtHLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsS0FKTSxNQUlBLElBQUksS0FBS2xDLE9BQUwsQ0FBYW5CLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsTUFBK0IsR0FBL0IsSUFDUCxLQUFLaUQsaUJBQUwsS0FBMkIsQ0FEeEIsRUFDMkI7QUFDakMsV0FBS0csV0FBTCxHQUFtQixDQUFuQjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQTs7QUFFRCxTQUFLQyxXQUFMLGFBQXNCLEtBQUtGLFdBQTNCLGdCQUE0QyxLQUFLTCxhQUFqRDtBQUNBLFNBQUtFLGlCQUFMLEtBQTJCLENBQTNCLEdBQ0MsS0FBS00sV0FBTCxhQUFzQixLQUFLRixXQUEzQixnQkFBNEMsS0FBS0wsYUFBakQsQ0FERCxHQUVDLEtBQUtPLFdBQUwsR0FBbUIsSUFGcEI7O0FBS0EsUUFBSSxLQUFLTixpQkFBTCxLQUEyQixDQUEzQixJQUFnQyxLQUFLQyxZQUFMLENBQWtCTSxXQUFsQixPQUFvQyxHQUF4RSxFQUE2RTtBQUM1RSxXQUFLQyxXQUFMLEdBQW1CLDZCQUFuQjtBQUNBLEtBRkQsTUFFTyxJQUFJLEtBQUtSLGlCQUFMLEtBQTJCLENBQTNCLElBQWdDLEtBQUtDLFlBQUwsQ0FBa0JNLFdBQWxCLE9BQW9DLEdBQXhFLEVBQTZFO0FBQ25GLFdBQUtDLFdBQUwsR0FBbUIsNkJBQW5CO0FBQ0EsS0FGTSxNQUVBLElBQUksS0FBS1IsaUJBQUwsS0FBMkIsQ0FBM0IsSUFDTixLQUFLQyxZQUFMLENBQWtCTSxXQUFsQixPQUFvQyxHQUQ5QixJQUN1QyxLQUFLTixZQUFMLENBQWtCTSxXQUFsQixPQUFvQyxJQUQzRSxJQUNxRixLQUFLTixZQUFMLENBQWtCTSxXQUFsQixPQUFvQyxJQUQ3SCxFQUNvSTtBQUMxSSxXQUFLQyxXQUFMLEdBQW1CLHlDQUFuQjtBQUNBLEtBSE0sTUFHQSxJQUFJLEtBQUtSLGlCQUFMLEtBQTJCLENBQTNCLElBQ1AsS0FBS0MsWUFBTCxDQUFrQk0sV0FBbEIsT0FBb0MsSUFEakMsRUFDdUM7QUFDN0MsV0FBS0MsV0FBTCxHQUFtQiw2QkFBbkI7QUFDQSxLQUhNLE1BR0EsSUFBSSxLQUFLUixpQkFBTCxLQUEyQixDQUEzQixJQUNQLEtBQUtDLFlBQUwsQ0FBa0JNLFdBQWxCLE9BQW9DLEtBRGpDLEVBQ3dDO0FBQzlDLFdBQUtDLFdBQUwsR0FBbUIsa0RBQW5CO0FBQ0EsS0FITSxNQUdBLElBQUksS0FBS1IsaUJBQUwsS0FBMkIsQ0FBM0IsSUFDUCxLQUFLQyxZQUFMLENBQWtCTSxXQUFsQixPQUFvQyxLQURqQyxFQUN3QztBQUM5QyxXQUFLQyxXQUFMLEdBQW1CLGtEQUFuQjtBQUNBLEtBSE0sTUFHQSxJQUFJLEtBQUtSLGlCQUFMLEtBQTJCLENBQTNCLElBQ1AsS0FBS0MsWUFBTCxDQUFrQk0sV0FBbEIsT0FBb0MsSUFEakMsRUFDdUM7QUFDN0MsV0FBS0MsV0FBTCxHQUFtQiw2QkFBbkI7QUFDQSxLQUhNLE1BR0E7QUFDTkMsV0FBSyxXQUFJLEtBQUtSLFlBQVQsMEdBQTBDLEtBQUsvQixPQUEvQyw0S0FBTDtBQUNBOztBQUVELFFBQUksS0FBS0EsT0FBTCxDQUFhbkIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixHQUEvQixJQUFzQyxLQUFLbUQsVUFBTCxDQUFnQkssV0FBaEIsT0FBa0MsT0FBNUUsRUFBcUY7QUFDcEYsV0FBS0csWUFBTCxHQUFvQixnQkFBcEI7QUFDQSxLQUZELE1BRU8sSUFBSSxLQUFLeEMsT0FBTCxDQUFhbkIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixHQUEvQixJQUFzQyxLQUFLbUQsVUFBTCxDQUFnQkssV0FBaEIsT0FBa0MsUUFBNUUsRUFBc0Y7QUFDNUYsV0FBS0csWUFBTCxHQUFvQixpQkFBcEI7QUFDQSxLQUZNLE1BRUEsSUFBSSxLQUFLeEMsT0FBTCxDQUFhbkIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixHQUFuQyxFQUF3QztBQUM5QyxXQUFLMkQsWUFBTCxHQUFvQixvQkFBcEI7QUFDQSxLQUZNLE1BRUEsSUFBSSxLQUFLeEMsT0FBTCxDQUFhbkIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixHQUFuQyxFQUF3QztBQUM5QyxXQUFLMkQsWUFBTCxHQUFvQix5QkFBcEI7QUFDQSxLQUZNLE1BRUEsSUFBSSxLQUFLeEMsT0FBTCxDQUFhbkIsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixHQUFuQyxFQUF3QztBQUM5QyxXQUFLMkQsWUFBTCxHQUFvQixvQ0FBcEI7QUFDQTs7QUFFRCxRQUFJLEtBQUtWLGlCQUFMLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2pDLFdBQUsvQixjQUFMLGFBQXlCLEtBQUtDLE9BQTlCLGVBQTBDLEtBQUs0QixhQUEvQyx1QkFBb0UsS0FBS1UsV0FBekUscUVBQWtHLEtBQUtFLFlBQXZHO0FBQ0EsV0FBS3ZDLGtCQUFMLGFBQTZCLEtBQUtELE9BQWxDLGVBQThDLEtBQUtzQyxXQUFuRCxxRUFBNEUsS0FBS0UsWUFBakY7QUFDQSxLQUhELE1BR08sSUFBSSxLQUFLVixpQkFBTCxLQUEyQixDQUEvQixFQUFrQztBQUN4QyxXQUFLL0IsY0FBTCxhQUF5QixLQUFLQyxPQUE5QixlQUEwQyxLQUFLNEIsYUFBL0Msc0JBQW1FLEtBQUtDLGFBQXhFLHVCQUE2RixLQUFLUyxXQUFsRyxxRUFBMkgsS0FBS0UsWUFBaEk7QUFDQSxXQUFLdkMsa0JBQUwsYUFBNkIsS0FBS0QsT0FBbEMsZUFBOEMsS0FBS3NDLFdBQW5ELHFFQUE0RSxLQUFLRSxZQUFqRjtBQUVBO0FBQ0Q7O0FBRUQsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcEIsZ0JBQWdCLENBQUNILE1BQXJDLEVBQTZDdUIsQ0FBQyxJQUFJLENBQWxELEVBQXFEO0FBQ3BELFFBQUlwQixnQkFBZ0IsQ0FBQ29CLENBQUQsQ0FBaEIsQ0FBb0I1RCxLQUFwQixDQUEwQixHQUExQixFQUErQnFDLE1BQS9CLEtBQTBDLENBQTlDLEVBQWlEO0FBQ2hESSxpQkFBVyxDQUFDb0IsSUFBWixDQUFpQixJQUFJbEIsR0FBSixDQUFRSCxnQkFBZ0IsQ0FBQ29CLENBQUQsQ0FBaEIsQ0FBb0I1RCxLQUFwQixDQUEwQixHQUExQixDQUFSLENBQWpCO0FBQ0EsS0FGRCxNQUVPLElBQUl3QyxnQkFBZ0IsQ0FBQ29CLENBQUQsQ0FBaEIsQ0FBb0I1RCxLQUFwQixDQUEwQixHQUExQixFQUErQnFDLE1BQS9CLEdBQXdDLENBQTVDLEVBQStDO0FBQ3JEcUIsV0FBSyxxRkFBa0JsQixnQkFBZ0IsQ0FBQ29CLENBQUQsQ0FBbEMsZ0JBQTJDcEIsZ0JBQWdCLENBQUNvQixDQUFELENBQWhCLENBQW9CNUQsS0FBcEIsQ0FBMEIsR0FBMUIsRUFBK0JxQyxNQUExRSw2TkFBTDtBQUNFO0FBQ0g7O0FBQ0RuSCxTQUFPLENBQUNDLEdBQVIsQ0FBWXNILFdBQVo7QUFFQUEsYUFBVyxDQUFDcUIsSUFBWixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMxQixRQUFJRCxDQUFDLENBQUM1QyxPQUFGLEdBQVk2QyxDQUFDLENBQUM3QyxPQUFsQixFQUEyQjtBQUMxQixhQUFPLENBQVA7QUFDQSxLQUZELE1BRU87QUFDTixhQUFPLENBQUMsQ0FBUjtBQUNBO0FBQ0QsR0FORDtBQVFBLFNBQU9zQixXQUFQO0FBQ0E7O0FBRWNILGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0NBRUE7O0FBQ0EsU0FBUzJCLG9CQUFULENBQThCQyxvQkFBOUIsRUFBb0RuSixLQUFwRCxFQUEyRG9KLGlCQUEzRCxFQUE4RUMsbUJBQTlFLEVBQW1HO0FBQ2xHLE1BQU1DLGNBQWMsR0FBRy9LLFFBQVEsQ0FBQ2dMLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXZCLENBRGtHLENBRWxHOztBQUNBLE1BQU1DLFVBQVUsR0FBR2pMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBZ0wsWUFBVSxDQUFDL0ssU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsYUFBekIsRUFKa0csQ0FLbEc7O0FBQ0EsTUFBTStLLFFBQVEsR0FBR2xMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFqQjtBQUNBaUwsVUFBUSxDQUFDaEwsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDQStLLFVBQVEsQ0FBQy9KLFNBQVQsR0FBcUIsUUFBUSw0Q0FBUixHQUF1RCxLQUF2RCxHQUErRHlKLG9CQUFvQixDQUFDbEUsS0FBckIsQ0FBMkIsS0FBM0IsRUFBa0MsQ0FBbEMsQ0FBL0QsR0FBc0csSUFBdEcsR0FBNkdrRSxvQkFBb0IsQ0FBQ2xFLEtBQXJCLENBQTJCLEtBQTNCLEVBQWtDLENBQWxDLENBQTdHLEdBQW9KLEdBQXBKLEdBQTBKLE1BQTFKLEdBQW1LLE1BQXhMLENBUmtHLENBU2xHOztBQUNBLE1BQU15RSxNQUFNLEdBQUduTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBa0wsUUFBTSxDQUFDakwsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsU0FBckI7QUFDQWdMLFFBQU0sQ0FBQ2hLLFNBQVAsR0FBbUIsaUNBQW5CLENBWmtHLENBYWxHOztBQUNBLE1BQU1pSyxXQUFXLEdBQUdwTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBcEI7QUFDQW1MLGFBQVcsQ0FBQ3BJLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0MsbUJBQW1CdkIsS0FBbkIsR0FBMkIsSUFBM0Q7QUFDQTJKLGFBQVcsQ0FBQ2pLLFNBQVosR0FBd0IsY0FBYyxNQUF0QyxDQWhCa0csQ0FpQmxHOztBQUNBLE1BQU1rSyxhQUFhLEdBQUdyTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdEI7QUFDQW9MLGVBQWEsQ0FBQ3JJLFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsbUJBQW1CdkIsS0FBdEQ7QUFDQTRKLGVBQWEsQ0FBQ3JJLFlBQWQsQ0FBMkIsSUFBM0IsRUFBaUMsbUJBQW1CdkIsS0FBbkIsR0FBMkIsSUFBNUQ7QUFDQTRKLGVBQWEsQ0FBQ3JJLFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsT0FBbkMsRUFyQmtHLENBc0JsRzs7QUFDQSxNQUFNc0ksV0FBVyxHQUFHdEwsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQXBCO0FBQ0FxTCxhQUFXLENBQUN0SSxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLG1CQUFtQnZCLEtBQW5CLEdBQTJCLElBQTNEO0FBQ0E2SixhQUFXLENBQUNuSyxTQUFaLEdBQXdCLCtCQUErQixNQUF2RCxDQXpCa0csQ0EwQmxHOztBQUNBLE1BQU1vSyxhQUFhLEdBQUd2TCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdEI7QUFDQXNMLGVBQWEsQ0FBQ3ZJLFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsbUJBQW1CdkIsS0FBdEQ7QUFDQThKLGVBQWEsQ0FBQ3ZJLFlBQWQsQ0FBMkIsSUFBM0IsRUFBaUMsbUJBQW1CdkIsS0FBbkIsR0FBMkIsSUFBNUQ7QUFDQThKLGVBQWEsQ0FBQ3ZJLFlBQWQsQ0FBMkIsU0FBM0IsRUFBc0MsRUFBdEM7QUFDQXVJLGVBQWEsQ0FBQ3ZJLFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsT0FBbkMsRUEvQmtHLENBZ0NsRzs7QUFDQSxNQUFNd0ksV0FBVyxHQUFHeEwsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQXBCO0FBQ0F1TCxhQUFXLENBQUN4SSxZQUFaLENBQXlCLEtBQXpCLEVBQWdDLG1CQUFtQnZCLEtBQW5CLEdBQTJCLElBQTNEO0FBQ0ErSixhQUFXLENBQUNySyxTQUFaLEdBQXdCLHNCQUF4QixDQW5Da0csQ0FvQ2xHOztBQUNBLE1BQU1zSyxhQUFhLEdBQUd6TCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdEI7QUFDQXdMLGVBQWEsQ0FBQ3pJLFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsbUJBQW1CdkIsS0FBdEQ7QUFDQWdLLGVBQWEsQ0FBQ3pJLFlBQWQsQ0FBMkIsSUFBM0IsRUFBaUMsbUJBQW1CdkIsS0FBbkIsR0FBMkIsSUFBNUQ7QUFDQWdLLGVBQWEsQ0FBQ3pJLFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsT0FBbkMsRUF4Q2tHLENBeUNsRzs7QUFDQSxNQUFNMEksYUFBYSxHQUFHMUwsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXRCO0FBQ0F5TCxlQUFhLENBQUN4TCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixTQUE1QjtBQUNBdUwsZUFBYSxDQUFDdkssU0FBZCxHQUEwQixpQ0FBMUIsQ0E1Q2tHLENBNkNsRzs7QUFDQSxNQUFNd0ssWUFBWSxHQUFHM0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQXJCO0FBQ0EwTCxjQUFZLENBQUMzSSxZQUFiLENBQTBCLElBQTFCLEVBQWdDLGtCQUFrQnZCLEtBQWxEO0FBQ0FrSyxjQUFZLENBQUMzSSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLElBQWxDO0FBQ0EySSxjQUFZLENBQUMzSSxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLE1BQWxDO0FBQ0EySSxjQUFZLENBQUMzSSxZQUFiLENBQTBCLE9BQTFCLEVBQW1DOEgsbUJBQW5DLEVBbERrRyxDQW1EbEc7O0FBQ0EsTUFBTWMsV0FBVyxHQUFHNUwsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXBCO0FBQ0EyTCxhQUFXLENBQUMxTCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixTQUExQjtBQUNBeUwsYUFBVyxDQUFDekssU0FBWixHQUF3QixzQ0FBeEIsQ0F0RGtHLENBdURsRzs7QUFDQSxNQUFNMEssVUFBVSxHQUFHN0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBQ0E0TCxZQUFVLENBQUM3SSxZQUFYLENBQXdCLElBQXhCLEVBQThCLGdCQUFnQnZCLEtBQTlDO0FBQ0FvSyxZQUFVLENBQUM3SSxZQUFYLENBQXdCLE1BQXhCLEVBQWdDLElBQWhDO0FBQ0E2SSxZQUFVLENBQUM3SSxZQUFYLENBQXdCLE1BQXhCLEVBQWdDLE1BQWhDO0FBQ0E2SSxZQUFVLENBQUM3SSxZQUFYLENBQXdCLE9BQXhCLEVBQWlDNkgsaUJBQWpDLEVBNURrRyxDQTREN0M7QUFFckQ7O0FBQ0FJLFlBQVUsQ0FBQ3hLLE1BQVgsQ0FBa0J5SyxRQUFsQixFQUE0QkMsTUFBNUIsRUEvRGtHLENBZ0VsRzs7QUFDQUYsWUFBVSxDQUFDeEssTUFBWCxDQUFrQjRLLGFBQWxCLEVBQWlDRCxXQUFqQyxFQUE4Q0csYUFBOUMsRUFBNkRELFdBQTdELEVBQTBFRyxhQUExRSxFQUF5RkQsV0FBekYsRUFqRWtHLENBa0VsRzs7QUFDQVAsWUFBVSxDQUFDeEssTUFBWCxDQUFrQmlMLGFBQWxCLEVBQWlDQyxZQUFqQyxFQUErQ0MsV0FBL0MsRUFBNERDLFVBQTVEO0FBRUFkLGdCQUFjLENBQUN0SyxNQUFmLENBQXNCd0ssVUFBdEI7QUFDQTs7QUFFRCxTQUFTYSxpQkFBVCxDQUEyQnhDLEdBQTNCLEVBQStCO0FBQzlCLE9BQUssSUFBSWdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdoQixHQUFHLENBQUNQLE1BQXhCLEVBQWdDdUIsQ0FBQyxFQUFqQyxFQUFxQztBQUVwQyxRQUFJeUIsb0JBQW9CLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLENBQTNCO0FBRUEsUUFBSUMsS0FBSyxHQUFHMUMsR0FBRyxDQUFDZ0IsQ0FBRCxDQUFILENBQU81RCxLQUFQLENBQWEsS0FBYixFQUFvQixDQUFwQixDQUFaO0FBQ0EsUUFBSXVGLFNBQVMsR0FBRzNDLEdBQUcsQ0FBQ2dCLENBQUQsQ0FBSCxDQUFPNUQsS0FBUCxDQUFhLEtBQWIsRUFBb0IsQ0FBcEIsQ0FBaEI7QUFDQSxRQUFJd0YsUUFBUSxHQUFHSCxvQkFBb0IsQ0FBQ0Esb0JBQW9CLENBQUN2QyxPQUFyQixDQUE2QixDQUFDeUMsU0FBOUIsSUFBMkMsQ0FBNUMsQ0FBbkM7QUFFQSxRQUFJRSxjQUFjLEdBQUdDLHFFQUFrQixDQUFDLENBQUNILFNBQUYsQ0FBdkM7QUFDQSxRQUFJSSxnQkFBZ0IsR0FBR0QscUVBQWtCLENBQUNGLFFBQUQsQ0FBekMsQ0FUb0MsQ0FVcEM7O0FBQ0EsUUFBSUksdUJBQXVCLGFBQU1ILGNBQU4sY0FBd0JILEtBQXhCLGdCQUFtQ0MsU0FBbkMsQ0FBM0I7QUFDQSxRQUFJTSx3QkFBd0IsYUFBTUYsZ0JBQU4sY0FBMEJMLEtBQTFCLGdCQUFxQ0UsUUFBckMsQ0FBNUI7QUFDQXZCLHdCQUFvQixDQUFDckIsR0FBRyxDQUFDZ0IsQ0FBRCxDQUFKLEVBQVNBLENBQVQsRUFBWWdDLHVCQUFaLEVBQXFDQyx3QkFBckMsQ0FBcEI7QUFDRTtBQUNIOztBQUVjVCxnRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQSxTQUFTVSxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUM1QixNQUFNMUssS0FBSyxHQUFHL0IsUUFBUSxDQUFDZ0wsY0FBVCxDQUF3QixZQUF4QixFQUFzQzBCLG9CQUF0QyxDQUEyRCxPQUEzRCxFQUFvRSxDQUFwRSxDQUFkLENBRDRCLENBRzVCOztBQUNBLE1BQU1wTSxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsTUFBTU0sSUFBSSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBYjtBQUNBOEIsT0FBSyxDQUFDdEIsTUFBTixDQUFhSCxJQUFiLEVBQW1CQyxJQUFuQixFQU40QixDQU81QjtBQUNBOztBQUNBLE1BQU1HLEtBQUssR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQVMsT0FBSyxDQUFDUixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixTQUFwQjtBQUNBLE1BQU1TLEtBQUssR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQVcsT0FBSyxDQUFDVixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixTQUFwQjtBQUNBLE1BQU13QyxLQUFLLEdBQUczQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBMEMsT0FBSyxDQUFDekMsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7QUFFQSxNQUFNVSxLQUFLLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FZLE9BQUssQ0FBQ1gsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7QUFDQSxNQUFNWSxLQUFLLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FjLE9BQUssQ0FBQ2IsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7QUFDQSxNQUFNOEMsS0FBSyxHQUFHakQsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQWdELE9BQUssQ0FBQy9DLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFNBQXBCO0FBRUFHLE1BQUksQ0FBQ0csTUFBTCxDQUFZQyxLQUFaLEVBQW1CRSxLQUFuQixFQUEwQitCLEtBQTFCO0FBQ0FwQyxNQUFJLENBQUNFLE1BQUwsQ0FBWUksS0FBWixFQUFtQkUsS0FBbkIsRUFBMEJrQyxLQUExQjtBQUVBLE1BQUkwSixVQUFVLEdBQUcsQ0FBakI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxPQUFLLElBQUl0QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbUMsUUFBUSxDQUFDMUQsTUFBN0IsRUFBcUN1QixDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDNUNzQyxZQUFRLElBQUlILFFBQVEsQ0FBQ25DLENBQUQsQ0FBUixDQUFZZixVQUF4QjtBQUNBb0QsY0FBVSxJQUFJRixRQUFRLENBQUNuQyxDQUFELENBQVIsQ0FBWWYsVUFBWixHQUF5QmtELFFBQVEsQ0FBQ25DLENBQUQsQ0FBUixDQUFZWCxpQkFBbkQ7QUFDQSxHQWhDMkIsQ0FrQzVCOzs7QUFDQS9JLE9BQUssQ0FBQ08sU0FBTixHQUFrQixrQkFBbEI7QUFDQXdCLE9BQUssQ0FBQ3hCLFNBQU4sR0FBa0J3TCxVQUFsQjtBQUVBNUwsT0FBSyxDQUFDSSxTQUFOLEdBQWtCLGVBQWxCO0FBQ0E4QixPQUFLLENBQUM5QixTQUFOLEdBQWtCeUwsUUFBbEI7QUFDQTs7QUFFY0osd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUEsU0FBU0osa0JBQVQsQ0FBNEJTLEtBQTVCLEVBQW1DO0FBQ2xDLE1BQUlDLFdBQUo7O0FBQ0EsTUFBSUQsS0FBSyxJQUFJLEVBQWIsRUFBaUI7QUFDaEJDLGVBQVcsR0FBRyxVQUFkO0FBQ0EsR0FGRCxNQUVPLElBQUlELEtBQUssSUFBSSxHQUFiLEVBQWtCO0FBQ3hCQyxlQUFXLEdBQUcsV0FBZDtBQUNBLEdBRk0sTUFFQSxJQUFJRCxLQUFLLEdBQUcsR0FBWixFQUFpQjtBQUN2QkMsZUFBVyxHQUFHLFdBQWQ7QUFDQSxHQUZNLE1BRUE7QUFDTkEsZUFBVyxHQUFHLEVBQWQ7QUFDQTs7QUFDRCxTQUFPQSxXQUFQO0FBQ0E7O0FBRWNWLGlGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUEsU0FBU1csYUFBVCxDQUF1QnZMLEdBQXZCLEVBQTRCd0wsYUFBNUIsRUFBMkM7QUFFMUM7QUFDQSxNQUFNQyxhQUFhLEdBQUdqTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBdEI7QUFDQWdOLGVBQWEsQ0FBQy9NLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUE1QjtBQUVBLE1BQU0rTSxTQUFTLEdBQUdsTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUFDQWdOLGVBQWEsQ0FBQ3hNLE1BQWQsQ0FBcUJ5TSxTQUFyQixFQVAwQyxDQVExQzs7QUFDQSxNQUFNNU0sSUFBSSxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBYjtBQUNBLE1BQU1NLElBQUksR0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQSxNQUFNTyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsTUFBTWtOLElBQUksR0FBR25OLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsTUFBTW1OLElBQUksR0FBR3BOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsTUFBTW9OLElBQUksR0FBR3JOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFiLENBZDBDLENBZTFDOztBQUNBaU4sV0FBUyxDQUFDek0sTUFBVixDQUFpQkgsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCQyxJQUE3QixFQUFtQzJNLElBQW5DLEVBQXlDQyxJQUF6QyxFQUErQ0MsSUFBL0MsRUFoQjBDLENBa0IxQzs7QUFDQSxNQUFNM00sS0FBSyxHQUFHVixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBLE1BQU1XLEtBQUssR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNWSxLQUFLLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWMsS0FBSyxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBLE1BQU1lLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWlCLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXlELEtBQUssR0FBRzFELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTBELEtBQUssR0FBRzNELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTStELEtBQUssR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWdFLEtBQUssR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXFFLEtBQUssR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXNFLEtBQUssR0FBR3ZFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkLENBOUIwQyxDQStCMUM7O0FBQ0FLLE1BQUksQ0FBQ0csTUFBTCxDQUFZQyxLQUFaLEVBQW1CRSxLQUFuQjtBQUNBTCxNQUFJLENBQUNFLE1BQUwsQ0FBWUksS0FBWixFQUFtQkUsS0FBbkI7QUFDQVAsTUFBSSxDQUFDQyxNQUFMLENBQVlPLEtBQVosRUFBbUJFLEtBQW5CO0FBQ0FpTSxNQUFJLENBQUMxTSxNQUFMLENBQVlpRCxLQUFaLEVBQW1CQyxLQUFuQjtBQUNBeUosTUFBSSxDQUFDM00sTUFBTCxDQUFZdUQsS0FBWixFQUFtQkMsS0FBbkI7QUFDQW9KLE1BQUksQ0FBQzVNLE1BQUwsQ0FBWTZELEtBQVosRUFBbUJDLEtBQW5CLEVBckMwQyxDQXVDMUM7O0FBQ0E3RCxPQUFLLENBQUMwRyxXQUFOLEdBQW9CLDBCQUFwQjtBQUNBdkcsT0FBSyxDQUFDdUcsV0FBTixHQUFvQix5QkFBcEI7QUFDQXBHLE9BQUssQ0FBQ29HLFdBQU4sR0FBb0Isb0JBQXBCO0FBQ0ExRCxPQUFLLENBQUMwRCxXQUFOLEdBQW9CLFdBQXBCO0FBQ0F6RCxPQUFLLENBQUN5RCxXQUFOLEdBQW9CNUYsR0FBRyxDQUFDcUcsT0FBeEI7QUFDQTdELE9BQUssQ0FBQ29ELFdBQU4sR0FBb0IsbUJBQXBCO0FBQ0FuRCxPQUFLLENBQUNtRCxXQUFOLDJCQUEyQjRGLGFBQWEsQ0FBQ3pHLE1BQXpDO0FBQ0FqQyxPQUFLLENBQUM4QyxXQUFOLEdBQW9CLHNCQUFwQjtBQUVBLFNBQU82RixhQUFQO0FBQ0E7O0FBRWNGLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBLFNBQVNPLGdCQUFULENBQTBCN0wsS0FBMUIsRUFBaUM7QUFFaEMsTUFBTThMLFVBQVUsR0FBR3ZOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBc04sWUFBVSxDQUFDck4sU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsYUFBekI7QUFFQSxNQUFNcU4sS0FBSyxHQUFHeE4sUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQXNOLFlBQVUsQ0FBQ2xOLFdBQVgsQ0FBdUJtTixLQUF2QixFQU5nQyxDQU9oQzs7QUFFQSxPQUFLLElBQUlsRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7QUFDL0IsUUFBSW1ELEdBQUcsR0FBR3pOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFWLENBRCtCLENBRS9COztBQUNBd04sT0FBRyxDQUFDdk4sU0FBSixDQUFjQyxHQUFkLENBQWtCLFdBQWxCLEVBQStCLGNBQWNzQixLQUFkLEdBQXNCLEdBQXRCLEdBQTRCNkksQ0FBM0Q7QUFDQWtELFNBQUssQ0FBQy9NLE1BQU4sQ0FBYWdOLEdBQWI7O0FBR0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7QUFDL0IsVUFBSUMsRUFBRSxHQUFHM04sUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVQsQ0FEK0IsQ0FFN0I7O0FBQ0YwTixRQUFFLENBQUN6TixTQUFILENBQWFDLEdBQWIsQ0FBaUIsT0FBT3NCLEtBQVAsR0FBZSxHQUFmLEdBQXFCNkksQ0FBckIsR0FBeUIsR0FBekIsR0FBK0JvRCxDQUFoRDtBQUNBQyxRQUFFLENBQUN2RyxXQUFILEdBQWlCLEVBQWpCO0FBQ0FxRyxTQUFHLENBQUNwTixXQUFKLENBQWdCc04sRUFBaEI7QUFDQTtBQUNEOztBQUVELFNBQU9KLFVBQVA7QUFDQTs7QUFFY0QsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUEsU0FBU00sTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JKLEdBQXRCLEVBQTJCSyxNQUEzQixFQUFrQztBQUNqQyxNQUFJQyxJQUFJLEdBQUcvTixRQUFRLENBQUM2SSxhQUFULENBQXVCLFFBQVFnRixJQUFSLEdBQWUsR0FBZixHQUFxQkosR0FBckIsR0FBMkIsR0FBM0IsR0FBaUNLLE1BQXhELENBQVg7QUFDQSxTQUFPQyxJQUFQO0FBQ0E7O0FBRUQsU0FBU0MsWUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLEtBQTlCLEVBQXFDQyxJQUFyQyxFQUEwQztBQUN6QyxNQUFNQyxPQUFPLEdBQUdwTyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFFQSxNQUFNb08sTUFBTSxHQUFHck8sUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQW9PLFFBQU0sQ0FBQ25PLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0EsTUFBTW1PLElBQUksR0FBR3RPLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FxTyxNQUFJLENBQUNsSCxXQUFMLEdBQW1CK0csSUFBbkI7O0FBQ0EsTUFBSUYsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDaEJHLFdBQU8sQ0FBQ2xPLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGNBQXRCO0FBQ0E7O0FBQ0QsTUFBSStOLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2hCSSxRQUFJLENBQUNwTyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsY0FBbkI7QUFDQTs7QUFDRGlPLFNBQU8sQ0FBQzNOLE1BQVIsQ0FBZTROLE1BQWYsRUFBdUJDLElBQXZCO0FBQ0EsU0FBT0YsT0FBUDtBQUNBOztBQUVELFNBQVNHLE9BQVQsQ0FBa0JKLElBQWxCLEVBQXVCO0FBQ3RCLE1BQU1HLElBQUksR0FBR3RPLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FxTyxNQUFJLENBQUNsSCxXQUFMLEdBQW1CK0csSUFBbkI7QUFDQSxTQUFPRyxJQUFQO0FBQ0E7O0FBRUQsU0FBU0UsY0FBVCxDQUF3QmhOLEdBQXhCLEVBQTZCQyxLQUE3QixFQUFvQ2dOLHVCQUFwQyxFQUE2RDtBQUU1RDtBQUNBLE1BQUkvTixLQUFLLEdBQUdrTixNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQWYsT0FBSyxDQUFDMEcsV0FBTixHQUFvQixHQUFwQjtBQUVBLE1BQUl4RyxLQUFLLEdBQUdnTixNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQWIsT0FBSyxDQUFDd0csV0FBTixHQUFvQixzQkFBcEI7QUFFQSxNQUFJekUsS0FBSyxHQUFHaUwsTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWxCO0FBQ0FrQixPQUFLLENBQUN5RSxXQUFOLEdBQW9CLGlCQUFwQjs7QUFFQSxPQUFLLElBQUlrRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7QUFDL0IsUUFBSW9FLEdBQUcsR0FBR2QsTUFBTSxDQUFDbk0sS0FBRCxFQUFRNkksQ0FBUixFQUFXLENBQVgsQ0FBaEI7QUFDQW9FLE9BQUcsQ0FBQ3RILFdBQUosR0FBa0JrRCxDQUFsQjtBQUNBLEdBZjJELENBaUI1RDs7O0FBQ0EsTUFBSXZKLEtBQUssR0FBRzZNLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUNBVixPQUFLLENBQUNxRyxXQUFOLEdBQW9CLHdCQUFwQjtBQUVBLE1BQUluRSxLQUFLLEdBQUcySyxNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQXdCLE9BQUssQ0FBQ3hDLE1BQU4sQ0FBYXVOLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLGVBQVAsQ0FBekIsRUFDQUEsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU0sZUFBTixDQURaOztBQUdBLE1BQUl4TSxHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQ3RDekQsU0FBSyxDQUFDMEwsVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGRCxNQUVPLElBQUlxQixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQzdDekQsU0FBSyxDQUFDMEwsVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0E3QjJELENBK0I1RDs7O0FBQ0EsTUFBSWUsS0FBSyxHQUFHME0sTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWxCO0FBQ0FQLE9BQUssQ0FBQ2tHLFdBQU4sR0FBb0IsV0FBcEI7QUFFQSxNQUFJL0QsS0FBSyxHQUFHdUssTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWxCO0FBQ0E0QixPQUFLLENBQUM1QyxNQUFOLENBQWF1TixZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxZQUFQLENBQXpCLEVBQ0FBLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFlBQVAsQ0FEWixFQUVBQSxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyx5QkFBUCxDQUZaOztBQUlBLE1BQUl4TSxHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQ3RDckQsU0FBSyxDQUFDc0wsVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGRCxNQUVPLElBQUlxQixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQzdDckQsU0FBSyxDQUFDc0wsVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGTSxNQUVBLElBQUlxQixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQzdDckQsU0FBSyxDQUFDc0wsVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0E5QzJELENBZ0Q1RDs7O0FBQ0EsTUFBSXdELEtBQUssR0FBR2lLLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUNBa0MsT0FBSyxDQUFDeUQsV0FBTixHQUFvQixXQUFwQjtBQUVBLE1BQUl4RCxLQUFLLEdBQUdnSyxNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQW1DLE9BQUssQ0FBQ25ELE1BQU4sQ0FBYXVOLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLFdBQVAsQ0FBekIsRUFDQUEsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sV0FBUCxDQURaOztBQUdBLE1BQUl4TSxHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQTlCLElBQXFDbEYsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUF2RSxFQUE0RTtBQUMzRTlDLFNBQUssQ0FBQytLLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JBLFVBQXBCLENBQStCLENBQS9CLEVBQWtDek8sU0FBbEMsQ0FBNENDLEdBQTVDLENBQWdELGdCQUFoRDtBQUNBLEdBRkQsTUFFTyxJQUFJcUIsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUFsQyxFQUF1QztBQUM3QzlDLFNBQUssQ0FBQytLLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JBLFVBQXBCLENBQStCLENBQS9CLEVBQWtDek8sU0FBbEMsQ0FBNENDLEdBQTVDLENBQWdELGdCQUFoRDtBQUNBLEdBNUQyRCxDQThENUQ7OztBQUNBLE1BQUk4RCxLQUFLLEdBQUcySixNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQXdDLE9BQUssQ0FBQ21ELFdBQU4sR0FBb0IsdUJBQXBCO0FBRUEsTUFBSWxELEtBQUssR0FBRzBKLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUNBeUMsT0FBSyxDQUFDekQsTUFBTixDQUFhdU4sWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sV0FBUCxDQUF6QixFQUNBQSxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyw0QkFBUCxDQURaLEVBRUFBLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLHNCQUFQLENBRlo7QUFJQSxNQUFJWSxlQUFlLEdBQUdILHVCQUF1QixDQUFDakYsT0FBeEIsQ0FBZ0NoSSxHQUFHLENBQUN3SSxXQUFwQyxDQUF0QjtBQUNBLE1BQUk2RSxlQUFlLEdBQUdKLHVCQUF1QixDQUFDakYsT0FBeEIsQ0FBZ0NoSSxHQUFHLENBQUN5SSxXQUFwQyxDQUF0QjtBQUVBLE1BQUk2RSxxQkFBcUIsR0FBRzlPLFFBQVEsQ0FBQ2dMLGNBQVQseUJBQXlDNEQsZUFBekMsUUFBNUI7QUFDQSxNQUFJRyxxQkFBcUIsR0FBRy9PLFFBQVEsQ0FBQ2dMLGNBQVQseUJBQXlDNEQsZUFBekMsUUFBNUI7QUFDQSxNQUFJSSxxQkFBcUIsR0FBR2hQLFFBQVEsQ0FBQ2dMLGNBQVQseUJBQXlDNEQsZUFBekMsUUFBNUI7QUFFQSxNQUFJSyxxQkFBcUIsR0FBR2pQLFFBQVEsQ0FBQ2dMLGNBQVQseUJBQXlDNkQsZUFBekMsUUFBNUI7QUFDQSxNQUFJSyxxQkFBcUIsR0FBR2xQLFFBQVEsQ0FBQ2dMLGNBQVQseUJBQXlDNkQsZUFBekMsUUFBNUI7QUFDQSxNQUFJTSxxQkFBcUIsR0FBR25QLFFBQVEsQ0FBQ2dMLGNBQVQseUJBQXlDNkQsZUFBekMsUUFBNUI7O0FBRUEsTUFBSUMscUJBQXFCLENBQUNNLE9BQTFCLEVBQW1DO0FBQ2xDbEwsU0FBSyxDQUFDeUssVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGRCxNQUVPLElBQUk0TyxxQkFBcUIsQ0FBQ0ssT0FBMUIsRUFBbUM7QUFDekNsTCxTQUFLLENBQUN5SyxVQUFOLENBQWlCLENBQWpCLEVBQW9CQSxVQUFwQixDQUErQixDQUEvQixFQUFrQ3pPLFNBQWxDLENBQTRDQyxHQUE1QyxDQUFnRCxnQkFBaEQ7QUFDQSxHQUZNLE1BRUEsSUFBSTZPLHFCQUFxQixDQUFDSSxPQUExQixFQUFtQztBQUN6Q2xMLFNBQUssQ0FBQ3lLLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JBLFVBQXBCLENBQStCLENBQS9CLEVBQWtDek8sU0FBbEMsQ0FBNENDLEdBQTVDLENBQWdELGdCQUFoRDtBQUNBOztBQUNELE1BQUk4TyxxQkFBcUIsS0FBSyxJQUExQixJQUFrQ0EscUJBQXFCLENBQUNHLE9BQTVELEVBQXFFO0FBQ3BFbEwsU0FBSyxDQUFDeUssVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGRCxNQUVPLElBQUkrTyxxQkFBcUIsS0FBSyxJQUExQixJQUFrQ0EscUJBQXFCLENBQUNFLE9BQTVELEVBQXFFO0FBQzNFbEwsU0FBSyxDQUFDeUssVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGTSxNQUVBLElBQUlnUCxxQkFBcUIsS0FBSyxJQUExQixJQUFrQ0EscUJBQXFCLENBQUNDLE9BQTVELEVBQXFFO0FBQzNFbEwsU0FBSyxDQUFDeUssVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0EvRjJELENBaUc1RDs7O0FBQ0EsTUFBSW9FLEtBQUssR0FBR3FKLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUNBOEMsT0FBSyxDQUFDNkMsV0FBTixHQUFvQiwrQkFBcEI7QUFFQSxNQUFJNUMsS0FBSyxHQUFHb0osTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWxCO0FBRUEsTUFBSTROLGFBQWEsR0FBR3JQLFFBQVEsQ0FBQ2dMLGNBQVQsd0JBQXdDNEQsZUFBeEMsRUFBcEI7QUFDQSxNQUFJVSxhQUFhLEdBQUd0UCxRQUFRLENBQUNnTCxjQUFULHdCQUF3QzZELGVBQXhDLEVBQXBCOztBQUVBLE1BQUlyTixHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUE5QixFQUFnQztBQUMvQm5GLFNBQUssQ0FBQzRDLFdBQU4sR0FBb0JpSSxhQUFhLENBQUN4QyxLQUFsQztBQUNBLEdBRkQsTUFFTyxJQUFJckwsR0FBRyxDQUFDbUksaUJBQUosS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdkNuRixTQUFLLENBQUNyRCxTQUFOLEdBQWtCa08sYUFBYSxDQUFDeEMsS0FBZCxHQUFzQixNQUF0QixHQUErQnlDLGFBQWEsQ0FBQ3pDLEtBQS9EO0FBQ0EsR0E5RzJELENBZ0g1RDs7O0FBQ0EsTUFBSTlILEtBQUssR0FBRzZJLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUNBc0QsT0FBSyxDQUFDcUMsV0FBTixHQUFvQixxQkFBcEI7QUFFQSxNQUFJcEMsS0FBSyxHQUFHNEksTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWxCO0FBQ0F1RCxPQUFLLENBQUN2RSxNQUFOLENBQWF1TixZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxXQUFQLENBQXpCLEVBQ0FBLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLDRCQUFQLENBRFosRUFFQUEsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sV0FBUCxDQUZaLEVBR0FBLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLDRCQUFQLENBSFosRUFJQUEsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sMEJBQVAsQ0FKWjs7QUFNQSxNQUFJeE0sR0FBRyxDQUFDb0ksWUFBSixDQUFpQk0sV0FBakIsT0FBbUMsR0FBbkMsSUFBMEMxSSxHQUFHLENBQUNvSSxZQUFKLENBQWlCTSxXQUFqQixPQUFtQyxJQUFqRixFQUF1RjtBQUN0RmxGLFNBQUssQ0FBQzJKLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JBLFVBQXBCLENBQStCLENBQS9CLEVBQWtDek8sU0FBbEMsQ0FBNENDLEdBQTVDLENBQWdELGdCQUFoRDtBQUNBLEdBRkQsTUFFTyxJQUFJcUIsR0FBRyxDQUFDb0ksWUFBSixDQUFpQk0sV0FBakIsT0FBbUMsS0FBdkMsRUFBOEM7QUFDcERsRixTQUFLLENBQUMySixVQUFOLENBQWlCLENBQWpCLEVBQW9CQSxVQUFwQixDQUErQixDQUEvQixFQUFrQ3pPLFNBQWxDLENBQTRDQyxHQUE1QyxDQUFnRCxnQkFBaEQ7QUFDQSxHQUZNLE1BRUEsSUFBSXFCLEdBQUcsQ0FBQ29JLFlBQUosQ0FBaUJNLFdBQWpCLE9BQW1DLEdBQW5DLElBQTBDMUksR0FBRyxDQUFDb0ksWUFBSixDQUFpQk0sV0FBakIsT0FBbUMsSUFBakYsRUFBdUY7QUFDN0ZsRixTQUFLLENBQUMySixVQUFOLENBQWlCLENBQWpCLEVBQW9CQSxVQUFwQixDQUErQixDQUEvQixFQUFrQ3pPLFNBQWxDLENBQTRDQyxHQUE1QyxDQUFnRCxnQkFBaEQ7QUFDQSxHQUZNLE1BRUEsSUFBSXFCLEdBQUcsQ0FBQ29JLFlBQUosQ0FBaUJNLFdBQWpCLE9BQW1DLEtBQXZDLEVBQThDO0FBQ3BEbEYsU0FBSyxDQUFDMkosVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGTSxNQUVBLElBQUlxQixHQUFHLENBQUNvSSxZQUFKLENBQWlCTSxXQUFqQixPQUFtQyxJQUFuQyxJQUEyQzFJLEdBQUcsQ0FBQ29JLFlBQUosQ0FBaUJNLFdBQWpCLE9BQW1DLElBQWxGLEVBQXdGO0FBQzlGbEYsU0FBSyxDQUFDMkosVUFBTixDQUFpQixDQUFqQixFQUFvQkEsVUFBcEIsQ0FBK0IsQ0FBL0IsRUFBa0N6TyxTQUFsQyxDQUE0Q0MsR0FBNUMsQ0FBZ0QsZ0JBQWhEO0FBQ0EsR0FGTSxNQUVBO0FBQ05pSyxTQUFLLHlLQUFxQzVJLEdBQXJDLDRFQUF3REEsR0FBRyxDQUFDb0ksWUFBNUQsRUFBTDtBQUNBLEdBdkkyRCxDQXlJNUQ7OztBQUNBLE1BQUl0RSxLQUFLLEdBQUdzSSxNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQTZELE9BQUssQ0FBQzhCLFdBQU4sR0FBb0IsOERBQXBCO0FBRUEsTUFBSTdCLEtBQUssR0FBR3FJLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUVBLE1BQUl1SSxXQUFXLEdBQUdoSyxRQUFRLENBQUNnTCxjQUFULHNCQUFzQzRELGVBQXRDLEVBQWxCO0FBQ0EsTUFBSTNFLFdBQVcsR0FBR2pLLFFBQVEsQ0FBQ2dMLGNBQVQsc0JBQXNDNkQsZUFBdEMsRUFBbEI7O0FBRUEsTUFBSXJOLEdBQUcsQ0FBQ21JLGlCQUFKLEtBQTBCLENBQTlCLEVBQWdDO0FBQy9CcEUsU0FBSyxDQUFDNkIsV0FBTixHQUFvQjRDLFdBQVcsQ0FBQzZDLEtBQWhDO0FBQ0EsR0FGRCxNQUVPLElBQUlyTCxHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUE5QixFQUFpQztBQUN2Q3BFLFNBQUssQ0FBQ3BFLFNBQU4sR0FBa0I2SSxXQUFXLENBQUM2QyxLQUFaLEdBQW9CLE1BQXBCLEdBQTZCNUMsV0FBVyxDQUFDNEMsS0FBM0Q7QUFDQSxHQXRKMkQsQ0F5SjVEOzs7QUFDQSxNQUFJbkgsS0FBSyxHQUFHa0ksTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWxCO0FBQ0FpRSxPQUFLLENBQUMwQixXQUFOLEdBQW9CLHNCQUFwQjtBQUVBLE1BQUl6QixLQUFLLEdBQUdpSSxNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbEI7QUFDQWtFLE9BQUssQ0FBQ2xGLE1BQU4sQ0FBYXVOLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0FBekIsRUFDQUEsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxDQURaOztBQUdBLE1BQUl4TSxHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUE5QixFQUFpQztBQUNoQ2hFLFNBQUssQ0FBQ2dKLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0JBLFVBQXBCLENBQStCLENBQS9CLEVBQWtDek8sU0FBbEMsQ0FBNENDLEdBQTVDLENBQWdELGdCQUFoRDtBQUNBLEdBRkQsTUFFTyxJQUFJcUIsR0FBRyxDQUFDbUksaUJBQUosS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdkNoRSxTQUFLLENBQUNnSixVQUFOLENBQWlCLENBQWpCLEVBQW9CQSxVQUFwQixDQUErQixDQUEvQixFQUFrQ3pPLFNBQWxDLENBQTRDQyxHQUE1QyxDQUFnRCxnQkFBaEQ7QUFDQSxHQXJLMkQsQ0F1SzVEOzs7QUFDQSxNQUFJNkYsTUFBTSxHQUFHNEgsTUFBTSxDQUFDbk0sS0FBRCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQW5CO0FBQ0F1RSxRQUFNLENBQUNvQixXQUFQLEdBQXFCLGdCQUFyQjtBQUVBLE1BQUluQixNQUFNLEdBQUcySCxNQUFNLENBQUNuTSxLQUFELEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBbkI7QUFFQSxNQUFJOE4sU0FBUyxHQUFHdlAsUUFBUSxDQUFDZ0wsY0FBVCxDQUF3QixZQUF4QixDQUFoQjtBQUNBLE1BQUl3RSxTQUFTLEdBQUd4UCxRQUFRLENBQUNnTCxjQUFULENBQXdCLFlBQXhCLENBQWhCOztBQUVBLE1BQUl4SixHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUExQixJQUErQm5JLEdBQUcsQ0FBQ3NJLFdBQUosS0FBb0IsQ0FBdkQsRUFBMEQ7QUFDekQ3RCxVQUFNLENBQUNtQixXQUFQLEdBQXFCbUksU0FBUyxDQUFDMUMsS0FBL0I7QUFDQSxHQUZELE1BRU8sSUFBSXJMLEdBQUcsQ0FBQ21JLGlCQUFKLEtBQTBCLENBQTFCLElBQStCbkksR0FBRyxDQUFDc0ksV0FBSixLQUFvQixDQUF2RCxFQUEwRDtBQUNoRTdELFVBQU0sQ0FBQ21CLFdBQVAsR0FBcUJvSSxTQUFTLENBQUMzQyxLQUEvQjtBQUNBLEdBRk0sTUFFQSxJQUFJckwsR0FBRyxDQUFDbUksaUJBQUosS0FBMEIsQ0FBMUIsSUFBK0JuSSxHQUFHLENBQUNzSSxXQUFKLEtBQW9CLENBQW5ELElBQXdEdEksR0FBRyxDQUFDdUksV0FBSixLQUFvQixDQUFoRixFQUFtRjtBQUN6RjtBQUNBOUQsVUFBTSxDQUFDbUIsV0FBUCxHQUFxQm1JLFNBQVMsQ0FBQzFDLEtBQS9CO0FBQ0EsR0FITSxNQUdBLElBQUlyTCxHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUExQixJQUErQm5JLEdBQUcsQ0FBQ3NJLFdBQUosS0FBb0IsQ0FBbkQsSUFBd0R0SSxHQUFHLENBQUN1SSxXQUFKLEtBQW9CLENBQWhGLEVBQW1GO0FBQ3pGO0FBQ0E5RCxVQUFNLENBQUNtQixXQUFQLEdBQXFCb0ksU0FBUyxDQUFDM0MsS0FBL0I7QUFDQSxHQUhNLE1BR0EsSUFBSXJMLEdBQUcsQ0FBQ21JLGlCQUFKLEtBQTBCLENBQTFCLElBQStCbkksR0FBRyxDQUFDc0ksV0FBSixLQUFvQixDQUFuRCxJQUF3RHRJLEdBQUcsQ0FBQ3VJLFdBQUosS0FBb0IsQ0FBaEYsRUFBbUY7QUFDekY5RCxVQUFNLENBQUM5RSxTQUFQLEdBQW1CcU8sU0FBUyxDQUFDM0MsS0FBVixHQUFrQixNQUFsQixHQUEyQjBDLFNBQVMsQ0FBQzFDLEtBQXhEO0FBQ0EsR0FGTSxNQUVBO0FBQUV6QyxTQUFLLGdMQUF1QzVJLEdBQUcsQ0FBQ3FHLE9BQTNDLEVBQUw7QUFBMkQsR0E1TFIsQ0E4TDVEOzs7QUFDQSxNQUFJekIsTUFBTSxHQUFHd0gsTUFBTSxDQUFDbk0sS0FBRCxFQUFRLEVBQVIsRUFBWSxDQUFaLENBQW5CO0FBQ0EyRSxRQUFNLENBQUNnQixXQUFQLEdBQXFCLHdCQUFyQjtBQUVBLE1BQUlmLE1BQU0sR0FBR3VILE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxFQUFSLEVBQVksQ0FBWixDQUFuQjtBQUNBNEUsUUFBTSxDQUFDNUYsTUFBUCxDQUFjdU4sWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8seUJBQVAsQ0FBMUIsRUFDQUEsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sb0JBQVAsQ0FEWixFQUVBQSxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyx5QkFBUCxDQUZaLEVBR0FBLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLG9DQUFQLENBSFo7O0FBS0EsTUFBSXhNLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBbEMsRUFBdUM7QUFDdENMLFVBQU0sQ0FBQ3NJLFVBQVAsQ0FBa0IsQ0FBbEIsRUFBcUJBLFVBQXJCLENBQWdDLENBQWhDLEVBQW1Dek8sU0FBbkMsQ0FBNkNDLEdBQTdDLENBQWlELGdCQUFqRDtBQUNBLEdBRkQsTUFFTyxJQUFJcUIsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUFsQyxFQUF1QztBQUM3Q0wsVUFBTSxDQUFDc0ksVUFBUCxDQUFrQixDQUFsQixFQUFxQkEsVUFBckIsQ0FBZ0MsQ0FBaEMsRUFBbUN6TyxTQUFuQyxDQUE2Q0MsR0FBN0MsQ0FBaUQsZ0JBQWpEO0FBQ0EsR0FGTSxNQUVBLElBQUlxQixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQzdDTCxVQUFNLENBQUNzSSxVQUFQLENBQWtCLENBQWxCLEVBQXFCQSxVQUFyQixDQUFnQyxDQUFoQyxFQUFtQ3pPLFNBQW5DLENBQTZDQyxHQUE3QyxDQUFpRCxnQkFBakQ7QUFDQSxHQUZNLE1BRUEsSUFBSXFCLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBbEMsRUFBdUM7QUFDN0NMLFVBQU0sQ0FBQ3NJLFVBQVAsQ0FBa0IsQ0FBbEIsRUFBcUJBLFVBQXJCLENBQWdDLENBQWhDLEVBQW1Dek8sU0FBbkMsQ0FBNkNDLEdBQTdDLENBQWlELGdCQUFqRDtBQUNBLEdBaE4yRCxDQWtONUQ7OztBQUNBLE1BQUlzUCxNQUFNLEdBQUc3QixNQUFNLENBQUNuTSxLQUFELEVBQVEsRUFBUixFQUFZLENBQVosQ0FBbkI7QUFDQWdPLFFBQU0sQ0FBQ3JJLFdBQVAsR0FBcUIsK0VBQXJCO0FBRUEsTUFBSXNJLE1BQU0sR0FBRzlCLE1BQU0sQ0FBQ25NLEtBQUQsRUFBUSxFQUFSLEVBQVksQ0FBWixDQUFuQjtBQUNBaU8sUUFBTSxDQUFDalAsTUFBUCxDQUFjOE4sT0FBTyxDQUFFLHFDQUFGLENBQXJCLEVBQ0FQLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLGVBQVAsQ0FEWixFQUVBQSxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxnQkFBUCxDQUZaLEVBR0FPLE9BQU8sQ0FBRSxnQ0FBRixDQUhQLEVBSUFQLFlBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLG1CQUFQLENBSlosRUFLQU8sT0FBTyxDQUFFLHFDQUFGLENBTFAsRUFNQVAsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sd0JBQVAsQ0FOWixFQU9BTyxPQUFPLENBQUUsZ0RBQUYsQ0FQUCxFQVFBUCxZQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyw0Q0FBUCxDQVJaOztBQVVBLE1BQUl4TSxHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQTlCLElBQXFDbEYsR0FBRyxDQUFDcUksVUFBSixDQUFlSyxXQUFmLE1BQWdDLE9BQXpFLEVBQWtGO0FBQ2pGd0YsVUFBTSxDQUFDZixVQUFQLENBQWtCLENBQWxCLEVBQXFCQSxVQUFyQixDQUFnQyxDQUFoQyxFQUFtQ3pPLFNBQW5DLENBQTZDQyxHQUE3QyxDQUFpRCxnQkFBakQ7QUFDQSxHQUZELE1BRU8sSUFBSXFCLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBOUIsSUFBcUNsRixHQUFHLENBQUNxSSxVQUFKLENBQWVLLFdBQWYsTUFBZ0MsUUFBekUsRUFBbUY7QUFDekZ3RixVQUFNLENBQUNmLFVBQVAsQ0FBa0IsQ0FBbEIsRUFBcUJBLFVBQXJCLENBQWdDLENBQWhDLEVBQW1Dek8sU0FBbkMsQ0FBNkNDLEdBQTdDLENBQWlELGdCQUFqRDtBQUNBLEdBRk0sTUFFQSxJQUFJcUIsR0FBRyxDQUFDcUcsT0FBSixDQUFZbkIsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixNQUE4QixHQUFsQyxFQUF1QztBQUM3Q2dKLFVBQU0sQ0FBQ2YsVUFBUCxDQUFrQixDQUFsQixFQUFxQkEsVUFBckIsQ0FBZ0MsQ0FBaEMsRUFBbUN6TyxTQUFuQyxDQUE2Q0MsR0FBN0MsQ0FBaUQsZ0JBQWpEO0FBQ0EsR0FGTSxNQUVBLElBQUlxQixHQUFHLENBQUNxRyxPQUFKLENBQVluQixLQUFaLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLE1BQThCLEdBQWxDLEVBQXVDO0FBQzdDZ0osVUFBTSxDQUFDZixVQUFQLENBQWtCLENBQWxCLEVBQXFCQSxVQUFyQixDQUFnQyxDQUFoQyxFQUFtQ3pPLFNBQW5DLENBQTZDQyxHQUE3QyxDQUFpRCxnQkFBakQ7QUFDQSxHQUZNLE1BRUEsSUFBSXFCLEdBQUcsQ0FBQ3FHLE9BQUosQ0FBWW5CLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBbEMsRUFBdUM7QUFDN0NnSixVQUFNLENBQUNmLFVBQVAsQ0FBa0IsQ0FBbEIsRUFBcUJBLFVBQXJCLENBQWdDLENBQWhDLEVBQW1Dek8sU0FBbkMsQ0FBNkNDLEdBQTdDLENBQWlELGdCQUFqRDtBQUNBO0FBRUQ7O0FBRWNxTyw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUMzUUE7QUFBQSxTQUFTbUIsdUJBQVQsR0FBbUM7QUFDbEMsTUFBTUMsTUFBTSxHQUFHNVAsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQTJQLFFBQU0sQ0FBQzFQLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGNBQXJCO0FBRUF5UCxRQUFNLENBQUN6TyxTQUFQLEdBQW1CLG1GQUFuQjtBQUVBLFNBQU95TyxNQUFQO0FBQ0E7O0FBRWNELHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUUsU0FBUyxHQUFHbkgsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQWhCO0FBQ0FrSCxTQUFTLEdBQUc3Ryx5RUFBaUIsQ0FBQzZHLFNBQUQsQ0FBN0I7QUFDQWpPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ08sU0FBWixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3RILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQUFYLENBQWxCO0FBRUEvRyxPQUFPLENBQUNDLEdBQVIsQ0FBWWlPLFdBQVo7QUFFQSxJQUFJRyxrQkFBa0IsR0FBRyxFQUF6Qjs7MkNBRWlCSixTOzs7O0FBQWpCLHNEQUE0QjtBQUFBLFFBQW5COUIsSUFBbUI7O0FBQzFCLFFBQUlrQyxrQkFBa0IsQ0FBQ3pHLE9BQW5CLENBQTJCdUUsSUFBSSxDQUFDL0QsV0FBaEMsTUFBaUQsQ0FBQyxDQUF0RCxFQUF5RDtBQUN2RGlHLHdCQUFrQixDQUFDMUYsSUFBbkIsQ0FBd0J3RCxJQUFJLENBQUMvRCxXQUE3QjtBQUNEOztBQUVELFFBQUkrRCxJQUFJLENBQUM5RCxXQUFMLEtBQXFCLElBQXJCLElBQ0NnRyxrQkFBa0IsQ0FBQ3pHLE9BQW5CLENBQTJCdUUsSUFBSSxDQUFDOUQsV0FBaEMsTUFBaUQsQ0FBQyxDQUR2RCxFQUMwRDtBQUN4RHJJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZb08sa0JBQWtCLENBQUN6RyxPQUFuQixDQUEyQnVFLElBQUksQ0FBQzlELFdBQWhDLENBQVosRUFBMEQ4RCxJQUFJLENBQUM5RCxXQUEvRDtBQUNBZ0csd0JBQWtCLENBQUMxRixJQUFuQixDQUF3QndELElBQUksQ0FBQzlELFdBQTdCO0FBQ0Q7QUFDRjs7Ozs7OztBQUVEZ0csa0JBQWtCLENBQUN6RixJQUFuQixDQUF3QixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNoQyxNQUFJRCxDQUFDLEdBQUdDLENBQVIsRUFBVztBQUNULFdBQU8sQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sQ0FBQyxDQUFSO0FBQ0Q7QUFDRixDQU5EO0FBUUE5SSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9PLGtCQUFaO0FBQ0FuRSxtRkFBaUIsQ0FBQ21FLGtCQUFELENBQWpCO0FBRUEsSUFBSUMsbUJBQW1CLEdBQUdsUSxRQUFRLENBQUNnTCxjQUFULENBQXdCLGlCQUF4QixDQUExQjs7QUFFQWtGLG1CQUFtQixDQUFDQyxPQUFwQixHQUE4QixVQUFVQyxDQUFWLEVBQWE7QUFDekNBLEdBQUMsQ0FBQ0MsY0FBRixHQUR5QyxDQUd6QztBQUNBOztBQUVBLE1BQU1DLDBCQUEwQixHQUFHdFEsUUFBUSxDQUFDZ0wsY0FBVCxDQUF3QiwrQkFBeEIsQ0FBbkM7QUFDQXNGLDRCQUEwQixDQUFDcFEsU0FBM0IsQ0FBcUNDLEdBQXJDLENBQXlDLG9DQUF6Qzs7QUFFQSxPQUFLLElBQUltSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUYsU0FBUyxDQUFDOUcsTUFBOUIsRUFBc0N1QixDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFFNUM7QUFDQSxRQUFNaUcsZ0JBQWdCLEdBQUd2USxRQUFRLENBQUNnTCxjQUFULENBQXdCLG9CQUF4QixDQUF6QjtBQUNBdUYsb0JBQWdCLENBQUNyUSxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IseUJBQS9CO0FBQ0EsUUFBTXFRLFNBQVMsR0FBR3hRLFFBQVEsQ0FBQzZJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCO0FBQ0EsUUFBTTRILGVBQWUsR0FBR0MsMEZBQWUsQ0FBQ2IsU0FBUyxDQUFDdkYsQ0FBRCxDQUFWLEVBQWUsSUFBZixDQUF2QztBQUNBa0csYUFBUyxDQUFDL1AsTUFBVixDQUFpQmdRLGVBQWpCLEVBUDRDLENBUzVDOztBQUNBLFFBQU1FLFlBQVksR0FBRzNRLFFBQVEsQ0FBQ2dMLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBckI7QUFFQSxRQUFNNEYsUUFBUSxHQUFHNVEsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0EyUSxZQUFRLENBQUMxUSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QjtBQUVBLFFBQU0wUSxLQUFLLEdBQUc3USxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBNFEsU0FBSyxDQUFDM1EsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7QUFFQSxRQUFNMlEsV0FBVyxHQUFHOVEsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0E2USxlQUFXLENBQUM1USxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixjQUExQjtBQUVBd1EsZ0JBQVksQ0FBQ2xRLE1BQWIsQ0FBb0JtUSxRQUFwQixFQUE4QkMsS0FBOUI7QUFDQUEsU0FBSyxDQUFDcFEsTUFBTixDQUFhcVEsV0FBYixFQXRCNEMsQ0F3QjVDOztBQUNBQSxlQUFXLENBQUNyUSxNQUFaLENBQW1Ca1Asb0ZBQXVCLEVBQTFDLEVBekI0QyxDQTJCNUM7O0FBQ0FtQixlQUFXLENBQUNyUSxNQUFaLENBQW1Cc00sOEVBQWEsQ0FBQzhDLFNBQVMsQ0FBQ3ZGLENBQUQsQ0FBVixFQUFld0YsV0FBZixDQUFoQyxFQTVCNEMsQ0E4QjVDOztBQUNBZ0IsZUFBVyxDQUFDclEsTUFBWixDQUFtQjZNLGtGQUFnQixDQUFDaEQsQ0FBRCxDQUFuQyxFQS9CNEMsQ0FnQzVDOztBQUNBLFFBQU15RyxJQUFJLEdBQUcvUSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNEOFEsUUFBSSxDQUFDN1EsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0EyUSxlQUFXLENBQUNyUSxNQUFaLENBQW1Cc1EsSUFBbkI7QUFDQ0EsUUFBSSxDQUFDM0osV0FBTCxHQUFtQiwyRkFBbkIsQ0FwQzRDLENBc0M1Qzs7QUFDQTBKLGVBQVcsQ0FBQ3JRLE1BQVosQ0FBbUJXLHdFQUFjLENBQUMwTyxXQUFELEVBQWEsS0FBYixFQUFvQixPQUFwQixFQUE2QkQsU0FBUyxDQUFDdkYsQ0FBRCxDQUF0QyxFQUEyQ0EsQ0FBM0MsRUFBOEN1RixTQUE5QyxDQUFqQyxFQXZDNEMsQ0F3QzVDOztBQUNBaUIsZUFBVyxDQUFDclEsTUFBWixDQUFtQlgsdUVBQWEsRUFBaEM7QUFFQStRLFNBQUssQ0FBQ3BRLE1BQU4sQ0FBYTJILG1FQUFTLENBQUMsSUFBRCxDQUF0QjtBQUNEOztBQUNELE9BQUssSUFBSWtDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUd1RixTQUFTLENBQUM5RyxNQUE5QixFQUFzQ3VCLEVBQUMsSUFBSSxDQUEzQyxFQUE4QztBQUM1Q2tFLG9GQUFjLENBQUNxQixTQUFTLENBQUN2RixFQUFELENBQVYsRUFBZUEsRUFBZixFQUFrQjJGLGtCQUFsQixDQUFkO0FBQ0QsR0F4RHdDLENBMER6Qzs7O0FBQ0F6RCw4RUFBUyxDQUFDcUQsU0FBRCxDQUFUO0FBQ0QsQ0E1REQsQyxDQStEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQSxJQUFJYSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVVsUCxHQUFWLEVBQWV3UCxnQkFBZixFQUFpQztBQUN0RDtBQUNBLE1BQUl2RCxHQUFHLEdBQUd6TixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVixDQUZzRCxDQUl0RDs7QUFDQSxNQUFJeU8sR0FBRyxHQUFHMU8sUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVY7QUFDQSxNQUFJZ1IsR0FBRyxHQUFHalIsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVY7QUFDQSxNQUFJaVIsR0FBRyxHQUFHbFIsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVYsQ0FQc0QsQ0FTdEQ7O0FBQ0F5TyxLQUFHLENBQUN0SCxXQUFKLEdBQWtCNUYsR0FBRyxDQUFDcUcsT0FBdEI7O0FBQ0EsTUFBSW1KLGdCQUFKLEVBQXFCO0FBQ3BCLFFBQUl4UCxHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUE5QixFQUFpQztBQUNoQ3NILFNBQUcsQ0FBQzdKLFdBQUosb0VBQStCNUYsR0FBRyxDQUFDNkksWUFBbkMsZUFBb0Q3SSxHQUFHLENBQUMySSxXQUF4RCxlQUF3RTNJLEdBQUcsQ0FBQ2lJLGFBQTVFO0FBQ0EsS0FGRCxNQUVPLElBQUlqSSxHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUE5QixFQUFpQztBQUN2Q3NILFNBQUcsQ0FBQzdKLFdBQUosb0VBQStCNUYsR0FBRyxDQUFDNkksWUFBbkMsZUFBb0Q3SSxHQUFHLENBQUMySSxXQUF4RCxlQUF3RTNJLEdBQUcsQ0FBQ2lJLGFBQTVFLHNCQUFnR2pJLEdBQUcsQ0FBQ2tJLGFBQXBHO0FBQ0E7QUFDRCxHQU5ELE1BTU87QUFDTnVILE9BQUcsQ0FBQzdKLFdBQUosb0VBQStCNUYsR0FBRyxDQUFDNkksWUFBbkMsZUFBb0Q3SSxHQUFHLENBQUMySSxXQUF4RDtBQUNBOztBQUVEK0csS0FBRyxDQUFDOUosV0FBSixHQUFrQjVGLEdBQUcsQ0FBQytILFVBQXRCO0FBRUFrRSxLQUFHLENBQUNoTixNQUFKLENBQVdpTyxHQUFYLEVBQWdCdUMsR0FBaEIsRUFBcUJDLEdBQXJCO0FBQ0EsU0FBT3pELEdBQVA7QUFDQSxDQXpCRDs7QUEyQmVpRCw4RUFBZixFIiwiZmlsZSI6Im9yZGVyTGlzdEVudHJ5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xheW91dC9zY3JpcHRzL29yZGVyLWxpc3QuanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnOyBcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgXFxyXFxufVxcclxcbkBtZWRpYSBwcmludCB7XFxyXFxuICAvKiAqLFxcclxcbiAgKjpiZWZvcmUsXFxyXFxuICAqOmFmdGVyLFxcclxcbiAgKjpmaXJzdC1sZXR0ZXIsXFxyXFxuICBwOmZpcnN0LWxpbmUsXFxyXFxuICAvKiBkaXY6Zmlyc3QtbGluZSwgXFxyXFxuICBibG9ja3F1b3RlOmZpcnN0LWxpbmUsXFxyXFxuICBsaTpmaXJzdC1saW5lIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcclxcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICB9ICovXFxyXFxuICAvKiDQt9C00LXRgdGMINCx0YPQtNGD0YIg0YHRgtC40LvQuCDQtNC70Y8g0L/QtdGH0LDRgtC4ICovXFxyXFxuICAgIGhlYWRlciwgLm1haW4tdGFibGUsIGZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIC5hNF9kaXYge1xcclxcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG4gICAgYnJlYWstYWZ0ZXI6IGFsd2F5cyAhaW1wb3J0YW50O1xcclxcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XFxyXFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IFxcclxcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICAu0YFpcGhlcl90YWJsZSB0ZHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCg3KXtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNxdWFyZV9jaGVja2VkIHtcXHJcXG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcclxcbiAgICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xcclxcbiAgfVxcclxcblxcclxcbiAgQHBhZ2Uge1xcclxcbiAgICBzaXplOiBhdXRvOyAgXFxyXFxuICAgIG1hcmdpbjogMDsgIFxcclxcbiAgfVxcclxcbi8qIGg2IHtcXHJcXG4gIC13ZWJraXQtZGlzcGxheTogbm9uZTtcXHJcXG59XFx0ICovXFxyXFxufVxcclxcbi8qIEBtZWRpYSBwcmludCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKVxcclxcbmFuZCAobWluLXJlc29sdXRpb246LjAwMWRwY20pIHtcXHJcXG5oNiB7XFxyXFxuICAtd2Via2l0LWRpc3BsYXk6IG5vbmU7XFxyXFxufSBcXHJcXG59ICovXFxyXFxuaDYge1xcclxcbmhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHRtYXJnaW46IDA7XFxyXFxucGFkZGluZzogMDtcXHJcXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbmZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnLCBzYW5zLXNlcmlmO1xcclxcbmNvbG9yOiBibGFjazsgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbndpZHRoOiAyMTBtbTtcXHJcXG5tYXJnaW46IGF1dG87XFxyXFxuLyogYmFja2dyb3VuZDogdXJsKCcvaW1nLzAwMDEuanBnJyk7ICovXFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbnBhZGRpbmc6IDE1cHggMDtcXHJcXG5iYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcbmNvbG9yOiAgd2hpdGU7XFxyXFxufVxcclxcbi8qINCa0J3QntCf0JrQmCAqL1xcclxcbi5idG4ge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbmhlaWdodDogMzBweDtcXHJcXG5iYWNrZ3JvdW5kOiAjMDA4QjhCO1xcclxcbmNvbG9yOiB3aGl0ZTtcXHJcXG5ib3JkZXI6IG5vbmU7XFxyXFxuYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbm1hcmdpbjogNXB4IDA7XFxyXFxuZm9udC1zaXplOiAyMXB4OztcXHJcXG59XFxyXFxuLmJ0bjpsYXN0LWNoaWxke1xcclxcbm1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG4uYnRuOmhvdmVyLCAuaW5wdXQtYnRuOmhvdmVyIHtcXHJcXG5iYWNrZ3JvdW5kOlxcdCMwMDhDMzM7XFxyXFxuYm9yZGVyOiAjMGI2NjAzIHNvbGlkIDJweDtcXHJcXG59XFxyXFxuLypEaXYg0YEg0LLQtdGA0YXQvdC10Lkg0YLQsNCx0LvQuNGG0L7QuSAqL1xcclxcbi5tYWluLXRhYmxlIHtcXHJcXG5iYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbmZvbnQtc2l6ZTogMjFweDtcXHJcXG59XFxyXFxuLyrQm9C10LPQtdC90LTRiyovXFxyXFxubGVnZW5ke1xcclxcbnBhZGRpbmctdG9wOiA1cHg7XFxyXFxufVxcclxcbi8q0KLQkNCR0JvQmNCm0KssINC+0LHRidC40LUg0YHQstC+0LnRgdGC0LLQsCovXFxyXFxudGFibGUge1xcclxcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcbnRkLCB0aCB7XFxyXFxuYm9yZGVyOiAwLjI1bW0gc29saWQgIzAwMDtcXHJcXG59XFxyXFxudGJvZHkgdHI6bnRoLWNoaWxkKDJuLTEpIHtcXHJcXG5iYWNrZ3JvdW5kOiAjZTNmOGVhO1xcclxcbn1cXHJcXG50cjpudGgtY2hpbGQoMm4pLCB0aGVhZCB7XFxyXFxuYmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuLyrQotCQ0JHQm9CY0KbQkCDQmNCd0KTQntCg0JzQkNCm0JjQmCovXFxyXFxuLmluZm9fdGFibGUge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0ZCwgLmluZm9fdGFibGUgdGgge1xcclxcbmJvcmRlcjogMnB4IHNvbGlkICMwMDhCOEI7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRkOm50aC1jaGlsZCgxKSwgIC5pbmZvX3RhYmxlIHRkOm50aC1jaGlsZCgyKXtcXHJcXG5wYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGQ6bGFzdC1jaGlsZHtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRoOmZpcnN0LWNoaWxkIHtcXHJcXG53aWR0aDogNDBtbTtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGg6bGFzdC1jaGlsZCB7XFxyXFxud2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIC5sYXN0X3RkIHtcXHJcXG5mb250LXdlaWdodDogODAwO1xcclxcbmJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuYm9yZGVyOiBub25lO1xcclxcbnRleHQtYWxpZ246IHJpZ2h0O1xcclxcbnBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLyrQmtCe0J3QotCV0JnQndCV0KDQqyDQlNCb0K8g0J7Qn9Cg0J7QodCd0KvQpSovXFxyXFxuLm9yZGVyX2NvbnRhaW5lciB7XFxyXFxuYmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG59XFxyXFxuLmE0X2RpdjpudGgtY2hpbGQoNG4tMil7XFxyXFxuYmFja2dyb3VuZDogI2QwZWNlYztcXHJcXG59XFxyXFxuLmE0X2RpdjpudGgtY2hpbGQoNG4pe1xcclxcbmJhY2tncm91bmQ6ICNjMWU2YzE7XFxyXFxufVxcclxcbi5hNF9kaXYge1xcclxcbmhlaWdodDogMjk2LjVtbTtcXHJcXG5kaXNwbGF5OiBibG9jaztcXHJcXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5hNF9kaXZfZnJhbWUge1xcclxcbmZvbnQtc2l6ZTogMTEuNXB0O1xcclxcbmhlaWdodDogMjg3bW07XFxyXFxud2lkdGg6IDE4NW1tO1xcclxcbmxlZnQ6IDIwbW07XFxyXFxuYm90dG9tOiA1bW07XFxyXFxuYm9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFx0XFxyXFxuZGlzcGxheTogYmxvY2s7IC8qZGVsKi9cXHJcXG59XFxyXFxuLyrQntCf0JjQodCQ0KLQldCb0KzQndCQ0K8g0KLQkNCR0JvQmNCm0JAg0J7Qn9Cg0J7QodCd0J7Qk9CeKi9cXHJcXG4ubGVnZW5kX3RhYmxlIHtcXHJcXG53aWR0aDogNTAlO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5tYXJnaW4tbGVmdDogMTgwcHg7XFxyXFxufVxcclxcbi5kZXNjcmlwdF90YWJsZSB7XFxyXFxubWFyZ2luLWxlZnQ6IDgwcHg7XFxyXFxud2lkdGg6IDE0MG1tO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRfdGFibGUgdGQge1xcclxcbnBhZGRpbmc6IDFweCAwIDFweCA1cHg7XFxyXFxufVxcclxcbi8q0KLQkNCR0JvQmNCm0JAt0J7Qn9Cg0J7QodCd0KvQmSovXFxyXFxuLm9yZGVyX3RhYmxlIHtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5tYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG4ub3JkZXJfdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG53aWR0aDogMTVtbTtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxufVxcclxcbi8qIC5vcmRlcl90YWJsZSB0ZDpsYXN0LWNoaWxke1xcclxcblxcclxcbn0gKi9cXHJcXG4ub3JkZXJfdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcXHJcXG53aWR0aDogNzBtbTtcXHJcXG50ZXh0LWFsaWduOiBsZWZ0O1xcclxcbnBhZGRpbmctbGVmdDogNXB4O1xcclxcbn1cXHJcXG4ub3JkZXJfdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcXHJcXG50ZXh0LWFsaWduOiBsZWZ0O1xcclxcbnBhZGRpbmctbGVmdDogNXB4O1xcclxcbmJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuLm9yZGVyX3RhYmxlIHRyOm50aC1jaGlsZCgxKSB0ZCB7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbmhlaWdodDogMzBweDtcXHJcXG5wYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uc3F1YXJlIHtcXHJcXG53aWR0aDogMTJweDtcXHJcXG5oZWlnaHQ6IDEycHg7XFxyXFxuYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG5mbG9hdDogbGVmdDtcXHJcXG5tYXJnaW4tdG9wOiAycHg7XFxyXFxubWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxubWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG4uc3F1YXJlOmxhc3QtY2hpbGQge1xcclxcbm1hcmdpbi1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuLnNxdWFyZV9jaGVja2VkIHtcXHJcXG5iYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKtGB0LLQvtC50YHRgtCy0LAg0LTQu9GPINC+0L/RgNC+0YHQvdC40LrQsCwg0LPQtNC1INC90YPQttC90L4g0LIg0L7QtNC90YMg0YHRgtGA0L7QutGDINC60LLQsNC00YDQsNGC0LjQutC4INCy0L/QuNGB0LDRgtGMKi9cXHJcXG4uaW5saW5lX2Jsb2NrIHtcXHJcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxud2lkdGg6IDQ5JTtcXHJcXG59XFxyXFxuLyrQn9GA0LjQvNC10YfQsNC90LjQtSDQv9C+0YHQu9C1INC+0L/RgNC+0YHQvdC+0LPQviovXFxyXFxuLm5vdGV7XFxyXFxucGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4vKtCg0JDQnNCa0JAt0KjQmNCk0KAqL1xcclxcbi7RgWlwaGVyX3RhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5ib3R0b206IDA7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwLjk1O1xcclxcbiAgZm9udC1zaXplOiAxMnB0OztcXHJcXG5iYWNrZ3JvdW5kOiAjZmZmO1xcclxcbmJvcmRlci1yaWdodDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG5ib3JkZXItbGVmdDogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkOm50aC1jaGlsZCg0KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDIpe1xcclxcbmxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuLyogZm9udC1zaXplOiAxNHB4O1xcdCAqL1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpudGgtY2hpbGQobis3KXtcXHJcXG5ib3JkZXI6ICMwMDAgc29saWQgMC42bW07XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKG4rNSl7XFxyXFxuYm9yZGVyLXRvcDogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNil7XFxyXFxuYm9yZGVyLWJvdHRvbTogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xcclxcbmJvcmRlci1sZWZ0OiBub25lO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXHJcXG5ib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmxhc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZChuKzQpe1xcclxcbmJvcmRlci1ib3R0b206IG5vbmU7XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgxKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDIpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMykge1xcclxcbnRleHQtYWxpZ246IGxlZnQ7XFxyXFxucGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgxKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDIpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMyksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg0KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNikge1xcclxcbndpZHRoOiAxMG1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNSkge1xcclxcbndpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDUpIHtcXHJcXG53aWR0aDogNzBtbTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDcpIHtcXHJcXG53aWR0aDogMTVtbTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCg3KXtcXHJcXG5mb250LXNpemU6IDI0cHQ7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyIHRkOmZpcnN0LWNoaWxke1xcclxcbmhlaWdodDogNW1tO1xcclxcbn1cXHJcXG4ucF9iZXNwe1xcclxcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4vKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXHJcXG59XFxyXFxuLmxvZ29fYmVzcHtcXHJcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxubWFyZ2luOiAwcHggMCAtMTJweCA3cHg7XFx0XFxyXFxufVxcclxcbi8q0J/QoNCv0KfQldCcINCk0J7QoNCc0KMg0JLQndCV0KHQldCd0JjQryDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JDQktCi0J7QnNCQ0KLQntCSINCf0J7QodCb0JUg0JXQlSDQl9CQ0J/QntCb0J3QldCd0JjQryovXFxyXFxuLmhpZGVfY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyrQn9Ce0JrQkNCX0KvQktCQ0JXQnCovXFxyXFxuLmhpZGVfaW5mb190YWJsZV93cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zaG93X2luZm9fdGFibGVfd3JhcHBlciB7XFxyXFxuZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mb290ZXJfc2hvdyB7XFxyXFxuZGlzcGxheTogYmxvY2s7XFx0XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyrQpNCe0KDQnNCQINCS0JLQntCU0JAg0KHQp9CV0KLQp9CY0JrQntCSINCYINCS0KvQmtCb0K7Qp9CQ0KLQldCb0JXQmSovXFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyIHtcXHJcXG5iYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbmZvbnQtc2l6ZTogMjFweDtcXHJcXG5taW4taGVpZ2h0OiA4MjNweDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyIGlucHV0IHtcXHJcXG5mb250LXNpemU6IDIxcHg7XFx0XFxyXFxufVxcclxcbi8q0L3Rg9C80LXRgNCw0YbQuNGPINC70LjRgdGC0L7QsiovXFxyXFxuLmlucHV0X3BhZ2V7XFxyXFxuLyogYmFja2dyb3VuZDogIzQ4RDFDQzsgKi9cXHJcXG5ib3JkZXI6ICMwMDhCOEIgc29saWQgMnB4O1xcclxcbmJvcmRlci1yYWRpdXM6IDVweDtcXHRcXHJcXG5wYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcbi5pbnB1dF9wYWdlIHAge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4vKtCh0KfQldCi0KfQmNCa0JgqL1xcclxcbi5jb3VudGVyc193cmFwcGVye1xcclxcbmJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuYm9yZGVyOiAjMDA4QjhCIHNvbGlkIDJweDtcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFx0XFxyXFxucGFkZGluZy1sZWZ0OiA0MHB4O1xcclxcblxcclxcbn1cXHJcXG4uaW5wdXRfcGFnZSBwLFxcclxcbi5jb3VudGVyc193cmFwcGVyIHB7XFxyXFxucGFkZGluZy10b3A6IDE1cHg7XFxyXFxufVxcclxcbi5jb3VudGVyc193cmFwcGVyIC5jb3VudGVyX25vdGUge1xcclxcbnBhZGRpbmc6IDA7XFxyXFxuZm9udC1zaXplOiAxNnB4O1xcclxcbmNvbG9yOiAjMGI2NjAzO1xcclxcbn1cXHJcXG4uY291bnRlcnNfd3JhcHBlciAuY291bnRlcl9ub3RlOmxhc3QtY2hpbGQge1xcclxcbnBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0xZixcXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgI2NvdW50ZXItM2Yge1xcclxcbndpZHRoOiA5MSU7XFxyXFxufVxcclxcbi5pbnB1dF9wYWdlICNpbnB1dF9wYWdlXFxyXFxuLyosIC5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0zZiovXFxyXFxue1xcclxcbm1hcmdpbi1ib3R0b206IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi8q0JLQq9Ca0JvQrtCn0JDQotCV0JvQmCovXFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvLFxcclxcbi5icmVha2VyX2RpdiB7XFxyXFxuYm9yZGVyOiAjMDA4QjhCIHNvbGlkIDJweDtcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxucGFkZGluZy1sZWZ0OiA0MHB4O1xcdFxcdFxcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW97XFxyXFxucGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbzpudGgtY2hpbGQoMm4tMSl7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNWZlNjdjO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW86bnRoLWNoaWxkKDJuKXtcXHJcXG5iYWNrZ3JvdW5kOiAjNGZmOWFhO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXY6bnRoLWNoaWxkKDJuLTEpe1xcclxcbmJhY2tncm91bmQ6ICM0OEQxQ0M7XFxyXFxufVxcclxcbi5icmVha2VyX2RpdjpudGgtY2hpbGQoMm4pe1xcclxcbmJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbyAuYnJlYWtlcl9wLFxcclxcbi5icmVha2VyX2RpdiAuYnJlYWtlcl9we1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5wYWRkaW5nOiAxNXB4IDAgMnB4IDA7XFx0XFxyXFxubWFyZ2luLWxlZnQ6IC00MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJlYWtlcl9kaXYgLmlucHV0LXB7XFxyXFxucGFkZGluZzogOHB4IDAgMnB4IDA7XFx0XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbyBsYWJlbHtcXHJcXG5wYWRkaW5nOiAzcHggMCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5icmVha2VyX2RpdiBpbnB1dDpsYXN0LWNoaWxke1xcclxcbm1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8q0YTQvtGA0LzQsNGCICjQkDQpKi9cXHJcXG4uZm9ybWF0X2RpdntcXHJcXG5ib3R0b206IDFweDtcXHJcXG4gIHJpZ2h0OiA5MnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCR0J7QmtCe0JLQkNCvINCn0JDQodCi0Kwg0KDQkNCc0JrQmCovXFxyXFxuLmFzaWRlX2ZyYW1lIHtcXHJcXG4vKnRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTsgKi9cXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuYm90dG9tOiAtMC41bW07XFxyXFxubGVmdDogLTEzbW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSBzcGFue1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxyXFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGR7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbmJvcmRlcjogMC42bW0gc29saWQgYmxhY2s7XFxyXFxuZm9udC1zaXplOiAxMnB0O1xcclxcbnRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTtcXHJcXG5cXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHRyOm50aC1jaGlsZCgybisxKSB0ZHtcXHJcXG5oZWlnaHQ6IDI1LjNtbTtcXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHRyOm50aC1jaGlsZCgyKSB0ZHtcXHJcXG5oZWlnaHQ6IDM1LjZtbTtcXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHRkOmZpcnN0LWNoaWxke1xcclxcbndpZHRoOiA1bW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0ZDpsYXN0LWNoaWxke1xcclxcbndpZHRoOiA3bW07XFxyXFxuYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn0gXFxyXFxuXFxyXFxuLyrQstCy0L7QtCDihJYg0YHRgtGA0LDQvdC40YbRiyovXFxyXFxuI2lucHV0X3BhZ2V7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJle1xcclxcbiAgbWF4LXdpZHRoOiA2NXB4O1xcclxcbiAgbWF4LWhlaWdodDogMzNweDtcXHJcXG4gIGJvdHRvbTogLTdweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZV9ib3NzIHtcXHJcXG4gIG1heC13aWR0aDogNjVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDMzcHg7XFxyXFxuICBib3R0b206IDE1cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5zaWduYXR1cmVfYm9zczIge1xcclxcbiAgbWF4LXdpZHRoOiA2NXB4O1xcclxcbiAgbWF4LWhlaWdodDogMzNweDtcXHJcXG4gIGJvdHRvbTogMzNweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZmFlYWZkNDk3M2Y4ODkyMDA3NGU0NmU1NTViMTJmYy50dGZcIjsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3JkZXItbGlzdC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImZ1bmN0aW9uIGFkZEFzaWRlVGFibGUoKSB7XHJcblxyXG5cdHZhciBhc2lkZV9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHRhc2lkZV9mcmFtZS5jbGFzc0xpc3QuYWRkKCdhc2lkZV9mcmFtZScpO1xyXG5cclxuXHR2YXIgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHRhc2lkZV9mcmFtZS5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcblx0dmFyIHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dmFyIHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dmFyIHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cdGJvZHkuYXBwZW5kKHJvdzEsIHJvdzIsIHJvdzMpO1xyXG5cclxuXHR2YXIgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHRkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93MS5hcHBlbmQodGQxXzEsIHRkMV8yKTtcclxuXHRyb3cyLmFwcGVuZCh0ZDJfMSwgdGQyXzIpO1xyXG5cdHJvdzMuYXBwZW5kKHRkM18xLCB0ZDNfMik7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRgdC/0LDQvdGLXHJcblx0dGQxXzEuYXBwZW5kKHNwYW5fdGQxXzEpO1xyXG5cdHRkMl8xLmFwcGVuZChzcGFuX3RkMl8xKTtcclxuXHR0ZDNfMS5hcHBlbmQoc3Bhbl90ZDNfMSk7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHRzcGFuX3RkMV8xLmlubmVySFRNTCA9ICfQmNC90LIuIE4g0L/QvtC00LsuJztcclxuXHR0ZDFfMi5pbm5lckhUTUwgPSAnJztcclxuXHRzcGFuX3RkMl8xLmlubmVySFRNTCA9ICfQn9C+0LTQv9C40YHRjCDQuCDQtNCw0YLQsCc7XHJcblx0dGQyXzIuaW5uZXJIVE1MID0gJyc7XHJcblx0c3Bhbl90ZDNfMS5pbm5lckhUTUwgPSAn0JLQt9Cw0LzQtdC9INC40L3Qsi4gTic7XHJcblx0dGQzXzIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdHJldHVybiBhc2lkZV9mcmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQXNpZGVUYWJsZTtcclxuIiwiaW1wb3J0IHsgYWRkT3JkZXJQYWdlTnVtYmVyLCAgYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIsIGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciwgYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcn0gZnJvbSAnLi9hZGQtcGFnZS1udW1iZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2lwaGVyVGFibGUocHJvamVjdCwgc3Vic2VjdGlvbiwgdHlwZU9mUGFnZSwgc2VtLCBpbmRleCwgbWFpbk9iaiwgc2hlbWVQYWdlcykge1xyXG5cclxuXHRjb25zb2xlLmxvZyhtYWluT2JqKVxyXG5cdGNvbnN0INGBaXBoZXJUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHTRgWlwaGVyVGFibGUuY2xhc3NMaXN0LmFkZCgn0YFpcGhlcl90YWJsZScpO1xyXG5cclxuXHRjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHTRgWlwaGVyVGFibGUuYXBwZW5kKHRib2R5KTtcclxuXHQvLyDRgdGC0YDQvtC60LhcclxuXHRcclxuXHRjb25zdCByb3dfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuXHJcblx0Ly8g0LzQtdGB0YLQviDQs9C00LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60LhcclxuXHR0Ym9keS5hcHBlbmQocm93XzEsIHJvd18yLCByb3dfMywgcm93XzQsIHJvd181LCByb3dfNiwgcm93XzcsIHJvd184LCByb3dfOSwgcm93XzEwLCByb3dfMTEpO1xyXG5cclxuLy8gY29uc3Qgcm93MSA9IHRib2R5WzBdO1xyXG4vKlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDExOyBpICs9IDEpIHtcclxuXHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dGJvZHkuYXBwZW5kKHJvdyk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcblx0Y29uc3Qgcm93ID0gdGJvZHkuY2hpbGROb2Rlc1swXTtcclxuXHRjb25zb2xlLmxvZyh0Ym9keS5jaGlsZE5vZGVzKVxyXG5cdGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHJvdy5hcHBlbmQodGQpO1xyXG59XHJcbiovXHJcbi8vIGNvbnNvbGUubG9nKHJvdzEpXHJcblx0Ly8g0Y/Rh9C10LnQutC4XHJcblx0Y29uc3QgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDFfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQzXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDNfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ1XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkNl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ2XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDZfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cdGNvbnN0IHRkNl82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl83ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl84ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN18yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN183LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblxyXG5cdGNvbnN0IHRkOF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ4XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ4XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDhfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDhfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ5XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDlfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV81LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblx0Y29uc3QgdGQ5XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzYuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcclxuXHR0ZDlfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDEwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTBfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTBfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDEwXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkMTFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDExXzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDExXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMV8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMTFfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93XzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMsIHRkMV80LCB0ZDFfNSwgdGQxXzYsIHRkMV83KTtcclxuXHRyb3dfMi5hcHBlbmQodGQyXzEsIHRkMl8yLCB0ZDJfMywgdGQyXzQsIHRkMl81LCB0ZDJfNik7XHJcblx0cm93XzMuYXBwZW5kKHRkM18xLCB0ZDNfMiwgdGQzXzMsIHRkM180LCB0ZDNfNSwgdGQzXzYsIHRkM183KTtcclxuXHRyb3dfNC5hcHBlbmQodGQ0XzEsIHRkNF8yLCB0ZDRfMywgdGQ0XzQsIHRkNF81LCB0ZDRfNik7XHJcblx0cm93XzUuYXBwZW5kKHRkNV8xLCB0ZDVfMiwgdGQ1XzMsIHRkNV80LCB0ZDVfNSwgdGQ1XzYpO1xyXG5cdHJvd182LmFwcGVuZCh0ZDZfMSwgdGQ2XzIsIHRkNl8zLCB0ZDZfNCwgdGQ2XzUsIHRkNl82LCB0ZDZfNywgdGQ2XzgpO1xyXG5cdHJvd183LmFwcGVuZCh0ZDdfMSwgdGQ3XzIsIHRkN18zLCB0ZDdfNCwgdGQ3XzUsIHRkN182LCB0ZDdfNyk7XHJcblx0cm93XzguYXBwZW5kKHRkOF8xLCB0ZDhfMiwgdGQ4XzMsIHRkOF80KTtcclxuXHRyb3dfOS5hcHBlbmQodGQ5XzEsIHRkOV8yLCB0ZDlfMywgdGQ5XzQsIHRkOV81LCB0ZDlfNik7XHJcblx0cm93XzEwLmFwcGVuZCh0ZDEwXzEsIHRkMTBfMiwgdGQxMF8zLCB0ZDEwXzQpO1xyXG5cdHJvd18xMS5hcHBlbmQodGQxMV8xLCB0ZDExXzIsIHRkMTFfMywgdGQxMV80KTtcclxuXHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHR0ZDFfNy5pbm5lckhUTUwgPSBgJHtwcm9qZWN0LmNpcGhlcn0tJHtzdWJzZWN0aW9ufS03MC3QkNCj0K1gOyAvLzEuN1xyXG5cclxuXHR0ZDNfNy5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZlByb2plY3Q7IC8vMy43XHJcblxyXG5cdHRkNV8xLmlubmVySFRNTCA9ICfQmNC30LwuJzsgLy81LjFcclxuXHR0ZDVfMi5pbm5lckhUTUwgPSAn0JrQvtC7LtCj0YcuJzsgLy81LjJcclxuXHR0ZDVfMy5pbm5lckhUTUwgPSAn0JvQuNGB0YInOyAvLzUuM1xyXG5cdHRkNV80LmlubmVySFRNTCA9ICfihJbQtNC+0LouJzsgLy81LjRcclxuXHR0ZDVfNS5pbm5lckhUTUwgPSAn0J/QvtC00L/QuNGB0YwnOyAvLzUuNVxyXG5cdHRkNV82LmlubmVySFRNTCA9ICfQlNCw0YLQsCc7IC8vNS42XHJcblxyXG5cdHRkNl8xLmlubmVySFRNTCA9ICfQo9GC0LIuJzsgLy82LjFcclxuXHR0ZDZfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkJvc3Muc3BsaXQoJyAnKVswXTsgLy82LjJcclxuXHR0ZDZfMy5pbm5lckhUTUwgPSAnJzsgLy82LjNcclxuXHJcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblx0Ly8gY29uc3QgZGF5ID0gZC5nZXREYXRlKCk7XHJcblx0Y29uc3QgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cdGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuXHJcblx0bGV0IHRvZGF5O1xyXG5cdGlmIChtb250aCA8IDEwKSB7XHJcblx0XHR0b2RheSA9IGAwJHttb250aH0uJHt5ZWFyLnNwbGl0KCcnKVsyXX0ke3llYXIuc3BsaXQoJycpWzNdfWBcclxuXHR9IGVsc2Uge1xyXG5cdFx0dG9kYXkgPSBgJHttb250aH0uJHt5ZWFyLnNwbGl0KCcnKVsyXX0ke3llYXIuc3BsaXQoJycpWzNdfWBcclxuXHR9XHJcblxyXG5cdHRkNl80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkOV80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkMTBfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDExXzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblxyXG5cdFxyXG5cdGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXInIHx8IHR5cGVPZlBhZ2UgPT09ICdvcmRlclNoZW1lJykge1xyXG5cdFx0dGQ2XzUuaW5uZXJIVE1MID0gJ9CX0LDQtNCw0L3QuNC1INC30LDQstC+0LTRgyDQvdCwINC40LfQs9C+0YLQvtCy0LvQtdC90LjQtSDRiNC60LDRhNC+0LIg0JDQodCa0KPQrSc7IC8vNi41XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnIHx8IHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0dGQ2XzUuaW5uZXJIVE1MID0gJ9Ct0LvQtdC60YLRgNC40YfQtdGB0LrQuNC1INGB0LXRgtC4IDAsNC0xMCDQutCSLiDQkNCh0JrQo9CtJzsgLy82LjVcclxuXHR9XHJcblx0dGQ2XzYuaW5uZXJIVE1MID0gJ9Ch0YLQsNC00LjRjyc7IC8vNi42XHJcblx0dGQ2XzcuaW5uZXJIVE1MID0gJ9Cb0LjRgdGCJzsgLy82LjdcclxuXHR0ZDZfOC5pbm5lckhUTUwgPSAn0JvQuNGB0YLQvtCyJzsgLy82LjhcclxuXHJcblx0dGQ3XzUuaW5uZXJIVE1MID0gcHJvamVjdC5zdGFnZU9mUHJvamVjdDtcdFx0XHQvLyA3LjVcclxuXHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkT3JkZXJQYWdlTnVtYmVyKGluZGV4LCBzZW0sIG1haW5PYmopO1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKTtcclxuXHJcblx0XHQvLyDQuNGB0L/RgNCw0LLQuNGC0Ywg0L3QuNC20LUsINGH0YLQvtCxINC+0YLQu9C40YfQsNC70LDRgdGMINC90YPQvNC10YDQsNGG0LjRj1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKTtcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgpO1xyXG5cdH1cclxuXHRcclxuXHR0ZDlfMS50ZXh0Q29udGVudCA9ICfQnS4g0LrQvtC90YLRgC4nOyAvLzkuMVxyXG5cdHRkOV8yLnRleHRDb250ZW50ID0gJ9Ch0LLQuNGA0YHQutC40LknO1xyXG5cclxuXHRpZiAocHJvamVjdC5pc0Jvc3NTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgYm9zc1NpZ25hdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRjb25zdCBib3NzU2lnbmF0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRib3NzU2lnbmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZV9ib3NzJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmVfYm9zczInKTtcclxuXHRcdGJvc3NTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdHRkOV8zLmFwcGVuZChib3NzU2lnbmF0dXJlKTtcclxuXHRcdHRkMTBfMy5hcHBlbmQoYm9zc1NpZ25hdHVyZTIpO1xyXG5cdH1cclxuXHJcblx0Ly8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcblxyXG5cdGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXInKSB7XHJcblx0XHR0ZDlfNS50ZXh0Q29udGVudCA9IHNlbS5mdWxsRGVjcmlwdGlvbjsgLy85LjVcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlclNoZW1lJyB8fCB0eXBlT2ZQYWdlID09PSAnd29ya3NTaGVtZScpIHtcclxuXHRcdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzEnKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDQvtC00L3QvtGE0LDQt9C90YvQvCDQstCy0L7QtNC+0LwuINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINC00LLRg9C80Y8g0L7QtNC90L7RhNCw0LfQvdGL0LzQuCDQstCy0L7QtNCw0LzQuC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcxJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0YLRgNC10YXRhNCw0LfQvdGL0Lwg0LLQstC+0LTQvtC8LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDQtNCy0YPQvNGPINGC0YDQtdGF0YTQsNC30L3Ri9C80Lgg0LLQstC+0LTQsNC80LguINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINGC0YDQtdGF0YTQsNC30L3Ri9C8INC4INC+0LTQvdC+0YTQsNC30L3Ri9C8INCy0LLQvtC00L7QvC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3JrcycpIHtcclxuXHRcdHRkOV81LnRleHRDb250ZW50ID0gYCR7c2VtLmRlY3JpcHRpb25Gb3JXb3Jrc30uINCS0LXQtNC+0LzQvtGB0YLRjCDQvtCx0YrQtdC80L7QsiDRgdGC0YDQvtC40YLQtdC70YzQvdGL0YUg0Lgg0LzQvtC90YLQsNC20L3Ri9GFINGA0LDQsdC+0YIg0L/QviDRg9GB0YLQsNC90L7QstC60LVgOyAvLzkuNVxyXG5cdH0gXHJcblxyXG5cclxuXHRjb25zdCBwX2Jlc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRwX2Jlc3AuY2xhc3NMaXN0LmFkZCgncF9iZXNwJyk7XHJcblx0cF9iZXNwLnNldEF0dHJpYnV0ZSgnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHR0ZDlfNi5hcHBlbmQocF9iZXNwKTtcclxuXHRwX2Jlc3AuaW5uZXJIVE1MID0gJ9Cg0KPQnycgKyAnPEJSPicgKyAnXCLQkdC10LvRjdC90LXRgNCz0L7RgdC10YLRjNC/0YDQvtC10LrRglwiJztcclxuXHRjb25zdCBsb2dvX2Jlc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG5cdGxvZ29fYmVzcC5jbGFzc0xpc3QuYWRkKCdsb2dvX2Jlc3AnKTtcclxuXHRsb2dvX2Jlc3Auc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvbG9nb19iZXNwLmpwZycpO1xyXG5cdHRkOV82LmFwcGVuZChsb2dvX2Jlc3ApO1xyXG5cdC8qXHR0ZDlfNi5pbm5lckhUTUwgPSAn0KDQo9CfIFwi0JHQtdC70Y3QvdC10YDQs9C+0YHQtdGC0YzQv9GA0L7QtdC60YJcIic7IC8vOS42Ki9cclxuXHJcblx0dGQxMF8xLmlubmVySFRNTCA9ICfQn9GA0L7QstC10YDQuNC7JzsgLy8xMC4xXHJcblx0dGQxMF8yLmlubmVySFRNTCA9ICfQodCy0LjRgNGB0LrQuNC5JzsgLy8xMC4yXHJcblxyXG5cdHRkMTFfMS5pbm5lckhUTUwgPSAn0KDQsNC30YDQsNCxLic7IC8vMTEuMVxyXG5cdHRkMTFfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkRldmVsb3Blci5zcGxpdCgnICcpWzBdOyAvLzExLjJcclxuXHJcblx0aWYgKHByb2plY3QuaXNEZXZlbG9wZXJTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgZGV2ZWxvcGVyU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGRldmVsb3BlclNpZ25hdHVyZS5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmUnKTtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQmtGA0LDQv9C40LLQuNC90LAg0KIuINChXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2tyYXBpdmluYS5wbmcnKTtcclxuXHRcdH0gZWxzZSBpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0KHQstC40YDRgdC60LjQuSDQkC4g0JUuXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0fSBlbHNlIGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQmNC00LXQu9GM0YfQuNC6INCTLiDQoC5cIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvaWRlbGNoaWsucG5nJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHR9XHJcblx0XHR0ZDExXzMuYXBwZW5kKGRldmVsb3BlclNpZ25hdHVyZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4g0YFpcGhlclRhYmxlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRDaXBoZXJUYWJsZTtcclxuIiwiZnVuY3Rpb24gYWRkRm9ybWF0KGZvcm1hdCkge1xyXG5cclxuXHRjb25zdCBmb3JtYXRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuXHRmb3JtYXRfZGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1hdF9kaXYnKTtcclxuXHJcblx0Y29uc3QgZm9ybWF0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdGZvcm1hdFBhcmEuY2xhc3NMaXN0LmFkZCgnZm9ybWF0Jyk7XHJcblx0XHJcblx0Zm9ybWF0UGFyYS50ZXh0Q29udGVudCA9IGDQpNC+0YDQvNCw0YIgJHtmb3JtYXR9YDtcclxuXHRmb3JtYXRfZGl2LmFwcGVuZChmb3JtYXRQYXJhKTtcclxuXHJcblx0cmV0dXJuIGZvcm1hdF9kaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEZvcm1hdDtcclxuIiwiZnVuY3Rpb24gYWRkT3JkZXJQYWdlTnVtYmVyKGluZGV4LCBzZW0sIGFyck9mU2Vtcykge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck9yZGVyUGFnZUlucHV0Jyk7XHJcblxyXG5cdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0cmV0dXJuICtpbnB1dF9wYWdlICsgMTtcclxuXHR9IGVsc2UgaWYgKGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSBcclxuXHRcdCYmIGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSkge1xyXG5cdFx0Y29uc3QgcHJldmlvdXNQYWdlID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNvcmRlcl9zaGVldCA+IGRpdjpudGgtY2hpbGQoJHtpbmRleCAqIDJ9KSA+IGRpdiA+IHRhYmxlLtGBaXBoZXJfdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg3KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHJldHVybiArcHJldmlvdXNQYWdlICsgMTtcclxuXHR9IGVsc2UgaWYgKGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSBcclxuXHRcdHx8IGFyck9mU2Vtc1tpbmRleCAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVszXSAhPT0gc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSkge1xyXG5cdFx0Y29uc3QgcHJldmlvdXNQYWdlID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNvcmRlcl9zaGVldCA+IGRpdjpudGgtY2hpbGQoJHtpbmRleCAqIDJ9KSA+IGRpdiA+IHRhYmxlLtGBaXBoZXJfdGFibGUgPiB0Ym9keSA+IHRyOm50aC1jaGlsZCg3KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHJldHVybiBwcmV2aW91c1BhZ2UgKyAyO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXMpIHtcclxuXHRcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJPcmRlclBhZ2VJbnB1dCcpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhzaGVtZVBhZ2VzKTtcclxuXHRjb25zb2xlLmxvZyhpbnB1dF9wYWdlLCBzaGVtZVBhZ2VzW2luZGV4XSwgaW5kZXgpO1xyXG5cclxuXHRyZXR1cm4gK2lucHV0X3BhZ2UgKyBzaGVtZVBhZ2VzW2luZGV4XSArIGluZGV4O1xyXG59XHJcbi8vXHJcbmZ1bmN0aW9uIGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCkge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcldvcmtzUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIGluZGV4KTtcclxuXHJcblx0cmV0dXJuICtpbnB1dF9wYWdlICsgaW5kZXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXNTdW0pIHtcclxuXHRcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJXb3Jrc1BhZ2VJbnB1dCcpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhpbnB1dF9wYWdlLCBpbmRleCwgc2hlbWVQYWdlc1N1bSk7XHJcblxyXG5cdHJldHVybiAraW5wdXRfcGFnZSArIGluZGV4ICtzaGVtZVBhZ2VzU3VtLmxlbmd0aDtcclxufVxyXG4vL1xyXG5leHBvcnQgeyBhZGRPcmRlclBhZ2VOdW1iZXIsICBhZGRPcmRlclNoZW1lUGFnZU51bWJlciwgYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyLCBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyfSA7XHJcbiIsImZ1bmN0aW9uIG1haW5PYmplY3RDb2xsZWN0KHN0cikge1xyXG5cdGxldCBhcnJheU9mVXNlcklucHV0ID0gc3RyLnNwbGl0KCdcXG4nKTtcclxuXHJcblx0bGV0IHJlc3VsdEFycmF5ID0gW107XHJcblxyXG5cdGxldCBsZWdlbmRBcnJheSA9IGFycmF5T2ZVc2VySW5wdXRbMF0uc3BsaXQoJywnKTtcclxuXHJcblx0ZnVuY3Rpb24gU0VNKGFycikge1xyXG5cclxuXHRcdHRoaXMuY291bnRPZlNFTSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0JrQvtC70LjRh9C10YHRgtCy0L4nKV07XHJcblx0XHR0aGlzLmJyZWFrZXIxVmFsdWUgPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ0nQndCe0Jxf0JDQkjEnKV0uc3BsaXQoJyAnKVswXTtcclxuXHRcdHRoaXMuYnJlYWtlcjJWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMicpXS5zcGxpdCgnICcpWzBdIHx8IG51bGw7XHJcblx0XHR0aGlzLlNFTVR5cGUgPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9Cp0KPQrScpXTtcclxuXHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPSArdGhpcy5TRU1UeXBlLnNwbGl0KCctJylbM107XHJcblxyXG5cdFx0aWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDFcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQkic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV07XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQktCSJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGlsbGFyVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0J7Qn9Ce0KDQqycpXSB8fCAn0KHQki05NSc7XHJcblxyXG5cdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAzO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3V0QnJlYWtlcjEgPSBgJHt0aGlzLnBoYXNlMVZhbHVlfSAtICR7dGhpcy5icmVha2VyMVZhbHVlfWA7XHJcblx0XHR0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyID9cclxuXHRcdFx0dGhpcy5vdXRCcmVha2VyMiA9IGAke3RoaXMucGhhc2UyVmFsdWV9IC0gJHt0aGlzLmJyZWFrZXIyVmFsdWV9YCA6XHJcblx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBudWxsO1xyXG5cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LInKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQuicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQsicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQuicpKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6INC60LDQsdC10LvRjNC90LDRjyDQuCDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3Ri9C1Lic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJzHRhNC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8sIDHRhCAtINC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICcz0YTQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDogM9GEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLCAx0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQsicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LLQvtC30LTRg9GI0L3Ri9C1Lic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhbGVydChgJHt0aGlzLmlucHV0RnJvbVNlbX0g0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiAke3RoaXMuU0VNVHlwZX0sINC/0LXRgNC10L/RgNC+0LLQtdGA0YzRgtC1INCy0LLQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICfRgdCyLTk1Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQki05NSc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlLnRvTG93ZXJDYXNlKCkgPT09ICfRgdCyLTExMCcpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItMTEwJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0XHR0aGlzLmRlY3JpcHRpb25Gb3JXb3JrcyA9IGAke3RoaXMuU0VNVHlwZX0uICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259YDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQOyAke3RoaXMuYnJlYWtlcjJWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXlPZlVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0aWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPT09IDYpIHtcclxuXHRcdFx0cmVzdWx0QXJyYXkucHVzaChuZXcgU0VNKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKSkpO1xyXG5cdFx0fSBlbHNlIGlmIChhcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RoID4gNCkge1xyXG5cdFx0XHRhbGVydChg0LTQu9C40L3QsCDQvNCw0YHRgdC40LLQsCAke2FycmF5T2ZVc2VySW5wdXRbaV19ID0gJHthcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RofSDQstC80LXRgdGC0L4gNiBcXG4g0LTQsNC90L3Ri9C5INC80LDRgdGB0LjQsiDQvdC1INCx0YPQtNC10YIg0L7QsdGA0LDQsdC+0YLQsNC9YCk7XHJcblx0XHQgIH1cclxuXHR9XHJcblx0Y29uc29sZS5sb2cocmVzdWx0QXJyYXkpO1xyXG5cclxuXHRyZXN1bHRBcnJheS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRpZiAoYS5TRU1UeXBlID4gYi5TRU1UeXBlKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5PYmplY3RDb2xsZWN0O1xyXG4iLCJpbXBvcnQgYnJlYWtlckRlZmF1bHRUeXBlIGZyb20gJy4vYnJlYWtlci1kZWZhdWx0LXR5cGUnO1xyXG5cclxuLy8g0YTRg9C90LrRhtC40Y8g0LTQvtCx0LDQstC70Y/RjtGJ0LDRjyDRhNC+0YDQvNGDINC00LvRjyDQstGL0LrQu9GO0YfQsNGC0LXQu9C10LlcclxuZnVuY3Rpb24gY3JlYXRlQnJlYWtlcldyYXBwZXIocGFpck9mUGhhc2VBbmRBbXBlcmUsIGluZGV4LCBvdXRCcmVha2VyRGVmYXVsdCwgaW5wdXRCcmVha2VyRGVmYXVsdCkge1xyXG5cdGNvbnN0IGJyYWtlcnNXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyYWtlcnNfd3JhcHBlcicpO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0L7QsdC10YDRgtC60LhcclxuXHRjb25zdCBicmVha2VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuXHRicmVha2VyRGl2LmNsYXNzTGlzdC5hZGQoJ2JyZWFrZXJfZGl2Jyk7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQstC10YDRhdC90LXQs9C+INCgXHJcblx0Y29uc3QgYnJlYWtlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRicmVha2VyUC5jbGFzc0xpc3QuYWRkKCdicmVha2VyX3AnKTtcclxuXHRicmVha2VyUC5pbm5lckhUTUwgPSAnPHU+JyArICfQktC10LTQuNGC0LUg0LTQsNC90L3Ri9C1INC00LvRjyDQqdCj0K0g0YEg0L7RgtGF0L7QtNGP0YnQtdC5INC70LjQvdC40LXQuTogJyArICc8Yj4nICsgcGFpck9mUGhhc2VBbmRBbXBlcmUuc3BsaXQoJyAtICcpWzBdICsgJ9CkICcgKyBwYWlyT2ZQaGFzZUFuZEFtcGVyZS5zcGxpdCgnIC0gJylbMV0gKyAnQScgKyAnPC9iPicgKyAnPC91Pic7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQoCDQtNC70Y8g0YDQsNC00LjQvlxyXG5cdGNvbnN0IHJhZGlvUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdHJhZGlvUC5jbGFzc0xpc3QuYWRkKCdyYWRpb19wJyk7XHJcblx0cmFkaW9QLmlubmVySFRNTCA9ICfQktGL0LHQtdGA0LjRgtC1INGC0LjQvyDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LA6JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC70LXQudCx0LvQsCDQtNC70Y8g0LrQvdC+0L/QutC4INGA0LDQtNC40L4g4oSWMVxyXG5cdGNvbnN0IHJhZGlvTGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG5cdHJhZGlvTGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0xJyk7XHJcblx0cmFkaW9MYWJlbDEuaW5uZXJIVE1MID0gJ9GA0YPQsdC40LvRjNC90LjQuicgKyAnPGJyPic7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYxXHJcblx0Y29uc3QgYnJlYWtlclJhZGlvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuXHRicmVha2VyUmFkaW8xLnNldEF0dHJpYnV0ZSgnbmFtZScsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCk7XHJcblx0YnJlYWtlclJhZGlvMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0xJyk7XHJcblx0YnJlYWtlclJhZGlvMS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC70LXQudCx0LvQsCDQtNC70Y8g0LrQvdC+0L/QutC4INGA0LDQtNC40L4g4oSWMlxyXG5cdGNvbnN0IHJhZGlvTGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpO1xyXG5cdHJhZGlvTGFiZWwyLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0yJyk7XHJcblx0cmFkaW9MYWJlbDIuaW5uZXJIVE1MID0gJ9Cw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lkg0LLRi9C60LvRjtGH0LDRgtC10LvRjCcgKyAnPGJyPic7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYyXHRcclxuXHRjb25zdCBicmVha2VyUmFkaW8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG5cdGJyZWFrZXJSYWRpbzIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4KTtcclxuXHRicmVha2VyUmFkaW8yLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTInKTtcclxuXHRicmVha2VyUmFkaW8yLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcclxuXHRicmVha2VyUmFkaW8yLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LvQtdC50LHQu9CwINC00LvRjyDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYzXHJcblx0Y29uc3QgcmFkaW9MYWJlbDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcblx0cmFkaW9MYWJlbDMuc2V0QXR0cmlidXRlKCdmb3InLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTMnKTtcclxuXHRyYWRpb0xhYmVsMy5pbm5lckhUTUwgPSAn0LLRi9C60LvRjtGH0LDRgtC10LvRjCDQvdCw0LPRgNGD0LfQutC4JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDRgNCw0LTQuNC+IOKEljNcdFxyXG5cdGNvbnN0IGJyZWFrZXJSYWRpbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcblx0YnJlYWtlclJhZGlvMy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXgpO1xyXG5cdGJyZWFrZXJSYWRpbzMuc2V0QXR0cmlidXRlKCdpZCcsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCArICctMycpO1xyXG5cdGJyZWFrZXJSYWRpbzMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQoCDQtNC70Y8g0LjQvdC/0YPRgtCwINCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsFxyXG5cdGNvbnN0IGlucHV0QnJlYWtlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRpbnB1dEJyZWFrZXJQLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXAnKTtcclxuXHRpbnB1dEJyZWFrZXJQLmlubmVySFRNTCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8LiDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LA6J1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LjQvdC/0YPRgtCwINCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsFxyXG5cdGNvbnN0IGlucHV0QnJlYWtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuXHRpbnB1dEJyZWFrZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dC1icmVha2VyJyArIGluZGV4KTtcclxuXHRpbnB1dEJyZWFrZXIuc2V0QXR0cmlidXRlKCdzaXplJywgJzIwJyk7XHJcblx0aW5wdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0aW5wdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpbnB1dEJyZWFrZXJEZWZhdWx0KTtcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INCgINC00LvRjyDQuNC90L/Rg9GC0LAg0L7RgtGF0L7QtNGP0YnQtdCz0L4g0JDQklxyXG5cdGNvbnN0IG91dEJyZWFrZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0b3V0QnJlYWtlclAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcCcpO1xyXG5cdG91dEJyZWFrZXJQLmlubmVySFRNTCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8LiDQkNCSINC90LAg0L7RgtGF0L7QtNGP0YnQuNGFINC70LjQvdC40Y/RhTonXHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQuNC90L/Rg9GC0LAg0L7RgtGF0L7QtNGP0YnQtdCz0L4g0JDQklxyXG5cdGNvbnN0IG91dEJyZWFrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcblx0b3V0QnJlYWtlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ291dC1icmVha2VyJyArIGluZGV4KTtcclxuXHRvdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgnc2l6ZScsICcyMCcpO1xyXG5cdG91dEJyZWFrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHRvdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvdXRCcmVha2VyRGVmYXVsdCk7IC8vIG91dEJyZWFrZXJyRGVmYXVsdFZhbHVlINC+0LHRj9Cy0LvRj9C10YLRgdGPINC90LjQttC1INCyINGG0LjQutC70LVcclxuXHJcblx0Ly8g0LLRgdGC0LDQstC70Y/QtdC8XHJcblx0YnJlYWtlckRpdi5hcHBlbmQoYnJlYWtlclAsIHJhZGlvUCk7XHJcblx0Ly8g0LLRgdGC0LDQstC70Y/QtdC8INC60L3QvtC/0LrQuCDQuCDQu9C10LnQsdC70YtcclxuXHRicmVha2VyRGl2LmFwcGVuZChicmVha2VyUmFkaW8xLCByYWRpb0xhYmVsMSwgYnJlYWtlclJhZGlvMiwgcmFkaW9MYWJlbDIsIGJyZWFrZXJSYWRpbzMsIHJhZGlvTGFiZWwzKTtcclxuXHQvLyDQstGB0YLQsNCy0LvRj9C10Lwg0LjQvdC/0YPRgtGLXHJcblx0YnJlYWtlckRpdi5hcHBlbmQoaW5wdXRCcmVha2VyUCwgaW5wdXRCcmVha2VyLCBvdXRCcmVha2VyUCwgb3V0QnJlYWtlcik7XHJcblxyXG5cdGJyYWtlcnNXcmFwcGVyLmFwcGVuZChicmVha2VyRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQnJlYWtlcnNDaG9pc2UoYXJyKXtcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuXHRcdGxldCBicmVha2Vyc0FtcGVyc1ZhbHVlcyA9IFsxMCwgMTMsIDE2LCAyMCwgMjUsIDMyLCA0MCwgNTAsIDYzLCA4MCwgMTAwLCAxMjVdO1xyXG5cdCAgXHJcblx0XHRsZXQgcGhhc2UgPSBhcnJbaV0uc3BsaXQoJyAtICcpWzBdO1xyXG5cdFx0bGV0IGFtcGVyZU91dCA9IGFycltpXS5zcGxpdCgnIC0gJylbMV07XHJcblx0XHRsZXQgYW1wZXJlSW4gPSBicmVha2Vyc0FtcGVyc1ZhbHVlc1ticmVha2Vyc0FtcGVyc1ZhbHVlcy5pbmRleE9mKCthbXBlcmVPdXQpICsgMV1cclxuXHQgIFxyXG5cdFx0bGV0IG91dEJyZWFrZXJUeXBlID0gYnJlYWtlckRlZmF1bHRUeXBlKCthbXBlcmVPdXQpO1xyXG5cdFx0bGV0IGlucHV0QnJlYWtlclR5cGUgPSBicmVha2VyRGVmYXVsdFR5cGUoYW1wZXJlSW4pO1xyXG5cdFx0Ly8g0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtGH0LDQvdC40Y4g0LTQu9GPINC40L3Qv9GD0YLQvtCyINCy0LLQvtC00LAg0LLRi9C60LvRjtGH0LDRgtC10LvQtdC5XHJcblx0XHRsZXQgb3V0QnJlYWtlcnJEZWZhdWx0VmFsdWUgPSBgJHtvdXRCcmVha2VyVHlwZX0gJHtwaGFzZX1QIEMke2FtcGVyZU91dH1gO1xyXG5cdFx0bGV0IGlucHV0QnJlYWtlckRlZmF1bHRWYWx1ZSA9IGAke2lucHV0QnJlYWtlclR5cGV9ICR7cGhhc2V9UCBDJHthbXBlcmVJbn1gO1xyXG5cdFx0Y3JlYXRlQnJlYWtlcldyYXBwZXIoYXJyW2ldLCBpLCBvdXRCcmVha2VyckRlZmF1bHRWYWx1ZSwgaW5wdXRCcmVha2VyRGVmYXVsdFZhbHVlKTtcclxuXHQgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQnJlYWtlcnNDaG9pc2U7XHJcbiIsImZ1bmN0aW9uIGFkZFN1bVNlbShhcnJPZlNlbSkge1xyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGUnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVEJPRFknKVswXTtcclxuXHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0Ysg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LVcdFx0XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHRib2R5LmFwcGVuZChyb3cxLCByb3cyKTtcclxuXHQvLyDQodC+0LfQtNCw0LXQvCDRj9GH0LXQudC60Lgg0LIg0LLRi9GI0LXRgdC+0LfQtNCw0L3QvdC+0Lkg0YHRgtGA0L7QutC1XHJcblx0Ly8g0Lgg0LTQvtCx0LDQstC70Y/QtdC8INGC0YVcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfMS5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzIuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV8zLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHJcblx0Y29uc3QgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQyXzEuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMl8yLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDJfMy5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMiwgdGQyXzMpO1xyXG5cclxuXHRsZXQgc3VtT2ZDb3VudCA9IDA7XHJcblx0bGV0IHN1bU9mU2VtID0gMDtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJPZlNlbS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3VtT2ZTZW0gKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTTtcclxuXHRcdHN1bU9mQ291bnQgKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTSAqIGFyck9mU2VtW2ldLmNvdW50ZXJDb3VudEluU0VNO1xyXG5cdH1cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGB0YfQtdGC0YfQuNC60L7QsjonO1xyXG5cdHRkMV8zLmlubmVySFRNTCA9IHN1bU9mQ291bnQ7XHJcblxyXG5cdHRkMl8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGJ0LjRgtC60L7QsjonO1xyXG5cdHRkMl8zLmlubmVySFRNTCA9IHN1bU9mU2VtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTdW1TZW07XHJcbiIsImZ1bmN0aW9uIGJyZWFrZXJEZWZhdWx0VHlwZSh2YWx1ZSkge1xyXG5cdGxldCBicmVha2VyVHlwZTtcclxuXHRpZiAodmFsdWUgPD0gNjMpIHtcclxuXHRcdGJyZWFrZXJUeXBlID0gJ9CS0JAtNDctMjknO1xyXG5cdH0gZWxzZSBpZiAodmFsdWUgPD0gMTAwKSB7XHJcblx0XHRicmVha2VyVHlwZSA9ICfQktCQLTQ3LTEwMCc7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA9IDEyNSkge1xyXG5cdFx0YnJlYWtlclR5cGUgPSAn0JLQkC00Ny0xNTAnO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRicmVha2VyVHlwZSA9ICcnO1xyXG5cdH1cclxuXHRyZXR1cm4gYnJlYWtlclR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJyZWFrZXJEZWZhdWx0VHlwZTtcclxuIiwiZnVuY3Rpb24gY29udGFjdHNUYWJsZShzZW0sIGRhdGFPZlByb2plY3QpIHtcclxuXHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQstC10YDRhdC90LXQuSDRgtCw0LHQu9C40YbRiyDQvtC/0YDQvtGB0L3QvtCz0L5cclxuXHRjb25zdCBkZXNjcmlwdFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdGRlc2NyaXB0VGFibGUuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRfdGFibGUnKTtcclxuXHJcblx0Y29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdGRlc2NyaXB0VGFibGUuYXBwZW5kKHRhYmxlQm9keSk7XHJcblx0Ly8g0YHRgtGA0L7QutC4XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3c1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Ly8g0LzQtdGB0YLQviDQs9C00LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60LhcclxuXHR0YWJsZUJvZHkuYXBwZW5kKHJvdzEsIHJvdzIsIHJvdzMsIHJvdzQsIHJvdzUsIHJvdzYpO1xyXG5cclxuXHQvLyDRj9GH0LXQudC60LhcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHQvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuXHRyb3cxLmFwcGVuZCh0ZDFfMSwgdGQxXzIpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMik7XHJcblx0cm93My5hcHBlbmQodGQzXzEsIHRkM18yKTtcclxuXHRyb3c0LmFwcGVuZCh0ZDRfMSwgdGQ0XzIpO1xyXG5cdHJvdzUuYXBwZW5kKHRkNV8xLCB0ZDVfMik7XHJcblx0cm93Ni5hcHBlbmQodGQ2XzEsIHRkNl8yKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8xLnRleHRDb250ZW50ID0gJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4JztcclxuXHR0ZDJfMS50ZXh0Q29udGVudCA9ICfQn9GA0LXQtNGB0YLQsNCy0LjRgtC10LvRjCDQt9Cw0LrQsNC30YfQuNC60LAnO1xyXG5cdHRkM18xLnRleHRDb250ZW50ID0gJ9Ca0L7QvdGC0LDQutGC0L3Ri9C5INGC0LXQu9C10YTQvtC9JztcclxuXHR0ZDRfMS50ZXh0Q29udGVudCA9ICfQotC40L8g0YnQuNGC0LrQsCc7XHJcblx0dGQ0XzIudGV4dENvbnRlbnQgPSBzZW0uU0VNVHlwZTtcclxuXHR0ZDVfMS50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQviDRidC40YLQutC+0LInO1xyXG5cdHRkNV8yLnRleHRDb250ZW50ID0gYNCh0LwuICR7ZGF0YU9mUHJvamVjdC5jaXBoZXJ9LTEwMy03MC3QkNCj0K0u0KHQnmA7XHJcblx0dGQ2XzEudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC+0LHRitC10LrRgtCwJztcclxuXHJcblx0cmV0dXJuIGRlc2NyaXB0VGFibGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RzVGFibGU7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZU9yZGVyVGFibGUoaW5kZXgpIHtcclxuXHJcblx0Y29uc3Qgb3JkZXJUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHRvcmRlclRhYmxlLmNsYXNzTGlzdC5hZGQoJ29yZGVyX3RhYmxlJyk7XHJcblxyXG5cdGNvbnN0IHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdG9yZGVyVGFibGUuYXBwZW5kQ2hpbGQodEJvZHkpO1xyXG5cdC8vINGB0YLRgNC+0LrQuFxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpICs9IDEpIHtcclxuXHRcdGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0XHQvLyByb3cuY2xhc3NMaXN0LmFkZCgnb3JkZXJfcm93JyArIGluZGV4ICsgJ18nICsgaSk7XHJcblx0XHRyb3cuY2xhc3NMaXN0LmFkZCgnb3JkZXJfcm93JywgJ29yZGVyX3JvdycgKyBpbmRleCArICdfJyArIGkpO1xyXG5cdFx0dEJvZHkuYXBwZW5kKHJvdyk7XHJcblxyXG5cclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDw9IDI7IGogKz0gMSkge1xyXG5cdFx0XHRsZXQgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0XHRcdFx0XHQvLyB0ZC5jbGFzc0xpc3QuYWRkKCd0ZCcgKyBpICsgJ18nICsgaik7XHJcblx0XHRcdHRkLmNsYXNzTGlzdC5hZGQoJ3RkJyArIGluZGV4ICsgJ18nICsgaSArICdfJyArIGopO1xyXG5cdFx0XHR0ZC50ZXh0Q29udGVudCA9ICcnO1xyXG5cdFx0XHRyb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9yZGVyVGFibGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU9yZGVyVGFibGU7XHJcbiIsImZ1bmN0aW9uIGZpbmRUZChsaXN0LCByb3csIGNvbHVtbil7XHJcblx0bGV0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGQnICsgbGlzdCArICdfJyArIHJvdyArICdfJyArIGNvbHVtbik7XHJcblx0cmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNxdWFyZSAoZmxhZzEsIGZsYWcyLCB0ZXh0KXtcclxuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcblxyXG5cdGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5cdHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuXHRjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xyXG5cdHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdGlmIChmbGFnMSA9PT0gMSkge1xyXG5cdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpbmxpbmVfYmxvY2snKTtcclxuXHR9XHJcblx0aWYgKGZsYWcyID09PSAxKSB7XHJcblx0XHRwYXJhLmNsYXNzTGlzdC5hZGQoJ2lubGluZV9ibG9jaycpO1xyXG5cdH1cclxuXHR3cmFwcGVyLmFwcGVuZChzcXVhcmUsIHBhcmEpO1xyXG5cdHJldHVybiB3cmFwcGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQICh0ZXh0KXtcclxuXHRjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xyXG5cdHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cdHJldHVybiBwYXJhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsT3JkZXJUYWJsZShzZW0sIGluZGV4LCBhcnJheU9mUGhhc2VzQW5kQW1wZXJlcykge1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0bGV0IHRkMV8xID0gZmluZFRkKGluZGV4LCAwLCAwKTtcclxuXHR0ZDFfMS50ZXh0Q29udGVudCA9ICfihJYnO1xyXG5cclxuXHRsZXQgdGQxXzIgPSBmaW5kVGQoaW5kZXgsIDAsIDEpO1xyXG5cdHRkMV8yLnRleHRDb250ZW50ID0gJ9CX0LDQv9GA0LDRiNC40LLQsNC10LzRi9C1INC00LDQvdC90YvQtSc7XHJcblxyXG5cdGxldCB0ZDFfMyA9IGZpbmRUZChpbmRleCwgMCwgMik7XHJcblx0dGQxXzMudGV4dENvbnRlbnQgPSAn0J7RgtCy0LXRgiDQt9Cw0LrQsNC30YfQuNC60LAnO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IDEyOyBpICs9IDEpIHtcclxuXHRcdGxldCB0ZDEgPSBmaW5kVGQoaW5kZXgsIGksIDApO1xyXG5cdFx0dGQxLnRleHRDb250ZW50ID0gaTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDQuNGB0L/QvtC70L3QtdC90LjRjyDQutC+0YDQv9GD0YHQsFxyXG5cdGxldCB0ZDJfMiA9IGZpbmRUZChpbmRleCwgMSwgMSk7XHJcblx0dGQyXzIudGV4dENvbnRlbnQgPSAn0KLQuNC/INC40YHQv9C+0LvQvdC10L3QuNGPINC60L7RgNC/0YPRgdCwJztcclxuXHJcblx0bGV0IHRkMl8zID0gZmluZFRkKGluZGV4LCAxLCAyKTtcclxuXHR0ZDJfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDEsIDEsICfQvNC10YLQsNC70LvQuNGH0LXRgdC60LjQuScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMSwgMSwn0L/Qu9Cw0YHRgtC80LDRgdGB0L7QstGL0LknKSk7XHJcblxyXG5cdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzFdID09PSAnMScpIHtcclxuXHRcdHRkMl8zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsxXSA9PT0gJzInKSB7XHJcblx0XHR0ZDJfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDRidC40YLQutCwXHJcblx0bGV0IHRkM18yID0gZmluZFRkKGluZGV4LCAyLCAxKTtcclxuXHR0ZDNfMi50ZXh0Q29udGVudCA9ICfQotC40L8g0YnQuNGC0LrQsCc7XHJcblxyXG5cdGxldCB0ZDNfMyA9IGZpbmRUZChpbmRleCwgMiwgMik7XHJcblx0dGQzXzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgwLCAwLCAn0L7QtNC90L7RhNCw0LfQvdGL0LknKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfRgtGA0LXRhdGE0LDQt9C90YvQuScpLFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0L7QtNC90L7RhNCw0LfQvdGL0Lkg0Lgg0YLRgNC10YXRhNCw0LfQvdGL0LknKSk7XHJcblxyXG5cdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMScpIHtcclxuXHRcdHRkM18zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInKSB7XHJcblx0XHR0ZDNfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJykge1xyXG5cdFx0dGQzXzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fVxyXG5cclxuXHQvLyDQotC40L8g0LLQstC+0LTQsFxyXG5cdGxldCB0ZDRfMiA9IGZpbmRUZChpbmRleCwgMywgMSk7XHJcblx0dGQ0XzIudGV4dENvbnRlbnQgPSAn0KLQuNC/INCy0LLQvtC00LAnO1xyXG5cclxuXHRsZXQgdGQ0XzMgPSBmaW5kVGQoaW5kZXgsIDMsIDIpO1xyXG5cdHRkNF8zLmFwcGVuZChjcmVhdGVTcXVhcmUoMSwgMSwgJ9Cy0L7Qt9C00YPRiNC90YvQuScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMSwgMSwgJ9C60LDQsdC10LvRjNC90YvQuScpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyB8fCBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnNCcpIHtcclxuXHRcdHRkNF8zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzInKSB7XHJcblx0XHR0ZDRfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LBcclxuXHRsZXQgdGQ1XzIgPSBmaW5kVGQoaW5kZXgsIDQsIDEpO1xyXG5cdHRkNV8yLnRleHRDb250ZW50ID0gJ9Ci0LjQvyDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LAnO1xyXG5cclxuXHRsZXQgdGQ1XzMgPSBmaW5kVGQoaW5kZXgsIDQsIDIpO1xyXG5cdHRkNV8zLmFwcGVuZChjcmVhdGVTcXVhcmUoMCwgMCwgJ9GA0YPQsdC40LvRjNC90LjQuicpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9Cw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lkg0LLRi9C60LvRjtGH0LDRgtC10LvRjCcpLFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0LLRi9C60LvRjtGH0LDRgtC10LvRjCDQvdCw0LPRgNGD0LfQutC4JykpO1xyXG5cclxuXHRsZXQgaW5kZXhPZmJyZWFrZXIxID0gYXJyYXlPZlBoYXNlc0FuZEFtcGVyZXMuaW5kZXhPZihzZW0ub3V0QnJlYWtlcjEpO1xyXG5cdGxldCBpbmRleE9mYnJlYWtlcjIgPSBhcnJheU9mUGhhc2VzQW5kQW1wZXJlcy5pbmRleE9mKHNlbS5vdXRCcmVha2VyMik7XHJcblxyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UxXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMX0tMWApO1xyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UxXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMX0tMmApO1xyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UxXzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMX0tM2ApO1xyXG5cclxuXHRsZXQgYnJlYWtlclJhZGlvQ2hvaWNlMl8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJyZWFrZXItcmFkaW8tJHtpbmRleE9mYnJlYWtlcjJ9LTFgKTtcclxuXHRsZXQgYnJlYWtlclJhZGlvQ2hvaWNlMl8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJyZWFrZXItcmFkaW8tJHtpbmRleE9mYnJlYWtlcjJ9LTJgKTtcclxuXHRsZXQgYnJlYWtlclJhZGlvQ2hvaWNlMl8zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJyZWFrZXItcmFkaW8tJHtpbmRleE9mYnJlYWtlcjJ9LTNgKTtcclxuXHJcblx0aWYgKGJyZWFrZXJSYWRpb0Nob2ljZTFfMS5jaGVja2VkKSB7XHJcblx0XHR0ZDVfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKGJyZWFrZXJSYWRpb0Nob2ljZTFfMi5jaGVja2VkKSB7XHJcblx0XHR0ZDVfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKGJyZWFrZXJSYWRpb0Nob2ljZTFfMy5jaGVja2VkKSB7XHJcblx0XHR0ZDVfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblx0aWYgKGJyZWFrZXJSYWRpb0Nob2ljZTJfMSAhPT0gbnVsbCAmJiBicmVha2VyUmFkaW9DaG9pY2UyXzEuY2hlY2tlZCkge1xyXG5cdFx0dGQ1XzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChicmVha2VyUmFkaW9DaG9pY2UyXzIgIT09IG51bGwgJiYgYnJlYWtlclJhZGlvQ2hvaWNlMl8yLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMl8zICE9PSBudWxsICYmIGJyZWFrZXJSYWRpb0Nob2ljZTJfMy5jaGVja2VkKSB7XHJcblx0XHR0ZDVfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCc0LDRgNC60LAsIEnQvdC+0Lwg0JDQklxyXG5cdGxldCB0ZDZfMiA9IGZpbmRUZChpbmRleCwgNSwgMSk7XHJcblx0dGQ2XzIudGV4dENvbnRlbnQgPSAn0JzQsNGA0LrQsCwgSdC90L7QvCDQstCy0L7QtNC90L7Qs9C+INCw0L/Qv9Cw0YDQsNGC0LAnO1xyXG5cclxuXHRsZXQgdGQ2XzMgPSBmaW5kVGQoaW5kZXgsIDUsIDIpO1xyXG5cclxuXHRsZXQgaW5wdXRCcmVha2VyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dC1icmVha2VyJHtpbmRleE9mYnJlYWtlcjF9YCk7XHJcblx0bGV0IGlucHV0QnJlYWtlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW5wdXQtYnJlYWtlciR7aW5kZXhPZmJyZWFrZXIyfWApO1xyXG5cclxuXHRpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxKXtcclxuXHRcdHRkNl8zLnRleHRDb250ZW50ID0gaW5wdXRCcmVha2VyMS52YWx1ZTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0dGQ2XzMuaW5uZXJIVE1MID0gaW5wdXRCcmVha2VyMS52YWx1ZSArICc8YnI+JyArIGlucHV0QnJlYWtlcjIudmFsdWU7XHJcblx0fVxyXG5cclxuXHQvLyDQotC40L8g0L7RgtGF0L7QtNGP0YnQtdC5INC70LjQvdC40LhcclxuXHRsZXQgdGQ3XzIgPSBmaW5kVGQoaW5kZXgsIDYsIDEpO1xyXG5cdHRkN18yLnRleHRDb250ZW50ID0gJ9Ci0LjQvyDQvtGC0YXQvtC00Y/RidC10Lkg0LvQuNC90LjQuCc7XHJcblxyXG5cdGxldCB0ZDdfMyA9IGZpbmRUZChpbmRleCwgNiwgMik7XHJcblx0dGQ3XzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgxLCAwLCAn0LLQvtC30LTRg9GI0L3QsNGPJyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAwLCAnM9GEINCy0L7Qt9C00YPRiNC90LDRjywgMdGEINC60LDQsdC10LvRjNC90LDRjycpLFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAwLCAn0LrQsNCx0LXQu9GM0L3QsNGPJyksXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDAsICcz0YQg0LrQsNCx0LXQu9GM0L3QsNGPLCAx0YQg0LLQvtC30LTRg9GI0L3QsNGPJyksXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDAsICcxINC60LDQsdC10LvRjNC90LDRjywgMSDQstC+0LfQtNGD0YjQvdCw0Y8nKSk7XHJcblxyXG5cdGlmIChzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQsicpIHtcclxuXHRcdHRkN18zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAnMdGE0LonKSB7XHJcblx0XHR0ZDdfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQutC6Jykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICcz0YTQuicpIHtcclxuXHRcdHRkN18zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAn0LrQsicpIHtcclxuXHRcdHRkN18zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRhbGVydChg0YfRgtC+LdGC0L4g0L3QtSDRgtC+INGBINGC0LjQv9C+0Lwg0L7RgtGF0L7QtNGP0YnQtdC5INCyICR7c2VtfS4g0J/RgNC+0LLQtdGA0Y/QudGC0LUgJHtzZW0uaW5wdXRGcm9tU2VtfWApO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQsNGA0LrQsCwgSdC90L7QvC4g0JDQklxyXG5cdGxldCB0ZDhfMiA9IGZpbmRUZChpbmRleCwgNywgMSk7XHJcblx0dGQ4XzIudGV4dENvbnRlbnQgPSAn0JzQsNGA0LrQsCwgSdC90L7QvC4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60L7Qs9C+INCy0YvQutC70Y7Rh9Cw0YLQtdC70Y8g0L3QsCDQvtGC0YXQvtC00Y/RidC40YUg0LvQuNC90LjRj9GFJztcclxuXHJcblx0bGV0IHRkOF8zID0gZmluZFRkKGluZGV4LCA3LCAyKTtcclxuXHJcblx0bGV0IG91dEJyZWFrZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG91dC1icmVha2VyJHtpbmRleE9mYnJlYWtlcjF9YCk7XHJcblx0bGV0IG91dEJyZWFrZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG91dC1icmVha2VyJHtpbmRleE9mYnJlYWtlcjJ9YCk7XHJcblxyXG5cdGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDEpe1xyXG5cdFx0dGQ4XzMudGV4dENvbnRlbnQgPSBvdXRCcmVha2VyMS52YWx1ZTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0dGQ4XzMuaW5uZXJIVE1MID0gb3V0QnJlYWtlcjEudmFsdWUgKyAnPGJyPicgKyBvdXRCcmVha2VyMi52YWx1ZTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyDQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdGH0LXRgtGH0LjQutC+0LJcdFxyXG5cdGxldCB0ZDlfMiA9IGZpbmRUZChpbmRleCwgOCwgMSk7XHJcblx0dGQ5XzIudGV4dENvbnRlbnQgPSAn0JrQvtC70LjRh9C10YHRgtCy0L4g0YHRh9C10YLRh9C40LrQvtCyJztcclxuXHJcblx0bGV0IHRkOV8zID0gZmluZFRkKGluZGV4LCA4LCAyKTtcclxuXHR0ZDlfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDEsIDEsICcxJyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAxLCAnMicpKTtcclxuXHJcblx0aWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0dGQ5XzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdHRkOV8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQsNGA0LrQsCDRgdGH0LXRgtGH0LjQutCwXHJcblx0bGV0IHRkMTBfMiA9IGZpbmRUZChpbmRleCwgOSwgMSk7XHJcblx0dGQxMF8yLnRleHRDb250ZW50ID0gJ9Cc0LDRgNC60LAg0YHRh9C10YLRh9C40LrQsCc7XHJcblxyXG5cdGxldCB0ZDEwXzMgPSBmaW5kVGQoaW5kZXgsIDksIDIpO1xyXG5cclxuXHRsZXQgY291bnRlcjFmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZXItMWYnKTtcclxuXHRsZXQgY291bnRlcjNmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZXItM2YnKTtcclxuXHJcblx0aWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiBzZW0ucGhhc2UxVmFsdWUgPT09IDEpIHtcclxuXHRcdHRkMTBfMy50ZXh0Q29udGVudCA9IGNvdW50ZXIxZi52YWx1ZTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiBzZW0ucGhhc2UxVmFsdWUgPT09IDMpIHtcclxuXHRcdHRkMTBfMy50ZXh0Q29udGVudCA9IGNvdW50ZXIzZi52YWx1ZTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0ucGhhc2UxVmFsdWUgPT09IDEgJiYgc2VtLnBoYXNlMlZhbHVlID09PSAxKSB7XHJcblx0XHQvLyB0ZDEwXzMuaW5uZXJIVE1MID0gY291bnRlcjFmLnZhbHVlICsgJzxicj4nICsgY291bnRlcjFmLnZhbHVlO1xyXG5cdFx0dGQxMF8zLnRleHRDb250ZW50ID0gY291bnRlcjFmLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMyAmJiBzZW0ucGhhc2UyVmFsdWUgPT09IDMpIHtcclxuXHRcdC8vIHRkMTBfMy5pbm5lckhUTUwgPSBjb3VudGVyMmYudmFsdWUgKyAnPGJyPicgKyBjb3VudGVyMmYudmFsdWU7XHJcblx0XHR0ZDEwXzMudGV4dENvbnRlbnQgPSBjb3VudGVyM2YudmFsdWU7XHJcblx0fSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIgJiYgc2VtLnBoYXNlMVZhbHVlID09PSAzICYmIHNlbS5waGFzZTJWYWx1ZSA9PT0gMSkge1xyXG5cdFx0dGQxMF8zLmlubmVySFRNTCA9IGNvdW50ZXIzZi52YWx1ZSArICc8YnI+JyArIGNvdW50ZXIxZi52YWx1ZTtcclxuXHR9IGVsc2UgeyBhbGVydChg0YfRgtC+LdGC0L4g0L3QtSDRgtC+INGBINGE0LDQt9Cw0LzQuCDRgyDRgdGH0LXRgtGH0LjQutCwINCyICR7c2VtLlNFTVR5cGV9YCl9XHJcblxyXG5cdC8vINCh0L/QvtGB0L7QsSDRg9GB0YLQsNC90L7QstC60LhcclxuXHRsZXQgdGQxMV8yID0gZmluZFRkKGluZGV4LCAxMCwgMSk7XHJcblx0dGQxMV8yLnRleHRDb250ZW50ID0gJ9Ch0L/QvtGB0L7QsSDRg9GB0YLQsNC90L7QstC60Lgg0YnQuNGC0LrQsCc7XHJcblxyXG5cdGxldCB0ZDExXzMgPSBmaW5kVGQoaW5kZXgsIDEwLCAyKTtcclxuXHR0ZDExXzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgwLCAwLCAn0L3QsCDQttC10LvQtdC30L7QsdC10YLQvtC90L3QvtC5INC+0L/QvtGA0LUnKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yJykpO1xyXG5cclxuXHRpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnKSB7XHJcblx0XHR0ZDExXzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMicpIHtcclxuXHRcdHRkMTFfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICczJykge1xyXG5cdFx0dGQxMV8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzQnKSB7XHJcblx0XHR0ZDExXzMuY2hpbGROb2Rlc1szXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fVxyXG5cclxuXHQvLyDQkNGA0LzQsNGC0YPRgNCwINC00LvRjyDRg9GB0YLQsNC90L7QstC60LhcclxuXHRsZXQgdGQxMl8yID0gZmluZFRkKGluZGV4LCAxMSwgMSk7XHJcblx0dGQxMl8yLnRleHRDb250ZW50ID0gJ9CQ0YDQvNCw0YLRg9GA0LAg0LTQu9GPINGD0YHRgtCw0L3QvtCy0LrQuCDQuCDQutGA0LXQv9C70LXQvdC40Y8g0YnQuNGC0LrQsCAo0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINGB0L/QvtGB0L7QsdCwINGD0YHRgtCw0L3QvtCy0LrQuCknO1xyXG5cclxuXHRsZXQgdGQxMl8zID0gZmluZFRkKGluZGV4LCAxMSwgMik7XHJcblx0dGQxMl8zLmFwcGVuZChjcmVhdGVQICgnLdGD0YHRgtCw0L3QvtCy0LrQsCDQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L7Qv9C+0YDQtTonKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQuiDQvtC/0L7RgNC1INCh0JItOTUnKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQuiDQvtC/0L7RgNC1INCh0JItMTEwJyksXHJcblx0Y3JlYXRlUCAoJy3Rg9GB0YLQsNC90L7QstC60LAg0L3QsCDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtTonKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C6INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JyksXHJcblx0Y3JlYXRlUCAoJy3Rg9GB0YLQsNC90L7QstC60LAg0L3QsCDQstC90LXRiNC90LXQuSDRgdGC0LXQvdC1INC30LTQsNC90LjRjzonKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C6INCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJyksXHJcblx0Y3JlYXRlUCAoJy3Rg9GB0YLQsNC90L7QstC60LAg0L3QsCDQttC10LvQtdC30L7QsdC10YLQvtC90L3QvtC5INC/0YDQuNGB0YLQsNCy0LrQtSDQn9CiNDMtMjonKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C6INC/0YDQuNGB0YLQsNCy0LrQtSDQn9CiNDMtMiAo0YLQvtC70YzQutC+INCy0L7Qt9C00YPRiNC90YvQuSDQstCy0L7QtCknKSk7XHJcblxyXG5cdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgc2VtLnBpbGxhclR5cGUudG9Mb3dlckNhc2UoKSA9PSAn0YHQsi05NScpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiBzZW0ucGlsbGFyVHlwZS50b0xvd2VyQ2FzZSgpID09ICfRgdCyLTExMCcpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbNF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHR0ZDEyXzMuY2hpbGROb2Rlc1s2XS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnNCcpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzhdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWxsT3JkZXJUYWJsZTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlTGVnZW5kT2ZPcmRlckxpc3QoKSB7XHJcblx0Y29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxFR0VORFwiKTtcclxuXHRsZWdlbmQuY2xhc3NMaXN0LmFkZCgnbGVnZW5kX3RhYmxlJyk7XHJcblxyXG5cdGxlZ2VuZC5pbm5lckhUTUwgPSAn0J7Qn9Cg0J7QodCd0KvQmSDQm9CY0KHQoiA8YnI+INC90LAg0LjQt9Cz0L7RgtC+0LLQu9C10L3QuNC1IDxicj4g0YnQuNGC0LrQsCDRg9GH0LXRgtCwINGN0LvQtdC60YLRgNC+0Y3QvdC10YDQs9C40Lgg0LLRi9C90L7RgdC90L7Qs9C+INGC0LjQv9CwJztcclxuXHJcblx0cmV0dXJuIGxlZ2VuZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGVnZW5kT2ZPcmRlckxpc3Q7XHJcbiIsImltcG9ydCAnLi4vY3NzL29yZGVyLWxpc3QuY3NzJztcclxuXHJcbmltcG9ydCBtYWluT2JqZWN0Q29sbGVjdCBmcm9tICcuL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdCc7XHJcbmltcG9ydCBhZGRCcmVha2Vyc0Nob2lzZSBmcm9tICcuL2Zvci1vcmRlci1saXN0L2FkZC1icmVha2Vycy1jaG9pc2UnO1xyXG5pbXBvcnQgY3JlYXRlSW5mb1RhYmxlIGZyb20gJy4vdGFibGUtZm9yLW9yZGVyX25fd29ya3MvY3JlYXRlLWluZm8tdGFibGUnO1xyXG5pbXBvcnQgY29udGFjdHNUYWJsZSBmcm9tICcuL2Zvci1vcmRlci1saXN0L2NvbnRhY3RzLXRhYmxlJztcclxuaW1wb3J0IGNyZWF0ZUxlZ2VuZE9mT3JkZXJMaXN0IGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvbGVnZW5kLW9mLW9yZGVyLWxpc3QnO1xyXG5pbXBvcnQgY3JlYXRlT3JkZXJUYWJsZSBmcm9tICcuL2Zvci1vcmRlci1saXN0L2NyZWF0ZS1vcmRlci10YWJsZSc7XHJcbmltcG9ydCBmaWxsT3JkZXJUYWJsZSBmcm9tICcuL2Zvci1vcmRlci1saXN0L2ZpbGwtb3JkZXItdGFibGUnO1xyXG5pbXBvcnQgYWRkQ2lwaGVyVGFibGUgZnJvbSAnLi9jaXBoZXIvYWRkLWNpcGhlci10YWJsZSc7XHJcbmltcG9ydCBhZGRBc2lkZVRhYmxlIGZyb20gJy4vY2lwaGVyL2FkZC1hc2lkZS10YWJsZSc7XHJcbmltcG9ydCBhZGRGb3JtYXQgZnJvbSAnLi9jaXBoZXIvYWRkLWZvcm1hdCc7XHJcbmltcG9ydCBhZGRTdW1TZW0gZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9hZGQtc3VtLXNlbSc7XHJcblxyXG5sZXQgdXNlcklucHV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5wdXRcIik7XHJcbnVzZXJJbnB1dCA9IG1haW5PYmplY3RDb2xsZWN0KHVzZXJJbnB1dCk7XHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dCk7XHJcblxyXG4vLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJQYWdlSW5wdXQnKSkge1xyXG4vLyAgIGNvbnN0IHVzZXJQYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfcGFnZScpO1xyXG4vLyAgIHVzZXJQYWdlSW5wdXQudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclBhZ2VJbnB1dCcpO1xyXG4vLyB9XHJcblxyXG5sZXQgcHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdERhdGFcIikpO1xyXG5cclxuY29uc29sZS5sb2cocHJvamVjdERhdGEpO1xyXG5cclxubGV0IGFyckNvdW50ZXJCcmVha2VycyA9IFtdO1xyXG5cclxuZm9yIChsZXQgZWxlbSBvZiB1c2VySW5wdXQpIHtcclxuICBpZiAoYXJyQ291bnRlckJyZWFrZXJzLmluZGV4T2YoZWxlbS5vdXRCcmVha2VyMSkgPT09IC0xKSB7XHJcbiAgICBhcnJDb3VudGVyQnJlYWtlcnMucHVzaChlbGVtLm91dEJyZWFrZXIxKTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtLm91dEJyZWFrZXIyICE9PSBudWxsXHJcbiAgICAmJiBhcnJDb3VudGVyQnJlYWtlcnMuaW5kZXhPZihlbGVtLm91dEJyZWFrZXIyKSA9PT0gLTEpIHtcclxuICAgIGNvbnNvbGUubG9nKGFyckNvdW50ZXJCcmVha2Vycy5pbmRleE9mKGVsZW0ub3V0QnJlYWtlcjIpLCBlbGVtLm91dEJyZWFrZXIyKVxyXG4gICAgYXJyQ291bnRlckJyZWFrZXJzLnB1c2goZWxlbS5vdXRCcmVha2VyMilcclxuICB9XHJcbn1cclxuXHJcbmFyckNvdW50ZXJCcmVha2Vycy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgaWYgKGEgPiBiKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zb2xlLmxvZyhhcnJDb3VudGVyQnJlYWtlcnMpO1xyXG5hZGRCcmVha2Vyc0Nob2lzZShhcnJDb3VudGVyQnJlYWtlcnMpO1xyXG5cclxubGV0IGdldE9yZGVyTGlzdHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LW9yZGVyLWxpc3RzJyk7XHJcblxyXG5nZXRPcmRlckxpc3RzQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gY29uc3QgdXNlclBhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9wYWdlJykudmFsdWU7XHJcbiAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyUGFnZUlucHV0XCIsIHVzZXJQYWdlSW5wdXQpO1xyXG5cclxuICBjb25zdCBjb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lcicpO1xyXG4gIGNvdW50ZXJzQW5kQnJlYWtlcnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGVfY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXInKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuXHJcbiAgICAvLyBhZGQgbWFpbiB0YWJsZVxyXG4gICAgY29uc3QgaW5mb1RhYmxlV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvX3RhYmxlX3dyYXBwZXInKTtcclxuICAgIGluZm9UYWJsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2hvd19pbmZvX3RhYmxlX3dyYXBwZXInKTtcclxuICAgIGNvbnN0IGluZm9UYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX3RhYmxlX2JvZHknKTtcclxuICAgIGNvbnN0IHJvd0ZvckluZm9UYWJsZSA9IGNyZWF0ZUluZm9UYWJsZSh1c2VySW5wdXRbaV0sIHRydWUpO1xyXG4gICAgaW5mb1RhYmxlLmFwcGVuZChyb3dGb3JJbmZvVGFibGUpO1xyXG5cclxuICAgIC8vIGFkZCB3cmFwcGVyXHJcbiAgICBjb25zdCBvcmRlcldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXJfc2hlZXQnKTtcclxuXHJcbiAgICBjb25zdCBoNl9icmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJINlwiKTtcclxuICAgIGg2X2JyZWFrLmNsYXNzTGlzdC5hZGQoJ2g2X2JyZWFrJyk7XHJcblxyXG4gICAgY29uc3QgYTRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgYTRkaXYuY2xhc3NMaXN0LmFkZCgnYTRfZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgYTRkaXZfZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgYTRkaXZfZnJhbWUuY2xhc3NMaXN0LmFkZCgnYTRfZGl2X2ZyYW1lJyk7XHJcblxyXG4gICAgb3JkZXJXcmFwcGVyLmFwcGVuZChoNl9icmVhaywgYTRkaXYpO1xyXG4gICAgYTRkaXYuYXBwZW5kKGE0ZGl2X2ZyYW1lKTtcclxuXHJcbiAgICAvLyBhZGQgTGVnZW5kIGluIHdyYXBwZXJcclxuICAgIGE0ZGl2X2ZyYW1lLmFwcGVuZChjcmVhdGVMZWdlbmRPZk9yZGVyTGlzdCgpKTtcclxuXHJcbiAgICAvLyBhZGQgZGVzY3JpcHRpb24gdGFibGUgaW4gd3JhcHBlclxyXG4gICAgYTRkaXZfZnJhbWUuYXBwZW5kKGNvbnRhY3RzVGFibGUodXNlcklucHV0W2ldLCBwcm9qZWN0RGF0YSkpO1xyXG5cclxuICAgIC8vIGFkZCBvcmRlciB0YWJsZSBpbiB3cmFwcGVyXHJcbiAgICBhNGRpdl9mcmFtZS5hcHBlbmQoY3JlYXRlT3JkZXJUYWJsZShpKSk7XHJcbiAgICAvLyBhZGQgbm90ZSBpbiB3cmFwcGVyXHJcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0ICBub3RlLmNsYXNzTGlzdC5hZGQoJ25vdGUnKTtcclxuXHQgIGE0ZGl2X2ZyYW1lLmFwcGVuZChub3RlKTtcclxuICAgIG5vdGUudGV4dENvbnRlbnQgPSAn0JTQvtC/0L7Qu9C90LXQvdC40LU6INCp0LjRgtC+0Log0LLRi9C90L7RgdC90L7Qs9C+INGD0YfQtdGC0LAg0LTQvtC70LbQtdC9INGB0L7QvtGC0LLQtdGC0YHRgtCy0L7QstCw0YLRjCDRgtGA0LXQsdC+0LLQsNC90LjRj9C8INCh0KLQnyAzMzI0My4yMC4yNjItMTcuJztcclxuICAgIFxyXG4gICAgLy8gYWRkIGNpcGhlciBpbiB3cmFwcGVyXHJcbiAgICBhNGRpdl9mcmFtZS5hcHBlbmQoYWRkQ2lwaGVyVGFibGUocHJvamVjdERhdGEsJzI5MCcsICdvcmRlcicsIHVzZXJJbnB1dFtpXSwgaSwgdXNlcklucHV0KSk7XHJcbiAgICAvLyBhZGQgYXNpZGUgZnJhbWUgaW4gd3JhcHBlclxyXG4gICAgYTRkaXZfZnJhbWUuYXBwZW5kKGFkZEFzaWRlVGFibGUoKSk7XHJcblxyXG4gICAgYTRkaXYuYXBwZW5kKGFkZEZvcm1hdCgnQTQnKSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBmaWxsT3JkZXJUYWJsZSh1c2VySW5wdXRbaV0sIGksIGFyckNvdW50ZXJCcmVha2Vycyk7XHJcbiAgfVxyXG5cclxuICAvLyBhZGQgY291bnRlcnMgc3VtXHJcbiAgYWRkU3VtU2VtKHVzZXJJbnB1dCk7XHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBzaGVtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdz0YFoZW1lX29yZGVyX3NoZWV0X193cmFwcGVyJyk7XHJcblxyXG4vLyBzaGVtZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuLy8gICAgIGNvbnN0IHVzZXJQYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfcGFnZScpLnZhbHVlO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyUGFnZUlucHV0XCIsIHVzZXJQYWdlSW5wdXQpO1xyXG4gICAgXHJcbi8vICAgICBsb2NhdGlvbi5ocmVmID0gJ3PRgWhlbWVfb3JkZXJfc2hlZXQuaHRtbCc7XHJcbi8vIH1cclxuIiwibGV0IGNyZWF0ZUluZm9UYWJsZSA9IGZ1bmN0aW9uIChzZW0sIG5lZWRCcmVha2Vyc0luZm8pIHtcclxuXHQvL9Ch0L7Qt9C00LDQtdC8INGB0YLRgNC+0LrRgyDRgtCw0LHQu9C40YbRi1x0XHJcblx0bGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHJcblx0Ly8g0KHQvtC30LTQsNC10Lwg0Y/Rh9C10LnQutC4INCyINCy0YvRiNC10YHQvtC30LTQsNC90L3QvtC5INGB0YLRgNC+0LrQtVxyXG5cdGxldCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0bGV0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRsZXQgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0dGQxLnRleHRDb250ZW50ID0gc2VtLlNFTVR5cGU7XHJcblx0aWYgKG5lZWRCcmVha2Vyc0luZm8pe1xyXG5cdFx0aWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0ZDIudGV4dENvbnRlbnQgPSBg0KPRgdGC0LDQvdC+0LLQutCwICR7c2VtLmluc3RhbGxhdGlvbn0uICR7c2VtLmRlc2NyaXB0aW9ufSAoJHtzZW0uYnJlYWtlcjFWYWx1ZX0g0JApYDtcclxuXHRcdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdHRkMi50ZXh0Q29udGVudCA9IGDQo9GB0YLQsNC90L7QstC60LAgJHtzZW0uaW5zdGFsbGF0aW9ufS4gJHtzZW0uZGVzY3JpcHRpb259ICgke3NlbS5icmVha2VyMVZhbHVlfSDQkDsgJHtzZW0uYnJlYWtlcjJWYWx1ZX0g0JApYDtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0dGQyLnRleHRDb250ZW50ID0gYNCj0YHRgtCw0L3QvtCy0LrQsCAke3NlbS5pbnN0YWxsYXRpb259LiAke3NlbS5kZXNjcmlwdGlvbn1gO1xyXG5cdH1cclxuXHJcblx0dGQzLnRleHRDb250ZW50ID0gc2VtLmNvdW50T2ZTRU07XHJcblxyXG5cdHJvdy5hcHBlbmQodGQxLCB0ZDIsIHRkMyk7XHJcblx0cmV0dXJuIHJvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5mb1RhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9