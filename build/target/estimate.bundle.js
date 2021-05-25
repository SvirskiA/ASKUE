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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/layout/scripts/estimate.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/layout/scripts/estimate.js":
/*!****************************************!*\
  !*** ./src/layout/scripts/estimate.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_scopeOfWork_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/scopeOfWork.css */ "./src/layout/css/scopeOfWork.css");
/* harmony import */ var _css_scopeOfWork_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_scopeOfWork_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _for_works_create_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for-works/create-row */ "./src/layout/scripts/for-works/create-row.js");
/* harmony import */ var _data_main_object_collect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/main-object-collect */ "./src/layout/scripts/data/main-object-collect.js");
/* harmony import */ var _cipher_add_cipher_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cipher/add-cipher-table */ "./src/layout/scripts/cipher/add-cipher-table.js");
/* harmony import */ var _cipher_add_aside_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cipher/add-aside-table */ "./src/layout/scripts/cipher/add-aside-table.js");
/* harmony import */ var _cipher_add_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cipher/add-format */ "./src/layout/scripts/cipher/add-format.js");
/* harmony import */ var _for_order_list_add_sum_sem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./for-order-list/add-sum-sem */ "./src/layout/scripts/for-order-list/add-sum-sem.js");
/* harmony import */ var _for_works_works__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./for-works/works */ "./src/layout/scripts/for-works/works.js");
/* harmony import */ var _for_works_works_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./for-works/works-data */ "./src/layout/scripts/for-works/works-data.js");


 // import createInfoTable from './table-for-order_n_works/create-info-table';







var routing_4x16_cable_along_pylon_with_clamps_XK1 = 0;
var routing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
var routing_4x16_cable_in_the_trench = 0; //  в траншее

var routing_4x16_cable_along_remote_stand = 0; // по выносной стойке

var purchase_4x16_cable_with_2_percent = 0;
var routing_2x16_cable_along_pylon_with_clamps_XK1 = 0;
var routing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
var routing_2x16_cable_in_the_trench = 0; //  в траншее

var routing_2x16_cable_along_remote_stand = 0; // по выносной стойке

var purchase_2x16_cable_with_2_percent = 0;
var finding_an_existing_cable; // отшурфовка сущ кабеля

var routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
var routing_existing_4x16_cable_in_the_finished_trench = 0;
var routing_existing_4x16_cable_along_remote_stand = 0;
var routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
var routing_existing_2x16_cable_in_the_finished_trench = 0;
var routing_existing_2x16_cable_along_remote_stand = 0;
var wire_routing_along_constructions = 0;
var wire_routing_in_the_pipe = 0; // в трубе

var purchase_wire_with_2_percent = 0;
var purchase_n_montage_INside_sleeve_4 = 0; // муфта внутренней установки 4...

var purchase_n_montage_OUTside_sleeve_4 = 0;
var purchase_n_montage_INside_sleeve_2 = 0;
var purchase_n_montage_OUTside_sleeve_2 = 0; // муфта наружной установки 2...

var purchase_n_montage_clamp_ZOP = 0; // зажим ЗОПг-2

var purchase_n_montage_strip_2400_for_grounding = 0; // полоса для подключения к выпуску опоры

var purchase_n_montage_protection_cover_KM_1700 = 0; // кожух защиты кабеля КМ 1700

var purchase_n_montage_protection_cover_KM_2300 = 0; // кожух защиты кабеля КМ 2300

var purchase_n_montage_strip_2200_for_grounding = 0; // полоса для подключения к болту корпуса ЩУЭ

var purchase_n_montage_round_steel_for_strip = 0; // сталь круглая

var purchase_n_montage_clamp_XK1 = 0; // хомут ХК-1

var digging_trenches = 0; // рытье траншеи

var ground_underlay = 0; // устройство постели из земли

var backfill = 0; // засыпка грунтом

var excavation = 0; // разработка котлована под стойку

var soil_leveling = 0; // разравнивание грунта

var purchase_crushed_stone_sand_gravel_mixture = 0; // щебеночно-песчано-гравийная смесь

var purchase_concrete = 0; // бетон

var installation_of_metal_structures_in_concrete = 0; // установка металлоконструкций в бетоне

var dismantling_cable_from_pylon = 0; // демонтаж сущ кабеля

var dismantling_metal_corner_from_pylon = 0; // демонтаж сущ уголка

var dismantling_metal_construction_from_pylon = 0; // демонтаж сущ металлоконструкций

var dismantling_clamp_ZOP = 0; // демонтаж зажимов ЗОПг-2

var dismantling_INside_sleeve_4 = 0; // демонтаж муфты наружной установки 4..

var dismantling_INside_sleeve_2 = 0; // демонтаж муфты наружной установки 2..

var userInput = localStorage.getItem("userInput");
userInput = Object(_data_main_object_collect__WEBPACK_IMPORTED_MODULE_2__["default"])(userInput);
console.log(userInput, '- userInput');
var projectData = JSON.parse(localStorage.getItem("projectData"));
console.log(projectData);

for (var i = 0; i < userInput.length; i += 1) {
  console.log(userInput[i], userInput[i].countOfSEM); // console.log(worksDataCollect(userInput[i]).routing_4x16_cable_along_pylon_with_clamps_XK1);

  routing_4x16_cable_along_pylon_with_clamps_XK1 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_4x16_cable_along_pylon_with_clamps_XK1 * userInput[i].countOfSEM;
  routing_4x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_4x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_4x16_cable_in_the_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_4x16_cable_in_the_trench * userInput[i].countOfSEM;
  routing_4x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_4x16_cable_along_remote_stand * userInput[i].countOfSEM;
  purchase_4x16_cable_with_2_percent += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_4x16_cable_with_2_percent * userInput[i].countOfSEM;
  routing_2x16_cable_along_pylon_with_clamps_XK1 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_2x16_cable_along_pylon_with_clamps_XK1 * userInput[i].countOfSEM;
  routing_2x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_2x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_2x16_cable_in_the_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_2x16_cable_in_the_trench * userInput[i].countOfSEM;
  routing_2x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_2x16_cable_along_remote_stand * userInput[i].countOfSEM;
  purchase_2x16_cable_with_2_percent += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_2x16_cable_with_2_percent * userInput[i].countOfSEM;
  finding_an_existing_cable += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).finding_an_existing_cable * userInput[i].countOfSEM;
  routing_existing_4x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_existing_4x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_existing_4x16_cable_in_the_finished_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_existing_4x16_cable_in_the_finished_trench * userInput[i].countOfSEM;
  routing_existing_4x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_existing_4x16_cable_along_remote_stand * userInput[i].countOfSEM;
  routing_existing_2x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_existing_2x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_existing_2x16_cable_in_the_finished_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_existing_2x16_cable_in_the_finished_trench * userInput[i].countOfSEM;
  routing_existing_2x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).routing_existing_2x16_cable_along_remote_stand * userInput[i].countOfSEM;
  wire_routing_along_constructions += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).wire_routing_along_constructions * userInput[i].countOfSEM;
  wire_routing_in_the_pipe += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).wire_routing_in_the_pipe * userInput[i].countOfSEM;
  purchase_wire_with_2_percent += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_wire_with_2_percent * userInput[i].countOfSEM;
  purchase_n_montage_INside_sleeve_4 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_INside_sleeve_4 * userInput[i].countOfSEM;
  purchase_n_montage_OUTside_sleeve_4 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_OUTside_sleeve_4 * userInput[i].countOfSEM;
  purchase_n_montage_INside_sleeve_2 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_INside_sleeve_2 * userInput[i].countOfSEM;
  purchase_n_montage_OUTside_sleeve_2 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_OUTside_sleeve_2 * userInput[i].countOfSEM;
  purchase_n_montage_clamp_ZOP += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_clamp_ZOP * userInput[i].countOfSEM;
  purchase_n_montage_strip_2400_for_grounding += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_strip_2400_for_grounding * userInput[i].countOfSEM;
  purchase_n_montage_protection_cover_KM_1700 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_protection_cover_KM_1700 * userInput[i].countOfSEM;
  purchase_n_montage_protection_cover_KM_2300 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_protection_cover_KM_2300 * userInput[i].countOfSEM;
  purchase_n_montage_strip_2200_for_grounding += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_strip_2200_for_grounding * userInput[i].countOfSEM;
  purchase_n_montage_round_steel_for_strip += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_round_steel_for_strip * userInput[i].countOfSEM;
  purchase_n_montage_clamp_XK1 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_n_montage_clamp_XK1 * userInput[i].countOfSEM;
  digging_trenches += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).digging_trenches * userInput[i].countOfSEM;
  ground_underlay += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).ground_underlay * userInput[i].countOfSEM;
  backfill += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).backfill * userInput[i].countOfSEM;
  excavation += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).excavation * userInput[i].countOfSEM;
  soil_leveling += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).soil_leveling * userInput[i].countOfSEM;
  purchase_crushed_stone_sand_gravel_mixture += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_crushed_stone_sand_gravel_mixture * userInput[i].countOfSEM;
  purchase_concrete += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).purchase_concrete * userInput[i].countOfSEM;
  installation_of_metal_structures_in_concrete += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).installation_of_metal_structures_in_concrete * userInput[i].countOfSEM;
  dismantling_cable_from_pylon += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).dismantling_cable_from_pylon * userInput[i].countOfSEM;
  dismantling_metal_corner_from_pylon += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).dismantling_metal_corner_from_pylon * userInput[i].countOfSEM;
  dismantling_metal_construction_from_pylon += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).dismantling_metal_construction_from_pylon * userInput[i].countOfSEM;
  dismantling_clamp_ZOP += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).dismantling_clamp_ZOP * userInput[i].countOfSEM;
  dismantling_INside_sleeve_4 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).dismantling_INside_sleeve_4 * userInput[i].countOfSEM;
  dismantling_INside_sleeve_2 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]).dismantling_INside_sleeve_2 * userInput[i].countOfSEM;
  console.log(Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_8__["default"])(userInput[i]));
}

console.log(routing_4x16_cable_along_pylon_with_clamps_XK1, routing_4x16_cable_along_pylon_with_protection_cover_KM, routing_4x16_cable_in_the_trench, routing_4x16_cable_along_remote_stand, purchase_4x16_cable_with_2_percent, routing_2x16_cable_along_pylon_with_clamps_XK1, excavation);
var a4div = document.createElement("DIV");
a4div.classList.add('a4_div');
var a4div_frame = document.createElement("DIV");
a4div_frame.classList.add('a4_div_frame');
var orderWrapper = document.getElementById('estimate-table');
orderWrapper.append(a4div);
a4div.append(a4div_frame);
var table = document.createElement("TABLE");
table.classList.add('works_table');
var bodyOfWorkTable = document.createElement("TBODY");
table.append(bodyOfWorkTable); // ЛЕГЕНДА ТАБЛИЦЫ
// строки

var row1OfWorkTable = document.createElement("TR");
bodyOfWorkTable.append(row1OfWorkTable); // ячейки

var td1_1OfWorkTable = document.createElement("TD");
var td1_2OfWorkTable = document.createElement("TD");
var td1_3OfWorkTable = document.createElement("TD"); // места ячеек

row1OfWorkTable.append(td1_1OfWorkTable, td1_2OfWorkTable, td1_3OfWorkTable); // Наполняем ячейки

td1_1OfWorkTable.textContent = 'Наименование работ';
td1_2OfWorkTable.textContent = 'Ед.изм.';
td1_3OfWorkTable.textContent = 'Количество'; // let collectedDataFromSem = worksDataCollect(sem);
// console.log(collectedDataFromSem);

a4div_frame.append(table);

if (routing_4x16_cable_along_pylon_with_clamps_XK1) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)', 'м', routing_4x16_cable_along_pylon_with_clamps_XK1.toFixed(2)));
}

if (routing_4x16_cable_along_pylon_with_protection_cover_KM) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,L=2300)', 'м', routing_4x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}

if (routing_4x16_cable_in_the_trench) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 в готовой траншее', 'м', routing_4x16_cable_in_the_trench.toFixed(2)));
}

if (routing_4x16_cable_along_remote_stand) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по выносной стойке', 'м', routing_4x16_cable_along_remote_stand.toFixed(2)));
}

if (purchase_4x16_cable_with_2_percent) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%', 'м', purchase_4x16_cable_with_2_percent.toFixed(2)));
}

if (routing_2x16_cable_along_pylon_with_clamps_XK1) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)', 'м', routing_2x16_cable_along_pylon_with_clamps_XK1.toFixed(2)));
}

if (routing_2x16_cable_along_pylon_with_protection_cover_KM) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,L=2300)', 'м', routing_2x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}

if (routing_2x16_cable_in_the_trench) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 в готовой траншее', 'м', routing_2x16_cable_in_the_trench.toFixed(2)));
}

if (routing_2x16_cable_along_remote_stand) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по выносной стойке', 'м', routing_2x16_cable_along_remote_stand.toFixed(2)));
}

if (purchase_2x16_cable_with_2_percent) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%', 'м', purchase_2x16_cable_with_2_percent.toFixed(2)));
}

if (finding_an_existing_cable) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Отшурфовка существующего кабеля', 'м' + '<sup>3</sup>', finding_an_existing_cable.toFixed(2)));
}

