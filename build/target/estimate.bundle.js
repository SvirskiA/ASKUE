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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/estimate.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/estimate.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/GOST 2.304-81 type A.ttf */ "./src/layout/css/fonts/GOST 2.304-81 type A.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'GOST 2.304-81 type A'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n@media print {\r\n    /* здесь будут стили для печати */\r\n\theader, \r\n\t.main-table,\r\n\t.counters_n_breakers_container,\r\n\tfooter {\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.a4_div {\r\n\t\tpage-break-after: always !important;\r\n\t\tbreak-after: always !important;\r\n\t\tfloat: none !important; \r\n\t\t/*border: none !important; */\r\n\t} \r\n\r\n\r\n\t\r\n\t@page {\r\n\t\tsize: auto;  \r\n\t\tmargin: 0;  \r\n\t}\r\n\r\n}\r\n* {\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\r\n\tfont-family: 'GOST 2.304-81 type A', sans-serif;\r\n\tcolor: black; \r\n}\r\nh6 {\r\n\theight: 1px;\r\n}\r\n.container {\r\n\twidth: 210mm;\r\n\tmargin: auto;\r\n\t/* background: url('/img/0001.jpg'); */\r\n}\r\n\r\nheader,\r\nfooter {\r\n\tpadding: 15px 0;\r\n\tbackground: #48D1CC;\r\n\tcolor:  white;\r\n}\r\n/* КНОПКИ */\r\n.btn {\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tbackground: #008B8B;\r\n\tcolor: white;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\tmargin: 5px 0;\r\n\tfont-size: 21px;;\r\n}\r\n/* .btn:last-child{\r\n\tmargin: 20px 0;\r\n} */\r\n.btn:hover, .input-btn:hover {\r\n\tbackground:\t#008C33;\r\n\tborder: #0b6603 solid 2px;\r\n}\r\n\r\n/*КОНТЕЙНЕРЫ ДЛЯ ОПРОСНЫХ*/\r\n.order_container {\r\n\tbackground: #AFEEEE;\r\n}\r\n.a4_div {\r\n\theight: 296.5mm;\r\n\tdisplay: block;\r\n\tborder: 1px solid black;\r\n\tposition: relative;\r\n\tbackground: #d0ecec\r\n}\r\n.a4_div_frame {\r\n\tfont-size: 11.5pt;\r\n\theight: 287mm;\r\n\twidth: 185mm;\r\n\tleft: 20mm;\r\n\tbottom: 5mm;\r\n\tborder: 0.6mm solid black;\r\n\tposition: absolute;\t\r\n\tdisplay: block; /*del*/\r\n}\r\n\r\n/*ТАБЛИЦЫ, общие свойства*/\r\ntable {\r\n\tborder-collapse: collapse;\r\n}\r\ntd, th {\r\n\tborder: 0.25mm solid #000;\r\n}\r\ntbody {\r\n\tbackground: #e3f8ea;\r\n}\r\ntr:nth-child(2n), thead {\r\n\tbackground: #fff;\r\n}\r\ntr:nth-child(2n-1), thead {\r\n\tbackground: #e3f8ea;\r\n}\r\n\r\n/*ТАБЛИЦА*/\r\n.works_table {\r\n\twidth: 100%;\r\n}\r\n.works_table td:nth-child(1) {\r\n\twidth: 150mm;\r\n\ttext-align: left;\r\n\tborder-left: none;\r\n\tpadding-left: 1mm;\r\n}\r\n.works_table td:nth-child(2n+1) {\r\n\theight: 5.5mm;\r\n}\r\n.works_table td:nth-child(2) {\r\n\twidth: 10mm;\r\n\ttext-align: center;\r\n\tborder-left: #000 solid 0.6mm;\r\n\tborder-right: #000 solid 0.6mm;\r\n}\r\n.works_table td:last-child {\r\n\ttext-align: right;\r\n\tborder-right: none;\r\n\tpadding-right: 15px;\r\n}\r\n.works_table tr:first-child td {\r\n\ttext-align: center;\r\n\theight: 8mm;\r\n\tpadding: 0;\r\n\tborder-bottom: #000 solid 0.6mm;\r\n\tborder-top: none;\r\n}\r\n\r\n\r\n.signature{\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: -7px;\r\n\tposition: absolute;\r\n}\r\n.signature_boss {\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: 15px;\r\n\tposition: absolute;\r\n}\r\n.signature_boss2 {\r\n\tmax-width: 65px;\r\n\tmax-height: 33px;\r\n\tbottom: 33px;\r\n\tposition: absolute;\r\n}", ""]);
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

/***/ "./src/layout/css/estimate.css":
/*!*************************************!*\
  !*** ./src/layout/css/estimate.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./estimate.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/estimate.css");

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

/***/ "./src/layout/scripts/estimate.js":
/*!****************************************!*\
  !*** ./src/layout/scripts/estimate.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_estimate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/estimate.css */ "./src/layout/css/estimate.css");
