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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/layout/scripts/scopeOfWork.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/scopeOfWork.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/scopeOfWork.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/GOST 2.304-81 type A.ttf */ "./src/layout/css/fonts/GOST 2.304-81 type A.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'GOST 2.304-81 type A'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n@media print {\r\n    /* здесь будут стили для печати */\r\n\theader, \r\n\t.main-table,\r\n\t.counters_n_breakers_container,\r\n\tfooter {\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.a4_div {\r\n\t\tpage-break-after: always !important;\r\n\t\tbreak-after: always !important;\r\n\t\tfloat: none !important; \r\n\t\t/*border: none !important; */\r\n\t} \r\n\r\n\t.сipher_table td{\r\n\t\tfont-size: 12pt;\r\n\t}\r\n\t\r\n\t.сipher_table tr:nth-child(1) td:nth-child(7){\r\n\t\tfont-size: 24pt;\r\n\t}\r\n\t\r\n\t.square_checked {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tcolor-adjust: exact;\r\n\t}\r\n\t\r\n\t@page {\r\n\t\tsize: auto;  \r\n\t\tmargin: 0;  \r\n\t}\r\n\t/* h6 {\r\n\t\t-webkit-display: none;\r\n\t}\t */\r\n}\r\n/* @media print and (-webkit-min-device-pixel-ratio:0)\r\n  and (min-resolution:.001dpcm) {\r\n\th6 {\r\n\t\t-webkit-display: none;\r\n\t} \r\n} */\r\nh6 {\r\n\theight: 1px;\r\n}\r\n\r\n* {\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\r\n\tfont-family: 'GOST 2.304-81 type A', sans-serif;\r\n\tcolor: black; \r\n}\r\n\r\n.container {\r\n\twidth: 210mm;\r\n\tmargin: auto;\r\n\t/* background: url('/img/0001.jpg'); */\r\n}\r\nheader,\r\nfooter {\r\n\tpadding: 15px 0;\r\n\tbackground: #48D1CC;\r\n\tcolor:  white;\r\n}\r\n/* КНОПКИ */\r\n.btn {\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tbackground: #008B8B;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\tmargin: 5px 0;\r\n\tfont-size: 21px;;\r\n}\r\n.btn:last-child{\r\n\tmargin: 20px 0;\r\n}\r\n.btn:hover, .input-btn:hover {\r\n\tbackground:\t#008C33;\r\n\tborder: #0b6603 solid 2px;\r\n}\r\n/*ДИВ  с примечанием и ссылкой на таблицу объемов*/\r\n/* .works_table {\r\n\tpadding-top: 25px;\r\n} */\r\n\r\n/*Div с верхней таблицой */\r\n.main-table {\r\n\tbackground: #AFEEEE;\r\n\tfont-size: 21px;\r\n}\r\n/*Легенды*/\r\nlegend{\r\n\tpadding-top: 5px;\r\n}\r\n/*ТАБЛИЦЫ, общие свойства*/\r\ntable {\r\n\tborder-collapse: collapse;\r\n}\r\ntd, th {\r\n\tborder: 0.25mm solid #000;\r\n}\r\ntbody tr:nth-child(2n-1) {\r\n\tbackground: #e3f8ea;\r\n}\r\ntr:nth-child(2n), thead {\r\n\tbackground: #fff;\r\n}\r\n/*ТАБЛИЦА ИНФОРМАЦИИ*/\r\n.info_table {\r\n\twidth: 100%;\r\n}\r\n.info_table td, .info_table th {\r\n\tborder: 2px solid #008B8B;\r\n}\r\n.info_table td:nth-child(1),  .info_table td:nth-child(2){\r\n\tpadding-left: 5px;\r\n}\r\n.info_table td:last-child{\r\n\ttext-align: center;\r\n}\r\n.info_table th:first-child {\r\n\twidth: 40mm;\r\n}\r\n.info_table th:last-child {\r\n\twidth: 15mm;\r\n}\r\n.info_table .last_td {\r\n\tfont-weight: 800;\r\n\tbackground: #AFEEEE;\r\n\tborder: none;\r\n\ttext-align: right;\r\n\tpadding-right: 5px;\r\n\t/* padding-bottom: 10px; */\r\n}\r\n/*КОНТЕЙНЕРЫ ДЛЯ ОПРОСНЫХ*/\r\n.order_container {\r\n\tbackground: #48D1CC;\r\n}\r\n.a4_div:nth-child(4n-2){\r\n\tbackground: #d0ecec;\r\n}\r\n.a4_div:nth-child(4n){\r\n\tbackground: #c1e6c1;\r\n}\r\n.a4_div {\r\n\theight: 296.5mm;\r\n\tdisplay: block;\r\n\tborder: 1px solid black;\r\n\tposition: relative;\r\n}\r\n.a4_div_frame {\r\n\tfont-size: 11.5pt;\r\n\theight: 287mm;\r\n\twidth: 185mm;\r\n\tleft: 20mm;\r\n\tbottom: 5mm;\r\n\tborder: 0.6mm solid black;\r\n\tposition: absolute;\t\r\n\tdisplay: block; /*del*/\r\n}\r\n\r\n/*ТАБЛИЦА-ОПРОСНЫЙ*/\r\n.works_table {\r\n\twidth: 100%;\r\n}\r\n.works_table td:nth-child(1) {\r\n\twidth: 150mm;\r\n\ttext-align: left;\r\n\tborder-left: none;\r\n\tpadding-left: 1mm;\r\n}\r\n.works_table td:nth-child(2n+1) {\r\n\theight: 5.5mm;\r\n}\r\n.works_table td:nth-child(2) {\r\n\twidth: 10mm;\r\n\ttext-align: center;\r\n\tborder-left: #000 solid 0.6mm;\r\n\tborder-right: #000 solid 0.6mm;\r\n}\r\n.works_table td:last-child {\r\n\ttext-align: center;\r\n\tborder-right: none;\r\n}\r\n.works_table tr:first-child td {\r\n\ttext-align: center;\r\n\theight: 8mm;\r\n\tpadding: 0;\r\n\tborder-bottom: #000 solid 0.6mm;\r\n\tborder-top: none;\r\n}\r\n/* .square {\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tborder: 1px solid #000;\r\n\tfloat: left;\r\n\tmargin-top: 2px;\r\n\tmargin-right: 5px;\r\n\tmargin-bottom: 1px;\r\n}\r\n.square:last-child {\r\n\tmargin-bottom: 2px;\r\n}\r\n.square_checked {\r\n\tbackground: #000;\r\n} */\r\n\r\n/*Примечание после опросного*/\r\n.note{\r\n\tpadding: 5px;\r\n}\r\n/*РАМКА-ШИФР*/\r\n.сipher_table {\r\n    width: 100%;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\ttext-align: center;\r\n}\r\n.сipher_table td{\r\n    line-height: 0.95;\r\n    font-size: 12pt;;\r\n\tbackground: #fff;\r\n\tborder-right: #000 solid 0.6mm;\r\n\tborder-left: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td:nth-child(4),\r\n.сipher_table tr:nth-child(5) td:nth-child(2){\r\n\tletter-spacing: -0.5px;\r\n\t/* font-size: 14px;\t */\r\n}\r\n.сipher_table td:nth-child(n+7){\r\n\tborder: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:first-child td,\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+5){\r\n\tborder-top: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table tr:nth-child(5) td,\r\n.сipher_table tr:nth-child(6) td:nth-child(6){\r\n\tborder-bottom: #000 solid 0.6mm;\t\r\n}\r\n.сipher_table td:first-child {\r\n\tborder-left: none;\r\n}\r\n.сipher_table td:last-child {\r\n\tborder-right: none;\r\n}\r\n.сipher_table tr:last-child td,\r\n.сipher_table tr:nth-child(9) td:nth-child(n+4){\r\n\tborder-bottom: none;\t\r\n}\r\n.сipher_table tr:nth-child(n+6) td:nth-child(1), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(2), \r\n.сipher_table tr:nth-child(n+6) td:nth-child(3) {\r\n\ttext-align: left;\r\n\tpadding-left: 2px;\r\n}\r\n.сipher_table tr:first-child td:nth-child(1), \r\n.сipher_table tr:first-child td:nth-child(2), \r\n.сipher_table tr:first-child td:nth-child(3), \r\n.сipher_table tr:first-child td:nth-child(4),\r\n.сipher_table tr:first-child td:nth-child(6) {\r\n\twidth: 10mm;\r\n}\r\n.сipher_table tr:first-child td:nth-child(5) {\r\n\twidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(5) {\r\n\twidth: 70mm;\r\n}\r\n.сipher_table tr:nth-child(6) td:nth-child(6),\r\n.сipher_table tr:nth-child(6) td:nth-child(7) {\r\n\twidth: 15mm;\r\n}\r\n.сipher_table tr:nth-child(1) td:nth-child(7){\r\n\tfont-size: 24pt;\r\n}\r\n.сipher_table tr:nth-child(9) td:nth-child(5){\r\n\tfont-size: 11.2pt;\r\n\tline-height: 0.85;\r\n}\r\n.сipher_table tr td:first-child{\r\n\theight: 5mm;\r\n}\r\n.p_besp{\r\n\tdisplay: inline-block;\r\n\t/*margin-bottom: 10px;*/\r\n}\r\n.logo_besp{\r\n\tdisplay: inline-block;\r\n\tmargin: 0px 0 -12px 7px;\t\r\n}\r\n/*ПРЯЧЕМ ФОРМУ ВНЕСЕНИЯ СЧЕТЧИКОВ И АВТОМАТОВ ПОСЛЕ ЕЕ ЗАПОЛНЕНИЯ*/\r\n.hide_submit {\r\n\tdisplay: none;\r\n}\r\n\r\n/*ПРЯЧЕМ ФОРМУ ВНЕСЕНИЯ СЧЕТЧИКОВ И АВТОМАТОВ ПОСЛЕ ЕЕ ЗАПОЛНЕНИЯ*/\r\n/* .hide_counters_n_breakers_container {\r\n\tdisplay: none;\r\n  } */\r\n\r\n/*ПОКАЗЫВАЕМ*/\r\n.info_table_wrapper {\r\n\tdisplay: none;\r\n}\r\n.show_info_table_wrapper {\r\n\tdisplay: block;\r\n}\r\n.footer_show {\r\n\tdisplay: block;\t\r\n}\r\nfooter {\r\n\tdisplay: none;\r\n}\r\n\r\n/*ФОРМА ВВОДА СЧЕТЧИКОВ И ВЫКЛЮЧАТЕЛЕЙ*/\r\n.counters_n_breakers_container {\r\n\tbackground: #AFEEEE;\r\n\tfont-size: 21px;\r\n\t/* min-height: 948px; */\r\n}\r\n.counters_n_breakers_container input {\r\n\tfont-size: 21px;\t\r\n}\r\n/*нумерация листов*/\r\n.input_page{\r\n\tbackground: #48D1CC;\r\n\tborder: #008B8B solid 2px;\r\n\tborder-radius: 5px;\t\r\n\tpadding-left: 40px;\r\n}\r\n/*СЧЕТЧИКИ*/\r\n.counters_wrapper{\r\n\tbackground: #AFEEEE;\r\n\tborder: #008B8B solid 2px;\r\n\tborder-radius: 5px;\t\r\n\tpadding-left: 40px;\r\n\r\n}\r\n.input_page p,\r\n.counters_wrapper p{\r\n\tpadding: 12px 0 2px 0;\r\n}\r\n.counters_wrapper .counter_note {\r\n\tpadding: 0;\r\n\tfont-size: 16px;\r\n\tcolor: #0b6603;\r\n}\r\n.counters_wrapper .counter_note:last-child {\r\n\tpadding-bottom: 5px;\r\n}\r\n.counters_n_breakers_container #counter-1f,\r\n.counters_n_breakers_container #counter-3f {\r\n\twidth: 91%;\r\n}\r\n.input_page #input_page\r\n/*, .counters_n_breakers_container #counter-3f*/\r\n{\r\n\tmargin-bottom: 13px;\r\n}\r\n\r\n/*ВЫКЛЮЧАТЕЛИ*/\r\n.breaker_div_radio,\r\n.breaker_div {\r\n\tborder: #008B8B solid 2px;\r\n\tborder-radius: 5px;\r\n\tpadding-left: 40px;\t\t\r\n}\r\n.breaker_div_radio{\r\n\tpadding-bottom: 10px;\r\n}\r\n.breaker_div_radio:nth-child(2n-1){\r\n    background: #5fe67c;\r\n}\r\n.breaker_div_radio:nth-child(2n){\r\n\tbackground: #4ff9aa;\r\n}\r\n.breaker_div:nth-child(2n-1){\r\n\tbackground: #48D1CC;\r\n}\r\n.breaker_div:nth-child(2n){\r\n\tbackground: #AFEEEE;\r\n}\r\n.breaker_div_radio .breaker_p,\r\n.breaker_div .breaker_p{\r\n\ttext-align: center;\r\n\tpadding: 15px 0 2px 0;\t\r\n\tmargin-left: -40px;\r\n}\r\n/* .breaker_div_radio .radio_p, */\r\n.breaker_div .input-p{\r\n\tpadding: 8px 0 2px 0;\t\r\n}\r\n.breaker_div_radio label{\r\n\tpadding: 3px 0 0 10px;\r\n}\r\n/* .breaker_div label:last-child {\r\n    margin-bottom: 8px;\r\n} */\r\n.breaker_div input:last-child{\r\n\tmargin-bottom: 12px;\r\n}\r\n/* .сipher_table tr:last-child td{\r\n\tborder-bottom: none;\r\n} */\r\n\r\n/*формат (А4)*/\r\n.format_div{\r\n\tbottom: 1px;\r\n    right: 92px;\r\n    position: absolute;\r\n}\r\n\r\n/*БОКОВАЯ ЧАСТЬ РАМКИ*/\r\n .aside_frame {\r\n\t/*transform: rotate(-90.0deg); */\r\n\tposition: absolute;\r\n\tbottom: -0.5mm;\r\n\tleft: -13mm;\r\n}\r\n .aside_frame span{\r\n    transform: rotate(-90.0deg);\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n\t-webkit-writing-mode: vertical-rl;\r\n\twriting-mode: vertical-rl;\r\n }\r\n.aside_frame td{\r\n\ttext-align: center;\r\n\tborder: 0.6mm solid black;\r\n\tfont-size: 12pt;\r\n\ttransform: rotate(-90.0deg);\r\n/*\twhite-space: nowrap;\r\n\tvertical-align: middle;*/\r\n}\r\n.aside_frame tr:nth-child(2n+1) td{\r\n\theight: 25.3mm;\r\n}\r\n.aside_frame tr:nth-child(2) td{\r\n\theight: 35.6mm;\r\n}\r\n.aside_frame td:first-child{\r\n\twidth: 5mm;\r\n}\r\n.aside_frame td:last-child{\r\n\twidth: 7mm;\r\n\tborder-right: none;\r\n} \r\n\r\n/*ввод № страницы*/\r\n#input_page{\r\n\ttext-align: center;\r\n}\r\n\r\n.signature{\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: -7px;\r\n\tposition: absolute;\r\n}\r\n.signature_boss {\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: 15px;\r\n\tposition: absolute;\r\n}\r\n.signature_boss2 {\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: 33px;\r\n\tposition: absolute;\r\n}", ""]);
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

/***/ "./src/layout/css/scopeOfWork.css":
/*!****************************************!*\
  !*** ./src/layout/css/scopeOfWork.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./scopeOfWork.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/scopeOfWork.css");

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

  td9_2.textContent = 'Гуринович';

  if (project.isBossSignature) {
    var bossSignature = document.createElement("IMG");
    var bossSignature2 = document.createElement("IMG");
    bossSignature.classList.add('signature_boss');
    bossSignature2.classList.add('signature_boss2');
    bossSignature.setAttribute('src', './img/gta.png');
    bossSignature2.setAttribute('src', './img/gta.png');
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

  td10_2.innerHTML = 'Гуринович'; //10.2

  td11_1.innerHTML = 'Разраб.'; //11.1

  td11_2.innerHTML = project.nameOfDeveloper.split(' ')[0]; //11.2

  if (project.isDeveloperSignature) {
    var developerSignature = document.createElement("IMG");
    developerSignature.classList.add('signature');

    if (project.nameOfDeveloper === "Гуринович Т. А.") {
      developerSignature.setAttribute('src', './img/gta.png');
    } else if (project.nameOfDeveloper === "Идельчик Г. Р.") {
      developerSignature.setAttribute('src', './img/idelchik.png');
    } else if (project.nameOfDeveloper === "Савченко А. А.") {
      developerSignature.setAttribute('src', './img/sava.png');
    } else if (project.nameOfDeveloper === "Сапроненко В. В.") {
      developerSignature.setAttribute('src', './img/sapr.png');
    } else if (project.nameOfDeveloper === "Мышковец Е. Я.") {
      developerSignature.setAttribute('src', './img/misk.png');
    } else {
      developerSignature.setAttribute('src', './img/svirski.png');
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


function mainObjectCollect(str) {
  var arrayOfUserInput = str.split('\n');
  var resultArray = [];
  var legendArray = arrayOfUserInput[0].split(',');

  var SEM = function SEM(arr) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SEM);

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
  };

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

/***/ "./src/layout/scripts/for-works/create-row.js":
/*!****************************************************!*\
  !*** ./src/layout/scripts/for-works/create-row.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createRow = function createRow(description, measure, value) {
  // let createRow = function(description, measure, value, forLongDescription) {
  var row = document.createElement("TR"); // ячейки

  var td1 = document.createElement("TD");
  var td2 = document.createElement("TD");
  var td3 = document.createElement("TD");
  td1.textContent = description;
  td2.innerHTML = measure;
  td3.textContent = value;
  row.append(td1, td2, td3); // if (forLongDescription) {
  //     const row2 = document.createElement("TR");
  //     const td1_2 = document.createElement("TD");
  //     const td2_2 = document.createElement("TD");
  //     const td3_2 = document.createElement("TD");
  //     td1_2.textContent = forLongDescription;
  //     row2.append(td1_2, td2_2, td3_2);
  // }

  return row;
};

/* harmony default export */ __webpack_exports__["default"] = (createRow);

