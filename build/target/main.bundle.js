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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout/css/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/GOST 2.304-81 type A.ttf */ "./src/layout/css/fonts/GOST 2.304-81 type A.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'GOST 2.304-81 type A'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n}\r\n* {\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-size: 21px;\r\n\tfont-family: 'GOST 2.304-81 type A', sans-serif;\r\n\tcolor: black;   \r\n}\r\n.container {\r\n\twidth: 700px;\r\n\tmargin: auto;\r\n}\r\nheader {\r\n\tpadding: 15px 0;\r\n\tbackground: #48D1CC;\r\n\tcolor:  white;\r\n\tcolor:  black;  \r\n}\r\n.btn-container {\r\n\tdisplay: flex;\r\n\tjustify-content: right;\r\n\tborder: #008B8B solid 2px;\r\n\tborder-radius: 5px;\r\n\tmargin-bottom: -2px;\r\n}\r\n.input_page__form {\r\n\twidth: 25%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n#input_page_works,\r\n#input_page {\r\n    text-align: center;\r\n}\r\n.input_page p {\r\n\tdisplay: inline;\r\n}\r\n.btn-form {\r\n\twidth: 36%;\r\n\tpadding-right: 5px;\r\n}\r\n.main-input {\r\n\tpadding: 15px 0;\r\n\theight: 423px;\r\n\tbackground: #48D1CC;\r\n}\r\nh1 {\r\n\tmargin-bottom: 10px;\r\n}\r\n.main-form-input {\r\n\tpadding: 15px 0;\r\n\theight: 200px;\r\n\tbackground: #AFEEEE;\r\n}\r\n.links {\r\n\tpadding: 15px 0;\r\n\theight: 269px;\r\n\tbackground: #AFEEEE;\r\n}\r\na {\r\n\ttext-decoration: none;\t\r\n\tcolor: #939393;\r\n\t/*padding: 0 15px 40px 15px;*/\r\n}\r\na:hover {\r\n\tcolor: #00bac6;\r\n\tborder: #00bac6 2px solid;\r\n}\r\nselect {\r\n\twidth: 150px;\r\n}\r\n.signature_input{\r\n\twidth: 95%;\r\n    display: inline-block;\r\n}\r\n.btn {\r\nwidth: 100%;\r\nheight: 30px;\r\nbackground: #008B8B;\r\ncolor: white;\r\nborder: none;\r\nborder-radius: 5px;\r\nmargin: 8px 0;\r\n}\r\n#main-input-form {\r\n\tposition: relative;\r\n}\r\n.btn-big {\r\n\theight: 50px;\r\n}\r\n.btn-small {\r\n\theight: 30px;\r\n}\r\n.btn-area {\r\n\twidth: 50%;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 25px;\r\n}\r\n.btn-area-clear{\r\n\ttop: 337px;\r\n}\r\nh2 {\r\n\ttext-align: center;\r\n\tpadding-bottom: 10px;\r\n}\r\n.project-stage h3{\r\n\tdisplay: inline;\r\n\tmargin-right: 15px;\r\n}\r\n.project-stage span{\r\n\tfont-weight: bold;\r\n}\r\n.project-stage input{\r\n\tmargin-right: 15px;\r\n}\r\n.project-name, \r\n.project-stage, \r\n.project-peaple, \r\n.project-date {\r\n\tpadding-bottom: 10px;\r\n}\r\n#project-index {\r\n\twidth: 20%;\r\n}\r\n#project-name {\r\n\twidth: 79%;\r\n}\r\n.btn:hover, \r\n.input-btn:hover {\r\n\tbackground:\t#008C33;\r\n\tborder: #0b6603 solid 2px;\r\n}\r\n.btn-area-clear:hover {\r\n\tbackground: #c45210;\r\n\tborder: #cf8d12 solid 2px;\r\n}\r\n#textarea{\r\n\twidth: 100%;\r\n}\r\n", ""]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/css/style.css */ "./src/layout/css/style.css");
/* harmony import */ var _layout_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/scripts/data/project-data-collect */ "./src/layout/scripts/data/project-data-collect.js");
/* harmony import */ var _layout_scripts_data_show_saved_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/scripts/data/show-saved-data */ "./src/layout/scripts/data/show-saved-data.js");


 // import mainObjectCollect from './layout/scripts/data/main-object-collect';

