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
      if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
        this.routing_4x16_cable_along_pylon_with_clamps_XK1 = 7.5;
        this.routing_4x16_cable_along_pylon_with_protection_cover_KM = 2.3;
        this.routing_4x16_cable_in_the_trench = 2;
        this.routing_4x16_cable_along_remote_stand = 3.4;
      } else if (sem.counterCountInSEM === 2 && sem.inputFromSem === 'ВВ') {
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


    if (sem.SEMType.split('-')[4] == '2' && (sem.SEMType.split('-')[2] == '1' || sem.SEMType.split('-')[2] == '3' && sem.inputFromSem !== 'КК' && sem.inputFromSem !== '1фК')) {
      if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')) {
        this.routing_2x16_cable_along_pylon_with_clamps_XK1 = 7.5;
        this.routing_2x16_cable_along_pylon_with_protection_cover_KM = 2.3;
        this.routing_2x16_cable_in_the_trench = 2;
        this.routing_2x16_cable_along_remote_stand = 3.4;
      } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
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


    if (sem.SEMType.split('-')[4] == '2' && sem.inputFromSem.includes('К')) {
      if (sem.inputFromSem === 'КК') {
        this.finding_an_existing_cable = 0.56;
      } else {
        this.finding_an_existing_cable = 0.28;
      }
    } else {
      this.finding_an_existing_cable = 0;
    } //если ЩУЭ на опоре и есть 3фК ...


    if (sem.SEMType.split('-')[4] === '1' && sem.SEMType.split('-')[2] !== '1' && sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')) {
      if (sem.SEMType.split('-')[2] === '2' && sem.inputFromSem === 'КК') {
        this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 3.4;
      } else {
        this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 1.7;
      }
    } else {
      this.routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 0;
    } //если ЩУЭ на стойке и есть 3фК ...


    if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1' && sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')) {
      if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
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


    if (sem.SEMType.split('-')[4] == '1' && (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
        this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 3.4;
      } else {
        this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 1.7;
      }
    } else {
      this.routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 0;
    } //если ЩУЭ на стойке, и есть 1фК


    if (sem.SEMType.split('-')[4] == '2' && (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К') || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
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
      if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
        this.wire_routing_along_constructions = 1.5;

        if (sem.pillarType === 'СВ-110') {
          this.wire_routing_in_the_pipe = 6.4;
        } else {
          this.wire_routing_in_the_pipe = 5.1;
        }
      } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
        this.wire_routing_along_constructions = 9;

        if (sem.pillarType === 'СВ-110') {
          this.wire_routing_in_the_pipe = 38.4;
        } else {
          this.wire_routing_in_the_pipe = 30.6;
        }
      } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
        this.wire_routing_along_constructions = 7.5;

        if (sem.pillarType === 'СВ-110') {
          this.wire_routing_in_the_pipe = 32;
        } else {
          this.wire_routing_in_the_pipe = 25.5;
        }
      } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ' || sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '3фК') {
        this.wire_routing_along_constructions = 4.5;

        if (sem.pillarType === 'СВ-110') {
          this.wire_routing_in_the_pipe = 19.2;
        } else {
          this.wire_routing_in_the_pipe = 15.3;
        }
      } else if (sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'КВ') || sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '1фК') {
        this.wire_routing_along_constructions = 6;

        if (sem.pillarType === 'СВ-110') {
          this.wire_routing_in_the_pipe = 25.6;
        } else {
          this.wire_routing_in_the_pipe = 20.4;
        }
      } else {
        this.wire_routing_along_constructions = 3;

        if (sem.pillarType === 'СВ-110') {
          this.wire_routing_in_the_pipe = 12.8;
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


    if (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] !== '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК') || sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {
      if (sem.SEMType.split('-')[2] == '2' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
        this.purchase_n_montage_INside_sleeve_4 = 3;
      } else if (sem.SEMType.split('-')[4] == '2' || sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] == '2' && !sem.inputFromSem === 'КК') {
        this.purchase_n_montage_INside_sleeve_4 = 2;
      } else {
        this.purchase_n_montage_INside_sleeve_4 = 1;
      }
    } else {
      this.purchase_n_montage_INside_sleeve_4 = 0;
    } //если ЩУЭ на стойке и есть 3ф
    // как первые 5 строк


    if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {
      if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
        this.purchase_n_montage_OUTside_sleeve_4 = 1;
      } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
        this.purchase_n_montage_OUTside_sleeve_4 = 3;
      } else {
        this.purchase_n_montage_OUTside_sleeve_4 = 2;
      }
    } else {
      this.purchase_n_montage_OUTside_sleeve_4 = 0;
    } //если ЩУЭ на опоре и есть 1фК ... или на стойке и есть 1ф


    if (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] !== '2' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК') || sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '2') {
      if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
        this.purchase_n_montage_INside_sleeve_2 = 3;
      } else if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '2' || sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '1' && sem.inputFromSem === 'КК') {
        this.purchase_n_montage_INside_sleeve_2 = 2;
      } else {
        this.purchase_n_montage_INside_sleeve_2 = 1;
      }
    } else {
      this.purchase_n_montage_INside_sleeve_2 = 0;
    } //если ЩУЭ на стойке и (это чисто 1ф или это 3-2-2 с 1фВ)


    if (sem.SEMType.split('-')[4] == '2' && (sem.SEMType.split('-')[2] == '1' || sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК'))) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
        this.purchase_n_montage_OUTside_sleeve_2 = 3;
      } else if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК')) {
        this.purchase_n_montage_OUTside_sleeve_2 = 2;
      } else {
        this.purchase_n_montage_OUTside_sleeve_2 = 1;
      }
    } else {
      this.purchase_n_montage_OUTside_sleeve_2 = 0;
    } //ДЛЯ ВСЕХ ЩУЭ
    // Приобретение и монтаж зажимов ЗОПг-2


    if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
      this.purchase_n_montage_clamp_ZOP = 2;
    } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
      this.purchase_n_montage_clamp_ZOP = 10;
    } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
      this.purchase_n_montage_clamp_ZOP = 12;
    } else if (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК') {
      this.purchase_n_montage_clamp_ZOP = 6;
    } else if (sem.inputFromSem === '3фК' || sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'ВК' || sem.inputFromSem === 'КВ')) {
      this.purchase_n_montage_clamp_ZOP = 8;
    } else {
      this.purchase_n_montage_clamp_ZOP = 4;
    } //если ЩУЭ на опоре (как строки 19-21)


    if (sem.SEMType.split('-')[4] == '1') {
      this.purchase_n_montage_strip_2400_for_grounding = 1; // Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры
    } else {
      this.purchase_n_montage_strip_2400_for_grounding = 0;
    } //если ЩУЭ на опоре, и есть К


    if (sem.SEMType.split('-')[4] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК')) {
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


    if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК') {
      if (sem.inputFromSem === 'КК') {
        this.dismantling_cable_from_pylon = 16; // демонтаж сущ кабеля
      } else {
        this.dismantling_cable_from_pylon = 8; // демонтаж сущ кабеля			
      }

      if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] !== '1') {
        this.dismantling_metal_corner_from_pylon = 15.84; // демонтаж сущ уголка
      } else {
        this.dismantling_metal_corner_from_pylon = 11.17; // демонтаж сущ уголка
      }

      this.dismantling_metal_construction_from_pylon = 2.01; // демонтаж сущ металлоконструкций

      if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '2') {
        this.dismantling_clamp_ZOP = 8; // демонтаж зажимов ЗОПг-2
      } else if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '3') {
        this.dismantling_clamp_ZOP = 6; // демонтаж зажимов ЗОПг-2			
      } else if (sem.inputFromSem === '1фК' || sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК')) {
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


    if (sem.SEMType.split('-')[2] !== '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')) {
      if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
        this.dismantling_INside_sleeve_4 = 2;
      } else {
        this.dismantling_INside_sleeve_4 = 1;
      }
    } else {
      this.dismantling_INside_sleeve_4 = 0;
    } //если есть 1фК


    if (sem.SEMType.split('-')[2] !== '2' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')) {
      if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
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
    bodyOfWorkTable.append(Object(_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1', 'м', collectedDataFromSem.purchase_n_montage_INside_sleeve_4));
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
  /*
      //если ЩУЭ на стойке и есть 3ф
      if (sem.SEMType.split('-')[4] == '2' && sem.counterCountInSEM !== 1) {
  
          if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
              routing_4x16_cable_along_pylon_with_clamps_XK1 = 7.5;
              routing_4x16_cable_along_pylon_with_protection_cover_KM = 2.3;
              routing_4x16_cable_in_the_trench = 2;
              routing_4x16_cable_along_remote_stand = 3.4;
          } else if (sem.counterCountInSEM === 2 && sem.inputFromSem === 'ВВ') {
              routing_4x16_cable_along_pylon_with_clamps_XK1 = 22.5;
              routing_4x16_cable_along_pylon_with_protection_cover_KM = 6.9;
              routing_4x16_cable_in_the_trench = 6;
              routing_4x16_cable_along_remote_stand = 10.2;
          } else {
              routing_4x16_cable_along_pylon_with_clamps_XK1 = 15;
              routing_4x16_cable_along_pylon_with_protection_cover_KM = 4.6;
              routing_4x16_cable_in_the_trench = 4;
              routing_4x16_cable_along_remote_stand = 6.8;
          }
          purchase_4x16_cable_with_2_percent = (routing_4x16_cable_along_pylon_with_clamps_XK1 +
              routing_4x16_cable_along_pylon_with_protection_cover_KM +
              routing_4x16_cable_in_the_trench + routing_4x16_cable_along_remote_stand) * 1.02;
  
          // Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)
          let row2OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row2OfWorkTable);
          // ячейки
          let td2_1OfWorkTable = document.createElement("TD");
          let td2_2OfWorkTable = document.createElement("TD");
          let td2_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row2OfWorkTable.append(td2_1OfWorkTable, td2_2OfWorkTable, td2_3OfWorkTable);
          // Наполняем ячейки
          td2_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 по опоре (с креплением хомутами ХК-1)';
          td2_2OfWorkTable.textContent = 'м';
          td2_3OfWorkTable.textContent = routing_4x16_cable_along_pylon_with_clamps_XK1;
  
          // Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)
          let row3OfWorkTable = document.createElement("TR");
          let row3_1OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row3OfWorkTable, row3_1OfWorkTable);
  
          // ячейки
          let td3_1OfWorkTable = document.createElement("TD");
          let td3_2OfWorkTable = document.createElement("TD");
          let td3_3OfWorkTable = document.createElement("TD");
          let td3_1_1OfWorkTable = document.createElement("TD");
          let td3_2_1OfWorkTable = document.createElement("TD");
          let td3_3_1OfWorkTable = document.createElement("TD");
          // места ячеек
          row3OfWorkTable.append(td3_1OfWorkTable, td3_2OfWorkTable, td3_3OfWorkTable);
  
          row3_1OfWorkTable.append(td3_1_1OfWorkTable, td3_2_1OfWorkTable, td3_3_1OfWorkTable);
  
          // Наполняем ячейки
          td3_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,';
          td3_2OfWorkTable.textContent = 'м';
          td3_3OfWorkTable.textContent = routing_4x16_cable_along_pylon_with_protection_cover_KM;
          td3_1_1OfWorkTable.textContent = 'L=2300)';
          td3_2_1OfWorkTable.textContent = '';
          td3_3_1OfWorkTable.textContent = '';
  
          // Прокладка кабеля АВБбШВ 4х16 в готовой траншее
          let row4OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row4OfWorkTable);
          // ячейки
          let td4_1OfWorkTable = document.createElement("TD");
          let td4_2OfWorkTable = document.createElement("TD");
          let td4_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row4OfWorkTable.append(td4_1OfWorkTable, td4_2OfWorkTable, td4_3OfWorkTable);
  
          // Наполняем ячейки
          td4_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 в готовой траншее';
          td4_2OfWorkTable.textContent = 'м';
          td4_3OfWorkTable.textContent = routing_4x16_cable_in_the_trench;
  
          // Прокладка кабеля АВБбШВ 4х16 по выносной стойке
          let row5OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row5OfWorkTable);
          // ячейки
          let td5_1OfWorkTable = document.createElement("TD");
          let td5_2OfWorkTable = document.createElement("TD");
          let td5_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row5OfWorkTable.append(td5_1OfWorkTable, td5_2OfWorkTable, td5_3OfWorkTable);
  
          // Наполняем ячейки
          td5_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 4х16 по выносной стойке';
          td5_2OfWorkTable.textContent = 'м';
          td5_3OfWorkTable.textContent = routing_4x16_cable_along_remote_stand;
  
          // Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%
          let row6OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row6OfWorkTable);
          // ячейки
          let td6_1OfWorkTable = document.createElement("TD");
          let td6_2OfWorkTable = document.createElement("TD");
          let td6_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row6OfWorkTable.append(td6_1OfWorkTable, td6_2OfWorkTable, td6_3OfWorkTable);
  
          // Наполняем ячейки
          td6_1OfWorkTable.textContent = 'Приобретение кабеля АВБбШВ 4х16 всего с надбавкой 2%';
          td6_2OfWorkTable.textContent = 'м';
          td6_3OfWorkTable.textContent = purchase_4x16_cable_with_2_percent.toFixed(2);
      }
  
      //если ЩУЭ на стойке и (есть 1х1ф или 2х1ф) но, если это 3-2-2, то только 1фК или КК
      if (sem.SEMType.split('-')[4] == '2' && ((sem.SEMType.split('-')[2] == '1') ||
          (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem !== 'КК' &&
              sem.inputFromSem !== '1фК'))) {
  
          if (((sem.SEMType.split('-')[2] == '1') && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) ||
              (sem.SEMType.split('-')[2] == '3') && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')) {
              routing_2x16_cable_along_pylon_with_clamps_XK1 = 7.5;
              routing_2x16_cable_along_pylon_with_protection_cover_KM = 2.3;
              routing_2x16_cable_in_the_trench = 2;
              routing_2x16_cable_along_remote_stand = 3.4;
          } else if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
              routing_2x16_cable_along_pylon_with_clamps_XK1 = 22.5;
              routing_2x16_cable_along_pylon_with_protection_cover_KM = 6.9;
              routing_2x16_cable_in_the_trench = 6;
              routing_2x16_cable_along_remote_stand = 10.2;
          } else {
              routing_2x16_cable_along_pylon_with_clamps_XK1 = 15;
              routing_2x16_cable_along_pylon_with_protection_cover_KM = 4.6;
              routing_2x16_cable_in_the_trench = 4;
              routing_2x16_cable_along_remote_stand = 6.8;
          }
          purchase_2x16_cable_with_2_percent = (routing_2x16_cable_along_pylon_with_clamps_XK1 +
              routing_2x16_cable_along_pylon_with_protection_cover_KM +
              routing_2x16_cable_in_the_trench + routing_2x16_cable_along_remote_stand) * 1.02;
  
          // Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)
          let row7OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row7OfWorkTable);
          // ячейки
          let td7_1OfWorkTable = document.createElement("TD");
          let td7_2OfWorkTable = document.createElement("TD");
          let td7_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row7OfWorkTable.append(td7_1OfWorkTable, td7_2OfWorkTable, td7_3OfWorkTable);
  
          // Наполняем ячейки
          td7_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 по опоре (с креплением хомутами ХК-1)';
          td7_2OfWorkTable.textContent = 'м';
          td7_3OfWorkTable.textContent = routing_2x16_cable_along_pylon_with_clamps_XK1;
  
          // Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)
          let row8OfWorkTable = document.createElement("TR");
          let row8_1OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row8OfWorkTable, row8_1OfWorkTable);
  
          // ячейки
          let td8_1OfWorkTable = document.createElement("TD");
          let td8_2OfWorkTable = document.createElement("TD");
          let td8_3OfWorkTable = document.createElement("TD");
          let td8_1_1OfWorkTable = document.createElement("TD");
          let td8_2_1OfWorkTable = document.createElement("TD");
          let td8_3_1OfWorkTable = document.createElement("TD");
          // места ячеек
          row8OfWorkTable.append(td8_1OfWorkTable, td8_2OfWorkTable, td8_3OfWorkTable);
  
          row8_1OfWorkTable.append(td8_1_1OfWorkTable, td8_2_1OfWorkTable, td8_3_1OfWorkTable);
  
          // Наполняем ячейки
          td8_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5,';
          td8_2OfWorkTable.textContent = 'м';
          td8_3OfWorkTable.textContent = routing_2x16_cable_along_pylon_with_protection_cover_KM;
          td8_1_1OfWorkTable.textContent = 'L=2300)';
          td8_2_1OfWorkTable.textContent = '';
          td8_3_1OfWorkTable.textContent = '';
  
          // Прокладка кабеля АВБбШВ 2х16 в готовой траншее
          let row9OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row9OfWorkTable);
          // ячейки
          let td9_1OfWorkTable = document.createElement("TD");
          let td9_2OfWorkTable = document.createElement("TD");
          let td9_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row9OfWorkTable.append(td9_1OfWorkTable, td9_2OfWorkTable, td9_3OfWorkTable);
  
          // Наполняем ячейки
          td9_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 в готовой траншее';
          td9_2OfWorkTable.textContent = 'м';
          td9_3OfWorkTable.textContent = routing_2x16_cable_in_the_trench;
  
          // Прокладка кабеля АВБбШВ 2х16 по выносной стойке
          let row10OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row10OfWorkTable);
          // ячейки
          let td10_1OfWorkTable = document.createElement("TD");
          let td10_2OfWorkTable = document.createElement("TD");
          let td10_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row10OfWorkTable.append(td10_1OfWorkTable, td10_2OfWorkTable, td10_3OfWorkTable);
  
          // Наполняем ячейки
          td10_1OfWorkTable.textContent = 'Прокладка кабеля АВБбШВ 2х16 по выносной стойке';
          td10_2OfWorkTable.textContent = 'м';
          td10_3OfWorkTable.textContent = routing_2x16_cable_along_remote_stand;
  
          // Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%
          let row11OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row11OfWorkTable);
          // ячейки
          let td11_1OfWorkTable = document.createElement("TD");
          let td11_2OfWorkTable = document.createElement("TD");
          let td11_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row11OfWorkTable.append(td11_1OfWorkTable, td11_2OfWorkTable, td11_3OfWorkTable);
  
          // Наполняем ячейки
          td11_1OfWorkTable.textContent = 'Приобретение кабеля АВБбШВ 2х16 всего с надбавкой 2%';
          td11_2OfWorkTable.textContent = 'м';
          td11_3OfWorkTable.textContent = purchase_2x16_cable_with_2_percent.toFixed(2);
      }
  
    //если ЩУЭ на стойке, и есть К
    if (sem.SEMType.split('-')[4] == '2' && sem.inputFromSem.includes('К')) {
            if (sem.inputFromSem === 'КК') {
            finding_an_existing_cable = 0.56;
        } else {
            finding_an_existing_cable = 0.28;
        }
            // Отшурфовка существующего кабеля
        let row12OfWorkTable = document.createElement("TR");
        bodyOfWorkTable.append(row12OfWorkTable);
        // ячейки
        let td12_1OfWorkTable = document.createElement("TD");
        let td12_2OfWorkTable = document.createElement("TD");
        let td12_3OfWorkTable = document.createElement("TD");
        // места ячеек
        row12OfWorkTable.append(td12_1OfWorkTable, td12_2OfWorkTable, td12_3OfWorkTable);
            // Наполняем ячейки
        td12_1OfWorkTable.textContent = 'Отшурфовка существующего кабеля';
        td12_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
        td12_3OfWorkTable.textContent = finding_an_existing_cable;
    }
          //если ЩУЭ на опоре и есть 3фК ...
      if (sem.SEMType.split('-')[4] === '1' && sem.SEMType.split('-')[2] !== '1'
          && sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')) {
  
          if (sem.SEMType.split('-')[2] === '2' && sem.inputFromSem === 'КК') {
              routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 3.4;
          } else {
              routing_existing_4x16_cable_along_pylon_with_protection_cover_KM = 1.7;
          }
  
          // Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)
          let row13OfWorkTable = document.createElement("TR");
          let row13_1OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row13OfWorkTable, row13_1OfWorkTable);
  
          // ячейки
          let td13_1OfWorkTable = document.createElement("TD");
          let td13_2OfWorkTable = document.createElement("TD");
          let td13_3OfWorkTable = document.createElement("TD");
          let td13_1_1OfWorkTable = document.createElement("TD");
          let td13_2_1OfWorkTable = document.createElement("TD");
          let td13_3_1OfWorkTable = document.createElement("TD");
          // места ячеек
          row13OfWorkTable.append(td13_1OfWorkTable, td13_2OfWorkTable, td13_3OfWorkTable);
  
          row13_1OfWorkTable.append(td13_1_1OfWorkTable, td13_2_1OfWorkTable, td13_3_1OfWorkTable);
  
          // Наполняем ячейки
          td13_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ';
          td13_2OfWorkTable.textContent = 'м';
          td13_3OfWorkTable.textContent = routing_existing_4x16_cable_along_pylon_with_protection_cover_KM;
          td13_1_1OfWorkTable.textContent = '(уголок 75х75х5, L=1700)';
          td13_2_1OfWorkTable.textContent = '';
          td13_3_1OfWorkTable.textContent = '';
      }
  
      //если ЩУЭ на стойке и есть 3фК ...
      if (sem.SEMType.split('-')[4] == '2' &&
          sem.SEMType.split('-')[2] !== '1' &&
          sem.inputFromSem.includes('К') && !sem.inputFromSem.includes('1фК')
      ) {
  
          if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
              routing_existing_4x16_cable_in_the_finished_trench = 4;
              routing_existing_4x16_cable_along_remote_stand = 6.8;
          } else {
              routing_existing_4x16_cable_in_the_finished_trench = 2;
              routing_existing_4x16_cable_along_remote_stand = 3.4;
          }
  
          // Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее
          let row14OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row14OfWorkTable);
          // ячейки
          let td14_1OfWorkTable = document.createElement("TD");
          let td14_2OfWorkTable = document.createElement("TD");
          let td14_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row14OfWorkTable.append(td14_1OfWorkTable, td14_2OfWorkTable, td14_3OfWorkTable);
  
          // Наполняем ячейки
          td14_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 4х16 в готовой траншее';
          td14_2OfWorkTable.textContent = 'м';
          td14_3OfWorkTable.textContent = routing_existing_4x16_cable_in_the_finished_trench;
  
          // Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке
          let row15OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row15OfWorkTable);
          // ячейки
          let td15_1OfWorkTable = document.createElement("TD");
          let td15_2OfWorkTable = document.createElement("TD");
          let td15_3OfWorkTable = document.createElement("TD");
          // места ячеек
          row15OfWorkTable.append(td15_1OfWorkTable, td15_2OfWorkTable, td15_3OfWorkTable);
  
          // Наполняем ячейки
          td15_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 4х16 по выносной стойке';
          td15_2OfWorkTable.textContent = 'м';
          td15_3OfWorkTable.textContent = routing_existing_4x16_cable_along_remote_stand;
      }
         //если ЩУЭ на опоре, и есть 1фК
      if ((sem.SEMType.split('-')[4] == '1')
          && ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К')) ||
              (sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК')))
      ) {
  
          if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
              routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 3.4;
          } else {
              routing_existing_2x16_cable_along_pylon_with_protection_cover_KM = 1.7;
          }
  
          // Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=1700)
          let row16OfWorkTable = document.createElement("TR");
          let row16_1OfWorkTable = document.createElement("TR");
          bodyOfWorkTable.append(row16OfWorkTable, row16_1OfWorkTable);
  
          // ячейки
          let td16_1OfWorkTable = document.createElement("TD");
          let td16_2OfWorkTable = document.createElement("TD");
          let td16_3OfWorkTable = document.createElement("TD");
          let td16_1_1OfWorkTable = document.createElement("TD");
          let td16_2_1OfWorkTable = document.createElement("TD");
          let td16_3_1OfWorkTable = document.createElement("TD");
          // места ячеек
          row16OfWorkTable.append(td16_1OfWorkTable, td16_2OfWorkTable, td16_3OfWorkTable);
  
          row16_1OfWorkTable.append(td16_1_1OfWorkTable, td16_2_1OfWorkTable, td16_3_1OfWorkTable);
  
          // Наполняем ячейки
          td16_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ';
          td16_2OfWorkTable.textContent = 'м';
          td16_3OfWorkTable.textContent = routing_existing_2x16_cable_along_pylon_with_protection_cover_KM;
          td16_1_1OfWorkTable.textContent = '(уголок 75х75х5, L=1700)';
          td16_2_1OfWorkTable.textContent = '';
          td16_3_1OfWorkTable.textContent = '';
      }
       //если ЩУЭ на стойке, и есть 1фК
   if ((sem.SEMType.split('-')[4] == '2')
      && ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem.includes('К')) ||
          (sem.SEMType.split('-')[2] == '3' && (sem.inputFromSem === 'КК' || sem.inputFromSem === '1фК')))
   ) {
         if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
          routing_existing_2x16_cable_in_the_finished_trench = 4;
          routing_existing_2x16_cable_along_remote_stand = 6.8;
      } else {
          routing_existing_2x16_cable_in_the_finished_trench = 2;
          routing_existing_2x16_cable_along_remote_stand = 3.4;
      }
         // Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее
      let row17OfWorkTable = document.createElement("TR");
      bodyOfWorkTable.append(row17OfWorkTable);
      // ячейки
      let td17_1OfWorkTable = document.createElement("TD");
      let td17_2OfWorkTable = document.createElement("TD");
      let td17_3OfWorkTable = document.createElement("TD");
      // места ячеек
      row17OfWorkTable.append(td17_1OfWorkTable, td17_2OfWorkTable, td17_3OfWorkTable);
         // Наполняем ячейки
      td17_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 2х16 в готовой траншее';
      td17_2OfWorkTable.textContent = 'м';
      td17_3OfWorkTable.textContent = routing_existing_2x16_cable_in_the_finished_trench;
         // Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке
      let row18OfWorkTable = document.createElement("TR");
      bodyOfWorkTable.append(row18OfWorkTable);
      // ячейки
      let td18_1OfWorkTable = document.createElement("TD");
      let td18_2OfWorkTable = document.createElement("TD");
      let td18_3OfWorkTable = document.createElement("TD");
      // места ячеек
      row18OfWorkTable.append(td18_1OfWorkTable, td18_2OfWorkTable, td18_3OfWorkTable);
         // Наполняем ячейки
      td18_1OfWorkTable.textContent = 'Прокладка существующего кабеля АВБбШВ 2х16 по выносной стойке';
      td18_2OfWorkTable.textContent = 'м';
      td18_3OfWorkTable.textContent = routing_existing_2x16_cable_along_remote_stand;
  }
     //если ЩУЭ на опоре
  if (sem.SEMType.split('-')[4] == '1') {
         if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
          wire_routing_along_constructions = 1.5;
          if (sem.pillarType === 'СВ-110') {
              wire_routing_in_the_pipe = 6.4;
          } else {
              wire_routing_in_the_pipe = 5.1;
          }
      } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
          wire_routing_along_constructions = 9;
          if (sem.pillarType === 'СВ-110') {
              wire_routing_in_the_pipe = 38.4;
          } else {
              wire_routing_in_the_pipe = 30.6;
          }
      } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
          wire_routing_along_constructions = 7.5;
          if (sem.pillarType === 'СВ-110') {
              wire_routing_in_the_pipe = 32;
          } else {
              wire_routing_in_the_pipe = 25.5;
          }
      } else if ((sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') ||
          (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '3фК')) {
          wire_routing_along_constructions = 4.5;
          if (sem.pillarType === 'СВ-110') {
              wire_routing_in_the_pipe = 19.2;
          } else {
              wire_routing_in_the_pipe = 15.3;
          }
      } else if ((sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'КВ')) ||
          (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === '1фК')) {
          wire_routing_along_constructions = 6;
          if (sem.pillarType === 'СВ-110') {
              wire_routing_in_the_pipe = 25.6;
          } else {
              wire_routing_in_the_pipe = 20.4;
          }
      } else {
          wire_routing_along_constructions = 3;
          if (sem.pillarType === 'СВ-110') {
              wire_routing_in_the_pipe = 12.8;
          } else {
              wire_routing_in_the_pipe = 10.2;
          }
      }
      purchase_wire_with_2_percent = (wire_routing_along_constructions +
          wire_routing_in_the_pipe) * 1.02;
         // Прокладка провода СИП-4и 2х16 по конструкциям
      let row19OfWorkTable = document.createElement("TR");
      bodyOfWorkTable.append(row19OfWorkTable);
      // ячейки
      let td19_1OfWorkTable = document.createElement("TD");
      let td19_2OfWorkTable = document.createElement("TD");
      let td19_3OfWorkTable = document.createElement("TD");
      // места ячеек
      row19OfWorkTable.append(td19_1OfWorkTable, td19_2OfWorkTable, td19_3OfWorkTable);
         // Наполняем ячейки
      td19_1OfWorkTable.textContent = 'Прокладка провода СИП-4и 2х16 по конструкциям';
      td19_2OfWorkTable.textContent = 'м';
      td19_3OfWorkTable.textContent = wire_routing_along_constructions;
         // Прокладка провода СИП-4и 2х16 в трубе
      let row20OfWorkTable = document.createElement("TR");
      bodyOfWorkTable.append(row20OfWorkTable);
      // ячейки
      let td20_1OfWorkTable = document.createElement("TD");
      let td20_2OfWorkTable = document.createElement("TD");
      let td20_3OfWorkTable = document.createElement("TD");
      // места ячеек
      row20OfWorkTable.append(td20_1OfWorkTable, td20_2OfWorkTable, td20_3OfWorkTable);
         // Наполняем ячейки
      td20_1OfWorkTable.textContent = 'Прокладка провода СИП-4и 2х16 в трубе';
      td20_2OfWorkTable.textContent = 'м';
      td20_3OfWorkTable.textContent = wire_routing_in_the_pipe;
         // Приобретение провода СИП-4и 2х16 с надбавкой 2%
      let row21OfWorkTable = document.createElement("TR");
      bodyOfWorkTable.append(row21OfWorkTable);
      // ячейки
      let td21_1OfWorkTable = document.createElement("TD");
      let td21_2OfWorkTable = document.createElement("TD");
      let td21_3OfWorkTable = document.createElement("TD");
      // места ячеек
      row21OfWorkTable.append(td21_1OfWorkTable, td21_2OfWorkTable, td21_3OfWorkTable);
         // Наполняем ячейки
      td21_1OfWorkTable.textContent = 'Приобретение провода СИП-4и 2х16 с надбавкой 2%';
      td21_2OfWorkTable.textContent = 'м';
      td21_3OfWorkTable.textContent = purchase_wire_with_2_percent.toFixed(2);
  }
  
  }//
  //если ЩУЭ на опоре и есть 3фК ... или на стойке и есть 3ф
  if ((sem.SEMType.split('-')[4] == '1' &&
  sem.SEMType.split('-')[2] !== '1' &&
  (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')) ||
  (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1')
  ) {
    if (sem.SEMType.split('-')[2] == '2' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
      purchase_n_montage_INside_sleeve_4 = 3;
  } else if (sem.SEMType.split('-')[4] == '2' ||
      (sem.SEMType.split('-')[4] == '1' && sem.SEMType.split('-')[2] == '2' && !sem.inputFromSem === 'КК')) {
      purchase_n_montage_INside_sleeve_4 = 2;
  } else {
      purchase_n_montage_INside_sleeve_4 = 1;
  }
    // Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1
  let row22OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row22OfWorkTable);
  // ячейки
  let td22_1OfWorkTable = document.createElement("TD");
  let td22_2OfWorkTable = document.createElement("TD");
  let td22_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row22OfWorkTable.append(td22_1OfWorkTable, td22_2OfWorkTable, td22_3OfWorkTable);
    // Наполняем ячейки
  td22_1OfWorkTable.textContent = 'Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1';
  td22_2OfWorkTable.textContent = 'шт.';
  td22_3OfWorkTable.textContent = purchase_n_montage_INside_sleeve_4;
  }
  //если ЩУЭ на стойке и есть 3ф
  // как первые 5 строк
  if (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '1') {
    if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === '3фК') {
      purchase_n_montage_OUTside_sleeve_4 = 1;
  } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
      purchase_n_montage_OUTside_sleeve_4 = 3;
  } else {
      purchase_n_montage_OUTside_sleeve_4 = 2;
  }
    // Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1
  let row23OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row23OfWorkTable);
  // ячейки
  let td23_1OfWorkTable = document.createElement("TD");
  let td23_2OfWorkTable = document.createElement("TD");
  let td23_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row23OfWorkTable.append(td23_1OfWorkTable, td23_2OfWorkTable, td23_3OfWorkTable);
    // Наполняем ячейки
  td23_1OfWorkTable.textContent = 'Приобретение и монтаж муфт наружной установки типа 4ПБКНттп (16-25)-1';
  td23_2OfWorkTable.textContent = 'шт.';
  td23_3OfWorkTable.textContent = purchase_n_montage_OUTside_sleeve_4;
  }
  //если ЩУЭ на опоре и есть 1фК ... или на стойке и есть 1ф
  if ((sem.SEMType.split('-')[4] == '1' &&
  sem.SEMType.split('-')[2] !== '2' &&
  (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')) ||
  (sem.SEMType.split('-')[4] == '2' && sem.SEMType.split('-')[2] !== '2')
  ) {
    if (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[3] == '2' && sem.SEMType.split('-')[4] == '2') {
      purchase_n_montage_INside_sleeve_2 = 3;
  } else if ((sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '2') ||
      (sem.SEMType.split('-')[2] == '1' && sem.SEMType.split('-')[4] == '1' && sem.inputFromSem === 'КК')) {
      purchase_n_montage_INside_sleeve_2 = 2;
  } else {
      purchase_n_montage_INside_sleeve_2 = 1;
  }
    // Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1
  let row24OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row24OfWorkTable);
  // ячейки
  let td24_1OfWorkTable = document.createElement("TD");
  let td24_2OfWorkTable = document.createElement("TD");
  let td24_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row24OfWorkTable.append(td24_1OfWorkTable, td24_2OfWorkTable, td24_3OfWorkTable);
    // Наполняем ячейки
  td24_1OfWorkTable.textContent = 'Приобретение и монтаж муфт внутренней установки типа 2ПБКВттп (16-25)-1';
  td24_2OfWorkTable.textContent = 'шт.';
  td24_3OfWorkTable.textContent = purchase_n_montage_INside_sleeve_2;
  }
  //если ЩУЭ на стойке и (это чисто 1ф или это 3-2-2 с 1фВ)
  if (sem.SEMType.split('-')[4] == '2' &&
  ((sem.SEMType.split('-')[2] == '1') ||
      ((sem.SEMType.split('-')[2] == '3') && (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК')))
  ) {
    if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'ВВ') {
      purchase_n_montage_OUTside_sleeve_2 = 3;
  } else if (sem.SEMType.split('-')[2] == '1' &&
      (sem.inputFromSem === 'В' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК')) {
      purchase_n_montage_OUTside_sleeve_2 = 2;
  } else {
      purchase_n_montage_OUTside_sleeve_2 = 1;
  }
    // Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1
  let row25OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row25OfWorkTable);
  // ячейки
  let td25_1OfWorkTable = document.createElement("TD");
  let td25_2OfWorkTable = document.createElement("TD");
  let td25_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row25OfWorkTable.append(td25_1OfWorkTable, td25_2OfWorkTable, td25_3OfWorkTable);
    // Наполняем ячейки
  td25_1OfWorkTable.textContent = 'Приобретение и монтаж муфт наружной установки типа 2ПБКНттп (16-25)-1';
  td25_2OfWorkTable.textContent = 'шт.';
  td25_3OfWorkTable.textContent = purchase_n_montage_OUTside_sleeve_2;
  }
  //ДЛЯ ВСЕХ ЩУЭ
  // Приобретение и монтаж зажимов ЗОПг-2
  if (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК')) {
  purchase_n_montage_clamp_ZOP = 2;
  } else if (sem.SEMType.split('-')[2] == '3' && sem.inputFromSem === 'ВВ') {
  purchase_n_montage_clamp_ZOP = 10;
  } else if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'ВВ') {
  purchase_n_montage_clamp_ZOP = 12;
  } else if (sem.inputFromSem === 'ВВ' || sem.inputFromSem === '3фК') {
  purchase_n_montage_clamp_ZOP = 6;
  } else if (sem.inputFromSem === '3фК' ||
  (sem.SEMType.split('-')[2] == '2' && (sem.inputFromSem === 'В' || sem.inputFromSem === 'ВК' || sem.inputFromSem === 'КВ'))) {
  purchase_n_montage_clamp_ZOP = 8;
  } else {
  purchase_n_montage_clamp_ZOP = 4;
  }
  let row26OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row26OfWorkTable);
  // ячейки
  let td26_1OfWorkTable = document.createElement("TD");
  let td26_2OfWorkTable = document.createElement("TD");
  let td26_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row26OfWorkTable.append(td26_1OfWorkTable, td26_2OfWorkTable, td26_3OfWorkTable);
  // Наполняем ячейки
  td26_1OfWorkTable.textContent = 'Приобретение и монтаж зажимов ЗОПг-2';
  td26_2OfWorkTable.textContent = 'шт.';
  td26_3OfWorkTable.textContent = purchase_n_montage_clamp_ZOP;
  //если ЩУЭ на опоре (как строки 19-21)
  if (sem.SEMType.split('-')[4] == '1') {
    purchase_n_montage_strip_2400_for_grounding = 1;
    // Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры
  let row27OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row27OfWorkTable);
  // ячейки
  let td27_1OfWorkTable = document.createElement("TD");
  let td27_2OfWorkTable = document.createElement("TD");
  let td27_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row27OfWorkTable.append(td27_1OfWorkTable, td27_2OfWorkTable, td27_3OfWorkTable);
    // Наполняем ячейки
  td27_1OfWorkTable.textContent = 'Приобретение и монтаж полосы 4х12, L=2400 для подключения к заземляющему выпуску опоры';
  td27_2OfWorkTable.textContent = 'шт.';
  td27_3OfWorkTable.textContent = purchase_n_montage_strip_2400_for_grounding;
  }
  //если ЩУЭ на опоре, и есть К
  if (sem.SEMType.split('-')[4] == '1' &&
  (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК')
  ) {
    purchase_n_montage_protection_cover_KM_1700 = 1;
    // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)
  let row28OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row28OfWorkTable);
  // ячейки
  let td28_1OfWorkTable = document.createElement("TD");
  let td28_2OfWorkTable = document.createElement("TD");
  let td28_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row28OfWorkTable.append(td28_1OfWorkTable, td28_2OfWorkTable, td28_3OfWorkTable);
    // Наполняем ячейки
  td28_1OfWorkTable.textContent = 'Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=1700)';
  td28_2OfWorkTable.textContent = 'шт.';
  td28_3OfWorkTable.textContent = purchase_n_montage_protection_cover_KM_1700;
  }
  //если ЩУЭ на стойке
  if (sem.SEMType.split('-')[4] == '2') {
    purchase_n_montage_protection_cover_KM_2300 = 1;
  purchase_n_montage_strip_2200_for_grounding = 1;
  purchase_n_montage_round_steel_for_strip = 2;
  purchase_n_montage_clamp_XK1 = 3;
    excavation = 0.13; // разработка котлована под стойку
  soil_leveling = 0.13; // разравнивание грунта
  purchase_crushed_stone_sand_gravel_mixture = 0.07; // щебеночно-песчано-гравийная смесь
  purchase_concrete = 0.05; // бетон
  installation_of_metal_structures_in_concrete = 4.06; // установка металлоконструкций в бетоне
    if (sem.SEMType.split('-')[3] == '1') {
      digging_trenches = 0.54; // рытье траншеи
      ground_underlay = 0.18; // устройство постели из земли
      backfill = 0.36; // засыпка грунтом
  } else {
      digging_trenches = 0.72; // рытье траншеи
      ground_underlay = 0.24; // устройство постели из земли
      backfill = 0.48; // засыпка грунтом		
  }
    // Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)
  let row29OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row29OfWorkTable);
  // ячейки
  let td29_1OfWorkTable = document.createElement("TD");
  let td29_2OfWorkTable = document.createElement("TD");
  let td29_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row29OfWorkTable.append(td29_1OfWorkTable, td29_2OfWorkTable, td29_3OfWorkTable);
    // Наполняем ячейки
  td29_1OfWorkTable.textContent = 'Приобретение и монтаж кожуха защиты кабеля КМ (уголок 75х75х5, L=2300)';
  td29_2OfWorkTable.textContent = 'шт.';
  td29_3OfWorkTable.textContent = purchase_n_montage_protection_cover_KM_2300;
    // Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ
  let row30OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row30OfWorkTable);
  // ячейки
  let td30_1OfWorkTable = document.createElement("TD");
  let td30_2OfWorkTable = document.createElement("TD");
  let td30_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row30OfWorkTable.append(td30_1OfWorkTable, td30_2OfWorkTable, td30_3OfWorkTable);
    // Наполняем ячейки
  td30_1OfWorkTable.textContent = 'Приобретение и монтаж полосы 4х12, L=2200 для подключения к болту заземления корпуса ЩУЭ';
  td30_2OfWorkTable.textContent = 'шт.';
  td30_3OfWorkTable.textContent = purchase_n_montage_strip_2200_for_grounding;
    //Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему контуру опоры
  let row31OfWorkTable = document.createElement("TR");
  let row31_1OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row31OfWorkTable, row31_1OfWorkTable);
    // ячейки
  let td31_1OfWorkTable = document.createElement("TD");
  let td31_2OfWorkTable = document.createElement("TD");
  let td31_3OfWorkTable = document.createElement("TD");
  let td31_1_1OfWorkTable = document.createElement("TD");
  let td31_2_1OfWorkTable = document.createElement("TD");
  let td31_3_1OfWorkTable = document.createElement("TD");
  // места ячеек
  row31OfWorkTable.append(td31_1OfWorkTable, td31_2OfWorkTable, td31_3OfWorkTable);
    row31_1OfWorkTable.append(td31_1_1OfWorkTable, td31_2_1OfWorkTable, td31_3_1OfWorkTable);
    // Наполняем ячейки
  td31_1OfWorkTable.textContent = 'Приобретение и монтаж сталь круглая d10 мм для подключения полосы 4х12 к заземляющему';
  td31_2OfWorkTable.textContent = 'м';
  td31_3OfWorkTable.textContent = purchase_n_montage_round_steel_for_strip;
  td31_1_1OfWorkTable.textContent = 'контуру опоры';
  td31_2_1OfWorkTable.textContent = '';
  td31_3_1OfWorkTable.textContent = '';
    // Приобретение и монтаж хомутов ХК-1
  let row32OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row32OfWorkTable);
  // ячейки
  let td32_1OfWorkTable = document.createElement("TD");
  let td32_2OfWorkTable = document.createElement("TD");
  let td32_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row32OfWorkTable.append(td32_1OfWorkTable, td32_2OfWorkTable, td32_3OfWorkTable);
    // Наполняем ячейки
  td32_1OfWorkTable.textContent = 'Приобретение и монтаж хомутов ХК-1';
  td32_2OfWorkTable.textContent = 'шт.';
  td32_3OfWorkTable.textContent = purchase_n_montage_clamp_XK1;
    // Рытье траншеи в ручную
  let row33OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row33OfWorkTable);
  // ячейки
  let td33_1OfWorkTable = document.createElement("TD");
  let td33_2OfWorkTable = document.createElement("TD");
  let td33_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row33OfWorkTable.append(td33_1OfWorkTable, td33_2OfWorkTable, td33_3OfWorkTable);
    // Наполняем ячейки
  td33_1OfWorkTable.textContent = 'Рытье траншеи в ручную';
  td33_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td33_3OfWorkTable.textContent = digging_trenches;
    // Устройство постели из просеянной земли
  let row34OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row34OfWorkTable);
  // ячейки
  let td34_1OfWorkTable = document.createElement("TD");
  let td34_2OfWorkTable = document.createElement("TD");
  let td34_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row34OfWorkTable.append(td34_1OfWorkTable, td34_2OfWorkTable, td34_3OfWorkTable);
    // Наполняем ячейки
  td34_1OfWorkTable.textContent = 'Устройство постели из просеянной земли';
  td34_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td34_3OfWorkTable.textContent = ground_underlay;
    // Засыпка грунтом
  let row35OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row35OfWorkTable);
  // ячейки
  let td35_1OfWorkTable = document.createElement("TD");
  let td35_2OfWorkTable = document.createElement("TD");
  let td35_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row35OfWorkTable.append(td35_1OfWorkTable, td35_2OfWorkTable, td35_3OfWorkTable);
    // Наполняем ячейки
  td35_1OfWorkTable.textContent = 'Засыпка грунтом';
  td35_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td35_3OfWorkTable.textContent = backfill;
    // Разработка котлована под стойку
  let row36OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row36OfWorkTable);
  // ячейки
  let td36_1OfWorkTable = document.createElement("TD");
  let td36_2OfWorkTable = document.createElement("TD");
  let td36_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row36OfWorkTable.append(td36_1OfWorkTable, td36_2OfWorkTable, td36_3OfWorkTable);
    // Наполняем ячейки
  td36_1OfWorkTable.textContent = 'Разработка котлована под стойку';
  td36_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td36_3OfWorkTable.textContent = excavation;
    // Разравнивание вытесненного грунта вручную
  let row37OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row37OfWorkTable);
  // ячейки
  let td37_1OfWorkTable = document.createElement("TD");
  let td37_2OfWorkTable = document.createElement("TD");
  let td37_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row37OfWorkTable.append(td37_1OfWorkTable, td37_2OfWorkTable, td37_3OfWorkTable);
    // Наполняем ячейки
  td37_1OfWorkTable.textContent = 'Разравнивание вытесненного грунта вручную';
  td37_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td37_3OfWorkTable.textContent = soil_leveling;
    // Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)
  let row38OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row38OfWorkTable);
  // ячейки
  let td38_1OfWorkTable = document.createElement("TD");
  let td38_2OfWorkTable = document.createElement("TD");
  let td38_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row38OfWorkTable.append(td38_1OfWorkTable, td38_2OfWorkTable, td38_3OfWorkTable);
    // Наполняем ячейки
  td38_1OfWorkTable.textContent = 'Приобретение щебеночно-песчано-гравийной смеси (ЩУЭ)';
  td38_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td38_3OfWorkTable.textContent = purchase_crushed_stone_sand_gravel_mixture;
    // Приобретение бетона класса С16/20 F100   ( в 450 мм ЩУЭ)
  let row39OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row39OfWorkTable);
  // ячейки
  let td39_1OfWorkTable = document.createElement("TD");
  let td39_2OfWorkTable = document.createElement("TD");
  let td39_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row39OfWorkTable.append(td39_1OfWorkTable, td39_2OfWorkTable, td39_3OfWorkTable);
    // Наполняем ячейки
  td39_1OfWorkTable.textContent = 'Приобретение бетона класса С16/20 F100'; // (в 450 мм ЩУЭ)
  td39_2OfWorkTable.innerHTML = 'м' + '<sup>3</sup>';
  td39_3OfWorkTable.textContent = purchase_concrete;
    // Установка металлических конструкций в теле бетона
  let row40OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row40OfWorkTable);
  // ячейки
  let td40_1OfWorkTable = document.createElement("TD");
  let td40_2OfWorkTable = document.createElement("TD");
  let td40_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row40OfWorkTable.append(td40_1OfWorkTable, td40_2OfWorkTable, td40_3OfWorkTable);
    // Наполняем ячейки
  td40_1OfWorkTable.textContent = 'Установка металлических конструкций в теле бетона';
  td40_2OfWorkTable.textContent = 'кг';
  td40_3OfWorkTable.textContent = installation_of_metal_structures_in_concrete;
  }
  // если есть К
  if (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК' || sem.inputFromSem === '3фК') {
    if (sem.inputFromSem === 'КК') {
      dismantling_cable_from_pylon = 16; // демонтаж сущ кабеля
  } else {
      dismantling_cable_from_pylon = 8;	// демонтаж сущ кабеля			
  }
    if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] !== '1') {
      dismantling_metal_corner_from_pylon = 15.84; // демонтаж сущ уголка
  } else {
      dismantling_metal_corner_from_pylon = 11.17; // демонтаж сущ уголка
  }
    dismantling_metal_construction_from_pylon = 2.01; // демонтаж сущ металлоконструкций
    if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '2') {
      dismantling_clamp_ZOP = 8; // демонтаж зажимов ЗОПг-2
  } else if (sem.inputFromSem === 'КК' && sem.SEMType.split('-')[2] == '3') {
      dismantling_clamp_ZOP = 6;	// демонтаж зажимов ЗОПг-2			
  } else if (sem.inputFromSem === '1фК' || (sem.SEMType.split('-')[2] == '1' && (sem.inputFromSem === 'К' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК'))) {
      dismantling_clamp_ZOP = 2;	// демонтаж зажимов ЗОПг-2			
  } else {
      dismantling_clamp_ZOP = 4;	// демонтаж зажимов ЗОПг-2			
  }
      // Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг
  let row41OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row41OfWorkTable);
  // ячейки
  let td41_1OfWorkTable = document.createElement("TD");
  let td41_2OfWorkTable = document.createElement("TD");
  let td41_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row41OfWorkTable.append(td41_1OfWorkTable, td41_2OfWorkTable, td41_3OfWorkTable);
    // Наполняем ячейки
  td41_1OfWorkTable.textContent = 'Демонтаж существующего кабеля с опоры массой 1 м до 2-х кг';
  td41_2OfWorkTable.textContent = 'м';
  td41_3OfWorkTable.textContent = dismantling_cable_from_pylon;
    // Демонтаж существующего уголка с опоры
  let row42OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row42OfWorkTable);
  // ячейки
  let td42_1OfWorkTable = document.createElement("TD");
  let td42_2OfWorkTable = document.createElement("TD");
  let td42_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row42OfWorkTable.append(td42_1OfWorkTable, td42_2OfWorkTable, td42_3OfWorkTable);
    // Наполняем ячейки
  td42_1OfWorkTable.textContent = 'Демонтаж существующего уголка с опоры';
  td42_2OfWorkTable.textContent = 'кг';
  td42_3OfWorkTable.textContent = dismantling_metal_corner_from_pylon;
    // Демонтаж металлоконструкций с опоры
  let row43OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row43OfWorkTable);
  // ячейки
  let td43_1OfWorkTable = document.createElement("TD");
  let td43_2OfWorkTable = document.createElement("TD");
  let td43_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row43OfWorkTable.append(td43_1OfWorkTable, td43_2OfWorkTable, td43_3OfWorkTable);
    // Наполняем ячейки
  td43_1OfWorkTable.textContent = 'Демонтаж металлоконструкций с опоры';
  td43_2OfWorkTable.textContent = 'кг';
  td43_3OfWorkTable.textContent = dismantling_metal_construction_from_pylon;
    // Демонтаж зажимов ЗОПг-2
  let row44OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row44OfWorkTable);
  // ячейки
  let td44_1OfWorkTable = document.createElement("TD");
  let td44_2OfWorkTable = document.createElement("TD");
  let td44_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row44OfWorkTable.append(td44_1OfWorkTable, td44_2OfWorkTable, td44_3OfWorkTable);
    // Наполняем ячейки
  td44_1OfWorkTable.textContent = 'Демонтаж зажимов ЗОПг-2';
  td44_2OfWorkTable.textContent = 'шт.';
  td44_3OfWorkTable.textContent = dismantling_clamp_ZOP;
  }
  //если есть 3фК
  if (sem.SEMType.split('-')[2] !== '1' &&
  (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '3фК')
  ) {
  if (sem.SEMType.split('-')[2] == '2' && sem.inputFromSem === 'КК') {
      dismantling_INside_sleeve_4 = 2;
  } else {
      dismantling_INside_sleeve_4 = 1;
  }
    // Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1
  let row45OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row45OfWorkTable);
  // ячейки
  let td45_1OfWorkTable = document.createElement("TD");
  let td45_2OfWorkTable = document.createElement("TD");
  let td45_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row45OfWorkTable.append(td45_1OfWorkTable, td45_2OfWorkTable, td45_3OfWorkTable);
    // Наполняем ячейки
  td45_1OfWorkTable.textContent = 'Демонтаж муфты наружной установки типа 4ПБКНттп (16-25)-1';
  td45_2OfWorkTable.textContent = 'шт.';
  td45_3OfWorkTable.textContent = dismantling_INside_sleeve_4;
  }
  //если есть 1фК
  if (sem.SEMType.split('-')[2] !== '2' &&
  (sem.inputFromSem === 'К' || sem.inputFromSem === 'КК' || sem.inputFromSem === 'КВ' || sem.inputFromSem === 'ВК' || sem.inputFromSem === '1фК')
  ) {
    if (sem.SEMType.split('-')[2] == '1' && sem.inputFromSem === 'КК') {
      dismantling_INside_sleeve_2 = 2;
  } else {
      dismantling_INside_sleeve_2 = 1;
  }
    // Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1
  let row45OfWorkTable = document.createElement("TR");
  bodyOfWorkTable.append(row45OfWorkTable);
  // ячейки
  let td45_1OfWorkTable = document.createElement("TD");
  let td45_2OfWorkTable = document.createElement("TD");
  let td45_3OfWorkTable = document.createElement("TD");
  // места ячеек
  row45OfWorkTable.append(td45_1OfWorkTable, td45_2OfWorkTable, td45_3OfWorkTable);
    // Наполняем ячейки
  td45_1OfWorkTable.textContent = 'Демонтаж муфты наружной установки типа 2ПБКНттп (16-25)-1';
  td45_2OfWorkTable.textContent = 'шт.';
  td45_3OfWorkTable.textContent = dismantling_INside_sleeve_2;
  }
  */


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








var userInput = localStorage.getItem("userInput");
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

var projectData = JSON.parse(localStorage.getItem("projectData"));
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
  var h6_break = document.createElement("H6");
  h6_break.classList.add('h6_break');
  var a4div = document.createElement("DIV");
  a4div.classList.add('a4_div');
  var a4div_frame = document.createElement("DIV");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc2NvcGVPZldvcmsuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL3Njb3BlT2ZXb3JrLmNzcz9hMTM1Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWFzaWRlLXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9jaXBoZXIvYWRkLWNpcGhlci10YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvY2lwaGVyL2FkZC1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2NpcGhlci9hZGQtcGFnZS1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2RhdGEvbWFpbi1vYmplY3QtY29sbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLW9yZGVyLWxpc3QvYWRkLXN1bS1zZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2Zvci13b3Jrcy9jcmVhdGUtcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itd29ya3Mvd29ya3MtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLXdvcmtzL3dvcmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9zY29wZU9mV29yay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvdGFibGUtZm9yLW9yZGVyX25fd29ya3MvY3JlYXRlLWluZm8tdGFibGUuanMiXSwibmFtZXMiOlsiYWRkQXNpZGVUYWJsZSIsImFzaWRlX2ZyYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicm93MSIsInJvdzIiLCJyb3czIiwiYXBwZW5kIiwidGQxXzEiLCJzcGFuX3RkMV8xIiwidGQxXzIiLCJ0ZDJfMSIsInNwYW5fdGQyXzEiLCJ0ZDJfMiIsInRkM18xIiwic3Bhbl90ZDNfMSIsInRkM18yIiwiaW5uZXJIVE1MIiwiYWRkQ2lwaGVyVGFibGUiLCJwcm9qZWN0Iiwic3Vic2VjdGlvbiIsInR5cGVPZlBhZ2UiLCJzZW0iLCJpbmRleCIsIm1haW5PYmoiLCJzaGVtZVBhZ2VzIiwiY29uc29sZSIsImxvZyIsItGBaXBoZXJUYWJsZSIsInRib2R5Iiwicm93XzEiLCJyb3dfMiIsInJvd18zIiwicm93XzQiLCJyb3dfNSIsInJvd182Iiwicm93XzciLCJyb3dfOCIsInJvd185Iiwicm93XzEwIiwicm93XzExIiwidGQxXzMiLCJ0ZDFfNCIsInRkMV81IiwidGQxXzYiLCJ0ZDFfNyIsInNldEF0dHJpYnV0ZSIsInRkMl8zIiwidGQyXzQiLCJ0ZDJfNSIsInRkMl82IiwidGQzXzMiLCJ0ZDNfNCIsInRkM181IiwidGQzXzYiLCJ0ZDNfNyIsInRkNF8xIiwidGQ0XzIiLCJ0ZDRfMyIsInRkNF80IiwidGQ0XzUiLCJ0ZDRfNiIsInRkNV8xIiwidGQ1XzIiLCJ0ZDVfMyIsInRkNV80IiwidGQ1XzUiLCJ0ZDVfNiIsInRkNl8xIiwidGQ2XzIiLCJ0ZDZfMyIsInRkNl80IiwidGQ2XzUiLCJ0ZDZfNiIsInRkNl83IiwidGQ2XzgiLCJ0ZDdfMSIsInRkN18yIiwidGQ3XzMiLCJ0ZDdfNCIsInRkN181IiwidGQ3XzYiLCJ0ZDdfNyIsInRkOF8xIiwidGQ4XzIiLCJ0ZDhfMyIsInRkOF80IiwidGQ5XzEiLCJ0ZDlfMiIsInRkOV8zIiwidGQ5XzQiLCJ0ZDlfNSIsInRkOV82IiwidGQxMF8xIiwidGQxMF8yIiwidGQxMF8zIiwidGQxMF80IiwidGQxMV8xIiwidGQxMV8yIiwidGQxMV8zIiwidGQxMV80IiwiY2lwaGVyIiwibmFtZU9mUHJvamVjdCIsIm5hbWVPZkJvc3MiLCJzcGxpdCIsImQiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwidG9kYXkiLCJzdGFnZU9mUHJvamVjdCIsInRleHRDb250ZW50IiwiYWRkT3JkZXJQYWdlTnVtYmVyIiwiYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIiLCJhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyIiwiYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyIiwiaXNCb3NzU2lnbmF0dXJlIiwiYm9zc1NpZ25hdHVyZSIsImJvc3NTaWduYXR1cmUyIiwiZnVsbERlY3JpcHRpb24iLCJTRU1UeXBlIiwiZGVjcmlwdGlvbkZvcldvcmtzIiwicF9iZXNwIiwibG9nb19iZXNwIiwibmFtZU9mRGV2ZWxvcGVyIiwiaXNEZXZlbG9wZXJTaWduYXR1cmUiLCJkZXZlbG9wZXJTaWduYXR1cmUiLCJhZGRGb3JtYXQiLCJmb3JtYXQiLCJmb3JtYXRfZGl2IiwiZm9ybWF0UGFyYSIsImFyck9mU2VtcyIsImlucHV0X3BhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJldmlvdXNQYWdlIiwicXVlcnlTZWxlY3RvciIsInNoZW1lUGFnZXNTdW0iLCJsZW5ndGgiLCJtYWluT2JqZWN0Q29sbGVjdCIsInN0ciIsImFycmF5T2ZVc2VySW5wdXQiLCJyZXN1bHRBcnJheSIsImxlZ2VuZEFycmF5IiwiU0VNIiwiYXJyIiwiY291bnRPZlNFTSIsImluZGV4T2YiLCJicmVha2VyMVZhbHVlIiwiYnJlYWtlcjJWYWx1ZSIsImNvdW50ZXJDb3VudEluU0VNIiwiaW5wdXRGcm9tU2VtIiwicGlsbGFyVHlwZSIsInBoYXNlMVZhbHVlIiwicGhhc2UyVmFsdWUiLCJvdXRCcmVha2VyMSIsIm91dEJyZWFrZXIyIiwidG9Mb3dlckNhc2UiLCJkZXNjcmlwdGlvbiIsImFsZXJ0IiwiaW5zdGFsbGF0aW9uIiwiaSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJhZGRTdW1TZW0iLCJhcnJPZlNlbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdW1PZkNvdW50Iiwic3VtT2ZTZW0iLCJjcmVhdGVSb3ciLCJtZWFzdXJlIiwidmFsdWUiLCJyb3ciLCJ0ZDEiLCJ0ZDIiLCJ0ZDMiLCJ3b3Jrc0RhdGFDb2xsZWN0IiwiaW5wdXQiLCJTRU1XT1JLUyIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEiLCJyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2giLCJyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEiLCJyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2giLCJyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwicHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCIsImluY2x1ZGVzIiwiZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2giLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwid2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMiLCJ3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUiLCJwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50IiwicHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCIsInB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80IiwicHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiIsInB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yIiwicHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCIsInB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmciLCJwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwIiwicHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCIsInB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmciLCJwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwIiwicHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSIsImV4Y2F2YXRpb24iLCJzb2lsX2xldmVsaW5nIiwicHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlIiwicHVyY2hhc2VfY29uY3JldGUiLCJpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSIsImRpZ2dpbmdfdHJlbmNoZXMiLCJncm91bmRfdW5kZXJsYXkiLCJiYWNrZmlsbCIsImRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24iLCJkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiIsImRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uIiwiZGlzbWFudGxpbmdfY2xhbXBfWk9QIiwiZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80IiwiZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yIiwid29ya1RhYmxlIiwiYm9keU9mV29ya1RhYmxlIiwicm93MU9mV29ya1RhYmxlIiwidGQxXzFPZldvcmtUYWJsZSIsInRkMV8yT2ZXb3JrVGFibGUiLCJ0ZDFfM09mV29ya1RhYmxlIiwiY29sbGVjdGVkRGF0YUZyb21TZW0iLCJ0b0ZpeGVkIiwidXNlcklucHV0IiwidXNlcklucHV0V2l0aG91dFNhbWVCcmVha2VycyIsInByb2plY3REYXRhIiwiSlNPTiIsInBhcnNlIiwiY291bnRlcnNBbmRCcmVha2Vyc1dyYXBwZXIiLCJpbmZvVGFibGVXcmFwcGVyIiwiaW5mb1RhYmxlIiwicm93Rm9ySW5mb1RhYmxlIiwiY3JlYXRlSW5mb1RhYmxlIiwib3JkZXJXcmFwcGVyIiwiaDZfYnJlYWsiLCJhNGRpdiIsImE0ZGl2X2ZyYW1lIiwibmVlZEJyZWFrZXJzSW5mbyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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QUFNa0UsS0FBSyxHQUFHbkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNbUUsS0FBSyxHQUFHcEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNb0UsS0FBSyxHQUFHckUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFFQSxNQUFNcUUsS0FBSyxHQUFHdEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXFFLE9BQUssQ0FBQ3RCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNdUIsS0FBSyxHQUFHdkUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXNFLE9BQUssQ0FBQ3ZCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNd0IsS0FBSyxHQUFHeEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNd0UsS0FBSyxHQUFHekUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNeUUsS0FBSyxHQUFHMUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQXlFLE9BQUssQ0FBQzFCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNMkIsS0FBSyxHQUFHM0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNMkUsS0FBSyxHQUFHNUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQSxNQUFNNEUsS0FBSyxHQUFHN0UsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFFQSxNQUFNNkUsS0FBSyxHQUFHOUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQTZFLE9BQUssQ0FBQzlCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsR0FBOUI7QUFDQSxNQUFNK0IsS0FBSyxHQUFHL0UsUUFBUSxD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QzJJLFdBQXhELGVBQXdFM0ksR0FBRyxDQUFDaUksYUFBNUUsc0JBQWdHakksR0FBRyxDQUFDa0ksYUFBcEc7QUFDQTtBQUNELEdBTkQsTUFNTztBQUNONEIsT0FBRyxDQUFDbEUsV0FBSixvRUFBK0I1RixHQUFHLENBQUM2SSxZQUFuQyxlQUFvRDdJLEdBQUcsQ0FBQzJJLFdBQXhEO0FBQ0E7O0FBRURvQixLQUFHLENBQUNuRSxXQUFKLEdBQWtCNUYsR0FBRyxDQUFDK0gsVUFBdEI7QUFFQTZCLEtBQUcsQ0FBQzNLLE1BQUosQ0FBVzRLLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQjtBQUNBLFNBQU9ILEdBQVA7QUFDQSxDQXpCRDs7QUEyQmVzRSw4RUFBZixFIiwiZmlsZSI6InNjb3BlT2ZXb3JrRW50cnkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGF5b3V0L3NjcmlwdHMvc2NvcGVPZldvcmsuanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQSc7IFxcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IFxcclxcbn1cXHJcXG5AbWVkaWEgcHJpbnQge1xcclxcbiAgICAvKiDQt9C00LXRgdGMINCx0YPQtNGD0YIg0YHRgtC40LvQuCDQtNC70Y8g0L/QtdGH0LDRgtC4ICovXFxyXFxuXFx0aGVhZGVyLCBcXHJcXG5cXHQubWFpbi10YWJsZSxcXHJcXG5cXHQuY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIsXFxyXFxuXFx0Zm9vdGVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuXFx0fVxcclxcblxcdC5hNF9kaXYge1xcclxcblxcdFxcdHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cyAhaW1wb3J0YW50O1xcclxcblxcdFxcdGJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRmbG9hdDogbm9uZSAhaW1wb3J0YW50OyBcXHJcXG5cXHRcXHQvKmJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAqL1xcclxcblxcdH0gXFxyXFxuXFxyXFxuXFx0LtGBaXBoZXJfdGFibGUgdGR7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxMnB0O1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQu0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMjRwdDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LnNxdWFyZV9jaGVja2VkIHtcXHJcXG5cXHRcXHQtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XFxyXFxuXFx0XFx0Y29sb3ItYWRqdXN0OiBleGFjdDtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0QHBhZ2Uge1xcclxcblxcdFxcdHNpemU6IGF1dG87ICBcXHJcXG5cXHRcXHRtYXJnaW46IDA7ICBcXHJcXG5cXHR9XFxyXFxuXFx0LyogaDYge1xcclxcblxcdFxcdC13ZWJraXQtZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFx0ICovXFxyXFxufVxcclxcbi8qIEBtZWRpYSBwcmludCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKVxcclxcbiAgYW5kIChtaW4tcmVzb2x1dGlvbjouMDAxZHBjbSkge1xcclxcblxcdGg2IHtcXHJcXG5cXHRcXHQtd2Via2l0LWRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fSBcXHJcXG59ICovXFxyXFxuaDYge1xcclxcblxcdGhlaWdodDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiBibGFjazsgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcblxcdHdpZHRoOiAyMTBtbTtcXHJcXG5cXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0LyogYmFja2dyb3VuZDogdXJsKCcvaW1nLzAwMDEuanBnJyk7ICovXFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcblxcdGNvbG9yOiAgd2hpdGU7XFxyXFxufVxcclxcbi8qINCa0J3QntCf0JrQmCAqL1xcclxcbi5idG4ge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDA4QjhCO1xcclxcblxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbjogNXB4IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAyMXB4OztcXHJcXG59XFxyXFxuLmJ0bjpsYXN0LWNoaWxke1xcclxcblxcdG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG4uYnRuOmhvdmVyLCAuaW5wdXQtYnRuOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOlxcdCMwMDhDMzM7XFxyXFxuXFx0Ym9yZGVyOiAjMGI2NjAzIHNvbGlkIDJweDtcXHJcXG59XFxyXFxuLyrQlNCY0JIgINGBINC/0YDQuNC80LXRh9Cw0L3QuNC10Lwg0Lgg0YHRgdGL0LvQutC+0Lkg0L3QsCDRgtCw0LHQu9C40YbRgyDQvtCx0YrQtdC80L7QsiovXFxyXFxuLyogLndvcmtzX3RhYmxlIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMjVweDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLypEaXYg0YEg0LLQtdGA0YXQvdC10Lkg0YLQsNCx0LvQuNGG0L7QuSAqL1xcclxcbi5tYWluLXRhYmxlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDtcXHJcXG59XFxyXFxuLyrQm9C10LPQtdC90LTRiyovXFxyXFxubGVnZW5ke1xcclxcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxyXFxufVxcclxcbi8q0KLQkNCR0JvQmNCm0KssINC+0LHRidC40LUg0YHQstC+0LnRgdGC0LLQsCovXFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcbnRkLCB0aCB7XFxyXFxuXFx0Ym9yZGVyOiAwLjI1bW0gc29saWQgIzAwMDtcXHJcXG59XFxyXFxudGJvZHkgdHI6bnRoLWNoaWxkKDJuLTEpIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZTNmOGVhO1xcclxcbn1cXHJcXG50cjpudGgtY2hpbGQoMm4pLCB0aGVhZCB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxuLyrQotCQ0JHQm9CY0KbQkCDQmNCd0KTQntCg0JzQkNCm0JjQmCovXFxyXFxuLmluZm9fdGFibGUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uaW5mb190YWJsZSB0ZCwgLmluZm9fdGFibGUgdGgge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkICMwMDhCOEI7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRkOm50aC1jaGlsZCgxKSwgIC5pbmZvX3RhYmxlIHRkOm50aC1jaGlsZCgyKXtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGQ6bGFzdC1jaGlsZHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIHRoOmZpcnN0LWNoaWxkIHtcXHJcXG5cXHR3aWR0aDogNDBtbTtcXHJcXG59XFxyXFxuLmluZm9fdGFibGUgdGg6bGFzdC1jaGlsZCB7XFxyXFxuXFx0d2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi5pbmZvX3RhYmxlIC5sYXN0X3RkIHtcXHJcXG5cXHRmb250LXdlaWdodDogODAwO1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG5cXHQvKiBwYWRkaW5nLWJvdHRvbTogMTBweDsgKi9cXHJcXG59XFxyXFxuLyrQmtCe0J3QotCV0JnQndCV0KDQqyDQlNCb0K8g0J7Qn9Cg0J7QodCd0KvQpSovXFxyXFxuLm9yZGVyX2NvbnRhaW5lciB7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG59XFxyXFxuLmE0X2RpdjpudGgtY2hpbGQoNG4tMil7XFxyXFxuXFx0YmFja2dyb3VuZDogI2QwZWNlYztcXHJcXG59XFxyXFxuLmE0X2RpdjpudGgtY2hpbGQoNG4pe1xcclxcblxcdGJhY2tncm91bmQ6ICNjMWU2YzE7XFxyXFxufVxcclxcbi5hNF9kaXYge1xcclxcblxcdGhlaWdodDogMjk2LjVtbTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5hNF9kaXZfZnJhbWUge1xcclxcblxcdGZvbnQtc2l6ZTogMTEuNXB0O1xcclxcblxcdGhlaWdodDogMjg3bW07XFxyXFxuXFx0d2lkdGg6IDE4NW1tO1xcclxcblxcdGxlZnQ6IDIwbW07XFxyXFxuXFx0Ym90dG9tOiA1bW07XFxyXFxuXFx0Ym9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFx0XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7IC8qZGVsKi9cXHJcXG59XFxyXFxuXFxyXFxuLyrQotCQ0JHQm9CY0KbQkC3QntCf0KDQntCh0J3Qq9CZKi9cXHJcXG4ud29ya3NfdGFibGUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ud29ya3NfdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG5cXHR3aWR0aDogMTUwbW07XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRib3JkZXItbGVmdDogbm9uZTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDFtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgybisxKSB7XFxyXFxuXFx0aGVpZ2h0OiA1LjVtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxyXFxuXFx0d2lkdGg6IDEwbW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci1yaWdodDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGhlaWdodDogOG1tO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG5cXHRib3JkZXItdG9wOiBub25lO1xcclxcbn1cXHJcXG4vKiAuc3F1YXJlIHtcXHJcXG5cXHR3aWR0aDogMTJweDtcXHJcXG5cXHRoZWlnaHQ6IDEycHg7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG5cXHRmbG9hdDogbGVmdDtcXHJcXG5cXHRtYXJnaW4tdG9wOiAycHg7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMXB4O1xcclxcbn1cXHJcXG4uc3F1YXJlOmxhc3QtY2hpbGQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuLnNxdWFyZV9jaGVja2VkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKtCf0YDQuNC80LXRh9Cw0L3QuNC1INC/0L7RgdC70LUg0L7Qv9GA0L7RgdC90L7Qs9C+Ki9cXHJcXG4ubm90ZXtcXHJcXG5cXHRwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi8q0KDQkNCc0JrQkC3QqNCY0KTQoCovXFxyXFxuLtGBaXBoZXJfdGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdGR7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjk1O1xcclxcbiAgICBmb250LXNpemU6IDEycHQ7O1xcclxcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg1KSB0ZDpudGgtY2hpbGQoMil7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG5cXHQvKiBmb250LXNpemU6IDE0cHg7XFx0ICovXFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOm50aC1jaGlsZChuKzcpe1xcclxcblxcdGJvcmRlcjogIzAwMCBzb2xpZCAwLjZtbTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDUpIHRkLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQobis1KXtcXHJcXG5cXHRib3JkZXItdG9wOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNSkgdGQsXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCg2KXtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAjMDAwIHNvbGlkIDAuNm1tO1xcdFxcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bGFzdC1jaGlsZCB0ZCxcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKG4rNCl7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHRcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKG4rNikgdGQ6bnRoLWNoaWxkKDEpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQobis2KSB0ZDpudGgtY2hpbGQoMiksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZChuKzYpIHRkOm50aC1jaGlsZCgzKSB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDJweDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDEpLCBcXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMiksIFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCgzKSwgXFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQ6bnRoLWNoaWxkKDQpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg2KSB7XFxyXFxuXFx0d2lkdGg6IDEwbW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkOm50aC1jaGlsZCg1KSB7XFxyXFxuXFx0d2lkdGg6IDE1bW07XFxyXFxufVxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNSkge1xcclxcblxcdHdpZHRoOiA3MG1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDYpLFxcclxcbi7RgWlwaGVyX3RhYmxlIHRyOm50aC1jaGlsZCg2KSB0ZDpudGgtY2hpbGQoNykge1xcclxcblxcdHdpZHRoOiAxNW1tO1xcclxcbn1cXHJcXG4u0YFpcGhlcl90YWJsZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDcpe1xcclxcblxcdGZvbnQtc2l6ZTogMjRwdDtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1jaGlsZCg1KXtcXHJcXG5cXHRmb250LXNpemU6IDExLjJwdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMC44NTtcXHJcXG59XFxyXFxuLtGBaXBoZXJfdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGR7XFxyXFxuXFx0aGVpZ2h0OiA1bW07XFxyXFxufVxcclxcbi5wX2Jlc3B7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdC8qbWFyZ2luLWJvdHRvbTogMTBweDsqL1xcclxcbn1cXHJcXG4ubG9nb19iZXNwe1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRtYXJnaW46IDBweCAwIC0xMnB4IDdweDtcXHRcXHJcXG59XFxyXFxuLyrQn9Cg0K/Qp9CV0Jwg0KTQntCg0JzQoyDQktCd0JXQodCV0J3QmNCvINCh0KfQldCi0KfQmNCa0J7QkiDQmCDQkNCS0KLQntCc0JDQotCe0JIg0J/QntCh0JvQlSDQldCVINCX0JDQn9Ce0JvQndCV0J3QmNCvKi9cXHJcXG4uaGlkZV9zdWJtaXQge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8q0J/QoNCv0KfQldCcINCk0J7QoNCc0KMg0JLQndCV0KHQldCd0JjQryDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JDQktCi0J7QnNCQ0KLQntCSINCf0J7QodCb0JUg0JXQlSDQl9CQ0J/QntCb0J3QldCd0JjQryovXFxyXFxuLyogLmhpZGVfY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9ICovXFxyXFxuXFxyXFxuLyrQn9Ce0JrQkNCX0KvQktCQ0JXQnCovXFxyXFxuLmluZm9fdGFibGVfd3JhcHBlciB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnNob3dfaW5mb190YWJsZV93cmFwcGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmZvb3Rlcl9zaG93IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHRcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCk0J7QoNCc0JAg0JLQktCe0JTQkCDQodCn0JXQotCn0JjQmtCe0JIg0Jgg0JLQq9Ca0JvQrtCn0JDQotCV0JvQldCZKi9cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxuXFx0Zm9udC1zaXplOiAyMXB4O1xcclxcblxcdC8qIG1pbi1oZWlnaHQ6IDk0OHB4OyAqL1xcclxcbn1cXHJcXG4uY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIgaW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDtcXHRcXHJcXG59XFxyXFxuLyrQvdGD0LzQtdGA0LDRhtC40Y8g0LvQuNGB0YLQvtCyKi9cXHJcXG4uaW5wdXRfcGFnZXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcblxcdGJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG59XFxyXFxuLyrQodCn0JXQotCn0JjQmtCYKi9cXHJcXG4uY291bnRlcnNfd3JhcHBlcntcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcblxcdGJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcdFxcclxcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgcCxcXHJcXG4uY291bnRlcnNfd3JhcHBlciBwe1xcclxcblxcdHBhZGRpbmc6IDEycHggMCAycHggMDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX3dyYXBwZXIgLmNvdW50ZXJfbm90ZSB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0Y29sb3I6ICMwYjY2MDM7XFxyXFxufVxcclxcbi5jb3VudGVyc193cmFwcGVyIC5jb3VudGVyX25vdGU6bGFzdC1jaGlsZCB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTFmLFxcclxcbi5jb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lciAjY291bnRlci0zZiB7XFxyXFxuXFx0d2lkdGg6IDkxJTtcXHJcXG59XFxyXFxuLmlucHV0X3BhZ2UgI2lucHV0X3BhZ2VcXHJcXG4vKiwgLmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyICNjb3VudGVyLTNmKi9cXHJcXG57XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyrQktCr0JrQm9Cu0KfQkNCi0JXQm9CYKi9cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8sXFxyXFxuLmJyZWFrZXJfZGl2IHtcXHJcXG5cXHRib3JkZXI6ICMwMDhCOEIgc29saWQgMnB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFx0XFx0XFxyXFxufVxcclxcbi5icmVha2VyX2Rpdl9yYWRpb3tcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvOm50aC1jaGlsZCgybi0xKXtcXHJcXG4gICAgYmFja2dyb3VuZDogIzVmZTY3YztcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvOm50aC1jaGlsZCgybil7XFxyXFxuXFx0YmFja2dyb3VuZDogIzRmZjlhYTtcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2Om50aC1jaGlsZCgybi0xKXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXY6bnRoLWNoaWxkKDJuKXtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbn1cXHJcXG4uYnJlYWtlcl9kaXZfcmFkaW8gLmJyZWFrZXJfcCxcXHJcXG4uYnJlYWtlcl9kaXYgLmJyZWFrZXJfcHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMTVweCAwIDJweCAwO1xcdFxcclxcblxcdG1hcmdpbi1sZWZ0OiAtNDBweDtcXHJcXG59XFxyXFxuLyogLmJyZWFrZXJfZGl2X3JhZGlvIC5yYWRpb19wLCAqL1xcclxcbi5icmVha2VyX2RpdiAuaW5wdXQtcHtcXHJcXG5cXHRwYWRkaW5nOiA4cHggMCAycHggMDtcXHRcXHJcXG59XFxyXFxuLmJyZWFrZXJfZGl2X3JhZGlvIGxhYmVse1xcclxcblxcdHBhZGRpbmc6IDNweCAwIDAgMTBweDtcXHJcXG59XFxyXFxuLyogLmJyZWFrZXJfZGl2IGxhYmVsOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufSAqL1xcclxcbi5icmVha2VyX2RpdiBpbnB1dDpsYXN0LWNoaWxke1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcbi8qIC7RgWlwaGVyX3RhYmxlIHRyOmxhc3QtY2hpbGQgdGR7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyrRhNC+0YDQvNCw0YIgKNCQNCkqL1xcclxcbi5mb3JtYXRfZGl2e1xcclxcblxcdGJvdHRvbTogMXB4O1xcclxcbiAgICByaWdodDogOTJweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCR0J7QmtCe0JLQkNCvINCn0JDQodCi0Kwg0KDQkNCc0JrQmCovXFxyXFxuIC5hc2lkZV9mcmFtZSB7XFxyXFxuXFx0Lyp0cmFuc2Zvcm06IHJvdGF0ZSgtOTAuMGRlZyk7ICovXFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGJvdHRvbTogLTAuNW1tO1xcclxcblxcdGxlZnQ6IC0xM21tO1xcclxcbn1cXHJcXG4gLmFzaWRlX2ZyYW1lIHNwYW57XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MC4wZGVnKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG5cXHQtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxyXFxuXFx0d3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXHJcXG4gfVxcclxcbi5hc2lkZV9mcmFtZSB0ZHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyOiAwLjZtbSBzb2xpZCBibGFjaztcXHJcXG5cXHRmb250LXNpemU6IDEycHQ7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLTkwLjBkZWcpO1xcclxcbi8qXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyovXFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMm4rMSkgdGR7XFxyXFxuXFx0aGVpZ2h0OiAyNS4zbW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0cjpudGgtY2hpbGQoMikgdGR7XFxyXFxuXFx0aGVpZ2h0OiAzNS42bW07XFxyXFxufVxcclxcbi5hc2lkZV9mcmFtZSB0ZDpmaXJzdC1jaGlsZHtcXHJcXG5cXHR3aWR0aDogNW1tO1xcclxcbn1cXHJcXG4uYXNpZGVfZnJhbWUgdGQ6bGFzdC1jaGlsZHtcXHJcXG5cXHR3aWR0aDogN21tO1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG59IFxcclxcblxcclxcbi8q0LLQstC+0LQg4oSWINGB0YLRgNCw0L3QuNGG0YsqL1xcclxcbiNpbnB1dF9wYWdle1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25hdHVyZXtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IC03cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3Mge1xcclxcblxcdG1heC13aWR0aDogNjVweDtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzM3B4O1xcclxcblxcdGJvdHRvbTogMTVweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5zaWduYXR1cmVfYm9zczIge1xcclxcblxcdG1heC13aWR0aDogNjVweDtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzM3B4O1xcclxcblxcdGJvdHRvbTogMzNweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGZhZWFmZDQ5NzNmODg5MjAwNzRlNDZlNTU1YjEyZmMudHRmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njb3BlT2ZXb3JrLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZnVuY3Rpb24gYWRkQXNpZGVUYWJsZSgpIHtcclxuXHJcblx0dmFyIGFzaWRlX2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdGFzaWRlX2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2FzaWRlX2ZyYW1lJyk7XHJcblxyXG5cdHZhciBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdGFzaWRlX2ZyYW1lLmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuXHR2YXIgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHR2YXIgcm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHR2YXIgcm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHJcblx0Ym9keS5hcHBlbmQocm93MSwgcm93Miwgcm93Myk7XHJcblxyXG5cdHZhciB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgc3Bhbl90ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG5cdHZhciB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR2YXIgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHNwYW5fdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuXHR2YXIgdGQyXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dmFyIHRkM18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHZhciBzcGFuX3RkM18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XHJcblx0dmFyIHRkM18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHQvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuXHRyb3cxLmFwcGVuZCh0ZDFfMSwgdGQxXzIpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMik7XHJcblx0cm93My5hcHBlbmQodGQzXzEsIHRkM18yKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGB0L/QsNC90YtcclxuXHR0ZDFfMS5hcHBlbmQoc3Bhbl90ZDFfMSk7XHJcblx0dGQyXzEuYXBwZW5kKHNwYW5fdGQyXzEpO1xyXG5cdHRkM18xLmFwcGVuZChzcGFuX3RkM18xKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHNwYW5fdGQxXzEuaW5uZXJIVE1MID0gJ9CY0L3Qsi4gTiDQv9C+0LTQuy4nO1xyXG5cdHRkMV8yLmlubmVySFRNTCA9ICcnO1xyXG5cdHNwYW5fdGQyXzEuaW5uZXJIVE1MID0gJ9Cf0L7QtNC/0LjRgdGMINC4INC00LDRgtCwJztcclxuXHR0ZDJfMi5pbm5lckhUTUwgPSAnJztcclxuXHRzcGFuX3RkM18xLmlubmVySFRNTCA9ICfQktC30LDQvNC10L0g0LjQvdCyLiBOJztcclxuXHR0ZDNfMi5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0cmV0dXJuIGFzaWRlX2ZyYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBc2lkZVRhYmxlO1xyXG4iLCJpbXBvcnQgeyBhZGRPcmRlclBhZ2VOdW1iZXIsICBhZGRPcmRlclNoZW1lUGFnZU51bWJlciwgYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyLCBhZGRTY29wZU9mV29ya3NQYWdlTnVtYmVyfSBmcm9tICcuL2FkZC1wYWdlLW51bWJlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRDaXBoZXJUYWJsZShwcm9qZWN0LCBzdWJzZWN0aW9uLCB0eXBlT2ZQYWdlLCBzZW0sIGluZGV4LCBtYWluT2JqLCBzaGVtZVBhZ2VzKSB7XHJcblxyXG5cdGNvbnNvbGUubG9nKG1haW5PYmopXHJcblx0Y29uc3Qg0YFpcGhlclRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG5cdNGBaXBoZXJUYWJsZS5jbGFzc0xpc3QuYWRkKCfRgWlwaGVyX3RhYmxlJyk7XHJcblxyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG5cdNGBaXBoZXJUYWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cdC8vINGB0YLRgNC+0LrQuFxyXG5cdFxyXG5cdGNvbnN0IHJvd18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd180ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd181ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd183ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd184ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd185ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdGNvbnN0IHJvd18xMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3dfMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cclxuXHQvLyDQvNC10YHRgtC+INCz0LTQtSDQsdGD0LTRg9GCINGB0YLRgNC+0LrQuFxyXG5cdHRib2R5LmFwcGVuZChyb3dfMSwgcm93XzIsIHJvd18zLCByb3dfNCwgcm93XzUsIHJvd182LCByb3dfNywgcm93XzgsIHJvd185LCByb3dfMTAsIHJvd18xMSk7XHJcblxyXG4vLyBjb25zdCByb3cxID0gdGJvZHlbMF07XHJcbi8qXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkgKz0gMSkge1xyXG5cdGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHR0Ym9keS5hcHBlbmQocm93KTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuXHRjb25zdCByb3cgPSB0Ym9keS5jaGlsZE5vZGVzWzBdO1xyXG5cdGNvbnNvbGUubG9nKHRib2R5LmNoaWxkTm9kZXMpXHJcblx0Y29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0cm93LmFwcGVuZCh0ZCk7XHJcbn1cclxuKi9cclxuLy8gY29uc29sZS5sb2cocm93MSlcclxuXHQvLyDRj9GH0LXQudC60LhcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDFfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfNy5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnNCcpO1xyXG5cdHRkMV83LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblxyXG5cdGNvbnN0IHRkMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMl82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDNfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDNfNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDNfNy5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnNCcpO1xyXG5cdHRkM183LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblxyXG5cdGNvbnN0IHRkNF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNF82ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDVfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQ2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ2XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDZfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDZfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkNl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkNl81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkNl81LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblx0Y29uc3QgdGQ2XzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ2XzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ2XzggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG5cdGNvbnN0IHRkN18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN18xLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3XzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDdfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDdfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHRjb25zdCB0ZDdfNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDdfNS5zZXRBdHRyaWJ1dGUoJ3Jvd3NwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkN182ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkN182LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ3XzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ3Xzcuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzInKTtcclxuXHJcblx0Y29uc3QgdGQ4XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ4XzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDhfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDhfMi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkOF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHRjb25zdCB0ZDlfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkOV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkOV8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQ5XzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ5XzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQ5XzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQ5XzUuc2V0QXR0cmlidXRlKCdyb3dzcGFuJywgJzMnKTtcclxuXHRjb25zdCB0ZDlfNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDlfNi5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMycpO1xyXG5cdHRkOV82LnNldEF0dHJpYnV0ZSgncm93c3BhbicsICczJyk7XHJcblxyXG5cdGNvbnN0IHRkMTBfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDEwXzEuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDEwXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxMF8yLnNldEF0dHJpYnV0ZSgnY29sc3BhbicsICcyJyk7XHJcblx0Y29uc3QgdGQxMF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGNvbnN0IHRkMTBfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Y29uc3QgdGQxMV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMTFfMS5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAnMicpO1xyXG5cdGNvbnN0IHRkMTFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDExXzIuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgJzInKTtcclxuXHRjb25zdCB0ZDExXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0Y29uc3QgdGQxMV80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuXHQvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuXHRyb3dfMS5hcHBlbmQodGQxXzEsIHRkMV8yLCB0ZDFfMywgdGQxXzQsIHRkMV81LCB0ZDFfNiwgdGQxXzcpO1xyXG5cdHJvd18yLmFwcGVuZCh0ZDJfMSwgdGQyXzIsIHRkMl8zLCB0ZDJfNCwgdGQyXzUsIHRkMl82KTtcclxuXHRyb3dfMy5hcHBlbmQodGQzXzEsIHRkM18yLCB0ZDNfMywgdGQzXzQsIHRkM181LCB0ZDNfNiwgdGQzXzcpO1xyXG5cdHJvd180LmFwcGVuZCh0ZDRfMSwgdGQ0XzIsIHRkNF8zLCB0ZDRfNCwgdGQ0XzUsIHRkNF82KTtcclxuXHRyb3dfNS5hcHBlbmQodGQ1XzEsIHRkNV8yLCB0ZDVfMywgdGQ1XzQsIHRkNV81LCB0ZDVfNik7XHJcblx0cm93XzYuYXBwZW5kKHRkNl8xLCB0ZDZfMiwgdGQ2XzMsIHRkNl80LCB0ZDZfNSwgdGQ2XzYsIHRkNl83LCB0ZDZfOCk7XHJcblx0cm93XzcuYXBwZW5kKHRkN18xLCB0ZDdfMiwgdGQ3XzMsIHRkN180LCB0ZDdfNSwgdGQ3XzYsIHRkN183KTtcclxuXHRyb3dfOC5hcHBlbmQodGQ4XzEsIHRkOF8yLCB0ZDhfMywgdGQ4XzQpO1xyXG5cdHJvd185LmFwcGVuZCh0ZDlfMSwgdGQ5XzIsIHRkOV8zLCB0ZDlfNCwgdGQ5XzUsIHRkOV82KTtcclxuXHRyb3dfMTAuYXBwZW5kKHRkMTBfMSwgdGQxMF8yLCB0ZDEwXzMsIHRkMTBfNCk7XHJcblx0cm93XzExLmFwcGVuZCh0ZDExXzEsIHRkMTFfMiwgdGQxMV8zLCB0ZDExXzQpO1xyXG5cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV83LmlubmVySFRNTCA9IGAke3Byb2plY3QuY2lwaGVyfS0ke3N1YnNlY3Rpb259LTcwLdCQ0KPQrWA7IC8vMS43XHJcblxyXG5cdHRkM183LmlubmVySFRNTCA9IHByb2plY3QubmFtZU9mUHJvamVjdDsgLy8zLjdcclxuXHJcblx0dGQ1XzEuaW5uZXJIVE1MID0gJ9CY0LfQvC4nOyAvLzUuMVxyXG5cdHRkNV8yLmlubmVySFRNTCA9ICfQmtC+0Lsu0KPRhy4nOyAvLzUuMlxyXG5cdHRkNV8zLmlubmVySFRNTCA9ICfQm9C40YHRgic7IC8vNS4zXHJcblx0dGQ1XzQuaW5uZXJIVE1MID0gJ+KEltC00L7Qui4nOyAvLzUuNFxyXG5cdHRkNV81LmlubmVySFRNTCA9ICfQn9C+0LTQv9C40YHRjCc7IC8vNS41XHJcblx0dGQ1XzYuaW5uZXJIVE1MID0gJ9CU0LDRgtCwJzsgLy81LjZcclxuXHJcblx0dGQ2XzEuaW5uZXJIVE1MID0gJ9Cj0YLQsi4nOyAvLzYuMVxyXG5cdHRkNl8yLmlubmVySFRNTCA9IHByb2plY3QubmFtZU9mQm9zcy5zcGxpdCgnICcpWzBdOyAvLzYuMlxyXG5cdHRkNl8zLmlubmVySFRNTCA9ICcnOyAvLzYuM1xyXG5cclxuXHRjb25zdCBkID0gbmV3IERhdGUoKTtcclxuXHQvLyBjb25zdCBkYXkgPSBkLmdldERhdGUoKTtcclxuXHRjb25zdCBtb250aCA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblx0Y29uc3QgeWVhciA9IGQuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG5cclxuXHRsZXQgdG9kYXk7XHJcblx0aWYgKG1vbnRoIDwgMTApIHtcclxuXHRcdHRvZGF5ID0gYDAke21vbnRofS4ke3llYXIuc3BsaXQoJycpWzJdfSR7eWVhci5zcGxpdCgnJylbM119YFxyXG5cdH0gZWxzZSB7XHJcblx0XHR0b2RheSA9IGAke21vbnRofS4ke3llYXIuc3BsaXQoJycpWzJdfSR7eWVhci5zcGxpdCgnJylbM119YFxyXG5cdH1cclxuXHJcblx0dGQ2XzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblx0dGQ5XzQuaW5uZXJIVE1MID0gdG9kYXk7XHJcblx0dGQxMF80LmlubmVySFRNTCA9IHRvZGF5O1xyXG5cdHRkMTFfNC5pbm5lckhUTUwgPSB0b2RheTtcclxuXHJcblx0XHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicgfHwgdHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnKSB7XHJcblx0XHR0ZDZfNS5pbm5lckhUTUwgPSAn0JfQsNC00LDQvdC40LUg0LfQsNCy0L7QtNGDINC90LAg0LjQt9Cz0L7RgtC+0LLQu9C10L3QuNC1INGI0LrQsNGE0L7QsiDQkNCh0JrQo9CtJzsgLy82LjVcclxuXHR9IGVsc2UgaWYgKHR5cGVPZlBhZ2UgPT09ICd3b3JrcycgfHwgdHlwZU9mUGFnZSA9PT0gJ3dvcmtzU2hlbWUnKSB7XHJcblx0XHR0ZDZfNS5pbm5lckhUTUwgPSAn0K3Qu9C10LrRgtGA0LjRh9C10YHQutC40LUg0YHQtdGC0LggMCw0LTEwINC60JIuINCQ0KHQmtCj0K0nOyAvLzYuNVxyXG5cdH1cclxuXHR0ZDZfNi5pbm5lckhUTUwgPSAn0KHRgtCw0LTQuNGPJzsgLy82LjZcclxuXHR0ZDZfNy5pbm5lckhUTUwgPSAn0JvQuNGB0YInOyAvLzYuN1xyXG5cdHRkNl84LmlubmVySFRNTCA9ICfQm9C40YHRgtC+0LInOyAvLzYuOFxyXG5cclxuXHR0ZDdfNS5pbm5lckhUTUwgPSBwcm9qZWN0LnN0YWdlT2ZQcm9qZWN0O1x0XHRcdC8vIDcuNVxyXG5cclxuXHRpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyJykge1xyXG5cdFx0dGQ3XzYudGV4dENvbnRlbnQgPSBhZGRPcmRlclBhZ2VOdW1iZXIoaW5kZXgsIHNlbSwgbWFpbk9iaik7XHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnb3JkZXJTaGVtZScpIHtcclxuXHRcdHRkN182LnRleHRDb250ZW50ID0gYWRkT3JkZXJTaGVtZVBhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXMpO1xyXG5cclxuXHRcdC8vINC40YHQv9GA0LDQstC40YLRjCDQvdC40LbQtSwg0YfRgtC+0LEg0L7RgtC70LjRh9Cw0LvQsNGB0Ywg0L3Rg9C80LXRgNCw0YbQuNGPXHJcblx0fSBlbHNlIGlmICh0eXBlT2ZQYWdlID09PSAnd29ya3MnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIoaW5kZXgsIHNoZW1lUGFnZXMpO1xyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzU2hlbWUnKSB7XHJcblx0XHR0ZDdfNi50ZXh0Q29udGVudCA9IGFkZFNoZW1lU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCk7XHJcblx0fVxyXG5cdFxyXG5cdHRkOV8xLnRleHRDb250ZW50ID0gJ9CdLiDQutC+0L3RgtGALic7IC8vOS4xXHJcblx0dGQ5XzIudGV4dENvbnRlbnQgPSAn0KHQstC40YDRgdC60LjQuSc7XHJcblxyXG5cdGlmIChwcm9qZWN0LmlzQm9zc1NpZ25hdHVyZSl7XHJcblx0XHRjb25zdCBib3NzU2lnbmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGNvbnN0IGJvc3NTaWduYXR1cmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKTtcclxuXHRcdGJvc3NTaWduYXR1cmUuY2xhc3NMaXN0LmFkZCgnc2lnbmF0dXJlX2Jvc3MnKTtcclxuXHRcdGJvc3NTaWduYXR1cmUyLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZV9ib3NzMicpO1xyXG5cdFx0Ym9zc1NpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdGJvc3NTaWduYXR1cmUyLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1nL3N2aXJza2kzLnBuZycpO1xyXG5cdFx0dGQ5XzMuYXBwZW5kKGJvc3NTaWduYXR1cmUpO1xyXG5cdFx0dGQxMF8zLmFwcGVuZChib3NzU2lnbmF0dXJlMik7XHJcblx0fVxyXG5cclxuXHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuXHJcblx0aWYgKHR5cGVPZlBhZ2UgPT09ICdvcmRlcicpIHtcclxuXHRcdHRkOV81LnRleHRDb250ZW50ID0gc2VtLmZ1bGxEZWNyaXB0aW9uOyAvLzkuNVxyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ29yZGVyU2hlbWUnIHx8IHR5cGVPZlBhZ2UgPT09ICd3b3Jrc1NoZW1lJykge1xyXG5cdFx0aWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMScpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINC+0LTQvdC+0YTQsNC30L3Ri9C8INCy0LLQvtC00L7QvC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0LTQstGD0LzRjyDQvtC00L3QvtGE0LDQt9C90YvQvNC4INCy0LLQvtC00LDQvNC4LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PT0gJzEnKSB7XHJcblx0XHRcdHRkOV81LnRleHRDb250ZW50ID0gJ9Cp0LjRgtC+0Log0YPRh9C10YLQsCDRgSDRgtGA0LXRhdGE0LDQt9C90YvQvCDQstCy0L7QtNC+0LwuINCh0YXQtdC80LAg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutCw0Y8g0L/RgNC40L3RhtC40L/QuNCw0LvRjNC90LDRjyc7IC8vOS41XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSAnMicpIHtcclxuXHRcdFx0dGQ5XzUudGV4dENvbnRlbnQgPSAn0KnQuNGC0L7QuiDRg9GH0LXRgtCwINGBINC00LLRg9C80Y8g0YLRgNC10YXRhNCw0LfQvdGL0LzQuCDQstCy0L7QtNCw0LzQuC4g0KHRhdC10LzQsCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LDRjyDQv9GA0LjQvdGG0LjQv9C40LDQu9GM0L3QsNGPJzsgLy85LjVcclxuXHRcdH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzMnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT09ICcyJykge1xyXG5cdFx0XHR0ZDlfNS50ZXh0Q29udGVudCA9ICfQqdC40YLQvtC6INGD0YfQtdGC0LAg0YEg0YLRgNC10YXRhNCw0LfQvdGL0Lwg0Lgg0L7QtNC90L7RhNCw0LfQvdGL0Lwg0LLQstC+0LTQvtC8LiDQodGF0LXQvNCwINGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0YDQuNC90YbQuNC/0LjQsNC70YzQvdCw0Y8nOyAvLzkuNVxyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAodHlwZU9mUGFnZSA9PT0gJ3dvcmtzJykge1xyXG5cdFx0dGQ5XzUudGV4dENvbnRlbnQgPSBgJHtzZW0uZGVjcmlwdGlvbkZvcldvcmtzfS4g0JLQtdC00L7QvNC+0YHRgtGMINC+0LHRitC10LzQvtCyINGB0YLRgNC+0LjRgtC10LvRjNC90YvRhSDQuCDQvNC+0L3RgtCw0LbQvdGL0YUg0YDQsNCx0L7RgiDQv9C+INGD0YHRgtCw0L3QvtCy0LrQtWA7IC8vOS41XHJcblx0fSBcclxuXHJcblxyXG5cdGNvbnN0IHBfYmVzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJQXCIpO1xyXG5cdHBfYmVzcC5jbGFzc0xpc3QuYWRkKCdwX2Jlc3AnKTtcclxuXHRwX2Jlc3Auc2V0QXR0cmlidXRlKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG5cdHRkOV82LmFwcGVuZChwX2Jlc3ApO1xyXG5cdHBfYmVzcC5pbm5lckhUTUwgPSAn0KDQo9CfJyArICc8QlI+JyArICdcItCR0LXQu9GN0L3QtdGA0LPQvtGB0LXRgtGM0L/RgNC+0LXQutGCXCInO1xyXG5cdGNvbnN0IGxvZ29fYmVzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblx0bG9nb19iZXNwLmNsYXNzTGlzdC5hZGQoJ2xvZ29fYmVzcCcpO1xyXG5cdGxvZ29fYmVzcC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9sb2dvX2Jlc3AuanBnJyk7XHJcblx0dGQ5XzYuYXBwZW5kKGxvZ29fYmVzcCk7XHJcblx0LypcdHRkOV82LmlubmVySFRNTCA9ICfQoNCj0J8gXCLQkdC10LvRjdC90LXRgNCz0L7RgdC10YLRjNC/0YDQvtC10LrRglwiJzsgLy85LjYqL1xyXG5cclxuXHR0ZDEwXzEuaW5uZXJIVE1MID0gJ9Cf0YDQvtCy0LXRgNC40LsnOyAvLzEwLjFcclxuXHR0ZDEwXzIuaW5uZXJIVE1MID0gJ9Ch0LLQuNGA0YHQutC40LknOyAvLzEwLjJcclxuXHJcblx0dGQxMV8xLmlubmVySFRNTCA9ICfQoNCw0LfRgNCw0LEuJzsgLy8xMS4xXHJcblx0dGQxMV8yLmlubmVySFRNTCA9IHByb2plY3QubmFtZU9mRGV2ZWxvcGVyLnNwbGl0KCcgJylbMF07IC8vMTEuMlxyXG5cclxuXHRpZiAocHJvamVjdC5pc0RldmVsb3BlclNpZ25hdHVyZSl7XHJcblx0XHRjb25zdCBkZXZlbG9wZXJTaWduYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG5cdFx0ZGV2ZWxvcGVyU2lnbmF0dXJlLmNsYXNzTGlzdC5hZGQoJ3NpZ25hdHVyZScpO1xyXG5cdFx0aWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCa0YDQsNC/0LjQstC40L3QsCDQoi4g0KFcIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcva3JhcGl2aW5hLnBuZycpO1xyXG5cdFx0fSBlbHNlIGlmIChwcm9qZWN0Lm5hbWVPZkRldmVsb3BlciA9PT0gXCLQodCy0LjRgNGB0LrQuNC5INCQLiDQlS5cIikge1xyXG5cdFx0XHRkZXZlbG9wZXJTaWduYXR1cmUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWcvc3ZpcnNraTMucG5nJyk7XHJcblx0XHR9IGVsc2UgaWYgKHByb2plY3QubmFtZU9mRGV2ZWxvcGVyID09PSBcItCY0LTQtdC70YzRh9C40Log0JMuINCgLlwiKSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9pZGVsY2hpay5wbmcnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRldmVsb3BlclNpZ25hdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltZy9zdmlyc2tpMy5wbmcnKTtcclxuXHRcdH1cclxuXHRcdHRkMTFfMy5hcHBlbmQoZGV2ZWxvcGVyU2lnbmF0dXJlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiDRgWlwaGVyVGFibGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZENpcGhlclRhYmxlO1xyXG4iLCJmdW5jdGlvbiBhZGRGb3JtYXQoZm9ybWF0KSB7XHJcblxyXG5cdGNvbnN0IGZvcm1hdF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdGZvcm1hdF9kaXYuY2xhc3NMaXN0LmFkZCgnZm9ybWF0X2RpdicpO1xyXG5cclxuXHRjb25zdCBmb3JtYXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcblx0Zm9ybWF0UGFyYS5jbGFzc0xpc3QuYWRkKCdmb3JtYXQnKTtcclxuXHRcclxuXHRmb3JtYXRQYXJhLnRleHRDb250ZW50ID0gYNCk0L7RgNC80LDRgiAke2Zvcm1hdH1gO1xyXG5cdGZvcm1hdF9kaXYuYXBwZW5kKGZvcm1hdFBhcmEpO1xyXG5cclxuXHRyZXR1cm4gZm9ybWF0X2RpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRm9ybWF0O1xyXG4iLCJmdW5jdGlvbiBhZGRPcmRlclBhZ2VOdW1iZXIoaW5kZXgsIHNlbSwgYXJyT2ZTZW1zKSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3JkZXJQYWdlSW5wdXQnKTtcclxuXHJcblx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRyZXR1cm4gK2lucHV0X3BhZ2UgKyAxO1xyXG5cdH0gZWxzZSBpZiAoYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdIFxyXG5cdFx0JiYgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0cmV0dXJuICtwcmV2aW91c1BhZ2UgKyAxO1xyXG5cdH0gZWxzZSBpZiAoYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdIFxyXG5cdFx0fHwgYXJyT2ZTZW1zW2luZGV4IC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdICE9PSBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdKSB7XHJcblx0XHRjb25zdCBwcmV2aW91c1BhZ2UgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI29yZGVyX3NoZWV0ID4gZGl2Om50aC1jaGlsZCgke2luZGV4ICogMn0pID4gZGl2ID4gdGFibGUu0YFpcGhlcl90YWJsZSA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKDcpID4gdGQ6bnRoLWNoaWxkKDYpYCkudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0cmV0dXJuIHByZXZpb3VzUGFnZSArIDI7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRPcmRlclNoZW1lUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlcykge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck9yZGVyUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHNoZW1lUGFnZXMpO1xyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIHNoZW1lUGFnZXNbaW5kZXhdLCBpbmRleCk7XHJcblxyXG5cdHJldHVybiAraW5wdXRfcGFnZSArIHNoZW1lUGFnZXNbaW5kZXhdICsgaW5kZXg7XHJcbn1cclxuLy9cclxuZnVuY3Rpb24gYWRkU2hlbWVTY29wZU9mV29ya3NQYWdlTnVtYmVyKGluZGV4KSB7XHJcblx0XHJcblx0Y29uc3QgaW5wdXRfcGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyV29ya3NQYWdlSW5wdXQnKTtcclxuXHJcblx0Y29uc29sZS5sb2coaW5wdXRfcGFnZSwgaW5kZXgpO1xyXG5cclxuXHRyZXR1cm4gK2lucHV0X3BhZ2UgKyBpbmRleDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2NvcGVPZldvcmtzUGFnZU51bWJlcihpbmRleCwgc2hlbWVQYWdlc1N1bSkge1xyXG5cdFxyXG5cdGNvbnN0IGlucHV0X3BhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcldvcmtzUGFnZUlucHV0Jyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGlucHV0X3BhZ2UsIGluZGV4LCBzaGVtZVBhZ2VzU3VtKTtcclxuXHJcblx0cmV0dXJuICtpbnB1dF9wYWdlICsgaW5kZXggK3NoZW1lUGFnZXNTdW0ubGVuZ3RoO1xyXG59XHJcbi8vXHJcbmV4cG9ydCB7IGFkZE9yZGVyUGFnZU51bWJlciwgIGFkZE9yZGVyU2hlbWVQYWdlTnVtYmVyLCBhZGRTaGVtZVNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXIsIGFkZFNjb3BlT2ZXb3Jrc1BhZ2VOdW1iZXJ9IDtcclxuIiwiZnVuY3Rpb24gbWFpbk9iamVjdENvbGxlY3Qoc3RyKSB7XHJcblx0bGV0IGFycmF5T2ZVc2VySW5wdXQgPSBzdHIuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcblx0bGV0IGxlZ2VuZEFycmF5ID0gYXJyYXlPZlVzZXJJbnB1dFswXS5zcGxpdCgnLCcpO1xyXG5cclxuXHRmdW5jdGlvbiBTRU0oYXJyKSB7XHJcblxyXG5cdFx0dGhpcy5jb3VudE9mU0VNID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCfQmtC+0LvQuNGH0LXRgdGC0LLQvicpXTtcclxuXHRcdHRoaXMuYnJlYWtlcjFWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMScpXS5zcGxpdCgnICcpWzBdO1xyXG5cdFx0dGhpcy5icmVha2VyMlZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIyJyldLnNwbGl0KCcgJylbMF0gfHwgbnVsbDtcclxuXHRcdHRoaXMuU0VNVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0KnQo9CtJyldO1xyXG5cdFx0dGhpcy5jb3VudGVyQ291bnRJblNFTSA9ICt0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVszXTtcclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMVxyXG5cdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gJ9CSJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gJ9CS0JInO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV07XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5waWxsYXJUeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QntCf0J7QoNCrJyldIHx8ICfQodCSLTk1JztcclxuXHJcblx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDM7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vdXRCcmVha2VyMSA9IGAke3RoaXMucGhhc2UxVmFsdWV9IC0gJHt0aGlzLmJyZWFrZXIxVmFsdWV9YDtcclxuXHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIgP1xyXG5cdFx0XHR0aGlzLm91dEJyZWFrZXIyID0gYCR7dGhpcy5waGFzZTJWYWx1ZX0gLSAke3RoaXMuYnJlYWtlcjJWYWx1ZX1gIDpcclxuXHRcdFx0dGhpcy5vdXRCcmVha2VyMiA9IG51bGw7XHJcblxyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQsicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEgJiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9C6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LDRjyDQu9C40L3QuNGPOiDQutCw0LHQtdC70YzQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiAodGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9C6JykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQutCyJykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQstC6JykpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3QsNGPINC4INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQutC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdGL0LUuJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAnMdGE0LonKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6IDPRhCAtINCy0L7Qt9C00YPRiNC90LDRjywgMdGEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJzPRhNC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQutCw0LHQtdC70YzQvdCw0Y8sIDHRhCAtINCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQstCyJykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQstC+0LfQtNGD0YjQvdGL0LUuJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsZXJ0KGAke3RoaXMuaW5wdXRGcm9tU2VtfSDQvdC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCICR7dGhpcy5TRU1UeXBlfSwg0L/QtdGA0LXQv9GA0L7QstC10YDRjNGC0LUg0LLQstC+0LTQuNC80YvQtSDQtNCw0L3QvdGL0LVgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ9GB0LItOTUnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCSLTk1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ9GB0LItMTEwJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQki0xMTAnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzInKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y8nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzQnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTInO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JA7ICR7dGhpcy5icmVha2VyMlZhbHVlfSDQkCkuICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259LiDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCYDtcclxuXHRcdFx0dGhpcy5kZWNyaXB0aW9uRm9yV29ya3MgPSBgJHt0aGlzLlNFTVR5cGV9LiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufWA7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheU9mVXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAoYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpLmxlbmd0aCA9PT0gNikge1xyXG5cdFx0XHRyZXN1bHRBcnJheS5wdXNoKG5ldyBTRU0oYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpKSk7XHJcblx0XHR9IGVsc2UgaWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPiA0KSB7XHJcblx0XHRcdGFsZXJ0KGDQtNC70LjQvdCwINC80LDRgdGB0LjQstCwICR7YXJyYXlPZlVzZXJJbnB1dFtpXX0gPSAke2FycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGh9INCy0LzQtdGB0YLQviA2IFxcbiDQtNCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyINC90LUg0LHRg9C00LXRgiDQvtCx0YDQsNCx0L7RgtCw0L1gKTtcclxuXHRcdCAgfVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhyZXN1bHRBcnJheSk7XHJcblxyXG5cdHJlc3VsdEFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGlmIChhLlNFTVR5cGUgPiBiLlNFTVR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbk9iamVjdENvbGxlY3Q7XHJcbiIsImZ1bmN0aW9uIGFkZFN1bVNlbShhcnJPZlNlbSkge1xyXG5cdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9fdGFibGUnKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnVEJPRFknKVswXTtcclxuXHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0Ysg0Lgg0LTQvtCx0LDQstC70Y/QtdC8INC10LVcdFx0XHJcblx0Y29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuXHRjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cdHRib2R5LmFwcGVuZChyb3cxLCByb3cyKTtcclxuXHQvLyDQodC+0LfQtNCw0LXQvCDRj9GH0LXQudC60Lgg0LIg0LLRi9GI0LXRgdC+0LfQtNCw0L3QvdC+0Lkg0YHRgtGA0L7QutC1XHJcblx0Ly8g0Lgg0LTQvtCx0LDQstC70Y/QtdC8INGC0YVcclxuXHRjb25zdCB0ZDFfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDFfMS5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblx0Y29uc3QgdGQxXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQxXzIuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMV8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMV8zLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHJcblx0Y29uc3QgdGQyXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0dGQyXzEuY2xhc3NMaXN0LmFkZCgnbGFzdF90ZCcpO1xyXG5cdGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdHRkMl8yLmNsYXNzTGlzdC5hZGQoJ2xhc3RfdGQnKTtcclxuXHRjb25zdCB0ZDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHR0ZDJfMy5jbGFzc0xpc3QuYWRkKCdsYXN0X3RkJyk7XHJcblxyXG5cdHJvdzEuYXBwZW5kKHRkMV8xLCB0ZDFfMiwgdGQxXzMpO1xyXG5cdHJvdzIuYXBwZW5kKHRkMl8xLCB0ZDJfMiwgdGQyXzMpO1xyXG5cclxuXHRsZXQgc3VtT2ZDb3VudCA9IDA7XHJcblx0bGV0IHN1bU9mU2VtID0gMDtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJPZlNlbS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0c3VtT2ZTZW0gKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTTtcclxuXHRcdHN1bU9mQ291bnQgKz0gYXJyT2ZTZW1baV0uY291bnRPZlNFTSAqIGFyck9mU2VtW2ldLmNvdW50ZXJDb3VudEluU0VNO1xyXG5cdH1cclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMV8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGB0YfQtdGC0YfQuNC60L7QsjonO1xyXG5cdHRkMV8zLmlubmVySFRNTCA9IHN1bU9mQ291bnQ7XHJcblxyXG5cdHRkMl8yLmlubmVySFRNTCA9ICfQktGB0LXQs9C+INGJ0LjRgtC60L7QsjonO1xyXG5cdHRkMl8zLmlubmVySFRNTCA9IHN1bU9mU2VtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTdW1TZW07XHJcbiIsImxldCBjcmVhdGVSb3cgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgbWVhc3VyZSwgdmFsdWUpIHtcclxuLy8gbGV0IGNyZWF0ZVJvdyA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBtZWFzdXJlLCB2YWx1ZSwgZm9yTG9uZ0Rlc2NyaXB0aW9uKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuICAgIHRkMS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGQyLmlubmVySFRNTCA9IG1lYXN1cmU7XHJcbiAgICB0ZDMudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICByb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cclxuICAgIC8vIGlmIChmb3JMb25nRGVzY3JpcHRpb24pIHtcclxuICAgIC8vICAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuICAgIC8vICAgICBjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcbiAgICAvLyAgICAgdGQxXzIudGV4dENvbnRlbnQgPSBmb3JMb25nRGVzY3JpcHRpb247XHJcbiAgICAvLyAgICAgcm93Mi5hcHBlbmQodGQxXzIsIHRkMl8yLCB0ZDNfMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHJvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93O1xyXG4iLCJsZXQgd29ya3NEYXRhQ29sbGVjdCA9IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgLypcclxuICAgIC8vINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDRgtCw0LHQu9C40YbRiyDQstC10LTQvtC80L7RgdGC0LXQuSDRgNCw0LHQvtGCXHJcbiAgICBsZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMTtcclxuICAgIGxldCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgbGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxuICAgIGxldCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbiAgICBsZXQgcHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudDtcclxuXHJcbiAgICBsZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMTtcclxuICAgIGxldCByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgbGV0IHJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxuICAgIGxldCByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbiAgICBsZXQgcHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudDtcclxuXHJcbiAgICBsZXQgZmluZGluZ19hbl9leGlzdGluZ19jYWJsZTsgLy8g0L7RgtGI0YPRgNGE0L7QstC60LAg0YHRg9GJINC60LDQsdC10LvRj1xyXG5cclxuICAgIGxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgbGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoO1xyXG4gICAgbGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQ7XHJcbiAgICBsZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTTtcclxuICAgIGxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaDtcclxuICAgIGxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kO1xyXG5cclxuICAgIGxldCB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucztcclxuICAgIGxldCB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGU7IC8vINCyINGC0YDRg9Cx0LVcclxuICAgIGxldCBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50O1xyXG5cclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80OyAvLyDQvNGD0YTRgtCwINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCA0Li4uXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQ7XHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMjtcclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMjsgLy8g0LzRg9GE0YLQsCDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCAyLi4uXHJcblxyXG4gICAgbGV0IHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1A7IC8vINC30LDQttC40Lwg0JfQntCf0LMtMlxyXG5cclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nOyAvLyDQv9C+0LvQvtGB0LAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xyXG4gICAgbGV0IHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDA7IC8vINC60L7QttGD0YUg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcIDE3MDBcclxuICAgIGxldCBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwOyAvLyDQutC+0LbRg9GFINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAyMzAwXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZzsgLy8g0L/QvtC70L7RgdCwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCx0L7Qu9GC0YMg0LrQvtGA0L/Rg9GB0LAg0KnQo9CtXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCAvLyDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPXHJcbiAgICBsZXQgcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSAvLyDRhdC+0LzRg9GCINCl0JotMVxyXG5cclxuICAgIGxldCBkaWdnaW5nX3RyZW5jaGVzOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICBsZXQgZ3JvdW5kX3VuZGVybGF5OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgIGxldCBiYWNrZmlsbDsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcclxuICAgIGxldCBleGNhdmF0aW9uOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xyXG4gICAgbGV0IHNvaWxfbGV2ZWxpbmc7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG4gICAgbGV0IHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZTsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXHJcbiAgICBsZXQgcHVyY2hhc2VfY29uY3JldGU7IC8vINCx0LXRgtC+0L1cclxuICAgIGxldCBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZTsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbiAgICBsZXQgZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbjsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcbiAgICBsZXQgZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb247IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG4gICAgbGV0IGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40LlcclxuICAgIGxldCBkaXNtYW50bGluZ19jbGFtcF9aT1A7IC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxyXG4gICAgbGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDQuLlxyXG4gICAgbGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMjsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDIuLlxyXG4qL1xyXG4gICAgZnVuY3Rpb24gU0VNV09SS1Moc2VtKSB7XHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GEXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5jb3VudGVyQ291bnRJblNFTSAhPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDIuMztcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQkicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA2Ljk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAxNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKyB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpICogMS4wMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4ICjQtdGB0YLRjCAx0YUx0YQg0LjQu9C4IDLRhTHRhCkg0L3Qviwg0LXRgdC70Lgg0Y3RgtC+IDMtMi0yLCDRgtC+INGC0L7Qu9GM0LrQviAx0YTQmiDQuNC70Lgg0JrQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJ9Ca0JonICYmXHJcbiAgICAgICAgICAgICAgICBzZW0uaW5wdXRGcm9tU2VtICE9PSAnMdGE0JonKSkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gNy41O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDIuMztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAyMi41O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gNi45O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAxMC4yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMTU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA0LjY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAodGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxICtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoICsgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSAqIDEuMDI7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUsINC4INC10YHRgtGMINCaXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9CaJykpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSA9IDAuNTY7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwLjI4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSDQuCDQtdGB0YLRjCAz0YTQmiAuLi5cclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJ1xyXG4gICAgICAgICAgICAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQmicpICYmICFzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCcx0YTQmicpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMS43O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhNCaIC4uLlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJlxyXG4gICAgICAgICAgICBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScgJiZcclxuICAgICAgICAgICAgc2VtLmlucHV0RnJvbVNlbS5pbmNsdWRlcygn0JonKSAmJiAhc2VtLmlucHV0RnJvbVNlbS5pbmNsdWRlcygnMdGE0JonKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMIDHRhNCaXHJcbiAgICAgICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJylcclxuICAgICAgICAgICAgJiYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQmicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNCaJykpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAzLjQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAxLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUsINC4INC10YHRgtGMIDHRhNCaXHJcbiAgICAgICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJylcclxuICAgICAgICAgICAgJiYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQmicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNCaJykpKVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSA2Ljg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDMuNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1XHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMS41O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0KHQki0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSA2LjQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNS4xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDM4LjQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMzAuNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQkicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA3LjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDI1LjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0JonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA0LjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE5LjI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTUuMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCSJykpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNCaJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gNjtcclxuICAgICAgICAgICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9Ch0JItMTEwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjUuNjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyMC40O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDM7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDEyLjg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTAuMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX3dpcmVfd2l0aF8yX3BlcmNlbnQgPSAodGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyArXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSkgKiAxLjAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uINC40LvQuCDQvdCwINGB0YLQvtC50LrQtSDQuCDQtdGB0YLRjCAz0YRcclxuICAgICAgICBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnICYmXHJcbiAgICAgICAgICAgIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJyAmJlxyXG4gICAgICAgICAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0JonKSkgfHxcclxuICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgIXNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSDQuCDQtdGB0YLRjCAz0YRcclxuICAgICAgICAvLyDQutCw0Log0L/QtdGA0LLRi9C1IDUg0YHRgtGA0L7QulxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScpIHtcclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDHRhNCaIC4uLiDQuNC70Lgg0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgMdGEXHJcbiAgICAgICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJlxyXG4gICAgICAgICAgICBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicgJiZcclxuICAgICAgICAgICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNCaJykpIHx8XHJcbiAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicpXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSDQuCAo0Y3RgtC+INGH0LjRgdGC0L4gMdGEINC40LvQuCDRjdGC0L4gMy0yLTIg0YEgMdGE0JIpXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmXHJcbiAgICAgICAgICAgICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScpIHx8XHJcbiAgICAgICAgICAgICAgICAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpKSlcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQkicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmXHJcbiAgICAgICAgICAgICAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0JTQm9CvINCS0KHQldClINCp0KPQrVxyXG4gICAgICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxyXG5cclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDEwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDEyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gNjtcclxuICAgICAgICB9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicgfHxcclxuICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUgKNC60LDQuiDRgdGC0YDQvtC60LggMTktMjEpXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyA9IDE7XHJcbiAgICAgICAgICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTI0MDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LfQsNC30LXQvNC70Y/RjtGJ0LXQvNGDINCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1LCDQuCDQtdGB0YLRjCDQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJlxyXG4gICAgICAgICAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LrQvtC20YPRhdCwINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0xNzAwKVxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtVxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nID0gMTtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwID0gMjtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxID0gMztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhjYXZhdGlvbiA9IDAuMTM7IC8vINGA0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDXHJcbiAgICAgICAgICAgIHRoaXMuc29pbF9sZXZlbGluZyA9IDAuMTM7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDAuMDc7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX2NvbmNyZXRlID0gMC4wNTsgLy8g0LHQtdGC0L7QvVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlID0gNC4wNjsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWdnaW5nX3RyZW5jaGVzID0gMC41NDsgLy8g0YDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRfdW5kZXJsYXkgPSAwLjE4OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2ZpbGwgPSAwLjM2OyAvLyDQt9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWdnaW5nX3RyZW5jaGVzID0gMC43MjsgLy8g0YDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRfdW5kZXJsYXkgPSAwLjI0OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2ZpbGwgPSAwLjQ4OyAvLyDQt9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvFx0XHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4Y2F2YXRpb24gPSAwOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xyXG4gICAgICAgICAgICB0aGlzLnNvaWxfbGV2ZWxpbmcgPSAwOyAvLyDRgNCw0LfRgNCw0LLQvdC40LLQsNC90LjQtSDQs9GA0YPQvdGC0LBcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9jcnVzaGVkX3N0b25lX3NhbmRfZ3JhdmVsX21peHR1cmUgPSAwOyAvLyDRidC10LHQtdC90L7Rh9C90L4t0L/QtdGB0YfQsNC90L4t0LPRgNCw0LLQuNC50L3QsNGPINGB0LzQtdGB0YxcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9jb25jcmV0ZSA9IDA7IC8vINCx0LXRgtC+0L1cclxuICAgICAgICAgICAgdGhpcy5pbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSA9IDA7IC8vINGD0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0LIg0LHQtdGC0L7QvdC1XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpZ2dpbmdfdHJlbmNoZXMgPSAwOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kX3VuZGVybGF5ID0gMDsgLy8g0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQt9C10LzQu9C4XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2ZpbGwgPSAwOyAvLyDQt9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvCAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQmlxyXG4gICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNCaJykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gMTY7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC60LDQsdC10LvRj1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gODtcdC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC60LDQsdC10LvRj1x0XHRcdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiA9IDE1Ljg0OyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDRg9Cz0L7Qu9C60LBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAxMS4xNzsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0YPQs9C+0LvQutCwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24gPSAyLjAxOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40LlcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gODsgLy8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDY7XHQvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcdFx0XHRcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0JonIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gMjtcdC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlx0XHRcdFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSA0O1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0LXRgdGC0YwgM9GE0JpcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0LXRgdGC0YwgMdGE0JpcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzInICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicpXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2cobmV3IFNFTVdPUktTKGlucHV0KSk7XHJcbiAgICByZXR1cm4gbmV3IFNFTVdPUktTKGlucHV0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd29ya3NEYXRhQ29sbGVjdDsiLCJpbXBvcnQgd29ya3NEYXRhQ29sbGVjdCBmcm9tICcuL3dvcmtzLWRhdGEnO1xyXG5pbXBvcnQgY3JlYXRlUm93IGZyb20gJy4vY3JlYXRlLXJvdyc7XHJcbi8qXHJcbi8vINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDRgtCw0LHQu9C40YbRiyDQstC10LTQvtC80L7RgdGC0LXQuSDRgNCw0LHQvtGCXHJcbmxldCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxO1xyXG5sZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTTtcclxubGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxubGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQ7IC8vINC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LVcclxubGV0IHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQ7XHJcblxyXG5sZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMTtcclxubGV0IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS007XHJcbmxldCByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaDsgLy8gINCyINGC0YDQsNC90YjQtdC1XHJcbmxldCByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbmxldCBwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50O1xyXG5cclxubGV0IGZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGU7IC8vINC+0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRiSDQutCw0LHQtdC70Y9cclxuXHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2g7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTTtcclxubGV0IHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZDtcclxuXHJcbmxldCB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucztcclxubGV0IHdpcmVfcm91dGluZ19pbl90aGVfcGlwZTsgLy8g0LIg0YLRgNGD0LHQtVxyXG5sZXQgcHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudDtcclxuXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80OyAvLyDQvNGD0YTRgtCwINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCA0Li4uXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNDtcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzI7XHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMjsgLy8g0LzRg9GE0YLQsCDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCAyLi4uXHJcblxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUDsgLy8g0LfQsNC20LjQvCDQl9Ce0J/Qsy0yXHJcblxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZzsgLy8g0L/QvtC70L7RgdCwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YtcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDA7IC8vINC60L7QttGD0YUg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcIDE3MDBcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDA7IC8vINC60L7QttGD0YUg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcIDIzMDBcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmc7IC8vINC/0L7Qu9C+0YHQsCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQsdC+0LvRgtGDINC60L7RgNC/0YPRgdCwINCp0KPQrVxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCAvLyDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxIC8vINGF0L7QvNGD0YIg0KXQmi0xXHJcblxyXG5sZXQgZGlnZ2luZ190cmVuY2hlczsgLy8g0YDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuFxyXG5sZXQgZ3JvdW5kX3VuZGVybGF5OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxubGV0IGJhY2tmaWxsOyAvLyDQt9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvFxyXG5sZXQgZXhjYXZhdGlvbjsgLy8g0YDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YNcclxubGV0IHNvaWxfbGV2ZWxpbmc7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG5sZXQgcHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlOyAvLyDRidC10LHQtdC90L7Rh9C90L4t0L/QtdGB0YfQsNC90L4t0LPRgNCw0LLQuNC50L3QsNGPINGB0LzQtdGB0YxcclxubGV0IHB1cmNoYXNlX2NvbmNyZXRlOyAvLyDQsdC10YLQvtC9XHJcbmxldCBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZTsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbmxldCBkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQutCw0LHQtdC70Y9cclxubGV0IGRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDRg9Cz0L7Qu9C60LBcclxubGV0IGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40LlcclxubGV0IGRpc21hbnRsaW5nX2NsYW1wX1pPUDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHJcbmxldCBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQ7IC8vINC00LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCA0Li5cclxubGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMjsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDIuLlxyXG4qL1xyXG4vLyDRgdC+0LfQtNCw0L3QuNC1INGC0LDQsdC70LjRhtGLINCy0LXQtNC+0LzQvtGB0YLQuCDRgNCw0LHQvtGCXHJcbmxldCB3b3JrVGFibGUgPSBmdW5jdGlvbiAoc2VtKSB7XHJcblxyXG5cclxuXHJcbiAgICBsZXQgd29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRBQkxFXCIpO1xyXG4gICAgd29ya1RhYmxlLmNsYXNzTGlzdC5hZGQoJ3dvcmtzX3RhYmxlJyk7XHJcblxyXG4gICAgbGV0IGJvZHlPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUQk9EWVwiKTtcclxuICAgIHdvcmtUYWJsZS5hcHBlbmQoYm9keU9mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQm9CV0JPQldCd0JTQkCDQotCQ0JHQm9CY0KbQq1xyXG4gICAgLy8g0YHRgtGA0L7QutC4XHJcbiAgICBsZXQgcm93MU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cxT2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQxXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDFfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzFPZldvcmtUYWJsZS5hcHBlbmQodGQxXzFPZldvcmtUYWJsZSwgdGQxXzJPZldvcmtUYWJsZSwgdGQxXzNPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDFfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgNCw0LHQvtGCJztcclxuICAgIHRkMV8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0JXQtC7QuNC30LwuJztcclxuICAgIHRkMV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0JrQvtC70LjRh9C10YHRgtCy0L4nO1xyXG5cclxuICAgIGxldCBjb2xsZWN0ZWREYXRhRnJvbVNlbSA9IHdvcmtzRGF0YUNvbGxlY3Qoc2VtKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb2xsZWN0ZWREYXRhRnJvbVNlbSk7XHJcblxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1ICjRgSDQutGA0LXQv9C70LXQvdC40LXQvCDRhdC+0LzRg9GC0LDQvNC4INCl0JotMSknLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LEw9MjMwMCknLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2gpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50KSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCy0YHQtdCz0L4g0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsTD0yMzAwKScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0LLRgdC10LPQviDRgSDQvdCw0LTQsdCw0LLQutC+0LkgMiUnLCAn0LwnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Ce0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjycsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0xNzAwKScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0xNzAwKScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INC/0L4g0LrQvtC90YHRgtGA0YPQutGG0LjRj9C8JywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0LIg0YLRgNGD0LHQtScsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX3dpcmVfd2l0aF8yX3BlcmNlbnQpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0JLRgtGC0L8gKDE2LTI1KS0xJywgJ9C8JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80KSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80KSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMikge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0JLRgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMikpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTInLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZykge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC/0L7Qu9C+0YHRiyA00YUxMiwgTD0yNDAwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INC30LDQt9C10LzQu9GP0Y7RidC10LzRgyDQstGL0L/Rg9GB0LrRgyDQvtC/0L7RgNGLJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDApIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQutC+0LbRg9GF0LAg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDApIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQutC+0LbRg9GF0LAg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTIzMDApJywgJ9GI0YIuJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcpIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjIwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQsdC+0LvRgtGDINC30LDQt9C10LzQu9C10L3QuNGPINC60L7RgNC/0YPRgdCwINCp0KPQrScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YHRgtCw0LvRjCDQutGA0YPQs9C70LDRjyBkMTAg0LzQvCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQv9C+0LvQvtGB0YsgNNGFMTIg0Log0LfQsNC30LXQvNC70Y/RjtGJ0LXQvNGDINC60L7QvdGC0YPRgNGDINC+0L/QvtGA0YsnLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INGF0L7QvNGD0YLQvtCyINCl0JotMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5leGNhdmF0aW9uKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5leGNhdmF0aW9uKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uc29pbF9sZXZlbGluZykge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQoNCw0LfRgNCw0LLQvdC40LLQsNC90LjQtSDQstGL0YLQtdGB0L3QtdC90L3QvtCz0L4g0LPRgNGD0L3RgtCwINCy0YDRg9GH0L3Rg9GOJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5zb2lsX2xldmVsaW5nKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDRidC10LHQtdC90L7Rh9C90L4t0L/QtdGB0YfQsNC90L4t0LPRgNCw0LLQuNC50L3QvtC5INGB0LzQtdGB0LggKNCp0KPQrSknLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLnB1cmNoYXNlX2NvbmNyZXRlKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQsdC10YLQvtC90LAg0LrQu9Cw0YHRgdCwINChMTYvMjAgRjEwMCcsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0ucHVyY2hhc2VfY29uY3JldGUpKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5pbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQo9GB0YLQsNC90L7QstC60LAg0LzQtdGC0LDQu9C70LjRh9C10YHQutC40YUg0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDRgtC10LvQtSDQsdC10YLQvtC90LAnLCAn0LrQsycsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlnZ2luZ190cmVuY2hlcykge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQoNGL0YLRjNC1INGC0YDQsNC90YjQtdC4INCyINGA0YPRh9C90YPRjicsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlnZ2luZ190cmVuY2hlcykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmdyb3VuZF91bmRlcmxheSkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQo9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC/0YDQvtGB0LXRj9C90L3QvtC5INC30LXQvNC70LgnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmdyb3VuZF91bmRlcmxheSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmJhY2tmaWxsKSB7XHJcbiAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CX0LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8JywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5iYWNrZmlsbCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24pIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0YEg0L7Qv9C+0YDRiyDQvNCw0YHRgdC+0LkgMSDQvCDQtNC+IDIt0YUg0LrQsycsICfQvCcsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24pKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbikge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INGD0LPQvtC70LrQsCDRgSDQvtC/0L7RgNGLJywgJ9C60LMnLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbikpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX2NsYW1wX1pPUCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTInLCAn0YjRgi4nLFxyXG4gICAgICAgICAgICBjb2xsZWN0ZWREYXRhRnJvbVNlbS5kaXNtYW50bGluZ19jbGFtcF9aT1ApKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24pIHtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0YEg0L7Qv9C+0YDRiycsICfQutCzJyxcclxuICAgICAgICAgICAgY29sbGVjdGVkRGF0YUZyb21TZW0uZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24pKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INC80YPRhNGC0Ysg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMikge1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INC80YPRhNGC0Ysg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgICAgIGNvbGxlY3RlZERhdGFGcm9tU2VtLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMikpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uY291bnRlckNvdW50SW5TRU0gIT09IDEpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNCaJykge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAyLjM7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDI7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQkicpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAyMi41O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDYuOTtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNjtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAxMC4yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDE1O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNDtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSA2Ljg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9IChyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxICtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gK1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKyByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSAqIDEuMDI7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1ICjRgSDQutGA0LXQv9C70LXQvdC40LXQvCDRhdC+0LzRg9GC0LDQvNC4INCl0JotMSlcclxuICAgICAgICAgICAgbGV0IHJvdzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cyT2ZXb3JrVGFibGUpO1xyXG4gICAgICAgICAgICAvLyDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgbGV0IHRkMl8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDJfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQyXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgICAgIHJvdzJPZldvcmtUYWJsZS5hcHBlbmQodGQyXzFPZldvcmtUYWJsZSwgdGQyXzJPZldvcmtUYWJsZSwgdGQyXzNPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgdGQyXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKSc7XHJcbiAgICAgICAgICAgIHRkMl8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDJfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTIzMDApXHJcbiAgICAgICAgICAgIGxldCByb3czT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGxldCByb3czXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3czT2ZXb3JrVGFibGUsIHJvdzNfMU9mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgbGV0IHRkM18xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDNfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQzXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkM18xXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkM18yXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkM18zXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgICAgIHJvdzNPZldvcmtUYWJsZS5hcHBlbmQodGQzXzFPZldvcmtUYWJsZSwgdGQzXzJPZldvcmtUYWJsZSwgdGQzXzNPZldvcmtUYWJsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgcm93M18xT2ZXb3JrVGFibGUuYXBwZW5kKHRkM18xXzFPZldvcmtUYWJsZSwgdGQzXzJfMU9mV29ya1RhYmxlLCB0ZDNfM18xT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgdGQzXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCc7XHJcbiAgICAgICAgICAgIHRkM18yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDNfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTTtcclxuICAgICAgICAgICAgdGQzXzFfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ0w9MjMwMCknO1xyXG4gICAgICAgICAgICB0ZDNfMl8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgdGQzXzNfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LVcclxuICAgICAgICAgICAgbGV0IHJvdzRPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3c0T2ZXb3JrVGFibGUpO1xyXG4gICAgICAgICAgICAvLyDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgbGV0IHRkNF8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDRfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQ0XzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgICAgIHJvdzRPZldvcmtUYWJsZS5hcHBlbmQodGQ0XzFPZldvcmtUYWJsZSwgdGQ0XzJPZldvcmtUYWJsZSwgdGQ0XzNPZldvcmtUYWJsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgICAgICAgICB0ZDRfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JztcclxuICAgICAgICAgICAgdGQ0XzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICAgICAgICAgIHRkNF8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSByb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbiAgICAgICAgICAgIGxldCByb3c1T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93NU9mV29ya1RhYmxlKTtcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDVfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQ1XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkNV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3c1T2ZXb3JrVGFibGUuYXBwZW5kKHRkNV8xT2ZXb3JrVGFibGUsIHRkNV8yT2ZXb3JrVGFibGUsIHRkNV8zT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgdGQ1XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuICAgICAgICAgICAgdGQ1XzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICAgICAgICAgIHRkNV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCy0YHQtdCz0L4g0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlXHJcbiAgICAgICAgICAgIGxldCByb3c2T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93Nk9mV29ya1RhYmxlKTtcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDZfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQ2XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkNl8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3c2T2ZXb3JrVGFibGUuYXBwZW5kKHRkNl8xT2ZXb3JrVGFibGUsIHRkNl8yT2ZXb3JrVGFibGUsIHRkNl8zT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgdGQ2XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQstGB0LXQs9C+INGBINC90LDQtNCx0LDQstC60L7QuSAyJSc7XHJcbiAgICAgICAgICAgIHRkNl8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDZfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4ICjQtdGB0YLRjCAx0YUx0YQg0LjQu9C4IDLRhTHRhCkg0L3Qviwg0LXRgdC70Lgg0Y3RgtC+IDMtMi0yLCDRgtC+INGC0L7Qu9GM0LrQviAx0YTQmiDQuNC70Lgg0JrQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJ9Ca0JonICYmXHJcbiAgICAgICAgICAgICAgICBzZW0uaW5wdXRGcm9tU2VtICE9PSAnMdGE0JonKSkpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJykgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSkgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJykgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0JonKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAyLjM7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDI7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gNi45O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA2O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMTU7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gNC42O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gKHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgK1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArXHJcbiAgICAgICAgICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCArIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpICogMS4wMjtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKVxyXG4gICAgICAgICAgICBsZXQgcm93N09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzdPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgICAgICAgICBsZXQgdGQ3XzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkN18yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDdfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgICAgICAgICAgcm93N09mV29ya1RhYmxlLmFwcGVuZCh0ZDdfMU9mV29ya1RhYmxlLCB0ZDdfMk9mV29ya1RhYmxlLCB0ZDdfM09mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIHRkN18xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1ICjRgSDQutGA0LXQv9C70LXQvdC40LXQvCDRhdC+0LzRg9GC0LDQvNC4INCl0JotMSknO1xyXG4gICAgICAgICAgICB0ZDdfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C8JztcclxuICAgICAgICAgICAgdGQ3XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzE7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0yMzAwKVxyXG4gICAgICAgICAgICBsZXQgcm93OE9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgICAgICBsZXQgcm93OF8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93OE9mV29ya1RhYmxlLCByb3c4XzFPZldvcmtUYWJsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDhfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQ4XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkOF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDhfMV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDhfMl8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDhfM18xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3c4T2ZXb3JrVGFibGUuYXBwZW5kKHRkOF8xT2ZXb3JrVGFibGUsIHRkOF8yT2ZXb3JrVGFibGUsIHRkOF8zT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJvdzhfMU9mV29ya1RhYmxlLmFwcGVuZCh0ZDhfMV8xT2ZXb3JrVGFibGUsIHRkOF8yXzFPZldvcmtUYWJsZSwgdGQ4XzNfMU9mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIHRkOF8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwnO1xyXG4gICAgICAgICAgICB0ZDhfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C8JztcclxuICAgICAgICAgICAgdGQ4XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS007XHJcbiAgICAgICAgICAgIHRkOF8xXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICdMPTIzMDApJztcclxuICAgICAgICAgICAgdGQ4XzJfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIHRkOF8zXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1XHJcbiAgICAgICAgICAgIGxldCByb3c5T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93OU9mV29ya1RhYmxlKTtcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDlfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQ5XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkOV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3c5T2ZXb3JrVGFibGUuYXBwZW5kKHRkOV8xT2ZXb3JrVGFibGUsIHRkOV8yT2ZXb3JrVGFibGUsIHRkOV8zT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgdGQ5XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtSc7XHJcbiAgICAgICAgICAgIHRkOV8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDlfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2g7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtVxyXG4gICAgICAgICAgICBsZXQgcm93MTBPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cxME9mV29ya1RhYmxlKTtcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDEwXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTBfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxMF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3cxME9mV29ya1RhYmxlLmFwcGVuZCh0ZDEwXzFPZldvcmtUYWJsZSwgdGQxMF8yT2ZXb3JrVGFibGUsIHRkMTBfM09mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIHRkMTBfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnO1xyXG4gICAgICAgICAgICB0ZDEwXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICAgICAgICAgIHRkMTBfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZDtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQstGB0LXQs9C+INGBINC90LDQtNCx0LDQstC60L7QuSAyJVxyXG4gICAgICAgICAgICBsZXQgcm93MTFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cxMU9mV29ya1RhYmxlKTtcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDExXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTFfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxMV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3cxMU9mV29ya1RhYmxlLmFwcGVuZCh0ZDExXzFPZldvcmtUYWJsZSwgdGQxMV8yT2ZXb3JrVGFibGUsIHRkMTFfM09mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIHRkMTFfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCy0YHQtdCz0L4g0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJztcclxuICAgICAgICAgICAgdGQxMV8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDExXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQudG9GaXhlZCgyKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUsINC4INC10YHRgtGMINCaXHJcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQmicpKSB7XHJcbiAgXHJcbiAgICAgICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSB7XHJcbiAgICAgICAgICAgICAgZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSA9IDAuNTY7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwLjI4O1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLy8g0J7RgtGI0YPRgNGE0L7QstC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPXHJcbiAgICAgICAgICBsZXQgcm93MTJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MTJPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgICAvLyDRj9GH0LXQudC60LhcclxuICAgICAgICAgIGxldCB0ZDEyXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgIGxldCB0ZDEyXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgIGxldCB0ZDEyXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgcm93MTJPZldvcmtUYWJsZS5hcHBlbmQodGQxMl8xT2ZXb3JrVGFibGUsIHRkMTJfMk9mV29ya1RhYmxlLCB0ZDEyXzNPZldvcmtUYWJsZSk7XHJcbiAgXHJcbiAgICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICB0ZDEyXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQntGC0YjRg9GA0YTQvtCy0LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8nO1xyXG4gICAgICAgICAgdGQxMl8yT2ZXb3JrVGFibGUuaW5uZXJIVE1MID0gJ9C8JyArICc8c3VwPjM8L3N1cD4nO1xyXG4gICAgICAgICAgdGQxMl8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBmaW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDPRhNCaIC4uLlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnXHJcbiAgICAgICAgICAgICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9CaJykgJiYgIXNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJzHRhNCaJykpIHtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDMuNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAxLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApXHJcbiAgICAgICAgICAgIGxldCByb3cxM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgICAgICBsZXQgcm93MTNfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzEzT2ZXb3JrVGFibGUsIHJvdzEzXzFPZldvcmtUYWJsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDEzXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTNfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxM18zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDEzXzFfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxM18yXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTNfM18xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3cxM09mV29ya1RhYmxlLmFwcGVuZCh0ZDEzXzFPZldvcmtUYWJsZSwgdGQxM18yT2ZXb3JrVGFibGUsIHRkMTNfM09mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICByb3cxM18xT2ZXb3JrVGFibGUuYXBwZW5kKHRkMTNfMV8xT2ZXb3JrVGFibGUsIHRkMTNfMl8xT2ZXb3JrVGFibGUsIHRkMTNfM18xT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgdGQxM18xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCc7XHJcbiAgICAgICAgICAgIHRkMTNfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C8JztcclxuICAgICAgICAgICAgdGQxM18zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNO1xyXG4gICAgICAgICAgICB0ZDEzXzFfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJyjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApJztcclxuICAgICAgICAgICAgdGQxM18yXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB0ZDEzXzNfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmXHJcbiAgICAgICAgICAgIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJyAmJlxyXG4gICAgICAgICAgICBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQmicpICYmICFzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCcx0YTQmicpXHJcbiAgICAgICAgKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgICAgIHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtVxyXG4gICAgICAgICAgICBsZXQgcm93MTRPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICAgICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cxNE9mV29ya1RhYmxlKTtcclxuICAgICAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIGxldCB0ZDE0XzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTRfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxNF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgICAgICByb3cxNE9mV29ya1RhYmxlLmFwcGVuZCh0ZDE0XzFPZldvcmtUYWJsZSwgdGQxNF8yT2ZXb3JrVGFibGUsIHRkMTRfM09mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgICAgIHRkMTRfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JztcclxuICAgICAgICAgICAgdGQxNF8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDE0XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LVcclxuICAgICAgICAgICAgbGV0IHJvdzE1T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MTVPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgICAgICAgICBsZXQgdGQxNV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDE1XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTVfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgICAgICAgICAgcm93MTVPZldvcmtUYWJsZS5hcHBlbmQodGQxNV8xT2ZXb3JrVGFibGUsIHRkMTVfMk9mV29ya1RhYmxlLCB0ZDE1XzNPZldvcmtUYWJsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgICAgICAgICB0ZDE1XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuICAgICAgICAgICAgdGQxNV8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDE1XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQ7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1LCDQuCDQtdGB0YLRjCAx0YTQmlxyXG4gICAgICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpXHJcbiAgICAgICAgICAgICYmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbS5pbmNsdWRlcygn0JonKSkgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicpKSlcclxuICAgICAgICApIHtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDEuNztcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vINCf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMClcclxuICAgICAgICAgICAgbGV0IHJvdzE2T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGxldCByb3cxNl8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICAgICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MTZPZldvcmtUYWJsZSwgcm93MTZfMU9mV29ya1RhYmxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyDRj9GH0LXQudC60LhcclxuICAgICAgICAgICAgbGV0IHRkMTZfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxNl8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDE2XzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgbGV0IHRkMTZfMV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgICAgIGxldCB0ZDE2XzJfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGQxNl8zXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgICAgIHJvdzE2T2ZXb3JrVGFibGUuYXBwZW5kKHRkMTZfMU9mV29ya1RhYmxlLCB0ZDE2XzJPZldvcmtUYWJsZSwgdGQxNl8zT2ZXb3JrVGFibGUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJvdzE2XzFPZldvcmtUYWJsZS5hcHBlbmQodGQxNl8xXzFPZldvcmtUYWJsZSwgdGQxNl8yXzFPZldvcmtUYWJsZSwgdGQxNl8zXzFPZldvcmtUYWJsZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgICAgICAgICB0ZDE2XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcJztcclxuICAgICAgICAgICAgdGQxNl8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgICAgICB0ZDE2XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS007XHJcbiAgICAgICAgICAgIHRkMTZfMV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAnKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknO1xyXG4gICAgICAgICAgICB0ZDE2XzJfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIHRkMTZfM18xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUsINC4INC10YHRgtGMIDHRhNCaXHJcbiAgICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJylcclxuICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9CaJykpIHx8XHJcbiAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicpKSlcclxuICAgICApIHtcclxuIFxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpIHtcclxuICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDMuNDtcclxuICAgICAgICB9XHJcbiBcclxuICAgICAgICAvLyDQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtVxyXG4gICAgICAgIGxldCByb3cxN09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MTdPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgbGV0IHRkMTdfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgIGxldCB0ZDE3XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICBsZXQgdGQxN18zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgcm93MTdPZldvcmtUYWJsZS5hcHBlbmQodGQxN18xT2ZXb3JrVGFibGUsIHRkMTdfMk9mV29ya1RhYmxlLCB0ZDE3XzNPZldvcmtUYWJsZSk7XHJcbiBcclxuICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgdGQxN18xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnO1xyXG4gICAgICAgIHRkMTdfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C8JztcclxuICAgICAgICB0ZDE3XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoO1xyXG4gXHJcbiAgICAgICAgLy8g0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtVxyXG4gICAgICAgIGxldCByb3cxOE9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MThPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgbGV0IHRkMThfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgIGxldCB0ZDE4XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICBsZXQgdGQxOF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgcm93MThPZldvcmtUYWJsZS5hcHBlbmQodGQxOF8xT2ZXb3JrVGFibGUsIHRkMThfMk9mV29ya1RhYmxlLCB0ZDE4XzNPZldvcmtUYWJsZSk7XHJcbiBcclxuICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgdGQxOF8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtSc7XHJcbiAgICAgICAgdGQxOF8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LwnO1xyXG4gICAgICAgIHRkMThfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZDtcclxuICAgIH1cclxuIFxyXG4gICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1XHJcbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpIHtcclxuIFxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpKSB7XHJcbiAgICAgICAgICAgIHdpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMS41O1xyXG4gICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDYuNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDUuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICAgICAgICAgIHdpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gOTtcclxuICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0KHQki0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzOC40O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMzAuNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICAgICAgICAgIHdpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gNy41O1xyXG4gICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjUuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykgfHxcclxuICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpKSB7XHJcbiAgICAgICAgICAgIHdpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gNC41O1xyXG4gICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfQodCSLTExMCcpIHtcclxuICAgICAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE5LjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxNS4zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCSJykpIHx8XHJcbiAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0JonKSkge1xyXG4gICAgICAgICAgICB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDY7XHJcbiAgICAgICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9Ch0JItMTEwJykge1xyXG4gICAgICAgICAgICAgICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjUuNjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIwLjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDM7XHJcbiAgICAgICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9Ch0JItMTEwJykge1xyXG4gICAgICAgICAgICAgICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuODtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDEwLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9ICh3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyArXHJcbiAgICAgICAgICAgIHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSkgKiAxLjAyO1xyXG4gXHJcbiAgICAgICAgLy8g0J/RgNC+0LrQu9Cw0LTQutCwINC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0L/QviDQutC+0L3RgdGC0YDRg9C60YbQuNGP0LxcclxuICAgICAgICBsZXQgcm93MTlPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzE5T2ZXb3JrVGFibGUpO1xyXG4gICAgICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgICAgIGxldCB0ZDE5XzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICBsZXQgdGQxOV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgbGV0IHRkMTlfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgIHJvdzE5T2ZXb3JrVGFibGUuYXBwZW5kKHRkMTlfMU9mV29ya1RhYmxlLCB0ZDE5XzJPZldvcmtUYWJsZSwgdGQxOV8zT2ZXb3JrVGFibGUpO1xyXG4gXHJcbiAgICAgICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgICAgIHRkMTlfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INC/0L4g0LrQvtC90YHRgtGA0YPQutGG0LjRj9C8JztcclxuICAgICAgICB0ZDE5XzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICAgICAgdGQxOV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucztcclxuIFxyXG4gICAgICAgIC8vINCf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INCyINGC0YDRg9Cx0LVcclxuICAgICAgICBsZXQgcm93MjBPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgICAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzIwT2ZXb3JrVGFibGUpO1xyXG4gICAgICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgICAgIGxldCB0ZDIwXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICBsZXQgdGQyMF8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgbGV0IHRkMjBfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgICAgIHJvdzIwT2ZXb3JrVGFibGUuYXBwZW5kKHRkMjBfMU9mV29ya1RhYmxlLCB0ZDIwXzJPZldvcmtUYWJsZSwgdGQyMF8zT2ZXb3JrVGFibGUpO1xyXG4gXHJcbiAgICAgICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgICAgIHRkMjBfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INCyINGC0YDRg9Cx0LUnO1xyXG4gICAgICAgIHRkMjBfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C8JztcclxuICAgICAgICB0ZDIwXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHdpcmVfcm91dGluZ19pbl90aGVfcGlwZTtcclxuIFxyXG4gICAgICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INGBINC90LDQtNCx0LDQstC60L7QuSAyJVxyXG4gICAgICAgIGxldCByb3cyMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MjFPZldvcmtUYWJsZSk7XHJcbiAgICAgICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgbGV0IHRkMjFfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgICAgIGxldCB0ZDIxXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgICAgICBsZXQgdGQyMV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAgICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICAgICAgcm93MjFPZldvcmtUYWJsZS5hcHBlbmQodGQyMV8xT2ZXb3JrVGFibGUsIHRkMjFfMk9mV29ya1RhYmxlLCB0ZDIxXzNPZldvcmtUYWJsZSk7XHJcbiBcclxuICAgICAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICAgICAgdGQyMV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJztcclxuICAgICAgICB0ZDIxXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICAgICAgdGQyMV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMik7XHJcbiAgICB9XHJcbiBcclxuXHJcbn0vL1xyXG4vL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uINC40LvQuCDQvdCwINGB0YLQvtC50LrQtSDQuCDQtdGB0YLRjCAz0YRcclxuaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJlxyXG4gICAgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnICYmXHJcbiAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0JonKSkgfHxcclxuICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScpXHJcbikge1xyXG5cclxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJykge1xyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgPSAzO1xyXG4gICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyB8fFxyXG4gICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiAhc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSkge1xyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgPSAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINCy0L3Rg9GC0YDQtdC90L3QtdC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0JLRgtGC0L8gKDE2LTI1KS0xXHJcbiAgICBsZXQgcm93MjJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MjJPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDIyXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDIyXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDIyXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93MjJPZldvcmtUYWJsZS5hcHBlbmQodGQyMl8xT2ZXb3JrVGFibGUsIHRkMjJfMk9mV29ya1RhYmxlLCB0ZDIyXzNPZldvcmtUYWJsZSk7XHJcblxyXG4gICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgdGQyMl8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCS0YLRgtC/ICgxNi0yNSktMSc7XHJcbiAgICB0ZDIyXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfRiNGCLic7XHJcbiAgICB0ZDIyXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQ7XHJcbn1cclxuXHJcbi8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxyXG4vLyDQutCw0Log0L/QtdGA0LLRi9C1IDUg0YHRgtGA0L7QulxyXG5pZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XHJcblxyXG4gICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpIHtcclxuICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDE7XHJcbiAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykge1xyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMVxyXG4gICAgbGV0IHJvdzIzT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzIzT2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQyM18xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyM18yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyM18zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzIzT2ZXb3JrVGFibGUuYXBwZW5kKHRkMjNfMU9mV29ya1RhYmxlLCB0ZDIzXzJPZldvcmtUYWJsZSwgdGQyM18zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMjNfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMSc7XHJcbiAgICB0ZDIzXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfRiNGCLic7XHJcbiAgICB0ZDIzXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80O1xyXG59XHJcblxyXG4vL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUg0Lgg0LXRgdGC0YwgMdGE0JogLi4uINC40LvQuCDQvdCwINGB0YLQvtC50LrQtSDQuCDQtdGB0YLRjCAx0YRcclxuaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJlxyXG4gICAgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzInICYmXHJcbiAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0JonKSkgfHxcclxuICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicpXHJcbikge1xyXG5cclxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzNdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJykge1xyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAzO1xyXG4gICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHx8XHJcbiAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJykpIHtcclxuICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCS0YLRgtC/ICgxNi0yNSktMVxyXG4gICAgbGV0IHJvdzI0T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzI0T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQyNF8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyNF8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyNF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzI0T2ZXb3JrVGFibGUuYXBwZW5kKHRkMjRfMU9mV29ya1RhYmxlLCB0ZDI0XzJPZldvcmtUYWJsZSwgdGQyNF8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMjRfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDLQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnO1xyXG4gICAgdGQyNF8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQyNF8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yO1xyXG59XHJcblxyXG4vL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSDQuCAo0Y3RgtC+INGH0LjRgdGC0L4gMdGEINC40LvQuCDRjdGC0L4gMy0yLTIg0YEgMdGE0JIpXHJcbmlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJlxyXG4gICAgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJykgfHxcclxuICAgICAgICAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpKSlcclxuKSB7XHJcblxyXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQktCSJykge1xyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMztcclxuICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiZcclxuICAgICAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonKSkge1xyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMVxyXG4gICAgbGV0IHJvdzI1T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzI1T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQyNV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyNV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyNV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzI1T2ZXb3JrVGFibGUuYXBwZW5kKHRkMjVfMU9mV29ya1RhYmxlLCB0ZDI1XzJPZldvcmtUYWJsZSwgdGQyNV8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMjVfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMSc7XHJcbiAgICB0ZDI1XzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfRiNGCLic7XHJcbiAgICB0ZDI1XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yO1xyXG59XHJcblxyXG4vL9CU0JvQryDQktCh0JXQpSDQqdCj0K1cclxuLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHJcblxyXG5pZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSkge1xyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDI7XHJcbn0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTA7XHJcbn0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInKSB7XHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTI7XHJcbn0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicpIHtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA2O1xyXG59IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQmicgfHxcclxuICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JInKSkpIHtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA4O1xyXG59IGVsc2Uge1xyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDQ7XHJcbn1cclxuXHJcbmxldCByb3cyNk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5ib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzI2T2ZXb3JrVGFibGUpO1xyXG4vLyDRj9GH0LXQudC60LhcclxubGV0IHRkMjZfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5sZXQgdGQyNl8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbmxldCB0ZDI2XzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbnJvdzI2T2ZXb3JrVGFibGUuYXBwZW5kKHRkMjZfMU9mV29ya1RhYmxlLCB0ZDI2XzJPZldvcmtUYWJsZSwgdGQyNl8zT2ZXb3JrVGFibGUpO1xyXG5cclxuLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG50ZDI2XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTInO1xyXG50ZDI2XzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfRiNGCLic7XHJcbnRkMjZfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUDtcclxuXHJcbi8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSAo0LrQsNC6INGB0YLRgNC+0LrQuCAxOS0yMSlcclxuaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKSB7XHJcblxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyA9IDE7XHJcblxyXG4gICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xyXG4gICAgbGV0IHJvdzI3T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzI3T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQyN18xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyN18yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQyN18zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzI3T2ZXb3JrVGFibGUuYXBwZW5kKHRkMjdfMU9mV29ya1RhYmxlLCB0ZDI3XzJPZldvcmtUYWJsZSwgdGQyN18zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMjdfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTI0MDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LfQsNC30LXQvNC70Y/RjtGJ0LXQvNGDINCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YsnO1xyXG4gICAgdGQyN18yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQyN18zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nO1xyXG59XHJcblxyXG4vL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMINCaXHJcbmlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJlxyXG4gICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0JonKVxyXG4pIHtcclxuXHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwID0gMTtcclxuXHJcbiAgICAvLyDQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMClcclxuICAgIGxldCByb3cyOE9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cyOE9mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkMjhfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMjhfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMjhfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3cyOE9mV29ya1RhYmxlLmFwcGVuZCh0ZDI4XzFPZldvcmtUYWJsZSwgdGQyOF8yT2ZXb3JrVGFibGUsIHRkMjhfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDI4XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknO1xyXG4gICAgdGQyOF8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQyOF8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwO1xyXG59XHJcblxyXG4vL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtVxyXG5pZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcclxuXHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwID0gMTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgPSAxO1xyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCA9IDI7XHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxID0gMztcclxuXHJcbiAgICBleGNhdmF0aW9uID0gMC4xMzsgLy8g0YDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YNcclxuICAgIHNvaWxfbGV2ZWxpbmcgPSAwLjEzOyAvLyDRgNCw0LfRgNCw0LLQvdC40LLQsNC90LjQtSDQs9GA0YPQvdGC0LBcclxuICAgIHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDAuMDc7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxyXG4gICAgcHVyY2hhc2VfY29uY3JldGUgPSAwLjA1OyAvLyDQsdC10YLQvtC9XHJcbiAgICBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSA9IDQuMDY7IC8vINGD0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0LIg0LHQtdGC0L7QvdC1XHJcblxyXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT0gJzEnKSB7XHJcbiAgICAgICAgZGlnZ2luZ190cmVuY2hlcyA9IDAuNTQ7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcclxuICAgICAgICBncm91bmRfdW5kZXJsYXkgPSAwLjE4OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgICAgICBiYWNrZmlsbCA9IDAuMzY7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpZ2dpbmdfdHJlbmNoZXMgPSAwLjcyOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICAgICAgZ3JvdW5kX3VuZGVybGF5ID0gMC4yNDsgLy8g0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQt9C10LzQu9C4XHJcbiAgICAgICAgYmFja2ZpbGwgPSAwLjQ4OyAvLyDQt9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvFx0XHRcclxuICAgIH1cclxuXHJcbiAgICAvLyDQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MjMwMClcclxuICAgIGxldCByb3cyOU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3cyOU9mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkMjlfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMjlfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMjlfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3cyOU9mV29ya1RhYmxlLmFwcGVuZCh0ZDI5XzFPZldvcmtUYWJsZSwgdGQyOV8yT2ZXb3JrVGFibGUsIHRkMjlfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDI5XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MjMwMCknO1xyXG4gICAgdGQyOV8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQyOV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwO1xyXG5cclxuICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTIyMDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LHQvtC70YLRgyDQt9Cw0LfQtdC80LvQtdC90LjRjyDQutC+0YDQv9GD0YHQsCDQqdCj0K1cclxuICAgIGxldCByb3czME9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3czME9mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkMzBfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzBfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzBfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3czME9mV29ya1RhYmxlLmFwcGVuZCh0ZDMwXzFPZldvcmtUYWJsZSwgdGQzMF8yT2ZXb3JrVGFibGUsIHRkMzBfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDMwXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC/0L7Qu9C+0YHRiyA00YUxMiwgTD0yMjAwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCx0L7Qu9GC0YMg0LfQsNC30LXQvNC70LXQvdC40Y8g0LrQvtGA0L/Rg9GB0LAg0KnQo9CtJztcclxuICAgIHRkMzBfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9GI0YIuJztcclxuICAgIHRkMzBfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZztcclxuXHJcbiAgICAvL9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YHRgtCw0LvRjCDQutGA0YPQs9C70LDRjyBkMTAg0LzQvCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQv9C+0LvQvtGB0YsgNNGFMTIg0Log0LfQsNC30LXQvNC70Y/RjtGJ0LXQvNGDINC60L7QvdGC0YPRgNGDINC+0L/QvtGA0YtcclxuICAgIGxldCByb3czMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgbGV0IHJvdzMxXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MzFPZldvcmtUYWJsZSwgcm93MzFfMU9mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDMxXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMxXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMxXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMxXzFfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzFfMl8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzMV8zXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93MzFPZldvcmtUYWJsZS5hcHBlbmQodGQzMV8xT2ZXb3JrVGFibGUsIHRkMzFfMk9mV29ya1RhYmxlLCB0ZDMxXzNPZldvcmtUYWJsZSk7XHJcblxyXG4gICAgcm93MzFfMU9mV29ya1RhYmxlLmFwcGVuZCh0ZDMxXzFfMU9mV29ya1RhYmxlLCB0ZDMxXzJfMU9mV29ya1RhYmxlLCB0ZDMxXzNfMU9mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDMxXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INGB0YLQsNC70Ywg0LrRgNGD0LPQu9Cw0Y8gZDEwINC80Lwg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0L/QvtC70L7RgdGLIDTRhTEyINC6INC30LDQt9C10LzQu9GP0Y7RidC10LzRgyc7XHJcbiAgICB0ZDMxXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICB0ZDMxXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXA7XHJcbiAgICB0ZDMxXzFfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C60L7QvdGC0YPRgNGDINC+0L/QvtGA0YsnO1xyXG4gICAgdGQzMV8yXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgdGQzMV8zXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YXQvtC80YPRgtC+0LIg0KXQmi0xXHJcbiAgICBsZXQgcm93MzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MzJPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDMyXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMyXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMyXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93MzJPZldvcmtUYWJsZS5hcHBlbmQodGQzMl8xT2ZXb3JrVGFibGUsIHRkMzJfMk9mV29ya1RhYmxlLCB0ZDMyXzNPZldvcmtUYWJsZSk7XHJcblxyXG4gICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgdGQzMl8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRhdC+0LzRg9GC0L7QsiDQpdCaLTEnO1xyXG4gICAgdGQzMl8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQzMl8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxO1xyXG5cclxuICAgIC8vINCg0YvRgtGM0LUg0YLRgNCw0L3RiNC10Lgg0LIg0YDRg9GH0L3Rg9GOXHJcbiAgICBsZXQgcm93MzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MzNPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDMzXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMzXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDMzXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93MzNPZldvcmtUYWJsZS5hcHBlbmQodGQzM18xT2ZXb3JrVGFibGUsIHRkMzNfMk9mV29ya1RhYmxlLCB0ZDMzXzNPZldvcmtUYWJsZSk7XHJcblxyXG4gICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgdGQzM18xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0KDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuCDQsiDRgNGD0YfQvdGD0Y4nO1xyXG4gICAgdGQzM18yT2ZXb3JrVGFibGUuaW5uZXJIVE1MID0gJ9C8JyArICc8c3VwPjM8L3N1cD4nO1xyXG4gICAgdGQzM18zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBkaWdnaW5nX3RyZW5jaGVzO1xyXG5cclxuICAgIC8vINCj0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0L/RgNC+0YHQtdGP0L3QvdC+0Lkg0LfQtdC80LvQuFxyXG4gICAgbGV0IHJvdzM0T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzM0T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQzNF8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzNF8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzNF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzM0T2ZXb3JrVGFibGUuYXBwZW5kKHRkMzRfMU9mV29ya1RhYmxlLCB0ZDM0XzJPZldvcmtUYWJsZSwgdGQzNF8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMzRfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cj0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0L/RgNC+0YHQtdGP0L3QvdC+0Lkg0LfQtdC80LvQuCc7XHJcbiAgICB0ZDM0XzJPZldvcmtUYWJsZS5pbm5lckhUTUwgPSAn0LwnICsgJzxzdXA+Mzwvc3VwPic7XHJcbiAgICB0ZDM0XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IGdyb3VuZF91bmRlcmxheTtcclxuXHJcbiAgICAvLyDQl9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvFxyXG4gICAgbGV0IHJvdzM1T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzM1T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQzNV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzNV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzNV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzM1T2ZXb3JrVGFibGUuYXBwZW5kKHRkMzVfMU9mV29ya1RhYmxlLCB0ZDM1XzJPZldvcmtUYWJsZSwgdGQzNV8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMzVfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9CX0LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8JztcclxuICAgIHRkMzVfMk9mV29ya1RhYmxlLmlubmVySFRNTCA9ICfQvCcgKyAnPHN1cD4zPC9zdXA+JztcclxuICAgIHRkMzVfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gYmFja2ZpbGw7XHJcblxyXG4gICAgLy8g0KDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YNcclxuICAgIGxldCByb3czNk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3czNk9mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkMzZfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzZfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzZfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3czNk9mV29ya1RhYmxlLmFwcGVuZCh0ZDM2XzFPZldvcmtUYWJsZSwgdGQzNl8yT2ZXb3JrVGFibGUsIHRkMzZfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDM2XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQoNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRgyc7XHJcbiAgICB0ZDM2XzJPZldvcmtUYWJsZS5pbm5lckhUTUwgPSAn0LwnICsgJzxzdXA+Mzwvc3VwPic7XHJcbiAgICB0ZDM2XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IGV4Y2F2YXRpb247XHJcblxyXG4gICAgLy8g0KDQsNC30YDQsNCy0L3QuNCy0LDQvdC40LUg0LLRi9GC0LXRgdC90LXQvdC90L7Qs9C+INCz0YDRg9C90YLQsCDQstGA0YPRh9C90YPRjlxyXG4gICAgbGV0IHJvdzM3T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzM3T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQzN18xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzN18yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzN18zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzM3T2ZXb3JrVGFibGUuYXBwZW5kKHRkMzdfMU9mV29ya1RhYmxlLCB0ZDM3XzJPZldvcmtUYWJsZSwgdGQzN18zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMzdfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cg0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCy0YvRgtC10YHQvdC10L3QvdC+0LPQviDQs9GA0YPQvdGC0LAg0LLRgNGD0YfQvdGD0Y4nO1xyXG4gICAgdGQzN18yT2ZXb3JrVGFibGUuaW5uZXJIVE1MID0gJ9C8JyArICc8c3VwPjM8L3N1cD4nO1xyXG4gICAgdGQzN18zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBzb2lsX2xldmVsaW5nO1xyXG5cclxuICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDRidC10LHQtdC90L7Rh9C90L4t0L/QtdGB0YfQsNC90L4t0LPRgNCw0LLQuNC50L3QvtC5INGB0LzQtdGB0LggKNCp0KPQrSlcclxuICAgIGxldCByb3czOE9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3czOE9mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkMzhfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzhfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkMzhfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3czOE9mV29ya1RhYmxlLmFwcGVuZCh0ZDM4XzFPZldvcmtUYWJsZSwgdGQzOF8yT2ZXb3JrVGFibGUsIHRkMzhfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDM4XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90L7QuSDRgdC80LXRgdC4ICjQqdCj0K0pJztcclxuICAgIHRkMzhfMk9mV29ya1RhYmxlLmlubmVySFRNTCA9ICfQvCcgKyAnPHN1cD4zPC9zdXA+JztcclxuICAgIHRkMzhfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gcHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlO1xyXG5cclxuICAgIC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQsdC10YLQvtC90LAg0LrQu9Cw0YHRgdCwINChMTYvMjAgRjEwMCAgICgg0LIgNDUwINC80Lwg0KnQo9CtKVxyXG4gICAgbGV0IHJvdzM5T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzM5T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQzOV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzOV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQzOV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzM5T2ZXb3JrVGFibGUuYXBwZW5kKHRkMzlfMU9mV29ya1RhYmxlLCB0ZDM5XzJPZldvcmtUYWJsZSwgdGQzOV8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkMzlfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQsdC10YLQvtC90LAg0LrQu9Cw0YHRgdCwINChMTYvMjAgRjEwMCc7IC8vICjQsiA0NTAg0LzQvCDQqdCj0K0pXHJcbiAgICB0ZDM5XzJPZldvcmtUYWJsZS5pbm5lckhUTUwgPSAn0LwnICsgJzxzdXA+Mzwvc3VwPic7XHJcbiAgICB0ZDM5XzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IHB1cmNoYXNlX2NvbmNyZXRlO1xyXG5cclxuICAgIC8vINCj0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQuNGH0LXRgdC60LjRhSDQutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINGC0LXQu9C1INCx0LXRgtC+0L3QsFxyXG4gICAgbGV0IHJvdzQwT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzQwT2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQ0MF8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQ0MF8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQ0MF8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzQwT2ZXb3JrVGFibGUuYXBwZW5kKHRkNDBfMU9mV29ya1RhYmxlLCB0ZDQwXzJPZldvcmtUYWJsZSwgdGQ0MF8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkNDBfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQuNGH0LXRgdC60LjRhSDQutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINGC0LXQu9C1INCx0LXRgtC+0L3QsCc7XHJcbiAgICB0ZDQwXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQutCzJztcclxuICAgIHRkNDBfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGU7XHJcbn1cclxuXHJcbi8vINC10YHQu9C4INC10YHRgtGMINCaXHJcbmlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNCaJykge1xyXG5cclxuICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpIHtcclxuICAgICAgICBkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gMTY7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC60LDQsdC10LvRj1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gODtcdC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC60LDQsdC10LvRj1x0XHRcdFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XHJcbiAgICAgICAgZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAxNS44NDsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0YPQs9C+0LvQutCwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uID0gMTEuMTc7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG4gICAgfVxyXG5cclxuICAgIGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uID0gMi4wMTsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5XHJcblxyXG4gICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJykge1xyXG4gICAgICAgIGRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDg7IC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxyXG4gICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpIHtcclxuICAgICAgICBkaXNtYW50bGluZ19jbGFtcF9aT1AgPSA2O1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHRcdFx0XHJcbiAgICB9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQmicpKSkge1xyXG4gICAgICAgIGRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDI7XHQvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcdFx0XHRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gNDtcdC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlx0XHRcdFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDQlNC10LzQvtC90YLQsNC2INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDRgSDQvtC/0L7RgNGLINC80LDRgdGB0L7QuSAxINC8INC00L4gMi3RhSDQutCzXHJcbiAgICBsZXQgcm93NDFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93NDFPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDQxXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDQxXzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDQxXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93NDFPZldvcmtUYWJsZS5hcHBlbmQodGQ0MV8xT2ZXb3JrVGFibGUsIHRkNDFfMk9mV29ya1RhYmxlLCB0ZDQxXzNPZldvcmtUYWJsZSk7XHJcblxyXG4gICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgdGQ0MV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0JTQtdC80L7QvdGC0LDQtiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0YEg0L7Qv9C+0YDRiyDQvNCw0YHRgdC+0LkgMSDQvCDQtNC+IDIt0YUg0LrQsyc7XHJcbiAgICB0ZDQxXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQvCc7XHJcbiAgICB0ZDQxXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb247XHJcblxyXG4gICAgLy8g0JTQtdC80L7QvdGC0LDQtiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDRg9Cz0L7Qu9C60LAg0YEg0L7Qv9C+0YDRi1xyXG4gICAgbGV0IHJvdzQyT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzQyT2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQ0Ml8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQ0Ml8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQ0Ml8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzQyT2ZXb3JrVGFibGUuYXBwZW5kKHRkNDJfMU9mV29ya1RhYmxlLCB0ZDQyXzJPZldvcmtUYWJsZSwgdGQ0Ml8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkNDJfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9CU0LXQvNC+0L3RgtCw0LYg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0YPQs9C+0LvQutCwINGBINC+0L/QvtGA0YsnO1xyXG4gICAgdGQ0Ml8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0LrQsyc7XHJcbiAgICB0ZDQyXzNPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9IGRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uO1xyXG5cclxuICAgIC8vINCU0LXQvNC+0L3RgtCw0LYg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INGBINC+0L/QvtGA0YtcclxuICAgIGxldCByb3c0M09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3c0M09mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkNDNfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkNDNfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkNDNfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3c0M09mV29ya1RhYmxlLmFwcGVuZCh0ZDQzXzFPZldvcmtUYWJsZSwgdGQ0M18yT2ZXb3JrVGFibGUsIHRkNDNfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDQzXzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQlNC10LzQvtC90YLQsNC2INC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDRgSDQvtC/0L7RgNGLJztcclxuICAgIHRkNDNfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9C60LMnO1xyXG4gICAgdGQ0M18zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbjtcclxuXHJcbiAgICAvLyDQlNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcclxuICAgIGxldCByb3c0NE9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgYm9keU9mV29ya1RhYmxlLmFwcGVuZChyb3c0NE9mV29ya1RhYmxlKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgbGV0IHRkNDRfMU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkNDRfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgbGV0IHRkNDRfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8g0LzQtdGB0YLQsCDRj9GH0LXQtdC6XHJcbiAgICByb3c0NE9mV29ya1RhYmxlLmFwcGVuZCh0ZDQ0XzFPZldvcmtUYWJsZSwgdGQ0NF8yT2ZXb3JrVGFibGUsIHRkNDRfM09mV29ya1RhYmxlKTtcclxuXHJcbiAgICAvLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbiAgICB0ZDQ0XzFPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQlNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTInO1xyXG4gICAgdGQ0NF8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQ0NF8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBkaXNtYW50bGluZ19jbGFtcF9aT1A7XHJcbn1cclxuXHJcbi8v0LXRgdC70Lgg0LXRgdGC0YwgM9GE0JpcclxuaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJyAmJlxyXG4gICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCSJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JLQmicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNCaJylcclxuKSB7XHJcbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Ca0JonKSB7XHJcbiAgICAgICAgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQlNC10LzQvtC90YLQsNC2INC80YPRhNGC0Ysg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCd0YLRgtC/ICgxNi0yNSktMVxyXG4gICAgbGV0IHJvdzQ1T2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcbiAgICBib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzQ1T2ZXb3JrVGFibGUpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBsZXQgdGQ0NV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQ0NV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBsZXQgdGQ0NV8zT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICAvLyDQvNC10YHRgtCwINGP0YfQtdC10LpcclxuICAgIHJvdzQ1T2ZXb3JrVGFibGUuYXBwZW5kKHRkNDVfMU9mV29ya1RhYmxlLCB0ZDQ1XzJPZldvcmtUYWJsZSwgdGQ0NV8zT2ZXb3JrVGFibGUpO1xyXG5cclxuICAgIC8vINCd0LDQv9C+0LvQvdGP0LXQvCDRj9GH0LXQudC60LhcclxuICAgIHRkNDVfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJztcclxuICAgIHRkNDVfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9GI0YIuJztcclxuICAgIHRkNDVfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80O1xyXG59XHJcblxyXG4vL9C10YHQu9C4INC10YHRgtGMIDHRhNCaXHJcbmlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicgJiZcclxuICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQmtCaJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQkicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CS0JonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQmicpXHJcbikge1xyXG5cclxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0JrQmicpIHtcclxuICAgICAgICBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgPSAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xXHJcbiAgICBsZXQgcm93NDVPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIGJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93NDVPZldvcmtUYWJsZSk7XHJcbiAgICAvLyDRj9GH0LXQudC60LhcclxuICAgIGxldCB0ZDQ1XzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDQ1XzJPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIGxldCB0ZDQ1XzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG4gICAgcm93NDVPZldvcmtUYWJsZS5hcHBlbmQodGQ0NV8xT2ZXb3JrVGFibGUsIHRkNDVfMk9mV29ya1RhYmxlLCB0ZDQ1XzNPZldvcmtUYWJsZSk7XHJcblxyXG4gICAgLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG4gICAgdGQ0NV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0JTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDLQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnO1xyXG4gICAgdGQ0NV8yT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0YjRgi4nO1xyXG4gICAgdGQ0NV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzI7XHJcbn1cclxuXHJcblxyXG4qL1xyXG4gICAgcmV0dXJuIHdvcmtUYWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd29ya1RhYmxlO1xyXG4iLCJpbXBvcnQgJy4uL2Nzcy9zY29wZU9mV29yay5jc3MnO1xyXG5cclxuaW1wb3J0IG1haW5PYmplY3RDb2xsZWN0IGZyb20gJy4vZGF0YS9tYWluLW9iamVjdC1jb2xsZWN0JztcclxuaW1wb3J0IGNyZWF0ZUluZm9UYWJsZSBmcm9tICcuL3RhYmxlLWZvci1vcmRlcl9uX3dvcmtzL2NyZWF0ZS1pbmZvLXRhYmxlJztcclxuaW1wb3J0IGFkZENpcGhlclRhYmxlIGZyb20gJy4vY2lwaGVyL2FkZC1jaXBoZXItdGFibGUnO1xyXG5pbXBvcnQgYWRkQXNpZGVUYWJsZSBmcm9tICcuL2NpcGhlci9hZGQtYXNpZGUtdGFibGUnO1xyXG5pbXBvcnQgYWRkRm9ybWF0IGZyb20gJy4vY2lwaGVyL2FkZC1mb3JtYXQnO1xyXG5pbXBvcnQgYWRkU3VtU2VtIGZyb20gJy4vZm9yLW9yZGVyLWxpc3QvYWRkLXN1bS1zZW0nO1xyXG5cclxuaW1wb3J0IHdvcmtUYWJsZSBmcm9tICcuL2Zvci13b3Jrcy93b3Jrcyc7XHJcblxyXG5sZXQgdXNlcklucHV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5wdXRcIik7XHJcbnVzZXJJbnB1dCA9IG1haW5PYmplY3RDb2xsZWN0KHVzZXJJbnB1dCk7XHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dCwgJy0gdXNlcklucHV0Jyk7XHJcblxyXG5sZXQgdXNlcklucHV0V2l0aG91dFNhbWVCcmVha2VycyA9IFtdO1xyXG4vLyDRg9C00LDQu9C10L3QuNC1INGJ0LjRgtC60L7QsiDRgSDQvtC00LjQvdCw0LrQvtCy0YvQvNC4INC90L7QvNC40L3QsNC70LDQvNC4INCw0LLRgtC+0LzQsNGC0L7QslxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdGlmIChpID09PSAwKSB7XHJcblx0XHR1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzLnB1c2godXNlcklucHV0W2ldKTtcclxuXHR9IGVsc2UgaWYgKHVzZXJJbnB1dFtpXS5TRU1UeXBlICE9PSB1c2VySW5wdXRbaSAtIDFdLlNFTVR5cGUgfHxcclxuXHRcdHVzZXJJbnB1dFtpXS5pbnB1dEZyb21TZW0gIT09IHVzZXJJbnB1dFtpIC0gMV0uaW5wdXRGcm9tU2VtIHx8XHJcblx0XHR1c2VySW5wdXRbaV0ucGlsbGFyVHlwZSAhPT0gdXNlcklucHV0W2kgLSAxXS5waWxsYXJUeXBlKSB7XHJcblx0XHR1c2VySW5wdXRXaXRob3V0U2FtZUJyZWFrZXJzLnB1c2godXNlcklucHV0W2ldKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dFtpXS5TRU1UeXBlLCAnIC0g0LTQvtCx0LDQstC70Y/QtdC8Jyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vINGC0YPRgiDQvNC10L3Rj9C10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INGJ0LjRgtC60L7QsiDQv9GD0YLQtdC8INC/0YDQuNCx0LDQstC70LXQvdC40Y8g0YLQtdGFINC60L7RgtC+0YDRi9C1INC/0YDQvtC/0YPRgdGC0LjQu9C4INC6INGC0LDQutC40Lwg0LbQtVxyXG5cdFx0dXNlcklucHV0W2kgLSAxXS5jb3VudE9mU0VNID0gdXNlcklucHV0W2kgLSAxXS5jb3VudE9mU0VNICsgdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblx0fVxyXG59XHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnMsICctIHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnMnKTtcclxuXHJcbi8vINGD0LfQvdCw0YLRjCDQutC+0Lst0LLQviDRgdGF0LXQvCwg0LTQu9GPINC90YPQvNC10YDQsNGG0LjQuFxyXG5sZXQgc2hlbWVQYWdlcyA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdGNvbnNvbGUubG9nKGkpXHJcblx0aWYgKGkgPT09IDApIHtcclxuXHRcdHNoZW1lUGFnZXMucHVzaChpKTtcclxuXHR9IGVsc2UgaWYgKHVzZXJJbnB1dFtpXS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09IHVzZXJJbnB1dFtpIC0gMV0uU0VNVHlwZS5zcGxpdCgnLScpWzJdXHJcblx0XHR8fCB1c2VySW5wdXRbaV0uU0VNVHlwZS5zcGxpdCgnLScpWzNdICE9PSB1c2VySW5wdXRbaSAtIDFdLlNFTVR5cGUuc3BsaXQoJy0nKVszXSkge1xyXG5cdFx0c2hlbWVQYWdlcy5wdXNoKGkpO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3REYXRhXCIpKTtcclxuY29uc29sZS5sb2cocHJvamVjdERhdGEpO1xyXG5cclxuLy8gbGV0IGdldFNjb3BlT2ZXb3JrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldC1zY29wZS1vZi13b3JrJyk7XHJcblxyXG4vLyBnZXRTY29wZU9mV29ya0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuLy8gXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5jb25zdCBjb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudGVyc19uX2JyZWFrZXJzX2NvbnRhaW5lcicpO1xyXG5jb3VudGVyc0FuZEJyZWFrZXJzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRlX2NvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuXHQvLyBhZGQgbWFpbiB0YWJsZVxyXG5cdGNvbnN0IGluZm9UYWJsZVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb190YWJsZV93cmFwcGVyJyk7XHJcblx0aW5mb1RhYmxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93X2luZm9fdGFibGVfd3JhcHBlcicpO1xyXG5cdGNvbnN0IGluZm9UYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvX3RhYmxlX2JvZHknKTtcclxuXHRjb25zdCByb3dGb3JJbmZvVGFibGUgPSBjcmVhdGVJbmZvVGFibGUodXNlcklucHV0V2l0aG91dFNhbWVCcmVha2Vyc1tpXSwgZmFsc2UpO1xyXG5cdGluZm9UYWJsZS5hcHBlbmQocm93Rm9ySW5mb1RhYmxlKTtcclxuXHJcblxyXG5cdC8vIGFkZCB3cmFwcGVyXHJcblx0Y29uc3Qgb3JkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZGVyX3NoZWV0Jyk7XHJcblxyXG5cdGNvbnN0IGg2X2JyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkg2XCIpO1xyXG5cdGg2X2JyZWFrLmNsYXNzTGlzdC5hZGQoJ2g2X2JyZWFrJyk7XHJcblxyXG5cdGNvbnN0IGE0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuXHRhNGRpdi5jbGFzc0xpc3QuYWRkKCdhNF9kaXYnKTtcclxuXHJcblx0Y29uc3QgYTRkaXZfZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5cdGE0ZGl2X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2E0X2Rpdl9mcmFtZScpO1xyXG5cclxuXHRvcmRlcldyYXBwZXIuYXBwZW5kKGg2X2JyZWFrLCBhNGRpdik7XHJcblx0YTRkaXYuYXBwZW5kKGE0ZGl2X2ZyYW1lKTtcclxuXHJcblxyXG5cdC8vIGFkZCBjaXBoZXIgaW4gd3JhcHBlclxyXG5cdGE0ZGl2X2ZyYW1lLmFwcGVuZChhZGRDaXBoZXJUYWJsZShwcm9qZWN0RGF0YSwgJzEwMycsICd3b3JrcycsIHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnNbaV0sIGksIHVzZXJJbnB1dCwgc2hlbWVQYWdlcykpO1xyXG5cdC8vIGFkZCBhc2lkZSBmcmFtZSBpbiB3cmFwcGVyXHJcblx0YTRkaXZfZnJhbWUuYXBwZW5kKGFkZEFzaWRlVGFibGUoKSk7XHJcblxyXG5cclxuXHRhNGRpdl9mcmFtZS5hcHBlbmQod29ya1RhYmxlKHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnNbaV0pKTtcclxuXHJcblx0YTRkaXYuYXBwZW5kKGFkZEZvcm1hdCgnQTQnKSk7XHJcbn1cclxuYWRkU3VtU2VtKHVzZXJJbnB1dFdpdGhvdXRTYW1lQnJlYWtlcnMpO1xyXG4vLyB9XHJcbiIsImxldCBjcmVhdGVJbmZvVGFibGUgPSBmdW5jdGlvbiAoc2VtLCBuZWVkQnJlYWtlcnNJbmZvKSB7XHJcblx0Ly/QodC+0LfQtNCw0LXQvCDRgdGC0YDQvtC60YMg0YLQsNCx0LvQuNGG0YtcdFxyXG5cdGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG5cdC8vINCh0L7Qt9C00LDQtdC8INGP0YfQtdC50LrQuCDQsiDQstGL0YjQtdGB0L7Qt9C00LDQvdC90L7QuSDRgdGC0YDQvtC60LVcclxuXHRsZXQgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cdGxldCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblx0bGV0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcblx0Ly8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG5cdHRkMS50ZXh0Q29udGVudCA9IHNlbS5TRU1UeXBlO1xyXG5cdGlmIChuZWVkQnJlYWtlcnNJbmZvKXtcclxuXHRcdGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0dGQyLnRleHRDb250ZW50ID0gYNCj0YHRgtCw0L3QvtCy0LrQsCAke3NlbS5pbnN0YWxsYXRpb259LiAke3NlbS5kZXNjcmlwdGlvbn0gKCR7c2VtLmJyZWFrZXIxVmFsdWV9INCQKWA7XHJcblx0XHR9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0ZDIudGV4dENvbnRlbnQgPSBg0KPRgdGC0LDQvdC+0LLQutCwICR7c2VtLmluc3RhbGxhdGlvbn0uICR7c2VtLmRlc2NyaXB0aW9ufSAoJHtzZW0uYnJlYWtlcjFWYWx1ZX0g0JA7ICR7c2VtLmJyZWFrZXIyVmFsdWV9INCQKWA7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHRkMi50ZXh0Q29udGVudCA9IGDQo9GB0YLQsNC90L7QstC60LAgJHtzZW0uaW5zdGFsbGF0aW9ufS4gJHtzZW0uZGVzY3JpcHRpb259YDtcclxuXHR9XHJcblxyXG5cdHRkMy50ZXh0Q29udGVudCA9IHNlbS5jb3VudE9mU0VNO1xyXG5cclxuXHRyb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cdHJldHVybiByb3c7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluZm9UYWJsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==