if (routing_existing_4x16_cable_along_pylon_with_protection_cover_KM) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м', routing_existing_4x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}

if (routing_existing_4x16_cable_in_the_finished_trench) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее', 'м', routing_existing_4x16_cable_in_the_finished_trench.toFixed(2)));
}

if (routing_existing_4x16_cable_along_remote_stand) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке', 'м', routing_existing_4x16_cable_along_remote_stand.toFixed(2)));
}

if (routing_existing_2x16_cable_along_pylon_with_protection_cover_KM) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)', 'м', routing_existing_2x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
}

if (routing_existing_2x16_cable_in_the_finished_trench) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее', 'м', routing_existing_2x16_cable_in_the_finished_trench.toFixed(2)));
}

if (routing_existing_2x16_cable_along_remote_stand) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке', 'м', routing_existing_2x16_cable_along_remote_stand.toFixed(2)));
}

if (wire_routing_along_constructions) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка провода СИП-4и 2х16 по конструкциям', 'м', wire_routing_along_constructions.toFixed(2)));
}

if (wire_routing_in_the_pipe) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка провода СИП-4и 2х16 в трубе', 'м', wire_routing_in_the_pipe.toFixed(2)));
}

if (purchase_wire_with_2_percent) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение провода СИП-4и 2х16 с надбавкой 2%', 'м', purchase_wire_with_2_percent.toFixed(2)));
}

if (purchase_n_montage_INside_sleeve_4) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1', 'м', purchase_n_montage_INside_sleeve_4.toFixed(2)));
}

if (purchase_n_montage_OUTside_sleeve_4) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1', 'шт.', purchase_n_montage_OUTside_sleeve_4.toFixed(2)));
}

if (purchase_n_montage_INside_sleeve_2) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1', 'шт.', purchase_n_montage_INside_sleeve_2.toFixed(2)));
}

if (purchase_n_montage_OUTside_sleeve_2) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1', 'шт.', purchase_n_montage_OUTside_sleeve_2.toFixed(2)));
}

if (purchase_n_montage_clamp_ZOP) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж зажимов ЗОПг-2', 'шт.', purchase_n_montage_clamp_ZOP.toFixed(2)));
}

if (purchase_n_montage_strip_2400_for_grounding) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры', 'шт.', purchase_n_montage_strip_2400_for_grounding.toFixed(2)));
}

if (purchase_n_montage_protection_cover_KM_1700) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)', 'шт.', purchase_n_montage_protection_cover_KM_1700.toFixed(2)));
}

if (purchase_n_montage_protection_cover_KM_2300) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)', 'шт.', purchase_n_montage_protection_cover_KM_2300.toFixed(2)));
}

if (purchase_n_montage_strip_2200_for_grounding) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ', 'шт.', purchase_n_montage_strip_2200_for_grounding.toFixed(2)));
}

if (purchase_n_montage_round_steel_for_strip) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему контуру опоры', 'шт.', purchase_n_montage_round_steel_for_strip.toFixed(2)));
}

if (purchase_n_montage_clamp_XK1) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж хомутов ХК-1', 'шт.', purchase_n_montage_clamp_XK1.toFixed(2)));
}

if (excavation) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Разработка котлована под стойку', 'м' + '<sup>3</sup>', excavation.toFixed(2)));
}

if (soil_leveling) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Разравнивание вытесненного грунта вручную', 'м' + '<sup>3</sup>', soil_leveling.toFixed(2)));
}

if (purchase_crushed_stone_sand_gravel_mixture) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)', 'м' + '<sup>3</sup>', purchase_crushed_stone_sand_gravel_mixture.toFixed(2)));
}

if (purchase_concrete) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение бетона класса С16/20 F100', 'м' + '<sup>3</sup>', purchase_concrete.toFixed(2)));
}

if (installation_of_metal_structures_in_concrete) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Установка металлических конструкций в теле бетона', 'кг', installation_of_metal_structures_in_concrete.toFixed(2)));
}

if (digging_trenches) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Рытье траншеи в ручную', 'м' + '<sup>3</sup>', digging_trenches.toFixed(2)));
}

if (ground_underlay) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Устройство постели из просеянной земли', 'м' + '<sup>3</sup>', ground_underlay.toFixed(2)));
}

if (backfill) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Засыпка грунтом', 'м' + '<sup>3</sup>', backfill.toFixed(2)));
}

if (dismantling_cable_from_pylon) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг', 'м', dismantling_cable_from_pylon.toFixed(2)));
}

if (dismantling_metal_corner_from_pylon) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж существующего уголка с опоры', 'кг', dismantling_metal_corner_from_pylon.toFixed(2)));
}

if (dismantling_clamp_ZOP) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж зажимов ЗОПг-2', 'шт.', dismantling_clamp_ZOP.toFixed(2)));
}

if (dismantling_metal_construction_from_pylon) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж металлоконструкций с опоры', 'кг', dismantling_metal_construction_from_pylon.toFixed(2)));
}

if (dismantling_INside_sleeve_4) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1', 'шт.', dismantling_INside_sleeve_4.toFixed(2)));
}

if (dismantling_INside_sleeve_2) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1', 'шт.', dismantling_INside_sleeve_2.toFixed(2)));
}

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
var worksDataCollect = function worksDataCollect(input) {
  /*
  // Переменные для таблицы ведомостей работ
  let routing_4x16_cable_along_pylon_with_clamps_XK1;
  let routing_4x16_cable_along_pylon_with_protection_cover_KM;
  let routing_4x16_cable_in_the_trench; //  в траншее
  let routing_4x16_cable_along_remote_stand; // по выносной стойке
  let purchase_4x16_cable_with_2_percent;
    let routing_2x16_cable_along_pylon_with_clamps_XK1;
  let routing_2x16_cable_along_pylon_with_protection_cover_KM;
  let routing_2x16_cable_in_the_trench; //  в траншее
  let routing_2x16_cable_along_remote_stand; // по выносной стойке
  let purchase_2x16_cable_with_2_percent;
    let finding_an_existing_cable; // отшурфовка сущ кабеля
    let routing_existing_4x16_cable_along_pylon_with_protection_cover_KM;
  let routing_existing_4x16_cable_in_the_finished_trench;
  let routing_existing_4x16_cable_along_remote_stand;
  let routing_existing_2x16_cable_along_pylon_with_protection_cover_KM;
  let routing_existing_2x16_cable_in_the_finished_trench;
  let routing_existing_2x16_cable_along_remote_stand;
    let wire_routing_along_constructions;
  let wire_routing_in_the_pipe; // в трубе
  let purchase_wire_with_2_percent;
    let purchase_n_montage_INside_sleeve_4; // муфта внутренней установки 4...
  let purchase_n_montage_OUTside_sleeve_4;
  let purchase_n_montage_INside_sleeve_2;
  let purchase_n_montage_OUTside_sleeve_2; // муфта наружной установки 2...
    let purchase_n_montage_clamp_ZOP; // зажим ЗОПг-2
    let purchase_n_montage_strip_2400_for_grounding; // полоса для подключения к выпуску опоры
  let purchase_n_montage_protection_cover_KM_1700; // кожух защиты кабеля КМ 1700
  let purchase_n_montage_protection_cover_KM_2300; // кожух защиты кабеля КМ 2300
  let purchase_n_montage_strip_2200_for_grounding; // полоса для подключения к болту корпуса ЩУЭ
  let purchase_n_montage_round_steel_for_strip // сталь круглая
  let purchase_n_montage_clamp_XK1 // хомут ХК-1
    let digging_trenches; // рытье траншеи
  let ground_underlay; // устройство постели из земли
  let backfill; // засыпка грунтом
  let excavation; // разработка котлована под стойку
  let soil_leveling; // разравнивание грунта
  let purchase_crushed_stone_sand_gravel_mixture; // щебеночно-песчано-гравийная смесь
  let purchase_concrete; // бетон
  let installation_of_metal_structures_in_concrete; // установка металлоконструкций в бетоне
    let dismantling_cable_from_pylon; // демонтаж сущ кабеля
  let dismantling_metal_corner_from_pylon; // демонтаж сущ уголка
  let dismantling_metal_construction_from_pylon; // демонтаж сущ металлоконструкций
  let dismantling_clamp_ZOP; // демонтаж зажимов ЗОПг-2
  let dismantling_INside_sleeve_4; // демонтаж муфты наружной установки 4..
  let dismantling_INside_sleeve_2; // демонтаж муфты наружной установки 2..
  */
  function SEMWORKS(sem) {
    //если ЩУЭ на стойке и есть 3ф
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
    } //если ЩУЭ на стойке и (есть 1х1ф или 2х1ф) но, если это 3-2-2, то только 1фК или КК


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
    } //если ЩУЭ на стойке, и есть К


    if (sem.SEMType.split('-')[4] == '2' && sem.inputFromSem.includes('к')) {
      if (sem.inputFromSem === 'кк') {
        this.finding_an_existing_cable = 0.56;
      } else {
        this.finding_an_existing_cable = 0.28;
      }
    } else {
      this.finding_an_existing_cable = 0;
    } //если ЩУЭ на опоре и есть 3фК ...


    if (sem.SEMType.split('-')[4] === '1' && sem.SEMType.split('-')[2] !== '1' && sem.inputFromSem.includes('к') && !sem.inputFromSem.includes('1фк')) {
      if (sem.SEMType.split('-')[2] === '2' && sem.inputFromSem === 'кк') {
        this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 3.4;
      } else {
        this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 1.7;
      }
    } else {
      this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
    } //если ЩУЭ на стойке и есть 3фК ...


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
    } //если ЩУЭ на опоре, и есть 1фК


    if (sem.SEMType.split('-')[4] == '1' && (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('к') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'кк' || sem.inputFromSem === '1фк'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'кк') {
        this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 3.4;
      } else {
        this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 1.7;
      }
    } else {
      this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
    } //если ЩУЭ на стойке, и есть 1фК


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
    } //если ЩУЭ на опоре


    if (sem.SEMType.split('-')[4] == '1') {
      if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк')) {
        this.wire_routing_along_constructions = 1.5;

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
    } //если ЩУЭ на опоре и есть 3фК ... или на стойке и есть 3ф


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
    } //если ЩУЭ на стойке и есть 3ф
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
    } //если ЩУЭ на опоре и есть 1фК ... или на стойке и есть 1ф


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
    } //если ЩУЭ на стойке и (это чисто 1ф или это 3-2-2 с 1фВ)


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
    } //ДЛЯ ВСЕХ ЩУЭ
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
    } //если ЩУЭ на опоре (как строки 19-21)


    if (sem.SEMType.split('-')[4] == '1') {
      this.purchase_n_montage_strip_2400_for_grounding = 1; // Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры
    } else {
      this.purchase_n_montage_strip_2400_for_grounding = 0;
    } //если ЩУЭ на опоре, и есть К


    if (sem.SEMType.split('-')[4] == '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '1фк' || sem.inputFromSem === '3фк')) {
      // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)
      this.purchase_n_montage_protection_cover_KM_1700 = 1;
    } else {
      this.purchase_n_montage_protection_cover_KM_1700 = 0;
    } //если ЩУЭ на стойке


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
    } //если есть 3фК


    if (sem.SEMType.split('-')[2] !== '1' && (sem.inputFromSem === 'к' || sem.inputFromSem === 'кк' || sem.inputFromSem === 'кв' || sem.inputFromSem === 'вк' || sem.inputFromSem === '3фк')) {
      if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'кк') {
        this.dismantling_INside_sleeve_4 = 2;
      } else {
        this.dismantling_INside_sleeve_4 = 1;
      }
    } else {
      this.dismantling_INside_sleeve_4 = 0;
    } //если есть 1фК


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
  var workTable = document.createElement("TABLE");
  workTable.classList.add('works_table');
  var bodyOfWorkTable = document.createElement("TBODY");
  workTable.append(bodyOfWorkTable); // ЛЕГЕНДА ТАБЛИЦЫ
  // строки

  var row1OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row1OfWorkTable); // ячейки

  var td1_1OfWorkTable = document.createElement("TD");
  var td1_2OfWorkTable = document.createElement("TD");
  var td1_3OfWorkTable = document.createElement("TD"); // места ячеек

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
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,L=2300)', 'м', collectedDataFromSem.routing_4x16_cable_along_pylon_with_protection_cover_KM));
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
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,L=2300)', 'м', collectedDataFromSem.routing_2x16_cable_along_pylon_with_protection_cover_KM));
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

  return workTable;
};

