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
/* eslint-disable no-useless-concat */

/* eslint-disable max-len */

/* eslint-disable linebreak-style */

/* eslint-disable camelcase */




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

var purchase_NShAL = 0; // Приобретение и монтаж наконечника НШАЛ 16-14  на жилу СИП-4и

var purchase_n_montage_TUT = 0; // Пиобретение и монтаж термоусаживаемой трубки ТУТ 35/15

var purchase_PKV = 0; // Приобретение пасты кварце-вазилиновой (ПКВ)

var zadelka_SIP = 0; // Заделка провода СИП-4и

var userInput = localStorage.getItem('userInput');
userInput = Object(_data_main_object_collect__WEBPACK_IMPORTED_MODULE_2__["default"])(userInput);
console.log(userInput, '- userInput');
var projectData = JSON.parse(localStorage.getItem('projectData'));
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
  purchase_NShAL += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_NShAL * userInput[i].countOfSEM;
  purchase_n_montage_TUT += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_n_montage_TUT * userInput[i].countOfSEM;
  purchase_PKV += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).purchase_PKV * userInput[i].countOfSEM;
  zadelka_SIP += Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]).zadelka_SIP * userInput[i].countOfSEM;
  console.log(Object(_for_works_works_data__WEBPACK_IMPORTED_MODULE_3__["default"])(userInput[i]));
}

var a4div = document.createElement('DIV');
a4div.classList.add('a4_div');
var a4div_frame = document.createElement('DIV');
a4div_frame.classList.add('a4_div_frame');
var orderWrapper = document.getElementById('estimate-table');
orderWrapper.append(a4div);
a4div.append(a4div_frame);
var table = document.createElement('TABLE');
table.classList.add('works_table');
var bodyOfWorkTable = document.createElement('TBODY');
table.append(bodyOfWorkTable); // ЛЕГЕНДА ТАБЛИЦЫ
// строки

var row1OfWorkTable = document.createElement('TR');
bodyOfWorkTable.append(row1OfWorkTable); // ячейки

var td1_1OfWorkTable = document.createElement('TD');
var td1_2OfWorkTable = document.createElement('TD');
var td1_3OfWorkTable = document.createElement('TD'); // места ячеек

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

if (purchase_NShAL) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение и монтаж наконечника НШАЛ 16-14 на жилу СИП-4и', 'шт.', purchase_NShAL.toFixed(2)));
}

if (purchase_n_montage_TUT) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Пиобретение и монтаж термоусаживаемой трубки ТУТ 35/15', 'м', purchase_n_montage_TUT.toFixed(2)));
}

if (purchase_PKV) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Приобретение пасты кварце-вазилиновой (ПКВ)', 'г', purchase_PKV.toFixed(2)));
}