/***/ }),

/***/ "./src/layout/scripts/for-works/works-data.js":
/*!****************************************************!*\
  !*** ./src/layout/scripts/for-works/works-data.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable eqeqeq */
var worksDataCollect = function worksDataCollect(input) {
  function SEMWORKS(sem) {
    // если ЩУЭ на стойке и есть 3ф
    if (sem.SEMType.split('-')[4] == '2' && sem.counterCountInSEM !== 1) {
      if (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === '3фк') {
        this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 7.5;
        this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 2.3;
        this.routing_4x16_cable_in_the_trench = 2;
        this.routing_4x16_cable_along_remote_stand = 3.4;
      } else if (sem.counterCountInSEM === 2 && sem.inputFromSem === 'вв') {
        this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 22.5;
        this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 6.9;
        this.routing_4x16_cable_in_the_trench = 6;
        this.routing_4x16_cable_along_remote_stand = 10.2;
      } else {
        this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 15;
        this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 4.6;
        this.routing_4x16_cable_in_the_trench = 4;
        this.routing_4x16_cable_along_remote_stand = 6.8;
      }

      this.purchase_4x16_cable_with_2_percent = (this.routing_4x16_cable_along_pylon_with_clamps_XK1 + this.routing_4x16_cable_along_pylon_with_protection_cover_KM + this.routing_4x16_cable_in_the_trench + this.routing_4x16_cable_along_remote_stand) * 1.02;
    } else {
      this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 0;
      this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
      this.routing_4x16_cable_in_the_trench = 0;
      this.routing_4x16_cable_along_remote_stand = 0;
      this.purchase_4x16_cable_with_2_percent = 0;
    } // если ЩУЭ на стойке и (есть 1х1ф или 2х1ф) но, если это 3-2-2, то только 1фК или КК


    if (sem.SEMType.split('-')[4] == '2' && (sem.SEMType.split('-')[2] == '1' || sem.SEMType.split('-')[2] == '3' && sem.inputFromSem !== 'кк' && sem.inputFromSem !== '1фк')) {
      if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'вв' || sem.inputFromSem === '3фк')) {
        this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 7.5;
        this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 2.3;
        this.routing_2x16_cable_in_the_trench = 2;
        this.routing_2x16_cable_along_remote_stand = 3.4;
      } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'вв') {
        this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 22.5;
        this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 6.9;
        this.routing_2x16_cable_in_the_trench = 6;
        this.routing_2x16_cable_along_remote_stand = 10.2;
      } else {
        this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 15;
        this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 4.6;
        this.routing_2x16_cable_in_the_trench = 4;
        this.routing_2x16_cable_along_remote_stand = 6.8;
      }

      this.purchase_2x16_cable_with_2_percent = (this.routing_2x16_cable_along_pylon_with_clamps_XK1 + this.routing_2x16_cable_along_pylon_with_protection_cover_KM + this.routing_2x16_cable_in_the_trench + this.routing_2x16_cable_along_remote_stand) * 1.02;
    } else {
      this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 0;
      this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
      this.routing_2x16_cable_in_the_trench = 0;
      this.routing_2x16_cable_along_remote_stand = 0;
      this.purchase_2x16_cable_with_2_percent = 0;
    } // если ЩУЭ на стойке, и есть К


    if (sem.SEMType.split('-')[4] == '2' && sem.inputFromSem.includes('к')) {
      if (sem.inputFromSem === 'кк') {
        this.finding_an_existing_cable = 0.56;
      } else {
        this.finding_an_existing_cable = 0.28;
      }
    } else {
      this.finding_an_existing_cable = 0;
    } // если ЩУЭ на опоре и есть 3фК ...


    if (sem.SEMType.split('-')[4] === '1' && sem.SEMType.split('-')[2] !== '1' && sem.inputFromSem.includes('к') && !sem.inputFromSem.includes('1фк')) {
      if (sem.SEMType.split('-')[2] === '2' && sem.inputFromSem === 'кк') {
        this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 3.4;
      } else {
        this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 1.7;
      }
    } else {
      this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
    } // если ЩУЭ на стойке и есть 3фК ...


    if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1' && sem.inputFromSem.includes('к') && !sem.inputFromSem.includes('1фк')) {
      if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'кк') {
        this.routing_existing_4x16_cable_in_the_finished_trench = 4;
        this.routing_existing_4x16_cable_along_remote_stand = 6.8;
      } else {
        this.routing_existing_4x16_cable_in_the_finished_trench = 2;
        this.routing_existing_4x16_cable_along_remote_stand = 3.4;
      }
    } else {
      this.routing_existing_4x16_cable_in_the_finished_trench = 0;
      this.routing_existing_4x16_cable_along_remote_stand = 0;
    } // если ЩУЭ на опоре, и есть 1фК


    if (sem.SEMType.split('-')[4] == '1' && (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('к') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'кк' || sem.inputFromSem === '1фк'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'кк') {
        this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 3.4;
      } else {
        this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 1.7;
      }
    } else {
      this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
    } // если ЩУЭ на стойке, и есть 1фК


    if (sem.SEMType.split('-')[4] == '2' && (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('к') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'кк' || sem.inputFromSem === '1фк'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'кк') {
        this.routing_existing_2x16_cable_in_the_finished_trench = 4;
        this.routing_existing_2x16_cable_along_remote_stand = 6.8;
      } else {
        this.routing_existing_2x16_cable_in_the_finished_trench = 2;
        this.routing_existing_2x16_cable_along_remote_stand = 3.4;
      }
    } else {
      this.routing_existing_2x16_cable_in_the_finished_trench = 0;
      this.routing_existing_2x16_cable_along_remote_stand = 0;
    } // если ЩУЭ на опоре


    if (sem.SEMType.split('-')[4] == '1') {
      if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк')) {
        this.wire_routing_along_constructions = 1.5;
        this.purchase_NShAL = 2;
        this.purchase_n_montage_TUT = 0.04;
        this.purchase_PKV = 2;
        this.zadelka_SIP = 2;

        if (sem.pillarType === 'св-110') {
          this.wire_routing_in_the_pipe = 6.4;
        } else if (sem.pillarType === 'ст-108.6') {
          this.wire_routing_in_the_pipe = 5.4;
        } else if (sem.pillarType === 'ст-108.7') {
          this.wire_routing_in_the_pipe = 6.1;
        } else {
          this.wire_routing_in_the_pipe = 5.1;
        }
      } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'вв') {
        this.wire_routing_along_constructions = 9;
        this.purchase_NShAL = 12;
        this.purchase_n_montage_TUT = 0.24;
        this.purchase_PKV = 12;
        this.zadelka_SIP = 12;

        if (sem.pillarType === 'св-110') {
          this.wire_routing_in_the_pipe = 38.4;
        } else if (sem.pillarType === 'ст-108.6') {
          this.wire_routing_in_the_pipe = 32.4;
        } else if (sem.pillarType === 'ст-108.7') {
          this.wire_routing_in_the_pipe = 36.6;
        } else {
          this.wire_routing_in_the_pipe = 30.6;
        }
      } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'вв') {
        this.wire_routing_along_constructions = 7.5;
        this.purchase_NShAL = 10;
        this.purchase_n_montage_TUT = 0.2;
        this.purchase_PKV = 10;
        this.zadelka_SIP = 10;

        if (sem.pillarType === 'св-110') {
          this.wire_routing_in_the_pipe = 32;
        } else if (sem.pillarType === 'ст-108.6') {
          this.wire_routing_in_the_pipe = 27;
        } else if (sem.pillarType === 'ст-108.7') {
          this.wire_routing_in_the_pipe = 30.5;
        } else {
          this.wire_routing_in_the_pipe = 25.5;
        }
      } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'вв' || sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '3фк') {
        this.wire_routing_along_constructions = 4.5;
        this.purchase_NShAL = 6;
        this.purchase_n_montage_TUT = 0.12;
        this.purchase_PKV = 6;
        this.zadelka_SIP = 6;

        if (sem.pillarType === 'св-110') {
          this.wire_routing_in_the_pipe = 19.2;
        } else if (sem.pillarType === 'ст-108.6') {
          this.wire_routing_in_the_pipe = 16.2;
        } else if (sem.pillarType === 'ст-108.7') {
          this.wire_routing_in_the_pipe = 18.3;
        } else {
          this.wire_routing_in_the_pipe = 15.3;
        }
      } else if (sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'в' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'кв') || sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '1фк') {
        this.wire_routing_along_constructions = 6;
        this.purchase_NShAL = 8;
        this.purchase_n_montage_TUT = 0.16;
        this.purchase_PKV = 8;
        this.zadelka_SIP = 8;

        if (sem.pillarType === 'св-110') {
          this.wire_routing_in_the_pipe = 25.6;
        } else if (sem.pillarType === 'ст-108.6') {
          this.wire_routing_in_the_pipe = 21.6;
        } else if (sem.pillarType === 'ст-108.7') {
          this.wire_routing_in_the_pipe = 24.4;
        } else {
          this.wire_routing_in_the_pipe = 20.4;
        }
      } else {
        this.wire_routing_along_constructions = 3;
        this.purchase_NShAL = 4;
        this.purchase_n_montage_TUT = 0.08;
        this.purchase_PKV = 4;
        this.zadelka_SIP = 4;

        if (sem.pillarType === 'св-110') {
          this.wire_routing_in_the_pipe = 12.8;
        } else if (sem.pillarType === 'ст-108.6') {
          this.wire_routing_in_the_pipe = 10.8;
        } else if (sem.pillarType === 'ст-108.7') {
          this.wire_routing_in_the_pipe = 12.2;
        } else {
          this.wire_routing_in_the_pipe = 10.2;
        }
      }

      this.purchase_wire_with_2_percent = (this.wire_routing_along_constructions + this.wire_routing_in_the_pipe) * 1.02;
    } else {
      this.wire_routing_along_constructions = 0;
      this.wire_routing_in_the_pipe = 0;
      this.purchase_wire_with_2_percent = 0;
      this.purchase_NShAL = 0;
      this.purchase_n_montage_TUT = 0;
      this.purchase_PKV = 0;
      this.zadelka_SIP = 0;
    } // если ЩУЭ на опоре и есть 3фК ... или на стойке и есть 3ф


    if (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] !== '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '3фк') || sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {
      if (sem.SEMType.split('-')[2] == '2' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
        this.purchase_n_montage_INside_sleeve_4 = 3;
      } else if (sem.SEMType.split('-')[4] == '2' || sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] == '2' && !sem.inputFromSem === 'кк') {
        this.purchase_n_montage_INside_sleeve_4 = 2;
      } else {
        this.purchase_n_montage_INside_sleeve_4 = 1;
      }
    } else {
      this.purchase_n_montage_INside_sleeve_4 = 0;
    } // если ЩУЭ на стойке и есть 3ф
    // как первые 5 строк


    if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {
      if (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === '3фк') {
        this.purchase_n_montage_OUTside_sleeve_4 = 1;
      } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'вв') {
        this.purchase_n_montage_OUTside_sleeve_4 = 3;
      } else {
        this.purchase_n_montage_OUTside_sleeve_4 = 2;
      }
    } else {
      this.purchase_n_montage_OUTside_sleeve_4 = 0;
    } // если ЩУЭ на опоре и есть 1фК ... или на стойке и есть 1ф


    if (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] !== '2' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '1фк') || sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '2') {
      if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
        this.purchase_n_montage_INside_sleeve_2 = 3;
      } else if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '2' || sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '1' && sem.inputFromSem === 'кк') {
        this.purchase_n_montage_INside_sleeve_2 = 2;
      } else {
        this.purchase_n_montage_INside_sleeve_2 = 1;
      }
    } else {
      this.purchase_n_montage_INside_sleeve_2 = 0;
    } // если ЩУЭ на стойке и (это чисто 1ф или это 3-2-2 с 1фВ)


    if (sem.SEMType.split('-')[4] == '2' && (sem.SEMType.split('-')[2] == '1' || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'вв' || sem.inputFromSem === '3фк'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'вв') {
        this.purchase_n_montage_OUTside_sleeve_2 = 3;
      } else if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'в' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк')) {
        this.purchase_n_montage_OUTside_sleeve_2 = 2;
      } else {
        this.purchase_n_montage_OUTside_sleeve_2 = 1;
      }
    } else {
      this.purchase_n_montage_OUTside_sleeve_2 = 0;
    } // ДЛЯ ВСЕХ ЩУЭ
    // Приобретение и монтаж зажимов ЗОПг-2


    if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк')) {
      this.purchase_n_montage_clamp_ZOP = 2;
    } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'вв') {
      this.purchase_n_montage_clamp_ZOP = 10;
    } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'вв') {
      this.purchase_n_montage_clamp_ZOP = 12;
    } else if (sem.inputFromSem === 'вв' || sem.inputFromSem === '3фк') {
      this.purchase_n_montage_clamp_ZOP = 6;
    } else if (sem.inputFromSem === '3фк' || sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'в' || sem.inputFromSem === 'вк' || sem.inputFromSem === 'кв')) {
      this.purchase_n_montage_clamp_ZOP = 8;
    } else {
      this.purchase_n_montage_clamp_ZOP = 4;
    } // если ЩУЭ на опоре (как строки 19-21)


    if (sem.SEMType.split('-')[4] == '1') {
      this.purchase_n_montage_strip_2400_for_grounding = 1; // Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры
    } else {
      this.purchase_n_montage_strip_2400_for_grounding = 0;
    } // если ЩУЭ на опоре, и есть К


    if (sem.SEMType.split('-')[4] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '1фк' || sem.inputFromSem === '3фк')) {
      // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)
      this.purchase_n_montage_protection_cover_KM_1700 = 1;
    } else {
      this.purchase_n_montage_protection_cover_KM_1700 = 0;
    } // если ЩУЭ на стойке


    if (sem.SEMType.split('-')[4] == '2') {
      this.purchase_n_montage_protection_cover_KM_2300 = 1;
      this.purchase_n_montage_strip_2200_for_grounding = 1;
      this.purchase_n_montage_round_steel_for_strip = 2;
      this.purchase_n_montage_clamp_XK1 = 3;
      this.excavation = 0.13; // разработка котлована под стойку

      this.soil_leveling = 0.13; // разравнивание грунта

      this.purchase_crushed_stone_sand_gravel_mixture = 0.07; // щебеночно-песчано-гравийная смесь

      this.purchase_concrete = 0.05; // бетон

      this.installation_of_metal_structures_in_concrete = 4.06; // установка металлоконструкций в бетоне

      if (sem.SEMType.split('-')[3] == '1') {
        this.digging_trenches = 0.54; // рытье траншеи

        this.ground_underlay = 0.18; // устройство постели из земли

        this.backfill = 0.36; // засыпка грунтом
      } else {
        this.digging_trenches = 0.72; // рытье траншеи

        this.ground_underlay = 0.24; // устройство постели из земли

        this.backfill = 0.48; // засыпка грунтом
      }
    } else {
      this.purchase_n_montage_protection_cover_KM_2300 = 0;
      this.purchase_n_montage_strip_2200_for_grounding = 0;
      this.purchase_n_montage_round_steel_for_strip = 0;
      this.purchase_n_montage_clamp_XK1 = 0;
      this.excavation = 0; // разработка котлована под стойку

      this.soil_leveling = 0; // разравнивание грунта

      this.purchase_crushed_stone_sand_gravel_mixture = 0; // щебеночно-песчано-гравийная смесь

      this.purchase_concrete = 0; // бетон

      this.installation_of_metal_structures_in_concrete = 0; // установка металлоконструкций в бетоне

      this.digging_trenches = 0; // рытье траншеи

      this.ground_underlay = 0; // устройство постели из земли

      this.backfill = 0; // засыпка грунтом
    } // если есть К


    if (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '1фк' || sem.inputFromSem === '3фк') {
      if (sem.inputFromSem === 'кк') {
        this.dismantling_cable_from_pylon = 16; // демонтаж сущ кабеля
      } else {
        this.dismantling_cable_from_pylon = 8; // демонтаж сущ кабеля
      }

      if (sem.inputFromSem === 'кк' && sem.SEMType.split('-')[2] !== '1') {
        this.dismantling_metal_corner_from_pylon = 15.84; // демонтаж сущ уголка
      } else {
        this.dismantling_metal_corner_from_pylon = 11.17; // демонтаж сущ уголка
      }

      this.dismantling_metal_construction_from_pylon = 2.01; // демонтаж сущ металлоконструкций

      if (sem.inputFromSem === 'кк' && sem.SEMType.split('-')[2] == '2') {
        this.dismantling_clamp_ZOP = 8; // демонтаж зажимов ЗОПг-2
      } else if (sem.inputFromSem === 'кк' && sem.SEMType.split('-')[2] == '3') {
        this.dismantling_clamp_ZOP = 6; // демонтаж зажимов ЗОПг-2
      } else if (sem.inputFromSem === '1фк' || sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк')) {
        this.dismantling_clamp_ZOP = 2; // демонтаж зажимов ЗОПг-2
      } else {
        this.dismantling_clamp_ZOP = 4; // демонтаж зажимов ЗОПг-2
      }
    } else {
      this.dismantling_cable_from_pylon = 0;
      this.dismantling_metal_corner_from_pylon = 0;
      this.dismantling_metal_construction_from_pylon = 0;
      this.dismantling_clamp_ZOP = 0;
    } // если есть 3фК


    if (sem.SEMType.split('-')[2] !== '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '3фк')) {
      if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'кк') {
        this.dismantling_INside_sleeve_4 = 2;
      } else {
        this.dismantling_INside_sleeve_4 = 1;
      }
    } else {
      this.dismantling_INside_sleeve_4 = 0;
    } // если есть 1фК


    if (sem.SEMType.split('-')[2] !== '2' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '1фк')) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'кк') {
        this.dismantling_INside_sleeve_2 = 2;
      } else {
        this.dismantling_INside_sleeve_2 = 1;
      }
    } else {
      this.dismantling_INside_sleeve_2 = 0;
    }
  } // console.log(new SEMWORKS(input));


  return new SEMWORKS(input);
};