/* harmony default export */ __webpack_exports__["default"] = (workTable);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc2NvcGVPZldvcmsuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3Njb3BlT2ZXb3JrLmNzcz9hMTM1Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWNpcGhlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtcGFnZS1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZXN0aW1hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci1vcmRlci1saXN0L2FkZC1zdW0tc2VtLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itd29ya3MvY3JlYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLXdvcmtzL3dvcmtzLWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci13b3Jrcy93b3Jrcy5qcyJdLCJuYW1lcyI6WyJhZGRBc2lkZVRhYmxlIiwiYXNpZGVfZnJhbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyb3cxIiwicm93MiIsInJvdzMiLCJhcHBlbmQiLCJ0ZDFfMSIsInNwYW5fdGQxXzEiLCJ0ZDFfMiIsInRkMl8xIiwic3Bhbl90ZDJfMSIsInRkMl8yIiwidGQzXzEiLCJzcGFuX3RkM18xIiwidGQzXzIiLCJpbm5lckhUTUwiLCJhZGRDaXBoZXJUYWJsZSIsInByb2plY3QiLCJzdWJzZWN0aW9uIiwidHlwZU9mUGFnZSIsInNlbSIsImluZGV4IiwibWFpbk9iaiIsInNoZW1lUGFnZXMiLCJjb25zb2xlIiwibG9nIiwi0YFpcGhlclRhYmxlIiwidGJvZHkiLCJyb3dfMSIsInJvd18yIiwicm93XzMiLCJyb3dfNCIsInJvd181Iiwicm93XzYiLCJyb3dfNyIsInJvd184Iiwicm93XzkiLCJyb3dfMTAiLCJyb3dfMTEiLCJ0ZDFfMyIsInRkMV80IiwidGQxXzUiLCJ0ZDFfNiIsInRkMV83Iiwic2V0QXR0cmlidXRlIiwidGQyXzMiLCJ0ZDJfNCIsInRkMl81IiwidGQyXzYiLCJ0ZDNfMyIsInRkM180IiwidGQzXzUiLCJ0ZDNfNiIsInRkM183IiwidGQ0XzEiLCJ0ZDRfMiIsInRkNF8zIiwidGQ0XzQiLCJ0ZDRfNSIsInRkNF82IiwidGQ1XzEiLCJ0ZDVfMiIsInRkNV8zIiwidGQ1XzQiLCJ0ZDVfNSIsInRkNV82IiwidGQ2XzEiLCJ0ZDZfMiIsInRkNl8zIiwidGQ2XzQiLCJ0ZDZfNSIsInRkNl82IiwidGQ2XzciLCJ0ZDZfOCIsInRkN18xIiwidGQ3XzIiLCJ0ZDdfMyIsInRkN180IiwidGQ3XzUiLCJ0ZDdfNiIsInRkN183IiwidGQ4XzEiLCJ0ZDhfMiIsInRkOF8zIiwidGQ4XzQiLCJ0ZDlfMSIsInRkOV8yIiwidGQ5XzMiLCJ0ZDlfNCIsInRkOV81IiwidGQ5XzYiLCJ0ZDEwXzEiLCJ0ZDEwXzIiLCJ0ZDEwXzMiLCJ0ZDEwXzQiLCJ0ZDExXzEiLCJ0ZDExXzIiLCJ0ZDExXzMiLCJ0ZDExXzQiLCJjaXBoZXIiLCJuYW1lT2ZQcm9qZWN0IiwibmFtZU9mQm9zcyIsInNwbGl0IiwiZCIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidG9TdHJpbmciLCJ0b2RheSIsInN0YWdlT2ZQcm9qZWN0IiwidGV4dENvbnRlbnQiLCJhZGRPcmRlclBhZ2VOdW1iZXIiLCJhZGRPcmRlclNoZW1lUGFnZU51bWJlciIsImFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIiLCJhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIiLCJpc0Jvc3NTaWduYXR1cmUiLCJib3NzU2lnbmF0dXJlIiwiYm9zc1NpZ25hdHVyZTIiLCJmdWxsRGVjcmlwdGlvbiIsIlNFTVR5cGUiLCJkZWNyaXB0aW9uRm9yV29ya3MiLCJwX2Jlc3AiLCJsb2dvX2Jlc3AiLCJuYW1lT2ZEZXZlbG9wZXIiLCJpc0RldmVsb3BlclNpZ25hdHVyZSIsImRldmVsb3BlclNpZ25hdHVyZSIsImFkZEZvcm1hdCIsImZvcm1hdCIsImZvcm1hdF9kaXYiLCJmb3JtYXRQYXJhIiwiYXJyT2ZTZW1zIiwiaW5wdXRfcGFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmV2aW91c1BhZ2UiLCJxdWVyeVNlbGVjdG9yIiwic2hlbWVQYWdlc1N1bSIsImxlbmd0aCIsIm1haW5PYmplY3RDb2xsZWN0Iiwic3RyIiwiYXJyYXlPZlVzZXJJbnB1dCIsInJlc3VsdEFycmF5IiwibGVnZW5kQXJyYXkiLCJTRU0iLCJhcnIiLCJjb3VudE9mU0VNIiwiaW5kZXhPZiIsImJyZWFrZXIxVmFsdWUiLCJicmVha2VyMlZhbHVlIiwiY291bnRlckNvdW50SW5TRU0iLCJpbnB1dEZyb21TZW0iLCJ0b0xvd2VyQ2FzZSIsInBpbGxhclR5cGUiLCJwaGFzZTFWYWx1ZSIsInBoYXNlMlZhbHVlIiwib3V0QnJlYWtlcjEiLCJvdXRCcmVha2VyMiIsImRlc2NyaXB0aW9uIiwiYWxlcnQiLCJpbnN0YWxsYXRpb24iLCJpIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEiLCJyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2giLCJyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEiLCJyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2giLCJyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCIsImZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUiLCJyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2giLCJyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSIsInJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoIiwicm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCIsIndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zIiwid2lyZV9yb3V0aW5nX2luX3RoZV9waXBlIiwicHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCIsInB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQiLCJwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCIsInB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIiLCJwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiIsInB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AiLCJwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nIiwicHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCIsInB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAiLCJwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nIiwicHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCIsInB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEiLCJkaWdnaW5nX3RyZW5jaGVzIiwiZ3JvdW5kX3VuZGVybGF5IiwiYmFja2ZpbGwiLCJleGNhdmF0aW9uIiwic29pbF9sZXZlbGluZyIsInB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSIsInB1cmNoYXNlX2NvbmNyZXRlIiwiaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUiLCJkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uIiwiZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24iLCJkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiIsImRpc21hbnRsaW5nX2NsYW1wX1pPUCIsImRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCIsImRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiIsInVzZXJJbnB1dCIsInByb2plY3REYXRhIiwiSlNPTiIsInBhcnNlIiwid29ya3NEYXRhQ29sbGVjdCIsImE0ZGl2IiwiYTRkaXZfZnJhbWUiLCJvcmRlcldyYXBwZXIiLCJnZXRFbGVtZW50QnlJZCIsInRhYmxlIiwiYm9keU9mV29ya1RhYmxlIiwicm93MU9mV29ya1RhYmxlIiwidGQxXzFPZldvcmtUYWJsZSIsInRkMV8yT2ZXb3JrVGFibGUiLCJ0ZDFfM09mV29ya1RhYmxlIiwiY3JlYXRlUm93IiwidG9GaXhlZCIsImFkZFN1bVNlbSIsImFyck9mU2VtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdW1PZkNvdW50Iiwic3VtT2ZTZW0iLCJtZWFzdXJlIiwidmFsdWUiLCJyb3ciLCJ0ZDEiLCJ0ZDIiLCJ0ZDMiLCJpbnB1dCIsIlNFTVdPUktTIiwiaW5jbHVkZXMiLCJ3b3JrVGFibGUiLCJjb2xsZWN0ZWREYXRhRnJvbVNlbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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QUssQ0FBQ3RCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXNFLE9BQUssQ0FBQ3ZCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNd0IsS0FBSyxHQUFHeEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNd0UsS0FBSyxHQUFHekUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNeUUsS0FBSyxHQUFHMUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXlFLE9BQUssQ0FBQzFCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNMkIsS0FBSyxHQUFHM0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNMkUsS0FBSyxHQUFHNUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNNEUsS0FBSyxHQUFHN0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFFQSxNQUFNNkUsS0FBSyxHQUFHOUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQTZFLE9BQUssQ0FBQzlCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNK0IsS0FBSyxHQUFHL0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQThFLE9BQUssQ0FBQy9CLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNZ0MsS0FBSyxHQUFHaEYsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNZ0YsS0FBSyxHQUFHakYsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNaUYsS0FBSyxHQUFHbEYsUUFBUSxDQUFDQyxhQUFULENB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RUg7O0FBQ0QsTUFBSW1DLG9CQUFvQixDQUFDcEMseUNBQXpCLEVBQW9FO0FBQ2hFYyxtQkFBZSxDQUFDek4sTUFBaEIsQ0FBdUI4TiwyREFBUyxDQUFDLHFDQUFELEVBQXdDLElBQXhDLEVBQzVCaUIsb0JBQW9CLENBQUNwQyx5Q0FETyxDQUFoQztBQUVIOztBQUNELE1BQUlvQyxvQkFBb0IsQ0FBQ2xDLDJCQUF6QixFQUFzRDtBQUNsRFksbUJBQWUsQ0FBQ3pOLE1BQWhCLENBQXVCOE4sMkRBQVMsQ0FBQywyREFBRCxFQUE4RCxLQUE5RCxFQUM1QmlCLG9CQUFvQixDQUFDbEMsMkJBRE8sQ0FBaEM7QUFFSDs7QUFDRCxNQUFJa0Msb0JBQW9CLENBQUNqQywyQkFBekIsRUFBc0Q7QUFDbERXLG1CQUFlLENBQUN6TixNQUFoQixDQUF1QjhOLDJEQUFTLENBQUMsMkRBQUQsRUFBOEQsS0FBOUQsRUFDNUJpQixvQkFBb0IsQ0FBQ2pDLDJCQURPLENBQWhDO0FBRUg7O0FBRUQsU0FBT2dDLFNBQVA7QUFDSCxDQW5ORDs7QUFxTmVBLHdFQUFmLEUiLCJmaWxlIjoiZXN0aW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGF5b3V0L3NjcmlwdHMvZXN0aW1hdGUuanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQSc7IFxcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IFxcclxcbn1cXHJcXG5AbWVkaWEgcHJpbnQge1xcclxcbiAgICAvKiDQt9C00LXRgdGMINCx0YPQtNGD0YIg0YHRgtC40LvQuCDQtNC70Y8g0L/QtdGH0LDRgtC4ICovXFxyXFxuXFx0aGVhZGVyLCBcXHJcXG5cXHQubWFpbi10YWJsZSxcXHJcXG5cXHQuY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIsXFxyXFxuXFx0Zm9vdGVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuXFx0fVxcclxcblxcdC5hNF9kaXYge1xcclxcblxcdFxcdHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cyAhaW1wb3J0YW50O1xcclxcblxcdFxcdGJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRmbG9hdDogbm9uZSAhaW1wb3J0YW50OyBcXHJcXG5cXHRcXHQvKmJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAqL1xcclxcblxcdH0gXFxyXFxuXFxyXFxuXFx0LtGBaXBoZXJfdGFibGUgdGR7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxMnB0O1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQu0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMjRwdDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LnNxdWFyZV9jaGVja2VkIHtcXHJcXG5cXHRcXHQtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxyXFxuXFx0XFx0Y29sb3ItYWRqdXN0OiBleGFjdDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0QHBhZ2Uge1xcclxcblxcdFxcdHNpemU6IGF1dG87ICBcXHJcXG5cXHRcXHRtYXJnaW46IDA7ICBcXHJcXG5cXHR9XFxyXFxuXFx0LyogaDYge1xcclxcblxcdFxcdC13ZWJraXQtZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFx0ICovXFxyXFxufVxcclxcbi8qIEBtZWRpYSBwcmludCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKVxcclxcbiAgYW5kIChtaW4tcmVzb2x1dGlvbjouMDAxZHBjbSkge1xcclxcblxcdGg2IHtcXHJcXG5cXHRcXHQtd2Via2l0LWRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fSBcXHJcXG59ICovXFxyXFxuaDYge1xcclxcblxcdGhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiBibGFjazsgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAyMTBtbTtcXHJcXG5cXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0LyogYmFja2dyb3VuZDogdXJsKCcvaW1nLzAwMDEuanBnJyk7ICovXFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcblxcdGNvbG9yOiAgd2hpdGU7XFxyXFxufVxcclxcbi8qINCa0J3QntCf0JrQmCAqL1xcclxcbi5idG4ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDA4QjhCO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbjogNXB4IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMXB4OztcXHJcXG59XFxyXFxuLmJ0bjpsYXN0LWNoaWxke1xcclxcblxcdG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG4uYnRuOmhvdmVyLCAuaW5wdXQtYnRuOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOlxcdCMwMDhDMzM7XFxyXFxuXFx0Ym9yZGVyOiAjMGI2NjAzIHNvbGlkIDJweDtcXHJcXG59XFxyXFxuLyrQlNCY0JIgINGBINC/0YDQuNC80LXRh9Cw0L3QuNC10Lwg0Lgg0YHRgdGL0LvQutC+0Lkg0L3QsCDRgtCw0LHQu9C40YbRgyDQvtCx0YrQtdC80L7QsiovXFxyXFxuLyogLndvcmtzX3RhYmxlIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMjVweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLypEaXYg0YEg0LLQtdGA0YXQvdC10Lkg0YLQsNCx0LvQuNGG0L7QuSAqL1xcclxcbi5tYWluLXRhYmxlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDtcXHJcXG59XFxyXFxuLyrQm9C10LPQtdC90LTRiyovXFxyXFxubGVnZW5ke1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxufVxcclxcbi8q0KLQkNCR0JvQmNCm0KssINC+0LHRidC40LUg0YHQstC+0LnRgdGC0LLQsCovXFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcbnRkLCB0aCB7XFxyXFxuXFx0Ym9yZGVyOiAwLjI1bW0gc29saWQgIzAwMDtcXHJcXG59XFxyXFxudGJvZHkgdHI6bnRoLWNoaWxkKDJuLTEpIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZTNmOGVhO1xcclxcbn1cXHJcXG50cjpudGgtY2hpbGQoMm4pLCB0aGVhZCB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuLyrQotCQ0JHQm9CY0KbQkCDQmNCd0KTQntCg0JzQkNCm0JjQmCovXFxyXFxuLmluZm9fdGFibGUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0ZCwgLmluZm9fdGFibGUgdGgge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkICMwMDhCOEI7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRkOm50aC1jaGlsZCgxKSwgIC5pbmZvX3RhYmxlIHRkOm50aC1jaGlsZCgyKXtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGQ6bGFzdC1jaGlsZHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRoOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHR3aWR0aDogNDBtbTtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGg6bGFzdC1jaGlsZCB7XFxyXFxuXFx0d2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIC5sYXN0X3RkIHtcXHJcXG5cXHRmb250LXdlaWdodDogODAwO1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG5cXHQvKiBwYWRkaW5nLWJvdHRvbTogMTBweDsgKi9cXHJcXG59XFxyXFxuLyrQmtCe0J3QotCV0JnQndCV0KDQqyDQlNCb0K8g0J7Qn9Cg0J7QodCd0KvQpSovXFxyXFxuLm9yZGVyX2NvbnRhaW5lciB7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG59XFxyXFxuLmE0X2RpdjpudGgtY2hpbGQoNG4tMil7XFxyXFxuXFx0YmFja2dyb3VuZDogI2QwZWNlYztcXHJcXG59XFxyXFxuLmE0X2RpdjpudGgtY2hpbGQoNG4pe1xcclxcblxcdGJhY2tncm91bmQ6ICNjMWU2YzE7XFxyXFxufVxcclxcbi5hNF9kaXYge1xcclxcblxcdGhlaWdodDogMjk2LjVtbTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5hNF9kaXZfZnJhbWUge1xcclxcblxcdGZvbnQtc2l6ZTogMTEuNXB0O1xcclxcblxcdGhlaWdodDogMjg3bW07XFxyXFxuXFx0d2lkdGg6IDE4NW1tO1xcclxcblxcdGxlZnQ6IDIwbW07XFxyXFxuXFx0Ym90dG9tOiA1bW07XFxyXFxuXFx0Ym9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFx0XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7IC8qZGVsKi9cXHJcXG59XFxyXFxuXFxyXFxuLyrQotCQ0JHQm9CY0KbQkC3QntCf0KDQntCh0J3Qq9CZKi9cXHJcXG4ud29ya3NfdGFibGUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ud29ya3NfdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG5cXHR3aWR0aDogMTUwbW07XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRib3JkZXItbGVmdDogbm9uZTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDFtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgybisxKSB7XFxyXFxuXFx0aGVpZ2h0OiA1LjVtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxyXFxuXFx0d2lkdGg6IDEwbW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci1yaWdodDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGhlaWdodDogOG1tO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG5cXHRib3JkZXItdG9wOiBub25lO1xcclxcbn1cXHJcXG4vKiAuc3F1YXJlIHtcXHJcXG5cXHR3aWR0aDogMTJweDtcXHJcXG5cXHRoZWlnaHQ6IDEycHg7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAycHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG4uc3F1YXJlOmxhc3QtY2hpbGQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuLnNxdWFyZV9jaGVja2VkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKtCf0YDQuNC80LXRh9Cw0L3QuNC1INC/0L7RgdC70LUg0L7Qv9GA0L7RgdC90L7Qs9C+Ki9cXHJcXG4ubm90ZXtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi8q0KDQkNCc0JrQkC3QqNCY0KTQoCovXFxyXFxuLtGBaXBoZXJfdGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGR7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjk1O1xcclxcbiAgICBmb250LXNpemU6IDEycHQ7O1xcclxcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZDpudGgtY2hpbGQoMil7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG5cXHQvKiBmb250LXNpemU6IDE0cHg7XFx0ICovXFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOm50aC1jaGlsZChuKzcpe1xcclxcblxcdGJvcmRlcjogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQobis1KXtcXHJcXG5cXHRib3JkZXItdG9wOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KXtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bGFzdC1jaGlsZCB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKG4rNCl7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDEpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMiksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgzKSB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDEpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMiksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgzKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg2KSB7XFxyXFxuXFx0d2lkdGg6IDEwbW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg1KSB7XFxyXFxuXFx0d2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNSkge1xcclxcblxcdHdpZHRoOiA3MG1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDYpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNykge1xcclxcblxcdHdpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcblxcdGZvbnQtc2l6ZTogMjRwdDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZCg1KXtcXHJcXG5cXHRmb250LXNpemU6IDExLjJwdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMC44NTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGR7XFxyXFxuXFx0aGVpZ2h0OiA1bW07XFxyXFxufVxcclxcbi5wX2Jlc3B7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcclxcbn1cXHJcXG4ubG9nb19iZXNwe1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRtYXJnaW46IDBweCAwIC0xMnB4IDdweDtcXHRcXHJcXG59XFxyXFxuLyrQn9Cg0K/Qp9CV0Jwg0KTQntCg0JzQoyDQktCd0JXQodCV0J3QmNCvINCh0KfQldCi0KfQmNCa0J7QkiDQmCDQkNCS0KLQntCc0JDQotCe0JIg0J/QntCh0JvQlSDQldCVINCX0JDQn9Ce0JvQndCV0J3QmNCvKi9cXHJcXG4uaGlkZV9zdWJtaXQge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8q0J/QoNCv0KfQldCcINCk0J7QoNCc0KMg0JLQndCV0KHQldCd0JjQryDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JDQktCi0J7QnNCQ0KLQntCSINCf0J7QodCb0JUg0JXQlSDQl9CQ0J/QntCb0J3QldCd0JjQryovXFxyXFxuLyogLmhpZGVfY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9ICovXFxyXFxuXFxyXFxuLyrQn9Ce0JrQkNCX0KvQktCQ0JXQnCovXFxyXFxuLmluZm9fdGFibGVfd3JhcHBlciB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnNob3dfaW5mb190YWJsZV93cmFwcGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmZvb3Rlcl9zaG93IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHRcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCk0J7QoNCc0JAg0JLQktCe0JTQkCDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JLQq9Ca0JvQrtCn0JDQotCV0JvQldCZKi9cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMXB4O1xcclxcblxcdC8qIG1pbi1oZWlnaHQ6IDk0OHB4OyAqL1xcclxcbn1cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDtcXHRcXHJcXG59XFxyXFxuLyrQvdGD0LzQtdGA0LDRhtC40Y8g0LvQuNGB0YLQvtCyKi9cXHJcXG4uaW5wdXRfcGFnZXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcblxcdGJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG59XFxyXFxuLyrQodCn0JXQotCn0JjQmtCYKi9cXHJcXG4uY291bnRlcnNfd3JhcHBlcntcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcblxcdGJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgcCxcXHJcXG4uY291bnRlcnNfd3JhcHBlciBwe1xcclxcblxcdHBhZGRpbmc6IDEycHggMCAycHggMDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX3dyYXBwZXIgLmNvdW50ZXJfbm90ZSB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0Y29sb3I6ICMwYjY2MDM7XFxyXFxufVxcclxcbi5jb3VudGVyc193cmFwcGVyIC5jb3VudGVyX25vdGU6bGFzdC1jaGlsZCB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTFmLFxcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0zZiB7XFxyXFxuXFx0d2lkdGg6IDkxJTtcXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgI2lucHV0X3BhZ2VcXHJcXG4vKiwgLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTNmKi9cXHJcXG57XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyrQktCr0JrQm9Cu0KfQkNCi0JXQm9CYKi9cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8sXFxyXFxuLmJyZWFrZXJfZGl2IHtcXHJcXG5cXHRib3JkZXI6ICMwMDhCOEIgc29saWQgMnB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFx0XFx0XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpb3tcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvOm50aC1jaGlsZCgybi0xKXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzVmZTY3YztcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvOm50aC1jaGlsZCgybil7XFxyXFxuXFx0YmFja2dyb3VuZDogIzRmZjlhYTtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2Om50aC1jaGlsZCgybi0xKXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXY6bnRoLWNoaWxkKDJuKXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8gLmJyZWFrZXJfcCxcXHJcXG4uYnJlYWtlcl9kaXYgLmJyZWFrZXJfcHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMTVweCAwIDJweCAwO1xcdFxcclxcblxcdG1hcmdpbi1sZWZ0OiAtNDBweDtcXHJcXG59XFxyXFxuLyogLmJyZWFrZXJfZGl2X3JhZGlvIC5yYWRpb19wLCAqL1xcclxcbi5icmVha2VyX2RpdiAuaW5wdXQtcHtcXHJcXG5cXHRwYWRkaW5nOiA4cHggMCAycHggMDtcXHRcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvIGxhYmVse1xcclxcblxcdHBhZGRpbmc6IDNweCAwIDAgMTBweDtcXHJcXG59XFxyXFxuLyogLmJyZWFrZXJfZGl2IGxhYmVsOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufSAqL1xcclxcbi5icmVha2VyX2RpdiBpbnB1dDpsYXN0LWNoaWxke1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi8qIC7RgWlwaGVyX3RhYmxlIHRyOmxhc3QtY2hpbGQgdGR7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyrRhNC+0YDQvNCw0YIgKNCQNCkqL1xcclxcbi5mb3JtYXRfZGl2e1xcclxcblxcdGJvdHRvbTogMXB4O1xcclxcbiAgICByaWdodDogOTJweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCR0J7QmtCe0JLQkNCvINCn0JDQodCi0Kwg0KDQkNCc0JrQmCovXFxyXFxuIC5hc2lkZV9mcmFtZSB7XFxyXFxuXFx0Lyp0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7ICovXFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogLTAuNW1tO1xcclxcblxcdGxlZnQ6IC0xM21tO1xcclxcbn1cXHJcXG4gLmFzaWRlX2ZyYW1lIHNwYW57XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHQtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxyXFxuXFx0d3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXHJcXG4gfVxcclxcbi5hc2lkZV9mcmFtZSB0ZHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5cXHRmb250LXNpemU6IDEycHQ7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpO1xcclxcbi8qXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyovXFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMm4rMSkgdGR7XFxyXFxuXFx0aGVpZ2h0OiAyNS4zbW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMikgdGR7XFxyXFxuXFx0aGVpZ2h0OiAzNS42bW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0ZDpmaXJzdC1jaGlsZHtcXHJcXG5cXHR3aWR0aDogNW1tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGQ6bGFzdC1jaGlsZHtcXHJcXG5cXHR3aWR0aDogN21tO1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59IFxcclxcblxcclxcbi8q0LLQstC+0LQg4oSWINGB0YLRgNCw0L3QuNGG0YsqL1xcclxcbiNpbnB1dF9wYWdle1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25hdHVyZXtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IC03cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3Mge1xcclxcblxcdG1heC13aWR0aDogNjVweDtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzM3B4O1xcclxcblxcdGJvdHRvbTogMTVweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5zaWduYXR1cmVfYm9zczIge1xcclxcblxcdG1heC13aWR0aDogNjVweDtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzM3B4O1xcclxcblxcdGJvdHRvbTogMzNweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGZhZWFmZDQ5NzNmODg5MjAwNzRlNDZlNTU1YjEyZmMudHRmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3BlT2ZXb3JrLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZnVuY3Rpb24gYWRkQXNpZGVUYWJsZSgpIHtcclxuXHJcblx0dmFyIGFzaWRlX2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdGFzaWRlX2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2FzaWRlX2ZyYW1lJyk7XHJcblxyXG5cdHZhciBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdGFzaWRlX2ZyYW1lLmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuXHR2YXIgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHR2YXIgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHR2YXIgcm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHJcblx0Ym9keS5hcHBlbmQocm93MSwgcm93Miwgcm93Myk7XHJcblxyXG5cdHZhciB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQyXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHRkM18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkM18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkM18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHQvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuXHRyb3cxLmFwcGVuZCh0ZDFfMSwgdGQxXzIpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMik7XHJcblx0cm93My5hcHBlbmQodGQzXzEsIHRkM18yKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGB0L/QsNC90YtcclxuXHR0ZDFfMS5hcHBlbmQoc3Bhbl90ZDFfMSk7XHJcblx0dGQyXzEuYXBwZW5kKHNwYW5fdGQyXzEpO1xyXG5cdHRkM18xLmFwcGVuZChzcGFuX3RkM18xKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHNwYW5fdGQxXzEuaW5uZXJIVE1MID0gJ9CY0L3Qsi4gTiDQv9C+0LTQuy4nO1xyXG5cdHRkMV8yLmlubmVySFRNTCA9ICcnO1xyXG5cdHNwYW5fdGQyXzEuaW5uZXJIVE1MID0gJ9Cf0L7QtNC/0LjRgdGMINC4INC00LDRgtCwJztcclxuXHR0ZDJfMi5pbm5lckhUTUwgPSAnJztcclxuXHRzcGFuX3RkM18xLmlubmVySFRNTCA9ICfQktC30LDQvNC10L0g0LjQvdCyLiBOJztcclxuXHR0ZDNfMi5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0cmV0dXJuIGFzaWRlX2ZyYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBc2lkZVRhYmxlO1xyXG4iLCJpbXBvcnQgeyBhZGRPcmRlclBhZ2VOdW1iZXIsICBhZGRPcmRlclNoZW1lUGFnZU51bWJlciwgYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyLCBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyfSBmcm9tICcuL2FkZC1wYWdlLW51bWJlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRDaXBoZXJUYWJsZShwcm9qZWN0LCBzdWJzZWN0aW9uLCB0eXBlT2ZQYWdlLCBzZW0sIGluZGV4LCBtYWluT2JqLCBzaGVtZVBhZ2VzKSB7XHJcblxyXG5cdGNvbnNvbGUubG9nKG1haW5PYmopXHJcblx0Y29uc3Qg0YFpcGhlclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdNGBaXBoZXJUYWJsZS5jbGFzc0xpc3QuYWRkKCfRgWlwaGVyX3RhYmxlJyk7XHJcblxyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdNGBaXBoZXJUYWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cdC8vINGB0YLRgNC+0LrQuFxyXG5cdFxyXG5cdGNvbnN0IHJvd18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd181ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd184ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd185ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18xMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cclxuXHQvLyDQvNC10YHRgtC+INCz0LTQtSDQsdGD0LTRg9GCINGB0YLRgNC+0LrQuFxyXG5cdHRib2R5LmFwcGVuZChyb3dfMSwgcm93XzIsIHJvd18zLCByb3dfNCwgcm93XzUsIHJvd182LCByb3dfNywgcm93XzgsIHJvd185LCByb3dfMTAsIHJvd18xMSk7XHJcblxyXG4vLyBjb25zdCByb3cxID0gdGJvZHlbMF07XHJcbi8qXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkgKz0gMSkge1xyXG5cdGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHR0Ym9keS5hcHBlbmQocm93KTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuXHRjb25zdCByb3cgPSB0Ym9keS5jaGlsZE5vZGVzWzBdO1xyXG5cdGNvbnNvbGUubG9nKHRib2R5LmNoaWxkTm9kZXMpXHJcblx0Y29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0cm93LmFwcGVuZCh0ZCk7XHJcbn1cclxuKi9cclxuLy8gY29uc29sZS5sb2cocm93MSlcclxuXHQvLyDRj9GH0LXQudC60LhcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfNy5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnNCcpO1xyXG5cdHRkMV83LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblxyXG5cdGNvbnN0IHRkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDNfNy5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnNCcpO1xyXG5cdHRkM183LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblxyXG5cdGNvbnN0IHRkNF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDZfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkNl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl81LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblx0Y29uc3QgdGQ2XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ2XzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ2XzggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkN18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN18xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDdfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDdfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN182LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3Xzcuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHJcblx0Y29uc3QgdGQ4XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ4XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDhfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDhfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDlfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ5XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ5XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ5XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzMnKTtcclxuXHRjb25zdCB0ZDlfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfNi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMycpO1xyXG5cdHRkOV82LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblxyXG5cdGNvbnN0IHRkMTBfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDEwXzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDEwXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMF8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMTBfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQxMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTFfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDExXzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDExXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxMV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHQvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuXHRyb3dfMS5hcHBlbmQodGQxXzEsIHRkMV8yLCB0ZDFfMywgdGQxXzQsIHRkMV81LCB0ZDFfNiwgdGQxXzcpO1xyXG5cdHJvd18yLmFwcGVuZCh0ZDJfMSwgdGQyXzIsIHRkMl8zLCB0ZDJfNCwgdGQyXzUsIHRkMl82KTtcclxuXHRyb3dfMy5hcHBlbmQodGQzXzEsIHRkM18yLCB0ZDNfMywgdGQzXzQsIHRkM181LCB0ZDNfNiwgdGQzXzcpO1xyXG5cdHJvd180LmFwcGVuZCh0ZDRfMSwgdGQ0XzIsIHRkNF8zLCB0ZDRfNCwgdGQ0XzUsIHRkNF82KTtcclxuXHRyb3dfNS5hcHBlbmQodGQ1XzEsIHRkNV8yLCB0ZDVfMywgdGQ1XzQsIHRkNV81LCB0ZDVfNik7XHJcblx0cm93XzYuYXBwZW5kKHRkNl8xLCB0ZDZfMiwgdGQ2XzMsIHRkNl80LCB0ZDZfNSwgdGQ2XzYsIHRkNl83LCB0ZDZfOCk7XHJcblx0cm93XzcuYXBwZW5kKHRkN18xLCB0ZDdfMiwgdGQ3XzMsIHRkN180LCB0ZDdfNSwgdGQ3XzYsIHRkN183KTtcclxuXHRyb3dfOC5hcHBlbmQodGQ4XzEsIHRkOF8yLCB0ZDhfMywgdGQ4XzQpO1xyXG5cdHJvd185LmFwcGVuZCh0ZDlfMSwgdGQ5XzIsIHRkOV8zLCB0ZDlfNCwgdGQ5XzUsIHRkOV82KTtcclxuXHRyb3dfMTAuYXBwZW5kKHRkMTBfMSwgdGQxMF8yLCB0ZDEwXzMsIHRkMTBfNCk7XHJcblx0cm93XzExLmFwcGVuZCh0ZDExXzEsIHRkMTFfMiwgdGQxMV8zLCB0ZDExXzQpO1xyXG5cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV83LmlubmVySFRNTCA9IGAke3Byb2plY3QuY2lwaGVyfS0ke3N1YnNlY3Rpb259LTcwLdCQ0KPQrWA7IC8vMS43XHJcblxyXG5cdHRkM183LmlubmVySFRNTCA9IHByb2plY3QubmFtZU9mUHJvamVjdDsgLy8zLjdcclxuXHJcblx0dGQ1XzEuaW5uZXJIVE1MID0gJ9CY0LfQvC4nOyAvLzUuMVxyXG5cdHRkNV8yLmlubmVySFRNTCA9ICfQmtC+0Lsu0KPRhy4nOyAvLzUuMlxyXG5cdHRkNV8zLmlubmVySFRNTCA9ICfQm9C40YHRgic7IC8vNS4zXHJcblx0dGQ1XzQuaW5uZXJIVE1MID0gJ+KEltC00L7Qui4nOyAvLzUuNFxyXG5cdHRkNV81LmlubmVySFRNTCA9ICfQn9C+0LTQv9C40YHRjCc7IC8vNS41XHJcblx0dGQ1XzYuaW5uZXJIVE1MID0gJ9CU0LDRgtCwJzsgLy81LjZcclxuXHJcblx0dGQ2XzEuaW5uZXJIVE1MID0gJ9Cj0YLQsi4nOyAvLzYuMVxyXG5cdHRkNl8yLmlubmVySFRNTCA9IHByb2plY3QubmFtZU9mQm9zcy5zcGxpdCgnICcpWzBdOyAvLzYuMlxyXG5cdHRkNl8zLmlubmVySFRNTCA9ICcnOyAvLzYuM1xyXG5cclxuXHRjb25zdCBkID0gbmV3IERhdGUoKTtcclxuXHQvLyBjb25zdCBkYXkgPSBkLmdldERhdGUoKTtcclxuXHRjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblx0Y29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG5cclxuXHRsZXQgdG9kYXk7XHJcblx0aWYgKG1vbnRoIDwgMTApIHtcclxuXHRcdHRvZGF5ID0gYDAke21vbnRofS4ke3llYXIuc3BsaXQoJycpWzJdfSR7eWVhci5zcGxpdCgnJylbM119YFxyXG5cdH0gZWxzZSB7XHJcblx0XHR0b2RheSA9IGAke21vbnRofS4ke3llYXIuc3BsaXQoJycpWzJdfSR7eWVhci5zcGxpdCgnJylbM119YFxyXG5cdH1cclxuXHJcblx0dGQ2XzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblx0dGQ5XzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblx0dGQxMF80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkMTFfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHJcblx0XHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicgfHwgdHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnKSB7XHJcblx0XHR0ZDZfNS5pbm5lckhUTUwgPSAn0JfQsNC00LDQvdC40LUg0LfQsNCy0L7QtNGDINC90LAg0LjQt9Cz0L7RgtC+0LLQu9C10L3QuNC1INGI0LrQsNGE0L7QsiDQkNCh0JrQo9CtJzsgLy82LjVcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3JrcycgfHwgdHlwZU9mUGFnZSA9PT0gJ3dvcmtzU2hlbWUnKSB7XHJcblx0XHR0ZDZfNS5pbm5lckhUTUwgPSAn0K3Qu9C10LrRgtGA0LjRh9C10YHQutC40LUg0YHQtdGC0LggMCw0LTEwINC60JIuINCQ0KHQmtCj0K0nOyAvLzYuNVxyXG5cdH1cclxuXHR0ZDZfNi5pbm5lckhUTUwgPSAn0KHRgtCw0LTQuNGPJzsgLy82LjZcclxuXHR0ZDZfNy5pbm5lckhUTUwgPSAn0JvQuNGB0YInOyAvLzYuN1xyXG5cdHRkNl84LmlubmVySFRNTCA9ICfQm9C40YHRgtC+0LInOyAvLzYuOFxyXG5cclxuXHR0ZDdfNS5pbm5lckhUTUwgPSBwcm9qZWN0LnN0YWdlT2ZQcm9qZWN0O1x0XHRcdC8vIDcuNVxyXG5cclxuXHRpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRPcmRlclBhZ2VOdW1iZXIoaW5kZXgsIHNlbSwgbWFpbk9iaik7XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXJTaGVtZScpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXMpO1xyXG5cclxuXHRcdC8vINC40YHQv9GA0LDQstC40YLRjCDQvdC40LbQtSwg0YfRgtC+0LEg0L7RgtC70LjRh9Cw0LvQsNGB0Ywg0L3Rg9C80LXRgNCw0YbQuNGPXHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXMpO1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzU2hlbWUnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCk7XHJcblx0fVxyXG5cdFxyXG5cdHRkOV8xLnRleHRDb250ZW50ID0gJ9CdLiDQutC+0L3RgtGALic7IC8vOS4xXHJcblx0dGQ5XzIudGV4dENvbnRlbnQgPSAn0KHQstC40YDRgdC60LjQuSc7XHJcblxyXG5cdGlmIChwcm9qZWN0LmlzQm9zc1NpZ25hdHVyZSl7XHJcblx0XHRjb25zdCBib3NzU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGNvbnN0IGJvc3NTaWduYXR1cmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGJvc3NTaWduYXR1cmUuY2xhc3NMaXN0LmFkZCgnc2lnbmF0dXJlX2Jvc3MnKTtcclxuXHRcdGJvc3NTaWduYXR1cmUyLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZV9ib3NzMicpO1xyXG5cdFx0Ym9zc1NpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdGJvc3NTaWduYXR1cmUyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0dGQ5XzMuYXBwZW5kKGJvc3NTaWduYXR1cmUpO1xyXG5cdFx0dGQxMF8zLmFwcGVuZChib3NzU2lnbmF0dXJlMik7XHJcblx0fVxyXG5cclxuXHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuXHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicpIHtcclxuXHRcdHRkOV81LnRleHRDb250ZW50ID0gc2VtLmZ1bGxEZWNyaXB0aW9uOyAvLzkuNVxyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnIHx8IHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMScpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINC+0LTQvdC+0YTQsNC30L3Ri9C8INCy0LLQvtC00L7QvC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0LTQstGD0LzRjyDQvtC00L3QvtGE0LDQt9C90YvQvNC4INCy0LLQvtC00LDQvNC4LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzEnKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDRgtGA0LXRhdGE0LDQt9C90YvQvCDQstCy0L7QtNC+0LwuINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINC00LLRg9C80Y8g0YLRgNC10YXRhNCw0LfQvdGL0LzQuCDQstCy0L7QtNCw0LzQuC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzMnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0YLRgNC10YXRhNCw0LfQvdGL0Lwg0Lgg0L7QtNC90L7RhNCw0LfQvdGL0Lwg0LLQstC+0LTQvtC8LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzJykge1xyXG5cdFx0dGQ5XzUudGV4dENvbnRlbnQgPSBgJHtzZW0uZGVjcmlwdGlvbkZvcldvcmtzfS4g0JLQtdC00L7QvNC+0YHRgtGMINC+0LHRitC10LzQvtCyINGB0YLRgNC+0LjRgtC10LvRjNC90YvRhSDQuCDQvNC+0L3RgtCw0LbQvdGL0YUg0YDQsNCx0L7RgiDQv9C+INGD0YHRgtCw0L3QvtCy0LrQtWA7IC8vOS41XHJcblx0fSBcclxuXHJcblxyXG5cdGNvbnN0IHBfYmVzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdHBfYmVzcC5jbGFzc0xpc3QuYWRkKCdwX2Jlc3AnKTtcclxuXHRwX2Jlc3Auc2V0QXR0cmlidXRlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cdHRkOV82LmFwcGVuZChwX2Jlc3ApO1xyXG5cdHBfYmVzcC5pbm5lckhUTUwgPSAn0KDQo9CfJyArICc8QlI+JyArICdcItCR0LXQu9GN0L3QtdGA0LPQvtGB0LXRgtGM0L/RgNC+0LXQutGCXCInO1xyXG5cdGNvbnN0IGxvZ29fYmVzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0bG9nb19iZXNwLmNsYXNzTGlzdC5hZGQoJ2xvZ29fYmVzcCcpO1xyXG5cdGxvZ29fYmVzcC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9sb2dvX2Jlc3AuanBnJyk7XHJcblx0dGQ5XzYuYXBwZW5kKGxvZ29fYmVzcCk7XHJcblx0LypcdHRkOV82LmlubmVySFRNTCA9ICfQoNCj0J8gXCLQkdC10LvRjdC90LXRgNCz0L7RgdC10YLRjNC/0YDQvtC10LrRglwiJzsgLy85LjYqL1xyXG5cclxuXHR0ZDEwXzEuaW5uZXJIVE1MID0gJ9Cf0YDQvtCy0LXRgNC40LsnOyAvLzEwLjFcclxuXHR0ZDEwXzIuaW5uZXJIVE1MID0gJ9Ch0LLQuNGA0YHQutC40LknOyAvLzEwLjJcclxuXHJcblx0dGQxMV8xLmlubmVySFRNTCA9ICfQoNCw0LfRgNCw0LEuJzsgLy8xMS4xXHJcblx0dGQxMV8yLmlubmVySFRNTCA9IHByb2plY3QubmFtZU9mRGV2ZWxvcGVyLnNwbGl0KCcgJylbMF07IC8vMTEuMlxyXG5cclxuXHRpZiAocHJvamVjdC5pc0RldmVsb3BlclNpZ25hdHVyZSl7XHJcblx0XHRjb25zdCBkZXZlbG9wZXJTaWduYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG5cdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZScpO1xyXG5cdFx0aWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCa0YDQsNC/0LjQstC40L3QsCDQoi4g0KFcIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcva3JhcGl2aW5hLnBuZycpO1xyXG5cdFx0fSBlbHNlIGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQodCy0LjRgNGB0LrQuNC5INCQLiDQlS5cIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHR9IGVsc2UgaWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCY0LTQtdC70YzRh9C40Log0JMuINCgLlwiKSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9pZGVsY2hpay5wbmcnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdH1cclxuXHRcdHRkMTFfMy5hcHBlbmQoZGV2ZWxvcGVyU2lnbmF0dXJlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiDRgWlwaGVyVGFibGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENpcGhlclRhYmxlO1xyXG4iLCJmdW5jdGlvbiBhZGRGb3JtYXQoZm9ybWF0KSB7XHJcblxyXG5cdGNvbnN0IGZvcm1hdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdGZvcm1hdF9kaXYuY2xhc3NMaXN0LmFkZCgnZm9ybWF0X2RpdicpO1xyXG5cclxuXHRjb25zdCBmb3JtYXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0Zm9ybWF0UGFyYS5jbGFzc0xpc3QuYWRkKCdmb3JtYXQnKTtcclxuXHRcclxuXHRmb3JtYXRQYXJhLnRleHRDb250ZW50ID0gYNCk0L7RgNC80LDRgiAke2Zvcm1hdH1gO1xyXG5cdGZvcm1hdF9kaXYuYXBwZW5kKGZvcm1hdFBhcmEpO1xyXG5cclxuXHRyZXR1cm4gZm9ybWF0X2RpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRm9ybWF0O1xyXG4iLCJmdW5jdGlvbiBhZGRPcmRlclBhZ2VOdW1iZXIoaW5kZXgsIHNlbSwgYXJyT2ZTZW1zKSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3JkZXJQYWdlSW5wdXQnKTtcclxuXHJcblx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRyZXR1cm4gK2lucHV0X3BhZ2UgKyAxO1xyXG5cdH0gZWxzZSBpZiAoYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdIFxyXG5cdFx0JiYgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0cmV0dXJuICtwcmV2aW91c1BhZ2UgKyAxO1xyXG5cdH0gZWxzZSBpZiAoYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdIFxyXG5cdFx0fHwgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdICE9PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0cmV0dXJuIHByZXZpb3VzUGFnZSArIDI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPcmRlclNoZW1lUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlcykge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck9yZGVyUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHNoZW1lUGFnZXMpO1xyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIHNoZW1lUGFnZXNbaW5kZXhdLCBpbmRleCk7XHJcblxyXG5cdHJldHVybiAraW5wdXRfcGFnZSArIHNoZW1lUGFnZXNbaW5kZXhdICsgaW5kZXg7XHJcbn1cclxuLy9cclxuZnVuY3Rpb24gYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4KSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyV29ya3NQYWdlSW5wdXQnKTtcclxuXHJcblx0Y29uc29sZS5sb2coaW5wdXRfcGFnZSwgaW5kZXgpO1xyXG5cclxuXHRyZXR1cm4gK2lucHV0X3BhZ2UgKyBpbmRleDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlc1N1bSkge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcldvcmtzUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIGluZGV4LCBzaGVtZVBhZ2VzU3VtKTtcclxuXHJcblx0cmV0dXJuICtpbnB1dF9wYWdlICsgaW5kZXggK3NoZW1lUGFnZXNTdW0ubGVuZ3RoO1xyXG59XHJcbi8vXHJcbmV4cG9ydCB7IGFkZE9yZGVyUGFnZU51bWJlciwgIGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyLCBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIsIGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXJ9IDtcclxuIiwiZnVuY3Rpb24gbWFpbk9iamVjdENvbGxlY3Qoc3RyKSB7XHJcblx0bGV0IGFycmF5T2ZVc2VySW5wdXQgPSBzdHIuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcblx0bGV0IGxlZ2VuZEFycmF5ID0gYXJyYXlPZlVzZXJJbnB1dFswXS5zcGxpdCgnLCcpO1xyXG5cclxuXHRmdW5jdGlvbiBTRU0oYXJyKSB7XHJcblxyXG5cdFx0dGhpcy5jb3VudE9mU0VNID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCfQmtC+0LvQuNGH0LXRgdGC0LLQvicpXTtcclxuXHRcdHRoaXMuYnJlYWtlcjFWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMScpXS5zcGxpdCgnICcpWzBdO1xyXG5cdFx0dGhpcy5icmVha2VyMlZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIyJyldLnNwbGl0KCcgJylbMF0gfHwgbnVsbDtcclxuXHRcdHRoaXMuU0VNVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0KnQo9CtJyldO1xyXG5cdFx0dGhpcy5jb3VudGVyQ291bnRJblNFTSA9ICt0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVszXTtcclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMVxyXG5cdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gJ9CyJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSAn0LLQsic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGlsbGFyVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0J7Qn9Ce0KDQqycpXS50b0xvd2VyQ2FzZSgpIHx8ICfRgdCyLTk1JztcclxuXHJcblx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDM7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vdXRCcmVha2VyMSA9IGAke3RoaXMucGhhc2UxVmFsdWV9IC0gJHt0aGlzLmJyZWFrZXIxVmFsdWV9YDtcclxuXHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIgP1xyXG5cdFx0XHR0aGlzLm91dEJyZWFrZXIyID0gYCR7dGhpcy5waGFzZTJWYWx1ZX0gLSAke3RoaXMuYnJlYWtlcjJWYWx1ZX1gIDpcclxuXHRcdFx0dGhpcy5vdXRCcmVha2VyMiA9IG51bGw7XHJcblxyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LInKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LonKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmICh0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C6JykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LrQsicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonKSkge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdCw0Y8g0Lgg0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdGL0LUuJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8sIDHRhCAtINC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6IDPRhCAtINC60LDQsdC10LvRjNC90LDRjywgMdGEIC0g0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQstC+0LfQtNGD0YjQvdGL0LUuJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsZXJ0KGAke3RoaXMuaW5wdXRGcm9tU2VtfSDQvdC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCICR7dGhpcy5TRU1UeXBlfSwg0L/QtdGA0LXQv9GA0L7QstC10YDRjNGC0LUg0LLQstC+0LTQuNC80YvQtSDQtNCw0L3QvdGL0LVgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUgPT09ICfRgdCyLTk1Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQki05NSc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCSLTExMCc7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcclxuXHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0KItMTA4LjYnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCiLTEwOC43JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC20LXQu9C10LfQvtCx0LXRgtC+0L3QvdC+0Lkg0L/RgNC40YHRgtCw0LLQutC1INCf0KI0My0yJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0XHR0aGlzLmRlY3JpcHRpb25Gb3JXb3JrcyA9IGAke3RoaXMuU0VNVHlwZX0uICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259YDtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLmZ1bGxEZWNyaXB0aW9uID0gYCR7dGhpcy5TRU1UeXBlfSAoJHt0aGlzLmJyZWFrZXIxVmFsdWV9INCQOyAke3RoaXMuYnJlYWtlcjJWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXlPZlVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0aWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPT09IDYpIHtcclxuXHRcdFx0cmVzdWx0QXJyYXkucHVzaChuZXcgU0VNKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKSkpO1xyXG5cdFx0fSBlbHNlIGlmIChhcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RoID4gNCkge1xyXG5cdFx0XHRhbGVydChg0LTQu9C40L3QsCDQvNCw0YHRgdC40LLQsCAke2FycmF5T2ZVc2VySW5wdXRbaV19ID0gJHthcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RofSDQstC80LXRgdGC0L4gNiBcXG4g0LTQsNC90L3Ri9C5INC80LDRgdGB0LjQsiDQvdC1INCx0YPQtNC10YIg0L7QsdGA0LDQsdC+0YLQsNC9YCk7XHJcblx0XHQgIH1cclxuXHR9XHJcblx0Y29uc29sZS5sb2cocmVzdWx0QXJyYXkpO1xyXG5cclxuXHRyZXN1bHRBcnJheS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRpZiAoYS5TRU1UeXBlID4gYi5TRU1UeXBlKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5PYmplY3RDb2xsZWN0O1xyXG4iLCJpbXBvcnQgJy4uL2Nzcy9zY29wZU9mV29yay5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlUm93IGZyb20gJy4vZm9yLXdvcmtzL2NyZWF0ZS1yb3cnO1xyXG5cclxuaW1wb3J0IG1haW5PYmplY3RDb2xsZWN0IGZyb20gJy4vZGF0YS9tYWluLW9iamVjdC1jb2xsZWN0JztcclxuLy8gaW1wb3J0IGNyZWF0ZUluZm9UYWJsZSBmcm9tICcuL3RhYmxlLWZvci1vcmRlcl9uX3dvcmtzL2NyZWF0ZS1pbmZvLXRhYmxlJztcclxuaW1wb3J0IGFkZENpcGhlclRhYmxlIGZyb20gJy4vY2lwaGVyL2FkZC1jaXBoZXItdGFibGUnO1xyXG5pbXBvcnQgYWRkQXNpZGVUYWJsZSBmcm9tICcuL2NpcGhlci9hZGQtYXNpZGUtdGFibGUnO1xyXG5pbXBvcnQgYWRkRm9ybWF0IGZyb20gJy4vY2lwaGVyL2FkZC1mb3JtYXQnO1xyXG5pbXBvcnQgYWRkU3VtU2VtIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvYWRkLXN1bS1zZW0nO1xyXG5cclxuaW1wb3J0IHdvcmtUYWJsZSBmcm9tICcuL2Zvci13b3Jrcy93b3Jrcyc7XHJcbmltcG9ydCB3b3Jrc0RhdGFDb2xsZWN0IGZyb20gJy4vZm9yLXdvcmtzL3dvcmtzLWRhdGEnO1xyXG5cclxubGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG5sZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7IC8vICDQsiDRgtGA0LDQvdGI0LXQtVxyXG5sZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7IC8vINC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LVcclxubGV0IHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAwO1xyXG5cclxubGV0IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG5sZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7IC8vICDQsiDRgtGA0LDQvdGI0LXQtVxyXG5sZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7IC8vINC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LVcclxubGV0IHB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAwO1xyXG5cclxubGV0IGZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGU7IC8vINC+0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRiSDQutCw0LHQtdC70Y9cclxuXHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcclxubGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMDtcclxubGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxuXHJcbmxldCB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDA7XHJcbmxldCB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAwOyAvLyDQsiDRgtGA0YPQsdC1XHJcbmxldCBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMDsgLy8g0LzRg9GE0YLQsCDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60LggNC4uLlxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAwO1xyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDA7XHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiA9IDA7IC8vINC80YPRhNGC0LAg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60LggMi4uLlxyXG5cclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSAwOyAvLyDQt9Cw0LbQuNC8INCX0J7Qn9CzLTJcclxuXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nID0gMDsgLy8g0L/QvtC70L7RgdCwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YtcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgPSAwOyAvLyDQutC+0LbRg9GFINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAxNzAwXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwID0gMDsgLy8g0LrQvtC20YPRhSDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgMjMwMFxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZyA9IDA7IC8vINC/0L7Qu9C+0YHQsCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQsdC+0LvRgtGDINC60L7RgNC/0YPRgdCwINCp0KPQrVxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCA9IDA7IC8vINGB0YLQsNC70Ywg0LrRgNGD0LPQu9Cw0Y9cclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgPSAwOyAvLyDRhdC+0LzRg9GCINCl0JotMVxyXG5cclxubGV0IGRpZ2dpbmdfdHJlbmNoZXMgPSAwOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbmxldCBncm91bmRfdW5kZXJsYXkgPSAwOyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxubGV0IGJhY2tmaWxsID0gMDsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcclxubGV0IGV4Y2F2YXRpb24gPSAwOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xyXG5sZXQgc29pbF9sZXZlbGluZyA9IDA7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG5sZXQgcHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlID0gMDsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXHJcbmxldCBwdXJjaGFzZV9jb25jcmV0ZSA9IDA7IC8vINCx0LXRgtC+0L1cclxubGV0IGluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlID0gMDsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbmxldCBkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcbmxldCBkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG5sZXQgZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24gPSAwOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40LlcclxubGV0IGRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxyXG5sZXQgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDQuLlxyXG5sZXQgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDIuLlxyXG5cclxuXHJcblxyXG5sZXQgdXNlcklucHV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5wdXRcIik7XHJcbnVzZXJJbnB1dCA9IG1haW5PYmplY3RDb2xsZWN0KHVzZXJJbnB1dCk7XHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dCwgJy0gdXNlcklucHV0Jyk7XHJcblxyXG5cclxuXHJcbmxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0RGF0YVwiKSk7XHJcbmNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdGNvbnNvbGUubG9nKHVzZXJJbnB1dFtpXSwgdXNlcklucHV0W2ldLmNvdW50T2ZTRU0pO1xyXG5cdC8vIGNvbnNvbGUubG9nKHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxKTtcclxuXHRyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG5cdHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcblx0ZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuXHRyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG5cdHdpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuXHRwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuXHRwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG5cdHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuXHRkaWdnaW5nX3RyZW5jaGVzICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaWdnaW5nX3RyZW5jaGVzICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0Z3JvdW5kX3VuZGVybGF5ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5ncm91bmRfdW5kZXJsYXkgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRiYWNrZmlsbCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuYmFja2ZpbGwgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRleGNhdmF0aW9uICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5leGNhdmF0aW9uICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0c29pbF9sZXZlbGluZyArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuc29pbF9sZXZlbGluZyAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0cHVyY2hhc2VfY29uY3JldGUgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX2NvbmNyZXRlICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0aW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG5cdGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHRkaXNtYW50bGluZ19jbGFtcF9aT1AgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmRpc21hbnRsaW5nX2NsYW1wX1pPUCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cdGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0ZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcblx0Y29uc29sZS5sb2cod29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pKVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxLCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNLCBcclxuXHRyb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCwgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCwgcHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCwgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSwgZXhjYXZhdGlvbik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRjb25zdCBhNGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcblx0YTRkaXYuY2xhc3NMaXN0LmFkZCgnYTRfZGl2Jyk7XHJcblxyXG5cdGNvbnN0IGE0ZGl2X2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuXHRhNGRpdl9mcmFtZS5jbGFzc0xpc3QuYWRkKCdhNF9kaXZfZnJhbWUnKTtcclxuXHJcbmNvbnN0IG9yZGVyV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlc3RpbWF0ZS10YWJsZScpO1xyXG5cdG9yZGVyV3JhcHBlci5hcHBlbmQoYTRkaXYpO1xyXG5cdGE0ZGl2LmFwcGVuZChhNGRpdl9mcmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQUJMRVwiKTtcclxuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3dvcmtzX3RhYmxlJyk7XHJcblxyXG4gICAgbGV0IGJvZHlPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuICAgIHRhYmxlLmFwcGVuZChib2R5T2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCb0JXQk9CV0J3QlNCQINCi0JDQkdCb0JjQptCrXHJcbiAgICAvLyDRgdGC0YDQvtC60LhcclxuICAgIGxldCByb3cxT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzFPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDFfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQxXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93MU9mV29ya1RhYmxlLmFwcGVuZCh0ZDFfMU9mV29ya1RhYmxlLCB0ZDFfMk9mV29ya1RhYmxlLCB0ZDFfM09mV29ya1RhYmxlKTtcclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGA0LDQsdC+0YInO1xyXG4gICAgdGQxXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQldC0LtC40LfQvC4nO1xyXG4gICAgdGQxXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQvic7XHJcblxyXG4gICAgLy8gbGV0IGNvbGxlY3RlZERhdGFGcm9tU2VtID0gd29ya3NEYXRhQ29sbGVjdChzZW0pO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbGxlY3RlZERhdGFGcm9tU2VtKTtcclxuXHJcblxyXG4gICBcclxuXHJcblxyXG5cclxuXHRhNGRpdl9mcmFtZS5hcHBlbmQodGFibGUpO1xyXG5cclxuXHJcbiAgICBpZiAocm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0L7Qv9C+0YDQtSAo0YEg0LrRgNC10L/Qu9C10L3QuNC10Lwg0YXQvtC80YPRgtCw0LzQuCDQpdCaLTEpJywgJ9C8JyxcclxuXHRcdHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEudG9GaXhlZCgyKSkpO1xyXG5cdH1cclxuICAgIGlmIChyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSxMPTIzMDApJywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTS50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2gpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScsICfQvCcsXHJcbiAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQstGB0LXQs9C+INGBINC90LDQtNCx0LDQstC60L7QuSAyJScsICfQvCcsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKScsICfQvCcsXHJcbiAgICAgICAgICAgIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LEw9MjMwMCknLCAn0LwnLFxyXG4gICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChyb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCy0YHQtdCz0L4g0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcclxuICAgICAgICAgICAgcHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Ce0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjycsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgZmluZGluZ19hbl9leGlzdGluZ19jYWJsZS50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0LwnLFxyXG4gICAgICAgICAgICByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0LwnLFxyXG4gICAgICAgICAgICByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAod2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuCAy0YUxNiDQv9C+INC60L7QvdGB0YLRgNGD0LrRhtC40Y/QvCcsICfQvCcsXHJcbiAgICAgICAgICAgIHdpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmICh3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuCAy0YUxNiDQsiDRgtGA0YPQsdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50KSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcclxuICAgICAgICAgICAgcHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnLCAn0LwnLFxyXG4gICAgICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80LnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80LnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCS0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1ApIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTInLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRiycsICfRiNGCLicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDApIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQutC+0LbRg9GF0LAg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTIzMDApJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZykge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTIyMDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LHQvtC70YLRgyDQt9Cw0LfQtdC80LvQtdC90LjRjyDQutC+0YDQv9GD0YHQsCDQqdCj0K0nLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPIGQxMCDQvNC8INC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC/0L7Qu9C+0YHRiyA00YUxMiDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LrQvtC90YLRg9GA0YMg0L7Qv9C+0YDRiycsICfRiNGCLicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INGF0L7QvNGD0YLQvtCyINCl0JotMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4Y2F2YXRpb24pIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQoNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRgycsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgZXhjYXZhdGlvbi50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc29pbF9sZXZlbGluZykge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCy0YvRgtC10YHQvdC10L3QvdC+0LPQviDQs9GA0YPQvdGC0LAg0LLRgNGD0YfQvdGD0Y4nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIHNvaWxfbGV2ZWxpbmcudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDRidC10LHQtdC90L7Rh9C90L4t0L/QtdGB0YfQsNC90L4t0LPRgNCw0LLQuNC50L3QvtC5INGB0LzQtdGB0LggKNCp0KPQrSknLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZS50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHVyY2hhc2VfY29uY3JldGUpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LHQtdGC0L7QvdCwINC60LvQsNGB0YHQsCDQoTE2LzIwIEYxMDAnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIHB1cmNoYXNlX2NvbmNyZXRlLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQuNGH0LXRgdC60LjRhSDQutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINGC0LXQu9C1INCx0LXRgtC+0L3QsCcsICfQutCzJyxcclxuICAgICAgICAgICAgaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpZ2dpbmdfdHJlbmNoZXMpIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQoNGL0YLRjNC1INGC0YDQsNC90YjQtdC4INCyINGA0YPRh9C90YPRjicsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgZGlnZ2luZ190cmVuY2hlcy50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ3JvdW5kX3VuZGVybGF5KSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQv9GA0L7RgdC10Y/QvdC90L7QuSDQt9C10LzQu9C4JywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBncm91bmRfdW5kZXJsYXkudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJhY2tmaWxsKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LwnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIGJhY2tmaWxsLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0YEg0L7Qv9C+0YDRiyDQvNCw0YHRgdC+0LkgMSDQvCDQtNC+IDIt0YUg0LrQsycsICfQvCcsXHJcbiAgICAgICAgICAgIGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24udG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uKSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDRg9Cz0L7Qu9C60LAg0YEg0L7Qv9C+0YDRiycsICfQutCzJyxcclxuICAgICAgICAgICAgZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24udG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpc21hbnRsaW5nX2NsYW1wX1pPUCkge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMicsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGRpc21hbnRsaW5nX2NsYW1wX1pPUC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24pIHtcclxuICAgICAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDRgSDQvtC/0L7RgNGLJywgJ9C60LMnLFxyXG4gICAgICAgICAgICBkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbi50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80KSB7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMikge1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yLnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuXHJcbiIsImZ1bmN0aW9uIGFkZFN1bVNlbShhcnJPZlNlbSkge1xyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGUnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVEJPRFknKVswXTtcclxuXHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0Ysg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LVcdFx0XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHRib2R5LmFwcGVuZChyb3cxLCByb3cyKTtcclxuXHQvLyDQodC+0LfQtNCw0LXQvCDRj9GH0LXQudC60Lgg0LIg0LLRi9GI0LXRgdC+0LfQtNCw0L3QvdC+0Lkg0YHRgtGA0L7QutC1XHJcblx0Ly8g0Lgg0LTQvtCx0LDQstC70Y/QtdC8INGC0YVcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfMS5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzIuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV8zLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHJcblx0Y29uc3QgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQyXzEuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMl8yLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDJfMy5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMiwgdGQyXzMpO1xyXG5cclxuXHRsZXQgc3VtT2ZDb3VudCA9IDA7XHJcblx0bGV0IHN1bU9mU2VtID0gMDtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJPZlNlbS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3VtT2ZTZW0gKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTTtcclxuXHRcdHN1bU9mQ291bnQgKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTSAqIGFyck9mU2VtW2ldLmNvdW50ZXJDb3VudEluU0VNO1xyXG5cdH1cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGB0YfQtdGC0YfQuNC60L7QsjonO1xyXG5cdHRkMV8zLmlubmVySFRNTCA9IHN1bU9mQ291bnQ7XHJcblxyXG5cdHRkMl8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGJ0LjRgtC60L7QsjonO1xyXG5cdHRkMl8zLmlubmVySFRNTCA9IHN1bU9mU2VtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTdW1TZW07XHJcbiIsImxldCBjcmVhdGVSb3cgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgbWVhc3VyZSwgdmFsdWUpIHtcclxuLy8gbGV0IGNyZWF0ZVJvdyA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBtZWFzdXJlLCB2YWx1ZSwgZm9yTG9uZ0Rlc2NyaXB0aW9uKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuICAgIHRkMS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGQyLmlubmVySFRNTCA9IG1lYXN1cmU7XHJcbiAgICB0ZDMudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICByb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cclxuICAgIC8vIGlmIChmb3JMb25nRGVzY3JpcHRpb24pIHtcclxuICAgIC8vICAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuICAgIC8vICAgICBjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcbiAgICAvLyAgICAgdGQxXzIudGV4dENvbnRlbnQgPSBmb3JMb25nRGVzY3JpcHRpb247XHJcbiAgICAvLyAgICAgcm93Mi5hcHBlbmQodGQxXzIsIHRkMl8yLCB0ZDNfMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHJvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93O1xyXG4iLCJsZXQgd29ya3NEYXRhQ29sbGVjdCA9IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgLypcclxuICAgIC8vINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDRgtCw0LHQu9C40YbRiyDQstC10LTQvtC80L7RgdGC0LXQuSDRgNCw0LHQvtGCXHJcbiAgICBsZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMTtcclxuICAgIGxldCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgbGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxuICAgIGxldCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbiAgICBsZXQgcHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudDtcclxuXHJcbiAgICBsZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMTtcclxuICAgIGxldCByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgbGV0IHJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxuICAgIGxldCByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbiAgICBsZXQgcHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudDtcclxuXHJcbiAgICBsZXQgZmluZGluZ19hbl9leGlzdGluZ19jYWJsZTsgLy8g0L7RgtGI0YPRgNGE0L7QstC60LAg0YHRg9GJINC60LDQsdC10LvRj1xyXG5cclxuICAgIGxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgbGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoO1xyXG4gICAgbGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQ7XHJcbiAgICBsZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTTtcclxuICAgIGxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaDtcclxuICAgIGxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kO1xyXG5cclxuICAgIGxldCB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucztcclxuICAgIGxldCB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGU7IC8vINCyINGC0YDRg9Cx0LVcclxuICAgIGxldCBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50O1xyXG5cclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80OyAvLyDQvNGD0YTRgtCwINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCA0Li4uXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQ7XHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMjtcclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMjsgLy8g0LzRg9GE0YLQsCDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCAyLi4uXHJcblxyXG4gICAgbGV0IHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1A7IC8vINC30LDQttC40Lwg0JfQntCf0LMtMlxyXG5cclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nOyAvLyDQv9C+0LvQvtGB0LAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xyXG4gICAgbGV0IHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDA7IC8vINC60L7QttGD0YUg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcIDE3MDBcclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwOyAvLyDQutC+0LbRg9GFINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAyMzAwXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZzsgLy8g0L/QvtC70L7RgdCwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCx0L7Qu9GC0YMg0LrQvtGA0L/Rg9GB0LAg0KnQo9CtXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCAvLyDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSAvLyDRhdC+0LzRg9GCINCl0JotMVxyXG5cclxuICAgIGxldCBkaWdnaW5nX3RyZW5jaGVzOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICBsZXQgZ3JvdW5kX3VuZGVybGF5OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgIGxldCBiYWNrZmlsbDsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcclxuICAgIGxldCBleGNhdmF0aW9uOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xyXG4gICAgbGV0IHNvaWxfbGV2ZWxpbmc7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG4gICAgbGV0IHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZTsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXHJcbiAgICBsZXQgcHVyY2hhc2VfY29uY3JldGU7IC8vINCx0LXRgtC+0L1cclxuICAgIGxldCBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZTsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbiAgICBsZXQgZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbjsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcbiAgICBsZXQgZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb247IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG4gICAgbGV0IGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40LlcclxuICAgIGxldCBkaXNtYW50bGluZ19jbGFtcF9aT1A7IC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxyXG4gICAgbGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDQuLlxyXG4gICAgbGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMjsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDIuLlxyXG4qL1xyXG4gICAgZnVuY3Rpb24gU0VNV09SS1Moc2VtKSB7XHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GEXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5jb3VudGVyQ291bnRJblNFTSAhPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDIuMztcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA2Ljk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAxNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKyB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpICogMS4wMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4ICjQtdGB0YLRjCAx0YUx0YQg0LjQu9C4IDLRhTHRhCkg0L3Qviwg0LXRgdC70Lgg0Y3RgtC+IDMtMi0yLCDRgtC+INGC0L7Qu9GM0LrQviAx0YTQmiDQuNC70Lgg0JrQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJ9C60LonICYmXHJcbiAgICAgICAgICAgICAgICBzZW0uaW5wdXRGcm9tU2VtICE9PSAnMdGE0LonKSkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gNy41O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDIuMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAyMi41O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gNi45O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAxMC4yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA0LjY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAodGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxICtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoICsgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSAqIDEuMDI7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUsINC4INC10YHRgtGMINCaXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSA9IDAuNTY7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwLjI4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSDQuCDQtdGB0YLRjCAz0YTQmiAuLi5cclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJ1xyXG4gICAgICAgICAgICAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQuicpICYmICFzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCcx0YTQuicpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMS43O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhNCaIC4uLlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJlxyXG4gICAgICAgICAgICBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScgJiZcclxuICAgICAgICAgICAgc2VtLmlucHV0RnJvbVNlbS5pbmNsdWRlcygn0LonKSAmJiAhc2VtLmlucHV0RnJvbVNlbS5pbmNsdWRlcygnMdGE0LonKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMIDHRhNCaXHJcbiAgICAgICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJylcclxuICAgICAgICAgICAgJiYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQuicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAzLjQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAxLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUsINC4INC10YHRgtGMIDHRhNCaXHJcbiAgICAgICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJylcclxuICAgICAgICAgICAgJiYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQuicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpKVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSA2Ljg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDMuNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1XHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMS41O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSA2LjQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDUuNDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNi4xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDUuMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA5O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzOC40O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzMi40O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzNi42O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMwLjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gNy41O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMwLjU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjUuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDQuNTtcclxuICAgICAgICAgICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0LItMTEwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTkuMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTYuMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTguMztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxNS4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInKSkgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS42O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyMS42O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNC40O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIwLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMztcclxuICAgICAgICAgICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0LItMTEwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuODtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTAuODtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxMC4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zICtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlKSAqIDEuMDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSDQuCDQtdGB0YLRjCAz0YTQmiAuLi4g0LjQu9C4INC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxyXG4gICAgICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiZcclxuICAgICAgICAgICAgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiAhc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxyXG4gICAgICAgIC8vINC60LDQuiDQv9C10YDQstGL0LUgNSDRgdGC0YDQvtC6XHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJykge1xyXG4gICAgICAgICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUg0Lgg0LXRgdGC0YwgMdGE0JogLi4uINC40LvQuCDQvdCwINGB0YLQvtC50LrQtSDQuCDQtdGB0YLRjCAx0YRcclxuICAgICAgICBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnICYmXHJcbiAgICAgICAgICAgIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcyJyAmJlxyXG4gICAgICAgICAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSkgfHxcclxuICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcyJylcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4ICjRjdGC0L4g0YfQuNGB0YLQviAx0YQg0LjQu9C4INGN0YLQviAzLTItMiDRgSAx0YTQkilcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiZcclxuICAgICAgICAgICAgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJykgfHxcclxuICAgICAgICAgICAgICAgICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JykpKVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiZcclxuICAgICAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QlNCb0K8g0JLQodCV0KUg0KnQo9CtXHJcbiAgICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHJcblxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA2O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JyB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSAo0LrQsNC6INGB0YLRgNC+0LrQuCAxOS0yMSlcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nID0gMTtcclxuICAgICAgICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMINCaXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQutC+0LbRg9GF0LAg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApXHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1XHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgPSAzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leGNhdmF0aW9uID0gMC4xMzsgLy8g0YDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YNcclxuICAgICAgICAgICAgdGhpcy5zb2lsX2xldmVsaW5nID0gMC4xMzsgLy8g0YDQsNC30YDQsNCy0L3QuNCy0LDQvdC40LUg0LPRgNGD0L3RgtCwXHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlID0gMC4wNzsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfY29uY3JldGUgPSAwLjA1OyAvLyDQsdC10YLQvtC9XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgPSA0LjA2OyAvLyDRg9GB0YLQsNC90L7QstC60LAg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINCx0LXRgtC+0L3QtVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZ2dpbmdfdHJlbmNoZXMgPSAwLjU0OyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZF91bmRlcmxheSA9IDAuMTg7IC8vINGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0LfQtdC80LvQuFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDAuMzY7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZ2dpbmdfdHJlbmNoZXMgPSAwLjcyOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZF91bmRlcmxheSA9IDAuMjQ7IC8vINGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0LfQtdC80LvQuFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDAuNDg7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XHRcdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhjYXZhdGlvbiA9IDA7IC8vINGA0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDXHJcbiAgICAgICAgICAgIHRoaXMuc29pbF9sZXZlbGluZyA9IDA7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDA7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX2NvbmNyZXRlID0gMDsgLy8g0LHQtdGC0L7QvVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlID0gMDsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlnZ2luZ190cmVuY2hlcyA9IDA7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRfdW5kZXJsYXkgPSAwOyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgICAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDA7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINC10YHQu9C4INC10YHRgtGMINCaXHJcbiAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSAxNjsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSA4O1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uID0gMTUuODQ7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiA9IDExLjE3OyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDRg9Cz0L7Qu9C60LBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiA9IDIuMDE7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSA4OyAvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gNjtcdC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlx0XHRcdFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSAyO1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHRcdFx0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDQ7XHQvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcdFx0XHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQtdGB0YLRjCAz0YTQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScgJiZcclxuICAgICAgICAgICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQtdGB0YLRjCAx0YTQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicgJiZcclxuICAgICAgICAgICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JylcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXcgU0VNV09SS1MoaW5wdXQpKTtcclxuICAgIHJldHVybiBuZXcgU0VNV09SS1MoaW5wdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3b3Jrc0RhdGFDb2xsZWN0OyIsImltcG9ydCB3b3Jrc0RhdGFDb2xsZWN0IGZyb20gJy4vd29ya3MtZGF0YSc7XHJcbmltcG9ydCBjcmVhdGVSb3cgZnJvbSAnLi9jcmVhdGUtcm93JztcclxuXHJcbi8vINGB0L7Qt9C00LDQvdC40LUg0YLQsNCx0LvQuNGG0Ysg0LLQtdC00L7QvNC+0YHRgtC4INGA0LDQsdC+0YJcclxubGV0IHdvcmtUYWJsZSA9IGZ1bmN0aW9uIChzZW0pIHtcclxuXHJcblxyXG5cclxuICAgIGxldCB3b3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcbiAgICB3b3JrVGFibGUuY2xhc3NMaXN0LmFkZCgnd29ya3NfdGFibGUnKTtcclxuXHJcbiAgICBsZXQgYm9keU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG4gICAgd29ya1RhYmxlLmFwcGVuZChib2R5T2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCb0JXQk9CV0J3QlNCQINCi0JDQkdCb0JjQptCrXHJcbiAgICAvLyDRgdGC0YDQvtC60LhcclxuICAgIGxldCByb3cxT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzFPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDFfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQxXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93MU9mV29ya1RhYmxlLmFwcGVuZCh0ZDFfMU9mV29ya1RhYmxlLCB0ZDFfMk9mV29ya1RhYmxlLCB0ZDFfM09mV29ya1RhYmxlKTtcclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGA0LDQsdC+0YInO1xyXG4gICAgdGQxXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQldC0LtC40LfQvC4nO1xyXG4gICAgdGQxXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQmtC+0LvQuNGH0LXRgdGC0LLQvic7XHJcblxyXG4gICAgbGV0IGNvbGxlY3RlZERhdGFGcm9tU2VtID0gd29ya3NEYXRhQ29sbGVjdChzZW0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbGxlY3RlZERhdGFGcm9tU2VtKTtcclxuXHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsTD0yMzAwKScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LLRgdC10LPQviDRgSDQvdCw0LTQsdCw0LLQutC+0LkgMiUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSAo0YEg0LrRgNC10L/Qu9C10L3QuNC10Lwg0YXQvtC80YPRgtCw0LzQuCDQpdCaLTEpJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSxMPTIzMDApJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2gpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQstGB0LXQs9C+INGBINC90LDQtNCx0LDQstC60L7QuSAyJScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQudG9GaXhlZCgyKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J7RgtGI0YPRgNGE0L7QstC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0L/QviDQutC+0L3RgdGC0YDRg9C60YbQuNGP0LwnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuCAy0YUxNiDQsiDRgtGA0YPQsdC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuCAy0YUxNiDRgSDQvdCw0LTQsdCw0LLQutC+0LkgMiUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80KSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDLQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMicsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1ApKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTI0MDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LfQsNC30LXQvNC70Y/RjtGJ0LXQvNGDINCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YsnLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MjMwMCknLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZykge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC/0L7Qu9C+0YHRiyA00YUxMiwgTD0yMjAwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCx0L7Qu9GC0YMg0LfQsNC30LXQvNC70LXQvdC40Y8g0LrQvtGA0L/Rg9GB0LAg0KnQo9CtJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXApIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPIGQxMCDQvNC8INC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC/0L7Qu9C+0YHRiyA00YUxMiDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LrQvtC90YLRg9GA0YMg0L7Qv9C+0YDRiycsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXApKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YXQvtC80YPRgtC+0LIg0KXQmi0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmV4Y2F2YXRpb24pIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YMnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmV4Y2F2YXRpb24pKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5zb2lsX2xldmVsaW5nKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCy0YvRgtC10YHQvdC10L3QvdC+0LPQviDQs9GA0YPQvdGC0LAg0LLRgNGD0YfQvdGD0Y4nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnNvaWxfbGV2ZWxpbmcpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9jcnVzaGVkX3N0b25lX3NhbmRfZ3JhdmVsX21peHR1cmUpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdC+0Lkg0YHQvNC10YHQuCAo0KnQo9CtKScsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfY29uY3JldGUpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INCx0LXRgtC+0L3QsCDQutC70LDRgdGB0LAg0KExNi8yMCBGMTAwJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9jb25jcmV0ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQuNGH0LXRgdC60LjRhSDQutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINGC0LXQu9C1INCx0LXRgtC+0L3QsCcsICfQutCzJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaWdnaW5nX3RyZW5jaGVzKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0YvRgtGM0LUg0YLRgNCw0L3RiNC10Lgg0LIg0YDRg9GH0L3Rg9GOJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaWdnaW5nX3RyZW5jaGVzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZ3JvdW5kX3VuZGVybGF5KSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cj0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0L/RgNC+0YHQtdGP0L3QvdC+0Lkg0LfQtdC80LvQuCcsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZ3JvdW5kX3VuZGVybGF5KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uYmFja2ZpbGwpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LwnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmJhY2tmaWxsKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbikge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDRgSDQvtC/0L7RgNGLINC80LDRgdGB0L7QuSAxINC8INC00L4gMi3RhSDQutCzJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbikpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0YPQs9C+0LvQutCwINGBINC+0L/QvtGA0YsnLCAn0LrQsycsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfY2xhbXBfWk9QKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMicsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX2NsYW1wX1pPUCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INGBINC+0L/QvtGA0YsnLCAn0LrQsycsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80KSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdvcmtUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd29ya1RhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9