if (zadelka_SIP) {
  table.append(Object(_for_works_create_row__WEBPACK_IMPORTED_MODULE_1__["default"])('Заделка провода СИП-4и', 'шт.', zadelka_SIP.toFixed(2)));
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZXN0aW1hdGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZXN0aW1hdGUuY3NzP2EzMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3MvZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zY3JpcHRzL2VzdGltYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9mb3Itd29ya3MvY3JlYXRlLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZm9yLXdvcmtzL3dvcmtzLWRhdGEuanMiXSwibmFtZXMiOlsibWFpbk9iamVjdENvbGxlY3QiLCJzdHIiLCJhcnJheU9mVXNlcklucHV0Iiwic3BsaXQiLCJyZXN1bHRBcnJheSIsImxlZ2VuZEFycmF5IiwiU0VNIiwiYXJyIiwiY291bnRPZlNFTSIsImluZGV4T2YiLCJicmVha2VyMVZhbHVlIiwiYnJlYWtlcjJWYWx1ZSIsIlNFTVR5cGUiLCJjb3VudGVyQ291bnRJblNFTSIsImxlbmd0aCIsImlucHV0RnJvbVNlbSIsInRvTG93ZXJDYXNlIiwicGlsbGFyVHlwZSIsInBoYXNlMVZhbHVlIiwicGhhc2UyVmFsdWUiLCJvdXRCcmVha2VyMSIsIm91dEJyZWFrZXIyIiwiZGVzY3JpcHRpb24iLCJhbGVydCIsImluc3RhbGxhdGlvbiIsImZ1bGxEZWNyaXB0aW9uIiwiZGVjcmlwdGlvbkZvcldvcmtzIiwiaSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic29ydCIsImEiLCJiIiwicm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCIsInJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50Iiwicm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCIsInJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50IiwiZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00iLCJyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCIsInJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQiLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNIiwicm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2giLCJyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kIiwid2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMiLCJ3aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUiLCJwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50IiwicHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCIsInB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80IiwicHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiIsInB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yIiwicHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCIsInB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmciLCJwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwIiwicHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCIsInB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmciLCJwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwIiwicHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSIsImRpZ2dpbmdfdHJlbmNoZXMiLCJncm91bmRfdW5kZXJsYXkiLCJiYWNrZmlsbCIsImV4Y2F2YXRpb24iLCJzb2lsX2xldmVsaW5nIiwicHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlIiwicHVyY2hhc2VfY29uY3JldGUiLCJpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSIsImRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24iLCJkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiIsImRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uIiwiZGlzbWFudGxpbmdfY2xhbXBfWk9QIiwiZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80IiwiZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yIiwicHVyY2hhc2VfTlNoQUwiLCJwdXJjaGFzZV9uX21vbnRhZ2VfVFVUIiwicHVyY2hhc2VfUEtWIiwiemFkZWxrYV9TSVAiLCJ1c2VySW5wdXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHJvamVjdERhdGEiLCJKU09OIiwicGFyc2UiLCJ3b3Jrc0RhdGFDb2xsZWN0IiwiYTRkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhNGRpdl9mcmFtZSIsIm9yZGVyV3JhcHBlciIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kIiwidGFibGUiLCJib2R5T2ZXb3JrVGFibGUiLCJyb3cxT2ZXb3JrVGFibGUiLCJ0ZDFfMU9mV29ya1RhYmxlIiwidGQxXzJPZldvcmtUYWJsZSIsInRkMV8zT2ZXb3JrVGFibGUiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZVJvdyIsInRvRml4ZWQiLCJtZWFzdXJlIiwidmFsdWUiLCJyb3ciLCJ0ZDEiLCJ0ZDIiLCJ0ZDMiLCJpbm5lckhUTUwiLCJpbnB1dCIsIlNFTVdPUktTIiwic2VtIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QUwsR0FBbUMsQ0FBbkM7QUFDRDtBQUNGLEtBUkQsTUFRTztBQUNMLFdBQUtBLDJCQUFMLEdBQW1DLENBQW5DO0FBQ0Q7QUFDRixHQXhidUMsQ0F5YnhDOzs7QUFDQSxTQUFPLElBQUlzQyxRQUFKLENBQWFELEtBQWIsQ0FBUDtBQUNELENBM2JEOztBQTZiZTFCLCtFQUFmLEUiLCJmaWxlIjoiZXN0aW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGF5b3V0L3NjcmlwdHMvZXN0aW1hdGUuanNcIik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vZm9udHMvR09TVCAyLjMwNC04MSB0eXBlIEEudHRmXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQSc7IFxcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IFxcclxcbn1cXHJcXG5AbWVkaWEgcHJpbnQge1xcclxcbiAgICAvKiDQt9C00LXRgdGMINCx0YPQtNGD0YIg0YHRgtC40LvQuCDQtNC70Y8g0L/QtdGH0LDRgtC4ICovXFxyXFxuXFx0aGVhZGVyLCBcXHJcXG5cXHQubWFpbi10YWJsZSxcXHJcXG5cXHQuY291bnRlcnNfbl9icmVha2Vyc19jb250YWluZXIsXFxyXFxuXFx0Zm9vdGVyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuXFx0fVxcclxcblxcdC5hNF9kaXYge1xcclxcblxcdFxcdHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cyAhaW1wb3J0YW50O1xcclxcblxcdFxcdGJyZWFrLWFmdGVyOiBhbHdheXMgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRmbG9hdDogbm9uZSAhaW1wb3J0YW50OyBcXHJcXG5cXHRcXHQvKmJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAqL1xcclxcblxcdH0gXFxyXFxuXFxyXFxuXFxyXFxuXFx0XFxyXFxuXFx0QHBhZ2Uge1xcclxcblxcdFxcdHNpemU6IGF1dG87ICBcXHJcXG5cXHRcXHRtYXJnaW46IDA7ICBcXHJcXG5cXHR9XFxyXFxuXFxyXFxufVxcclxcbioge1xcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrOyBcXHJcXG59XFxyXFxuaDYge1xcclxcblxcdGhlaWdodDogMXB4O1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMjEwbW07XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdC8qIGJhY2tncm91bmQ6IHVybCgnL2ltZy8wMDAxLmpwZycpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG5cXHRjb2xvcjogIHdoaXRlO1xcclxcbn1cXHJcXG4vKiDQmtCd0J7Qn9Ca0JggKi9cXHJcXG4uYnRuIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDogIzAwOEI4QjtcXHJcXG5cXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRtYXJnaW46IDVweCAwO1xcclxcblxcdGZvbnQtc2l6ZTogMjFweDs7XFxyXFxufVxcclxcbi8qIC5idG46bGFzdC1jaGlsZHtcXHJcXG5cXHRtYXJnaW46IDIwcHggMDtcXHJcXG59ICovXFxyXFxuLmJ0bjpob3ZlciwgLmlucHV0LWJ0bjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDpcXHQjMDA4QzMzO1xcclxcblxcdGJvcmRlcjogIzBiNjYwMyBzb2xpZCAycHg7XFxyXFxufVxcclxcblxcclxcbi8q0JrQntCd0KLQldCZ0J3QldCg0Ksg0JTQm9CvINCe0J/QoNCe0KHQndCr0KUqL1xcclxcbi5vcmRlcl9jb250YWluZXIge1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxufVxcclxcbi5hNF9kaXYge1xcclxcblxcdGhlaWdodDogMjk2LjVtbTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDogI2QwZWNlY1xcclxcbn1cXHJcXG4uYTRfZGl2X2ZyYW1lIHtcXHJcXG5cXHRmb250LXNpemU6IDExLjVwdDtcXHJcXG5cXHRoZWlnaHQ6IDI4N21tO1xcclxcblxcdHdpZHRoOiAxODVtbTtcXHJcXG5cXHRsZWZ0OiAyMG1tO1xcclxcblxcdGJvdHRvbTogNW1tO1xcclxcblxcdGJvcmRlcjogMC42bW0gc29saWQgYmxhY2s7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcdFxcclxcblxcdGRpc3BsYXk6IGJsb2NrOyAvKmRlbCovXFxyXFxufVxcclxcblxcclxcbi8q0KLQkNCR0JvQmNCm0KssINC+0LHRidC40LUg0YHQstC+0LnRgdGC0LLQsCovXFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcbnRkLCB0aCB7XFxyXFxuXFx0Ym9yZGVyOiAwLjI1bW0gc29saWQgIzAwMDtcXHJcXG59XFxyXFxudGJvZHkge1xcclxcblxcdGJhY2tncm91bmQ6ICNlM2Y4ZWE7XFxyXFxufVxcclxcbnRyOm50aC1jaGlsZCgybiksIHRoZWFkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbn1cXHJcXG50cjpudGgtY2hpbGQoMm4tMSksIHRoZWFkIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjZTNmOGVhO1xcclxcbn1cXHJcXG5cXHJcXG4vKtCi0JDQkdCb0JjQptCQKi9cXHJcXG4ud29ya3NfdGFibGUge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4ud29ya3NfdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG5cXHR3aWR0aDogMTUwbW07XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRib3JkZXItbGVmdDogbm9uZTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDFtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgybisxKSB7XFxyXFxuXFx0aGVpZ2h0OiA1LjVtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxyXFxuXFx0d2lkdGg6IDEwbW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1sZWZ0OiAjMDAwIHNvbGlkIDAuNm1tO1xcclxcblxcdGJvcmRlci1yaWdodDogIzAwMCBzb2xpZCAwLjZtbTtcXHJcXG59XFxyXFxuLndvcmtzX3RhYmxlIHRkOmxhc3QtY2hpbGQge1xcclxcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcdGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ud29ya3NfdGFibGUgdHI6Zmlyc3QtY2hpbGQgdGQge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDhtbTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlci1ib3R0b206ICMwMDAgc29saWQgMC42bW07XFxyXFxuXFx0Ym9yZGVyLXRvcDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZ25hdHVyZXtcXHJcXG5cXHRtYXgtd2lkdGg6IDY1cHg7XFxyXFxuXFx0bWF4LWhlaWdodDogMzNweDtcXHJcXG5cXHRib3R0b206IC03cHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uc2lnbmF0dXJlX2Jvc3Mge1xcclxcblxcdG1heC13aWR0aDogNjVweDtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzM3B4O1xcclxcblxcdGJvdHRvbTogMTVweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5zaWduYXR1cmVfYm9zczIge1xcclxcblxcdG1heC13aWR0aDogNjVweDtcXHJcXG5cXHRtYXgtaGVpZ2h0OiAzM3B4O1xcclxcblxcdGJvdHRvbTogMzNweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZXN0aW1hdGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGZhZWFmZDQ5NzNmODg5MjAwNzRlNDZlNTU1YjEyZmMudHRmXCI7IiwiZnVuY3Rpb24gbWFpbk9iamVjdENvbGxlY3Qoc3RyKSB7XHJcblx0bGV0IGFycmF5T2ZVc2VySW5wdXQgPSBzdHIuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcblx0bGV0IGxlZ2VuZEFycmF5ID0gYXJyYXlPZlVzZXJJbnB1dFswXS5zcGxpdCgnLCcpO1xyXG5cclxuXHRjbGFzcyBTRU0ge1xyXG5cdFx0Y29uc3RydWN0b3IoYXJyKSB7XHJcblxyXG5cdFx0XHR0aGlzLmNvdW50T2ZTRU0gPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JyldO1xyXG5cdFx0XHR0aGlzLmJyZWFrZXIxVmFsdWUgPSArYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ0nQndCe0Jxf0JDQkjEnKV0uc3BsaXQoJyAnKVswXTtcclxuXHRcdFx0dGhpcy5icmVha2VyMlZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIyJyldLnNwbGl0KCcgJylbMF0gfHwgbnVsbDtcclxuXHRcdFx0dGhpcy5TRU1UeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QqdCj0K0nKV07XHJcblx0XHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPSArdGhpcy5TRU1UeXBlLnNwbGl0KCctJylbM107XHJcblxyXG5cdFx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMVxyXG5cdFx0XHRcdCYmIGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQsic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QktCS0J7QlNCQJyldLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9ICfQstCyJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnBpbGxhclR5cGUgPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9Ce0J/QntCg0KsnKV0udG9Mb3dlckNhc2UoKSB8fCAn0YHQsi05NSc7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJykge1xyXG5cdFx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDM7XHJcblx0XHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDM7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICcxJ1xyXG5cdFx0XHRcdCYmIHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0XHR0aGlzLnBoYXNlMlZhbHVlID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PT0gJzInXHJcblx0XHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoaXMucGhhc2UxVmFsdWUgPSAzO1xyXG5cdFx0XHRcdHRoaXMucGhhc2UyVmFsdWUgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0XHQmJiB0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5waGFzZTFWYWx1ZSA9IDE7XHJcblx0XHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMub3V0QnJlYWtlcjEgPSBgJHt0aGlzLnBoYXNlMVZhbHVlfSAtICR7dGhpcy5icmVha2VyMVZhbHVlfWA7XHJcblx0XHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIgP1xyXG5cdFx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBgJHt0aGlzLnBoYXNlMlZhbHVlfSAtICR7dGhpcy5icmVha2VyMlZhbHVlfWAgOlxyXG5cdFx0XHRcdHRoaXMub3V0QnJlYWtlcjIgPSBudWxsO1xyXG5cclxuXHJcblx0XHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LInKSB7XHJcblx0XHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSAmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C6Jykge1xyXG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQsNGPINC70LjQvdC40Y86INC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiAodGhpcy5pbnB1dEZyb21TZW0gPT09ICfQuicpIHx8ICh0aGlzLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInKSB8fCAodGhpcy5pbnB1dEZyb21TZW0gPT09ICfQstC6JykpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdCw0Y8g0Lgg0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdGL0LUuJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQstC+0LfQtNGD0YjQvdCw0Y8sIDHRhCAtINC60LDQsdC10LvRjNC90LDRjy4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xyXG5cdFx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6IDPRhCAtINC60LDQsdC10LvRjNC90LDRjywgMdGEIC0g0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcclxuXHRcdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQstC+0LfQtNGD0YjQvdGL0LUuJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhbGVydChgJHt0aGlzLmlucHV0RnJvbVNlbX0g0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiAke3RoaXMuU0VNVHlwZX0sINC/0LXRgNC10L/RgNC+0LLQtdGA0YzRgtC1INCy0LLQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1YCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0LItOTUnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItOTUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0JItMTEwJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzEnICYmIHRoaXMucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQvtC/0L7RgNC1INCh0KItMTA4LjYnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMScgJiYgdGhpcy5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQoi0xMDguNyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcyJykge1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzRdID09PSAnMycpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINCy0L3QtdGI0L3QtdC5INGB0YLQtdC90LUg0LfQtNCw0L3QuNGPJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzQnKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsYXRpb24gPSAn0L3QsCDQttC10LvQtdC30L7QsdC10YLQvtC90L3QvtC5INC/0YDQuNGB0YLQsNCy0LrQtSDQn9CiNDMtMic7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5mdWxsRGVjcmlwdGlvbiA9IGAke3RoaXMuU0VNVHlwZX0gKCR7dGhpcy5icmVha2VyMVZhbHVlfSDQkCkuICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259LiDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCYDtcclxuXHRcdFx0XHR0aGlzLmRlY3JpcHRpb25Gb3JXb3JrcyA9IGAke3RoaXMuU0VNVHlwZX0uICR7dGhpcy5kZXNjcmlwdGlvbn0g0KPRgdGC0LDQvdC+0LLQutCwICR7dGhpcy5pbnN0YWxsYXRpb259YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyKSB7XHJcblx0XHRcdFx0dGhpcy5mdWxsRGVjcmlwdGlvbiA9IGAke3RoaXMuU0VNVHlwZX0gKCR7dGhpcy5icmVha2VyMVZhbHVlfSDQkDsgJHt0aGlzLmJyZWFrZXIyVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0XHRcdHRoaXMuZGVjcmlwdGlvbkZvcldvcmtzID0gYCR7dGhpcy5TRU1UeXBlfS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn1gO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheU9mVXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAoYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpLmxlbmd0aCA9PT0gNikge1xyXG5cdFx0XHRyZXN1bHRBcnJheS5wdXNoKG5ldyBTRU0oYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpKSk7XHJcblx0XHR9IGVsc2UgaWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPiA0KSB7XHJcblx0XHRcdGFsZXJ0KGDQtNC70LjQvdCwINC80LDRgdGB0LjQstCwICR7YXJyYXlPZlVzZXJJbnB1dFtpXX0gPSAke2FycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGh9INCy0LzQtdGB0YLQviA2IFxcbiDQtNCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyINC90LUg0LHRg9C00LXRgiDQvtCx0YDQsNCx0L7RgtCw0L1gKTtcclxuXHRcdCAgfVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhyZXN1bHRBcnJheSk7XHJcblxyXG5cdHJlc3VsdEFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGlmIChhLlNFTVR5cGUgPiBiLlNFTVR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbk9iamVjdENvbGxlY3Q7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtY29uY2F0ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG5pbXBvcnQgJy4uL2Nzcy9lc3RpbWF0ZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlUm93IGZyb20gJy4vZm9yLXdvcmtzL2NyZWF0ZS1yb3cnO1xyXG5pbXBvcnQgbWFpbk9iamVjdENvbGxlY3QgZnJvbSAnLi9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QnO1xyXG5pbXBvcnQgd29ya3NEYXRhQ29sbGVjdCBmcm9tICcuL2Zvci13b3Jrcy93b3Jrcy1kYXRhJztcclxuXHJcbmxldCByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMDtcclxubGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG5sZXQgcm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAwOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxubGV0IHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbmxldCBwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuXHJcbmxldCByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMDtcclxubGV0IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG5sZXQgcm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAwOyAvLyAg0LIg0YLRgNCw0L3RiNC10LVcclxubGV0IHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwOyAvLyDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1XHJcbmxldCBwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcclxuXHJcbmxldCBmaW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlOyAvLyDQvtGC0YjRg9GA0YTQvtCy0LrQsCDRgdGD0Ykg0LrQsNCx0LXQu9GPXHJcblxyXG5sZXQgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XHJcbmxldCByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcclxubGV0IHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAwO1xyXG5sZXQgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDA7XHJcblxyXG5sZXQgd2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAwO1xyXG5sZXQgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMDsgLy8g0LIg0YLRgNGD0LHQtVxyXG5sZXQgcHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9IDA7XHJcblxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDA7IC8vINC80YPRhNGC0LAg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4IDQuLi5cclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMDtcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAwO1xyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAwOyAvLyDQvNGD0YTRgtCwINC90LDRgNGD0LbQvdC+0Lkg0YPRgdGC0LDQvdC+0LLQutC4IDIuLi5cclxuXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMDsgLy8g0LfQsNC20LjQvCDQl9Ce0J/Qsy0yXHJcblxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyA9IDA7IC8vINC/0L7Qu9C+0YHQsCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQstGL0L/Rg9GB0LrRgyDQvtC/0L7RgNGLXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8xNzAwID0gMDsgLy8g0LrQvtC20YPRhSDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgMTcwMFxyXG5sZXQgcHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCA9IDA7IC8vINC60L7QttGD0YUg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcIDIzMDBcclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgPSAwOyAvLyDQv9C+0LvQvtGB0LAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LHQvtC70YLRgyDQutC+0YDQv9GD0YHQsCDQqdCj0K1cclxubGV0IHB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgPSAwOyAvLyDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPXHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxID0gMDsgLy8g0YXQvtC80YPRgiDQpdCaLTFcclxuXHJcbmxldCBkaWdnaW5nX3RyZW5jaGVzID0gMDsgLy8g0YDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuFxyXG5sZXQgZ3JvdW5kX3VuZGVybGF5ID0gMDsgLy8g0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQt9C10LzQu9C4XHJcbmxldCBiYWNrZmlsbCA9IDA7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XHJcbmxldCBleGNhdmF0aW9uID0gMDsgLy8g0YDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YNcclxubGV0IHNvaWxfbGV2ZWxpbmcgPSAwOyAvLyDRgNCw0LfRgNCw0LLQvdC40LLQsNC90LjQtSDQs9GA0YPQvdGC0LBcclxubGV0IHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDA7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxyXG5sZXQgcHVyY2hhc2VfY29uY3JldGUgPSAwOyAvLyDQsdC10YLQvtC9XHJcbmxldCBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSA9IDA7IC8vINGD0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0LIg0LHQtdGC0L7QvdC1XHJcblxyXG5sZXQgZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbiA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINC60LDQsdC10LvRj1xyXG5sZXQgZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAwOyAvLyDQtNC10LzQvtC90YLQsNC2INGB0YPRiSDRg9Cz0L7Qu9C60LBcclxubGV0IGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uID0gMDsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5XHJcbmxldCBkaXNtYW50bGluZ19jbGFtcF9aT1AgPSAwOyAvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcclxubGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCA0Li5cclxubGV0IGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiA9IDA7IC8vINC00LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCAyLi5cclxuXHJcbmxldCBwdXJjaGFzZV9OU2hBTCA9IDA7IC8vINCf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L3QsNC60L7QvdC10YfQvdC40LrQsCDQndCo0JDQmyAxNi0xNCAg0L3QsCDQttC40LvRgyDQodCY0J8tNNC4XHJcbmxldCBwdXJjaGFzZV9uX21vbnRhZ2VfVFVUID0gMDsgLy8g0J/QuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YLQtdGA0LzQvtGD0YHQsNC20LjQstCw0LXQvNC+0Lkg0YLRgNGD0LHQutC4INCi0KPQoiAzNS8xNVxyXG5sZXQgcHVyY2hhc2VfUEtWID0gMDsgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC/0LDRgdGC0Ysg0LrQstCw0YDRhtC1LdCy0LDQt9C40LvQuNC90L7QstC+0LkgKNCf0JrQkilcclxubGV0IHphZGVsa2FfU0lQID0gMDsgLy8g0JfQsNC00LXQu9C60LAg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuFxyXG5cclxubGV0IHVzZXJJbnB1dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5wdXQnKTtcclxudXNlcklucHV0ID0gbWFpbk9iamVjdENvbGxlY3QodXNlcklucHV0KTtcclxuY29uc29sZS5sb2codXNlcklucHV0LCAnLSB1c2VySW5wdXQnKTtcclxuXHJcbmNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdERhdGEnKSk7XHJcbmNvbnNvbGUubG9nKHByb2plY3REYXRhKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgLy8gY29uc29sZS5sb2cod29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEpO1xyXG4gIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICByb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcm91dGluZ180eDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgcm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuICBmaW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5maW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gIHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgd2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50ICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gIHB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZyAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDAgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfcHJvdGVjdGlvbl9jb3Zlcl9LTV8yMzAwICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZyArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzIyMDBfZm9yX2dyb3VuZGluZyAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIHB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLnB1cmNoYXNlX25fbW9udGFnZV9yb3VuZF9zdGVlbF9mb3Jfc3RyaXAgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWEsxICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcblxyXG4gIGRpZ2dpbmdfdHJlbmNoZXMgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmRpZ2dpbmdfdHJlbmNoZXMgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBncm91bmRfdW5kZXJsYXkgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmdyb3VuZF91bmRlcmxheSAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIGJhY2tmaWxsICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5iYWNrZmlsbCAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIGV4Y2F2YXRpb24gKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmV4Y2F2YXRpb24gKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBzb2lsX2xldmVsaW5nICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5zb2lsX2xldmVsaW5nICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9jcnVzaGVkX3N0b25lX3NhbmRfZ3JhdmVsX21peHR1cmUgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV9jb25jcmV0ZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2VfY29uY3JldGUgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbiArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfY2FibGVfZnJvbV9weWxvbiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIGRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIGRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG4gIGRpc21hbnRsaW5nX2NsYW1wX1pPUCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuZGlzbWFudGxpbmdfY2xhbXBfWk9QICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzQgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBkaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgKz0gd29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMiAqIHVzZXJJbnB1dFtpXS5jb3VudE9mU0VNO1xyXG5cclxuICBwdXJjaGFzZV9OU2hBTCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkucHVyY2hhc2VfTlNoQUwgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICBwdXJjaGFzZV9uX21vbnRhZ2VfVFVUICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9uX21vbnRhZ2VfVFVUICogdXNlcklucHV0W2ldLmNvdW50T2ZTRU07XHJcbiAgcHVyY2hhc2VfUEtWICs9IHdvcmtzRGF0YUNvbGxlY3QodXNlcklucHV0W2ldKS5wdXJjaGFzZV9QS1YgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuICB6YWRlbGthX1NJUCArPSB3b3Jrc0RhdGFDb2xsZWN0KHVzZXJJbnB1dFtpXSkuemFkZWxrYV9TSVAgKiB1c2VySW5wdXRbaV0uY291bnRPZlNFTTtcclxuXHJcbiAgY29uc29sZS5sb2cod29ya3NEYXRhQ29sbGVjdCh1c2VySW5wdXRbaV0pKTtcclxufVxyXG5cclxuY29uc3QgYTRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuYTRkaXYuY2xhc3NMaXN0LmFkZCgnYTRfZGl2Jyk7XHJcblxyXG5jb25zdCBhNGRpdl9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG5hNGRpdl9mcmFtZS5jbGFzc0xpc3QuYWRkKCdhNF9kaXZfZnJhbWUnKTtcclxuXHJcbmNvbnN0IG9yZGVyV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlc3RpbWF0ZS10YWJsZScpO1xyXG5vcmRlcldyYXBwZXIuYXBwZW5kKGE0ZGl2KTtcclxuYTRkaXYuYXBwZW5kKGE0ZGl2X2ZyYW1lKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEFCTEUnKTtcclxudGFibGUuY2xhc3NMaXN0LmFkZCgnd29ya3NfdGFibGUnKTtcclxuXHJcbmNvbnN0IGJvZHlPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RCT0RZJyk7XHJcbnRhYmxlLmFwcGVuZChib2R5T2ZXb3JrVGFibGUpO1xyXG5cclxuLy8g0JvQldCT0JXQndCU0JAg0KLQkNCR0JvQmNCm0KtcclxuLy8g0YHRgtGA0L7QutC4XHJcbmNvbnN0IHJvdzFPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1RSJyk7XHJcbmJvZHlPZldvcmtUYWJsZS5hcHBlbmQocm93MU9mV29ya1RhYmxlKTtcclxuLy8g0Y/Rh9C10LnQutC4XHJcbmNvbnN0IHRkMV8xT2ZXb3JrVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdURCcpO1xyXG5jb25zdCB0ZDFfMk9mV29ya1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEQnKTtcclxuY29uc3QgdGQxXzNPZldvcmtUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1REJyk7XHJcbi8vINC80LXRgdGC0LAg0Y/Rh9C10LXQulxyXG5yb3cxT2ZXb3JrVGFibGUuYXBwZW5kKHRkMV8xT2ZXb3JrVGFibGUsIHRkMV8yT2ZXb3JrVGFibGUsIHRkMV8zT2ZXb3JrVGFibGUpO1xyXG4vLyDQndCw0L/QvtC70L3Rj9C10Lwg0Y/Rh9C10LnQutC4XHJcbnRkMV8xT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGA0LDQsdC+0YInO1xyXG50ZDFfMk9mV29ya1RhYmxlLnRleHRDb250ZW50ID0gJ9CV0LQu0LjQt9C8Lic7XHJcbnRkMV8zT2ZXb3JrVGFibGUudGV4dENvbnRlbnQgPSAn0JrQvtC70LjRh9C10YHRgtCy0L4nO1xyXG5cclxuLy8gbGV0IGNvbGxlY3RlZERhdGFGcm9tU2VtID0gd29ya3NEYXRhQ29sbGVjdChzZW0pO1xyXG5cclxuLy8gY29uc29sZS5sb2coY29sbGVjdGVkRGF0YUZyb21TZW0pO1xyXG5cclxuYTRkaXZfZnJhbWUuYXBwZW5kKHRhYmxlKTtcclxuXHJcbmlmIChyb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQvtC/0L7RgNC1ICjRgSDQutGA0LXQv9C70LXQvdC40LXQvCDRhdC+0LzRg9GC0LDQvNC4INCl0JotMSknLCAn0LwnLFxyXG4gICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00pIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQv9C+INC+0L/QvtGA0LUg0YEg0LfQsNGJ0LjRgtC+0Lkg0LrQvtC20YPRhdC+0Lwg0LfQsNGJ0LjRgtGLINC60LDQsdC10LvRjyDQmtCcICjRg9Cz0L7Qu9C+0LogNzXRhTc10YU1LCBMPTIzMDApJywgJ9C8JyxcclxuICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00udG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INCyINCz0L7RgtC+0LLQvtC5INGC0YDQsNC90YjQtdC1JywgJ9C8JyxcclxuICAgIHJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnLCAn0LwnLFxyXG4gICAgcm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlXzR4MTZfY2FibGVfd2l0aF8yX3BlcmNlbnQpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiA00YUxNiDQstGB0LXQs9C+INGBINC90LDQtNCx0LDQstC60L7QuSAyJScsICfQvCcsXHJcbiAgICBwdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSAo0YEg0LrRgNC10L/Qu9C10L3QuNC10Lwg0YXQvtC80YPRgtCw0LzQuCDQpdCaLTEpJywgJ9C8JyxcclxuICAgIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQvtC/0L7RgNC1INGBINC30LDRidC40YLQvtC5INC60L7QttGD0YXQvtC8INC30LDRidC40YLRiyDQutCw0LHQtdC70Y8g0JrQnCAo0YPQs9C+0LvQvtC6IDc10YU3NdGFNSwgTD0yMzAwKScsICfQvCcsXHJcbiAgICByb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2gpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQsiDQs9C+0YLQvtCy0L7QuSDRgtGA0LDQvdGI0LXQtScsICfQvCcsXHJcbiAgICByb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0LrQsNCx0LXQu9GPINCQ0JLQkdCx0KjQkiAy0YUxNiDQv9C+INCy0YvQvdC+0YHQvdC+0Lkg0YHRgtC+0LnQutC1JywgJ9C8JyxcclxuICAgIHJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChwdXJjaGFzZV8yeDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50KSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0LLRgdC10LPQviDRgSDQvdCw0LTQsdCw0LLQutC+0LkgMiUnLCAn0LwnLFxyXG4gICAgcHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQntGC0YjRg9GA0YTQvtCy0LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICBmaW5kaW5nX2FuX2V4aXN0aW5nX2NhYmxlLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDTRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0LwnLFxyXG4gICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnLCAn0LwnLFxyXG4gICAgcm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgNNGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScsICfQvCcsXHJcbiAgICByb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDRgdGD0YnQtdGB0YLQstGD0Y7RidC10LPQviDQutCw0LHQtdC70Y8g0JDQktCR0LHQqNCSIDLRhTE2INC/0L4g0L7Qv9C+0YDQtSDRgSDQt9Cw0YnQuNGC0L7QuSDQutC+0LbRg9GF0L7QvCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0LwnLFxyXG4gICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0LIg0LPQvtGC0L7QstC+0Lkg0YLRgNCw0L3RiNC10LUnLCAn0LwnLFxyXG4gICAgcm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2gudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChyb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC+0LrQu9Cw0LTQutCwINGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDQkNCS0JHQsdCo0JIgMtGFMTYg0L/QviDQstGL0L3QvtGB0L3QvtC5INGB0YLQvtC50LrQtScsICfQvCcsXHJcbiAgICByb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAod2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0L7QutC70LDQtNC60LAg0L/RgNC+0LLQvtC00LAg0KHQmNCfLTTQuCAy0YUxNiDQv9C+INC60L7QvdGB0YLRgNGD0LrRhtC40Y/QvCcsICfQvCcsXHJcbiAgICB3aXJlX3JvdXRpbmdfYWxvbmdfY29uc3RydWN0aW9ucy50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHdpcmVfcm91dGluZ19pbl90aGVfcGlwZSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQvtC60LvQsNC00LrQsCDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INCyINGC0YDRg9Cx0LUnLCAn0LwnLFxyXG4gICAgd2lyZV9yb3V0aW5nX2luX3RoZV9waXBlLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQv9GA0L7QstC+0LTQsCDQodCY0J8tNNC4IDLRhTE2INGBINC90LDQtNCx0LDQstC60L7QuSAyJScsICfQvCcsXHJcbiAgICBwdXJjaGFzZV93aXJlX3dpdGhfMl9wZXJjZW50LnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDTQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80KSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80LnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMikge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LzRg9GE0YIg0LLQvdGD0YLRgNC10L3QvdC10Lkg0YPRgdGC0LDQvdC+0LLQutC4INGC0LjQv9CwIDLQn9CR0JrQktGC0YLQvyAoMTYtMjUpLTEnLCAn0YjRgi4nLFxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvNGD0YTRgiDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMicsICfRiNGCLicsXHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZykge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0L/QvtC70L7RgdGLIDTRhTEyLCBMPTI0MDAg0LTQu9GPINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0Log0LfQsNC30LXQvNC70Y/RjtGJ0LXQvNGDINCy0YvQv9GD0YHQutGDINC+0L/QvtGA0YsnLCAn0YjRgi4nLFxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX3N0cmlwXzI0MDBfZm9yX2dyb3VuZGluZy50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzE3MDApIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMCknLCAn0YjRgi4nLFxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDApIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MjMwMCknLCAn0YjRgi4nLFxyXG4gICAgcHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC/0L7Qu9C+0YHRiyA00YUxMiwgTD0yMjAwINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC6INCx0L7Qu9GC0YMg0LfQsNC30LXQvNC70LXQvdC40Y8g0LrQvtGA0L/Rg9GB0LAg0KnQo9CtJywgJ9GI0YIuJyxcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRgdGC0LDQu9GMINC60YDRg9Cz0LvQsNGPIGQxMCDQvNC8INC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC/0L7Qu9C+0YHRiyA00YUxMiDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LrQvtC90YLRg9GA0YMg0L7Qv9C+0YDRiycsICfRiNGCLicsXHJcbiAgICBwdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cf0YDQuNC+0LHRgNC10YLQtdC90LjQtSDQuCDQvNC+0L3RgtCw0LYg0YXQvtC80YPRgtC+0LIg0KXQmi0xJywgJ9GI0YIuJyxcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChleGNhdmF0aW9uKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0KDQsNC30YDQsNCx0L7RgtC60LAg0LrQvtGC0LvQvtCy0LDQvdCwINC/0L7QtCDRgdGC0L7QudC60YMnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICBleGNhdmF0aW9uLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAoc29pbF9sZXZlbGluZykge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0LDQt9GA0LDQstC90LjQstCw0L3QuNC1INCy0YvRgtC10YHQvdC10L3QvdC+0LPQviDQs9GA0YPQvdGC0LAg0LLRgNGD0YfQvdGD0Y4nLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICBzb2lsX2xldmVsaW5nLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAocHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdC+0Lkg0YHQvNC10YHQuCAo0KnQo9CtKScsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgIHB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX2NvbmNyZXRlKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INCx0LXRgtC+0L3QsCDQutC70LDRgdGB0LAg0KExNi8yMCBGMTAwJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgcHVyY2hhc2VfY29uY3JldGUudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChpbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQuNGH0LXRgdC60LjRhSDQutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINGC0LXQu9C1INCx0LXRgtC+0L3QsCcsICfQutCzJyxcclxuICAgIGluc3RhbGxhdGlvbl9vZl9tZXRhbF9zdHJ1Y3R1cmVzX2luX2NvbmNyZXRlLnRvRml4ZWQoMikpKTtcclxufVxyXG5pZiAoZGlnZ2luZ190cmVuY2hlcykge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cg0YvRgtGM0LUg0YLRgNCw0L3RiNC10Lgg0LIg0YDRg9GH0L3Rg9GOJywgJ9C8JyArICc8c3VwPjM8L3N1cD4nLFxyXG4gICAgZGlnZ2luZ190cmVuY2hlcy50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGdyb3VuZF91bmRlcmxheSkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9Cj0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0L/RgNC+0YHQtdGP0L3QvdC+0Lkg0LfQtdC80LvQuCcsICfQvCcgKyAnPHN1cD4zPC9zdXA+JyxcclxuICAgIGdyb3VuZF91bmRlcmxheS50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGJhY2tmaWxsKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0JfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LwnLCAn0LwnICsgJzxzdXA+Mzwvc3VwPicsXHJcbiAgICBiYWNrZmlsbC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24pIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQlNC10LzQvtC90YLQsNC2INGB0YPRidC10YHRgtCy0YPRjtGJ0LXQs9C+INC60LDQsdC10LvRjyDRgSDQvtC/0L7RgNGLINC80LDRgdGB0L7QuSAxINC8INC00L4gMi3RhSDQutCzJywgJ9C8JyxcclxuICAgIGRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24udG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbikge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0YPQs9C+0LvQutCwINGBINC+0L/QvtGA0YsnLCAn0LrQsycsXHJcbiAgICBkaXNtYW50bGluZ19tZXRhbF9jb3JuZXJfZnJvbV9weWxvbi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX2NsYW1wX1pPUCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMicsICfRiNGCLicsXHJcbiAgICBkaXNtYW50bGluZ19jbGFtcF9aT1AudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbikge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INGBINC+0L/QvtGA0YsnLCAn0LrQsycsXHJcbiAgICBkaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCA00J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgIGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMikge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CU0LXQvNC+0L3RgtCw0LYg0LzRg9GE0YLRiyDQvdCw0YDRg9C20L3QvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDRgtC40L/QsCAy0J/QkdCa0J3RgtGC0L8gKDE2LTI1KS0xJywgJ9GI0YIuJyxcclxuICAgIGRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfMi50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX05TaEFMKSB7XHJcbiAgdGFibGUuYXBwZW5kKGNyZWF0ZVJvdygn0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQvdCw0LrQvtC90LXRh9C90LjQutCwINCd0KjQkNCbIDE2LTE0INC90LAg0LbQuNC70YMg0KHQmNCfLTTQuCcsICfRiNGCLicsXHJcbiAgICBwdXJjaGFzZV9OU2hBTC50b0ZpeGVkKDIpKSk7XHJcbn1cclxuaWYgKHB1cmNoYXNlX25fbW9udGFnZV9UVVQpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9C40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDRgtC10YDQvNC+0YPRgdCw0LbQuNCy0LDQtdC80L7QuSDRgtGA0YPQsdC60Lgg0KLQo9CiIDM1LzE1JywgJ9C8JyxcclxuICAgIHB1cmNoYXNlX25fbW9udGFnZV9UVVQudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmIChwdXJjaGFzZV9QS1YpIHtcclxuICB0YWJsZS5hcHBlbmQoY3JlYXRlUm93KCfQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0L/QsNGB0YLRiyDQutCy0LDRgNGG0LUt0LLQsNC30LjQu9C40L3QvtCy0L7QuSAo0J/QmtCSKScsICfQsycsXHJcbiAgICBwdXJjaGFzZV9QS1YudG9GaXhlZCgyKSkpO1xyXG59XHJcbmlmICh6YWRlbGthX1NJUCkge1xyXG4gIHRhYmxlLmFwcGVuZChjcmVhdGVSb3coJ9CX0LDQtNC10LvQutCwINC/0YDQvtCy0L7QtNCwINCh0JjQny000LgnLCAn0YjRgi4nLFxyXG4gICAgemFkZWxrYV9TSVAudG9GaXhlZCgyKSkpO1xyXG59XHJcbiIsImxldCBjcmVhdGVSb3cgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgbWVhc3VyZSwgdmFsdWUpIHtcclxuLy8gbGV0IGNyZWF0ZVJvdyA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCBtZWFzdXJlLCB2YWx1ZSwgZm9yTG9uZ0Rlc2NyaXB0aW9uKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJUUlwiKTtcclxuICAgIC8vINGP0YfQtdC50LrQuFxyXG4gICAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG4gICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlREXCIpO1xyXG5cclxuICAgIHRkMS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGQyLmlubmVySFRNTCA9IG1lYXN1cmU7XHJcbiAgICB0ZDMudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICByb3cuYXBwZW5kKHRkMSwgdGQyLCB0ZDMpO1xyXG5cclxuICAgIC8vIGlmIChmb3JMb25nRGVzY3JpcHRpb24pIHtcclxuICAgIC8vICAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlRSXCIpO1xyXG5cclxuICAgIC8vICAgICBjb25zdCB0ZDFfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuICAgIC8vICAgICBjb25zdCB0ZDNfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJURFwiKTtcclxuXHJcbiAgICAvLyAgICAgdGQxXzIudGV4dENvbnRlbnQgPSBmb3JMb25nRGVzY3JpcHRpb247XHJcbiAgICAvLyAgICAgcm93Mi5hcHBlbmQodGQxXzIsIHRkMl8yLCB0ZDNfMik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHJvdztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbmNvbnN0IHdvcmtzRGF0YUNvbGxlY3QgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgZnVuY3Rpb24gU0VNV09SS1Moc2VtKSB7XG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uY291bnRlckNvdW50SW5TRU0gIT09IDEpIHtcbiAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSB7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDcuNTtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMi4zO1xuICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gMjtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMy40O1xuICAgICAgfSBlbHNlIGlmIChzZW0uY291bnRlckNvdW50SW5TRU0gPT09IDIgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInKSB7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDIyLjU7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDYuOTtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDY7XG4gICAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDEwLjI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAxNTtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gNC42O1xuICAgICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoID0gNDtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xuICAgICAgfVxuICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gKHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMVxuICAgICAgICAgICAgICAgICsgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNXG4gICAgICAgICAgICAgICAgKyB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9pbl90aGVfdHJlbmNoICsgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kKSAqIDEuMDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfY2xhbXBzX1hLMSA9IDA7XG4gICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nXzR4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDA7XG4gICAgICB0aGlzLnJvdXRpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xuICAgICAgdGhpcy5wdXJjaGFzZV80eDE2X2NhYmxlX3dpdGhfMl9wZXJjZW50ID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0LggKNC10YHRgtGMIDHRhTHRhCDQuNC70LggMtGFMdGEKSDQvdC+LCDQtdGB0LvQuCDRjdGC0L4gMy0yLTIsINGC0L4g0YLQvtC70YzQutC+IDHRhNCaINC40LvQuCDQmtCaXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScpXG4gICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJ9C60LonXG4gICAgICAgICAgICAgICAgJiYgc2VtLmlucHV0RnJvbVNlbSAhPT0gJzHRhNC6JykpKSB7XG4gICAgICBpZiAoKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJykgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSlcbiAgICAgICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JykpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gNy41O1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAyLjM7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAyO1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAyMi41O1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSA2Ljk7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSA2O1xuICAgICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAxMC4yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9jbGFtcHNfWEsxID0gMTU7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDQuNjtcbiAgICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCA9IDQ7XG4gICAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzFcbiAgICAgICAgICAgICAgICArIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTVxuICAgICAgICAgICAgICAgICsgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX3RyZW5jaCArIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCkgKiAxLjAyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX2NsYW1wc19YSzEgPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcbiAgICAgIHRoaXMucm91dGluZ18yeDE2X2NhYmxlX2luX3RoZV90cmVuY2ggPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2VfMngxNl9jYWJsZV93aXRoXzJfcGVyY2VudCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1LCDQuCDQtdGB0YLRjCDQmlxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtLmluY2x1ZGVzKCfQuicpKSB7XG4gICAgICBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XG4gICAgICAgIHRoaXMuZmluZGluZ19hbl9leGlzdGluZ19jYWJsZSA9IDAuNTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwLjI4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmRpbmdfYW5fZXhpc3RpbmdfY2FibGUgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMSdcbiAgICAgICAgICAgICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykgJiYgIXNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJzHRhNC6JykpIHtcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMicgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDMuNDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDEuNztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcHlsb25fd2l0aF9wcm90ZWN0aW9uX2NvdmVyX0tNID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GE0JogLi4uXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInXG4gICAgICAgICAgICAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMSdcbiAgICAgICAgICAgICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykgJiYgIXNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJzHRhNC6JylcbiAgICApIHtcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDQ7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDYuODtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAyO1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfNHgxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAzLjQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ180eDE2X2NhYmxlX2luX3RoZV9maW5pc2hlZF90cmVuY2ggPSAwO1xuICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzR4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1LCDQuCDQtdGB0YLRjCAx0YTQmlxuICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAzLjQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19weWxvbl93aXRoX3Byb3RlY3Rpb25fY292ZXJfS00gPSAxLjc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3B5bG9uX3dpdGhfcHJvdGVjdGlvbl9jb3Zlcl9LTSA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1LCDQuCDQtdGB0YLRjCAx0YTQmlxuICAgIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0uaW5jbHVkZXMoJ9C6JykpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzHRhNC6JykpKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9pbl90aGVfZmluaXNoZWRfdHJlbmNoID0gNDtcbiAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfYWxvbmdfcmVtb3RlX3N0YW5kID0gNi44O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDI7XG4gICAgICAgIHRoaXMucm91dGluZ19leGlzdGluZ18yeDE2X2NhYmxlX2Fsb25nX3JlbW90ZV9zdGFuZCA9IDMuNDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0aW5nX2V4aXN0aW5nXzJ4MTZfY2FibGVfaW5fdGhlX2ZpbmlzaGVkX3RyZW5jaCA9IDA7XG4gICAgICB0aGlzLnJvdXRpbmdfZXhpc3RpbmdfMngxNl9jYWJsZV9hbG9uZ19yZW1vdGVfc3RhbmQgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LVcbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScpIHtcbiAgICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAxLjU7XG4gICAgICAgIHRoaXMucHVyY2hhc2VfTlNoQUwgPSAyO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9UVVQgPSAwLjA0O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDI7XG4gICAgICAgIHRoaXMuemFkZWxrYV9TSVAgPSAyO1xuICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDYuNDtcbiAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSA1LjQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNi4xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gNS4xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gOTtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9OU2hBTCA9IDEyO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9UVVQgPSAwLjI0O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDEyO1xuICAgICAgICB0aGlzLnphZGVsa2FfU0lQID0gMTI7XG4gICAgICAgIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0LItMTEwJykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMzguNDtcbiAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjYnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzMi40O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDM2LjY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAzMC42O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gNy41O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gMTA7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX1RVVCA9IDAuMjtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9QS1YgPSAxMDtcbiAgICAgICAgdGhpcy56YWRlbGthX1NJUCA9IDEwO1xuICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMyO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDI3O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNycpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDMwLjU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS41O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpKSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA0LjU7XG4gICAgICAgIHRoaXMucHVyY2hhc2VfTlNoQUwgPSA2O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9UVVQgPSAwLjEyO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDY7XG4gICAgICAgIHRoaXMuemFkZWxrYV9TSVAgPSA2O1xuICAgICAgICBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdCyLTExMCcpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDE5LjI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC42Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTYuMjtcbiAgICAgICAgfSBlbHNlIGlmIChzZW0ucGlsbGFyVHlwZSA9PT0gJ9GB0YItMTA4LjcnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxOC4zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTUuMztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpXG4gICAgICAgICAgICAgICAgfHwgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpKSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSA2O1xuICAgICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gODtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfVFVUID0gMC4xNjtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9QS1YgPSA4O1xuICAgICAgICB0aGlzLnphZGVsa2FfU0lQID0gODtcbiAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAyNS42O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIxLjY7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMjQuNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDIwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2Fsb25nX2NvbnN0cnVjdGlvbnMgPSAzO1xuICAgICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gNDtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfVFVUID0gMC4wODtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9QS1YgPSA0O1xuICAgICAgICB0aGlzLnphZGVsa2FfU0lQID0gNDtcbiAgICAgICAgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHQsi0xMTAnKSB7XG4gICAgICAgICAgdGhpcy53aXJlX3JvdXRpbmdfaW5fdGhlX3BpcGUgPSAxMi44O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbS5waWxsYXJUeXBlID09PSAn0YHRgi0xMDguNicpIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDEwLjg7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VtLnBpbGxhclR5cGUgPT09ICfRgdGCLTEwOC43Jykge1xuICAgICAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMTIuMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSA9IDEwLjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9ICh0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zXG4gICAgICAgICAgICAgICAgKyB0aGlzLndpcmVfcm91dGluZ19pbl90aGVfcGlwZSkgKiAxLjAyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpcmVfcm91dGluZ19hbG9uZ19jb25zdHJ1Y3Rpb25zID0gMDtcbiAgICAgIHRoaXMud2lyZV9yb3V0aW5nX2luX3RoZV9waXBlID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2Vfd2lyZV93aXRoXzJfcGVyY2VudCA9IDA7XG4gICAgICB0aGlzLnB1cmNoYXNlX05TaEFMID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX1RVVCA9IDA7XG4gICAgICB0aGlzLnB1cmNoYXNlX1BLViA9IDA7XG4gICAgICB0aGlzLnphZGVsa2FfU0lQID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDPRhNCaIC4uLiDQuNC70Lgg0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgM9GEXG4gICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJ1xuICAgICAgICAgICAgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKSlcbiAgICAgICAgICAgIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMScpXG4gICAgKSB7XG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMztcbiAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMidcbiAgICAgICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgIXNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JykpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV80ID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfNCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1INC4INC10YHRgtGMIDPRhFxuICAgIC8vINC60LDQuiDQv9C10YDQstGL0LUgNSDRgdGC0YDQvtC6XG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gIT09ICcxJykge1xuICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfT1VUc2lkZV9zbGVldmVfNCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzQgPSAyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV80ID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQqdCj0K0g0L3QsCDQvtC/0L7RgNC1INC4INC10YHRgtGMIDHRhNCaIC4uLiDQuNC70Lgg0L3QsCDRgdGC0L7QudC60LUg0Lgg0LXRgdGC0YwgMdGEXG4gICAgaWYgKChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJ1xuICAgICAgICAgICAgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzInXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonKSlcbiAgICAgICAgICAgIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcyJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMicpXG4gICAgKSB7XG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PSAnMicpIHtcbiAgICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfSU5zaWRlX3NsZWV2ZV8yID0gMztcbiAgICAgIH0gZWxzZSBpZiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKVxuICAgICAgICAgICAgICAgIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiBzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzRdID09ICcxJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicpKSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX0lOc2lkZV9zbGVldmVfMiA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9JTnNpZGVfc2xlZXZlXzIgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINGB0YLQvtC50LrQtSDQuCAo0Y3RgtC+INGH0LjRgdGC0L4gMdGEINC40LvQuCDRjdGC0L4gMy0yLTIg0YEgMdGE0JIpXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInXG4gICAgICAgICAgICAmJiAoKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnKVxuICAgICAgICAgICAgICAgIHx8ICgoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMycpICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6JykpKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzEnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMztcbiAgICAgIH0gZWxzZSBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMSdcbiAgICAgICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9CyJyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonKSkge1xuICAgICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX09VVHNpZGVfc2xlZXZlXzIgPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9PVVRzaWRlX3NsZWV2ZV8yID0gMDtcbiAgICB9XG5cbiAgICAvLyDQlNCb0K8g0JLQodCV0KUg0KnQo9CtXG4gICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXG5cbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSkge1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMjtcbiAgICB9IGVsc2UgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstCyJykge1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2VfY2xhbXBfWk9QID0gMTA7XG4gICAgfSBlbHNlIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcyJyAmJiBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LLQsicpIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDEyO1xuICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1pPUCA9IDY7XG4gICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonXG4gICAgICAgICAgICB8fCAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicgJiYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutCyJykpKSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9aT1AgPSA0O1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUgKNC60LDQuiDRgdGC0YDQvtC60LggMTktMjEpXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnKSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgPSAxO1xuICAgICAgLy8g0J/RgNC40L7QsdGA0LXRgtC10L3QuNC1INC4INC80L7QvdGC0LDQtiDQv9C+0LvQvtGB0YsgNNGFMTIsIEw9MjQwMCDQtNC70Y8g0L/QvtC00LrQu9GO0YfQtdC90LjRjyDQuiDQt9Cw0LfQtdC80LvRj9GO0YnQtdC80YMg0LLRi9C/0YPRgdC60YMg0L7Qv9C+0YDRi1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yNDAwX2Zvcl9ncm91bmRpbmcgPSAwO1xuICAgIH1cblxuICAgIC8vINC10YHQu9C4INCp0KPQrSDQvdCwINC+0L/QvtGA0LUsINC4INC10YHRgtGMINCaXG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzEnXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcz0YTQuicpXG4gICAgKSB7XG4gICAgICAvLyDQn9GA0LjQvtCx0YDQtdGC0LXQvdC40LUg0Lgg0LzQvtC90YLQsNC2INC60L7QttGD0YXQsCDQt9Cw0YnQuNGC0Ysg0LrQsNCx0LXQu9GPINCa0JwgKNGD0LPQvtC70L7QuiA3NdGFNzXRhTUsIEw9MTcwMClcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMTcwMCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0KnQo9CtINC90LAg0YHRgtC+0LnQutC1XG4gICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT0gJzInKSB7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9wcm90ZWN0aW9uX2NvdmVyX0tNXzIzMDAgPSAxO1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfc3RyaXBfMjIwMF9mb3JfZ3JvdW5kaW5nID0gMTtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3JvdW5kX3N0ZWVsX2Zvcl9zdHJpcCA9IDI7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9jbGFtcF9YSzEgPSAzO1xuXG4gICAgICB0aGlzLmV4Y2F2YXRpb24gPSAwLjEzOyAvLyDRgNCw0LfRgNCw0LHQvtGC0LrQsCDQutC+0YLQu9C+0LLQsNC90LAg0L/QvtC0INGB0YLQvtC50LrRg1xuICAgICAgdGhpcy5zb2lsX2xldmVsaW5nID0gMC4xMzsgLy8g0YDQsNC30YDQsNCy0L3QuNCy0LDQvdC40LUg0LPRgNGD0L3RgtCwXG4gICAgICB0aGlzLnB1cmNoYXNlX2NydXNoZWRfc3RvbmVfc2FuZF9ncmF2ZWxfbWl4dHVyZSA9IDAuMDc7IC8vINGJ0LXQsdC10L3QvtGH0L3Qvi3Qv9C10YHRh9Cw0L3Qvi3Qs9GA0LDQstC40LnQvdCw0Y8g0YHQvNC10YHRjFxuICAgICAgdGhpcy5wdXJjaGFzZV9jb25jcmV0ZSA9IDAuMDU7IC8vINCx0LXRgtC+0L1cbiAgICAgIHRoaXMuaW5zdGFsbGF0aW9uX29mX21ldGFsX3N0cnVjdHVyZXNfaW5fY29uY3JldGUgPSA0LjA2OyAvLyDRg9GB0YLQsNC90L7QstC60LAg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5INCyINCx0LXRgtC+0L3QtVxuXG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVszXSA9PSAnMScpIHtcbiAgICAgICAgdGhpcy5kaWdnaW5nX3RyZW5jaGVzID0gMC41NDsgLy8g0YDRi9GC0YzQtSDRgtGA0LDQvdGI0LXQuFxuICAgICAgICB0aGlzLmdyb3VuZF91bmRlcmxheSA9IDAuMTg7IC8vINGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7RgdGC0LXQu9C4INC40Lcg0LfQtdC80LvQuFxuICAgICAgICB0aGlzLmJhY2tmaWxsID0gMC4zNjsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlnZ2luZ190cmVuY2hlcyA9IDAuNzI7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcbiAgICAgICAgdGhpcy5ncm91bmRfdW5kZXJsYXkgPSAwLjI0OyAvLyDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0YHRgtC10LvQuCDQuNC3INC30LXQvNC70LhcbiAgICAgICAgdGhpcy5iYWNrZmlsbCA9IDAuNDg7IC8vINC30LDRgdGL0L/QutCwINCz0YDRg9C90YLQvtC8XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX3Byb3RlY3Rpb25fY292ZXJfS01fMjMwMCA9IDA7XG4gICAgICB0aGlzLnB1cmNoYXNlX25fbW9udGFnZV9zdHJpcF8yMjAwX2Zvcl9ncm91bmRpbmcgPSAwO1xuICAgICAgdGhpcy5wdXJjaGFzZV9uX21vbnRhZ2Vfcm91bmRfc3RlZWxfZm9yX3N0cmlwID0gMDtcbiAgICAgIHRoaXMucHVyY2hhc2Vfbl9tb250YWdlX2NsYW1wX1hLMSA9IDA7XG5cbiAgICAgIHRoaXMuZXhjYXZhdGlvbiA9IDA7IC8vINGA0LDQt9GA0LDQsdC+0YLQutCwINC60L7RgtC70L7QstCw0L3QsCDQv9C+0LQg0YHRgtC+0LnQutGDXG4gICAgICB0aGlzLnNvaWxfbGV2ZWxpbmcgPSAwOyAvLyDRgNCw0LfRgNCw0LLQvdC40LLQsNC90LjQtSDQs9GA0YPQvdGC0LBcbiAgICAgIHRoaXMucHVyY2hhc2VfY3J1c2hlZF9zdG9uZV9zYW5kX2dyYXZlbF9taXh0dXJlID0gMDsgLy8g0YnQtdCx0LXQvdC+0YfQvdC+LdC/0LXRgdGH0LDQvdC+LdCz0YDQsNCy0LjQudC90LDRjyDRgdC80LXRgdGMXG4gICAgICB0aGlzLnB1cmNoYXNlX2NvbmNyZXRlID0gMDsgLy8g0LHQtdGC0L7QvVxuICAgICAgdGhpcy5pbnN0YWxsYXRpb25fb2ZfbWV0YWxfc3RydWN0dXJlc19pbl9jb25jcmV0ZSA9IDA7IC8vINGD0YHRgtCw0L3QvtCy0LrQsCDQvNC10YLQsNC70LvQvtC60L7QvdGB0YLRgNGD0LrRhtC40Lkg0LIg0LHQtdGC0L7QvdC1XG5cbiAgICAgIHRoaXMuZGlnZ2luZ190cmVuY2hlcyA9IDA7IC8vINGA0YvRgtGM0LUg0YLRgNCw0L3RiNC10LhcbiAgICAgIHRoaXMuZ3JvdW5kX3VuZGVybGF5ID0gMDsgLy8g0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtGB0YLQtdC70Lgg0LjQtyDQt9C10LzQu9C4XG4gICAgICB0aGlzLmJhY2tmaWxsID0gMDsgLy8g0LfQsNGB0YvQv9C60LAg0LPRgNGD0L3RgtC+0LxcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQmlxuICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJzPRhNC6Jykge1xuICAgICAgaWYgKHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSAxNjsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NhYmxlX2Zyb21fcHlsb24gPSA4O1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LrQsNCx0LXQu9GPXG4gICAgICB9XG5cbiAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnKSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAxNS44NDsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0YPQs9C+0LvQutCwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2Nvcm5lcl9mcm9tX3B5bG9uID0gMTEuMTc7IC8vINC00LXQvNC+0L3RgtCw0LYg0YHRg9GJINGD0LPQvtC70LrQsFxuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc21hbnRsaW5nX21ldGFsX2NvbnN0cnVjdGlvbl9mcm9tX3B5bG9uID0gMi4wMTsgLy8g0LTQtdC80L7QvdGC0LDQtiDRgdGD0Ykg0LzQtdGC0LDQu9C70L7QutC+0L3RgdGC0YDRg9C60YbQuNC5XG5cbiAgICAgIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgJiYgc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMicpIHtcbiAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSA4OyAvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcbiAgICAgIH0gZWxzZSBpZiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonICYmIHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzMnKSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfY2xhbXBfWk9QID0gNjtcdC8vINC00LXQvNC+0L3RgtCw0LYg0LfQsNC20LjQvNC+0LIg0JfQntCf0LMtMlxuICAgICAgfSBlbHNlIGlmIChzZW0uaW5wdXRGcm9tU2VtID09PSAnMdGE0LonIHx8IChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdID09ICcxJyAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonKSkpIHtcbiAgICAgICAgdGhpcy5kaXNtYW50bGluZ19jbGFtcF9aT1AgPSAyO1x0Ly8g0LTQtdC80L7QvdGC0LDQtiDQt9Cw0LbQuNC80L7QsiDQl9Ce0J/Qsy0yXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDQ7XHQvLyDQtNC10LzQvtC90YLQsNC2INC30LDQttC40LzQvtCyINCX0J7Qn9CzLTJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNtYW50bGluZ19jYWJsZV9mcm9tX3B5bG9uID0gMDtcbiAgICAgIHRoaXMuZGlzbWFudGxpbmdfbWV0YWxfY29ybmVyX2Zyb21fcHlsb24gPSAwO1xuICAgICAgdGhpcy5kaXNtYW50bGluZ19tZXRhbF9jb25zdHJ1Y3Rpb25fZnJvbV9weWxvbiA9IDA7XG4gICAgICB0aGlzLmRpc21hbnRsaW5nX2NsYW1wX1pPUCA9IDA7XG4gICAgfVxuXG4gICAgLy8g0LXRgdC70Lgg0LXRgdGC0YwgM9GE0JpcbiAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSAhPT0gJzEnXG4gICAgICAgICAgICAmJiAoc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQuicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LInIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQstC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAnM9GE0LonKVxuICAgICkge1xuICAgICAgaWYgKHNlbS5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT0gJzInICYmIHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6Jykge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCA9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc21hbnRsaW5nX0lOc2lkZV9zbGVldmVfNCA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV80ID0gMDtcbiAgICB9XG5cbiAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCAx0YTQmlxuICAgIGlmIChzZW0uU0VNVHlwZS5zcGxpdCgnLScpWzJdICE9PSAnMidcbiAgICAgICAgICAgICYmIChzZW0uaW5wdXRGcm9tU2VtID09PSAn0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICfQutC6JyB8fCBzZW0uaW5wdXRGcm9tU2VtID09PSAn0LrQsicgfHwgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9Cy0LonIHx8IHNlbS5pbnB1dEZyb21TZW0gPT09ICcx0YTQuicpXG4gICAgKSB7XG4gICAgICBpZiAoc2VtLlNFTVR5cGUuc3BsaXQoJy0nKVsyXSA9PSAnMScgJiYgc2VtLmlucHV0RnJvbVNlbSA9PT0gJ9C60LonKSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzbWFudGxpbmdfSU5zaWRlX3NsZWV2ZV8yID0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNtYW50bGluZ19JTnNpZGVfc2xlZXZlXzIgPSAwO1xuICAgIH1cbiAgfVxuICAvLyBjb25zb2xlLmxvZyhuZXcgU0VNV09SS1MoaW5wdXQpKTtcbiAgcmV0dXJuIG5ldyBTRU1XT1JLUyhpbnB1dCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3Jrc0RhdGFDb2xsZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==