/* harmony default export */ __webpack_exports__["default"] = (worksDataCollect);

/***/ }),

/***/ "./src/layout/scripts/for-works/works.js":
/*!***********************************************!*\
  !*** ./src/layout/scripts/for-works/works.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _works_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works-data */ "./src/layout/scripts/for-works/works-data.js");
/* harmony import */ var _create_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-row */ "./src/layout/scripts/for-works/create-row.js");

 // создание таблицы ведомости работ

var workTable = function workTable(sem) {
  var workTable = document.createElement('TABLE');
  workTable.classList.add('works_table');
  var bodyOfWorkTable = document.createElement('TBODY');
  workTable.append(bodyOfWorkTable); // ЛЕГЕНДА ТАБЛИЦЫ
  // строки

  var row1OfWorkTable = document.createElement('TR');
  bodyOfWorkTable.append(row1OfWorkTable); // ячейки

  var td1_1OfWorkTable = document.createElement('TD');
  var td1_2OfWorkTable = document.createElement('TD');
  var td1_3OfWorkTable = document.createElement('TD'); // места ячеек

  row1OfWorkTable.append(td1_1OfWorkTable, td1_2OfWorkTable, td1_3OfWorkTable); // Наполняем ячейки

  td1_1OfWorkTable.textContent = 'Наименование работ';
  td1_2OfWorkTable.textContent = 'Ед.изм.';
  td1_3OfWorkTable.textContent = 'Количество';
  var collectedDataFromSem = Object(_works_data__WEBPACK_IMPORTED_MODULE_0__["default"])(sem);
  console.log(collectedDataFromSem);

  if (collectedDataFromSem.routing_4x16_cable_along_pylon_with_clamps_XK1) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)', 'м', collectedDataFromSem.routing_4x16_cable_along_pylon_with_clamps_XK1));
  }

  if (collectedDataFromSem.routing_4x16_cable_along_pylon_with_protection_cover_KM) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м', collectedDataFromSem.routing_4x16_cable_along_pylon_with_protection_cover_KM));
  }

  if (collectedDataFromSem.routing_4x16_cable_in_the_trench) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 в готовой траншее', 'м', collectedDataFromSem.routing_4x16_cable_in_the_trench));
  }

  if (collectedDataFromSem.routing_4x16_cable_along_remote_stand) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по выносной стойке', 'м', collectedDataFromSem.routing_4x16_cable_along_remote_stand));
  }

  if (collectedDataFromSem.purchase_4x16_cable_with_2_percent) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%', 'м', collectedDataFromSem.purchase_4x16_cable_with_2_percent.toFixed(2)));
  }

  if (collectedDataFromSem.routing_2x16_cable_along_pylon_with_clamps_XK1) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)', 'м', collectedDataFromSem.routing_2x16_cable_along_pylon_with_clamps_XK1));
  }

  if (collectedDataFromSem.routing_2x16_cable_along_pylon_with_protection_cover_KM) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м', collectedDataFromSem.routing_2x16_cable_along_pylon_with_protection_cover_KM));
  }

  if (collectedDataFromSem.routing_2x16_cable_in_the_trench) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 в готовой траншее', 'м', collectedDataFromSem.routing_2x16_cable_in_the_trench));
  }

  if (collectedDataFromSem.routing_2x16_cable_along_remote_stand) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по выносной стойке', 'м', collectedDataFromSem.routing_2x16_cable_along_remote_stand));
  }

  if (collectedDataFromSem.purchase_2x16_cable_with_2_percent) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%', 'м', collectedDataFromSem.purchase_2x16_cable_with_2_percent.toFixed(2)));
  }

  if (collectedDataFromSem.finding_an_existing_cable) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Отшурфовка существующего кабеля', 'м' + '<sup>3</sup>', collectedDataFromSem.finding_an_existing_cable));
  }

  if (collectedDataFromSem.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м', collectedDataFromSem.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM));
  }

  if (collectedDataFromSem.routing_existing_4x16_cable_in_the_finished_trench) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее', 'м', collectedDataFromSem.routing_existing_4x16_cable_in_the_finished_trench));
  }

  if (collectedDataFromSem.routing_existing_4x16_cable_along_remote_stand) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке', 'м', collectedDataFromSem.routing_existing_4x16_cable_along_remote_stand));
  }

  if (collectedDataFromSem.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м', collectedDataFromSem.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM));
  }

  if (collectedDataFromSem.routing_existing_2x16_cable_in_the_finished_trench) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее', 'м', collectedDataFromSem.routing_existing_2x16_cable_in_the_finished_trench));
  }

  if (collectedDataFromSem.routing_existing_2x16_cable_along_remote_stand) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке', 'м', collectedDataFromSem.routing_existing_2x16_cable_along_remote_stand));
  }

  if (collectedDataFromSem.wire_routing_along_constructions) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка провода СИП-4и 2х16 по конструкциям', 'м', collectedDataFromSem.wire_routing_along_constructions));
  }

  if (collectedDataFromSem.wire_routing_in_the_pipe) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка провода СИП-4и 2х16 в трубе', 'м', collectedDataFromSem.wire_routing_in_the_pipe));
  }

  if (collectedDataFromSem.purchase_wire_with_2_percent) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение провода СИП-4и 2х16 с надбавкой 2%', 'м', collectedDataFromSem.purchase_wire_with_2_percent.toFixed(2)));
  }

  if (collectedDataFromSem.purchase_n_montage_INside_sleeve_4) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1', 'шт.', collectedDataFromSem.purchase_n_montage_INside_sleeve_4));
  }

  if (collectedDataFromSem.purchase_n_montage_OUTside_sleeve_4) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1', 'шт.', collectedDataFromSem.purchase_n_montage_OUTside_sleeve_4));
  }

  if (collectedDataFromSem.purchase_n_montage_INside_sleeve_2) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1', 'шт.', collectedDataFromSem.purchase_n_montage_INside_sleeve_2));
  }

  if (collectedDataFromSem.purchase_n_montage_OUTside_sleeve_2) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1', 'шт.', collectedDataFromSem.purchase_n_montage_OUTside_sleeve_2));
  }

  if (collectedDataFromSem.purchase_n_montage_clamp_ZOP) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж зажимов ЗОПг-2', 'шт.', collectedDataFromSem.purchase_n_montage_clamp_ZOP));
  }

  if (collectedDataFromSem.purchase_n_montage_strip_2400_for_grounding) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры', 'шт.', collectedDataFromSem.purchase_n_montage_strip_2400_for_grounding));
  }

  if (collectedDataFromSem.purchase_n_montage_protection_cover_KM_1700) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)', 'шт.', collectedDataFromSem.purchase_n_montage_protection_cover_KM_1700));
  }

  if (collectedDataFromSem.purchase_n_montage_protection_cover_KM_2300) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)', 'шт.', collectedDataFromSem.purchase_n_montage_protection_cover_KM_2300));
  }

  if (collectedDataFromSem.purchase_n_montage_strip_2200_for_grounding) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ', 'шт.', collectedDataFromSem.purchase_n_montage_strip_2200_for_grounding));
  }

  if (collectedDataFromSem.purchase_n_montage_round_steel_for_strip) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему контуру опоры', 'шт.', collectedDataFromSem.purchase_n_montage_round_steel_for_strip));
  }

  if (collectedDataFromSem.purchase_n_montage_clamp_XK1) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж хомутов ХК-1', 'шт.', collectedDataFromSem.purchase_n_montage_clamp_XK1));
  }

  if (collectedDataFromSem.excavation) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Разработка котлована под стойку', 'м' + '<sup>3</sup>', collectedDataFromSem.excavation));
  }

  if (collectedDataFromSem.soil_leveling) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Разравнивание вытесненного грунта вручную', 'м' + '<sup>3</sup>', collectedDataFromSem.soil_leveling));
  }

  if (collectedDataFromSem.purchase_crushed_stone_sand_gravel_mixture) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)', 'м' + '<sup>3</sup>', collectedDataFromSem.purchase_crushed_stone_sand_gravel_mixture));
  }

  if (collectedDataFromSem.purchase_concrete) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение бетона класса С16/20 F100', 'м' + '<sup>3</sup>', collectedDataFromSem.purchase_concrete));
  }

  if (collectedDataFromSem.installation_of_metal_structures_in_concrete) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Установка металлических конструкций в теле бетона', 'кг', collectedDataFromSem.installation_of_metal_structures_in_concrete));
  }

  if (collectedDataFromSem.digging_trenches) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Рытье траншеи в ручную', 'м' + '<sup>3</sup>', collectedDataFromSem.digging_trenches));
  }

  if (collectedDataFromSem.ground_underlay) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Устройство постели из просеянной земли', 'м' + '<sup>3</sup>', collectedDataFromSem.ground_underlay));
  }

  if (collectedDataFromSem.backfill) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Засыпка грунтом', 'м' + '<sup>3</sup>', collectedDataFromSem.backfill));
  }

  if (collectedDataFromSem.dismantling_cable_from_pylon) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг', 'м', collectedDataFromSem.dismantling_cable_from_pylon));
  }

  if (collectedDataFromSem.dismantling_metal_corner_from_pylon) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж существующего уголка с опоры', 'кг', collectedDataFromSem.dismantling_metal_corner_from_pylon));
  }

  if (collectedDataFromSem.dismantling_clamp_ZOP) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж зажимов ЗОПг-2', 'шт.', collectedDataFromSem.dismantling_clamp_ZOP));
  }

  if (collectedDataFromSem.dismantling_metal_construction_from_pylon) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж металлоконструкций с опоры', 'кг', collectedDataFromSem.dismantling_metal_construction_from_pylon));
  }

  if (collectedDataFromSem.dismantling_INside_sleeve_4) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1', 'шт.', collectedDataFromSem.dismantling_INside_sleeve_4));
  }

  if (collectedDataFromSem.dismantling_INside_sleeve_2) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1', 'шт.', collectedDataFromSem.dismantling_INside_sleeve_2));
  }

  if (collectedDataFromSem.purchase_NShAL) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж наконечника НШАЛ 16-14 на жилу СИП-4и', 'шт.', collectedDataFromSem.purchase_NShAL));
  }

  if (collectedDataFromSem.purchase_n_montage_TUT) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Пиобретение и монтаж термоусаживаемой трубки ТУТ 35/15', 'м', collectedDataFromSem.purchase_n_montage_TUT));
  }

  if (collectedDataFromSem.purchase_PKV) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение пасты кварце-вазилиновой (ПКВ)', 'г', collectedDataFromSem.purchase_PKV));
  }

  if (collectedDataFromSem.zadelka_SIP) {
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Заделка провода СИП-4и', 'шт.', collectedDataFromSem.zadelka_SIP));
  }

  return workTable;
};

/* harmony default export */ __webpack_exports__["default"] = (workTable);

/***/ }),

/***/ "./src/layout/scripts/scopeOfWork.js":
/*!*******************************************!*\
  !*** ./src/layout/scripts/scopeOfWork.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_scopeOfWork_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/scopeOfWork.css */ "./src/layout/css/scopeOfWork.css");
/* harmony import */ var _css_scopeOfWork_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_scopeOfWork_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/main-object-collect */ "./src/layout/scripts/data/main-object-collect.js");
/* harmony import */ var _table_for_order_n_works_create_info_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-for-order_n_works/create-info-table */ "./src/layout/scripts/table-for-order_n_works/create-info-table.js");
/* harmony import */ var _cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cipher/add-cipher-table */ "./src/layout/scripts/cipher/add-cipher-table.js");
/* harmony import */ var _cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cipher/add-aside-table */ "./src/layout/scripts/cipher/add-aside-table.js");
/* harmony import */ var _cipher_add_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cipher/add-format */ "./src/layout/scripts/cipher/add-format.js");
/* harmony import */ var _for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./for-order-list/add-sum-sem */ "./src/layout/scripts/for-order-list/add-sum-sem.js");
/* harmony import */ var _for_works_works__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./for-works/works */ "./src/layout/scripts/for-works/works.js");
/* eslint-disable camelcase */

/* eslint-disable linebreak-style */








var userInput = localStorage.getItem('userInput');
userInput = Object(_data_main_object_collect__WEBPACK_IMPORTED_MODULE_1__["default"])(userInput);
console.log(userInput, '- userInput');
var userInputWithoutSameBreakers = []; // удаление щитков с одинаковыми номиналами автоматов

for (var i = 0; i < userInput.length; i += 1) {
  if (i === 0) {
    userInputWithoutSameBreakers.push(userInput[i]);
  } else if (userInput[i].SEMType !== userInput[i - 1].SEMType || userInput[i].inputFromSem !== userInput[i - 1].inputFromSem || userInput[i].pillarType !== userInput[i - 1].pillarType) {
    userInputWithoutSameBreakers.push(userInput[i]); // console.log(userInput[i].SEMType, ' - добавляем');
  } else {
    // тут меняется количество щитков путем прибавления тех которые пропустили к таким же
    userInput[i - 1].countOfSEM = userInput[i - 1].countOfSEM + userInput[i].countOfSEM;
  }
}

console.log(userInputWithoutSameBreakers, '- userInputWithoutSameBreakers'); // узнать кол-во схем, для нумерации

var shemePages = [];

for (var _i = 0; _i < userInput.length; _i += 1) {
  console.log(_i);

  if (_i === 0) {
    shemePages.push(_i);
  } else if (userInput[_i].SEMType.split('-')[2] !== userInput[_i - 1].SEMType.split('-')[2] || userInput[_i].SEMType.split('-')[3] !== userInput[_i - 1].SEMType.split('-')[3]) {
    shemePages.push(_i);
  }
}

var projectData = JSON.parse(localStorage.getItem('projectData'));
console.log(projectData); // let getScopeOfWorkButton = document.getElementById('get-scope-of-work');
// getScopeOfWorkButton.onclick = function (e) {
// 	e.preventDefault();

var countersAndBreakersWrapper = document.getElementById('counters_n_breakers_container');
countersAndBreakersWrapper.classList.add('hide_counters_n_breakers_container');

