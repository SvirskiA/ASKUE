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
exports.push([module.i, "@font-face {\r\n  font-family: 'GOST 2.304-81 type A'; \r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n@media print {\r\n  /* *,\r\n  *:before,\r\n  *:after,\r\n  *:first-letter,\r\n  p:first-line,\r\n  /* div:first-line, \r\n  blockquote:first-line,\r\n  li:first-line {\r\n      background: transparent !important;\r\n      color: #000 !important;\r\n      box-shadow: none !important;\r\n      text-shadow: none !important;\r\n  } */\r\n  /* здесь будут стили для печати */\r\n    header, .main-table, footer {\r\n    display: none !important;\r\n\r\n  }\r\n  .a4_div {\r\n    page-break-after: always !important;\r\n    break-after: always !important;\r\n    page-break-inside: avoid;\r\n    float: none !important; \r\n    border: none !important;\r\n  } \r\n\r\n  .сipher_table td{\r\n    font-size: 12pt;\r\n  }\r\n\r\n  .сipher_table tr:nth-child(1) td:nth-child(7){\r\n    font-size: 24pt;\r\n  }\r\n\r\n  .square_checked {\r\n    -webkit-print-color-adjust: exact;\r\n    color-adjust: exact;\r\n  }\r\n\r\n  @page {\r\n    size: auto;  \r\n    margin: 0;  \r\n  }\r\n/* h6 {\r\n  -webkit-display: none;\r\n}\t */\r\n}\r\n/* @media print and (-webkit-min-device-pixel-ratio:0)\r\nand (min-resolution:.001dpcm) {\r\nh6 {\r\n  -webkit-display: none;\r\n} \r\n} */\r\nh6 {\r\nheight: 1px;\r\n}\r\n\r\n* {\tmargin: 0;\r\npadding: 0;\r\nbox-sizing: border-box;\r\n\r\nfont-family: 'GOST 2.304-81 type A', sans-serif;\r\ncolor: black; \r\n}\r\n\r\n.container {\r\nwidth: 210mm;\r\nmargin: auto;\r\n/* background: url('/img/0001.jpg'); */\r\n}\r\nheader,\r\nfooter {\r\npadding: 15px 0;\r\nbackground: #48D1CC;\r\ncolor:  white;\r\n}\r\n/* КНОПКИ */\r\n.btn {\r\nwidth: 100%;\r\nheight: 30px;\r\nbackground: #008B8B;\r\ncolor: white;\r\nborder: none;\r\nborder-radius: 5px;\r\nmargin: 5px 0;\r\nfont-size: 21px;;\r\n}\r\n.btn:last-child{\r\nmargin: 20px 0;\r\n}\r\n.btn:hover, .input-btn:hover {\r\nbackground:\t#008C33;\r\nborder: #0b6603 solid 2px;\r\n}\r\n/*Div с верхней таблицой */\r\n.main-table {\r\nbackground: #AFEEEE;\r\nfont-size: 21px;\r\n}\r\n/*Легенды*/\r\nlegend{\r\npadding-top: 5px;\r\n}\r\n/*ТАБЛИЦЫ, общие свойства*/\r\ntable {\r\nborder-collapse: collapse;\r\n}\r\ntd, th {\r\nborder: 0.25mm solid #000;\r\n}\r\ntbody tr:nth-child(2n-1) {\r\nbackground: #e3f8ea;\r\n}\r\ntr:nth-child(2n), thead {\r\nbackground: #fff;\r\n}\r\n/*ТАБЛИЦА ИНФОРМАЦИИ*/\r\n.info_table {\r\nwidth: 100%;\r\n}\r\n.info_table td, .info_table th {\r\nborder: 2px solid #008B8B;\r\n}\r\n.info_table td:nth-child(1),  .info_table td:nth-child(2){\r\npadding-left: 5px;\r\n}\r\n.info_table td:last-child{\r\ntext-align: center;\r\n}\r\n.info_table th:first-child {\r\nwidth: 40mm;\r\n}\r\n.info_table th:last-child {\r\nwidth: 15mm;\r\n}\r\n.info_table .last_td {\r\nfont-weight: 800;\r\nbackground: #AFEEEE;\r\nborder: none;\r\ntext-align: right;\r\npadding-right: 5px;\r\n}\r\n/*КОНТЕЙНЕРЫ ДЛЯ ОПРОСНЫХ*/\r\n.order_container {\r\nbackground: #48D1CC;\r\n}\r\n.a4_div:nth-child(4n-2){\r\nbackground: #d0ecec;\r\n}\r\n.a4_div:nth-child(4n){\r\nbackground: #c1e6c1;\r\n}\r\n.a4_div {\r\nheight: 296.5mm;\r\ndisplay: block;\r\nborder: 1px solid black;\r\nposition: relative;\r\n}\r\n.a4_div_frame {\r\nfont-size: 11.5pt;\r\nheight: 287mm;\r\nwidth: 185mm;\r\nleft: 20mm;\r\nbottom: 5mm;\r\nborder: 0.6mm solid black;\r\nposition: absolute;\t\r\ndisplay: block; /*del*/\r\n}\r\n/*ОПИСАТЕЛЬНАЯ ТАБЛИЦА ОПРОСНОГО*/\r\n.legend_table {\r\nwidth: 50%;\r\ntext-align: center;\r\nmargin-left: 180px;\r\n}\r\n.descript_table {\r\nmargin-left: 80px;\r\nwidth: 140mm;\r\n}\r\n.descript_table td {\r\npadding: 1px 0 1px 5px;\r\n}\r\n/*ТАБЛИЦА-ОПРОСНЫЙ*/\r\n.order_table {\r\nwidth: 100%;\r\nmargin-top: 10px;\r\n}\r\n.order_table td:nth-child(1) {\r\nwidth: 15mm;\r\ntext-align: center;\r\nborder-left: none;\r\n}\r\n/* .order_table td:last-child{\r\n\r\n} */\r\n.order_table td:nth-child(2) {\r\nwidth: 70mm;\r\ntext-align: left;\r\npadding-left: 5px;\r\n}\r\n.order_table td:nth-child(3) {\r\ntext-align: left;\r\npadding-left: 5px;\r\nborder-right: none;\r\n}\r\n.order_table tr:nth-child(1) td {\r\ntext-align: center;\r\nheight: 30px;\r\npadding: 0;\r\n}\r\n.square {\r\nwidth: 12px;\r\nheight: 12px;\r\nborder: 1px solid #000;\r\nfloat: left;\r\nmargin-top: 2px;\r\nmargin-right: 5px;\r\nmargin-bottom: 1px;\r\n}\r\n.square:last-child {\r\nmargin-bottom: 2px;\r\n}\r\n.square_checked {\r\nbackground: #000;\r\n}\r\n\r\n/*свойства для опросника, где нужно в одну строку квадратики вписать*/\r\n.inline_block {\r\ndisplay: inline-block;\r\nwidth: 50%;\r\n}\r\n/*Примечание после опросного*/\r\n.note{\r\npadding: 5px;\r\n}\r\n/*РАМКА-ШИФР*/\r\n.сipher_table {\r\n  width: 100%;\r\nposition: absolute;\r\nbottom: 0;\r\ntext-align: center;\r\n}\r\n.сipher_table td{\r\n  line-height: 0.95;\r\n  font-size: 12pt;;\r\nbackground: #fff;\r\nborder-right: #000 solid 0.6mm;\r\nborder-left: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td:nth-child(4),\r\n.сipher_table tr:nth-child(5) td:nth-child(2){\r\nletter-spacing: -0.5px;\r\n/* font-size: 14px;\t */\r\n}\r\n.сipher_table td:nth-child(n+7){\r\nborder: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:first-child td,\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+5){\r\nborder-top: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(6) td:nth-child(6){\r\nborder-bottom: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table td:first-child {\r\nborder-left: none;\r\n}\r\n.сipher_table td:last-child {\r\nborder-right: none;\r\n}\r\n.сipher_table tr:last-child td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+4){\r\nborder-bottom: none;\t\r\n}\r\n.сipher_table tr:nth-child(n+6) td:nth-child(1), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(2), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(3) {\r\ntext-align: left;\r\npadding-left: 2px;\r\n}\r\n.сipher_table tr:first-child td:nth-child(1), \r\n.сipher_table tr:first-child td:nth-child(2), \r\n.сipher_table tr:first-child td:nth-child(3), \r\n.сipher_table tr:first-child td:nth-child(4),\r\n.сipher_table tr:first-child td:nth-child(6) {\r\nwidth: 10mm;\r\n}\r\n.сipher_table tr:first-child td:nth-child(5) {\r\nwidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(5) {\r\nwidth: 70mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(6),\r\n.сipher_table tr:nth-child(6) td:nth-child(7) {\r\nwidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(1) td:nth-child(7){\r\nfont-size: 24pt;\r\n}\r\n.сipher_table tr td:first-child{\r\nheight: 5mm;\r\n}\r\n.p_besp{\r\ndisplay: inline-block;\r\n/*margin-bottom: 10px;*/\r\n}\r\n.logo_besp{\r\ndisplay: inline-block;\r\nmargin: 0px 0 -12px 7px;\t\r\n}\r\n/*ПРЯЧЕМ ФОРМУ ВНЕСЕНИЯ СЧЕТЧИКОВ И АВТОМАТОВ ПОСЛЕ ЕЕ ЗАПОЛНЕНИЯ*/\r\n.hide_counters_n_breakers_container {\r\n  display: none;\r\n}\r\n\r\n/*ПОКАЗЫВАЕМ*/\r\n.hide_info_table_wrapper {\r\n  display: none;\r\n}\r\n.show_info_table_wrapper {\r\ndisplay: block;\r\n}\r\n.footer_show {\r\ndisplay: block;\t\r\n}\r\nfooter {\r\ndisplay: none;\r\n}\r\n\r\n/*ФОРМА ВВОДА СЧЕТЧИКОВ И ВЫКЛЮЧАТЕЛЕЙ*/\r\n.counters_n_breakers_container {\r\nbackground: #AFEEEE;\r\nfont-size: 21px;\r\nmin-height: 823px;\r\n}\r\n.counters_n_breakers_container input {\r\nfont-size: 21px;\t\r\n}\r\n/*нумерация листов*/\r\n.input_page{\r\n/* background: #48D1CC; */\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\t\r\npadding-left: 40px;\r\n}\r\n.input_page p {\r\n  display: inline-block;\r\n}\r\n/*СЧЕТЧИКИ*/\r\n.counters_wrapper{\r\nbackground: #AFEEEE;\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\t\r\npadding-left: 40px;\r\n\r\n}\r\n.input_page p,\r\n.counters_wrapper p{\r\npadding-top: 15px;\r\n}\r\n.counters_wrapper .counter_note {\r\npadding: 0;\r\nfont-size: 16px;\r\ncolor: #0b6603;\r\n}\r\n.counters_wrapper .counter_note:last-child {\r\npadding-bottom: 5px;\r\n}\r\n.counters_n_breakers_container #counter-1f,\r\n.counters_n_breakers_container #counter-3f {\r\nwidth: 91%;\r\n}\r\n.input_page #input_page\r\n/*, .counters_n_breakers_container #counter-3f*/\r\n{\r\nmargin-bottom: 13px;\r\n}\r\n\r\n/*ВЫКЛЮЧАТЕЛИ*/\r\n.breaker_div_radio,\r\n.breaker_div {\r\nborder: #008B8B solid 2px;\r\nborder-radius: 5px;\r\npadding-left: 40px;\t\t\r\n}\r\n.breaker_div_radio{\r\npadding-bottom: 10px;\r\n}\r\n.breaker_div_radio:nth-child(2n-1){\r\n  background: #5fe67c;\r\n}\r\n.breaker_div_radio:nth-child(2n){\r\nbackground: #4ff9aa;\r\n}\r\n.breaker_div:nth-child(2n-1){\r\nbackground: #48D1CC;\r\n}\r\n.breaker_div:nth-child(2n){\r\nbackground: #AFEEEE;\r\n}\r\n.breaker_div_radio .breaker_p,\r\n.breaker_div .breaker_p{\r\ntext-align: center;\r\npadding: 15px 0 2px 0;\t\r\nmargin-left: -40px;\r\n}\r\n\r\n.breaker_div .input-p{\r\npadding: 8px 0 2px 0;\t\r\n}\r\n.breaker_div_radio label{\r\npadding: 3px 0 0 10px;\r\n}\r\n\r\n.breaker_div input:last-child{\r\nmargin-bottom: 12px;\r\n}\r\n\r\n\r\n/*формат (А4)*/\r\n.format_div{\r\nbottom: 1px;\r\n  right: 92px;\r\n  position: absolute;\r\n}\r\n\r\n/*БОКОВАЯ ЧАСТЬ РАМКИ*/\r\n.aside_frame {\r\n/*transform: rotate(-90.0deg); */\r\nposition: absolute;\r\nbottom: -0.5mm;\r\nleft: -13mm;\r\n}\r\n.aside_frame span{\r\n  transform: rotate(-90.0deg);\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -webkit-writing-mode: vertical-rl;\r\n  writing-mode: vertical-rl;\r\n}\r\n.aside_frame td{\r\ntext-align: center;\r\nborder: 0.6mm solid black;\r\nfont-size: 12pt;\r\ntransform: rotate(-90.0deg);\r\n\r\n}\r\n.aside_frame tr:nth-child(2n+1) td{\r\nheight: 25.3mm;\r\n}\r\n.aside_frame tr:nth-child(2) td{\r\nheight: 35.6mm;\r\n}\r\n.aside_frame td:first-child{\r\nwidth: 5mm;\r\n}\r\n.aside_frame td:last-child{\r\nwidth: 7mm;\r\nborder-right: none;\r\n} \r\n\r\n/*ввод № страницы*/\r\n#input_page{\r\ntext-align: center;\r\n}\r\n.signature{\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: -7px;\r\n  position: absolute;\r\n}\r\n.signature_boss {\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: 15px;\r\n  position: absolute;\r\n}\r\n.signature_boss2 {\r\n  max-width: 65px;\r\n  max-height: 33px;\r\n  bottom: 33px;\r\n  position: absolute;\r\n}", ""]);
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
      this.inputFromSem = 'в';
    } else if (this.counterCountInSEM === 1) {
      this.inputFromSem = arr[legendArray.indexOf('ТИП_ВВОДА')].toLowerCase();
    } else if (this.counterCountInSEM === 2 && arr[legendArray.indexOf('ТИП_ВВОДА')].length === 0) {
      this.inputFromSem = 'вв';
    } else {
      this.inputFromSem = arr[legendArray.indexOf('ТИП_ВВОДА')].toLowerCase();
    }

    this.pillarType = arr[legendArray.indexOf('ТИП_ОПОРЫ')].toLowerCase() || 'св-95';

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

    if (this.counterCountInSEM === 1 && this.inputFromSem === 'в') {
      this.description = 'Отходящая линия: воздушная.';
    } else if (this.counterCountInSEM === 1 && this.inputFromSem === 'к') {
      this.description = 'Отходящая линия: кабельная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem === 'к' || this.inputFromSem === 'кв' || this.inputFromSem === 'вк') {
      this.description = 'Отходящие линии: кабельная и воздушная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem === 'кк') {
      this.description = 'Отходящие линии: кабельные.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem === '1фк') {
      this.description = 'Отходящие линии: 3ф - воздушная, 1ф - кабельная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem === '3фк') {
      this.description = 'Отходящие линии: 3ф - кабельная, 1ф - воздушная.';
    } else if (this.counterCountInSEM === 2 && this.inputFromSem === 'вв') {
      this.description = 'Отходящие линии: воздушные.';
    } else {
      alert("".concat(this.inputFromSem, " \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ").concat(this.SEMType, ", \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"));
    }

    if (this.SEMType.split('-')[4] === '1' && this.pillarType === 'св-95') {
      this.installation = 'на опоре СВ-95';
    } else if (this.SEMType.split('-')[4] === '1' && this.pillarType === 'св-110') {
      this.installation = 'на опоре СВ-110';
    } else if (this.SEMType.split('-')[4] === '1' && this.pillarType === 'ст-108.6') {
      this.installation = 'на опоре СТ-108.6';
    } else if (this.SEMType.split('-')[4] === '1' && this.pillarType === 'ст-108.7') {
      this.installation = 'на опоре СТ-108.7';
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

  if (sem.SEMType.split('-')[4] === '2') {
    td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem === 'в' || sem.inputFromSem === 'вв') {
    td7_3.childNodes[0].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem === '1фк') {
    td7_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк') {
    td7_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem === '3фк') {
    td7_3.childNodes[3].childNodes[0].classList.add('square_checked');
  } else if (sem.inputFromSem === 'вк' || sem.inputFromSem === 'кв') {
    td7_3.childNodes[4].childNodes[0].classList.add('square_checked');
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
  td12_3.append(createP('-установка на железобетонной опоре:'), createSquare(1, 1, 'к опоре СВ-95'), createSquare(1, 1, 'к опоре СТ-108.6'), createSquare(1, 1, 'к опоре СВ-110'), createSquare(1, 1, 'к опоре СТ-108.7'), createP('-установка на выносной стойке:'), createSquare(0, 0, 'к выносной стойке'), createP('-установка на внешней стене здания:'), createSquare(0, 0, 'к внешней стене здания'), createP('-установка на железобетонной приставке ПТ43-2:'), createSquare(0, 0, 'к приставке ПТ43-2 (только воздушный ввод)'));

  if (sem.SEMType.split('-')[4] === '1' && sem.pillarType == 'св-95') {
    td12_3.childNodes[1].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '1' && sem.pillarType == 'ст-108.6') {
    td12_3.childNodes[2].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '1' && sem.pillarType == 'св-110') {
    td12_3.childNodes[3].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '1' && sem.pillarType == 'ст-108.7') {
    td12_3.childNodes[4].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '2') {
    td12_3.childNodes[6].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '3') {
    td12_3.childNodes[8].childNodes[0].classList.add('square_checked');
  } else if (sem.SEMType.split('-')[4] === '4') {
    td12_3.childNodes[10].childNodes[0].classList.add('square_checked');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvb3JkZXItbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9mb250cy9HT1NUIDIuMzA0LTgxIHR5cGUgQS50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvb3JkZXItbGlzdC5jc3M/MWM2YiIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1hc2lkZS10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1jaXBoZXItdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLXBhZ2UtbnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2FkZC1icmVha2Vycy1jaG9pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2FkZC1zdW0tc2VtLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itb3JkZXItbGlzdC9icmVha2VyLWRlZmF1bHQtdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvY29udGFjdHMtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2NyZWF0ZS1vcmRlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvZmlsbC1vcmRlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvbGVnZW5kLW9mLW9yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL3RhYmxlLWZvci1vcmRlcl9uX3dvcmtzL2NyZWF0ZS1pbmZvLXRhYmxlLmpzIl0sIm5hbWVzIjpbImFkZEFzaWRlVGFibGUiLCJhc2lkZV9mcmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJvdzEiLCJyb3cyIiwicm93MyIsImFwcGVuZCIsInRkMV8xIiwic3Bhbl90ZDFfMSIsInRkMV8yIiwidGQyXzEiLCJzcGFuX3RkMl8xIiwidGQyXzIiLCJ0ZDNfMSIsInNwYW5fdGQzXzEiLCJ0ZDNfMiIsImlubmVySFRNTCIsImFkZENpcGhlclRhYmxlIiwicHJvamVjdCIsInN1YnNlY3Rpb24iLCJ0eXBlT2ZQYWdlIiwic2VtIiwiaW5kZXgiLCJtYWluT2JqIiwic2hlbWVQYWdlcyIsImNvbnNvbGUiLCJsb2ciLCLRgWlwaGVyVGFibGUiLCJ0Ym9keSIsInJvd18xIiwicm93XzIiLCJyb3dfMyIsInJvd180Iiwicm93XzUiLCJyb3dfNiIsInJvd183Iiwicm93XzgiLCJyb3dfOSIsInJvd18xMCIsInJvd18xMSIsInRkMV8zIiwidGQxXzQiLCJ0ZDFfNSIsInRkMV82IiwidGQxXzciLCJzZXRBdHRyaWJ1dGUiLCJ0ZDJfMyIsInRkMl80IiwidGQyXzUiLCJ0ZDJfNiIsInRkM18zIiwidGQzXzQiLCJ0ZDNfNSIsInRkM182IiwidGQzXzciLCJ0ZDRfMSIsInRkNF8yIiwidGQ0XzMiLCJ0ZDRfNCIsInRkNF81IiwidGQ0XzYiLCJ0ZDVfMSIsInRkNV8yIiwidGQ1XzMiLCJ0ZDVfNCIsInRkNV81IiwidGQ1XzYiLCJ0ZDZfMSIsInRkNl8yIiwidGQ2XzMiLCJ0ZDZfNCIsInRkNl81IiwidGQ2XzYiLCJ0ZDZfNyIsInRkNl84IiwidGQ3XzEiLCJ0ZDdfMiIsInRkN18zIiwidGQ3XzQiLCJ0ZDdfNSIsInRkN182IiwidGQ3XzciLCJ0ZDhfMSIsInRkOF8yIiwidGQ4XzMiLCJ0ZDhfNCIsInRkOV8xIiwidGQ5XzIiLCJ0ZDlfMyIsInRkOV80IiwidGQ5XzUiLCJ0ZDlfNiIsInRkMTBfMSIsInRkMTBfMiIsInRkMTBfMyIsInRkMTBfNCIsInRkMTFfMSIsInRkMTFfMiIsInRkMTFfMyIsInRkMTFfNCIsImNpcGhlciIsIm5hbWVPZlByb2plY3QiLCJuYW1lT2ZCb3NzIiwic3BsaXQiLCJkIiwiRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsInRvZGF5Iiwic3RhZ2VPZlByb2plY3QiLCJ0ZXh0Q29udGVudCIsImFkZE9yZGVyUGFnZU51bWJlciIsImFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyIiwiYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlciIsImFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciIsImlzQm9zc1NpZ25hdHVyZSIsImJvc3NTaWduYXR1cmUiLCJib3NzU2lnbmF0dXJlMiIsImZ1bGxEZWNyaXB0aW9uIiwiU0VNVHlwZSIsImRlY3JpcHRpb25Gb3JXb3JrcyIsInBfYmVzcCIsImxvZ29fYmVzcCIsIm5hbWVPZkRldmVsb3BlciIsImlzRGV2ZWxvcGVyU2lnbmF0dXJlIiwiZGV2ZWxvcGVyU2lnbmF0dXJlIiwiYWRkRm9ybWF0IiwiZm9ybWF0IiwiZm9ybWF0X2RpdiIsImZvcm1hdFBhcmEiLCJhcnJPZlNlbXMiLCJpbnB1dF9wYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZXZpb3VzUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzaGVtZVBhZ2VzU3VtIiwibGVuZ3RoIiwibWFpbk9iamVjdENvbGxlY3QiLCJzdHIiLCJhcnJheU9mVXNlcklucHV0IiwicmVzdWx0QXJyYXkiLCJsZWdlbmRBcnJheSIsIlNFTSIsImFyciIsImNvdW50T2ZTRU0iLCJpbmRleE9mIiwiYnJlYWtlcjFWYWx1ZSIsImJyZWFrZXIyVmFsdWUiLCJjb3VudGVyQ291bnRJblNFTSIsImlucHV0RnJvbVNlbSIsInRvTG93ZXJDYXNlIiwicGlsbGFyVHlwZSIsInBoYXNlMVZhbHVlIiwicGhhc2UyVmFsdWUiLCJvdXRCcmVha2VyMSIsIm91dEJyZWFrZXIyIiwiZGVzY3JpcHRpb24iLCJhbGVydCIsImluc3RhbGxhdGlvbiIsImkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwiY3JlYXRlQnJlYWtlcldyYXBwZXIiLCJwYWlyT2ZQaGFzZUFuZEFtcGVyZSIsIm91dEJyZWFrZXJEZWZhdWx0IiwiaW5wdXRCcmVha2VyRGVmYXVsdCIsImJyYWtlcnNXcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJicmVha2VyRGl2IiwiYnJlYWtlclAiLCJyYWRpb1AiLCJyYWRpb0xhYmVsMSIsImJyZWFrZXJSYWRpbzEiLCJyYWRpb0xhYmVsMiIsImJyZWFrZXJSYWRpbzIiLCJyYWRpb0xhYmVsMyIsImJyZWFrZXJSYWRpbzMiLCJpbnB1dEJyZWFrZXJQIiwiaW5wdXRCcmVha2VyIiwib3V0QnJlYWtlclAiLCJvdXRCcmVha2VyIiwiYWRkQnJlYWtlcnNDaG9pc2UiLCJicmVha2Vyc0FtcGVyc1ZhbHVlcyIsInBoYXNlIiwiYW1wZXJlT3V0IiwiYW1wZXJlSW4iLCJvdXRCcmVha2VyVHlwZSIsImJyZWFrZXJEZWZhdWx0VHlwZSIsImlucHV0QnJlYWtlclR5cGUiLCJvdXRCcmVha2VyckRlZmF1bHRWYWx1ZSIsImlucHV0QnJlYWtlckRlZmF1bHRWYWx1ZSIsImFkZFN1bVNlbSIsImFyck9mU2VtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdW1PZkNvdW50Iiwic3VtT2ZTZW0iLCJ2YWx1ZSIsImJyZWFrZXJUeXBlIiwiY29udGFjdHNUYWJsZSIsImRhdGFPZlByb2plY3QiLCJkZXNjcmlwdFRhYmxlIiwidGFibGVCb2R5Iiwicm93NCIsInJvdzUiLCJyb3c2IiwiY3JlYXRlT3JkZXJUYWJsZSIsIm9yZGVyVGFibGUiLCJ0Qm9keSIsInJvdyIsImoiLCJ0ZCIsImZpbmRUZCIsImxpc3QiLCJjb2x1bW4iLCJlbGVtIiwiY3JlYXRlU3F1YXJlIiwiZmxhZzEiLCJmbGFnMiIsInRleHQiLCJ3cmFwcGVyIiwic3F1YXJlIiwicGFyYSIsImNyZWF0ZVAiLCJmaWxsT3JkZXJUYWJsZSIsImFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzIiwidGQxIiwiY2hpbGROb2RlcyIsImluZGV4T2ZicmVha2VyMSIsImluZGV4T2ZicmVha2VyMiIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMSIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMiIsImJyZWFrZXJSYWRpb0Nob2ljZTFfMyIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMSIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMiIsImJyZWFrZXJSYWRpb0Nob2ljZTJfMyIsImNoZWNrZWQiLCJpbnB1dEJyZWFrZXIxIiwiaW5wdXRCcmVha2VyMiIsImNvdW50ZXIxZiIsImNvdW50ZXIzZiIsInRkMTJfMiIsInRkMTJfMyIsImNyZWF0ZUxlZ2VuZE9mT3JkZXJMaXN0IiwibGVnZW5kIiwidXNlcklucHV0IiwicHJvamVjdERhdGEiLCJKU09OIiwicGFyc2UiLCJhcnJDb3VudGVyQnJlYWtlcnMiLCJnZXRPcmRlckxpc3RzQnV0dG9uIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvdW50ZXJzQW5kQnJlYWtlcnNXcmFwcGVyIiwiaW5mb1RhYmxlV3JhcHBlciIsImluZm9UYWJsZSIsInJvd0ZvckluZm9UYWJsZSIsImNyZWF0ZUluZm9UYWJsZSIsIm9yZGVyV3JhcHBlciIsImg2X2JyZWFrIiwiYTRkaXYiLCJhNGRpdl9mcmFtZSIsIm5vdGUiLCJuZWVkQnJlYWtlcnNJbmZvIiwidGQyIiwidGQzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEcsc0NBQXNDLG1CQUFPLENBQUMsaUhBQXlEO0FBQ3ZHLG9DQUFvQyxtQkFBTyxDQUFDLHlGQUFrQztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSwwQ0FBMEMsNERBQTRELE1BQU0sa0JBQWtCLDBKQUEwSiw2Q0FBNkMsaUNBQWlDLHNDQUFzQyx1Q0FBdUMsT0FBTyxnRkFBZ0YsaUNBQWlDLFdBQVcsZUFBZSw0Q0FBNEMs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O0FBQ0EsTUFBTTRELEtBQUssR0FBRzdELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTZELEtBQUssR0FBRzlELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTThELEtBQUssR0FBRy9ELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTStELEtBQUssR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWdFLEtBQUssR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWlFLEtBQUssR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWtFLEtBQUssR0FBR25FLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTW1FLEtBQUssR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTW9FLEtBQUssR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTXFFLEtBQUssR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FxRSxPQUFLLENBQUN0QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXVCLEtBQUssR0FBR3ZFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FzRSxPQUFLLENBQUN2QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXdCLEtBQUssR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXdFLEtBQUssR0FBR3pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXlFLEtBQUssR0FBRzFFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0F5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QixDQUFWO0FBQ0EsTUFBSWlSLEdBQUcsR0FBR2xSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFWLENBUHNELENBU3REOztBQUNBeU8sS0FBRyxDQUFDdEgsV0FBSixHQUFrQjVGLEdBQUcsQ0FBQ3FHLE9BQXRCOztBQUNBLE1BQUltSixnQkFBSixFQUFxQjtBQUNwQixRQUFJeFAsR0FBRyxDQUFDbUksaUJBQUosS0FBMEIsQ0FBOUIsRUFBaUM7QUFDaENzSCxTQUFHLENBQUM3SixXQUFKLG9FQUErQjVGLEdBQUcsQ0FBQzZJLFlBQW5DLGVBQW9EN0ksR0FBRyxDQUFDMkksV0FBeEQsZUFBd0UzSSxHQUFHLENBQUNpSSxhQUE1RTtBQUNBLEtBRkQsTUFFTyxJQUFJakksR0FBRyxDQUFDbUksaUJBQUosS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdkNzSCxTQUFHLENBQUM3SixXQUFKLG9FQUErQjVGLEdBQUcsQ0FBQzZJLFlBQW5DLGVBQW9EN0ksR0FBRyxDQUFDMkksV0FBeEQsZUFBd0UzSSxHQUFHLENBQUNpSSxhQUE1RSxzQkFBZ0dqSSxHQUFHLENBQUNrSSxhQUFwRztBQUNBO0FBQ0QsR0FORCxNQU1PO0FBQ051SCxPQUFHLENBQUM3SixXQUFKLG9FQUErQjVGLEdBQUcsQ0FBQzZJLFlBQW5DLGVBQW9EN0ksR0FBRyxDQUFDMkksV0FBeEQ7QUFDQTs7QUFFRCtHLEtBQUcsQ0FBQzlKLFdBQUosR0FBa0I1RixHQUFHLENBQUMrSCxVQUF0QjtBQUVBa0UsS0FBRyxDQUFDaE4sTUFBSixDQUFXaU8sR0FBWCxFQUFnQnVDLEdBQWhCLEVBQXFCQyxHQUFyQjtBQUNBLFNBQU96RCxHQUFQO0FBQ0EsQ0F6QkQ7O0FBMkJlaUQsOEVBQWYsRSIsImZpbGUiOiJvcmRlckxpc3RFbnRyeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sYXlvdXQvc2NyaXB0cy9vcmRlci1saXN0LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0dPU1QgMi4zMDQtODEgdHlwZSBBJzsgXFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IFxcclxcbn1cXHJcXG5AbWVkaWEgcHJpbnQge1xcclxcbiAgLyogKixcXHJcXG4gICo6YmVmb3JlLFxcclxcbiAgKjphZnRlcixcXHJcXG4gICo6Zmlyc3QtbGV0dGVyLFxcclxcbiAgcDpmaXJzdC1saW5lLFxcclxcbiAgLyogZGl2OmZpcnN0LWxpbmUsIFxcclxcbiAgYmxvY2txdW90ZTpmaXJzdC1saW5lLFxcclxcbiAgbGk6Zmlyc3QtbGluZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXHJcXG4gICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgfSAqL1xcclxcbiAgLyog0LfQtNC10YHRjCDQsdGD0LTRg9GCINGB0YLQuNC70Lgg0LTQu9GPINC/0LXRh9Cw0YLQuCAqL1xcclxcbiAgICBoZWFkZXIsIC5tYWluLXRhYmxlLCBmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICB9XFxyXFxuICAuYTRfZGl2IHtcXHJcXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcclxcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyBcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICB9IFxcclxcblxcclxcbiAgLtGBaXBoZXJfdGFibGUgdGR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJwdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCgxKSB0ZDpudGgtY2hpbGQoNyl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRwdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zcXVhcmVfY2hlY2tlZCB7XFxyXFxuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcXHJcXG4gICAgY29sb3ItYWRqdXN0OiBleGFjdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBwYWdlIHtcXHJcXG4gICAgc2l6ZTogYXV0bzsgIFxcclxcbiAgICBtYXJnaW46IDA7ICBcXHJcXG4gIH1cXHJcXG4vKiBoNiB7XFxyXFxuICAtd2Via2l0LWRpc3BsYXk6IG5vbmU7XFxyXFxufVxcdCAqL1xcclxcbn1cXHJcXG4vKiBAbWVkaWEgcHJpbnQgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MClcXHJcXG5hbmQgKG1pbi1yZXNvbHV0aW9uOi4wMDFkcGNtKSB7XFxyXFxuaDYge1xcclxcbiAgLXdlYmtpdC1kaXNwbGF5OiBub25lO1xcclxcbn0gXFxyXFxufSAqL1xcclxcbmg2IHtcXHJcXG5oZWlnaHQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFx0bWFyZ2luOiAwO1xcclxcbnBhZGRpbmc6IDA7XFxyXFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG5mb250LWZhbWlseTogJ0dPU1QgMi4zMDQtODEgdHlwZSBBJywgc2Fucy1zZXJpZjtcXHJcXG5jb2xvcjogYmxhY2s7IFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG53aWR0aDogMjEwbW07XFxyXFxubWFyZ2luOiBhdXRvO1xcclxcbi8qIGJhY2tncm91bmQ6IHVybCgnL2ltZy8wMDAxLmpwZycpOyAqL1xcclxcbn1cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG5wYWRkaW5nOiAxNXB4IDA7XFxyXFxuYmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG5jb2xvcjogIHdoaXRlO1xcclxcbn1cXHJcXG4vKiDQmtCd0J7Qn9Ca0JggKi9cXHJcXG4uYnRuIHtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IDMwcHg7XFxyXFxuYmFja2dyb3VuZDogIzAwOEI4QjtcXHJcXG5jb2xvcjogd2hpdGU7XFxyXFxuYm9yZGVyOiBub25lO1xcclxcbmJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5tYXJnaW46IDVweCAwO1xcclxcbmZvbnQtc2l6ZTogMjFweDs7XFxyXFxufVxcclxcbi5idG46bGFzdC1jaGlsZHtcXHJcXG5tYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuLmJ0bjpob3ZlciwgLmlucHV0LWJ0bjpob3ZlciB7XFxyXFxuYmFja2dyb3VuZDpcXHQjMDA4QzMzO1xcclxcbmJvcmRlcjogIzBiNjYwMyBzb2xpZCAycHg7XFxyXFxufVxcclxcbi8qRGl2INGBINCy0LXRgNGF0L3QtdC5INGC0LDQsdC70LjRhtC+0LkgKi9cXHJcXG4ubWFpbi10YWJsZSB7XFxyXFxuYmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG5mb250LXNpemU6IDIxcHg7XFxyXFxufVxcclxcbi8q0JvQtdCz0LXQvdC00YsqL1xcclxcbmxlZ2VuZHtcXHJcXG5wYWRkaW5nLXRvcDogNXB4O1xcclxcbn1cXHJcXG4vKtCi0JDQkdCb0JjQptCrLCDQvtCx0YnQuNC1INGB0LLQvtC50YHRgtCy0LAqL1xcclxcbnRhYmxlIHtcXHJcXG5ib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG50ZCwgdGgge1xcclxcbmJvcmRlcjogMC4yNW1tIHNvbGlkICMwMDA7XFxyXFxufVxcclxcbnRib2R5IHRyOm50aC1jaGlsZCgybi0xKSB7XFxyXFxuYmFja2dyb3VuZDogI2UzZjhlYTtcXHJcXG59XFxyXFxudHI6bnRoLWNoaWxkKDJuKSwgdGhlYWQge1xcclxcbmJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcbi8q0KLQkNCR0JvQmNCm0JAg0JjQndCk0J7QoNCc0JDQptCY0JgqL1xcclxcbi5pbmZvX3RhYmxlIHtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGQsIC5pbmZvX3RhYmxlIHRoIHtcXHJcXG5ib3JkZXI6IDJweCBzb2xpZCAjMDA4QjhCO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0ZDpudGgtY2hpbGQoMSksICAuaW5mb190YWJsZSB0ZDpudGgtY2hpbGQoMil7XFxyXFxucGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRkOmxhc3QtY2hpbGR7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0aDpmaXJzdC1jaGlsZCB7XFxyXFxud2lkdGg6IDQwbW07XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRoOmxhc3QtY2hpbGQge1xcclxcbndpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSAubGFzdF90ZCB7XFxyXFxuZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG5iYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbmJvcmRlcjogbm9uZTtcXHJcXG50ZXh0LWFsaWduOiByaWdodDtcXHJcXG5wYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcbi8q0JrQntCd0KLQldCZ0J3QldCg0Ksg0JTQm9CvINCe0J/QoNCe0KHQndCr0KUqL1xcclxcbi5vcmRlcl9jb250YWluZXIge1xcclxcbmJhY2tncm91bmQ6ICM0OEQxQ0M7XFxyXFxufVxcclxcbi5hNF9kaXY6bnRoLWNoaWxkKDRuLTIpe1xcclxcbmJhY2tncm91bmQ6ICNkMGVjZWM7XFxyXFxufVxcclxcbi5hNF9kaXY6bnRoLWNoaWxkKDRuKXtcXHJcXG5iYWNrZ3JvdW5kOiAjYzFlNmMxO1xcclxcbn1cXHJcXG4uYTRfZGl2IHtcXHJcXG5oZWlnaHQ6IDI5Ni41bW07XFxyXFxuZGlzcGxheTogYmxvY2s7XFxyXFxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxucG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYTRfZGl2X2ZyYW1lIHtcXHJcXG5mb250LXNpemU6IDExLjVwdDtcXHJcXG5oZWlnaHQ6IDI4N21tO1xcclxcbndpZHRoOiAxODVtbTtcXHJcXG5sZWZ0OiAyMG1tO1xcclxcbmJvdHRvbTogNW1tO1xcclxcbmJvcmRlcjogMC42bW0gc29saWQgYmxhY2s7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcdFxcclxcbmRpc3BsYXk6IGJsb2NrOyAvKmRlbCovXFxyXFxufVxcclxcbi8q0J7Qn9CY0KHQkNCi0JXQm9Cs0J3QkNCvINCi0JDQkdCb0JjQptCQINCe0J/QoNCe0KHQndCe0JPQniovXFxyXFxuLmxlZ2VuZF90YWJsZSB7XFxyXFxud2lkdGg6IDUwJTtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxubWFyZ2luLWxlZnQ6IDE4MHB4O1xcclxcbn1cXHJcXG4uZGVzY3JpcHRfdGFibGUge1xcclxcbm1hcmdpbi1sZWZ0OiA4MHB4O1xcclxcbndpZHRoOiAxNDBtbTtcXHJcXG59XFxyXFxuLmRlc2NyaXB0X3RhYmxlIHRkIHtcXHJcXG5wYWRkaW5nOiAxcHggMCAxcHggNXB4O1xcclxcbn1cXHJcXG4vKtCi0JDQkdCb0JjQptCQLdCe0J/QoNCe0KHQndCr0JkqL1xcclxcbi5vcmRlcl90YWJsZSB7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxubWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLm9yZGVyX3RhYmxlIHRkOm50aC1jaGlsZCgxKSB7XFxyXFxud2lkdGg6IDE1bW07XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbmJvcmRlci1sZWZ0OiBub25lO1xcclxcbn1cXHJcXG4vKiAub3JkZXJfdGFibGUgdGQ6bGFzdC1jaGlsZHtcXHJcXG5cXHJcXG59ICovXFxyXFxuLm9yZGVyX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxyXFxud2lkdGg6IDcwbW07XFxyXFxudGV4dC1hbGlnbjogbGVmdDtcXHJcXG5wYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLm9yZGVyX3RhYmxlIHRkOm50aC1jaGlsZCgzKSB7XFxyXFxudGV4dC1hbGlnbjogbGVmdDtcXHJcXG5wYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG5ib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcbi5vcmRlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQge1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5oZWlnaHQ6IDMwcHg7XFxyXFxucGFkZGluZzogMDtcXHJcXG59XFxyXFxuLnNxdWFyZSB7XFxyXFxud2lkdGg6IDEycHg7XFxyXFxuaGVpZ2h0OiAxMnB4O1xcclxcbmJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuZmxvYXQ6IGxlZnQ7XFxyXFxubWFyZ2luLXRvcDogMnB4O1xcclxcbm1hcmdpbi1yaWdodDogNXB4O1xcclxcbm1hcmdpbi1ib3R0b206IDFweDtcXHJcXG59XFxyXFxuLnNxdWFyZTpsYXN0LWNoaWxkIHtcXHJcXG5tYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcbi5zcXVhcmVfY2hlY2tlZCB7XFxyXFxuYmFja2dyb3VuZDogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyrRgdCy0L7QudGB0YLQstCwINC00LvRjyDQvtC/0YDQvtGB0L3QuNC60LAsINCz0LTQtSDQvdGD0LbQvdC+INCyINC+0LTQvdGDINGB0YLRgNC+0LrRgyDQutCy0LDQtNGA0LDRgtC40LrQuCDQstC/0LjRgdCw0YLRjCovXFxyXFxuLmlubGluZV9ibG9jayB7XFxyXFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbndpZHRoOiA1MCU7XFxyXFxufVxcclxcbi8q0J/RgNC40LzQtdGH0LDQvdC40LUg0L/QvtGB0LvQtSDQvtC/0YDQvtGB0L3QvtCz0L4qL1xcclxcbi5ub3Rle1xcclxcbnBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLyrQoNCQ0JzQmtCQLdCo0JjQpNCgKi9cXHJcXG4u0YFpcGhlcl90YWJsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuYm90dG9tOiAwO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGR7XFxyXFxuICBsaW5lLWhlaWdodDogMC45NTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJwdDs7XFxyXFxuYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5ib3JkZXItcmlnaHQ6ICMwMDAgc29saWQgMC42bW07XFxyXFxuYm9yZGVyLWxlZnQ6ICMwMDAgc29saWQgMC42bW07XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZDpudGgtY2hpbGQoNCksXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkOm50aC1jaGlsZCgyKXtcXHJcXG5sZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcclxcbi8qIGZvbnQtc2l6ZTogMTRweDtcXHQgKi9cXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGQ6bnRoLWNoaWxkKG4rNyl7XFxyXFxuYm9yZGVyOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZChuKzUpe1xcclxcbmJvcmRlci10b3A6ICMwMDAgc29saWQgMC42bW07XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDYpe1xcclxcbmJvcmRlci1ib3R0b206ICMwMDAgc29saWQgMC42bW07XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOmZpcnN0LWNoaWxkIHtcXHJcXG5ib3JkZXItbGVmdDogbm9uZTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxyXFxuYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpsYXN0LWNoaWxkIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQobis0KXtcXHJcXG5ib3JkZXItYm90dG9tOiBub25lO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMSksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgyKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDMpIHtcXHJcXG50ZXh0LWFsaWduOiBsZWZ0O1xcclxcbnBhZGRpbmctbGVmdDogMnB4O1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMSksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgyKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDMpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNCksXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDYpIHtcXHJcXG53aWR0aDogMTBtbTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDUpIHtcXHJcXG53aWR0aDogMTVtbTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg1KSB7XFxyXFxud2lkdGg6IDcwbW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNiksXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg3KSB7XFxyXFxud2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCgxKSB0ZDpudGgtY2hpbGQoNyl7XFxyXFxuZm9udC1zaXplOiAyNHB0O1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZHtcXHJcXG5oZWlnaHQ6IDVtbTtcXHJcXG59XFxyXFxuLnBfYmVzcHtcXHJcXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXFxyXFxufVxcclxcbi5sb2dvX2Jlc3B7XFxyXFxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbm1hcmdpbjogMHB4IDAgLTEycHggN3B4O1xcdFxcclxcbn1cXHJcXG4vKtCf0KDQr9Cn0JXQnCDQpNCe0KDQnNCjINCS0J3QldCh0JXQndCY0K8g0KHQp9CV0KLQp9CY0JrQntCSINCYINCQ0JLQotCe0JzQkNCi0J7QkiDQn9Ce0KHQm9CVINCV0JUg0JfQkNCf0J7Qm9Cd0JXQndCY0K8qL1xcclxcbi5oaWRlX2NvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8q0J/QntCa0JDQl9Cr0JLQkNCV0JwqL1xcclxcbi5oaWRlX2luZm9fdGFibGVfd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uc2hvd19pbmZvX3RhYmxlX3dyYXBwZXIge1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uZm9vdGVyX3Nob3cge1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcdFxcclxcbn1cXHJcXG5mb290ZXIge1xcclxcbmRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8q0KTQntCg0JzQkCDQktCS0J7QlNCQINCh0KfQldCi0KfQmNCa0J7QkiDQmCDQktCr0JrQm9Cu0KfQkNCi0JXQm9CV0JkqL1xcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciB7XFxyXFxuYmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG5mb250LXNpemU6IDIxcHg7XFxyXFxubWluLWhlaWdodDogODIzcHg7XFxyXFxufVxcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciBpbnB1dCB7XFxyXFxuZm9udC1zaXplOiAyMXB4O1xcdFxcclxcbn1cXHJcXG4vKtC90YPQvNC10YDQsNGG0LjRjyDQu9C40YHRgtC+0LIqL1xcclxcbi5pbnB1dF9wYWdle1xcclxcbi8qIGJhY2tncm91bmQ6ICM0OEQxQ0M7ICovXFxyXFxuYm9yZGVyOiAjMDA4QjhCIHNvbGlkIDJweDtcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFx0XFxyXFxucGFkZGluZy1sZWZ0OiA0MHB4O1xcclxcbn1cXHJcXG4uaW5wdXRfcGFnZSBwIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLyrQodCn0JXQotCn0JjQmtCYKi9cXHJcXG4uY291bnRlcnNfd3JhcHBlcntcXHJcXG5iYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbmJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuYm9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcbnBhZGRpbmctbGVmdDogNDBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgcCxcXHJcXG4uY291bnRlcnNfd3JhcHBlciBwe1xcclxcbnBhZGRpbmctdG9wOiAxNXB4O1xcclxcbn1cXHJcXG4uY291bnRlcnNfd3JhcHBlciAuY291bnRlcl9ub3RlIHtcXHJcXG5wYWRkaW5nOiAwO1xcclxcbmZvbnQtc2l6ZTogMTZweDtcXHJcXG5jb2xvcjogIzBiNjYwMztcXHJcXG59XFxyXFxuLmNvdW50ZXJzX3dyYXBwZXIgLmNvdW50ZXJfbm90ZTpsYXN0LWNoaWxkIHtcXHJcXG5wYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgI2NvdW50ZXItMWYsXFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTNmIHtcXHJcXG53aWR0aDogOTElO1xcclxcbn1cXHJcXG4uaW5wdXRfcGFnZSAjaW5wdXRfcGFnZVxcclxcbi8qLCAuY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgI2NvdW50ZXItM2YqL1xcclxcbntcXHJcXG5tYXJnaW4tYm90dG9tOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKtCS0KvQmtCb0K7Qp9CQ0KLQldCb0JgqL1xcclxcbi5icmVha2VyX2Rpdl9yYWRpbyxcXHJcXG4uYnJlYWtlcl9kaXYge1xcclxcbmJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbnBhZGRpbmctbGVmdDogNDBweDtcXHRcXHRcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlve1xcclxcbnBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW86bnRoLWNoaWxkKDJuLTEpe1xcclxcbiAgYmFja2dyb3VuZDogIzVmZTY3YztcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvOm50aC1jaGlsZCgybil7XFxyXFxuYmFja2dyb3VuZDogIzRmZjlhYTtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2Om50aC1jaGlsZCgybi0xKXtcXHJcXG5iYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXY6bnRoLWNoaWxkKDJuKXtcXHJcXG5iYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8gLmJyZWFrZXJfcCxcXHJcXG4uYnJlYWtlcl9kaXYgLmJyZWFrZXJfcHtcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxucGFkZGluZzogMTVweCAwIDJweCAwO1xcdFxcclxcbm1hcmdpbi1sZWZ0OiAtNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyZWFrZXJfZGl2IC5pbnB1dC1we1xcclxcbnBhZGRpbmc6IDhweCAwIDJweCAwO1xcdFxcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8gbGFiZWx7XFxyXFxucGFkZGluZzogM3B4IDAgMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnJlYWtlcl9kaXYgaW5wdXQ6bGFzdC1jaGlsZHtcXHJcXG5tYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKtGE0L7RgNC80LDRgiAo0JA0KSovXFxyXFxuLmZvcm1hdF9kaXZ7XFxyXFxuYm90dG9tOiAxcHg7XFxyXFxuICByaWdodDogOTJweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyrQkdCe0JrQntCS0JDQryDQp9CQ0KHQotCsINCg0JDQnNCa0JgqL1xcclxcbi5hc2lkZV9mcmFtZSB7XFxyXFxuLyp0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7ICovXFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbmJvdHRvbTogLTAuNW1tO1xcclxcbmxlZnQ6IC0xM21tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgc3BhbntcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgLXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xcclxcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHRke1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5ib3JkZXI6IDAuNm1tIHNvbGlkIGJsYWNrO1xcclxcbmZvbnQtc2l6ZTogMTJwdDtcXHJcXG50cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7XFxyXFxuXFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMm4rMSkgdGR7XFxyXFxuaGVpZ2h0OiAyNS4zbW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMikgdGR7XFxyXFxuaGVpZ2h0OiAzNS42bW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0ZDpmaXJzdC1jaGlsZHtcXHJcXG53aWR0aDogNW1tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGQ6bGFzdC1jaGlsZHtcXHJcXG53aWR0aDogN21tO1xcclxcbmJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59IFxcclxcblxcclxcbi8q0LLQstC+0LQg4oSWINGB0YLRgNCw0L3QuNGG0YsqL1xcclxcbiNpbnB1dF9wYWdle1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZXtcXHJcXG4gIG1heC13aWR0aDogNjVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDMzcHg7XFxyXFxuICBib3R0b206IC03cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5zaWduYXR1cmVfYm9zcyB7XFxyXFxuICBtYXgtd2lkdGg6IDY1cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzM3B4O1xcclxcbiAgYm90dG9tOiAxNXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3MyIHtcXHJcXG4gIG1heC13aWR0aDogNjVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDMzcHg7XFxyXFxuICBib3R0b206IDMzcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGZhZWFmZDQ5NzNmODg5MjAwNzRlNDZlNTU1YjEyZmMudHRmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL29yZGVyLWxpc3QuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJmdW5jdGlvbiBhZGRBc2lkZVRhYmxlKCkge1xyXG5cclxuXHR2YXIgYXNpZGVfZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcblx0YXNpZGVfZnJhbWUuY2xhc3NMaXN0LmFkZCgnYXNpZGVfZnJhbWUnKTtcclxuXHJcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEJPRFlcIik7XHJcblx0YXNpZGVfZnJhbWUuYXBwZW5kQ2hpbGQoYm9keSk7XHJcblxyXG5cdHZhciByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHZhciByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHZhciByb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuXHRib2R5LmFwcGVuZChyb3cxLCByb3cyLCByb3czKTtcclxuXHJcblx0dmFyIHRkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkMV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMik7XHJcblx0cm93Mi5hcHBlbmQodGQyXzEsIHRkMl8yKTtcclxuXHRyb3czLmFwcGVuZCh0ZDNfMSwgdGQzXzIpO1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0YHQv9Cw0L3Ri1xyXG5cdHRkMV8xLmFwcGVuZChzcGFuX3RkMV8xKTtcclxuXHR0ZDJfMS5hcHBlbmQoc3Bhbl90ZDJfMSk7XHJcblx0dGQzXzEuYXBwZW5kKHNwYW5fdGQzXzEpO1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0c3Bhbl90ZDFfMS5pbm5lckhUTUwgPSAn0JjQvdCyLiBOINC/0L7QtNC7Lic7XHJcblx0dGQxXzIuaW5uZXJIVE1MID0gJyc7XHJcblx0c3Bhbl90ZDJfMS5pbm5lckhUTUwgPSAn0J/QvtC00L/QuNGB0Ywg0Lgg0LTQsNGC0LAnO1xyXG5cdHRkMl8yLmlubmVySFRNTCA9ICcnO1xyXG5cdHNwYW5fdGQzXzEuaW5uZXJIVE1MID0gJ9CS0LfQsNC80LXQvSDQuNC90LIuIE4nO1xyXG5cdHRkM18yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRyZXR1cm4gYXNpZGVfZnJhbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEFzaWRlVGFibGU7XHJcbiIsImltcG9ydCB7IGFkZE9yZGVyUGFnZU51bWJlciwgIGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyLCBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIsIGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXJ9IGZyb20gJy4vYWRkLXBhZ2UtbnVtYmVyJztcclxuXHJcbmZ1bmN0aW9uIGFkZENpcGhlclRhYmxlKHByb2plY3QsIHN1YnNlY3Rpb24sIHR5cGVPZlBhZ2UsIHNlbSwgaW5kZXgsIG1haW5PYmosIHNoZW1lUGFnZXMpIHtcclxuXHJcblx0Y29uc29sZS5sb2cobWFpbk9iailcclxuXHRjb25zdCDRgWlwaGVyVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcblx00YFpcGhlclRhYmxlLmNsYXNzTGlzdC5hZGQoJ9GBaXBoZXJfdGFibGUnKTtcclxuXHJcblx0Y29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEJPRFlcIik7XHJcblx00YFpcGhlclRhYmxlLmFwcGVuZCh0Ym9keSk7XHJcblx0Ly8g0YHRgtGA0L7QutC4XHJcblx0XHJcblx0Y29uc3Qgcm93XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18xMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHJcblxyXG5cdC8vINC80LXRgdGC0L4g0LPQtNC1INCx0YPQtNGD0YIg0YHRgtGA0L7QutC4XHJcblx0dGJvZHkuYXBwZW5kKHJvd18xLCByb3dfMiwgcm93XzMsIHJvd180LCByb3dfNSwgcm93XzYsIHJvd183LCByb3dfOCwgcm93XzksIHJvd18xMCwgcm93XzExKTtcclxuXHJcbi8vIGNvbnN0IHJvdzEgPSB0Ym9keVswXTtcclxuLypcclxuZm9yIChsZXQgaSA9IDA7IGkgPCAxMTsgaSArPSAxKSB7XHJcblx0Y29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHRib2R5LmFwcGVuZChyb3cpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xyXG5cdGNvbnN0IHJvdyA9IHRib2R5LmNoaWxkTm9kZXNbMF07XHJcblx0Y29uc29sZS5sb2codGJvZHkuY2hpbGROb2RlcylcclxuXHRjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRyb3cuYXBwZW5kKHRkKTtcclxufVxyXG4qL1xyXG4vLyBjb25zb2xlLmxvZyhyb3cxKVxyXG5cdC8vINGP0YfQtdC50LrQuFxyXG5cdGNvbnN0IHRkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV83ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV83LnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICc0Jyk7XHJcblx0dGQxXzcuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHJcblx0Y29uc3QgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQyXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQyXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQyXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQyXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQyXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkM18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM181ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkM183LnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICc0Jyk7XHJcblx0dGQzXzcuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzMnKTtcclxuXHJcblx0Y29uc3QgdGQ0XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ0XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ0XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ0XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ0XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ0XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkNV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkNl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ2XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ2XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ2XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzMnKTtcclxuXHRjb25zdCB0ZDZfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ3XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkN180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkN181ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN181LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzYuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cclxuXHRjb25zdCB0ZDhfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDhfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOF8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ4XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ4XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkOV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ5XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDlfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDlfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDlfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cdGNvbnN0IHRkOV82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV82LnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICczJyk7XHJcblx0dGQ5XzYuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzMnKTtcclxuXHJcblx0Y29uc3QgdGQxMF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTBfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTBfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDEwXzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDEwXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxMF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDExXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMV8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTFfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTFfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDExXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG5cdHJvd18xLmFwcGVuZCh0ZDFfMSwgdGQxXzIsIHRkMV8zLCB0ZDFfNCwgdGQxXzUsIHRkMV82LCB0ZDFfNyk7XHJcblx0cm93XzIuYXBwZW5kKHRkMl8xLCB0ZDJfMiwgdGQyXzMsIHRkMl80LCB0ZDJfNSwgdGQyXzYpO1xyXG5cdHJvd18zLmFwcGVuZCh0ZDNfMSwgdGQzXzIsIHRkM18zLCB0ZDNfNCwgdGQzXzUsIHRkM182LCB0ZDNfNyk7XHJcblx0cm93XzQuYXBwZW5kKHRkNF8xLCB0ZDRfMiwgdGQ0XzMsIHRkNF80LCB0ZDRfNSwgdGQ0XzYpO1xyXG5cdHJvd181LmFwcGVuZCh0ZDVfMSwgdGQ1XzIsIHRkNV8zLCB0ZDVfNCwgdGQ1XzUsIHRkNV82KTtcclxuXHRyb3dfNi5hcHBlbmQodGQ2XzEsIHRkNl8yLCB0ZDZfMywgdGQ2XzQsIHRkNl81LCB0ZDZfNiwgdGQ2XzcsIHRkNl84KTtcclxuXHRyb3dfNy5hcHBlbmQodGQ3XzEsIHRkN18yLCB0ZDdfMywgdGQ3XzQsIHRkN181LCB0ZDdfNiwgdGQ3XzcpO1xyXG5cdHJvd184LmFwcGVuZCh0ZDhfMSwgdGQ4XzIsIHRkOF8zLCB0ZDhfNCk7XHJcblx0cm93XzkuYXBwZW5kKHRkOV8xLCB0ZDlfMiwgdGQ5XzMsIHRkOV80LCB0ZDlfNSwgdGQ5XzYpO1xyXG5cdHJvd18xMC5hcHBlbmQodGQxMF8xLCB0ZDEwXzIsIHRkMTBfMywgdGQxMF80KTtcclxuXHRyb3dfMTEuYXBwZW5kKHRkMTFfMSwgdGQxMV8yLCB0ZDExXzMsIHRkMTFfNCk7XHJcblxyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0dGQxXzcuaW5uZXJIVE1MID0gYCR7cHJvamVjdC5jaXBoZXJ9LSR7c3Vic2VjdGlvbn0tNzAt0JDQo9CtYDsgLy8xLjdcclxuXHJcblx0dGQzXzcuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lT2ZQcm9qZWN0OyAvLzMuN1xyXG5cclxuXHR0ZDVfMS5pbm5lckhUTUwgPSAn0JjQt9C8Lic7IC8vNS4xXHJcblx0dGQ1XzIuaW5uZXJIVE1MID0gJ9Ca0L7Quy7Qo9GHLic7IC8vNS4yXHJcblx0dGQ1XzMuaW5uZXJIVE1MID0gJ9Cb0LjRgdGCJzsgLy81LjNcclxuXHR0ZDVfNC5pbm5lckhUTUwgPSAn4oSW0LTQvtC6Lic7IC8vNS40XHJcblx0dGQ1XzUuaW5uZXJIVE1MID0gJ9Cf0L7QtNC/0LjRgdGMJzsgLy81LjVcclxuXHR0ZDVfNi5pbm5lckhUTUwgPSAn0JTQsNGC0LAnOyAvLzUuNlxyXG5cclxuXHR0ZDZfMS5pbm5lckhUTUwgPSAn0KPRgtCyLic7IC8vNi4xXHJcblx0dGQ2XzIuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lT2ZCb3NzLnNwbGl0KCcgJylbMF07IC8vNi4yXHJcblx0dGQ2XzMuaW5uZXJIVE1MID0gJyc7IC8vNi4zXHJcblxyXG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG5cdC8vIGNvbnN0IGRheSA9IGQuZ2V0RGF0ZSgpO1xyXG5cdGNvbnN0IG1vbnRoID0gZC5nZXRNb250aCgpICsgMTtcclxuXHRjb25zdCB5ZWFyID0gZC5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcblxyXG5cdGxldCB0b2RheTtcclxuXHRpZiAobW9udGggPCAxMCkge1xyXG5cdFx0dG9kYXkgPSBgMCR7bW9udGh9LiR7eWVhci5zcGxpdCgnJylbMl19JHt5ZWFyLnNwbGl0KCcnKVszXX1gXHJcblx0fSBlbHNlIHtcclxuXHRcdHRvZGF5ID0gYCR7bW9udGh9LiR7eWVhci5zcGxpdCgnJylbMl19JHt5ZWFyLnNwbGl0KCcnKVszXX1gXHJcblx0fVxyXG5cclxuXHR0ZDZfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDlfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDEwXzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblx0dGQxMV80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cclxuXHRcclxuXHRpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyJyB8fCB0eXBlT2ZQYWdlID09PSAnb3JkZXJTaGVtZScpIHtcclxuXHRcdHRkNl81LmlubmVySFRNTCA9ICfQl9Cw0LTQsNC90LjQtSDQt9Cw0LLQvtC00YMg0L3QsCDQuNC30LPQvtGC0L7QstC70LXQvdC40LUg0YjQutCw0YTQvtCyINCQ0KHQmtCj0K0nOyAvLzYuNVxyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzJyB8fCB0eXBlT2ZQYWdlID09PSAnd29ya3NTaGVtZScpIHtcclxuXHRcdHRkNl81LmlubmVySFRNTCA9ICfQrdC70LXQutGC0YDQuNGH0LXRgdC60LjQtSDRgdC10YLQuCAwLDQtMTAg0LrQki4g0JDQodCa0KPQrSc7IC8vNi41XHJcblx0fVxyXG5cdHRkNl82LmlubmVySFRNTCA9ICfQodGC0LDQtNC40Y8nOyAvLzYuNlxyXG5cdHRkNl83LmlubmVySFRNTCA9ICfQm9C40YHRgic7IC8vNi43XHJcblx0dGQ2XzguaW5uZXJIVE1MID0gJ9Cb0LjRgdGC0L7Qsic7IC8vNi44XHJcblxyXG5cdHRkN181LmlubmVySFRNTCA9IHByb2plY3Quc3RhZ2VPZlByb2plY3Q7XHRcdFx0Ly8gNy41XHJcblxyXG5cdGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXInKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZE9yZGVyUGFnZU51bWJlcihpbmRleCwgc2VtLCBtYWluT2JqKTtcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlclNoZW1lJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRPcmRlclNoZW1lUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlcyk7XHJcblxyXG5cdFx0Ly8g0LjRgdC/0YDQsNCy0LjRgtGMINC90LjQttC1LCDRh9GC0L7QsSDQvtGC0LvQuNGH0LDQu9Cw0YHRjCDQvdGD0LzQtdGA0LDRhtC40Y9cclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3JrcycpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlcyk7XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3NTaGVtZScpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4KTtcclxuXHR9XHJcblx0XHJcblx0dGQ5XzEudGV4dENvbnRlbnQgPSAn0J0uINC60L7QvdGC0YAuJzsgLy85LjFcclxuXHR0ZDlfMi50ZXh0Q29udGVudCA9ICfQodCy0LjRgNGB0LrQuNC5JztcclxuXHJcblx0aWYgKHByb2plY3QuaXNCb3NzU2lnbmF0dXJlKXtcclxuXHRcdGNvbnN0IGJvc3NTaWduYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG5cdFx0Y29uc3QgYm9zc1NpZ25hdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG5cdFx0Ym9zc1NpZ25hdHVyZS5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmVfYm9zcycpO1xyXG5cdFx0Ym9zc1NpZ25hdHVyZTIuY2xhc3NMaXN0LmFkZCgnc2lnbmF0dXJlX2Jvc3MyJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0Ym9zc1NpZ25hdHVyZTIuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHR0ZDlfMy5hcHBlbmQoYm9zc1NpZ25hdHVyZSk7XHJcblx0XHR0ZDEwXzMuYXBwZW5kKGJvc3NTaWduYXR1cmUyKTtcclxuXHR9XHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG5cclxuXHRpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyJykge1xyXG5cdFx0dGQ5XzUudGV4dENvbnRlbnQgPSBzZW0uZnVsbERlY3JpcHRpb247IC8vOS41XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXJTaGVtZScgfHwgdHlwZU9mUGFnZSA9PT0gJ3dvcmtzU2hlbWUnKSB7XHJcblx0XHRpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcxJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0L7QtNC90L7RhNCw0LfQvdGL0Lwg0LLQstC+0LTQvtC8LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDQtNCy0YPQvNGPINC+0LTQvdC+0YTQsNC30L3Ri9C80Lgg0LLQstC+0LTQsNC80LguINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMScpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINGC0YDQtdGF0YTQsNC30L3Ri9C8INCy0LLQvtC00L7QvC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0LTQstGD0LzRjyDRgtGA0LXRhdGE0LDQt9C90YvQvNC4INCy0LLQvtC00LDQvNC4LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDRgtGA0LXRhdGE0LDQt9C90YvQvCDQuCDQvtC00L3QvtGE0LDQt9C90YvQvCDQstCy0L7QtNC+0LwuINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnKSB7XHJcblx0XHR0ZDlfNS50ZXh0Q29udGVudCA9IGAke3NlbS5kZWNyaXB0aW9uRm9yV29ya3N9LiDQktC10LTQvtC80L7RgdGC0Ywg0L7QsdGK0LXQvNC+0LIg0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9GFINC4INC80L7QvdGC0LDQttC90YvRhSDRgNCw0LHQvtGCINC/0L4g0YPRgdGC0LDQvdC+0LLQutC1YDsgLy85LjVcclxuXHR9IFxyXG5cclxuXHJcblx0Y29uc3QgcF9iZXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0cF9iZXNwLmNsYXNzTGlzdC5hZGQoJ3BfYmVzcCcpO1xyXG5cdHBfYmVzcC5zZXRBdHRyaWJ1dGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0dGQ5XzYuYXBwZW5kKHBfYmVzcCk7XHJcblx0cF9iZXNwLmlubmVySFRNTCA9ICfQoNCj0J8nICsgJzxCUj4nICsgJ1wi0JHQtdC70Y3QvdC10YDQs9C+0YHQtdGC0YzQv9GA0L7QtdC60YJcIic7XHJcblx0Y29uc3QgbG9nb19iZXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRsb2dvX2Jlc3AuY2xhc3NMaXN0LmFkZCgnbG9nb19iZXNwJyk7XHJcblx0bG9nb19iZXNwLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2xvZ29fYmVzcC5qcGcnKTtcclxuXHR0ZDlfNi5hcHBlbmQobG9nb19iZXNwKTtcclxuXHQvKlx0dGQ5XzYuaW5uZXJIVE1MID0gJ9Cg0KPQnyBcItCR0LXQu9GN0L3QtdGA0LPQvtGB0LXRgtGM0L/RgNC+0LXQutGCXCInOyAvLzkuNiovXHJcblxyXG5cdHRkMTBfMS5pbm5lckhUTUwgPSAn0J/RgNC+0LLQtdGA0LjQuyc7IC8vMTAuMVxyXG5cdHRkMTBfMi5pbm5lckhUTUwgPSAn0KHQstC40YDRgdC60LjQuSc7IC8vMTAuMlxyXG5cclxuXHR0ZDExXzEuaW5uZXJIVE1MID0gJ9Cg0LDQt9GA0LDQsS4nOyAvLzExLjFcclxuXHR0ZDExXzIuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIuc3BsaXQoJyAnKVswXTsgLy8xMS4yXHJcblxyXG5cdGlmIChwcm9qZWN0LmlzRGV2ZWxvcGVyU2lnbmF0dXJlKXtcclxuXHRcdGNvbnN0IGRldmVsb3BlclNpZ25hdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0XHRkZXZlbG9wZXJTaWduYXR1cmUuY2xhc3NMaXN0LmFkZCgnc2lnbmF0dXJlJyk7XHJcblx0XHRpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0JrRgNCw0L/QuNCy0LjQvdCwINCiLiDQoVwiKSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9rcmFwaXZpbmEucG5nJyk7XHJcblx0XHR9IGVsc2UgaWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCh0LLQuNGA0YHQutC40Lkg0JAuINCVLlwiKSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdH0gZWxzZSBpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0JjQtNC10LvRjNGH0LjQuiDQky4g0KAuXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2lkZWxjaGlrLnBuZycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0fVxyXG5cdFx0dGQxMV8zLmFwcGVuZChkZXZlbG9wZXJTaWduYXR1cmUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuINGBaXBoZXJUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQ2lwaGVyVGFibGU7XHJcbiIsImZ1bmN0aW9uIGFkZEZvcm1hdChmb3JtYXQpIHtcclxuXHJcblx0Y29uc3QgZm9ybWF0X2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcblx0Zm9ybWF0X2Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtYXRfZGl2Jyk7XHJcblxyXG5cdGNvbnN0IGZvcm1hdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRmb3JtYXRQYXJhLmNsYXNzTGlzdC5hZGQoJ2Zvcm1hdCcpO1xyXG5cdFxyXG5cdGZvcm1hdFBhcmEudGV4dENvbnRlbnQgPSBg0KTQvtGA0LzQsNGCICR7Zm9ybWF0fWA7XHJcblx0Zm9ybWF0X2Rpdi5hcHBlbmQoZm9ybWF0UGFyYSk7XHJcblxyXG5cdHJldHVybiBmb3JtYXRfZGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRGb3JtYXQ7XHJcbiIsImZ1bmN0aW9uIGFkZE9yZGVyUGFnZU51bWJlcihpbmRleCwgc2VtLCBhcnJPZlNlbXMpIHtcclxuXHRcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJPcmRlclBhZ2VJbnB1dCcpO1xyXG5cclxuXHRpZiAoaW5kZXggPT09IDApIHtcclxuXHRcdHJldHVybiAraW5wdXRfcGFnZSArIDE7XHJcblx0fSBlbHNlIGlmIChhcnJPZlNlbXNbaW5kZXggLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gXHJcblx0XHQmJiBhcnJPZlNlbXNbaW5kZXggLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10pIHtcclxuXHRcdGNvbnN0IHByZXZpb3VzUGFnZSA9ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjb3JkZXJfc2hlZXQgPiBkaXY6bnRoLWNoaWxkKCR7aW5kZXggKiAyfSkgPiBkaXYgPiB0YWJsZS7RgWlwaGVyX3RhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoNykgPiB0ZDpudGgtY2hpbGQoNilgKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRyZXR1cm4gK3ByZXZpb3VzUGFnZSArIDE7XHJcblx0fSBlbHNlIGlmIChhcnJPZlNlbXNbaW5kZXggLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gXHJcblx0XHR8fCBhcnJPZlNlbXNbaW5kZXggLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbM10gIT09IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10pIHtcclxuXHRcdGNvbnN0IHByZXZpb3VzUGFnZSA9ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjb3JkZXJfc2hlZXQgPiBkaXY6bnRoLWNoaWxkKCR7aW5kZXggKiAyfSkgPiBkaXYgPiB0YWJsZS7RgWlwaGVyX3RhYmxlID4gdGJvZHkgPiB0cjpudGgtY2hpbGQoNykgPiB0ZDpudGgtY2hpbGQoNilgKS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRyZXR1cm4gcHJldmlvdXNQYWdlICsgMjtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3JkZXJQYWdlSW5wdXQnKTtcclxuXHJcblx0Y29uc29sZS5sb2coc2hlbWVQYWdlcyk7XHJcblx0Y29uc29sZS5sb2coaW5wdXRfcGFnZSwgc2hlbWVQYWdlc1tpbmRleF0sIGluZGV4KTtcclxuXHJcblx0cmV0dXJuICtpbnB1dF9wYWdlICsgc2hlbWVQYWdlc1tpbmRleF0gKyBpbmRleDtcclxufVxyXG4vL1xyXG5mdW5jdGlvbiBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgpIHtcclxuXHRcclxuXHRjb25zdCBpbnB1dF9wYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJXb3Jrc1BhZ2VJbnB1dCcpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhpbnB1dF9wYWdlLCBpbmRleCk7XHJcblxyXG5cdHJldHVybiAraW5wdXRfcGFnZSArIGluZGV4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzU3VtKSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyV29ya3NQYWdlSW5wdXQnKTtcclxuXHJcblx0Y29uc29sZS5sb2coaW5wdXRfcGFnZSwgaW5kZXgsIHNoZW1lUGFnZXNTdW0pO1xyXG5cclxuXHRyZXR1cm4gK2lucHV0X3BhZ2UgKyBpbmRleCArc2hlbWVQYWdlc1N1bS5sZW5ndGg7XHJcbn1cclxuLy9cclxuZXhwb3J0IHsgYWRkT3JkZXJQYWdlTnVtYmVyLCAgYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIsIGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciwgYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcn0gO1xyXG4iLCJmdW5jdGlvbiBtYWluT2JqZWN0Q29sbGVjdChzdHIpIHtcclxuXHRsZXQgYXJyYXlPZlVzZXJJbnB1dCA9IHN0ci5zcGxpdCgnXFxuJyk7XHJcblxyXG5cdGxldCByZXN1bHRBcnJheSA9IFtdO1xyXG5cclxuXHRsZXQgbGVnZW5kQXJyYXkgPSBhcnJheU9mVXNlcklucHV0WzBdLnNwbGl0KCcsJyk7XHJcblxyXG5cdGZ1bmN0aW9uIFNFTShhcnIpIHtcclxuXHJcblx0XHR0aGlzLmNvdW50T2ZTRU0gPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JyldO1xyXG5cdFx0dGhpcy5icmVha2VyMVZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIxJyldLnNwbGl0KCcgJylbMF07XHJcblx0XHR0aGlzLmJyZWFrZXIyVmFsdWUgPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ0nQndCe0Jxf0JDQkjInKV0uc3BsaXQoJyAnKVswXSB8fCBudWxsO1xyXG5cdFx0dGhpcy5TRU1UeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QqdCj0K0nKV07XHJcblx0XHR0aGlzLmNvdW50ZXJDb3VudEluU0VNID0gK3RoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzNdO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxXHJcblx0XHRcdCYmIGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSAn0LInO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQstCyJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5waWxsYXJUeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QntCf0J7QoNCrJyldLnRvTG93ZXJDYXNlKCkgfHwgJ9GB0LItOTUnO1xyXG5cclxuXHRcdGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzMnKSB7XHJcblx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJ1xyXG5cdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gMztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJ1xyXG5cdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAxO1xyXG5cdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gMTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJ1xyXG5cdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gbnVsbDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJ1xyXG5cdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAxO1xyXG5cdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm91dEJyZWFrZXIxID0gYCR7dGhpcy5waGFzZTFWYWx1ZX0gLSAke3RoaXMuYnJlYWtlcjFWYWx1ZX1gO1xyXG5cdFx0dGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMiA/XHJcblx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBgJHt0aGlzLnBoYXNlMlZhbHVlfSAtICR7dGhpcy5icmVha2VyMlZhbHVlfWAgOlxyXG5cdFx0XHR0aGlzLm91dEJyZWFrZXIyID0gbnVsbDtcclxuXHJcblxyXG5cdFx0aWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEgJiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICfQsicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEgJiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICfQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgKHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LonKSB8fCAodGhpcy5pbnB1dEZyb21TZW0gPT09ICfQutCyJykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LLQuicpKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6INC60LDQsdC10LvRjNC90LDRjyDQuCDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6INC60LDQsdC10LvRjNC90YvQtS4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6IDPRhCAtINCy0L7Qt9C00YPRiNC90LDRjywgMdGEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDogM9GEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLCAx0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6INCy0L7Qt9C00YPRiNC90YvQtS4nO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxlcnQoYCR7dGhpcy5pbnB1dEZyb21TZW19INC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIgJHt0aGlzLlNFTVR5cGV9LCDQv9C10YDQtdC/0YDQvtCy0LXRgNGM0YLQtSDQstCy0L7QtNC40LzRi9C1INC00LDQvdC90YvQtWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0LItOTUnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCSLTk1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItMTEwJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQoi0xMDguNic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0KItMTA4LjcnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzInKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y8nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzQnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTInO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JA7ICR7dGhpcy5icmVha2VyMlZhbHVlfSDQkCkuICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259LiDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCYDtcclxuXHRcdFx0dGhpcy5kZWNyaXB0aW9uRm9yV29ya3MgPSBgJHt0aGlzLlNFTVR5cGV9LiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufWA7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheU9mVXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAoYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpLmxlbmd0aCA9PT0gNikge1xyXG5cdFx0XHRyZXN1bHRBcnJheS5wdXNoKG5ldyBTRU0oYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpKSk7XHJcblx0XHR9IGVsc2UgaWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPiA0KSB7XHJcblx0XHRcdGFsZXJ0KGDQtNC70LjQvdCwINC80LDRgdGB0LjQstCwICR7YXJyYXlPZlVzZXJJbnB1dFtpXX0gPSAke2FycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGh9INCy0LzQtdGB0YLQviA2IFxcbiDQtNCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyINC90LUg0LHRg9C00LXRgiDQvtCx0YDQsNCx0L7RgtCw0L1gKTtcclxuXHRcdCAgfVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhyZXN1bHRBcnJheSk7XHJcblxyXG5cdHJlc3VsdEFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGlmIChhLlNFTVR5cGUgPiBiLlNFTVR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbk9iamVjdENvbGxlY3Q7XHJcbiIsImltcG9ydCBicmVha2VyRGVmYXVsdFR5cGUgZnJvbSAnLi9icmVha2VyLWRlZmF1bHQtdHlwZSc7XHJcblxyXG4vLyDRhNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvRj9GO0YnQsNGPINGE0L7RgNC80YMg0LTQu9GPINCy0YvQutC70Y7Rh9Cw0YLQtdC70LXQuVxyXG5mdW5jdGlvbiBjcmVhdGVCcmVha2VyV3JhcHBlcihwYWlyT2ZQaGFzZUFuZEFtcGVyZSwgaW5kZXgsIG91dEJyZWFrZXJEZWZhdWx0LCBpbnB1dEJyZWFrZXJEZWZhdWx0KSB7XHJcblx0Y29uc3QgYnJha2Vyc1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJha2Vyc193cmFwcGVyJyk7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQvtCx0LXRgNGC0LrQuFxyXG5cdGNvbnN0IGJyZWFrZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdGJyZWFrZXJEaXYuY2xhc3NMaXN0LmFkZCgnYnJlYWtlcl9kaXYnKTtcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INCy0LXRgNGF0L3QtdCz0L4g0KBcclxuXHRjb25zdCBicmVha2VyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdGJyZWFrZXJQLmNsYXNzTGlzdC5hZGQoJ2JyZWFrZXJfcCcpO1xyXG5cdGJyZWFrZXJQLmlubmVySFRNTCA9ICc8dT4nICsgJ9CS0LXQtNC40YLQtSDQtNCw0L3QvdGL0LUg0LTQu9GPINCp0KPQrSDRgSDQvtGC0YXQvtC00Y/RidC10Lkg0LvQuNC90LjQtdC5OiAnICsgJzxiPicgKyBwYWlyT2ZQaGFzZUFuZEFtcGVyZS5zcGxpdCgnIC0gJylbMF0gKyAn0KQgJyArIHBhaXJPZlBoYXNlQW5kQW1wZXJlLnNwbGl0KCcgLSAnKVsxXSArICdBJyArICc8L2I+JyArICc8L3U+JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INCgINC00LvRjyDRgNCw0LTQuNC+XHJcblx0Y29uc3QgcmFkaW9QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0cmFkaW9QLmNsYXNzTGlzdC5hZGQoJ3JhZGlvX3AnKTtcclxuXHRyYWRpb1AuaW5uZXJIVE1MID0gJ9CS0YvQsdC10YDQuNGC0LUg0YLQuNC/INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsDonO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LvQtdC50LHQu9CwINC00LvRjyDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYxXHJcblx0Y29uc3QgcmFkaW9MYWJlbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcblx0cmFkaW9MYWJlbDEuc2V0QXR0cmlidXRlKCdmb3InLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTEnKTtcclxuXHRyYWRpb0xhYmVsMS5pbm5lckhUTUwgPSAn0YDRg9Cx0LjQu9GM0L3QuNC6JyArICc8YnI+JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDRgNCw0LTQuNC+IOKEljFcclxuXHRjb25zdCBicmVha2VyUmFkaW8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG5cdGJyZWFrZXJSYWRpbzEuc2V0QXR0cmlidXRlKCduYW1lJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4KTtcclxuXHRicmVha2VyUmFkaW8xLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTEnKTtcclxuXHRicmVha2VyUmFkaW8xLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LvQtdC50LHQu9CwINC00LvRjyDQutC90L7Qv9C60Lgg0YDQsNC00LjQviDihJYyXHJcblx0Y29uc3QgcmFkaW9MYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIik7XHJcblx0cmFkaW9MYWJlbDIuc2V0QXR0cmlidXRlKCdmb3InLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXggKyAnLTInKTtcclxuXHRyYWRpb0xhYmVsMi5pbm5lckhUTUwgPSAn0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQuSDQstGL0LrQu9GO0YfQsNGC0LXQu9GMJyArICc8YnI+JztcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC60L3QvtC/0LrQuCDRgNCw0LTQuNC+IOKEljJcdFxyXG5cdGNvbnN0IGJyZWFrZXJSYWRpbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcblx0YnJlYWtlclJhZGlvMi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYnJlYWtlci1yYWRpby0nICsgaW5kZXgpO1xyXG5cdGJyZWFrZXJSYWRpbzIuc2V0QXR0cmlidXRlKCdpZCcsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCArICctMicpO1xyXG5cdGJyZWFrZXJSYWRpbzIuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xyXG5cdGJyZWFrZXJSYWRpbzIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQu9C10LnQsdC70LAg0LTQu9GPINC60L3QvtC/0LrQuCDRgNCw0LTQuNC+IOKEljNcclxuXHRjb25zdCByYWRpb0xhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKTtcclxuXHRyYWRpb0xhYmVsMy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCArICctMycpO1xyXG5cdHJhZGlvTGFiZWwzLmlubmVySFRNTCA9ICfQstGL0LrQu9GO0YfQsNGC0LXQu9GMINC90LDQs9GA0YPQt9C60LgnO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0LrQvdC+0L/QutC4INGA0LDQtNC40L4g4oSWM1x0XHJcblx0Y29uc3QgYnJlYWtlclJhZGlvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuXHRicmVha2VyUmFkaW8zLnNldEF0dHJpYnV0ZSgnbmFtZScsICdicmVha2VyLXJhZGlvLScgKyBpbmRleCk7XHJcblx0YnJlYWtlclJhZGlvMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JyZWFrZXItcmFkaW8tJyArIGluZGV4ICsgJy0zJyk7XHJcblx0YnJlYWtlclJhZGlvMy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INCgINC00LvRjyDQuNC90L/Rg9GC0LAg0LLQstC+0LTQvdC+0LPQviDQsNC/0L/QsNGA0LDRgtCwXHJcblx0Y29uc3QgaW5wdXRCcmVha2VyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdGlucHV0QnJlYWtlclAuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcCcpO1xyXG5cdGlucHV0QnJlYWtlclAuaW5uZXJIVE1MID0gJ9Cc0LDRgNC60LAsIEnQvdC+0LwuINCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsDonXHJcblx0Ly8g0YHQvtC30LTQsNC90LjQtSDQuNC90L/Rg9GC0LAg0LLQstC+0LTQvdC+0LPQviDQsNC/0L/QsNGA0LDRgtCwXHJcblx0Y29uc3QgaW5wdXRCcmVha2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG5cdGlucHV0QnJlYWtlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0LWJyZWFrZXInICsgaW5kZXgpO1xyXG5cdGlucHV0QnJlYWtlci5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnMjAnKTtcclxuXHRpbnB1dEJyZWFrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHRpbnB1dEJyZWFrZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGlucHV0QnJlYWtlckRlZmF1bHQpO1xyXG5cdC8vINGB0L7Qt9C00LDQvdC40LUg0KAg0LTQu9GPINC40L3Qv9GD0YLQsCDQvtGC0YXQvtC00Y/RidC10LPQviDQkNCSXHJcblx0Y29uc3Qgb3V0QnJlYWtlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcclxuXHRvdXRCcmVha2VyUC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1wJyk7XHJcblx0b3V0QnJlYWtlclAuaW5uZXJIVE1MID0gJ9Cc0LDRgNC60LAsIEnQvdC+0LwuINCQ0JIg0L3QsCDQvtGC0YXQvtC00Y/RidC40YUg0LvQuNC90LjRj9GFOidcclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INC40L3Qv9GD0YLQsCDQvtGC0YXQvtC00Y/RidC10LPQviDQkNCSXHJcblx0Y29uc3Qgb3V0QnJlYWtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuXHRvdXRCcmVha2VyLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3V0LWJyZWFrZXInICsgaW5kZXgpO1xyXG5cdG91dEJyZWFrZXIuc2V0QXR0cmlidXRlKCdzaXplJywgJzIwJyk7XHJcblx0b3V0QnJlYWtlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5cdG91dEJyZWFrZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG91dEJyZWFrZXJEZWZhdWx0KTsgLy8gb3V0QnJlYWtlcnJEZWZhdWx0VmFsdWUg0L7QsdGP0LLQu9GP0LXRgtGB0Y8g0L3QuNC20LUg0LIg0YbQuNC60LvQtVxyXG5cclxuXHQvLyDQstGB0YLQsNCy0LvRj9C10LxcclxuXHRicmVha2VyRGl2LmFwcGVuZChicmVha2VyUCwgcmFkaW9QKTtcclxuXHQvLyDQstGB0YLQsNCy0LvRj9C10Lwg0LrQvdC+0L/QutC4INC4INC70LXQudCx0LvRi1xyXG5cdGJyZWFrZXJEaXYuYXBwZW5kKGJyZWFrZXJSYWRpbzEsIHJhZGlvTGFiZWwxLCBicmVha2VyUmFkaW8yLCByYWRpb0xhYmVsMiwgYnJlYWtlclJhZGlvMywgcmFkaW9MYWJlbDMpO1xyXG5cdC8vINCy0YHRgtCw0LLQu9GP0LXQvCDQuNC90L/Rg9GC0YtcclxuXHRicmVha2VyRGl2LmFwcGVuZChpbnB1dEJyZWFrZXJQLCBpbnB1dEJyZWFrZXIsIG91dEJyZWFrZXJQLCBvdXRCcmVha2VyKTtcclxuXHJcblx0YnJha2Vyc1dyYXBwZXIuYXBwZW5kKGJyZWFrZXJEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCcmVha2Vyc0Nob2lzZShhcnIpe1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG5cdFx0bGV0IGJyZWFrZXJzQW1wZXJzVmFsdWVzID0gWzEwLCAxMywgMTYsIDIwLCAyNSwgMzIsIDQwLCA1MCwgNjMsIDgwLCAxMDAsIDEyNV07XHJcblx0ICBcclxuXHRcdGxldCBwaGFzZSA9IGFycltpXS5zcGxpdCgnIC0gJylbMF07XHJcblx0XHRsZXQgYW1wZXJlT3V0ID0gYXJyW2ldLnNwbGl0KCcgLSAnKVsxXTtcclxuXHRcdGxldCBhbXBlcmVJbiA9IGJyZWFrZXJzQW1wZXJzVmFsdWVzW2JyZWFrZXJzQW1wZXJzVmFsdWVzLmluZGV4T2YoK2FtcGVyZU91dCkgKyAxXVxyXG5cdCAgXHJcblx0XHRsZXQgb3V0QnJlYWtlclR5cGUgPSBicmVha2VyRGVmYXVsdFR5cGUoK2FtcGVyZU91dCk7XHJcblx0XHRsZXQgaW5wdXRCcmVha2VyVHlwZSA9IGJyZWFrZXJEZWZhdWx0VHlwZShhbXBlcmVJbik7XHJcblx0XHQvLyDQt9C90LDRh9C10L3QuNGPINC/0L4g0YPQvNC+0YfQsNC90LjRjiDQtNC70Y8g0LjQvdC/0YPRgtC+0LIg0LLQstC+0LTQsCDQstGL0LrQu9GO0YfQsNGC0LXQu9C10LlcclxuXHRcdGxldCBvdXRCcmVha2VyckRlZmF1bHRWYWx1ZSA9IGAke291dEJyZWFrZXJUeXBlfSAke3BoYXNlfVAgQyR7YW1wZXJlT3V0fWA7XHJcblx0XHRsZXQgaW5wdXRCcmVha2VyRGVmYXVsdFZhbHVlID0gYCR7aW5wdXRCcmVha2VyVHlwZX0gJHtwaGFzZX1QIEMke2FtcGVyZUlufWA7XHJcblx0XHRjcmVhdGVCcmVha2VyV3JhcHBlcihhcnJbaV0sIGksIG91dEJyZWFrZXJyRGVmYXVsdFZhbHVlLCBpbnB1dEJyZWFrZXJEZWZhdWx0VmFsdWUpO1xyXG5cdCAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRCcmVha2Vyc0Nob2lzZTtcclxuIiwiZnVuY3Rpb24gYWRkU3VtU2VtKGFyck9mU2VtKSB7XHJcblx0Y29uc3QgdGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb190YWJsZScpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdUQk9EWScpWzBdO1xyXG5cclxuXHQvL9Ch0L7Qt9C00LDQtdC8INGB0YLRgNC+0LrRgyDRgtCw0LHQu9C40YbRiyDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LXQtVx0XHRcclxuXHRjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dGJvZHkuYXBwZW5kKHJvdzEsIHJvdzIpO1xyXG5cdC8vINCh0L7Qt9C00LDQtdC8INGP0YfQtdC50LrQuCDQsiDQstGL0YjQtdGB0L7Qt9C00LDQvdC90L7QuSDRgdGC0YDQvtC60LVcclxuXHQvLyDQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0YLRhVxyXG5cdGNvbnN0IHRkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV8xLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHRjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfMi5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQxXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzMuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDJfMS5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQyXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQyXzIuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMl8zLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHJcblx0cm93MS5hcHBlbmQodGQxXzEsIHRkMV8yLCB0ZDFfMyk7XHJcblx0cm93Mi5hcHBlbmQodGQyXzEsIHRkMl8yLCB0ZDJfMyk7XHJcblxyXG5cdGxldCBzdW1PZkNvdW50ID0gMDtcclxuXHRsZXQgc3VtT2ZTZW0gPSAwO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyck9mU2VtLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRzdW1PZlNlbSArPSBhcnJPZlNlbVtpXS5jb3VudE9mU0VNO1xyXG5cdFx0c3VtT2ZDb3VudCArPSBhcnJPZlNlbVtpXS5jb3VudE9mU0VNICogYXJyT2ZTZW1baV0uY291bnRlckNvdW50SW5TRU07XHJcblx0fVxyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0dGQxXzIuaW5uZXJIVE1MID0gJ9CS0YHQtdCz0L4g0YHRh9C10YLRh9C40LrQvtCyOic7XHJcblx0dGQxXzMuaW5uZXJIVE1MID0gc3VtT2ZDb3VudDtcclxuXHJcblx0dGQyXzIuaW5uZXJIVE1MID0gJ9CS0YHQtdCz0L4g0YnQuNGC0LrQvtCyOic7XHJcblx0dGQyXzMuaW5uZXJIVE1MID0gc3VtT2ZTZW07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFN1bVNlbTtcclxuIiwiZnVuY3Rpb24gYnJlYWtlckRlZmF1bHRUeXBlKHZhbHVlKSB7XHJcblx0bGV0IGJyZWFrZXJUeXBlO1xyXG5cdGlmICh2YWx1ZSA8PSA2Mykge1xyXG5cdFx0YnJlYWtlclR5cGUgPSAn0JLQkC00Ny0yOSc7XHJcblx0fSBlbHNlIGlmICh2YWx1ZSA8PSAxMDApIHtcclxuXHRcdGJyZWFrZXJUeXBlID0gJ9CS0JAtNDctMTAwJztcclxuXHR9IGVsc2UgaWYgKHZhbHVlID0gMTI1KSB7XHJcblx0XHRicmVha2VyVHlwZSA9ICfQktCQLTQ3LTE1MCc7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJyZWFrZXJUeXBlID0gJyc7XHJcblx0fVxyXG5cdHJldHVybiBicmVha2VyVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnJlYWtlckRlZmF1bHRUeXBlO1xyXG4iLCJmdW5jdGlvbiBjb250YWN0c1RhYmxlKHNlbSwgZGF0YU9mUHJvamVjdCkge1xyXG5cclxuXHQvLyDRgdC+0LfQtNCw0L3QuNC1INCy0LXRgNGF0L3QtdC5INGC0LDQsdC70LjRhtGLINC+0L/RgNC+0YHQvdC+0LPQvlxyXG5cdGNvbnN0IGRlc2NyaXB0VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcblx0ZGVzY3JpcHRUYWJsZS5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdF90YWJsZScpO1xyXG5cclxuXHRjb25zdCB0YWJsZUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEJPRFlcIik7XHJcblx0ZGVzY3JpcHRUYWJsZS5hcHBlbmQodGFibGVCb2R5KTtcclxuXHQvLyDRgdGC0YDQvtC60LhcclxuXHRjb25zdCByb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3c0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvdzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHQvLyDQvNC10YHRgtC+INCz0LTQtSDQsdGD0LTRg9GCINGB0YLRgNC+0LrQuFxyXG5cdHRhYmxlQm9keS5hcHBlbmQocm93MSwgcm93Miwgcm93Mywgcm93NCwgcm93NSwgcm93Nik7XHJcblxyXG5cdC8vINGP0YfQtdC50LrQuFxyXG5cdGNvbnN0IHRkMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkM18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMik7XHJcblx0cm93Mi5hcHBlbmQodGQyXzEsIHRkMl8yKTtcclxuXHRyb3czLmFwcGVuZCh0ZDNfMSwgdGQzXzIpO1xyXG5cdHJvdzQuYXBwZW5kKHRkNF8xLCB0ZDRfMik7XHJcblx0cm93NS5hcHBlbmQodGQ1XzEsIHRkNV8yKTtcclxuXHRyb3c2LmFwcGVuZCh0ZDZfMSwgdGQ2XzIpO1xyXG5cclxuXHQvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcblx0dGQxXzEudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC+0YDQs9Cw0L3QuNC30LDRhtC40LgnO1xyXG5cdHRkMl8xLnRleHRDb250ZW50ID0gJ9Cf0YDQtdC00YHRgtCw0LLQuNGC0LXQu9GMINC30LDQutCw0LfRh9C40LrQsCc7XHJcblx0dGQzXzEudGV4dENvbnRlbnQgPSAn0JrQvtC90YLQsNC60YLQvdGL0Lkg0YLQtdC70LXRhNC+0L0nO1xyXG5cdHRkNF8xLnRleHRDb250ZW50ID0gJ9Ci0LjQvyDRidC40YLQutCwJztcclxuXHR0ZDRfMi50ZXh0Q29udGVudCA9IHNlbS5TRU1UeXBlO1xyXG5cdHRkNV8xLnRleHRDb250ZW50ID0gJ9Ca0L7Qu9C40YfQtdGB0YLQstC+INGJ0LjRgtC60L7Qsic7XHJcblx0dGQ1XzIudGV4dENvbnRlbnQgPSBg0KHQvC4gJHtkYXRhT2ZQcm9qZWN0LmNpcGhlcn0tMTAzLTcwLdCQ0KPQrS7QodCeYDtcclxuXHR0ZDZfMS50ZXh0Q29udGVudCA9ICfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0L7QsdGK0LXQutGC0LAnO1xyXG5cclxuXHRyZXR1cm4gZGVzY3JpcHRUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdHNUYWJsZTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlT3JkZXJUYWJsZShpbmRleCkge1xyXG5cclxuXHRjb25zdCBvcmRlclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdG9yZGVyVGFibGUuY2xhc3NMaXN0LmFkZCgnb3JkZXJfdGFibGUnKTtcclxuXHJcblx0Y29uc3QgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEJPRFlcIik7XHJcblx0b3JkZXJUYWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcblx0Ly8g0YHRgtGA0L7QutC4XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkgKz0gMSkge1xyXG5cdFx0bGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRcdC8vIHJvdy5jbGFzc0xpc3QuYWRkKCdvcmRlcl9yb3cnICsgaW5kZXggKyAnXycgKyBpKTtcclxuXHRcdHJvdy5jbGFzc0xpc3QuYWRkKCdvcmRlcl9yb3cnLCAnb3JkZXJfcm93JyArIGluZGV4ICsgJ18nICsgaSk7XHJcblx0XHR0Qm9keS5hcHBlbmQocm93KTtcclxuXHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPD0gMjsgaiArPSAxKSB7XHJcblx0XHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRcdFx0XHRcdC8vIHRkLmNsYXNzTGlzdC5hZGQoJ3RkJyArIGkgKyAnXycgKyBqKTtcclxuXHRcdFx0dGQuY2xhc3NMaXN0LmFkZCgndGQnICsgaW5kZXggKyAnXycgKyBpICsgJ18nICsgaik7XHJcblx0XHRcdHRkLnRleHRDb250ZW50ID0gJyc7XHJcblx0XHRcdHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb3JkZXJUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3JkZXJUYWJsZTtcclxuIiwiZnVuY3Rpb24gZmluZFRkKGxpc3QsIHJvdywgY29sdW1uKXtcclxuXHRsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZCcgKyBsaXN0ICsgJ18nICsgcm93ICsgJ18nICsgY29sdW1uKTtcclxuXHRyZXR1cm4gZWxlbTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3F1YXJlIChmbGFnMSwgZmxhZzIsIHRleHQpe1xyXG5cdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHJcblx0Y29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcblx0c3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG5cdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XHJcblx0cGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0aWYgKGZsYWcxID09PSAxKSB7XHJcblx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lubGluZV9ibG9jaycpO1xyXG5cdH1cclxuXHRpZiAoZmxhZzIgPT09IDEpIHtcclxuXHRcdHBhcmEuY2xhc3NMaXN0LmFkZCgnaW5saW5lX2Jsb2NrJyk7XHJcblx0fVxyXG5cdHdyYXBwZXIuYXBwZW5kKHNxdWFyZSwgcGFyYSk7XHJcblx0cmV0dXJuIHdyYXBwZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVAgKHRleHQpe1xyXG5cdGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XHJcblx0cGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XHJcblx0cmV0dXJuIHBhcmE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxPcmRlclRhYmxlKHNlbSwgaW5kZXgsIGFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzKSB7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHRsZXQgdGQxXzEgPSBmaW5kVGQoaW5kZXgsIDAsIDApO1xyXG5cdHRkMV8xLnRleHRDb250ZW50ID0gJ+KElic7XHJcblxyXG5cdGxldCB0ZDFfMiA9IGZpbmRUZChpbmRleCwgMCwgMSk7XHJcblx0dGQxXzIudGV4dENvbnRlbnQgPSAn0JfQsNC/0YDQsNGI0LjQstCw0LXQvNGL0LUg0LTQsNC90L3Ri9C1JztcclxuXHJcblx0bGV0IHRkMV8zID0gZmluZFRkKGluZGV4LCAwLCAyKTtcclxuXHR0ZDFfMy50ZXh0Q29udGVudCA9ICfQntGC0LLQtdGCINC30LDQutCw0LfRh9C40LrQsCc7XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgMTI7IGkgKz0gMSkge1xyXG5cdFx0bGV0IHRkMSA9IGZpbmRUZChpbmRleCwgaSwgMCk7XHJcblx0XHR0ZDEudGV4dENvbnRlbnQgPSBpO1xyXG5cdH1cclxuXHJcblx0Ly8g0KLQuNC/INC40YHQv9C+0LvQvdC10L3QuNGPINC60L7RgNC/0YPRgdCwXHJcblx0bGV0IHRkMl8yID0gZmluZFRkKGluZGV4LCAxLCAxKTtcclxuXHR0ZDJfMi50ZXh0Q29udGVudCA9ICfQotC40L8g0LjRgdC/0L7Qu9C90LXQvdC40Y8g0LrQvtGA0L/Rg9GB0LAnO1xyXG5cclxuXHRsZXQgdGQyXzMgPSBmaW5kVGQoaW5kZXgsIDEsIDIpO1xyXG5cdHRkMl8zLmFwcGVuZChjcmVhdGVTcXVhcmUoMSwgMSwgJ9C80LXRgtCw0LvQu9C40YfQtdGB0LrQuNC5JyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAxLCfQv9C70LDRgdGC0LzQsNGB0YHQvtCy0YvQuScpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMV0gPT09ICcxJykge1xyXG5cdFx0dGQyXzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzFdID09PSAnMicpIHtcclxuXHRcdHRkMl8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0KLQuNC/INGJ0LjRgtC60LBcclxuXHRsZXQgdGQzXzIgPSBmaW5kVGQoaW5kZXgsIDIsIDEpO1xyXG5cdHRkM18yLnRleHRDb250ZW50ID0gJ9Ci0LjQvyDRidC40YLQutCwJztcclxuXHJcblx0bGV0IHRkM18zID0gZmluZFRkKGluZGV4LCAyLCAyKTtcclxuXHR0ZDNfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDAsIDAsICfQvtC00L3QvtGE0LDQt9C90YvQuScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9GC0YDQtdGF0YTQsNC30L3Ri9C5JyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQvtC00L3QvtGE0LDQt9C90YvQuSDQuCDRgtGA0LXRhdGE0LDQt9C90YvQuScpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJykge1xyXG5cdFx0dGQzXzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicpIHtcclxuXHRcdHRkM18zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzMnKSB7XHJcblx0XHR0ZDNfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDQstCy0L7QtNCwXHJcblx0bGV0IHRkNF8yID0gZmluZFRkKGluZGV4LCAzLCAxKTtcclxuXHR0ZDRfMi50ZXh0Q29udGVudCA9ICfQotC40L8g0LLQstC+0LTQsCc7XHJcblxyXG5cdGxldCB0ZDRfMyA9IGZpbmRUZChpbmRleCwgMywgMik7XHJcblx0dGQ0XzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgxLCAxLCAn0LLQvtC30LTRg9GI0L3Ri9C5JyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgxLCAxLCAn0LrQsNCx0LXQu9GM0L3Ri9C5JykpO1xyXG5cclxuXHRpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnIHx8IHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0dGQ0XzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMicpIHtcclxuXHRcdHRkNF8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0KLQuNC/INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsFxyXG5cdGxldCB0ZDVfMiA9IGZpbmRUZChpbmRleCwgNCwgMSk7XHJcblx0dGQ1XzIudGV4dENvbnRlbnQgPSAn0KLQuNC/INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsCc7XHJcblxyXG5cdGxldCB0ZDVfMyA9IGZpbmRUZChpbmRleCwgNCwgMik7XHJcblx0dGQ1XzMuYXBwZW5kKGNyZWF0ZVNxdWFyZSgwLCAwLCAn0YDRg9Cx0LjQu9GM0L3QuNC6JyksIFxyXG5cdGNyZWF0ZVNxdWFyZSgwLCAwLCAn0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQuSDQstGL0LrQu9GO0YfQsNGC0LXQu9GMJyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQstGL0LrQu9GO0YfQsNGC0LXQu9GMINC90LDQs9GA0YPQt9C60LgnKSk7XHJcblxyXG5cdGxldCBpbmRleE9mYnJlYWtlcjEgPSBhcnJheU9mUGhhc2VzQW5kQW1wZXJlcy5pbmRleE9mKHNlbS5vdXRCcmVha2VyMSk7XHJcblx0bGV0IGluZGV4T2ZicmVha2VyMiA9IGFycmF5T2ZQaGFzZXNBbmRBbXBlcmVzLmluZGV4T2Yoc2VtLm91dEJyZWFrZXIyKTtcclxuXHJcblx0bGV0IGJyZWFrZXJSYWRpb0Nob2ljZTFfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBicmVha2VyLXJhZGlvLSR7aW5kZXhPZmJyZWFrZXIxfS0xYCk7XHJcblx0bGV0IGJyZWFrZXJSYWRpb0Nob2ljZTFfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBicmVha2VyLXJhZGlvLSR7aW5kZXhPZmJyZWFrZXIxfS0yYCk7XHJcblx0bGV0IGJyZWFrZXJSYWRpb0Nob2ljZTFfMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBicmVha2VyLXJhZGlvLSR7aW5kZXhPZmJyZWFrZXIxfS0zYCk7XHJcblxyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UyXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMn0tMWApO1xyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMn0tMmApO1xyXG5cdGxldCBicmVha2VyUmFkaW9DaG9pY2UyXzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnJlYWtlci1yYWRpby0ke2luZGV4T2ZicmVha2VyMn0tM2ApO1xyXG5cclxuXHRpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMV8xLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMV8yLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMV8zLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHRpZiAoYnJlYWtlclJhZGlvQ2hvaWNlMl8xICE9PSBudWxsICYmIGJyZWFrZXJSYWRpb0Nob2ljZTJfMS5jaGVja2VkKSB7XHJcblx0XHR0ZDVfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKGJyZWFrZXJSYWRpb0Nob2ljZTJfMiAhPT0gbnVsbCAmJiBicmVha2VyUmFkaW9DaG9pY2UyXzIuY2hlY2tlZCkge1xyXG5cdFx0dGQ1XzMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChicmVha2VyUmFkaW9DaG9pY2UyXzMgIT09IG51bGwgJiYgYnJlYWtlclJhZGlvQ2hvaWNlMl8zLmNoZWNrZWQpIHtcclxuXHRcdHRkNV8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0JzQsNGA0LrQsCwgSdC90L7QvCDQkNCSXHJcblx0bGV0IHRkNl8yID0gZmluZFRkKGluZGV4LCA1LCAxKTtcclxuXHR0ZDZfMi50ZXh0Q29udGVudCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8INCy0LLQvtC00L3QvtCz0L4g0LDQv9C/0LDRgNCw0YLQsCc7XHJcblxyXG5cdGxldCB0ZDZfMyA9IGZpbmRUZChpbmRleCwgNSwgMik7XHJcblxyXG5cdGxldCBpbnB1dEJyZWFrZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlucHV0LWJyZWFrZXIke2luZGV4T2ZicmVha2VyMX1gKTtcclxuXHRsZXQgaW5wdXRCcmVha2VyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dC1icmVha2VyJHtpbmRleE9mYnJlYWtlcjJ9YCk7XHJcblxyXG5cdGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDEpe1xyXG5cdFx0dGQ2XzMudGV4dENvbnRlbnQgPSBpbnB1dEJyZWFrZXIxLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHR0ZDZfMy5pbm5lckhUTUwgPSBpbnB1dEJyZWFrZXIxLnZhbHVlICsgJzxicj4nICsgaW5wdXRCcmVha2VyMi52YWx1ZTtcclxuXHR9XHJcblxyXG5cdC8vINCi0LjQvyDQvtGC0YXQvtC00Y/RidC10Lkg0LvQuNC90LjQuFxyXG5cdGxldCB0ZDdfMiA9IGZpbmRUZChpbmRleCwgNiwgMSk7XHJcblx0dGQ3XzIudGV4dENvbnRlbnQgPSAn0KLQuNC/INC+0YLRhdC+0LTRj9GJ0LXQuSDQu9C40L3QuNC4JztcclxuXHJcblx0bGV0IHRkN18zID0gZmluZFRkKGluZGV4LCA2LCAyKTtcclxuXHR0ZDdfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDEsIDAsICfQstC+0LfQtNGD0YjQvdCw0Y8nKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDAsICcz0YQg0LLQvtC30LTRg9GI0L3QsNGPLCAx0YQg0LrQsNCx0LXQu9GM0L3QsNGPJyksXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDAsICfQutCw0LHQtdC70YzQvdCw0Y8nKSxcclxuXHRjcmVhdGVTcXVhcmUoMSwgMCwgJzPRhCDQutCw0LHQtdC70YzQvdCw0Y8sIDHRhCDQstC+0LfQtNGD0YjQvdCw0Y8nKSxcclxuXHRjcmVhdGVTcXVhcmUoMSwgMCwgJzEg0LrQsNCx0LXQu9GM0L3QsNGPLCAxINCy0L7Qt9C00YPRiNC90LDRjycpKTtcclxuXHJcblx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSB7XHJcblx0XHR0ZDdfMy5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcblx0XHR0ZDdfMy5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcclxuXHRcdHRkN18zLmNoaWxkTm9kZXNbM10uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykge1xyXG5cdFx0dGQ3XzMuY2hpbGROb2Rlc1s0XS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGFsZXJ0KGDRh9GC0L4t0YLQviDQvdC1INGC0L4g0YEg0YLQuNC/0L7QvCDQvtGC0YXQvtC00Y/RidC10Lkg0LIgJHtzZW19LiDQn9GA0L7QstC10YDRj9C50YLQtSAke3NlbS5pbnB1dEZyb21TZW19YCk7XHJcblx0fVxyXG5cclxuXHQvLyDQnNCw0YDQutCwLCBJ0L3QvtC8LiDQkNCSXHJcblx0bGV0IHRkOF8yID0gZmluZFRkKGluZGV4LCA3LCAxKTtcclxuXHR0ZDhfMi50ZXh0Q29udGVudCA9ICfQnNCw0YDQutCwLCBJ0L3QvtC8LiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtCz0L4g0LLRi9C60LvRjtGH0LDRgtC10LvRjyDQvdCwINC+0YLRhdC+0LTRj9GJ0LjRhSDQu9C40L3QuNGP0YUnO1xyXG5cclxuXHRsZXQgdGQ4XzMgPSBmaW5kVGQoaW5kZXgsIDcsIDIpO1xyXG5cclxuXHRsZXQgb3V0QnJlYWtlcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3V0LWJyZWFrZXIke2luZGV4T2ZicmVha2VyMX1gKTtcclxuXHRsZXQgb3V0QnJlYWtlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3V0LWJyZWFrZXIke2luZGV4T2ZicmVha2VyMn1gKTtcclxuXHJcblx0aWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMSl7XHJcblx0XHR0ZDhfMy50ZXh0Q29udGVudCA9IG91dEJyZWFrZXIxLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHR0ZDhfMy5pbm5lckhUTUwgPSBvdXRCcmVha2VyMS52YWx1ZSArICc8YnI+JyArIG91dEJyZWFrZXIyLnZhbHVlO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vINCa0L7Qu9C40YfQtdGB0YLQstC+INGB0YfQtdGC0YfQuNC60L7Qslx0XHJcblx0bGV0IHRkOV8yID0gZmluZFRkKGluZGV4LCA4LCAxKTtcclxuXHR0ZDlfMi50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQviDRgdGH0LXRgtGH0LjQutC+0LInO1xyXG5cclxuXHRsZXQgdGQ5XzMgPSBmaW5kVGQoaW5kZXgsIDgsIDIpO1xyXG5cdHRkOV8zLmFwcGVuZChjcmVhdGVTcXVhcmUoMSwgMSwgJzEnKSwgXHJcblx0Y3JlYXRlU3F1YXJlKDEsIDEsICcyJykpO1xyXG5cclxuXHRpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHR0ZDlfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0dGQ5XzMuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fVxyXG5cclxuXHQvLyDQnNCw0YDQutCwINGB0YfQtdGC0YfQuNC60LBcclxuXHRsZXQgdGQxMF8yID0gZmluZFRkKGluZGV4LCA5LCAxKTtcclxuXHR0ZDEwXzIudGV4dENvbnRlbnQgPSAn0JzQsNGA0LrQsCDRgdGH0LXRgtGH0LjQutCwJztcclxuXHJcblx0bGV0IHRkMTBfMyA9IGZpbmRUZChpbmRleCwgOSwgMik7XHJcblxyXG5cdGxldCBjb3VudGVyMWYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlci0xZicpO1xyXG5cdGxldCBjb3VudGVyM2YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlci0zZicpO1xyXG5cclxuXHRpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMSkge1xyXG5cdFx0dGQxMF8zLnRleHRDb250ZW50ID0gY291bnRlcjFmLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMykge1xyXG5cdFx0dGQxMF8zLnRleHRDb250ZW50ID0gY291bnRlcjNmLnZhbHVlO1xyXG5cdH0gZWxzZSBpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAyICYmIHNlbS5waGFzZTFWYWx1ZSA9PT0gMSAmJiBzZW0ucGhhc2UyVmFsdWUgPT09IDEpIHtcclxuXHRcdC8vIHRkMTBfMy5pbm5lckhUTUwgPSBjb3VudGVyMWYudmFsdWUgKyAnPGJyPicgKyBjb3VudGVyMWYudmFsdWU7XHJcblx0XHR0ZDEwXzMudGV4dENvbnRlbnQgPSBjb3VudGVyMWYudmFsdWU7XHJcblx0fSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIgJiYgc2VtLnBoYXNlMVZhbHVlID09PSAzICYmIHNlbS5waGFzZTJWYWx1ZSA9PT0gMykge1xyXG5cdFx0Ly8gdGQxMF8zLmlubmVySFRNTCA9IGNvdW50ZXIyZi52YWx1ZSArICc8YnI+JyArIGNvdW50ZXIyZi52YWx1ZTtcclxuXHRcdHRkMTBfMy50ZXh0Q29udGVudCA9IGNvdW50ZXIzZi52YWx1ZTtcclxuXHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0ucGhhc2UxVmFsdWUgPT09IDMgJiYgc2VtLnBoYXNlMlZhbHVlID09PSAxKSB7XHJcblx0XHR0ZDEwXzMuaW5uZXJIVE1MID0gY291bnRlcjNmLnZhbHVlICsgJzxicj4nICsgY291bnRlcjFmLnZhbHVlO1xyXG5cdH0gZWxzZSB7IGFsZXJ0KGDRh9GC0L4t0YLQviDQvdC1INGC0L4g0YEg0YTQsNC30LDQvNC4INGDINGB0YfQtdGC0YfQuNC60LAg0LIgJHtzZW0uU0VNVHlwZX1gKX1cclxuXHJcblx0Ly8g0KHQv9C+0YHQvtCxINGD0YHRgtCw0L3QvtCy0LrQuFxyXG5cdGxldCB0ZDExXzIgPSBmaW5kVGQoaW5kZXgsIDEwLCAxKTtcclxuXHR0ZDExXzIudGV4dENvbnRlbnQgPSAn0KHQv9C+0YHQvtCxINGD0YHRgtCw0L3QvtCy0LrQuCDRidC40YLQutCwJztcclxuXHJcblx0bGV0IHRkMTFfMyA9IGZpbmRUZChpbmRleCwgMTAsIDIpO1xyXG5cdHRkMTFfMy5hcHBlbmQoY3JlYXRlU3F1YXJlKDAsIDAsICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L7Qv9C+0YDQtScpLCBcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C90LAg0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y8nKSxcclxuXHRjcmVhdGVTcXVhcmUoMCwgMCwgJ9C90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTInKSk7XHJcblxyXG5cdGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScpIHtcclxuXHRcdHRkMTFfMy5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0dGQxMV8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHR0ZDExXzMuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnNCcpIHtcclxuXHRcdHRkMTFfMy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9XHJcblxyXG5cdC8vINCQ0YDQvNCw0YLRg9GA0LAg0LTQu9GPINGD0YHRgtCw0L3QvtCy0LrQuFxyXG5cdGxldCB0ZDEyXzIgPSBmaW5kVGQoaW5kZXgsIDExLCAxKTtcclxuXHR0ZDEyXzIudGV4dENvbnRlbnQgPSAn0JDRgNC80LDRgtGD0YDQsCDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC4INC4INC60YDQtdC/0LvQtdC90LjRjyDRidC40YLQutCwICjQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YHQv9C+0YHQvtCx0LAg0YPRgdGC0LDQvdC+0LLQutC4KSc7XHJcblxyXG5cdGxldCB0ZDEyXzMgPSBmaW5kVGQoaW5kZXgsIDExLCAyKTtcclxuXHR0ZDEyXzMuYXBwZW5kKGNyZWF0ZVAgKCct0YPRgdGC0LDQvdC+0LLQutCwINC90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQvtC/0L7RgNC1OicpLCBcclxuXHRjcmVhdGVTcXVhcmUoMSwgMSwgJ9C6INC+0L/QvtGA0LUg0KHQki05NScpLCBcclxuXHRcclxuXHRjcmVhdGVTcXVhcmUoMSwgMSwgJ9C6INC+0L/QvtGA0LUg0KHQoi0xMDguNicpLCBcclxuXHRjcmVhdGVTcXVhcmUoMSwgMSwgJ9C6INC+0L/QvtGA0LUg0KHQki0xMTAnKSxcclxuXHRjcmVhdGVTcXVhcmUoMSwgMSwgJ9C6INC+0L/QvtGA0LUg0KHQoi0xMDguNycpLFxyXG5cdGNyZWF0ZVAgKCct0YPRgdGC0LDQvdC+0LLQutCwINC90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LU6JyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQuiDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScpLFxyXG5cdGNyZWF0ZVAgKCct0YPRgdGC0LDQvdC+0LLQutCwINC90LAg0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y86JyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQuiDQstC90LXRiNC90LXQuSDRgdGC0LXQvdC1INC30LTQsNC90LjRjycpLFxyXG5cdGNyZWF0ZVAgKCct0YPRgdGC0LDQvdC+0LLQutCwINC90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTI6JyksXHJcblx0Y3JlYXRlU3F1YXJlKDAsIDAsICfQuiDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTIgKNGC0L7Qu9GM0LrQviDQstC+0LfQtNGD0YjQvdGL0Lkg0LLQstC+0LQpJykpO1xyXG5cclxuXHRpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHNlbS5waWxsYXJUeXBlID09ICfRgdCyLTk1Jykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHNlbS5waWxsYXJUeXBlID09ICfRgdGCLTEwOC42Jykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHNlbS5waWxsYXJUeXBlID09ICfRgdCyLTExMCcpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzNdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiBzZW0ucGlsbGFyVHlwZSA9PSAn0YHRgi0xMDguNycpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzRdLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmFkZCgnc3F1YXJlX2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0dGQxMl8zLmNoaWxkTm9kZXNbNl0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHR0ZDEyXzMuY2hpbGROb2Rlc1s4XS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnNCcpIHtcclxuXHRcdHRkMTJfMy5jaGlsZE5vZGVzWzEwXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9jaGVja2VkJyk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlsbE9yZGVyVGFibGU7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZUxlZ2VuZE9mT3JkZXJMaXN0KCkge1xyXG5cdGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMRUdFTkRcIik7XHJcblx0bGVnZW5kLmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZF90YWJsZScpO1xyXG5cclxuXHRsZWdlbmQuaW5uZXJIVE1MID0gJ9Ce0J/QoNCe0KHQndCr0Jkg0JvQmNCh0KIgPGJyPiDQvdCwINC40LfQs9C+0YLQvtCy0LvQtdC90LjQtSA8YnI+INGJ0LjRgtC60LAg0YPRh9C10YLQsCDRjdC70LXQutGC0YDQvtGN0L3QtdGA0LPQuNC4INCy0YvQvdC+0YHQvdC+0LPQviDRgtC40L/QsCc7XHJcblxyXG5cdHJldHVybiBsZWdlbmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxlZ2VuZE9mT3JkZXJMaXN0O1xyXG4iLCJpbXBvcnQgJy4uL2Nzcy9vcmRlci1saXN0LmNzcyc7XHJcblxyXG5pbXBvcnQgbWFpbk9iamVjdENvbGxlY3QgZnJvbSAnLi9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QnO1xyXG5pbXBvcnQgYWRkQnJlYWtlcnNDaG9pc2UgZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9hZGQtYnJlYWtlcnMtY2hvaXNlJztcclxuaW1wb3J0IGNyZWF0ZUluZm9UYWJsZSBmcm9tICcuL3RhYmxlLWZvci1vcmRlcl9uX3dvcmtzL2NyZWF0ZS1pbmZvLXRhYmxlJztcclxuaW1wb3J0IGNvbnRhY3RzVGFibGUgZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9jb250YWN0cy10YWJsZSc7XHJcbmltcG9ydCBjcmVhdGVMZWdlbmRPZk9yZGVyTGlzdCBmcm9tICcuL2Zvci1vcmRlci1saXN0L2xlZ2VuZC1vZi1vcmRlci1saXN0JztcclxuaW1wb3J0IGNyZWF0ZU9yZGVyVGFibGUgZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9jcmVhdGUtb3JkZXItdGFibGUnO1xyXG5pbXBvcnQgZmlsbE9yZGVyVGFibGUgZnJvbSAnLi9mb3Itb3JkZXItbGlzdC9maWxsLW9yZGVyLXRhYmxlJztcclxuaW1wb3J0IGFkZENpcGhlclRhYmxlIGZyb20gJy4vY2lwaGVyL2FkZC1jaXBoZXItdGFibGUnO1xyXG5pbXBvcnQgYWRkQXNpZGVUYWJsZSBmcm9tICcuL2NpcGhlci9hZGQtYXNpZGUtdGFibGUnO1xyXG5pbXBvcnQgYWRkRm9ybWF0IGZyb20gJy4vY2lwaGVyL2FkZC1mb3JtYXQnO1xyXG5pbXBvcnQgYWRkU3VtU2VtIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvYWRkLXN1bS1zZW0nO1xyXG5cclxubGV0IHVzZXJJbnB1dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklucHV0XCIpO1xyXG51c2VySW5wdXQgPSBtYWluT2JqZWN0Q29sbGVjdCh1c2VySW5wdXQpO1xyXG5jb25zb2xlLmxvZyh1c2VySW5wdXQpO1xyXG5cclxuLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyUGFnZUlucHV0JykpIHtcclxuLy8gICBjb25zdCB1c2VyUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2UnKTtcclxuLy8gICB1c2VyUGFnZUlucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJQYWdlSW5wdXQnKTtcclxuLy8gfVxyXG5cclxubGV0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3REYXRhXCIpKTtcclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuXHJcbmxldCBhcnJDb3VudGVyQnJlYWtlcnMgPSBbXTtcclxuXHJcbmZvciAobGV0IGVsZW0gb2YgdXNlcklucHV0KSB7XHJcbiAgaWYgKGFyckNvdW50ZXJCcmVha2Vycy5pbmRleE9mKGVsZW0ub3V0QnJlYWtlcjEpID09PSAtMSkge1xyXG4gICAgYXJyQ291bnRlckJyZWFrZXJzLnB1c2goZWxlbS5vdXRCcmVha2VyMSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbS5vdXRCcmVha2VyMiAhPT0gbnVsbFxyXG4gICAgJiYgYXJyQ291bnRlckJyZWFrZXJzLmluZGV4T2YoZWxlbS5vdXRCcmVha2VyMikgPT09IC0xKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJDb3VudGVyQnJlYWtlcnMuaW5kZXhPZihlbGVtLm91dEJyZWFrZXIyKSwgZWxlbS5vdXRCcmVha2VyMilcclxuICAgIGFyckNvdW50ZXJCcmVha2Vycy5wdXNoKGVsZW0ub3V0QnJlYWtlcjIpXHJcbiAgfVxyXG59XHJcblxyXG5hcnJDb3VudGVyQnJlYWtlcnMuc29ydCgoYSwgYikgPT4ge1xyXG4gIGlmIChhID4gYikge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coYXJyQ291bnRlckJyZWFrZXJzKTtcclxuYWRkQnJlYWtlcnNDaG9pc2UoYXJyQ291bnRlckJyZWFrZXJzKTtcclxuXHJcbmxldCBnZXRPcmRlckxpc3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1vcmRlci1saXN0cycpO1xyXG5cclxuZ2V0T3JkZXJMaXN0c0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vIGNvbnN0IHVzZXJQYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfcGFnZScpLnZhbHVlO1xyXG4gIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclBhZ2VJbnB1dFwiLCB1c2VyUGFnZUlucHV0KTtcclxuXHJcbiAgY29uc3QgY291bnRlcnNBbmRCcmVha2Vyc1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXInKTtcclxuICBjb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRlX2NvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcblxyXG4gICAgLy8gYWRkIG1haW4gdGFibGVcclxuICAgIGNvbnN0IGluZm9UYWJsZVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb190YWJsZV93cmFwcGVyJyk7XHJcbiAgICBpbmZvVGFibGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3dfaW5mb190YWJsZV93cmFwcGVyJyk7XHJcbiAgICBjb25zdCBpbmZvVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb190YWJsZV9ib2R5Jyk7XHJcbiAgICBjb25zdCByb3dGb3JJbmZvVGFibGUgPSBjcmVhdGVJbmZvVGFibGUodXNlcklucHV0W2ldLCB0cnVlKTtcclxuICAgIGluZm9UYWJsZS5hcHBlbmQocm93Rm9ySW5mb1RhYmxlKTtcclxuXHJcbiAgICAvLyBhZGQgd3JhcHBlclxyXG4gICAgY29uc3Qgb3JkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyX3NoZWV0Jyk7XHJcblxyXG4gICAgY29uc3QgaDZfYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSDZcIik7XHJcbiAgICBoNl9icmVhay5jbGFzc0xpc3QuYWRkKCdoNl9icmVhaycpO1xyXG5cclxuICAgIGNvbnN0IGE0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGE0ZGl2LmNsYXNzTGlzdC5hZGQoJ2E0X2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGE0ZGl2X2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgIGE0ZGl2X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2E0X2Rpdl9mcmFtZScpO1xyXG5cclxuICAgIG9yZGVyV3JhcHBlci5hcHBlbmQoaDZfYnJlYWssIGE0ZGl2KTtcclxuICAgIGE0ZGl2LmFwcGVuZChhNGRpdl9mcmFtZSk7XHJcblxyXG4gICAgLy8gYWRkIExlZ2VuZCBpbiB3cmFwcGVyXHJcbiAgICBhNGRpdl9mcmFtZS5hcHBlbmQoY3JlYXRlTGVnZW5kT2ZPcmRlckxpc3QoKSk7XHJcblxyXG4gICAgLy8gYWRkIGRlc2NyaXB0aW9uIHRhYmxlIGluIHdyYXBwZXJcclxuICAgIGE0ZGl2X2ZyYW1lLmFwcGVuZChjb250YWN0c1RhYmxlKHVzZXJJbnB1dFtpXSwgcHJvamVjdERhdGEpKTtcclxuXHJcbiAgICAvLyBhZGQgb3JkZXIgdGFibGUgaW4gd3JhcHBlclxyXG4gICAgYTRkaXZfZnJhbWUuYXBwZW5kKGNyZWF0ZU9yZGVyVGFibGUoaSkpO1xyXG4gICAgLy8gYWRkIG5vdGUgaW4gd3JhcHBlclxyXG4gICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdCAgbm90ZS5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XHJcblx0ICBhNGRpdl9mcmFtZS5hcHBlbmQobm90ZSk7XHJcbiAgICBub3RlLnRleHRDb250ZW50ID0gJ9CU0L7Qv9C+0LvQvdC10L3QuNC1OiDQqdC40YLQvtC6INCy0YvQvdC+0YHQvdC+0LPQviDRg9GH0LXRgtCwINC00L7Qu9C20LXQvSDRgdC+0L7RgtCy0LXRgtGB0YLQstC+0LLQsNGC0Ywg0YLRgNC10LHQvtCy0LDQvdC40Y/QvCDQodCi0J8gMzMyNDMuMjAuMjYyLTE3Lic7XHJcbiAgICBcclxuICAgIC8vIGFkZCBjaXBoZXIgaW4gd3JhcHBlclxyXG4gICAgYTRkaXZfZnJhbWUuYXBwZW5kKGFkZENpcGhlclRhYmxlKHByb2plY3REYXRhLCcyOTAnLCAnb3JkZXInLCB1c2VySW5wdXRbaV0sIGksIHVzZXJJbnB1dCkpO1xyXG4gICAgLy8gYWRkIGFzaWRlIGZyYW1lIGluIHdyYXBwZXJcclxuICAgIGE0ZGl2X2ZyYW1lLmFwcGVuZChhZGRBc2lkZVRhYmxlKCkpO1xyXG5cclxuICAgIGE0ZGl2LmFwcGVuZChhZGRGb3JtYXQoJ0E0JykpO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZmlsbE9yZGVyVGFibGUodXNlcklucHV0W2ldLCBpLCBhcnJDb3VudGVyQnJlYWtlcnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIGNvdW50ZXJzIHN1bVxyXG4gIGFkZFN1bVNlbSh1c2VySW5wdXQpO1xyXG59XHJcblxyXG5cclxuLy8gY29uc3Qgc2hlbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc9GBaGVtZV9vcmRlcl9zaGVldF9fd3JhcHBlcicpO1xyXG5cclxuLy8gc2hlbWVCdG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbi8vICAgICBjb25zdCB1c2VyUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2UnKS52YWx1ZTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclBhZ2VJbnB1dFwiLCB1c2VyUGFnZUlucHV0KTtcclxuICAgIFxyXG4vLyAgICAgbG9jYXRpb24uaHJlZiA9ICdz0YFoZW1lX29yZGVyX3NoZWV0Lmh0bWwnO1xyXG4vLyB9XHJcbiIsImxldCBjcmVhdGVJbmZvVGFibGUgPSBmdW5jdGlvbiAoc2VtLCBuZWVkQnJlYWtlcnNJbmZvKSB7XHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0YtcdFxyXG5cdGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cdC8vINCh0L7Qt9C00LDQtdC8INGP0YfQtdC50LrQuCDQsiDQstGL0YjQtdGB0L7Qt9C00LDQvdC90L7QuSDRgdGC0YDQvtC60LVcclxuXHRsZXQgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGxldCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0bGV0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMS50ZXh0Q29udGVudCA9IHNlbS5TRU1UeXBlO1xyXG5cdGlmIChuZWVkQnJlYWtlcnNJbmZvKXtcclxuXHRcdGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGQyLnRleHRDb250ZW50ID0gYNCj0YHRgtCw0L3QvtCy0LrQsCAke3NlbS5pbnN0YWxsYXRpb259LiAke3NlbS5kZXNjcmlwdGlvbn0gKCR7c2VtLmJyZWFrZXIxVmFsdWV9INCQKWA7XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0ZDIudGV4dENvbnRlbnQgPSBg0KPRgdGC0LDQvdC+0LLQutCwICR7c2VtLmluc3RhbGxhdGlvbn0uICR7c2VtLmRlc2NyaXB0aW9ufSAoJHtzZW0uYnJlYWtlcjFWYWx1ZX0g0JA7ICR7c2VtLmJyZWFrZXIyVmFsdWV9INCQKWA7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHRkMi50ZXh0Q29udGVudCA9IGDQo9GB0YLQsNC90L7QstC60LAgJHtzZW0uaW5zdGFsbGF0aW9ufS4gJHtzZW0uZGVzY3JpcHRpb259YDtcclxuXHR9XHJcblxyXG5cdHRkMy50ZXh0Q29udGVudCA9IHNlbS5jb3VudE9mU0VNO1xyXG5cclxuXHRyb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cdHJldHVybiByb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluZm9UYWJsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==