if (localStorage.getItem("projectData") != null) {
  Object(_layout_scripts_data_show_saved_data__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

if (localStorage.getItem('userOrderPageInput')) {
  var userOrderPageInput = document.getElementById('input_page');
  userOrderPageInput.value = localStorage.getItem('userOrderPageInput');
}

if (localStorage.getItem('userWorksPageInput')) {
  var userWorksPageInput = document.getElementById('input_page_works');
  userWorksPageInput.value = localStorage.getItem('userWorksPageInput');
} // Опросные


var orderListsSubmitButton = document.getElementById('submit-order');

orderListsSubmitButton.onclick = function (e) {
  e.preventDefault();
  var userInput = document.getElementById('textarea').value;
  localStorage.setItem("userInput", userInput);
  var projectData = JSON.stringify(Object(_layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__["default"])());
  localStorage.setItem("projectData", projectData);
  var userOrderPageInput = document.getElementById('input_page').value;
  localStorage.setItem("userOrderPageInput", userOrderPageInput);
  var userWorksPageInput = document.getElementById('input_page_works').value;
  localStorage.setItem("userWorksPageInput", userWorksPageInput);
  location.href = 'order-list.html';
}; // Схемы к опросным


var shemeBtn = document.getElementById('submit-order-shemes');

shemeBtn.onclick = function (e) {
  e.preventDefault();
  var userInput = document.getElementById('textarea').value;
  localStorage.setItem("userInput", userInput);
  var projectData = JSON.stringify(Object(_layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__["default"])());
  localStorage.setItem("projectData", projectData);
  var userOrderPageInput = document.getElementById('input_page').value;
  localStorage.setItem("userOrderPageInput", userOrderPageInput);
  var userWorksPageInput = document.getElementById('input_page_works').value;
  localStorage.setItem("userWorksPageInput", userWorksPageInput);
  location.href = 'sсheme_order_sheet.html';
}; // Ведомости работ


var worksSubmitButton = document.getElementById('submit-works');

worksSubmitButton.onclick = function (e) {
  e.preventDefault();
  var userInput = document.getElementById('textarea').value;
  localStorage.setItem("userInput", userInput);
  var projectData = JSON.stringify(Object(_layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__["default"])());
  localStorage.setItem("projectData", projectData);
  var userOrderPageInput = document.getElementById('input_page').value;
  localStorage.setItem("userOrderPageInput", userOrderPageInput);
  var userWorksPageInput = document.getElementById('input_page_works').value;
  localStorage.setItem("userWorksPageInput", userWorksPageInput);
  location.href = 'scopeOfWork.html';
}; // Схемы к -103 части


var shemeMainBtn = document.getElementById('submit-works-shemes');

shemeMainBtn.onclick = function (e) {
  e.preventDefault();
  var userInput = document.getElementById('textarea').value;
  localStorage.setItem("userInput", userInput);
  var projectData = JSON.stringify(Object(_layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__["default"])());
  localStorage.setItem("projectData", projectData);
  var userOrderPageInput = document.getElementById('input_page').value;
  localStorage.setItem("userOrderPageInput", userOrderPageInput);
  var userWorksPageInput = document.getElementById('input_page_works').value;
  localStorage.setItem("userWorksPageInput", userWorksPageInput);
  location.href = 'sсheme_works.html';
}; // Объемы в ОСиОС


var estimateBtn = document.getElementById('submit-estimate');

estimateBtn.onclick = function (e) {
  e.preventDefault();
  var userInput = document.getElementById('textarea').value;
  localStorage.setItem("userInput", userInput);
  var projectData = JSON.stringify(Object(_layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__["default"])());
  localStorage.setItem("projectData", projectData);
  var userOrderPageInput = document.getElementById('input_page').value;
  localStorage.setItem("userOrderPageInput", userOrderPageInput);
  var userWorksPageInput = document.getElementById('input_page_works').value;
  localStorage.setItem("userWorksPageInput", userWorksPageInput);
  location.href = 'estimate.html';
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

/***/ "./src/layout/css/style.css":
/*!**********************************!*\
  !*** ./src/layout/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout/css/style.css");

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

/***/ "./src/layout/scripts/data/project-data-collect.js":
/*!*********************************************************!*\
  !*** ./src/layout/scripts/data/project-data-collect.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var projectIndex = document.getElementById('project-index'); // шифр

var projectName = document.getElementById('project-name'); // название объекта

var projectStageC = document.getElementById('project-stage-c'); //стадия С

var projectStageA = document.getElementById('project-stage-a'); // стадия А

var projectStagePPD = document.getElementById('project-stage-ppd'); // стадия ППД

var gipName = document.getElementById('gip'); // ГИП

var bossName = document.getElementById('boss'); // начальник

var developerName = document.getElementById('developer'); // Разработчик

var developerSignature = document.getElementById('developer_signature'); // Разработчик

var bossSignature = document.getElementById('boss_signature'); // Разработчик

function projectDataCollect() {
  var stage;

  if (projectStageC.checked) {
    stage = 'С';
  } else if (projectStageA.checked) {
    stage = 'А';
  } else if (projectStagePPD.checked) {
    stage = 'ППД';
  }

  var projectData = {
    cipher: projectIndex.value,
    nameOfProject: projectName.value,
    stageOfProject: stage,
    nameOfGip: gipName.value,
    nameOfBoss: bossName.value,
    nameOfDeveloper: developerName.value,
    isDeveloperSignature: developerSignature.checked,
    isBossSignature: bossSignature.checked
  };
  console.log(projectData);
  return projectData;
}

/* harmony default export */ __webpack_exports__["default"] = (projectDataCollect);

/***/ }),

/***/ "./src/layout/scripts/data/show-saved-data.js":
/*!****************************************************!*\
  !*** ./src/layout/scripts/data/show-saved-data.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var projectIndex = document.getElementById('project-index'); // шифр

var projectName = document.getElementById('project-name'); // название объекта

var projectStageC = document.getElementById('project-stage-c'); //стадия С

var projectStageA = document.getElementById('project-stage-a'); // стадия А

var projectStagePPD = document.getElementById('project-stage-ppd'); // стадия ППД

var gipName = document.getElementById('gip'); // ГИП

var bossName = document.getElementById('boss'); // начальник

var developerName = document.getElementById('developer'); // Разработчик

var textArea = document.getElementById('textarea'); // Поле ввода ЩУЭ

var projectData = JSON.parse(localStorage.getItem("projectData"));
console.log(gipName[0].value);
var userInput = localStorage.getItem("userInput");

var showSavedData = function showSavedData() {
  projectIndex.value = projectData.cipher;
  projectName.value = projectData.nameOfProject;
  textArea.value = userInput;

  if (projectData.stageOfProject === "С") {
    projectStageC.setAttribute('checked', true);
    projectStageA.removeAttribute('checked');
    projectStagePPD.removeAttribute('checked');
  } else if (projectData.stageOfProject === "А") {
    projectStageC.removeAttribute('checked');
    projectStageA.setAttribute('checked', true);
    projectStagePPD.removeAttribute('checked');
  } else if (projectData.stageOfProject === "ППД") {
    projectStageC.removeAttribute('checked');
    projectStageA.removeAttribute('checked');
    projectStagePPD.setAttribute('checked', true);
  }

  for (var i = 0; i < gipName.length; i += 1) {
    if (projectData.nameOfGip === gipName[i].value) {
      gipName.options[i].selected = true;
    }
  }

  for (var _i = 0; _i < bossName.length; _i += 1) {
    if (projectData.nameOfBoss === bossName[_i].value) {
      bossName.options[_i].selected = true;
    }
  }

  for (var _i2 = 0; _i2 < developerName.length; _i2 += 1) {
    if (projectData.nameOfDeveloper === developerName[_i2].value) {
      developerName.options[_i2].selected = true;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showSavedData);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9zdHlsZS5jc3M/MDhlYSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZGF0YS9wcm9qZWN0LWRhdGEtY29sbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZGF0YS9zaG93LXNhdmVkLWRhdGEuanMiXSwibmFtZXMiOlsibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNob3dTYXZlZERhdGEiLCJ1c2VyT3JkZXJQYWdlSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ1c2VyV29ya3NQYWdlSW5wdXQiLCJvcmRlckxpc3RzU3VibWl0QnV0dG9uIiwib25jbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsInNldEl0ZW0iLCJwcm9qZWN0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9qZWN0RGF0YUNvbGxlY3QiLCJsb2NhdGlvbiIsImhyZWYiLCJzaGVtZUJ0biIsIndvcmtzU3VibWl0QnV0dG9uIiwic2hlbWVNYWluQnRuIiwiZXN0aW1hdGVCdG4iLCJwcm9qZWN0SW5kZXgiLCJwcm9qZWN0TmFtZSIsInByb2plY3RTdGFnZUMiLCJwcm9qZWN0U3RhZ2VBIiwicHJvamVjdFN0YWdlUFBEIiwiZ2lwTmFtZSIsImJvc3NOYW1lIiwiZGV2ZWxvcGVyTmFtZSIsImRldmVsb3BlclNpZ25hdHVyZSIsImJvc3NTaWduYXR1cmUiLCJzdGFnZSIsImNoZWNrZWQiLCJjaXBoZXIiLCJuYW1lT2ZQcm9qZWN0Iiwic3RhZ2VPZlByb2plY3QiLCJuYW1lT2ZHaXAiLCJuYW1lT2ZCb3NzIiwibmFtZU9mRGV2ZWxvcGVyIiwiaXNEZXZlbG9wZXJTaWduYXR1cmUiLCJpc0Jvc3NTaWduYXR1cmUiLCJjb25zb2xlIiwibG9nIiwidGV4dEFyZWEiLCJwYXJzZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImkiLCJsZW5ndGgiLCJvcHRpb25zIiwic2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtB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YUFBTyxDQUFDdUIsT0FBUixDQUFnQkYsQ0FBaEIsRUFBbUJHLFFBQW5CLEdBQThCLElBQTlCO0FBQ0E7QUFDRDs7QUFDRCxPQUFLLElBQUlILEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdwQixRQUFRLENBQUNxQixNQUE3QixFQUFxQ0QsRUFBQyxJQUFJLENBQTFDLEVBQTZDO0FBQzVDLFFBQUlwQyxXQUFXLENBQUMwQixVQUFaLEtBQTJCVixRQUFRLENBQUNvQixFQUFELENBQVIsQ0FBWTVDLEtBQTNDLEVBQWtEO0FBQ2pEd0IsY0FBUSxDQUFDc0IsT0FBVCxDQUFpQkYsRUFBakIsRUFBb0JHLFFBQXBCLEdBQStCLElBQS9CO0FBQ0E7QUFDRDs7QUFDRCxPQUFLLElBQUlILEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUduQixhQUFhLENBQUNvQixNQUFsQyxFQUEwQ0QsR0FBQyxJQUFJLENBQS9DLEVBQWtEO0FBQ2pELFFBQUlwQyxXQUFXLENBQUMyQixlQUFaLEtBQWdDVixhQUFhLENBQUNtQixHQUFELENBQWIsQ0FBaUI1QyxLQUFyRCxFQUE0RDtBQUMzRHlCLG1CQUFhLENBQUNxQixPQUFkLENBQXNCRixHQUF0QixFQUF5QkcsUUFBekIsR0FBb0MsSUFBcEM7QUFDQTtBQUNEO0FBQ0QsQ0FqQ0Q7O0FBbUNlbkQsNEVBQWYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnOyBcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXHJcXG59XFxyXFxuKiB7XFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmb250LXNpemU6IDIxcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrOyAgIFxcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNzAwcHg7XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcblxcdGNvbG9yOiAgd2hpdGU7XFxyXFxuXFx0Y29sb3I6ICBibGFjazsgIFxcclxcbn1cXHJcXG4uYnRuLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcblxcdGJvcmRlcjogIzAwOEI4QiBzb2xpZCAycHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IC0ycHg7XFxyXFxufVxcclxcbi5pbnB1dF9wYWdlX19mb3JtIHtcXHJcXG5cXHR3aWR0aDogMjUlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI2lucHV0X3BhZ2Vfd29ya3MsXFxyXFxuI2lucHV0X3BhZ2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pbnB1dF9wYWdlIHAge1xcclxcblxcdGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuLmJ0bi1mb3JtIHtcXHJcXG5cXHR3aWR0aDogMzYlO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuLm1haW4taW5wdXQge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRoZWlnaHQ6IDQyM3B4O1xcclxcblxcdGJhY2tncm91bmQ6ICM0OEQxQ0M7XFxyXFxufVxcclxcbmgxIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4ubWFpbi1mb3JtLWlucHV0IHtcXHJcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxyXFxuXFx0aGVpZ2h0OiAyMDBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjQUZFRUVFO1xcclxcbn1cXHJcXG4ubGlua3Mge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRoZWlnaHQ6IDI2OXB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxufVxcclxcbmEge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHRcXHJcXG5cXHRjb2xvcjogIzkzOTM5MztcXHJcXG5cXHQvKnBhZGRpbmc6IDAgMTVweCA0MHB4IDE1cHg7Ki9cXHJcXG59XFxyXFxuYTpob3ZlciB7XFxyXFxuXFx0Y29sb3I6ICMwMGJhYzY7XFxyXFxuXFx0Ym9yZGVyOiAjMDBiYWM2IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuc2VsZWN0IHtcXHJcXG5cXHR3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcbi5zaWduYXR1cmVfaW5wdXR7XFxyXFxuXFx0d2lkdGg6IDk1JTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IDMwcHg7XFxyXFxuYmFja2dyb3VuZDogIzAwOEI4QjtcXHJcXG5jb2xvcjogd2hpdGU7XFxyXFxuYm9yZGVyOiBub25lO1xcclxcbmJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5tYXJnaW46IDhweCAwO1xcclxcbn1cXHJcXG4jbWFpbi1pbnB1dC1mb3JtIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5idG4tYmlnIHtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcbi5idG4tc21hbGwge1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuLmJ0bi1hcmVhIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHR0b3A6IDI1cHg7XFxyXFxufVxcclxcbi5idG4tYXJlYS1jbGVhcntcXHJcXG5cXHR0b3A6IDMzN3B4O1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1zdGFnZSBoM3tcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1zdGFnZSBzcGFue1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucHJvamVjdC1zdGFnZSBpbnB1dHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LW5hbWUsIFxcclxcbi5wcm9qZWN0LXN0YWdlLCBcXHJcXG4ucHJvamVjdC1wZWFwbGUsIFxcclxcbi5wcm9qZWN0LWRhdGUge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4jcHJvamVjdC1pbmRleCB7XFxyXFxuXFx0d2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuI3Byb2plY3QtbmFtZSB7XFxyXFxuXFx0d2lkdGg6IDc5JTtcXHJcXG59XFxyXFxuLmJ0bjpob3ZlciwgXFxyXFxuLmlucHV0LWJ0bjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDpcXHQjMDA4QzMzO1xcclxcblxcdGJvcmRlcjogIzBiNjYwMyBzb2xpZCAycHg7XFxyXFxufVxcclxcbi5idG4tYXJlYS1jbGVhcjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2M0NTIxMDtcXHJcXG5cXHRib3JkZXI6ICNjZjhkMTIgc29saWQgMnB4O1xcclxcbn1cXHJcXG4jdGV4dGFyZWF7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vbGF5b3V0L2Nzcy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgcHJvamVjdERhdGFDb2xsZWN0IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvZGF0YS9wcm9qZWN0LWRhdGEtY29sbGVjdCc7XG5pbXBvcnQgc2hvd1NhdmVkRGF0YSBmcm9tICcuL2xheW91dC9zY3JpcHRzL2RhdGEvc2hvdy1zYXZlZC1kYXRhJztcblxuLy8gaW1wb3J0IG1haW5PYmplY3RDb2xsZWN0IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvZGF0YS9tYWluLW9iamVjdC1jb2xsZWN0JztcblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdERhdGFcIikgIT0gbnVsbCkge1xuICAgIHNob3dTYXZlZERhdGEoKTtcbn1cblxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyT3JkZXJQYWdlSW5wdXQnKSkge1xuICAgIGNvbnN0IHVzZXJPcmRlclBhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9wYWdlJyk7XG4gICAgdXNlck9yZGVyUGFnZUlucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJPcmRlclBhZ2VJbnB1dCcpO1xufVxuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJXb3Jrc1BhZ2VJbnB1dCcpKSB7XG4gICAgY29uc3QgdXNlcldvcmtzUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2Vfd29ya3MnKTtcbiAgICB1c2VyV29ya3NQYWdlSW5wdXQudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcldvcmtzUGFnZUlucHV0Jyk7XG59XG5cblxuLy8g0J7Qv9GA0L7RgdC90YvQtVxuY29uc3Qgb3JkZXJMaXN0c1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtb3JkZXInKTtcbm9yZGVyTGlzdHNTdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJbnB1dFwiLCB1c2VySW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3REYXRhID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGFDb2xsZWN0KCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdERhdGFcIiwgcHJvamVjdERhdGEpO1xuXG4gICAgY29uc3QgdXNlck9yZGVyUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2UnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJPcmRlclBhZ2VJbnB1dFwiLCB1c2VyT3JkZXJQYWdlSW5wdXQpO1xuICAgIGNvbnN0IHVzZXJXb3Jrc1BhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9wYWdlX3dvcmtzJykudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyV29ya3NQYWdlSW5wdXRcIiwgdXNlcldvcmtzUGFnZUlucHV0KTtcblxuICAgIGxvY2F0aW9uLmhyZWYgPSAnb3JkZXItbGlzdC5odG1sJztcbn1cblxuLy8g0KHRhdC10LzRiyDQuiDQvtC/0YDQvtGB0L3Ri9C8XG5jb25zdCBzaGVtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtb3JkZXItc2hlbWVzJyk7XG5zaGVtZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcklucHV0XCIsIHVzZXJJbnB1dCk7XG5cbiAgICBsZXQgcHJvamVjdERhdGEgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YUNvbGxlY3QoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0RGF0YVwiLCBwcm9qZWN0RGF0YSk7XG5cbiAgICBjb25zdCB1c2VyT3JkZXJQYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfcGFnZScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck9yZGVyUGFnZUlucHV0XCIsIHVzZXJPcmRlclBhZ2VJbnB1dCk7XG4gICAgY29uc3QgdXNlcldvcmtzUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2Vfd29ya3MnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJXb3Jrc1BhZ2VJbnB1dFwiLCB1c2VyV29ya3NQYWdlSW5wdXQpO1xuXG4gICAgbG9jYXRpb24uaHJlZiA9ICdz0YFoZW1lX29yZGVyX3NoZWV0Lmh0bWwnO1xufVxuXG4vLyDQktC10LTQvtC80L7RgdGC0Lgg0YDQsNCx0L7RglxuY29uc3Qgd29ya3NTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXdvcmtzJyk7XG53b3Jrc1N1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcklucHV0XCIsIHVzZXJJbnB1dCk7XG5cbiAgICBsZXQgcHJvamVjdERhdGEgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YUNvbGxlY3QoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0RGF0YVwiLCBwcm9qZWN0RGF0YSk7XG5cbiAgICBjb25zdCB1c2VyT3JkZXJQYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfcGFnZScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck9yZGVyUGFnZUlucHV0XCIsIHVzZXJPcmRlclBhZ2VJbnB1dCk7XG4gICAgY29uc3QgdXNlcldvcmtzUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2Vfd29ya3MnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJXb3Jrc1BhZ2VJbnB1dFwiLCB1c2VyV29ya3NQYWdlSW5wdXQpO1xuXG4gICAgbG9jYXRpb24uaHJlZiA9ICdzY29wZU9mV29yay5odG1sJztcbn1cblxuLy8g0KHRhdC10LzRiyDQuiAtMTAzINGH0LDRgdGC0LhcbmNvbnN0IHNoZW1lTWFpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtd29ya3Mtc2hlbWVzJyk7XG5zaGVtZU1haW5CdG4ub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJbnB1dFwiLCB1c2VySW5wdXQpO1xuXG4gICAgbGV0IHByb2plY3REYXRhID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGFDb2xsZWN0KCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdERhdGFcIiwgcHJvamVjdERhdGEpO1xuXG4gICAgY29uc3QgdXNlck9yZGVyUGFnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0X3BhZ2UnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJPcmRlclBhZ2VJbnB1dFwiLCB1c2VyT3JkZXJQYWdlSW5wdXQpO1xuICAgIGNvbnN0IHVzZXJXb3Jrc1BhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9wYWdlX3dvcmtzJykudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyV29ya3NQYWdlSW5wdXRcIiwgdXNlcldvcmtzUGFnZUlucHV0KTtcbiAgICBcbiAgICBsb2NhdGlvbi5ocmVmID0gJ3PRgWhlbWVfd29ya3MuaHRtbCc7XG59XG5cbi8vINCe0LHRitC10LzRiyDQsiDQntCh0LjQntChXG5jb25zdCBlc3RpbWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtZXN0aW1hdGUnKTtcbmVzdGltYXRlQnRuLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJykudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VySW5wdXRcIiwgdXNlcklucHV0KTtcblxuICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhQ29sbGVjdCgpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3REYXRhXCIsIHByb2plY3REYXRhKTtcblxuICAgIGNvbnN0IHVzZXJPcmRlclBhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dF9wYWdlJykudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyT3JkZXJQYWdlSW5wdXRcIiwgdXNlck9yZGVyUGFnZUlucHV0KTtcbiAgICBjb25zdCB1c2VyV29ya3NQYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRfcGFnZV93b3JrcycpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcldvcmtzUGFnZUlucHV0XCIsIHVzZXJXb3Jrc1BhZ2VJbnB1dCk7XG4gICAgXG4gICAgbG9jYXRpb24uaHJlZiA9ICdlc3RpbWF0ZS5odG1sJztcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGZhZWFmZDQ5NzNmODg5MjAwNzRlNDZlNTU1YjEyZmMudHRmXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwibGV0IHByb2plY3RJbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWluZGV4Jyk7IC8vINGI0LjRhNGAXHJcbmxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTsgLy8g0L3QsNC30LLQsNC90LjQtSDQvtCx0YrQtdC60YLQsFxyXG5sZXQgcHJvamVjdFN0YWdlQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN0YWdlLWMnKTsgLy/RgdGC0LDQtNC40Y8g0KFcclxubGV0IHByb2plY3RTdGFnZUEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdGFnZS1hJyk7IC8vINGB0YLQsNC00LjRjyDQkFxyXG5sZXQgcHJvamVjdFN0YWdlUFBEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3RhZ2UtcHBkJyk7IC8vINGB0YLQsNC00LjRjyDQn9Cf0JRcclxubGV0IGdpcE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lwJyk7IC8vINCT0JjQn1xyXG5sZXQgYm9zc05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9zcycpOyAvLyDQvdCw0YfQsNC70YzQvdC40LpcclxubGV0IGRldmVsb3Blck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV2ZWxvcGVyJyk7IC8vINCg0LDQt9GA0LDQsdC+0YLRh9C40LpcclxubGV0IGRldmVsb3BlclNpZ25hdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZlbG9wZXJfc2lnbmF0dXJlJyk7IC8vINCg0LDQt9GA0LDQsdC+0YLRh9C40LpcclxubGV0IGJvc3NTaWduYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9zc19zaWduYXR1cmUnKTsgLy8g0KDQsNC30YDQsNCx0L7RgtGH0LjQulxyXG5cclxuZnVuY3Rpb24gcHJvamVjdERhdGFDb2xsZWN0KCkge1xyXG5cclxuXHRsZXQgc3RhZ2U7XHJcblx0aWYgKHByb2plY3RTdGFnZUMuY2hlY2tlZCkge1xyXG5cdFx0c3RhZ2UgPSAn0KEnO1xyXG5cdH0gZWxzZSBpZiAocHJvamVjdFN0YWdlQS5jaGVja2VkKSB7XHJcblx0XHRzdGFnZSA9ICfQkCc7XHJcblx0fSBlbHNlIGlmIChwcm9qZWN0U3RhZ2VQUEQuY2hlY2tlZCkge1xyXG5cdFx0c3RhZ2UgPSAn0J/Qn9CUJztcclxuXHR9XHJcblxyXG5cdGxldCBwcm9qZWN0RGF0YSA9IHtcclxuXHRcdGNpcGhlcjogcHJvamVjdEluZGV4LnZhbHVlLFxyXG5cdFx0bmFtZU9mUHJvamVjdDogcHJvamVjdE5hbWUudmFsdWUsXHJcblx0XHRzdGFnZU9mUHJvamVjdDogc3RhZ2UsXHJcblx0XHRuYW1lT2ZHaXA6IGdpcE5hbWUudmFsdWUsXHJcblx0XHRuYW1lT2ZCb3NzOiBib3NzTmFtZS52YWx1ZSxcclxuXHRcdG5hbWVPZkRldmVsb3BlcjogZGV2ZWxvcGVyTmFtZS52YWx1ZSxcclxuXHRcdGlzRGV2ZWxvcGVyU2lnbmF0dXJlOiBkZXZlbG9wZXJTaWduYXR1cmUuY2hlY2tlZCxcclxuXHRcdGlzQm9zc1NpZ25hdHVyZTogYm9zc1NpZ25hdHVyZS5jaGVja2VkLFxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhwcm9qZWN0RGF0YSk7XHJcblx0cmV0dXJuIHByb2plY3REYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RGF0YUNvbGxlY3Q7XHJcbiIsImxldCBwcm9qZWN0SW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbmRleCcpOyAvLyDRiNC40YTRgFxyXG5sZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7IC8vINC90LDQt9Cy0LDQvdC40LUg0L7QsdGK0LXQutGC0LBcclxubGV0IHByb2plY3RTdGFnZUMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdGFnZS1jJyk7IC8v0YHRgtCw0LTQuNGPINChXHJcbmxldCBwcm9qZWN0U3RhZ2VBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3RhZ2UtYScpOyAvLyDRgdGC0LDQtNC40Y8g0JBcclxubGV0IHByb2plY3RTdGFnZVBQRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN0YWdlLXBwZCcpOyAvLyDRgdGC0LDQtNC40Y8g0J/Qn9CUXHJcbmxldCBnaXBOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpcCcpOyAvLyDQk9CY0J9cclxubGV0IGJvc3NOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvc3MnKTsgLy8g0L3QsNGH0LDQu9GM0L3QuNC6XHJcbmxldCBkZXZlbG9wZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmVsb3BlcicpOyAvLyDQoNCw0LfRgNCw0LHQvtGC0YfQuNC6XHJcblxyXG5sZXQgdGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKTsgLy8g0J/QvtC70LUg0LLQstC+0LTQsCDQqdCj0K1cclxuXHJcbmxldCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0RGF0YVwiKSk7XHJcbmNvbnNvbGUubG9nKGdpcE5hbWVbMF0udmFsdWUpO1xyXG5cclxubGV0IHVzZXJJbnB1dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklucHV0XCIpO1xyXG5cclxuXHJcbmxldCBzaG93U2F2ZWREYXRhID0gZnVuY3Rpb24gKCkge1xyXG5cdHByb2plY3RJbmRleC52YWx1ZSA9IHByb2plY3REYXRhLmNpcGhlcjtcclxuXHRwcm9qZWN0TmFtZS52YWx1ZSA9IHByb2plY3REYXRhLm5hbWVPZlByb2plY3Q7XHJcblx0dGV4dEFyZWEudmFsdWUgPSB1c2VySW5wdXQ7XHJcblx0aWYgKHByb2plY3REYXRhLnN0YWdlT2ZQcm9qZWN0ID09PSBcItChXCIpIHtcclxuXHRcdHByb2plY3RTdGFnZUMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRwcm9qZWN0U3RhZ2VBLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cdFx0cHJvamVjdFN0YWdlUFBELnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAocHJvamVjdERhdGEuc3RhZ2VPZlByb2plY3QgPT09IFwi0JBcIikge1xyXG5cdFx0cHJvamVjdFN0YWdlQy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcclxuXHRcdHByb2plY3RTdGFnZUEuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRwcm9qZWN0U3RhZ2VQUEQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblx0fSBlbHNlIGlmIChwcm9qZWN0RGF0YS5zdGFnZU9mUHJvamVjdCA9PT0gXCLQn9Cf0JRcIikge1xyXG5cdFx0cHJvamVjdFN0YWdlQy5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcclxuXHRcdHByb2plY3RTdGFnZUEucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblx0XHRwcm9qZWN0U3RhZ2VQUEQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGdpcE5hbWUubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdGlmIChwcm9qZWN0RGF0YS5uYW1lT2ZHaXAgPT09IGdpcE5hbWVbaV0udmFsdWUpIHtcclxuXHRcdFx0Z2lwTmFtZS5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib3NzTmFtZS5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0aWYgKHByb2plY3REYXRhLm5hbWVPZkJvc3MgPT09IGJvc3NOYW1lW2ldLnZhbHVlKSB7XHJcblx0XHRcdGJvc3NOYW1lLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGRldmVsb3Blck5hbWUubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdGlmIChwcm9qZWN0RGF0YS5uYW1lT2ZEZXZlbG9wZXIgPT09IGRldmVsb3Blck5hbWVbaV0udmFsdWUpIHtcclxuXHRcdFx0ZGV2ZWxvcGVyTmFtZS5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3dTYXZlZERhdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=