for (var _i2 = 0; _i2 < userInputWithoutSameBreakers.length; _i2 += 1) {
  // add main table
  var infoTableWrapper = document.getElementById('info_table_wrapper');
  infoTableWrapper.classList.add('show_info_table_wrapper');
  var infoTable = document.querySelector('.info_table_body');
  var rowForInfoTable = Object(_table_for_order_n_works_create_info_table__WEBPACK_IMPORTED_MODULE_2__["default"])(userInputWithoutSameBreakers[_i2], false);
  infoTable.append(rowForInfoTable); // add wrapper

  var orderWrapper = document.getElementById('order_sheet');
  var h6_break = document.createElement('H6');
  h6_break.classList.add('h6_break');
  var a4div = document.createElement('DIV');
  a4div.classList.add('a4_div');
  var a4div_frame = document.createElement('DIV');
  a4div_frame.classList.add('a4_div_frame');
  orderWrapper.append(h6_break, a4div);
  a4div.append(a4div_frame); // add cipher in wrapper

  a4div_frame.append(Object(_cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_3__["default"])(projectData, '103', 'works', userInputWithoutSameBreakers[_i2], _i2, userInput, shemePages)); // add aside frame in wrapper

  a4div_frame.append(Object(_cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_4__["default"])());
  a4div_frame.append(Object(_for_works_works__WEBPACK_IMPORTED_MODULE_7__["default"])(userInputWithoutSameBreakers[_i2]));
  a4div.append(Object(_cipher_add_format__WEBPACK_IMPORTED_MODULE_5__["default"])('A4'));
}