/* harmony import */ var _css_estimate_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estimate_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _for_works_create_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for-works/create-row */ "./src/layout/scripts/for-works/create-row.js");
/* harmony import */ var _data_main_object_collect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/main-object-collect */ "./src/layout/scripts/data/main-object-collect.js");
/* harmony import */ var _for_works_works_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./for-works/works-data */ "./src/layout/scripts/for-works/works-data.js");




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
  // console.log(worksDataCollect(userInput[i]).routing_4x16_cable_along_pylon_with_clamps_XK1);
  routing_4x16_cable_along_pylon_with_clamps_XK1 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_4x16_cable_along_pylon_with_clamps_XK1 * userInput[i].countOfSEM;
  routing_4x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_4x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_4x16_cable_in_the_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_4x16_cable_in_the_trench * userInput[i].countOfSEM;
  routing_4x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_4x16_cable_along_remote_stand * userInput[i].countOfSEM;
  purchase_4x16_cable_with_2_percent += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_4x16_cable_with_2_percent * userInput[i].countOfSEM;
  routing_2x16_cable_along_pylon_with_clamps_XK1 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_2x16_cable_along_pylon_with_clamps_XK1 * userInput[i].countOfSEM;
  routing_2x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_2x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_2x16_cable_in_the_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_2x16_cable_in_the_trench * userInput[i].countOfSEM;
  routing_2x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_2x16_cable_along_remote_stand * userInput[i].countOfSEM;
  purchase_2x16_cable_with_2_percent += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_2x16_cable_with_2_percent * userInput[i].countOfSEM;
  finding_an_existing_cable += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).finding_an_existing_cable * userInput[i].countOfSEM;
  routing_existing_4x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_existing_4x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_existing_4x16_cable_in_the_finished_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_existing_4x16_cable_in_the_finished_trench * userInput[i].countOfSEM;
  routing_existing_4x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_existing_4x16_cable_along_remote_stand * userInput[i].countOfSEM;
  routing_existing_2x16_cable_along_pylon_with_protection_cover_KM += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_existing_2x16_cable_along_pylon_with_protection_cover_KM * userInput[i].countOfSEM;
  routing_existing_2x16_cable_in_the_finished_trench += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_existing_2x16_cable_in_the_finished_trench * userInput[i].countOfSEM;
  routing_existing_2x16_cable_along_remote_stand += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).routing_existing_2x16_cable_along_remote_stand * userInput[i].countOfSEM;
  wire_routing_along_constructions += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).wire_routing_along_constructions * userInput[i].countOfSEM;
  wire_routing_in_the_pipe += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).wire_routing_in_the_pipe * userInput[i].countOfSEM;
  purchase_wire_with_2_percent += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_wire_with_2_percent * userInput[i].countOfSEM;
  purchase_n_montage_INside_sleeve_4 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_INside_sleeve_4 * userInput[i].countOfSEM;
  purchase_n_montage_OUTside_sleeve_4 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_OUTside_sleeve_4 * userInput[i].countOfSEM;
  purchase_n_montage_INside_sleeve_2 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_INside_sleeve_2 * userInput[i].countOfSEM;
  purchase_n_montage_OUTside_sleeve_2 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_OUTside_sleeve_2 * userInput[i].countOfSEM;
  purchase_n_montage_clamp_ZOP += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_clamp_ZOP * userInput[i].countOfSEM;
  purchase_n_montage_strip_2400_for_grounding += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_strip_2400_for_grounding * userInput[i].countOfSEM;
  purchase_n_montage_protection_cover_KM_1700 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_protection_cover_KM_1700 * userInput[i].countOfSEM;
  purchase_n_montage_protection_cover_KM_2300 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_protection_cover_KM_2300 * userInput[i].countOfSEM;
  purchase_n_montage_strip_2200_for_grounding += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_strip_2200_for_grounding * userInput[i].countOfSEM;
  purchase_n_montage_round_steel_for_strip += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_round_steel_for_strip * userInput[i].countOfSEM;
  purchase_n_montage_clamp_XK1 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_clamp_XK1 * userInput[i].countOfSEM;
  digging_trenches += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).digging_trenches * userInput[i].countOfSEM;
  ground_underlay += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).ground_underlay * userInput[i].countOfSEM;
  backfill += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).backfill * userInput[i].countOfSEM;
  excavation += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).excavation * userInput[i].countOfSEM;
  soil_leveling += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).soil_leveling * userInput[i].countOfSEM;
  purchase_crushed_stone_sand_gravel_mixture += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_crushed_stone_sand_gravel_mixture * userInput[i].countOfSEM;
  purchase_concrete += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_concrete * userInput[i].countOfSEM;
  installation_of_metal_structures_in_concrete += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).installation_of_metal_structures_in_concrete * userInput[i].countOfSEM;
  dismantling_cable_from_pylon += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).dismantling_cable_from_pylon * userInput[i].countOfSEM;
  dismantling_metal_corner_from_pylon += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).dismantling_metal_corner_from_pylon * userInput[i].countOfSEM;
  dismantling_metal_construction_from_pylon += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).dismantling_metal_construction_from_pylon * userInput[i].countOfSEM;
  dismantling_clamp_ZOP += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).dismantling_clamp_ZOP * userInput[i].countOfSEM;
  dismantling_INside_sleeve_4 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).dismantling_INside_sleeve_4 * userInput[i].countOfSEM;
  dismantling_INside_sleeve_2 += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).dismantling_INside_sleeve_2 * userInput[i].countOfSEM;
  console.log(Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]));
}

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
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 4х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м', routing_4x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
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
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Прокладка кабеля АВБбШВ 2х16 по опоре с защитой кожухом защиты кабеля КМ (уголок 75х75х5, L=2300)', 'м', routing_2x16_cable_along_pylon_with_protection_cover_KM.toFixed(2)));
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
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж муфт внутренней установки типа 4ПБКВттп (16-25)-1', 'шт.', purchase_n_montage_INside_sleeve_4.toFixed(2)));
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZXN0aW1hdGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZXN0aW1hdGUuY3NzP2EzMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2VzdGltYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itd29ya3MvY3JlYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLXdvcmtzL3dvcmtzLWRhdGEuanMiXSwibmFtZXMiOlsibWFpbk9iamVjdENvbGxlY3QiLCJzdHIiLCJhcnJheU9mVXNlcklucHV0Iiwic3BsaXQiLCJyZXN1bHRBcnJheSIsImxlZ2VuZEFycmF5IiwiU0VNIiwiYXJyIiwiY291bnRPZlNFTSIsImluZGV4T2YiLCJicmVha2VyMVZhbHVlIiwiYnJlYWtlcjJWYWx1ZSIsIlNFTVR5cGUiLCJjb3VudGVyQ291bnRJblNFTSIsImxlbmd0aCIsImlucHV0RnJvbVNlbSIsInRvTG93ZXJDYXNlIiwicGlsbGFyVHlwZSIsInBoYXNlMVZhbHVlIiwicGhhc2UyVmFsdWUiLCJvdXRCcmVha2VyMSIsIm91dEJyZWFrZXIyIiwiZGVzY3JpcHRpb24iLCJhbGVydCIsImluc3RhbGxhdGlvbiIsImZ1bGxEZWNyaXB0aW9uIiwiZGVjcmlwdGlvbkZvcldvcmtzIiwiaSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic29ydCIsImEiLCJiIiwicm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50Iiwicm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50IiwiZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2giLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwid2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMiLCJ3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUiLCJwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50IiwicHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCIsInB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80IiwicHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiIsInB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yIiwicHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCIsInB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmciLCJwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwIiwicHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCIsInB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmciLCJwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwIiwicHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSIsImRpZ2dpbmdfdHJlbmNoZXMiLCJncm91bmRfdW5kZXJsYXkiLCJiYWNrZmlsbCIsImV4Y2F2YXRpb24iLCJzb2lsX2xldmVsaW5nIiwicHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlIiwicHVyY2hhc2VfY29uY3JldGUiLCJpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSIsImRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24iLCJkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiIsImRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uIiwiZGlzbWFudGxpbmdfY2xhbXBfWk9QIiwiZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80IiwiZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yIiwidXNlcklucHV0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2plY3REYXRhIiwiSlNPTiIsInBhcnNlIiwid29ya3NEYXRhQ29sbGVjdCIsImE0ZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYTRkaXZfZnJhbWUiLCJvcmRlcldyYXBwZXIiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZCIsInRhYmxlIiwiYm9keU9mV29ya1RhYmxlIiwicm93MU9mV29ya1RhYmxlIiwidGQxXzFPZldvcmtUYWJsZSIsInRkMV8yT2ZXb3JrVGFibGUiLCJ0ZDFfM09mV29ya1RhYmxlIiwidGV4dENvbnRlbnQiLCJjcmVhdGVSb3ciLCJ0b0ZpeGVkIiwibWVhc3VyZSIsInZhbHVlIiwicm93IiwidGQxIiwidGQyIiwidGQzIiwiaW5uZXJIVE1MIiwiaW5wdXQiLCJTRU1XT1JLUyIsInNlbSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFn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LENBQUNsRyxZQUFKLEtBQXFCLElBQTdELEVBQW1FO0FBQy9ELGFBQUs4RCwyQkFBTCxHQUFtQyxDQUFuQztBQUNILE9BRkQsTUFFTztBQUNILGFBQUtBLDJCQUFMLEdBQW1DLENBQW5DO0FBQ0g7QUFDSixLQVJELE1BUU87QUFDSCxXQUFLQSwyQkFBTCxHQUFtQyxDQUFuQztBQUNILEtBdlprQixDQXlabkI7OztBQUNBLFFBQUlvQyxHQUFHLENBQUNyRyxPQUFKLENBQVlULEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsTUFBOEIsR0FBOUIsS0FDQzhHLEdBQUcsQ0FBQ2xHLFlBQUosS0FBcUIsR0FBckIsSUFBNEJrRyxHQUFHLENBQUNsRyxZQUFKLEtBQXFCLElBQWpELElBQXlEa0csR0FBRyxDQUFDbEcsWUFBSixLQUFxQixJQUE5RSxJQUFzRmtHLEdBQUcsQ0FBQ2xHLFlBQUosS0FBcUIsSUFBM0csSUFBbUhrRyxHQUFHLENBQUNsRyxZQUFKLEtBQXFCLEtBRHpJLENBQUosRUFFRTtBQUVFLFVBQUlrRyxHQUFHLENBQUNyRyxPQUFKLENBQVlULEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsS0FBNkIsR0FBN0IsSUFBb0M4RyxHQUFHLENBQUNsRyxZQUFKLEtBQXFCLElBQTdELEVBQW1FO0FBQy9ELGFBQUsrRCwyQkFBTCxHQUFtQyxDQUFuQztBQUNILE9BRkQsTUFFTztBQUNILGFBQUtBLDJCQUFMLEdBQW1DLENBQW5DO0FBQ0g7QUFDSixLQVRELE1BU087QUFDSCxXQUFLQSwyQkFBTCxHQUFtQyxDQUFuQztBQUNIO0FBQ0osR0F4YW1DLENBeWFwQzs7O0FBQ0EsU0FBTyxJQUFJa0MsUUFBSixDQUFhRCxLQUFiLENBQVA7QUFDSCxDQTNhRDs7QUE2YWUxQiwrRUFBZixFIiwiZmlsZSI6ImVzdGltYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xheW91dC9zY3JpcHRzL2VzdGltYXRlLmpzXCIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnOyBcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXHJcXG59XFxyXFxuQG1lZGlhIHByaW50IHtcXHJcXG4gICAgLyog0LfQtNC10YHRjCDQsdGD0LTRg9GCINGB0YLQuNC70Lgg0LTQu9GPINC/0LXRh9Cw0YLQuCAqL1xcclxcblxcdGhlYWRlciwgXFxyXFxuXFx0Lm1haW4tdGFibGUsXFxyXFxuXFx0LmNvdW50ZXJzX25fYnJlYWtlcnNfY29udGFpbmVyLFxcclxcblxcdGZvb3RlciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcblxcdH1cXHJcXG5cXHQuYTRfZGl2IHtcXHJcXG5cXHRcXHRwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRicmVhay1hZnRlcjogYWx3YXlzICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxyXFxuXFx0XFx0Lypib3JkZXI6IG5vbmUgIWltcG9ydGFudDsgKi9cXHJcXG5cXHR9IFxcclxcblxcclxcblxcclxcblxcdFxcclxcblxcdEBwYWdlIHtcXHJcXG5cXHRcXHRzaXplOiBhdXRvOyAgXFxyXFxuXFx0XFx0bWFyZ2luOiAwOyAgXFxyXFxuXFx0fVxcclxcblxcclxcbn1cXHJcXG4qIHtcXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiBibGFjazsgXFxyXFxufVxcclxcbmg2IHtcXHJcXG5cXHRoZWlnaHQ6IDFweDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuXFx0d2lkdGg6IDIxMG1tO1xcclxcblxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHQvKiBiYWNrZ3JvdW5kOiB1cmwoJy9pbWcvMDAwMS5qcGcnKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxuXFx0cGFkZGluZzogMTVweCAwO1xcclxcblxcdGJhY2tncm91bmQ6ICM0OEQxQ0M7XFxyXFxuXFx0Y29sb3I6ICB3aGl0ZTtcXHJcXG59XFxyXFxuLyog0JrQndCe0J/QmtCYICovXFxyXFxuLmJ0biB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICMwMDhCOEI7XFxyXFxuXFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0bWFyZ2luOiA1cHggMDtcXHJcXG5cXHRmb250LXNpemU6IDIxcHg7O1xcclxcbn1cXHJcXG4vKiAuYnRuOmxhc3QtY2hpbGR7XFxyXFxuXFx0bWFyZ2luOiAyMHB4IDA7XFxyXFxufSAqL1xcclxcbi5idG46aG92ZXIsIC5pbnB1dC1idG46aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQ6XFx0IzAwOEMzMztcXHJcXG5cXHRib3JkZXI6ICMwYjY2MDMgc29saWQgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKtCa0J7QndCi0JXQmdCd0JXQoNCrINCU0JvQryDQntCf0KDQntCh0J3Qq9ClKi9cXHJcXG4ub3JkZXJfY29udGFpbmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbn1cXHJcXG4uYTRfZGl2IHtcXHJcXG5cXHRoZWlnaHQ6IDI5Ni41bW07XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6ICNkMGVjZWNcXHJcXG59XFxyXFxuLmE0X2Rpdl9mcmFtZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMS41cHQ7XFxyXFxuXFx0aGVpZ2h0OiAyODdtbTtcXHJcXG5cXHR3aWR0aDogMTg1bW07XFxyXFxuXFx0bGVmdDogMjBtbTtcXHJcXG5cXHRib3R0b206IDVtbTtcXHJcXG5cXHRib3JkZXI6IDAuNm1tIHNvbGlkIGJsYWNrO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHRcXHJcXG5cXHRkaXNwbGF5OiBibG9jazsgLypkZWwqL1xcclxcbn1cXHJcXG5cXHJcXG4vKtCi0JDQkdCb0JjQptCrLCDQvtCx0YnQuNC1INGB0LLQvtC50YHRgtCy0LAqL1xcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG50ZCwgdGgge1xcclxcblxcdGJvcmRlcjogMC4yNW1tIHNvbGlkICMwMDA7XFxyXFxufVxcclxcbnRib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZTNmOGVhO1xcclxcbn1cXHJcXG50cjpudGgtY2hpbGQoMm4pLCB0aGVhZCB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXHJcXG59XFxyXFxudHI6bnRoLWNoaWxkKDJuLTEpLCB0aGVhZCB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2UzZjhlYTtcXHJcXG59XFxyXFxuXFxyXFxuLyrQotCQ0JHQm9CY0KbQkCovXFxyXFxuLndvcmtzX3RhYmxlIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgxKSB7XFxyXFxuXFx0d2lkdGg6IDE1MG1tO1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0Ym9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxbW07XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0ZDpudGgtY2hpbGQoMm4rMSkge1xcclxcblxcdGhlaWdodDogNS41bW07XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0ZDpudGgtY2hpbGQoMikge1xcclxcblxcdHdpZHRoOiAxMG1tO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItbGVmdDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG5cXHRib3JkZXItcmlnaHQ6ICMwMDAgc29saWQgMC42bW07XFxyXFxufVxcclxcbi53b3Jrc190YWJsZSB0ZDpsYXN0LWNoaWxkIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRyOmZpcnN0LWNoaWxkIHRkIHtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiA4bW07XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci10b3A6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWduYXR1cmV7XFxyXFxuXFx0bWF4LXdpZHRoOiA2NXB4O1xcclxcblxcdG1heC1oZWlnaHQ6IDMzcHg7XFxyXFxuXFx0Ym90dG9tOiAtN3B4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLnNpZ25hdHVyZV9ib3NzIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IDE1cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3MyIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IDMzcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VzdGltYXRlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRmYWVhZmQ0OTczZjg4OTIwMDc0ZTQ2ZTU1NWIxMmZjLnR0ZlwiOyIsImZ1bmN0aW9uIG1haW5PYmplY3RDb2xsZWN0KHN0cikge1xyXG5cdGxldCBhcnJheU9mVXNlcklucHV0ID0gc3RyLnNwbGl0KCdcXG4nKTtcclxuXHJcblx0bGV0IHJlc3VsdEFycmF5ID0gW107XHJcblxyXG5cdGxldCBsZWdlbmRBcnJheSA9IGFycmF5T2ZVc2VySW5wdXRbMF0uc3BsaXQoJywnKTtcclxuXHJcblx0Y2xhc3MgU0VNIHtcclxuXHRcdGNvbnN0cnVjdG9yKGFycikge1xyXG5cclxuXHRcdFx0dGhpcy5jb3VudE9mU0VNID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCfQmtC+0LvQuNGH0LXRgdGC0LLQvicpXTtcclxuXHRcdFx0dGhpcy5icmVha2VyMVZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIxJyldLnNwbGl0KCcgJylbMF07XHJcblx0XHRcdHRoaXMuYnJlYWtlcjJWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMicpXS5zcGxpdCgnICcpWzBdIHx8IG51bGw7XHJcblx0XHRcdHRoaXMuU0VNVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0KnQo9CtJyldO1xyXG5cdFx0XHR0aGlzLmNvdW50ZXJDb3VudEluU0VNID0gK3RoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzNdO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDFcclxuXHRcdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSAn0LInO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSAn0LLQsic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5waWxsYXJUeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QntCf0J7QoNCrJyldLnRvTG93ZXJDYXNlKCkgfHwgJ9GB0LItOTUnO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMycpIHtcclxuXHRcdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAzO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcyJ1xyXG5cdFx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzEnXHJcblx0XHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAxO1xyXG5cdFx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLm91dEJyZWFrZXIxID0gYCR7dGhpcy5waGFzZTFWYWx1ZX0gLSAke3RoaXMuYnJlYWtlcjFWYWx1ZX1gO1xyXG5cdFx0XHR0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyID9cclxuXHRcdFx0XHR0aGlzLm91dEJyZWFrZXIyID0gYCR7dGhpcy5waGFzZTJWYWx1ZX0gLSAke3RoaXMuYnJlYWtlcjJWYWx1ZX1gIDpcclxuXHRcdFx0XHR0aGlzLm91dEJyZWFrZXIyID0gbnVsbDtcclxuXHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9CyJykge1xyXG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEgJiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICfQuicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LDRjyDQu9C40L3QuNGPOiDQutCw0LHQtdC70YzQvdCw0Y8uJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdFx0JiYgKHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LonKSB8fCAodGhpcy5pbnB1dEZyb21TZW0gPT09ICfQutCyJykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LLQuicpKSB7XHJcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3QsNGPINC4INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3Ri9C1Lic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSB7XHJcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDogM9GEIC0g0LLQvtC30LTRg9GI0L3QsNGPLCAx0YQgLSDQutCw0LHQtdC70YzQvdCw0Y8uJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQutCw0LHQtdC70YzQvdCw0Y8sIDHRhCAtINCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XHJcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LLQvtC30LTRg9GI0L3Ri9C1Lic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YWxlcnQoYCR7dGhpcy5pbnB1dEZyb21TZW19INC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIgJHt0aGlzLlNFTVR5cGV9LCDQv9C10YDQtdC/0YDQvtCy0LXRgNGM0YLQtSDQstCy0L7QtNC40LzRi9C1INC00LDQvdC90YvQtWApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUgPT09ICfRgdCyLTk1Jykge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCSLTk1JztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0LItMTEwJykge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCSLTExMCc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCiLTEwOC42JztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0KItMTA4LjcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMicpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQstC90LXRiNC90LXQuSDRgdGC0LXQvdC1INC30LTQsNC90LjRjyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICc0Jykge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTInO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHRcdFx0dGhpcy5kZWNyaXB0aW9uRm9yV29ya3MgPSBgJHt0aGlzLlNFTVR5cGV9LiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufWA7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JA7ICR7dGhpcy5icmVha2VyMlZhbHVlfSDQkCkuICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259LiDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCYDtcclxuXHRcdFx0XHR0aGlzLmRlY3JpcHRpb25Gb3JXb3JrcyA9IGAke3RoaXMuU0VNVHlwZX0uICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259YDtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXlPZlVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0aWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPT09IDYpIHtcclxuXHRcdFx0cmVzdWx0QXJyYXkucHVzaChuZXcgU0VNKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKSkpO1xyXG5cdFx0fSBlbHNlIGlmIChhcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RoID4gNCkge1xyXG5cdFx0XHRhbGVydChg0LTQu9C40L3QsCDQvNCw0YHRgdC40LLQsCAke2FycmF5T2ZVc2VySW5wdXRbaV19ID0gJHthcnJheU9mVXNlcklucHV0W2ldLnNwbGl0KCcsJykubGVuZ3RofSDQstC80LXRgdGC0L4gNiBcXG4g0LTQsNC90L3Ri9C5INC80LDRgdGB0LjQsiDQvdC1INCx0YPQtNC10YIg0L7QsdGA0LDQsdC+0YLQsNC9YCk7XHJcblx0XHQgIH1cclxuXHR9XHJcblx0Y29uc29sZS5sb2cocmVzdWx0QXJyYXkpO1xyXG5cclxuXHRyZXN1bHRBcnJheS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRpZiAoYS5TRU1UeXBlID4gYi5TRU1UeXBlKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gcmVzdWx0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5PYmplY3RDb2xsZWN0O1xyXG4iLCJpbXBvcnQgJy4uL2Nzcy9lc3RpbWF0ZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlUm93IGZyb20gJy4vZm9yLXdvcmtzL2NyZWF0ZS1yb3cnO1xyXG5cclxuaW1wb3J0IG1haW5PYmplY3RDb2xsZWN0IGZyb20gJy4vZGF0YS9tYWluLW9iamVjdC1jb2xsZWN0JztcclxuXHJcbmltcG9ydCB3b3Jrc0RhdGFDb2xsZWN0IGZyb20gJy4vZm9yLXdvcmtzL3dvcmtzLWRhdGEnO1xyXG5cclxubGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG5sZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7IC8vICDQsiDRgtGA0LDQvdGI0LXQtVxyXG5sZXQgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7IC8vINC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LVcclxubGV0IHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAwO1xyXG5cclxubGV0IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG5sZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7IC8vICDQsiDRgtGA0LDQvdGI0LXQtVxyXG5sZXQgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7IC8vINC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LVcclxubGV0IHB1cmNoYXNlXzJ4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgPSAwO1xyXG5cclxubGV0IGZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGU7IC8vINC+0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRiSDQutCw0LHQtdC70Y9cclxuXHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcclxubGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMDtcclxubGV0IHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxuXHJcbmxldCB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDA7XHJcbmxldCB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAwOyAvLyDQsiDRgtGA0YPQsdC1XHJcbmxldCBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMDsgLy8g0LzRg9GE0YLQsCDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60LggNC4uLlxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAwO1xyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDA7XHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiA9IDA7IC8vINC80YPRhNGC0LAg0L3QsNGA0YPQttC90L7QuSDRg9GB0YLQsNC90L7QstC60LggMi4uLlxyXG5cclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSAwOyAvLyDQt9Cw0LbQuNC8INCX0J7Qn9CzLTJcclxuXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nID0gMDsgLy8g0L/QvtC70L7RgdCwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YtcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgPSAwOyAvLyDQutC+0LbRg9GFINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAxNzAwXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwID0gMDsgLy8g0LrQvtC20YPRhSDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgMjMwMFxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZyA9IDA7IC8vINC/0L7Qu9C+0YHQsCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQsdC+0LvRgtGDINC60L7RgNC/0YPRgdCwINCp0KPQrVxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCA9IDA7IC8vINGB0YLQsNC70Ywg0LrRgNGD0LPQu9Cw0Y9cclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgPSAwOyAvLyDRhdC+0LzRg9GCINCl0JotMVxyXG5cclxubGV0IGRpZ2dpbmdfdHJlbmNoZXMgPSAwOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbmxldCBncm91bmRfdW5kZXJsYXkgPSAwOyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxubGV0IGJhY2tmaWxsID0gMDsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcclxubGV0IGV4Y2F2YXRpb24gPSAwOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xyXG5sZXQgc29pbF9sZXZlbGluZyA9IDA7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG5sZXQgcHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlID0gMDsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXHJcbmxldCBwdXJjaGFzZV9jb25jcmV0ZSA9IDA7IC8vINCx0LXRgtC+0L1cclxubGV0IGluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlID0gMDsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbmxldCBkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcbmxldCBkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG5sZXQgZGlzbWFudGxpbmdfbWV0YWxfY29uc3RydWN0aW9uX2Zyb21fcHlsb24gPSAwOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40LlcclxubGV0IGRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxyXG5sZXQgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDQuLlxyXG5sZXQgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDIuLlxyXG5cclxuXHJcblxyXG5sZXQgdXNlcklucHV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5wdXRcIik7XHJcbnVzZXJJbnB1dCA9IG1haW5PYmplY3RDb2xsZWN0KHVzZXJJbnB1dCk7XHJcbmNvbnNvbGUubG9nKHVzZXJJbnB1dCwgJy0gdXNlcklucHV0Jyk7XHJcblxyXG5cclxuXHJcbmxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0RGF0YVwiKSk7XHJcbmNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHVzZXJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgLy8gY29uc29sZS5sb2cod29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpO1xyXG4gICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gICAgZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuICAgIHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gICAgd2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICB3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgICBkaWdnaW5nX3RyZW5jaGVzICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaWdnaW5nX3RyZW5jaGVzICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBncm91bmRfdW5kZXJsYXkgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmdyb3VuZF91bmRlcmxheSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgYmFja2ZpbGwgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmJhY2tmaWxsICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBleGNhdmF0aW9uICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5leGNhdmF0aW9uICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBzb2lsX2xldmVsaW5nICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5zb2lsX2xldmVsaW5nICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBwdXJjaGFzZV9jcnVzaGVkX3N0b25lX3NhbmRfZ3JhdmVsX21peHR1cmUgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgcHVyY2hhc2VfY29uY3JldGUgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX2NvbmNyZXRlICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgICBkaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gICAgZGlzbWFudGxpbmdfY2xhbXBfWk9QICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19jbGFtcF9aT1AgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICAgIGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgICBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKSlcclxufVxyXG5cclxuXHJcbmNvbnN0IGE0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuYTRkaXYuY2xhc3NMaXN0LmFkZCgnYTRfZGl2Jyk7XHJcblxyXG5jb25zdCBhNGRpdl9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbmE0ZGl2X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2E0X2Rpdl9mcmFtZScpO1xyXG5cclxuY29uc3Qgb3JkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VzdGltYXRlLXRhYmxlJyk7XHJcbm9yZGVyV3JhcHBlci5hcHBlbmQoYTRkaXYpO1xyXG5hNGRpdi5hcHBlbmQoYTRkaXZfZnJhbWUpO1xyXG5cclxuXHJcblxyXG5sZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVEFCTEVcIik7XHJcbnRhYmxlLmNsYXNzTGlzdC5hZGQoJ3dvcmtzX3RhYmxlJyk7XHJcblxyXG5sZXQgYm9keU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRCT0RZXCIpO1xyXG50YWJsZS5hcHBlbmQoYm9keU9mV29ya1RhYmxlKTtcclxuXHJcbi8vINCb0JXQk9CV0J3QlNCQINCi0JDQkdCb0JjQptCrXHJcbi8vINGB0YLRgNC+0LrQuFxyXG5sZXQgcm93MU9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5ib2R5T2ZXb3JrVGFibGUuYXBwZW5kKHJvdzFPZldvcmtUYWJsZSk7XHJcbi8vINGP0YfQtdC50LrQuFxyXG5sZXQgdGQxXzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxubGV0IHRkMV8yT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbmxldCB0ZDFfM09mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4vLyDQvNC10YHRgtCwINGP0YfQtdC10Lpcclxucm93MU9mV29ya1RhYmxlLmFwcGVuZCh0ZDFfMU9mV29ya1RhYmxlLCB0ZDFfMk9mV29ya1RhYmxlLCB0ZDFfM09mV29ya1RhYmxlKTtcclxuLy8g0J3QsNC/0L7Qu9C90Y/QtdC8INGP0YfQtdC50LrQuFxyXG50ZDFfMU9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Cd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRgNCw0LHQvtGCJztcclxudGQxXzJPZldvcmtUYWJsZS50ZXh0Q29udGVudCA9ICfQldC0LtC40LfQvC4nO1xyXG50ZDFfM09mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JztcclxuXHJcbi8vIGxldCBjb2xsZWN0ZWREYXRhRnJvbVNlbSA9IHdvcmtzRGF0YUNvbGxlY3Qoc2VtKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGNvbGxlY3RlZERhdGFGcm9tU2VtKTtcclxuXHJcblxyXG5hNGRpdl9mcmFtZS5hcHBlbmQodGFibGUpO1xyXG5cclxuXHJcbmlmIChyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUgKNGBINC60YDQtdC/0LvQtdC90LjQtdC8INGF0L7QvNGD0YLQsNC80Lgg0KXQmi0xKScsICfQvCcsXHJcbiAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MjMwMCknLCAn0LwnLFxyXG4gICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00udG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnLCAn0LwnLFxyXG4gICAgICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScsICfQvCcsXHJcbiAgICAgICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQpIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCy0YHQtdCz0L4g0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcclxuICAgICAgICBwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1ICjRgSDQutGA0LXQv9C70LXQvdC40LXQvCDRhdC+0LzRg9GC0LDQvNC4INCl0JotMSknLCAn0LwnLFxyXG4gICAgICAgIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTIzMDApJywgJ9C8JyxcclxuICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2gpIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgICAgICByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnLCAn0LwnLFxyXG4gICAgICAgIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50KSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQstGB0LXQs9C+INGBINC90LDQtNCx0LDQstC60L7QuSAyJScsICfQvCcsXHJcbiAgICAgICAgcHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUpIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Ce0YLRiNGD0YDRhNC+0LLQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjycsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICBmaW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0xNzAwKScsICfQvCcsXHJcbiAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0xNzAwKScsICfQvCcsXHJcbiAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICAgICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgICAgICByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAod2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INC/0L4g0LrQvtC90YHRgtGA0YPQutGG0LjRj9C8JywgJ9C8JyxcclxuICAgICAgICB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucy50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0LIg0YLRgNGD0LHQtScsICfQvCcsXHJcbiAgICAgICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC/0YDQvtCy0L7QtNCwINCh0JjQny000LggMtGFMTYg0YEg0L3QsNC00LHQsNCy0LrQvtC5IDIlJywgJ9C8JyxcclxuICAgICAgICBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgNNCf0JHQmtCS0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80KSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80LnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMikge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQstC90YPRgtGA0LXQvdC90LXQuSDRg9GB0YLQsNC90L7QstC60Lgg0YLQuNC/0LAgMtCf0JHQmtCS0YLRgtC/ICgxNi0yNSktMScsICfRiNGCLicsXHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC80YPRhNGCINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDLQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yJywgJ9GI0YIuJyxcclxuICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZykge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRiycsICfRiNGCLicsXHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZy50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDApIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LrQvtC20YPRhdCwINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0xNzAwKScsICfRiNGCLicsXHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDApIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LrQvtC20YPRhdCwINC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0yMzAwKScsICfRiNGCLicsXHJcbiAgICAgICAgcHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcpIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTIyMDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LHQvtC70YLRgyDQt9Cw0LfQtdC80LvQtdC90LjRjyDQutC+0YDQv9GD0YHQsCDQqdCj0K0nLCAn0YjRgi4nLFxyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INGB0YLQsNC70Ywg0LrRgNGD0LPQu9Cw0Y8gZDEwINC80Lwg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0L/QvtC70L7RgdGLIDTRhTEyINC6INC30LDQt9C10LzQu9GP0Y7RidC10LzRgyDQutC+0L3RgtGD0YDRgyDQvtC/0L7RgNGLJywgJ9GI0YIuJyxcclxuICAgICAgICBwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRhdC+0LzRg9GC0L7QsiDQpdCaLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChleGNhdmF0aW9uKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQoNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRgycsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICBleGNhdmF0aW9uLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAoc29pbF9sZXZlbGluZykge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KDQsNC30YDQsNCy0L3QuNCy0LDQvdC40LUg0LLRi9GC0LXRgdC90LXQvdC90L7Qs9C+INCz0YDRg9C90YLQsCDQstGA0YPRh9C90YPRjicsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICBzb2lsX2xldmVsaW5nLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90L7QuSDRgdC80LXRgdC4ICjQqdCj0K0pJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgIHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX2NvbmNyZXRlKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LHQtdGC0L7QvdCwINC60LvQsNGB0YHQsCDQoTE2LzIwIEYxMDAnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgcHVyY2hhc2VfY29uY3JldGUudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C40YfQtdGB0LrQuNGFINC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0LIg0YLQtdC70LUg0LHQtdGC0L7QvdCwJywgJ9C60LMnLFxyXG4gICAgICAgIGluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAoZGlnZ2luZ190cmVuY2hlcykge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuCDQsiDRgNGD0YfQvdGD0Y4nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICAgICAgZGlnZ2luZ190cmVuY2hlcy50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGdyb3VuZF91bmRlcmxheSkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQv9GA0L7RgdC10Y/QvdC90L7QuSDQt9C10LzQu9C4JywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgICAgIGdyb3VuZF91bmRlcmxheS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGJhY2tmaWxsKSB7XHJcbiAgICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQl9Cw0YHRi9C/0LrQsCDQs9GA0YPQvdGC0L7QvCcsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgICAgICBiYWNrZmlsbC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24pIHtcclxuICAgIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0LrQsNCx0LXQu9GPINGBINC+0L/QvtGA0Ysg0LzQsNGB0YHQvtC5IDEg0Lwg0LTQviAyLdGFINC60LMnLCAn0LwnLFxyXG4gICAgICAgIGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24udG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbikge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDRg9Cz0L7Qu9C60LAg0YEg0L7Qv9C+0YDRiycsICfQutCzJyxcclxuICAgICAgICBkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX2NsYW1wX1pPUCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yJywgJ9GI0YIuJyxcclxuICAgICAgICBkaXNtYW50bGluZ19jbGFtcF9aT1AudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbikge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0YEg0L7Qv9C+0YDRiycsICfQutCzJyxcclxuICAgICAgICBkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgIGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMikge1xyXG4gICAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JTQtdC80L7QvdGC0LDQtiDQvNGD0YTRgtGLINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDLQn9CR0JrQndGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgICAgIGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuIiwibGV0IGNyZWF0ZVJvdyA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBtZWFzdXJlLCB2YWx1ZSkge1xyXG4vLyBsZXQgY3JlYXRlUm93ID0gZnVuY3Rpb24oZGVzY3JpcHRpb24sIG1lYXN1cmUsIHZhbHVlLCBmb3JMb25nRGVzY3JpcHRpb24pIHtcclxuXHJcblxyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG4gICAgLy8g0Y/Rh9C10LnQutC4XHJcbiAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBjb25zdCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcbiAgICBjb25zdCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVERcIik7XHJcblxyXG4gICAgdGQxLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICB0ZDIuaW5uZXJIVE1MID0gbWVhc3VyZTtcclxuICAgIHRkMy50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG5cclxuICAgIHJvdy5hcHBlbmQodGQxLCB0ZDIsIHRkMyk7XHJcblxyXG4gICAgLy8gaWYgKGZvckxvbmdEZXNjcmlwdGlvbikge1xyXG4gICAgLy8gICAgIGNvbnN0IHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiVFJcIik7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IHRkMV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8gICAgIGNvbnN0IHRkMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgLy8gICAgIGNvbnN0IHRkM18yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuICAgIC8vICAgICB0ZDFfMi50ZXh0Q29udGVudCA9IGZvckxvbmdEZXNjcmlwdGlvbjtcclxuICAgIC8vICAgICByb3cyLmFwcGVuZCh0ZDFfMiwgdGQyXzIsIHRkM18yKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gcm93O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3c7XHJcbiIsImxldCB3b3Jrc0RhdGFDb2xsZWN0ID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gU0VNV09SS1Moc2VtKSB7XHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GEXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5jb3VudGVyQ291bnRJblNFTSAhPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDIuMztcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5jb3VudGVyQ291bnRJblNFTSA9PT0gMiAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA2Ljk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAxNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfNHgxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKyB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpICogMS4wMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4ICjQtdGB0YLRjCAx0YUx0YQg0LjQu9C4IDLRhTHRhCkg0L3Qviwg0LXRgdC70Lgg0Y3RgtC+IDMtMi0yLCDRgtC+INGC0L7Qu9GM0LrQviAx0YTQmiDQuNC70Lgg0JrQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJ9C60LonICYmXHJcbiAgICAgICAgICAgICAgICBzZW0uaW5wdXRGcm9tU2VtICE9PSAnMdGE0LonKSkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSA3LjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAyLjM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDMuNDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA2Ljk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAxNTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKyB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpICogMS4wMjtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSwg0Lgg0LXRgdGC0Ywg0JpcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbS5pbmNsdWRlcygn0LonKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlID0gMC41NjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSA9IDAuMjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDPRhNCaIC4uLlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnXHJcbiAgICAgICAgICAgICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykgJiYgIXNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJzHRhNC6JykpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAzLjQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAxLjc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmXHJcbiAgICAgICAgICAgIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJyAmJlxyXG4gICAgICAgICAgICBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQuicpICYmICFzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCcx0YTQuicpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSA0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSwg0Lgg0LXRgdGC0YwgMdGE0JpcclxuICAgICAgICBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKVxyXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDMuNDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDEuNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSwg0Lgg0LXRgdGC0YwgMdGE0JpcclxuICAgICAgICBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKVxyXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSkpXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gNDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LVcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpIHtcclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDYuNDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNS40O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSA2LjE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNS4xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDM4LjQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMyLjQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDM2LjY7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMzAuNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA3LjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMzAuNTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA0LjU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE5LjI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE2LjI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE4LjM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTUuMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA2O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS42O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyMS42O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNC40O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIwLjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMztcclxuICAgICAgICAgICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0LItMTEwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuODtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTAuODtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuMjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxMC4yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zICtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlKSAqIDEuMDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSDQuCDQtdGB0YLRjCAz0YTQmiAuLi4g0LjQu9C4INC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxyXG4gICAgICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiZcclxuICAgICAgICAgICAgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiAhc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GEXHJcbiAgICAgICAgLy8g0LrQsNC6INC/0LXRgNCy0YvQtSA1INGB0YLRgNC+0LpcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XHJcbiAgICAgICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSDQuCDQtdGB0YLRjCAx0YTQmiAuLi4g0LjQu9C4INC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDHRhFxyXG4gICAgICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiZcclxuICAgICAgICAgICAgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzInICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpKSB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzInKVxyXG4gICAgICAgICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJykgfHxcclxuICAgICAgICAgICAgICAgIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSDQuCAo0Y3RgtC+INGH0LjRgdGC0L4gMdGEINC40LvQuCDRjdGC0L4gMy0yLTIg0YEgMdGE0JIpXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmXHJcbiAgICAgICAgICAgICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScpIHx8XHJcbiAgICAgICAgICAgICAgICAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSlcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmXHJcbiAgICAgICAgICAgICAgICAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfMiA9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QlNCb0K8g0JLQodCV0KUg0KnQo9CtXHJcbiAgICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHJcblxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICczJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA2O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JyB8fFxyXG4gICAgICAgICAgICAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0L7Qv9C+0YDQtSAo0LrQsNC6INGB0YLRgNC+0LrQuCAxOS0yMSlcclxuICAgICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjQwMF9mb3JfZ3JvdW5kaW5nID0gMTtcclxuICAgICAgICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9C10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMINCaXHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnICYmXHJcbiAgICAgICAgICAgIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQutC+0LbRg9GF0LAg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTE3MDApXHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1XHJcbiAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgPSAzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leGNhdmF0aW9uID0gMC4xMzsgLy8g0YDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YNcclxuICAgICAgICAgICAgdGhpcy5zb2lsX2xldmVsaW5nID0gMC4xMzsgLy8g0YDQsNC30YDQsNCy0L3QuNCy0LDQvdC40LUg0LPRgNGD0L3RgtCwXHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlID0gMC4wNzsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXHJcbiAgICAgICAgICAgIHRoaXMucHVyY2hhc2VfY29uY3JldGUgPSAwLjA1OyAvLyDQsdC10YLQvtC9XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgPSA0LjA2OyAvLyDRg9GB0YLQsNC90L7QstC60LAg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINCx0LXRgtC+0L3QtVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbM10gPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZ2dpbmdfdHJlbmNoZXMgPSAwLjU0OyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZF91bmRlcmxheSA9IDAuMTg7IC8vINGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0LfQtdC80LvQuFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDAuMzY7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpZ2dpbmdfdHJlbmNoZXMgPSAwLjcyOyAvLyDRgNGL0YLRjNC1INGC0YDQsNC90YjQtdC4XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VuZF91bmRlcmxheSA9IDAuMjQ7IC8vINGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0LfQtdC80LvQuFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDAuNDg7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XHRcdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhjYXZhdGlvbiA9IDA7IC8vINGA0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDXHJcbiAgICAgICAgICAgIHRoaXMuc29pbF9sZXZlbGluZyA9IDA7IC8vINGA0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCz0YDRg9C90YLQsFxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDA7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxyXG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlX2NvbmNyZXRlID0gMDsgLy8g0LHQtdGC0L7QvVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlID0gMDsgLy8g0YPRgdGC0LDQvdC+0LLQutCwINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuSDQsiDQsdC10YLQvtC90LVcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlnZ2luZ190cmVuY2hlcyA9IDA7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRfdW5kZXJsYXkgPSAwOyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcclxuICAgICAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDA7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINC10YHQu9C4INC10YHRgtGMINCaXHJcbiAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSAxNjsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSA4O1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uID0gMTUuODQ7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiA9IDExLjE3OyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDRg9Cz0L7Qu9C60LBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiA9IDIuMDE7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC80LXRgtCw0LvQu9C+0LrQvtC90YHRgtGA0YPQutGG0LjQuVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSA4OyAvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gNjtcdC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlx0XHRcdFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSAyO1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXHRcdFx0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDQ7XHQvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcdFx0XHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQtdGB0YLRjCAz0YTQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScgJiZcclxuICAgICAgICAgICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JylcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgPSAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QtdGB0LvQuCDQtdGB0YLRjCAx0YTQmlxyXG4gICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicgJiZcclxuICAgICAgICAgICAgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JylcclxuICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhuZXcgU0VNV09SS1MoaW5wdXQpKTtcclxuICAgIHJldHVybiBuZXcgU0VNV09SS1MoaW5wdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3b3Jrc0RhdGFDb2xsZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=