Object(_for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_6__["default"])(userInputWithoutSameBreakers); // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc2NvcGVPZldvcmsuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3Njb3BlT2ZXb3JrLmNzcz9hMTM1Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWNpcGhlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtcGFnZS1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvYWRkLXN1bS1zZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci13b3Jrcy9jcmVhdGUtcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itd29ya3Mvd29ya3MtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLXdvcmtzL3dvcmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zY29wZU9mV29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvdGFibGUtZm9yLW9yZGVyX25fd29ya3MvY3JlYXRlLWluZm8tdGFibGUuanMiXSwibmFtZXMiOlsiYWRkQXNpZGVUYWJsZSIsImFzaWRlX2ZyYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicm93MSIsInJvdzIiLCJyb3czIiwiYXBwZW5kIiwidGQxXzEiLCJzcGFuX3RkMV8xIiwidGQxXzIiLCJ0ZDJfMSIsInNwYW5fdGQyXzEiLCJ0ZDJfMiIsInRkM18xIiwic3Bhbl90ZDNfMSIsInRkM18yIiwiaW5uZXJIVE1MIiwiYWRkQ2lwaGVyVGFibGUiLCJwcm9qZWN0Iiwic3Vic2VjdGlvbiIsInR5cGVPZlBhZ2UiLCJzZW0iLCJpbmRleCIsIm1haW5PYmoiLCJzaGVtZVBhZ2VzIiwiY29uc29sZSIsImxvZyIsItGBaXBoZXJUYWJsZSIsInRib2R5Iiwicm93XzEiLCJyb3dfMiIsInJvd18zIiwicm93XzQiLCJyb3dfNSIsInJvd182Iiwicm93XzciLCJyb3dfOCIsInJvd185Iiwicm93XzEwIiwicm93XzExIiwidGQxXzMiLCJ0ZDFfNCIsInRkMV81IiwidGQxXzYiLCJ0ZDFfNyIsInNldEF0dHJpYnV0ZSIsInRkMl8zIiwidGQyXzQiLCJ0ZDJfNSIsInRkMl82IiwidGQzXzMiLCJ0ZDNfNCIsInRkM181IiwidGQzXzYiLCJ0ZDNfNyIsInRkNF8xIiwidGQ0XzIiLCJ0ZDRfMyIsInRkNF80IiwidGQ0XzUiLCJ0ZDRfNiIsInRkNV8xIiwidGQ1XzIiLCJ0ZDVfMyIsInRkNV80IiwidGQ1XzUiLCJ0ZDVfNiIsInRkNl8xIiwidGQ2XzIiLCJ0ZDZfMyIsInRkNl80IiwidGQ2XzUiLCJ0ZDZfNiIsInRkNl83IiwidGQ2XzgiLCJ0ZDdfMSIsInRkN18yIiwidGQ3XzMiLCJ0ZDdfNCIsInRkN181IiwidGQ3XzYiLCJ0ZDdfNyIsInRkOF8xIiwidGQ4XzIiLCJ0ZDhfMyIsInRkOF80IiwidGQ5XzEiLCJ0ZDlfMiIsInRkOV8zIiwidGQ5XzQiLCJ0ZDlfNSIsInRkOV82IiwidGQxMF8xIiwidGQxMF8yIiwidGQxMF8zIiwidGQxMF80IiwidGQxMV8xIiwidGQxMV8yIiwidGQxMV8zIiwidGQxMV80IiwiY2lwaGVyIiwibmFtZU9mUHJvamVjdCIsIm5hbWVPZkJvc3MiLCJzcGxpdCIsImQiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwidG9kYXkiLCJzdGFnZU9mUHJvamVjdCIsInRleHRDb250ZW50IiwiYWRkT3JkZXJQYWdlTnVtYmVyIiwiYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIiLCJhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyIiwiYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyIiwiaXNCb3NzU2lnbmF0dXJlIiwiYm9zc1NpZ25hdHVyZSIsImJvc3NTaWduYXR1cmUyIiwiZnVsbERlY3JpcHRpb24iLCJTRU1UeXBlIiwiZGVjcmlwdGlvbkZvcldvcmtzIiwicF9iZXNwIiwibG9nb19iZXNwIiwibmFtZU9mRGV2ZWxvcGVyIiwiaXNEZXZlbG9wZXJTaWduYXR1cmUiLCJkZXZlbG9wZXJTaWduYXR1cmUiLCJhZGRGb3JtYXQiLCJmb3JtYXQiLCJmb3JtYXRfZGl2IiwiZm9ybWF0UGFyYSIsImFyck9mU2VtcyIsImlucHV0X3BhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldmlvdXNQYWdlIiwicXVlcnlTZWxlY3RvciIsInNoZW1lUGFnZXNTdW0iLCJsZW5ndGgiLCJtYWluT2JqZWN0Q29sbGVjdCIsInN0ciIsImFycmF5T2ZVc2VySW5wdXQiLCJyZXN1bHRBcnJheSIsImxlZ2VuZEFycmF5IiwiU0VNIiwiYXJyIiwiY291bnRPZlNFTSIsImluZGV4T2YiLCJicmVha2VyMVZhbHVlIiwiYnJlYWtlcjJWYWx1ZSIsImNvdW50ZXJDb3VudEluU0VNIiwiaW5wdXRGcm9tU2VtIiwidG9Mb3dlckNhc2UiLCJwaWxsYXJUeXBlIiwicGhhc2UxVmFsdWUiLCJwaGFzZTJWYWx1ZSIsIm91dEJyZWFrZXIxIiwib3V0QnJlYWtlcjIiLCJkZXNjcmlwdGlvbiIsImFsZXJ0IiwiaW5zdGFsbGF0aW9uIiwiaSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJhZGRTdW1TZW0iLCJhcnJPZlNlbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdW1PZkNvdW50Iiwic3VtT2ZTZW0iLCJjcmVhdGVSb3ciLCJtZWFzdXJlIiwidmFsdWUiLCJyb3ciLCJ0ZDEiLCJ0ZDIiLCJ0ZDMiLCJ3b3Jrc0RhdGFDb2xsZWN0IiwiaW5wdXQiLCJTRU1XT1JLUyIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEiLCJyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2giLCJyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEiLCJyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2giLCJyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCIsImluY2x1ZGVzIiwiZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2giLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwid2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMiLCJwdXJjaGFzZV9OU2hBTCIsInB1cmNoYXNlX25fbW9udGFnZV9UVVQiLCJwdXJjaGFzZV9QS1YiLCJ6YWRlbGthX1NJUCIsIndpcmVfcm91dGluZ19pbl90aGVfcGlwZSIsInB1cmNoYXNlX3dpcmVfd2l0aF8yX3BlcmNlbnQiLCJwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80IiwicHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQiLCJwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yIiwicHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIiLCJwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QIiwicHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyIsInB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAiLCJwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwIiwicHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZyIsInB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAiLCJwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxIiwiZXhjYXZhdGlvbiIsInNvaWxfbGV2ZWxpbmciLCJwdXJjaGFzZV9jcnVzaGVkX3N0b25lX3NhbmRfZ3JhdmVsX21peHR1cmUiLCJwdXJjaGFzZV9jb25jcmV0ZSIsImluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlIiwiZGlnZ2luZ190cmVuY2hlcyIsImdyb3VuZF91bmRlcmxheSIsImJhY2tmaWxsIiwiZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbiIsImRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uIiwiZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24iLCJkaXNtYW50bGluZ19jbGFtcF9aT1AiLCJkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQiLCJkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIiLCJ3b3JrVGFibGUiLCJib2R5T2ZXb3JrVGFibGUiLCJyb3cxT2ZXb3JrVGFibGUiLCJ0ZDFfMU9mV29ya1RhYmxlIiwidGQxXzJPZldvcmtUYWJsZSIsInRkMV8zT2ZXb3JrVGFibGUiLCJjb2xsZWN0ZWREYXRhRnJvbVNlbSIsInRvRml4ZWQiLCJ1c2VySW5wdXQiLCJ1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzIiwicHJvamVjdERhdGEiLCJKU09OIiwicGFyc2UiLCJjb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlciIsImluZm9UYWJsZVdyYXBwZXIiLCJpbmZvVGFibGUiLCJyb3dGb3JJbmZvVGFibGUiLCJjcmVhdGVJbmZvVGFibGUiLCJvcmRlcldyYXBwZXIiLCJoNl9icmVhayIsImE0ZGl2IiwiYTRkaXZfZnJhbWUiLCJuZWVkQnJlYWtlcnNJbmZvIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QixDQUFkO0FBRUEsTUFBTStELEtBQUssR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWdFLEtBQUssR0FBR2pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWlFLEtBQUssR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTWtFLEtBQUssR0FBR25FLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTW1FLEtBQUssR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTW9FLEtBQUssR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBRUEsTUFBTXFFLEtBQUssR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FxRSxPQUFLLENBQUN0QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXVCLEtBQUssR0FBR3ZFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FzRSxPQUFLLENBQUN2QixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTXdCLEtBQUssR0FBR3hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXdFLEtBQUssR0FBR3pFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTXlFLEtBQUssR0FBRzFFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0F5RSxPQUFLLENBQUMxQixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsTUFBTTJCLEtBQUssR0FBRzNFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFBTTJFLEtBQUssR0FBRzVFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0EsTUFB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QUF4RCxlQUF3RTNJLEdBQUcsQ0FBQ2lJLGFBQTVFO0FBQ0EsS0FGRCxNQUVPLElBQUlqSSxHQUFHLENBQUNtSSxpQkFBSixLQUEwQixDQUE5QixFQUFpQztBQUN2QzJCLFNBQUcsQ0FBQ2xFLFdBQUosb0VBQStCNUYsR0FBRyxDQUFDNkksWUFBbkMsZUFBb0Q3SSxHQUFHLENBQUMySSxXQUF4RCxlQUF3RTNJLEdBQUcsQ0FBQ2lJLGFBQTVFLHNCQUFnR2pJLEdBQUcsQ0FBQ2tJLGFBQXBHO0FBQ0E7QUFDRCxHQU5ELE1BTU87QUFDTjRCLE9BQUcsQ0FBQ2xFLFdBQUosb0VBQStCNUYsR0FBRyxDQUFDNkksWUFBbkMsZUFBb0Q3SSxHQUFHLENBQUMySSxXQUF4RDtBQUNBOztBQUVEb0IsS0FBRyxDQUFDbkUsV0FBSixHQUFrQjVGLEdBQUcsQ0FBQytILFVBQXRCO0FBRUE2QixLQUFHLENBQUMzSyxNQUFKLENBQVc0SyxHQUFYLEVBQWdCQyxHQUFoQixFQUFxQkMsR0FBckI7QUFDQSxTQUFPSCxHQUFQO0FBQ0EsQ0F6QkQ7O0FBMkJlMEUsOEVBQWYsRSIsImZpbGUiOiJzY29wZU9mV29ya0VudHJ5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xheW91dC9zY3JpcHRzL3Njb3BlT2ZXb3JrLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnOyBcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXHJcXG59XFxyXFxuQG1lZGlhIHByaW50IHtcXHJcXG4gICAgLyog0LfQtNC10YHRjCDQsdGD0LTRg9GCINGB0YLQuNC70Lgg0LTQu9GPINC/0LXRh9Cw0YLQuCAqL1xcclxcblxcdGhlYWRlciwgXFxyXFxuXFx0Lm1haW4tdGFibGUsXFxyXFxuXFx0LmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyLFxcclxcblxcdGZvb3RlciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcblxcdH1cXHJcXG5cXHQuYTRfZGl2IHtcXHJcXG5cXHRcXHRwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRicmVhay1hZnRlcjogYWx3YXlzICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxyXFxuXFx0XFx0Lypib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgKi9cXHJcXG5cXHR9IFxcclxcblxcclxcblxcdC7RgWlwaGVyX3RhYmxlIHRke1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTJwdDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCg3KXtcXHJcXG5cXHRcXHRmb250LXNpemU6IDI0cHQ7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5zcXVhcmVfY2hlY2tlZCB7XFxyXFxuXFx0XFx0LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xcclxcblxcdFxcdGNvbG9yLWFkanVzdDogZXhhY3Q7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdEBwYWdlIHtcXHJcXG5cXHRcXHRzaXplOiBhdXRvOyAgXFxyXFxuXFx0XFx0bWFyZ2luOiAwOyAgXFxyXFxuXFx0fVxcclxcblxcdC8qIGg2IHtcXHJcXG5cXHRcXHQtd2Via2l0LWRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcdCAqL1xcclxcbn1cXHJcXG4vKiBAbWVkaWEgcHJpbnQgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MClcXHJcXG4gIGFuZCAobWluLXJlc29sdXRpb246LjAwMWRwY20pIHtcXHJcXG5cXHRoNiB7XFxyXFxuXFx0XFx0LXdlYmtpdC1kaXNwbGF5OiBub25lO1xcclxcblxcdH0gXFxyXFxufSAqL1xcclxcbmg2IHtcXHJcXG5cXHRoZWlnaHQ6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0dPU1QgMi4zMDQtODEgdHlwZSBBJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogYmxhY2s7IFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMjEwbW07XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdC8qIGJhY2tncm91bmQ6IHVybCgnL2ltZy8wMDAxLmpwZycpOyAqL1xcclxcbn1cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG5cXHRjb2xvcjogIHdoaXRlO1xcclxcbn1cXHJcXG4vKiDQmtCd0J7Qn9Ca0JggKi9cXHJcXG4uYnRuIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogIzAwOEI4QjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRtYXJnaW46IDVweCAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDs7XFxyXFxufVxcclxcbi5idG46bGFzdC1jaGlsZHtcXHJcXG5cXHRtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuLmJ0bjpob3ZlciwgLmlucHV0LWJ0bjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDpcXHQjMDA4QzMzO1xcclxcblxcdGJvcmRlcjogIzBiNjYwMyBzb2xpZCAycHg7XFxyXFxufVxcclxcbi8q0JTQmNCSICDRgSDQv9GA0LjQvNC10YfQsNC90LjQtdC8INC4INGB0YHRi9C70LrQvtC5INC90LAg0YLQsNCx0LvQuNGG0YMg0L7QsdGK0LXQvNC+0LIqL1xcclxcbi8qIC53b3Jrc190YWJsZSB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDI1cHg7XFxyXFxufSAqL1xcclxcblxcclxcbi8qRGl2INGBINCy0LXRgNGF0L3QtdC5INGC0LDQsdC70LjRhtC+0LkgKi9cXHJcXG4ubWFpbi10YWJsZSB7XFxyXFxuXFx0YmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG5cXHRmb250LXNpemU6IDIxcHg7XFxyXFxufVxcclxcbi8q0JvQtdCz0LXQvdC00YsqL1xcclxcbmxlZ2VuZHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogNXB4O1xcclxcbn1cXHJcXG4vKtCi0JDQkdCb0JjQptCrLCDQvtCx0YnQuNC1INGB0LLQvtC50YHRgtCy0LAqL1xcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG50ZCwgdGgge1xcclxcblxcdGJvcmRlcjogMC4yNW1tIHNvbGlkICMwMDA7XFxyXFxufVxcclxcbnRib2R5IHRyOm50aC1jaGlsZCgybi0xKSB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2UzZjhlYTtcXHJcXG59XFxyXFxudHI6bnRoLWNoaWxkKDJuKSwgdGhlYWQge1xcclxcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxyXFxufVxcclxcbi8q0KLQkNCR0JvQmNCm0JAg0JjQndCk0J7QoNCc0JDQptCY0JgqL1xcclxcbi5pbmZvX3RhYmxlIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGQsIC5pbmZvX3RhYmxlIHRoIHtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjMDA4QjhCO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0ZDpudGgtY2hpbGQoMSksICAuaW5mb190YWJsZSB0ZDpudGgtY2hpbGQoMil7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRkOmxhc3QtY2hpbGR7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0aDpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0d2lkdGg6IDQwbW07XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRoOmxhc3QtY2hpbGQge1xcclxcblxcdHdpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSAubGFzdF90ZCB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuXFx0LyogcGFkZGluZy1ib3R0b206IDEwcHg7ICovXFxyXFxufVxcclxcbi8q0JrQntCd0KLQldCZ0J3QldCg0Ksg0JTQm9CvINCe0J/QoNCe0KHQndCr0KUqL1xcclxcbi5vcmRlcl9jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQ6ICM0OEQxQ0M7XFxyXFxufVxcclxcbi5hNF9kaXY6bnRoLWNoaWxkKDRuLTIpe1xcclxcblxcdGJhY2tncm91bmQ6ICNkMGVjZWM7XFxyXFxufVxcclxcbi5hNF9kaXY6bnRoLWNoaWxkKDRuKXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjYzFlNmMxO1xcclxcbn1cXHJcXG4uYTRfZGl2IHtcXHJcXG5cXHRoZWlnaHQ6IDI5Ni41bW07XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYTRfZGl2X2ZyYW1lIHtcXHJcXG5cXHRmb250LXNpemU6IDExLjVwdDtcXHJcXG5cXHRoZWlnaHQ6IDI4N21tO1xcclxcblxcdHdpZHRoOiAxODVtbTtcXHJcXG5cXHRsZWZ0OiAyMG1tO1xcclxcblxcdGJvdHRvbTogNW1tO1xcclxcblxcdGJvcmRlcjogMC42bW0gc29saWQgYmxhY2s7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcdFxcclxcblxcdGRpc3BsYXk6IGJsb2NrOyAvKmRlbCovXFxyXFxufVxcclxcblxcclxcbi8q0KLQkNCR0JvQmNCm0JAt0J7Qn9Cg0J7QodCd0KvQmSovXFxyXFxuLndvcmtzX3RhYmxlIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgxKSB7XFxyXFxuXFx0d2lkdGg6IDE1MG1tO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxbW07XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0ZDpudGgtY2hpbGQoMm4rMSkge1xcclxcblxcdGhlaWdodDogNS41bW07XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcclxcblxcdHdpZHRoOiAxMG1tO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItbGVmdDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG5cXHRib3JkZXItcmlnaHQ6ICMwMDAgc29saWQgMC42bW07XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcclxcbn1cXHJcXG4ud29ya3NfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDhtbTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlci1ib3R0b206ICMwMDAgc29saWQgMC42bW07XFxyXFxuXFx0Ym9yZGVyLXRvcDogbm9uZTtcXHJcXG59XFxyXFxuLyogLnNxdWFyZSB7XFxyXFxuXFx0d2lkdGg6IDEycHg7XFxyXFxuXFx0aGVpZ2h0OiAxMnB4O1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuXFx0ZmxvYXQ6IGxlZnQ7XFxyXFxuXFx0bWFyZ2luLXRvcDogMnB4O1xcclxcblxcdG1hcmdpbi1yaWdodDogNXB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFweDtcXHJcXG59XFxyXFxuLnNxdWFyZTpsYXN0LWNoaWxkIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcbi5zcXVhcmVfY2hlY2tlZCB7XFxyXFxuXFx0YmFja2dyb3VuZDogIzAwMDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyrQn9GA0LjQvNC10YfQsNC90LjQtSDQv9C+0YHQu9C1INC+0L/RgNC+0YHQvdC+0LPQviovXFxyXFxuLm5vdGV7XFxyXFxuXFx0cGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4vKtCg0JDQnNCa0JAt0KjQmNCk0KAqL1xcclxcbi7RgWlwaGVyX3RhYmxlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRke1xcclxcbiAgICBsaW5lLWhlaWdodDogMC45NTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB0OztcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcdGJvcmRlci1yaWdodDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG5cXHRib3JkZXItbGVmdDogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkOm50aC1jaGlsZCg0KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDIpe1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuXFx0LyogZm9udC1zaXplOiAxNHB4O1xcdCAqL1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpudGgtY2hpbGQobis3KXtcXHJcXG5cXHRib3JkZXI6ICMwMDAgc29saWQgMC42bW07XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKG4rNSl7XFxyXFxuXFx0Ym9yZGVyLXRvcDogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNil7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1sZWZ0OiBub25lO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmxhc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZChuKzQpe1xcclxcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFx0XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgxKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDIpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMykge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAycHg7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgxKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDIpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMyksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg0KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNikge1xcclxcblxcdHdpZHRoOiAxMG1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoNSkge1xcclxcblxcdHdpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDUpIHtcXHJcXG5cXHR3aWR0aDogNzBtbTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KSxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDcpIHtcXHJcXG5cXHR3aWR0aDogMTVtbTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCg3KXtcXHJcXG5cXHRmb250LXNpemU6IDI0cHQ7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQoNSl7XFxyXFxuXFx0Zm9udC1zaXplOiAxMS4ycHQ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuODU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyIHRkOmZpcnN0LWNoaWxke1xcclxcblxcdGhlaWdodDogNW1tO1xcclxcbn1cXHJcXG4ucF9iZXNwe1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHQvKm1hcmdpbi1ib3R0b206IDEwcHg7Ki9cXHJcXG59XFxyXFxuLmxvZ29fYmVzcHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0bWFyZ2luOiAwcHggMCAtMTJweCA3cHg7XFx0XFxyXFxufVxcclxcbi8q0J/QoNCv0KfQldCcINCk0J7QoNCc0KMg0JLQndCV0KHQldCd0JjQryDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JDQktCi0J7QnNCQ0KLQntCSINCf0J7QodCb0JUg0JXQlSDQl9CQ0J/QntCb0J3QldCd0JjQryovXFxyXFxuLmhpZGVfc3VibWl0IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCf0KDQr9Cn0JXQnCDQpNCe0KDQnNCjINCS0J3QldCh0JXQndCY0K8g0KHQp9CV0KLQp9CY0JrQntCSINCYINCQ0JLQotCe0JzQkNCi0J7QkiDQn9Ce0KHQm9CVINCV0JUg0JfQkNCf0J7Qm9Cd0JXQndCY0K8qL1xcclxcbi8qIC5oaWRlX2NvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbiAgfSAqL1xcclxcblxcclxcbi8q0J/QntCa0JDQl9Cr0JLQkNCV0JwqL1xcclxcbi5pbmZvX3RhYmxlX3dyYXBwZXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zaG93X2luZm9fdGFibGVfd3JhcHBlciB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mb290ZXJfc2hvdyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFx0XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyrQpNCe0KDQnNCQINCS0JLQntCU0JAg0KHQp9CV0KLQp9CY0JrQntCSINCYINCS0KvQmtCb0K7Qp9CQ0KLQldCb0JXQmSovXFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDtcXHJcXG5cXHQvKiBtaW4taGVpZ2h0OiA5NDhweDsgKi9cXHJcXG59XFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyIGlucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDIxcHg7XFx0XFxyXFxufVxcclxcbi8q0L3Rg9C80LXRgNCw0YbQuNGPINC70LjRgdGC0L7QsiovXFxyXFxuLmlucHV0X3BhZ2V7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG5cXHRib3JkZXI6ICMwMDhCOEIgc29saWQgMnB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHRcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcbi8q0KHQp9CV0KLQp9CY0JrQmCovXFxyXFxuLmNvdW50ZXJzX3dyYXBwZXJ7XFxyXFxuXFx0YmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG5cXHRib3JkZXI6ICMwMDhCOEIgc29saWQgMnB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHRcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5pbnB1dF9wYWdlIHAsXFxyXFxuLmNvdW50ZXJzX3dyYXBwZXIgcHtcXHJcXG5cXHRwYWRkaW5nOiAxMnB4IDAgMnB4IDA7XFxyXFxufVxcclxcbi5jb3VudGVyc193cmFwcGVyIC5jb3VudGVyX25vdGUge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGNvbG9yOiAjMGI2NjAzO1xcclxcbn1cXHJcXG4uY291bnRlcnNfd3JhcHBlciAuY291bnRlcl9ub3RlOmxhc3QtY2hpbGQge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0xZixcXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgI2NvdW50ZXItM2Yge1xcclxcblxcdHdpZHRoOiA5MSU7XFxyXFxufVxcclxcbi5pbnB1dF9wYWdlICNpbnB1dF9wYWdlXFxyXFxuLyosIC5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0zZiovXFxyXFxue1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi8q0JLQq9Ca0JvQrtCn0JDQotCV0JvQmCovXFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvLFxcclxcbi5icmVha2VyX2RpdiB7XFxyXFxuXFx0Ym9yZGVyOiAjMDA4QjhCIHNvbGlkIDJweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiA0MHB4O1xcdFxcdFxcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW97XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbzpudGgtY2hpbGQoMm4tMSl7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1ZmU2N2M7XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbzpudGgtY2hpbGQoMm4pe1xcclxcblxcdGJhY2tncm91bmQ6ICM0ZmY5YWE7XFxyXFxufVxcclxcbi5icmVha2VyX2RpdjpudGgtY2hpbGQoMm4tMSl7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2Om50aC1jaGlsZCgybil7XFxyXFxuXFx0YmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvIC5icmVha2VyX3AsXFxyXFxuLmJyZWFrZXJfZGl2IC5icmVha2VyX3B7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDE1cHggMCAycHggMDtcXHRcXHJcXG5cXHRtYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxufVxcclxcbi8qIC5icmVha2VyX2Rpdl9yYWRpbyAucmFkaW9fcCwgKi9cXHJcXG4uYnJlYWtlcl9kaXYgLmlucHV0LXB7XFxyXFxuXFx0cGFkZGluZzogOHB4IDAgMnB4IDA7XFx0XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpbyBsYWJlbHtcXHJcXG5cXHRwYWRkaW5nOiAzcHggMCAwIDEwcHg7XFxyXFxufVxcclxcbi8qIC5icmVha2VyX2RpdiBsYWJlbDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn0gKi9cXHJcXG4uYnJlYWtlcl9kaXYgaW5wdXQ6bGFzdC1jaGlsZHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG4vKiAu0YFpcGhlcl90YWJsZSB0cjpsYXN0LWNoaWxkIHRke1xcclxcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufSAqL1xcclxcblxcclxcbi8q0YTQvtGA0LzQsNGCICjQkDQpKi9cXHJcXG4uZm9ybWF0X2RpdntcXHJcXG5cXHRib3R0b206IDFweDtcXHJcXG4gICAgcmlnaHQ6IDkycHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyrQkdCe0JrQntCS0JDQryDQp9CQ0KHQotCsINCg0JDQnNCa0JgqL1xcclxcbiAuYXNpZGVfZnJhbWUge1xcclxcblxcdC8qdHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpOyAqL1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRib3R0b206IC0wLjVtbTtcXHJcXG5cXHRsZWZ0OiAtMTNtbTtcXHJcXG59XFxyXFxuIC5hc2lkZV9mcmFtZSBzcGFue1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuXFx0LXdlYmtpdC13cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xcclxcblxcdHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxyXFxuIH1cXHJcXG4uYXNpZGVfZnJhbWUgdGR7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJvcmRlcjogMC42bW0gc29saWQgYmxhY2s7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB0O1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTtcXHJcXG4vKlxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTsqL1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdHI6bnRoLWNoaWxkKDJuKzEpIHRke1xcclxcblxcdGhlaWdodDogMjUuM21tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdHI6bnRoLWNoaWxkKDIpIHRke1xcclxcblxcdGhlaWdodDogMzUuNm1tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGQ6Zmlyc3QtY2hpbGR7XFxyXFxuXFx0d2lkdGg6IDVtbTtcXHJcXG59XFxyXFxuLmFzaWRlX2ZyYW1lIHRkOmxhc3QtY2hpbGR7XFxyXFxuXFx0d2lkdGg6IDdtbTtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufSBcXHJcXG5cXHJcXG4vKtCy0LLQvtC0IOKEliDRgdGC0YDQsNC90LjRhtGLKi9cXHJcXG4jaW5wdXRfcGFnZXtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduYXR1cmV7XFxyXFxuXFx0bWF4LXdpZHRoOiA2NXB4O1xcclxcblxcdG1heC1oZWlnaHQ6IDMzcHg7XFxyXFxuXFx0Ym90dG9tOiAtN3B4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZV9ib3NzIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IDE1cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3MyIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IDMzcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRmYWVhZmQ0OTczZjg4OTIwMDc0ZTQ2ZTU1NWIxMmZjLnR0ZlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY29wZU9mV29yay5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImZ1bmN0aW9uIGFkZEFzaWRlVGFibGUoKSB7XHJcblxyXG5cdHZhciBhc2lkZV9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHRhc2lkZV9mcmFtZS5jbGFzc0xpc3QuYWRkKCdhc2lkZV9mcmFtZScpO1xyXG5cclxuXHR2YXIgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHRhc2lkZV9mcmFtZS5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcblx0dmFyIHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dmFyIHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dmFyIHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cdGJvZHkuYXBwZW5kKHJvdzEsIHJvdzIsIHJvdzMpO1xyXG5cclxuXHR2YXIgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHRkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93MS5hcHBlbmQodGQxXzEsIHRkMV8yKTtcclxuXHRyb3cyLmFwcGVuZCh0ZDJfMSwgdGQyXzIpO1xyXG5cdHJvdzMuYXBwZW5kKHRkM18xLCB0ZDNfMik7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRgdC/0LDQvdGLXHJcblx0dGQxXzEuYXBwZW5kKHNwYW5fdGQxXzEpO1xyXG5cdHRkMl8xLmFwcGVuZChzcGFuX3RkMl8xKTtcclxuXHR0ZDNfMS5hcHBlbmQoc3Bhbl90ZDNfMSk7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHRzcGFuX3RkMV8xLmlubmVySFRNTCA9ICfQmNC90LIuIE4g0L/QvtC00LsuJztcclxuXHR0ZDFfMi5pbm5lckhUTUwgPSAnJztcclxuXHRzcGFuX3RkMl8xLmlubmVySFRNTCA9ICfQn9C+0LTQv9C40YHRjCDQuCDQtNCw0YLQsCc7XHJcblx0dGQyXzIuaW5uZXJIVE1MID0gJyc7XHJcblx0c3Bhbl90ZDNfMS5pbm5lckhUTUwgPSAn0JLQt9Cw0LzQtdC9INC40L3Qsi4gTic7XHJcblx0dGQzXzIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdHJldHVybiBhc2lkZV9mcmFtZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQXNpZGVUYWJsZTtcclxuIiwiaW1wb3J0IHsgYWRkT3JkZXJQYWdlTnVtYmVyLCAgYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIsIGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlciwgYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcn0gZnJvbSAnLi9hZGQtcGFnZS1udW1iZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2lwaGVyVGFibGUocHJvamVjdCwgc3Vic2VjdGlvbiwgdHlwZU9mUGFnZSwgc2VtLCBpbmRleCwgbWFpbk9iaiwgc2hlbWVQYWdlcykge1xyXG5cclxuXHRjb25zb2xlLmxvZyhtYWluT2JqKVxyXG5cdGNvbnN0INGBaXBoZXJUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuXHTRgWlwaGVyVGFibGUuY2xhc3NMaXN0LmFkZCgn0YFpcGhlcl90YWJsZScpO1xyXG5cclxuXHRjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuXHTRgWlwaGVyVGFibGUuYXBwZW5kKHRib2R5KTtcclxuXHQvLyDRgdGC0YDQvtC60LhcclxuXHRcclxuXHRjb25zdCByb3dfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0Y29uc3Qgcm93XzExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuXHJcblx0Ly8g0LzQtdGB0YLQviDQs9C00LUg0LHRg9C00YPRgiDRgdGC0YDQvtC60LhcclxuXHR0Ym9keS5hcHBlbmQocm93XzEsIHJvd18yLCByb3dfMywgcm93XzQsIHJvd181LCByb3dfNiwgcm93XzcsIHJvd184LCByb3dfOSwgcm93XzEwLCByb3dfMTEpO1xyXG5cclxuLy8gY29uc3Qgcm93MSA9IHRib2R5WzBdO1xyXG4vKlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDExOyBpICs9IDEpIHtcclxuXHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblx0dGJvZHkuYXBwZW5kKHJvdyk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcblx0Y29uc3Qgcm93ID0gdGJvZHkuY2hpbGROb2Rlc1swXTtcclxuXHRjb25zb2xlLmxvZyh0Ym9keS5jaGlsZE5vZGVzKVxyXG5cdGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHJvdy5hcHBlbmQodGQpO1xyXG59XHJcbiovXHJcbi8vIGNvbnNvbGUubG9nKHJvdzEpXHJcblx0Ly8g0Y/Rh9C10LnQutC4XHJcblx0Y29uc3QgdGQxXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDFfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cclxuXHRjb25zdCB0ZDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDJfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQzXzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQzXzcuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzQnKTtcclxuXHR0ZDNfNy5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDRfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ1XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ1XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkNl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ2XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDZfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDZfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cdGNvbnN0IHRkNl82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl83ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl84ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDdfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN18yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ3XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN183LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblxyXG5cdGNvbnN0IHRkOF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ4XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ4XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDhfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDhfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ5XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDlfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOV81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV81LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblx0Y29uc3QgdGQ5XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzYuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzMnKTtcclxuXHR0ZDlfNi5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMycpO1xyXG5cclxuXHRjb25zdCB0ZDEwXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMF8xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTBfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTBfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDEwXzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkMTFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDExXzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDExXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMV8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMTFfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcblx0cm93XzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMsIHRkMV80LCB0ZDFfNSwgdGQxXzYsIHRkMV83KTtcclxuXHRyb3dfMi5hcHBlbmQodGQyXzEsIHRkMl8yLCB0ZDJfMywgdGQyXzQsIHRkMl81LCB0ZDJfNik7XHJcblx0cm93XzMuYXBwZW5kKHRkM18xLCB0ZDNfMiwgdGQzXzMsIHRkM180LCB0ZDNfNSwgdGQzXzYsIHRkM183KTtcclxuXHRyb3dfNC5hcHBlbmQodGQ0XzEsIHRkNF8yLCB0ZDRfMywgdGQ0XzQsIHRkNF81LCB0ZDRfNik7XHJcblx0cm93XzUuYXBwZW5kKHRkNV8xLCB0ZDVfMiwgdGQ1XzMsIHRkNV80LCB0ZDVfNSwgdGQ1XzYpO1xyXG5cdHJvd182LmFwcGVuZCh0ZDZfMSwgdGQ2XzIsIHRkNl8zLCB0ZDZfNCwgdGQ2XzUsIHRkNl82LCB0ZDZfNywgdGQ2XzgpO1xyXG5cdHJvd183LmFwcGVuZCh0ZDdfMSwgdGQ3XzIsIHRkN18zLCB0ZDdfNCwgdGQ3XzUsIHRkN182LCB0ZDdfNyk7XHJcblx0cm93XzguYXBwZW5kKHRkOF8xLCB0ZDhfMiwgdGQ4XzMsIHRkOF80KTtcclxuXHRyb3dfOS5hcHBlbmQodGQ5XzEsIHRkOV8yLCB0ZDlfMywgdGQ5XzQsIHRkOV81LCB0ZDlfNik7XHJcblx0cm93XzEwLmFwcGVuZCh0ZDEwXzEsIHRkMTBfMiwgdGQxMF8zLCB0ZDEwXzQpO1xyXG5cdHJvd18xMS5hcHBlbmQodGQxMV8xLCB0ZDExXzIsIHRkMTFfMywgdGQxMV80KTtcclxuXHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHR0ZDFfNy5pbm5lckhUTUwgPSBgJHtwcm9qZWN0LmNpcGhlcn0tJHtzdWJzZWN0aW9ufS03MC3QkNCj0K1gOyAvLzEuN1xyXG5cclxuXHR0ZDNfNy5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZlByb2plY3Q7IC8vMy43XHJcblxyXG5cdHRkNV8xLmlubmVySFRNTCA9ICfQmNC30LwuJzsgLy81LjFcclxuXHR0ZDVfMi5pbm5lckhUTUwgPSAn0JrQvtC7LtCj0YcuJzsgLy81LjJcclxuXHR0ZDVfMy5pbm5lckhUTUwgPSAn0JvQuNGB0YInOyAvLzUuM1xyXG5cdHRkNV80LmlubmVySFRNTCA9ICfihJbQtNC+0LouJzsgLy81LjRcclxuXHR0ZDVfNS5pbm5lckhUTUwgPSAn0J/QvtC00L/QuNGB0YwnOyAvLzUuNVxyXG5cdHRkNV82LmlubmVySFRNTCA9ICfQlNCw0YLQsCc7IC8vNS42XHJcblxyXG5cdHRkNl8xLmlubmVySFRNTCA9ICfQo9GC0LIuJzsgLy82LjFcclxuXHR0ZDZfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkJvc3Muc3BsaXQoJyAnKVswXTsgLy82LjJcclxuXHR0ZDZfMy5pbm5lckhUTUwgPSAnJzsgLy82LjNcclxuXHJcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblx0Ly8gY29uc3QgZGF5ID0gZC5nZXREYXRlKCk7XHJcblx0Y29uc3QgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cdGNvbnN0IHllYXIgPSBkLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuXHJcblx0bGV0IHRvZGF5O1xyXG5cdGlmIChtb250aCA8IDEwKSB7XHJcblx0XHR0b2RheSA9IGAwJHttb250aH0uJHt5ZWFyLnNwbGl0KCcnKVsyXX0ke3llYXIuc3BsaXQoJycpWzNdfWBcclxuXHR9IGVsc2Uge1xyXG5cdFx0dG9kYXkgPSBgJHttb250aH0uJHt5ZWFyLnNwbGl0KCcnKVsyXX0ke3llYXIuc3BsaXQoJycpWzNdfWBcclxuXHR9XHJcblxyXG5cdHRkNl80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkOV80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkMTBfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHR0ZDExXzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblxyXG5cdFxyXG5cdGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXInIHx8IHR5cGVPZlBhZ2UgPT09ICdvcmRlclNoZW1lJykge1xyXG5cdFx0dGQ2XzUuaW5uZXJIVE1MID0gJ9CX0LDQtNCw0L3QuNC1INC30LDQstC+0LTRgyDQvdCwINC40LfQs9C+0YLQvtCy0LvQtdC90LjQtSDRiNC60LDRhNC+0LIg0JDQodCa0KPQrSc7IC8vNi41XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnIHx8IHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0dGQ2XzUuaW5uZXJIVE1MID0gJ9Ct0LvQtdC60YLRgNC40YfQtdGB0LrQuNC1INGB0LXRgtC4IDAsNC0xMCDQutCSLiDQkNCh0JrQo9CtJzsgLy82LjVcclxuXHR9XHJcblx0dGQ2XzYuaW5uZXJIVE1MID0gJ9Ch0YLQsNC00LjRjyc7IC8vNi42XHJcblx0dGQ2XzcuaW5uZXJIVE1MID0gJ9Cb0LjRgdGCJzsgLy82LjdcclxuXHR0ZDZfOC5pbm5lckhUTUwgPSAn0JvQuNGB0YLQvtCyJzsgLy82LjhcclxuXHJcblx0dGQ3XzUuaW5uZXJIVE1MID0gcHJvamVjdC5zdGFnZU9mUHJvamVjdDtcdFx0XHQvLyA3LjVcclxuXHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkT3JkZXJQYWdlTnVtYmVyKGluZGV4LCBzZW0sIG1haW5PYmopO1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKTtcclxuXHJcblx0XHQvLyDQuNGB0L/RgNCw0LLQuNGC0Ywg0L3QuNC20LUsINGH0YLQvtCxINC+0YLQu9C40YfQsNC70LDRgdGMINC90YPQvNC10YDQsNGG0LjRj1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4LCBzaGVtZVBhZ2VzKTtcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgpO1xyXG5cdH1cclxuXHRcclxuXHR0ZDlfMS50ZXh0Q29udGVudCA9ICfQnS4g0LrQvtC90YLRgC4nOyAvLzkuMVxyXG5cdHRkOV8yLnRleHRDb250ZW50ID0gJ9CT0YPRgNC40L3QvtCy0LjRhyc7XHJcblxyXG5cdGlmIChwcm9qZWN0LmlzQm9zc1NpZ25hdHVyZSl7XHJcblx0XHRjb25zdCBib3NzU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGNvbnN0IGJvc3NTaWduYXR1cmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGJvc3NTaWduYXR1cmUuY2xhc3NMaXN0LmFkZCgnc2lnbmF0dXJlX2Jvc3MnKTtcclxuXHRcdGJvc3NTaWduYXR1cmUyLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZV9ib3NzMicpO1xyXG5cdFx0Ym9zc1NpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9ndGEucG5nJyk7XHJcblx0XHRib3NzU2lnbmF0dXJlMi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9ndGEucG5nJyk7XHJcblx0XHR0ZDlfMy5hcHBlbmQoYm9zc1NpZ25hdHVyZSk7XHJcblx0XHR0ZDEwXzMuYXBwZW5kKGJvc3NTaWduYXR1cmUyKTtcclxuXHR9XHJcblxyXG5cdC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG5cclxuXHRpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyJykge1xyXG5cdFx0dGQ5XzUudGV4dENvbnRlbnQgPSBzZW0uZnVsbERlY3JpcHRpb247IC8vOS41XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXJTaGVtZScgfHwgdHlwZU9mUGFnZSA9PT0gJ3dvcmtzU2hlbWUnKSB7XHJcblx0XHRpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcxJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0L7QtNC90L7RhNCw0LfQvdGL0Lwg0LLQstC+0LTQvtC8LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDQtNCy0YPQvNGPINC+0LTQvdC+0YTQsNC30L3Ri9C80Lgg0LLQstC+0LTQsNC80LguINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMScpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINGC0YDQtdGF0YTQsNC30L3Ri9C8INCy0LLQvtC00L7QvC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0LTQstGD0LzRjyDRgtGA0LXRhdGE0LDQt9C90YvQvNC4INCy0LLQvtC00LDQvNC4LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzInKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDRgtGA0LXRhdGE0LDQt9C90YvQvCDQuCDQvtC00L3QvtGE0LDQt9C90YvQvCDQstCy0L7QtNC+0LwuINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnKSB7XHJcblx0XHR0ZDlfNS50ZXh0Q29udGVudCA9IGAke3NlbS5kZWNyaXB0aW9uRm9yV29ya3N9LiDQktC10LTQvtC80L7RgdGC0Ywg0L7QsdGK0LXQvNC+0LIg0YHRgtGA0L7QuNGC0LXQu9GM0L3Ri9GFINC4INC80L7QvdGC0LDQttC90YvRhSDRgNCw0LHQvtGCINC/0L4g0YPRgdGC0LDQvdC+0LLQutC1YDsgLy85LjVcclxuXHR9IFxyXG5cclxuXHJcblx0Y29uc3QgcF9iZXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0cF9iZXNwLmNsYXNzTGlzdC5hZGQoJ3BfYmVzcCcpO1xyXG5cdHBfYmVzcC5zZXRBdHRyaWJ1dGUoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcblx0dGQ5XzYuYXBwZW5kKHBfYmVzcCk7XHJcblx0cF9iZXNwLmlubmVySFRNTCA9ICfQoNCj0J8nICsgJzxCUj4nICsgJ1wi0JHQtdC70Y3QvdC10YDQs9C+0YHQtdGC0YzQv9GA0L7QtdC60YJcIic7XHJcblx0Y29uc3QgbG9nb19iZXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRsb2dvX2Jlc3AuY2xhc3NMaXN0LmFkZCgnbG9nb19iZXNwJyk7XHJcblx0bG9nb19iZXNwLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL2xvZ29fYmVzcC5qcGcnKTtcclxuXHR0ZDlfNi5hcHBlbmQobG9nb19iZXNwKTtcclxuXHQvKlx0dGQ5XzYuaW5uZXJIVE1MID0gJ9Cg0KPQnyBcItCR0LXQu9GN0L3QtdGA0LPQvtGB0LXRgtGM0L/RgNC+0LXQutGCXCInOyAvLzkuNiovXHJcblxyXG5cdHRkMTBfMS5pbm5lckhUTUwgPSAn0J/RgNC+0LLQtdGA0LjQuyc7IC8vMTAuMVxyXG5cdHRkMTBfMi5pbm5lckhUTUwgPSAn0JPRg9GA0LjQvdC+0LLQuNGHJzsgLy8xMC4yXHJcblxyXG5cdHRkMTFfMS5pbm5lckhUTUwgPSAn0KDQsNC30YDQsNCxLic7IC8vMTEuMVxyXG5cdHRkMTFfMi5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWVPZkRldmVsb3Blci5zcGxpdCgnICcpWzBdOyAvLzExLjJcclxuXHJcblx0aWYgKHByb2plY3QuaXNEZXZlbG9wZXJTaWduYXR1cmUpe1xyXG5cdFx0Y29uc3QgZGV2ZWxvcGVyU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGRldmVsb3BlclNpZ25hdHVyZS5jbGFzc0xpc3QuYWRkKCdzaWduYXR1cmUnKTtcclxuXHRcdGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQk9GD0YDQuNC90L7QstC40Ycg0KIuINCQLlwiKSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9ndGEucG5nJyk7XHJcblx0XHR9IGVsc2UgaWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCY0LTQtdC70YzRh9C40Log0JMuINCgLlwiKSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9pZGVsY2hpay5wbmcnKTtcclxuXHRcdH0gZWxzZSBpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0KHQsNCy0YfQtdC90LrQviDQkC4g0JAuXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3NhdmEucG5nJyk7XHJcblx0XHR9IGVsc2UgaWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCh0LDQv9GA0L7QvdC10L3QutC+INCSLiDQki5cIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc2Fwci5wbmcnKTtcclxuXHRcdH0gZWxzZSBpZiAocHJvamVjdC5uYW1lT2ZEZXZlbG9wZXIgPT09IFwi0JzRi9GI0LrQvtCy0LXRhiDQlS4g0K8uXCIpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL21pc2sucG5nJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraS5wbmcnKTtcclxuXHRcdH1cclxuXHRcdHRkMTFfMy5hcHBlbmQoZGV2ZWxvcGVyU2lnbmF0dXJlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiDRgWlwaGVyVGFibGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENpcGhlclRhYmxlO1xyXG4iLCJmdW5jdGlvbiBhZGRGb3JtYXQoZm9ybWF0KSB7XHJcblxyXG5cdGNvbnN0IGZvcm1hdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdGZvcm1hdF9kaXYuY2xhc3NMaXN0LmFkZCgnZm9ybWF0X2RpdicpO1xyXG5cclxuXHRjb25zdCBmb3JtYXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0Zm9ybWF0UGFyYS5jbGFzc0xpc3QuYWRkKCdmb3JtYXQnKTtcclxuXHRcclxuXHRmb3JtYXRQYXJhLnRleHRDb250ZW50ID0gYNCk0L7RgNC80LDRgiAke2Zvcm1hdH1gO1xyXG5cdGZvcm1hdF9kaXYuYXBwZW5kKGZvcm1hdFBhcmEpO1xyXG5cclxuXHRyZXR1cm4gZm9ybWF0X2RpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRm9ybWF0O1xyXG4iLCJmdW5jdGlvbiBhZGRPcmRlclBhZ2VOdW1iZXIoaW5kZXgsIHNlbSwgYXJyT2ZTZW1zKSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3JkZXJQYWdlSW5wdXQnKTtcclxuXHJcblx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRyZXR1cm4gK2lucHV0X3BhZ2UgKyAxO1xyXG5cdH0gZWxzZSBpZiAoYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdIFxyXG5cdFx0JiYgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0cmV0dXJuICtwcmV2aW91c1BhZ2UgKyAxO1xyXG5cdH0gZWxzZSBpZiAoYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdIFxyXG5cdFx0fHwgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdICE9PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0cmV0dXJuIHByZXZpb3VzUGFnZSArIDI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPcmRlclNoZW1lUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlcykge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck9yZGVyUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHNoZW1lUGFnZXMpO1xyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIHNoZW1lUGFnZXNbaW5kZXhdLCBpbmRleCk7XHJcblxyXG5cdHJldHVybiAraW5wdXRfcGFnZSArIHNoZW1lUGFnZXNbaW5kZXhdICsgaW5kZXg7XHJcbn1cclxuLy9cclxuZnVuY3Rpb24gYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4KSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyV29ya3NQYWdlSW5wdXQnKTtcclxuXHJcblx0Y29uc29sZS5sb2coaW5wdXRfcGFnZSwgaW5kZXgpO1xyXG5cclxuXHRyZXR1cm4gK2lucHV0X3BhZ2UgKyBpbmRleDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlc1N1bSkge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcldvcmtzUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIGluZGV4LCBzaGVtZVBhZ2VzU3VtKTtcclxuXHJcblx0cmV0dXJuICtpbnB1dF9wYWdlICsgaW5kZXggK3NoZW1lUGFnZXNTdW0ubGVuZ3RoO1xyXG59XHJcbi8vXHJcbmV4cG9ydCB7IGFkZE9yZGVyUGFnZU51bWJlciwgIGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyLCBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIsIGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXJ9IDtcclxuIiwiZnVuY3Rpb24gbWFpbk9iamVjdENvbGxlY3Qoc3RyKSB7XHJcblx0bGV0IGFycmF5T2ZVc2VySW5wdXQgPSBzdHIuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcblx0bGV0IGxlZ2VuZEFycmF5ID0gYXJyYXlPZlVzZXJJbnB1dFswXS5zcGxpdCgnLCcpO1xyXG5cclxuXHRjbGFzcyBTRU0ge1xyXG5cdFx0Y29uc3RydWN0b3IoYXJyKSB7XHJcblxyXG5cdFx0XHR0aGlzLmNvdW50T2ZTRU0gPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JyldO1xyXG5cdFx0XHR0aGlzLmJyZWFrZXIxVmFsdWUgPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ0nQndCe0Jxf0JDQkjEnKV0uc3BsaXQoJyAnKVswXTtcclxuXHRcdFx0dGhpcy5icmVha2VyMlZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIyJyldLnNwbGl0KCcgJylbMF0gfHwgbnVsbDtcclxuXHRcdFx0dGhpcy5TRU1UeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QqdCj0K0nKV07XHJcblx0XHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPSArdGhpcy5TRU1UeXBlLnNwbGl0KCctJylbM107XHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMVxyXG5cdFx0XHRcdCYmIGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQsic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQstCyJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnBpbGxhclR5cGUgPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9Ce0J/QntCg0KsnKV0udG9Mb3dlckNhc2UoKSB8fCAn0YHQsi05NSc7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJykge1xyXG5cdFx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDM7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJ1xyXG5cdFx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMub3V0QnJlYWtlcjEgPSBgJHt0aGlzLnBoYXNlMVZhbHVlfSAtICR7dGhpcy5icmVha2VyMVZhbHVlfWA7XHJcblx0XHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIgP1xyXG5cdFx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBgJHt0aGlzLnBoYXNlMlZhbHVlfSAtICR7dGhpcy5icmVha2VyMlZhbHVlfWAgOlxyXG5cdFx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBudWxsO1xyXG5cclxuXHJcblx0XHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LInKSB7XHJcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C6Jykge1xyXG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiAodGhpcy5pbnB1dEZyb21TZW0gPT09ICfQuicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInKSB8fCAodGhpcy5pbnB1dEZyb21TZW0gPT09ICfQstC6JykpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdCw0Y8g0Lgg0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdGL0LUuJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8sIDHRhCAtINC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xyXG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6IDPRhCAtINC60LDQsdC10LvRjNC90LDRjywgMdGEIC0g0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQstC+0LfQtNGD0YjQvdGL0LUuJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhbGVydChgJHt0aGlzLmlucHV0RnJvbVNlbX0g0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiAke3RoaXMuU0VNVHlwZX0sINC/0LXRgNC10L/RgNC+0LLQtdGA0YzRgtC1INCy0LLQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0LItOTUnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItOTUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItMTEwJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0KItMTA4LjYnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQoi0xMDguNyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMycpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzQnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQttC10LvQtdC30L7QsdC10YLQvtC90L3QvtC5INC/0YDQuNGB0YLQsNCy0LrQtSDQn9CiNDMtMic7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5mdWxsRGVjcmlwdGlvbiA9IGAke3RoaXMuU0VNVHlwZX0gKCR7dGhpcy5icmVha2VyMVZhbHVlfSDQkCkuICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259LiDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCYDtcclxuXHRcdFx0XHR0aGlzLmRlY3JpcHRpb25Gb3JXb3JrcyA9IGAke3RoaXMuU0VNVHlwZX0uICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdFx0dGhpcy5mdWxsRGVjcmlwdGlvbiA9IGAke3RoaXMuU0VNVHlwZX0gKCR7dGhpcy5icmVha2VyMVZhbHVlfSDQkDsgJHt0aGlzLmJyZWFrZXIyVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheU9mVXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAoYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpLmxlbmd0aCA9PT0gNikge1xyXG5cdFx0XHRyZXN1bHRBcnJheS5wdXNoKG5ldyBTRU0oYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpKSk7XHJcblx0XHR9IGVsc2UgaWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPiA0KSB7XHJcblx0XHRcdGFsZXJ0KGDQtNC70LjQvdCwINC80LDRgdGB0LjQstCwICR7YXJyYXlPZlVzZXJJbnB1dFtpXX0gPSAke2FycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGh9INCy0LzQtdGB0YLQviA2IFxcbiDQtNCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyINC90LUg0LHRg9C00LXRgiDQvtCx0YDQsNCx0L7RgtCw0L1gKTtcclxuXHRcdCAgfVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhyZXN1bHRBcnJheSk7XHJcblxyXG5cdHJlc3VsdEFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGlmIChhLlNFTVR5cGUgPiBiLlNFTVR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbk9iamVjdENvbGxlY3Q7XHJcbiIsImZ1bmN0aW9uIGFkZFN1bVNlbShhcnJPZlNlbSkge1xyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGUnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVEJPRFknKVswXTtcclxuXHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0Ysg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LVcdFx0XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHRib2R5LmFwcGVuZChyb3cxLCByb3cyKTtcclxuXHQvLyDQodC+0LfQtNCw0LXQvCDRj9GH0LXQudC60Lgg0LIg0LLRi9GI0LXRgdC+0LfQtNCw0L3QvdC+0Lkg0YHRgtGA0L7QutC1XHJcblx0Ly8g0Lgg0LTQvtCx0LDQstC70Y/QtdC8INGC0YVcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfMS5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzIuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV8zLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHJcblx0Y29uc3QgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQyXzEuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMl8yLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDJfMy5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMiwgdGQyXzMpO1xyXG5cclxuXHRsZXQgc3VtT2ZDb3VudCA9IDA7XHJcblx0bGV0IHN1bU9mU2VtID0gMDtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJPZlNlbS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3VtT2ZTZW0gKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTTtcclxuXHRcdHN1bU9mQ291bnQgKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTSAqIGFyck9mU2VtW2ldLmNvdW50ZXJDb3VudEluU0VNO1xyXG5cdH1cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGB0YfQtdGC0YfQuNC60L7QsjonO1xyXG5cdHRkMV8zLmlubmVySFRNTCA9IHN1bU9mQ291bnQ7XHJcblxyXG5cdHRkMl8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGJ0LjRgtC60L7QsjonO1xyXG5cdHRkMl8zLmlubmVySFRNTCA9IHN1bU9mU2VtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTdW1TZW07XHJcbiIsImxldCBjcmVhdGVSb3cgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgbWVhc3VyZSwgdmFsdWUpIHtcclxuLy8gbGV0IGNyZWF0ZVJvdyA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBtZWFzdXJlLCB2YWx1ZSwgZm9yTG9uZ0Rlc2NyaXB0aW9uKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuICAgIHRkMS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGQyLmlubmVySFRNTCA9IG1lYXN1cmU7XHJcbiAgICB0ZDMudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICByb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cclxuICAgIC8vIGlmIChmb3JMb25nRGVzY3JpcHRpb24pIHtcclxuICAgIC8vICAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuICAgIC8vICAgICBjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcbiAgICAvLyAgICAgdGQxXzIudGV4dENvbnRlbnQgPSBmb3JMb25nRGVzY3JpcHRpb247XHJcbiAgICAvLyAgICAgcm93Mi5hcHBlbmQodGQxXzIsIHRkMl8yLCB0ZDNfMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHJvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmNvbnN0IHdvcmtzRGF0YUNvbGxlY3QgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgZnVuY3Rpb24gU0VNV09SS1Moc2VtKSB7XG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uY291bnRlckNvdW50SW5TRU0gIT09IDEpIHtcbiAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSB7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMi4zO1xuICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMjtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xuICAgICAgfSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDYuOTtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDY7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAxNTtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gNC42O1xuICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNDtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xuICAgICAgfVxuICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gKHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMVxuICAgICAgICAgICAgICAgICsgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNXG4gICAgICAgICAgICAgICAgKyB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoICsgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSAqIDEuMDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDA7XG4gICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7XG4gICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xuICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0LggKNC10YHRgtGMIDHRhTHRhCDQuNC70LggMtGFMdGEKSDQvdC+LCDQtdGB0LvQuCDRjdGC0L4gMy0yLTIsINGC0L4g0YLQvtC70YzQutC+IDHRhNCaINC40LvQuCDQmtCaXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScpXG4gICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJ9C60LonXG4gICAgICAgICAgICAgICAgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJzHRhNC6JykpKSB7XG4gICAgICBpZiAoKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJykgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSlcbiAgICAgICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JykpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gNy41O1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAyLjM7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAyO1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAyMi41O1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA2Ljk7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA2O1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAxMC4yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMTU7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDQ7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzFcbiAgICAgICAgICAgICAgICArIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTVxuICAgICAgICAgICAgICAgICsgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCArIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkgKiAxLjAyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcbiAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1LCDQuCDQtdGB0YLRjCDQmlxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQuicpKSB7XG4gICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XG4gICAgICAgIHRoaXMuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSA9IDAuNTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwLjI4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMSdcbiAgICAgICAgICAgICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykgJiYgIXNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJzHRhNC6JykpIHtcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDMuNDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDEuNztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInXG4gICAgICAgICAgICAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMSdcbiAgICAgICAgICAgICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykgJiYgIXNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJzHRhNC6JylcbiAgICApIHtcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDQ7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAyO1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1LCDQuCDQtdGB0YLRjCAx0YTQmlxuICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAzLjQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAxLjc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1LCDQuCDQtdGB0YLRjCAx0YTQmlxuICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gNDtcbiAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDI7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDMuNDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XG4gICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LVcbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpIHtcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAxLjU7XG4gICAgICAgIHRoaXMucHVyY2hhc2VfTlNoQUwgPSAyO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9UVVQgPSAwLjA0O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDI7XG4gICAgICAgIHRoaXMuemFkZWxrYV9TSVAgPSAyO1xuICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDYuNDtcbiAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSA1LjQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNi4xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNS4xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gOTtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9OU2hBTCA9IDEyO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9UVVQgPSAwLjI0O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDEyO1xuICAgICAgICB0aGlzLnphZGVsa2FfU0lQID0gMTI7XG4gICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0LItMTEwJykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMzguNDtcbiAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzMi40O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDM2LjY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzMC42O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gNy41O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gMTA7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX1RVVCA9IDAuMjtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9QS1YgPSAxMDtcbiAgICAgICAgdGhpcy56YWRlbGthX1NJUCA9IDEwO1xuICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMyO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDI3O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMwLjU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS41O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA0LjU7XG4gICAgICAgIHRoaXMucHVyY2hhc2VfTlNoQUwgPSA2O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9UVVQgPSAwLjEyO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDY7XG4gICAgICAgIHRoaXMuemFkZWxrYV9TSVAgPSA2O1xuICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE5LjI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTYuMjtcbiAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxOC4zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTUuMztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpKSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA2O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gODtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfVFVUID0gMC4xNjtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9QS1YgPSA4O1xuICAgICAgICB0aGlzLnphZGVsa2FfU0lQID0gODtcbiAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS42O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIxLjY7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjQuNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAzO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gNDtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfVFVUID0gMC4wODtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9QS1YgPSA0O1xuICAgICAgICB0aGlzLnphZGVsa2FfU0lQID0gNDtcbiAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxMi44O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDEwLjg7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDEwLjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zXG4gICAgICAgICAgICAgICAgKyB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSkgKiAxLjAyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMDtcbiAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9IDA7XG4gICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX1RVVCA9IDA7XG4gICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDA7XG4gICAgICB0aGlzLnphZGVsa2FfU0lQID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDPRhNCaIC4uLiDQuNC70Lgg0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GEXG4gICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJ1xuICAgICAgICAgICAgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSlcbiAgICAgICAgICAgIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScpXG4gICAgKSB7XG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMztcbiAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMidcbiAgICAgICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgIXNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JykpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxuICAgIC8vINC60LDQuiDQv9C10YDQstGL0LUgNSDRgdGC0YDQvtC6XG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJykge1xuICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDHRhNCaIC4uLiDQuNC70Lgg0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgMdGEXG4gICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJ1xuICAgICAgICAgICAgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzInXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSlcbiAgICAgICAgICAgIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicpXG4gICAgKSB7XG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMztcbiAgICAgIH0gZWxzZSBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKVxuICAgICAgICAgICAgICAgIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSDQuCAo0Y3RgtC+INGH0LjRgdGC0L4gMdGEINC40LvQuCDRjdGC0L4gMy0yLTIg0YEgMdGE0JIpXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKVxuICAgICAgICAgICAgICAgIHx8ICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JykpKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMztcbiAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMSdcbiAgICAgICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonKSkge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMDtcbiAgICB9XG5cbiAgICAvLyDQlNCb0K8g0JLQodCV0KUg0KnQo9CtXG4gICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXG5cbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSkge1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMjtcbiAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTA7XG4gICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDEyO1xuICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDY7XG4gICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonXG4gICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpKSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA0O1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUgKNC60LDQuiDRgdGC0YDQvtC60LggMTktMjEpXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgPSAxO1xuICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMINCaXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpXG4gICAgKSB7XG4gICAgICAvLyDQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMClcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1XG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAgPSAxO1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nID0gMTtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCA9IDI7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgPSAzO1xuXG4gICAgICB0aGlzLmV4Y2F2YXRpb24gPSAwLjEzOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xuICAgICAgdGhpcy5zb2lsX2xldmVsaW5nID0gMC4xMzsgLy8g0YDQsNC30YDQsNCy0L3QuNCy0LDQvdC40LUg0LPRgNGD0L3RgtCwXG4gICAgICB0aGlzLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDAuMDc7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxuICAgICAgdGhpcy5wdXJjaGFzZV9jb25jcmV0ZSA9IDAuMDU7IC8vINCx0LXRgtC+0L1cbiAgICAgIHRoaXMuaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgPSA0LjA2OyAvLyDRg9GB0YLQsNC90L7QstC60LAg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINCx0LXRgtC+0L3QtVxuXG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMScpIHtcbiAgICAgICAgdGhpcy5kaWdnaW5nX3RyZW5jaGVzID0gMC41NDsgLy8g0YDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuFxuICAgICAgICB0aGlzLmdyb3VuZF91bmRlcmxheSA9IDAuMTg7IC8vINGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0LfQtdC80LvQuFxuICAgICAgICB0aGlzLmJhY2tmaWxsID0gMC4zNjsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlnZ2luZ190cmVuY2hlcyA9IDAuNzI7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcbiAgICAgICAgdGhpcy5ncm91bmRfdW5kZXJsYXkgPSAwLjI0OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcbiAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDAuNDg7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCA9IDA7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgPSAwO1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSA9IDA7XG5cbiAgICAgIHRoaXMuZXhjYXZhdGlvbiA9IDA7IC8vINGA0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDXG4gICAgICB0aGlzLnNvaWxfbGV2ZWxpbmcgPSAwOyAvLyDRgNCw0LfRgNCw0LLQvdC40LLQsNC90LjQtSDQs9GA0YPQvdGC0LBcbiAgICAgIHRoaXMucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlID0gMDsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXG4gICAgICB0aGlzLnB1cmNoYXNlX2NvbmNyZXRlID0gMDsgLy8g0LHQtdGC0L7QvVxuICAgICAgdGhpcy5pbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSA9IDA7IC8vINGD0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0LIg0LHQtdGC0L7QvdC1XG5cbiAgICAgIHRoaXMuZGlnZ2luZ190cmVuY2hlcyA9IDA7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcbiAgICAgIHRoaXMuZ3JvdW5kX3VuZGVybGF5ID0gMDsgLy8g0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQt9C10LzQu9C4XG4gICAgICB0aGlzLmJhY2tmaWxsID0gMDsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQmlxuICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xuICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSAxNjsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSA4O1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXG4gICAgICB9XG5cbiAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAxNS44NDsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0YPQs9C+0LvQutCwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uID0gMTEuMTc7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uID0gMi4wMTsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5XG5cbiAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicpIHtcbiAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSA4OyAvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcbiAgICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gNjtcdC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxuICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonKSkpIHtcbiAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSAyO1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDQ7XHQvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gMDtcbiAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAwO1xuICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiA9IDA7XG4gICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0LXRgdGC0YwgM9GE0JpcbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCAx0YTQmlxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMidcbiAgICAgICAgICAgICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpXG4gICAgKSB7XG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgPSAwO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhuZXcgU0VNV09SS1MoaW5wdXQpKTtcbiAgcmV0dXJuIG5ldyBTRU1XT1JLUyhpbnB1dCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3Jrc0RhdGFDb2xsZWN0O1xuIiwiaW1wb3J0IHdvcmtzRGF0YUNvbGxlY3QgZnJvbSAnLi93b3Jrcy1kYXRhJztcbmltcG9ydCBjcmVhdGVSb3cgZnJvbSAnLi9jcmVhdGUtcm93JztcblxuLy8g0YHQvtC30LTQsNC90LjQtSDRgtCw0LHQu9C40YbRiyDQstC10LTQvtC80L7RgdGC0Lgg0YDQsNCx0L7RglxuY29uc3Qgd29ya1RhYmxlID0gZnVuY3Rpb24gKHNlbSkge1xuICBjb25zdCB3b3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUQUJMRScpO1xuICB3b3JrVGFibGUuY2xhc3NMaXN0LmFkZCgnd29ya3NfdGFibGUnKTtcblxuICBjb25zdCBib2R5T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUQk9EWScpO1xuICB3b3JrVGFibGUuYXBwZW5kKGJvZHlPZldvcmtUYWJsZSk7XG5cbiAgLy8g0JvQldCT0JXQndCU0JAg0KLQkNCR0JvQmNCm0KtcbiAgLy8g0YHRgtGA0L7QutC4XG4gIGNvbnN0IHJvdzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XG4gIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MU9mV29ya1RhYmxlKTtcbiAgLy8g0Y/Rh9C10LnQutC4XG4gIGNvbnN0IHRkMV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xuICBjb25zdCB0ZDFfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEQnKTtcbiAgY29uc3QgdGQxXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XG4gIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxuICByb3cxT2ZXb3JrVGFibGUuYXBwZW5kKHRkMV8xT2ZXb3JrVGFibGUsIHRkMV8yT2ZXb3JrVGFibGUsIHRkMV8zT2ZXb3JrVGFibGUpO1xuICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XG4gIHRkMV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGA0LDQsdC+0YInO1xuICB0ZDFfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9CV0LQu0LjQt9C8Lic7XG4gIHRkMV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0JrQvtC70LjRh9C10YHRgtCy0L4nO1xuXG4gIGNvbnN0IGNvbGxlY3RlZERhdGFGcm9tU2VtID0gd29ya3NEYXRhQ29sbGVjdChzZW0pO1xuXG4gIGNvbnNvbGUubG9nKGNvbGxlY3RlZERhdGFGcm9tU2VtKTtcblxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKScsICfQvCcsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0yMzAwKScsICfQvCcsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScsICfQvCcsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LLRgdC10LPQviDRgSDQvdCw0LTQsdCw0LLQutC+0LkgMiUnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1ICjRgSDQutGA0LXQv9C70LXQvdC40LXQvCDRhdC+0LzRg9GC0LDQvNC4INCl0JotMSknLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MjMwMCknLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50KSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCy0YHQtdCz0L4g0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQudG9GaXhlZCgyKSkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Ce0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjycsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApJywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApJywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0L/QviDQutC+0L3RgdGC0YDRg9C60YbQuNGP0LwnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INCyINGC0YDRg9Cx0LUnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX3dpcmVfd2l0aF8yX3BlcmNlbnQpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX3dpcmVfd2l0aF8yX3BlcmNlbnQudG9GaXhlZCgyKSkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80KSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMikge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0JLRgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1ApIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yJywgJ9GI0YIuJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1ApKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZykge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC/0L7Qu9C+0YHRiyA00YUxMiwgTD0yNDAwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INC30LDQt9C10LzQu9GP0Y7RidC10LzRgyDQstGL0L/Rg9GB0LrRgyDQvtC/0L7RgNGLJywgJ9GI0YIuJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0YjRgi4nLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LrQvtC20YPRhdCwINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0yMzAwKScsICfRiNGCLicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjIwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQsdC+0LvRgtGDINC30LDQt9C10LzQu9C10L3QuNGPINC60L7RgNC/0YPRgdCwINCp0KPQrScsICfRiNGCLicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXApIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPIGQxMCDQvNC8INC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC/0L7Qu9C+0YHRiyA00YUxMiDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LrQvtC90YLRg9GA0YMg0L7Qv9C+0YDRiycsICfRiNGCLicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRhdC+0LzRg9GC0L7QsiDQpdCaLTEnLCAn0YjRgi4nLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5leGNhdmF0aW9uKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZXhjYXZhdGlvbikpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5zb2lsX2xldmVsaW5nKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCy0YvRgtC10YHQvdC10L3QvdC+0LPQviDQs9GA0YPQvdGC0LAg0LLRgNGD0YfQvdGD0Y4nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5zb2lsX2xldmVsaW5nKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90L7QuSDRgdC80LXRgdC4ICjQqdCj0K0pJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX2NvbmNyZXRlKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQsdC10YLQvtC90LAg0LrQu9Cw0YHRgdCwINChMTYvMjAgRjEwMCcsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX2NvbmNyZXRlKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQuNGH0LXRgdC60LjRhSDQutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINGC0LXQu9C1INCx0LXRgtC+0L3QsCcsICfQutCzJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpZ2dpbmdfdHJlbmNoZXMpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuCDQsiDRgNGD0YfQvdGD0Y4nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaWdnaW5nX3RyZW5jaGVzKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmdyb3VuZF91bmRlcmxheSkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQo9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC/0YDQvtGB0LXRj9C90L3QvtC5INC30LXQvNC70LgnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5ncm91bmRfdW5kZXJsYXkpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uYmFja2ZpbGwpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LwnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5iYWNrZmlsbCkpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINGBINC+0L/QvtGA0Ysg0LzQsNGB0YHQvtC5IDEg0Lwg0LTQviAyLdGFINC60LMnLCAn0LwnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbikpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbikge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INGD0LPQvtC70LrQsCDRgSDQvtC/0L7RgNGLJywgJ9C60LMnLFxuICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24pKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfY2xhbXBfWk9QKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMicsICfRiNGCLicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19jbGFtcF9aT1ApKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24pIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0YEg0L7Qv9C+0YDRiycsICfQutCzJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INC80YPRhNGC0Ysg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yKSB7XG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMikpO1xuICB9XG4gIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9OU2hBTCkge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC90LDQutC+0L3QtdGH0L3QuNC60LAg0J3QqNCQ0JsgMTYtMTQg0L3QsCDQttC40LvRgyDQodCY0J8tNNC4JywgJ9GI0YIuJyxcbiAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX05TaEFMKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9UVVQpIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/QuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YLQtdGA0LzQvtGD0YHQsNC20LjQstCw0LXQvNC+0Lkg0YLRgNGD0LHQutC4INCi0KPQoiAzNS8xNScsICfQvCcsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfVFVUKSk7XG4gIH1cbiAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX1BLVikge1xuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0L/QsNGB0YLRiyDQutCy0LDRgNGG0LUt0LLQsNC30LjQu9C40L3QvtCy0L7QuSAo0J/QmtCSKScsICfQsycsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9QS1YpKTtcbiAgfVxuICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uemFkZWxrYV9TSVApIHtcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JfQsNC00LXQu9C60LAg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuCcsICfRiNGCLicsXG4gICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS56YWRlbGthX1NJUCkpO1xuICB9XG5cbiAgcmV0dXJuIHdvcmtUYWJsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdvcmtUYWJsZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuaW1wb3J0ICcuLi9jc3Mvc2NvcGVPZldvcmsuY3NzJztcclxuXHJcbmltcG9ydCBtYWluT2JqZWN0Q29sbGVjdCBmcm9tICcuL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdCc7XHJcbmltcG9ydCBjcmVhdGVJbmZvVGFibGUgZnJvbSAnLi90YWJsZS1mb3Itb3JkZXJfbl93b3Jrcy9jcmVhdGUtaW5mby10YWJsZSc7XHJcbmltcG9ydCBhZGRDaXBoZXJUYWJsZSBmcm9tICcuL2NpcGhlci9hZGQtY2lwaGVyLXRhYmxlJztcclxuaW1wb3J0IGFkZEFzaWRlVGFibGUgZnJvbSAnLi9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlJztcclxuaW1wb3J0IGFkZEZvcm1hdCBmcm9tICcuL2NpcGhlci9hZGQtZm9ybWF0JztcclxuaW1wb3J0IGFkZFN1bVNlbSBmcm9tICcuL2Zvci1vcmRlci1saXN0L2FkZC1zdW0tc2VtJztcclxuXHJcbmltcG9ydCB3b3JrVGFibGUgZnJvbSAnLi9mb3Itd29ya3Mvd29ya3MnO1xyXG5cclxubGV0IHVzZXJJbnB1dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5wdXQnKTtcclxudXNlcklucHV0ID0gbWFpbk9iamVjdENvbGxlY3QodXNlcklucHV0KTtcclxuY29uc29sZS5sb2codXNlcklucHV0LCAnLSB1c2VySW5wdXQnKTtcclxuXHJcbmNvbnN0IHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnMgPSBbXTtcclxuLy8g0YPQtNCw0LvQtdC90LjQtSDRidC40YLQutC+0LIg0YEg0L7QtNC40L3QsNC60L7QstGL0LzQuCDQvdC+0LzQuNC90LDQu9Cw0LzQuCDQsNCy0YLQvtC80LDRgtC+0LJcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICBpZiAoaSA9PT0gMCkge1xyXG4gICAgdXNlcklucHV0V2l0aG91dFNhbWVCcmVha2Vycy5wdXNoKHVzZXJJbnB1dFtpXSk7XHJcbiAgfSBlbHNlIGlmICh1c2VySW5wdXRbaV0uU0VNVHlwZSAhPT0gdXNlcklucHV0W2kgLSAxXS5TRU1UeXBlXHJcblx0XHR8fCB1c2VySW5wdXRbaV0uaW5wdXRGcm9tU2VtICE9PSB1c2VySW5wdXRbaSAtIDFdLmlucHV0RnJvbVNlbVxyXG5cdFx0fHwgdXNlcklucHV0W2ldLnBpbGxhclR5cGUgIT09IHVzZXJJbnB1dFtpIC0gMV0ucGlsbGFyVHlwZSkge1xyXG4gICAgdXNlcklucHV0V2l0aG91dFNhbWVCcmVha2Vycy5wdXNoKHVzZXJJbnB1dFtpXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXRbaV0uU0VNVHlwZSwgJyAtINC00L7QsdCw0LLQu9GP0LXQvCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDRgtGD0YIg0LzQtdC90Y/QtdGC0YHRjyDQutC+0LvQuNGH0LXRgdGC0LLQviDRidC40YLQutC+0LIg0L/Rg9GC0LXQvCDQv9GA0LjQsdCw0LLQu9C10L3QuNGPINGC0LXRhSDQutC+0YLQvtGA0YvQtSDQv9GA0L7Qv9GD0YHRgtC40LvQuCDQuiDRgtCw0LrQuNC8INC20LVcclxuICAgIHVzZXJJbnB1dFtpIC0gMV0uY291bnRPZlNFTSA9IHVzZXJJbnB1dFtpIC0gMV0uY291bnRPZlNFTSArIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIH1cclxufVxyXG5jb25zb2xlLmxvZyh1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzLCAnLSB1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzJyk7XHJcblxyXG4vLyDRg9C30L3QsNGC0Ywg0LrQvtC7LdCy0L4g0YHRhdC10LwsINC00LvRjyDQvdGD0LzQtdGA0LDRhtC40LhcclxuY29uc3Qgc2hlbWVQYWdlcyA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gIGNvbnNvbGUubG9nKGkpO1xyXG4gIGlmIChpID09PSAwKSB7XHJcbiAgICBzaGVtZVBhZ2VzLnB1c2goaSk7XHJcbiAgfSBlbHNlIGlmICh1c2VySW5wdXRbaV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSB1c2VySW5wdXRbaSAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVsyXVxyXG5cdFx0fHwgdXNlcklucHV0W2ldLlNFTVR5cGUuc3BsaXQoJy0nKVszXSAhPT0gdXNlcklucHV0W2kgLSAxXS5TRU1UeXBlLnNwbGl0KCctJylbM10pIHtcclxuICAgIHNoZW1lUGFnZXMucHVzaChpKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSk7XHJcbmNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuXHJcbi8vIGxldCBnZXRTY29wZU9mV29ya0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtc2NvcGUtb2Ytd29yaycpO1xyXG5cclxuLy8gZ2V0U2NvcGVPZldvcmtCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbi8vIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuY29uc3QgY291bnRlcnNBbmRCcmVha2Vyc1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXInKTtcclxuY291bnRlcnNBbmRCcmVha2Vyc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZV9jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lcicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgLy8gYWRkIG1haW4gdGFibGVcclxuICBjb25zdCBpbmZvVGFibGVXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGVfd3JhcHBlcicpO1xyXG4gIGluZm9UYWJsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2hvd19pbmZvX3RhYmxlX3dyYXBwZXInKTtcclxuICBjb25zdCBpbmZvVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb190YWJsZV9ib2R5Jyk7XHJcbiAgY29uc3Qgcm93Rm9ySW5mb1RhYmxlID0gY3JlYXRlSW5mb1RhYmxlKHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnNbaV0sIGZhbHNlKTtcclxuICBpbmZvVGFibGUuYXBwZW5kKHJvd0ZvckluZm9UYWJsZSk7XHJcblxyXG4gIC8vIGFkZCB3cmFwcGVyXHJcbiAgY29uc3Qgb3JkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyX3NoZWV0Jyk7XHJcblxyXG4gIGNvbnN0IGg2X2JyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSDYnKTtcclxuICBoNl9icmVhay5jbGFzc0xpc3QuYWRkKCdoNl9icmVhaycpO1xyXG5cclxuICBjb25zdCBhNGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gIGE0ZGl2LmNsYXNzTGlzdC5hZGQoJ2E0X2RpdicpO1xyXG5cclxuICBjb25zdCBhNGRpdl9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gIGE0ZGl2X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2E0X2Rpdl9mcmFtZScpO1xyXG5cclxuICBvcmRlcldyYXBwZXIuYXBwZW5kKGg2X2JyZWFrLCBhNGRpdik7XHJcbiAgYTRkaXYuYXBwZW5kKGE0ZGl2X2ZyYW1lKTtcclxuXHJcbiAgLy8gYWRkIGNpcGhlciBpbiB3cmFwcGVyXHJcbiAgYTRkaXZfZnJhbWUuYXBwZW5kKGFkZENpcGhlclRhYmxlKHByb2plY3REYXRhLCAnMTAzJywgJ3dvcmtzJywgdXNlcklucHV0V2l0aG91dFNhbWVCcmVha2Vyc1tpXSwgaSwgdXNlcklucHV0LCBzaGVtZVBhZ2VzKSk7XHJcbiAgLy8gYWRkIGFzaWRlIGZyYW1lIGluIHdyYXBwZXJcclxuICBhNGRpdl9mcmFtZS5hcHBlbmQoYWRkQXNpZGVUYWJsZSgpKTtcclxuXHJcbiAgYTRkaXZfZnJhbWUuYXBwZW5kKHdvcmtUYWJsZSh1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzW2ldKSk7XHJcblxyXG4gIGE0ZGl2LmFwcGVuZChhZGRGb3JtYXQoJ0E0JykpO1xyXG59XHJcbmFkZFN1bVNlbSh1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzKTtcclxuLy8gfVxyXG4iLCJsZXQgY3JlYXRlSW5mb1RhYmxlID0gZnVuY3Rpb24gKHNlbSwgbmVlZEJyZWFrZXJzSW5mbykge1xyXG5cdC8v0KHQvtC30LTQsNC10Lwg0YHRgtGA0L7QutGDINGC0LDQsdC70LjRhtGLXHRcclxuXHRsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuXHQvLyDQodC+0LfQtNCw0LXQvCDRj9GH0LXQudC60Lgg0LIg0LLRi9GI0LXRgdC+0LfQtNCw0L3QvdC+0Lkg0YHRgtGA0L7QutC1XHJcblx0bGV0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRsZXQgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGxldCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuXHR0ZDEudGV4dENvbnRlbnQgPSBzZW0uU0VNVHlwZTtcclxuXHRpZiAobmVlZEJyZWFrZXJzSW5mbyl7XHJcblx0XHRpZiAoc2VtLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRkMi50ZXh0Q29udGVudCA9IGDQo9GB0YLQsNC90L7QstC60LAgJHtzZW0uaW5zdGFsbGF0aW9ufS4gJHtzZW0uZGVzY3JpcHRpb259ICgke3NlbS5icmVha2VyMVZhbHVlfSDQkClgO1xyXG5cdFx0fSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGQyLnRleHRDb250ZW50ID0gYNCj0YHRgtCw0L3QvtCy0LrQsCAke3NlbS5pbnN0YWxsYXRpb259LiAke3NlbS5kZXNjcmlwdGlvbn0gKCR7c2VtLmJyZWFrZXIxVmFsdWV9INCQOyAke3NlbS5icmVha2VyMlZhbHVlfSDQkClgO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHR0ZDIudGV4dENvbnRlbnQgPSBg0KPRgdGC0LDQvdC+0LLQutCwICR7c2VtLmluc3RhbGxhdGlvbn0uICR7c2VtLmRlc2NyaXB0aW9ufWA7XHJcblx0fVxyXG5cclxuXHR0ZDMudGV4dENvbnRlbnQgPSBzZW0uY291bnRPZlNFTTtcclxuXHJcblx0cm93LmFwcGVuZCh0ZDEsIHRkMiwgdGQzKTtcclxuXHRyZXR1cm4gcm93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmZvVGFibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=