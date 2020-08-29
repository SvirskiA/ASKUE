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
exports.push([module.i, "@font-face {\r\n    font-family: 'GOST 2.304-81 type A'; \r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \r\n   }\r\n\r\n* {\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-size: 21px;\r\n\tfont-family: 'GOST 2.304-81 type A', sans-serif;\r\n\tcolor: black;   \r\n}\r\n\r\n.container {\r\n\twidth: 700px;\r\n\tmargin: auto;\r\n}\r\n\r\nheader {\r\n\tpadding: 15px 0;\r\n\tbackground: #48D1CC;\r\n\tcolor:  white;\r\n\t/*display: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;*/\r\n\tcolor:  black;  \r\n}\r\n\r\n.main-input {\r\n\tpadding: 15px 0;\r\n\theight: 423px;\r\n\r\n\tbackground: #48D1CC;\r\n}\r\nh1 {\r\n\tmargin-bottom: 10px;\r\n}\r\n.main-form-input {\r\n\tpadding: 15px 0;\r\n\theight: 200px;\r\n\tbackground: #AFEEEE;\r\n}\r\n.links {\r\n\tpadding: 15px 0;\r\n\theight: 269px;\r\n\tbackground: #AFEEEE;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\t\r\n\tcolor: #939393;\r\n\t/*padding: 0 15px 40px 15px;*/\r\n}\r\na:hover {\r\n\tcolor: #00bac6;\r\n\tborder: #00bac6 2px solid;\r\n}\r\n\r\n\r\nselect {\r\n\twidth: 150px;\r\n}\r\n\r\n.signature_input{\r\n\twidth: 95%;\r\n    display: inline-block;\r\n}\r\n\r\n.btn {\r\nwidth: 100%;\r\nheight: 30px;\r\nbackground: #008B8B;\r\ncolor: white;\r\nborder: none;\r\nborder-radius: 5px;\r\nmargin: 8px 0;\r\n}\r\n#main-input-form {\r\n\tposition: relative;\r\n}\r\n.btn-area {\r\n\twidth: 50%;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 25px;\r\n}\r\n.btn-area-clear{\r\n\ttop: 337px;\r\n}\r\nh2 {\r\n\ttext-align: center;\r\n\tpadding-bottom: 10px;\r\n}\r\n.project-stage h3{\r\n\tdisplay: inline;\r\n\tmargin-right: 15px;\r\n}\r\n.project-stage span{\r\n\tfont-weight: bold;\r\n}\r\n.project-stage input{\r\n\tmargin-right: 15px;\r\n}\r\n.project-name, .project-stage, .project-peaple, .project-date {\r\n\tpadding-bottom: 10px;\r\n}\r\n#project-index {\r\n\twidth: 20%;\r\n}\r\n#project-name {\r\n\twidth: 79%;\r\n}\r\n.btn:hover, .input-btn:hover {\r\n\tbackground:\t#008C33;\r\n\tborder: #0b6603 solid 2px;\r\n}\r\n.btn-area-clear:hover {\r\n\tbackground: #c45210;\r\n\tborder: #cf8d12 solid 2px;\r\n}\r\n\r\n#textarea{\r\n\twidth: 100%;\r\n}", ""]);
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
/* harmony import */ var _layout_scripts_data_main_object_collect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/scripts/data/main-object-collect */ "./src/layout/scripts/data/main-object-collect.js");




var orderListsSubmitButton = document.querySelector('#submit-order');

if (localStorage.getItem("projectData") != null) {
  Object(_layout_scripts_data_show_saved_data__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

orderListsSubmitButton.onclick = function (e) {
  e.preventDefault();
  console.log('+');
  var userInput = document.getElementById('textarea').value;
  localStorage.setItem("userInput", userInput); // let mainArray = mainObjectCollect();
  // localStorage.setItem("mainArray", mainArray);

  var projectData = JSON.stringify(Object(_layout_scripts_data_project_data_collect__WEBPACK_IMPORTED_MODULE_1__["default"])());
  localStorage.setItem("projectData", projectData); // console.log()
  // location.href = 'order_sheet.html';

  location.href = 'order-list.html'; // window.open('category.html', '_blank');
};

var worksSubmitButton = document.getElementById('submit-works');

worksSubmitButton.onclick = function (e) {
  e.preventDefault();
  console.log('+'); // let mainArray = mainObjectCollect();
  // localStorage.setItem("mainArray", mainArray);
  // let projectData = projectDataCollect();
  // localStorage.setItem("projectData", projectData);

  var projectData = localStorage.getItem("projectData");
  console.log(projectData); // let mainArray = [];
  // for (let i = 0; i < mainJSON.length; i += 1) {
  //     mainArray.push(JSON.parse(mainJSON[i]));
  // }
  // console.log(mainArray)
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

var exported = content.locals ? content.locals : {};



module.exports = exported;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvY3NzL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2Nzcy9zdHlsZS5jc3M/MDhlYSIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L3NjcmlwdHMvZGF0YS9tYWluLW9iamVjdC1jb2xsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9kYXRhL3Byb2plY3QtZGF0YS1jb2xsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvc2NyaXB0cy9kYXRhL3Nob3ctc2F2ZWQtZGF0YS5qcyJdLCJuYW1lcyI6WyJvcmRlckxpc3RzU3VibWl0QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNob3dTYXZlZERhdGEiLCJvbmNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInVzZXJJbnB1dCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJzZXRJdGVtIiwicHJvamVjdERhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvamVjdERhdGFDb2xsZWN0IiwibG9jYXRpb24iLCJocmVmIiwid29ya3NTdWJtaXRCdXR0b24iLCJtYWluT2JqZWN0Q29sbGVjdCIsInN0ciIsImFycmF5T2ZVc2VySW5wdXQiLCJzcGxpdCIsInJlc3VsdEFycmF5IiwibGVnZW5kQXJyYXkiLCJTRU0iLCJhcnIiLCJjb3VudE9mU0VNIiwiaW5kZXhPZiIsImJyZWFrZXIxVmFsdWUiLCJicmVha2VyMlZhbHVlIiwiU0VNVHlwZSIsImNvdW50ZXJDb3VudEluU0VNIiwibGVuZ3RoIiwiaW5wdXRGcm9tU2VtIiwicGlsbGFyVHlwZSIsInBoYXNlMVZhbHVlIiwicGhhc2UyVmFsdWUiLCJvdXRCcmVha2VyMSIsIm91dEJyZWFrZXIyIiwidG9Mb3dlckNhc2UiLCJkZXNjcmlwdGlvbiIsImFsZXJ0IiwiaW5zdGFsbGF0aW9uIiwiZnVsbERlY3JpcHRpb24iLCJpIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInByb2plY3RJbmRleCIsInByb2plY3ROYW1lIiwicHJvamVjdFN0YWdlQyIsInByb2plY3RTdGFnZUEiLCJwcm9qZWN0U3RhZ2VQUEQiLCJnaXBOYW1lIiwiYm9zc05hbWUiLCJkZXZlbG9wZXJOYW1lIiwiZGV2ZWxvcGVyU2lnbmF0dXJlIiwiYm9zc1NpZ25hdHVyZSIsInN0YWdlIiwiY2hlY2tlZCIsImNpcGhlciIsIm5hbWVPZlByb2plY3QiLCJzdGFnZU9mUHJvamVjdCIsIm5hbWVPZkdpcCIsIm5hbWVPZkJvc3MiLCJuYW1lT2ZEZXZlbG9wZXIiLCJpc0RldmVsb3BlclNpZ25hdHVyZSIsImlzQm9zc1NpZ25hdHVyZSIsInRleHRBcmVhIiwicGFyc2UiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvcHRpb25zIiwic2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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LEVBQUMsSUFBSSxDQUExQyxFQUE2QztBQUM1QyxRQUFJakMsV0FBVyxDQUFDc0QsVUFBWixLQUEyQlYsUUFBUSxDQUFDWCxFQUFELENBQVIsQ0FBWW5DLEtBQTNDLEVBQWtEO0FBQ2pEOEMsY0FBUSxDQUFDa0IsT0FBVCxDQUFpQjdCLEVBQWpCLEVBQW9COEIsUUFBcEIsR0FBK0IsSUFBL0I7QUFDQTtBQUNEOztBQUNELE9BQUssSUFBSTlCLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdZLGFBQWEsQ0FBQ3hCLE1BQWxDLEVBQTBDWSxHQUFDLElBQUksQ0FBL0MsRUFBa0Q7QUFDakQsUUFBSWpDLFdBQVcsQ0FBQ3VELGVBQVosS0FBZ0NWLGFBQWEsQ0FBQ1osR0FBRCxDQUFiLENBQWlCbkMsS0FBckQsRUFBNEQ7QUFDM0QrQyxtQkFBYSxDQUFDaUIsT0FBZCxDQUFzQjdCLEdBQXRCLEVBQXlCOEIsUUFBekIsR0FBb0MsSUFBcEM7QUFDQTtBQUNEO0FBQ0QsQ0FqQ0Q7O0FBbUNlekUsNEVBQWYsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ZvbnRzL0dPU1QgMi4zMDQtODEgdHlwZSBBLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR09TVCAyLjMwNC04MSB0eXBlIEEnOyBcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXHJcXG4gICB9XFxyXFxuXFxyXFxuKiB7XFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmb250LXNpemU6IDIxcHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdHT1NUIDIuMzA0LTgxIHR5cGUgQScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IGJsYWNrOyAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogNzAwcHg7XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjNDhEMUNDO1xcclxcblxcdGNvbG9yOiAgd2hpdGU7XFxyXFxuXFx0LypkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyOyovXFxyXFxuXFx0Y29sb3I6ICBibGFjazsgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pbnB1dCB7XFxyXFxuXFx0cGFkZGluZzogMTVweCAwO1xcclxcblxcdGhlaWdodDogNDIzcHg7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZDogIzQ4RDFDQztcXHJcXG59XFxyXFxuaDEge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5tYWluLWZvcm0taW5wdXQge1xcclxcblxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRoZWlnaHQ6IDIwMHB4O1xcclxcblxcdGJhY2tncm91bmQ6ICNBRkVFRUU7XFxyXFxufVxcclxcbi5saW5rcyB7XFxyXFxuXFx0cGFkZGluZzogMTVweCAwO1xcclxcblxcdGhlaWdodDogMjY5cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogI0FGRUVFRTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcdFxcclxcblxcdGNvbG9yOiAjOTM5MzkzO1xcclxcblxcdC8qcGFkZGluZzogMCAxNXB4IDQwcHggMTVweDsqL1xcclxcbn1cXHJcXG5hOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogIzAwYmFjNjtcXHJcXG5cXHRib3JkZXI6ICMwMGJhYzYgMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcblxcdHdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25hdHVyZV9pbnB1dHtcXHJcXG5cXHR3aWR0aDogOTUlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbmhlaWdodDogMzBweDtcXHJcXG5iYWNrZ3JvdW5kOiAjMDA4QjhCO1xcclxcbmNvbG9yOiB3aGl0ZTtcXHJcXG5ib3JkZXI6IG5vbmU7XFxyXFxuYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbm1hcmdpbjogOHB4IDA7XFxyXFxufVxcclxcbiNtYWluLWlucHV0LWZvcm0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmJ0bi1hcmVhIHtcXHJcXG5cXHR3aWR0aDogNTAlO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHR0b3A6IDI1cHg7XFxyXFxufVxcclxcbi5idG4tYXJlYS1jbGVhcntcXHJcXG5cXHR0b3A6IDMzN3B4O1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1zdGFnZSBoM3tcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmU7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1zdGFnZSBzcGFue1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucHJvamVjdC1zdGFnZSBpbnB1dHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcbi5wcm9qZWN0LW5hbWUsIC5wcm9qZWN0LXN0YWdlLCAucHJvamVjdC1wZWFwbGUsIC5wcm9qZWN0LWRhdGUge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4jcHJvamVjdC1pbmRleCB7XFxyXFxuXFx0d2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuI3Byb2plY3QtbmFtZSB7XFxyXFxuXFx0d2lkdGg6IDc5JTtcXHJcXG59XFxyXFxuLmJ0bjpob3ZlciwgLmlucHV0LWJ0bjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDpcXHQjMDA4QzMzO1xcclxcblxcdGJvcmRlcjogIzBiNjYwMyBzb2xpZCAycHg7XFxyXFxufVxcclxcbi5idG4tYXJlYS1jbGVhcjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogI2M0NTIxMDtcXHJcXG5cXHRib3JkZXI6ICNjZjhkMTIgc29saWQgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dGFyZWF7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vbGF5b3V0L2Nzcy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgcHJvamVjdERhdGFDb2xsZWN0IGZyb20gJy4vbGF5b3V0L3NjcmlwdHMvZGF0YS9wcm9qZWN0LWRhdGEtY29sbGVjdCc7XG5pbXBvcnQgc2hvd1NhdmVkRGF0YSBmcm9tICcuL2xheW91dC9zY3JpcHRzL2RhdGEvc2hvdy1zYXZlZC1kYXRhJztcblxuXG5pbXBvcnQgbWFpbk9iamVjdENvbGxlY3QgZnJvbSAnLi9sYXlvdXQvc2NyaXB0cy9kYXRhL21haW4tb2JqZWN0LWNvbGxlY3QnO1xuXG5cbmNvbnN0IG9yZGVyTGlzdHNTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LW9yZGVyJyk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3REYXRhXCIpICE9IG51bGwpIHtcbiAgICBzaG93U2F2ZWREYXRhKCk7XG59XG5cblxub3JkZXJMaXN0c1N1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnNvbGUubG9nKCcrJyk7XG5cbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dGFyZWEnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJbnB1dFwiLCB1c2VySW5wdXQpO1xuXG4gICAgLy8gbGV0IG1haW5BcnJheSA9IG1haW5PYmplY3RDb2xsZWN0KCk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYWluQXJyYXlcIiwgbWFpbkFycmF5KTtcblxuICAgIGxldCBwcm9qZWN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3REYXRhQ29sbGVjdCgpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3REYXRhXCIsIHByb2plY3REYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgLy8gbG9jYXRpb24uaHJlZiA9ICdvcmRlcl9zaGVldC5odG1sJztcbiAgICBsb2NhdGlvbi5ocmVmID0gJ29yZGVyLWxpc3QuaHRtbCc7XG4gICAgLy8gd2luZG93Lm9wZW4oJ2NhdGVnb3J5Lmh0bWwnLCAnX2JsYW5rJyk7XG59XG5cbmNvbnN0IHdvcmtzU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC13b3JrcycpO1xuXG53b3Jrc1N1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnNvbGUubG9nKCcrJylcbiAgICAvLyBsZXQgbWFpbkFycmF5ID0gbWFpbk9iamVjdENvbGxlY3QoKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1haW5BcnJheVwiLCBtYWluQXJyYXkpO1xuXG4gICAgLy8gbGV0IHByb2plY3REYXRhID0gcHJvamVjdERhdGFDb2xsZWN0KCk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0RGF0YVwiLCBwcm9qZWN0RGF0YSk7XG4gICAgbGV0IHByb2plY3REYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0RGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0RGF0YSk7XG5cblxuXG5cbiAgICBcblxuICAgIC8vIGxldCBtYWluQXJyYXkgPSBbXTtcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgbWFpbkpTT04ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyAgICAgbWFpbkFycmF5LnB1c2goSlNPTi5wYXJzZShtYWluSlNPTltpXSkpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhtYWluQXJyYXkpXG59IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRmYWVhZmQ0OTczZjg4OTIwMDc0ZTQ2ZTU1NWIxMmZjLnR0ZlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiZnVuY3Rpb24gbWFpbk9iamVjdENvbGxlY3Qoc3RyKSB7XHJcblx0bGV0IGFycmF5T2ZVc2VySW5wdXQgPSBzdHIuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuXHJcblx0bGV0IGxlZ2VuZEFycmF5ID0gYXJyYXlPZlVzZXJJbnB1dFswXS5zcGxpdCgnLCcpO1xyXG5cclxuXHRmdW5jdGlvbiBTRU0oYXJyKSB7XHJcblxyXG5cdFx0dGhpcy5jb3VudE9mU0VNID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCfQmtC+0LvQuNGH0LXRgdGC0LLQvicpXTtcclxuXHRcdHRoaXMuYnJlYWtlcjFWYWx1ZSA9ICthcnJbbGVnZW5kQXJyYXkuaW5kZXhPZignSdCd0J7QnF/QkNCSMScpXS5zcGxpdCgnICcpWzBdO1xyXG5cdFx0dGhpcy5icmVha2VyMlZhbHVlID0gK2FycltsZWdlbmRBcnJheS5pbmRleE9mKCdJ0J3QntCcX9CQ0JIyJyldLnNwbGl0KCcgJylbMF0gfHwgbnVsbDtcclxuXHRcdHRoaXMuU0VNVHlwZSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0KnQo9CtJyldO1xyXG5cdFx0dGhpcy5jb3VudGVyQ291bnRJblNFTSA9ICt0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVszXTtcclxuXHJcblx0XHRpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMVxyXG5cdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gJ9CSJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLmlucHV0RnJvbVNlbSA9IGFycltsZWdlbmRBcnJheS5pbmRleE9mKCfQotCY0J9f0JLQktCe0JTQkCcpXTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV0ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRGcm9tU2VtID0gJ9CS0JInO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbnB1dEZyb21TZW0gPSBhcnJbbGVnZW5kQXJyYXkuaW5kZXhPZign0KLQmNCfX9CS0JLQntCU0JAnKV07XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5waWxsYXJUeXBlID0gYXJyW2xlZ2VuZEFycmF5LmluZGV4T2YoJ9Ci0JjQn1/QntCf0J7QoNCrJyldIHx8ICfQodCSLTk1JztcclxuXHJcblx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbMl0gPT09ICczJykge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDM7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IDE7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMidcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMztcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuU0VNVHlwZS5zcGxpdCgnLScpWzJdID09PSAnMSdcclxuXHRcdFx0JiYgdGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMSkge1xyXG5cdFx0XHR0aGlzLnBoYXNlMVZhbHVlID0gMTtcclxuXHRcdFx0dGhpcy5waGFzZTJWYWx1ZSA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5vdXRCcmVha2VyMSA9IGAke3RoaXMucGhhc2UxVmFsdWV9IC0gJHt0aGlzLmJyZWFrZXIxVmFsdWV9YDtcclxuXHRcdHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIgP1xyXG5cdFx0XHR0aGlzLm91dEJyZWFrZXIyID0gYCR7dGhpcy5waGFzZTJWYWx1ZX0gLSAke3RoaXMuYnJlYWtlcjJWYWx1ZX1gIDpcclxuXHRcdFx0dGhpcy5vdXRCcmVha2VyMiA9IG51bGw7XHJcblxyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxICYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQsicpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidCw0Y8g0LvQuNC90LjRjzog0LLQvtC30LTRg9GI0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDEgJiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9C6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LDRjyDQu9C40L3QuNGPOiDQutCw0LHQtdC70YzQvdCw0Y8uJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiAodGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJ9C6JykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQutCyJykgfHwgKHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQstC6JykpIHtcclxuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9ICfQntGC0YXQvtC00Y/RidC40LUg0LvQuNC90LjQuDog0LrQsNCx0LXQu9GM0L3QsNGPINC4INCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQutC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQutCw0LHQtdC70YzQvdGL0LUuJztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb3VudGVyQ291bnRJblNFTSA9PT0gMlxyXG5cdFx0XHQmJiB0aGlzLmlucHV0RnJvbVNlbS50b0xvd2VyQ2FzZSgpID09PSAnMdGE0LonKSB7XHJcblx0XHRcdHRoaXMuZGVzY3JpcHRpb24gPSAn0J7RgtGF0L7QtNGP0YnQuNC1INC70LjQvdC40Lg6IDPRhCAtINCy0L7Qt9C00YPRiNC90LDRjywgMdGEIC0g0LrQsNCx0LXQu9GM0L3QsNGPLic7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDJcclxuXHRcdFx0JiYgdGhpcy5pbnB1dEZyb21TZW0udG9Mb3dlckNhc2UoKSA9PT0gJzPRhNC6Jykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiAz0YQgLSDQutCw0LHQtdC70YzQvdCw0Y8sIDHRhCAtINCy0L7Qt9C00YPRiNC90LDRjy4nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAyXHJcblx0XHRcdCYmIHRoaXMuaW5wdXRGcm9tU2VtLnRvTG93ZXJDYXNlKCkgPT09ICfQstCyJykge1xyXG5cdFx0XHR0aGlzLmRlc2NyaXB0aW9uID0gJ9Ce0YLRhdC+0LTRj9GJ0LjQtSDQu9C40L3QuNC4OiDQstC+0LfQtNGD0YjQvdGL0LUuJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFsZXJ0KGAke3RoaXMuaW5wdXRGcm9tU2VtfSDQvdC1INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCICR7dGhpcy5TRU1UeXBlfSwg0L/QtdGA0LXQv9GA0L7QstC10YDRjNGC0LUg0LLQstC+0LTQuNC80YvQtSDQtNCw0L3QvdGL0LVgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ9GB0LItOTUnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0L7Qv9C+0YDQtSDQodCSLTk1JztcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5TRU1UeXBlLnNwbGl0KCctJylbNF0gPT09ICcxJyAmJiB0aGlzLnBpbGxhclR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ9GB0LItMTEwJykge1xyXG5cdFx0XHR0aGlzLmluc3RhbGxhdGlvbiA9ICfQvdCwINC+0L/QvtGA0LUg0KHQki0xMTAnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzInKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLRi9C90L7RgdC90L7QuSDRgdGC0L7QudC60LUnO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzMnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LLQvdC10YjQvdC10Lkg0YHRgtC10L3QtSDQt9C00LDQvdC40Y8nO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLlNFTVR5cGUuc3BsaXQoJy0nKVs0XSA9PT0gJzQnKSB7XHJcblx0XHRcdHRoaXMuaW5zdGFsbGF0aW9uID0gJ9C90LAg0LbQtdC70LXQt9C+0LHQtdGC0L7QvdC90L7QuSDQv9GA0LjRgdGC0LDQstC60LUg0J/QojQzLTInO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvdW50ZXJDb3VudEluU0VNID09PSAxKSB7XHJcblx0XHRcdHRoaXMuZnVsbERlY3JpcHRpb24gPSBgJHt0aGlzLlNFTVR5cGV9ICgke3RoaXMuYnJlYWtlcjFWYWx1ZX0g0JApLiAke3RoaXMuZGVzY3JpcHRpb259INCj0YHRgtCw0L3QvtCy0LrQsCAke3RoaXMuaW5zdGFsbGF0aW9ufS4g0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRgmA7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY291bnRlckNvdW50SW5TRU0gPT09IDIpIHtcclxuXHRcdFx0dGhpcy5mdWxsRGVjcmlwdGlvbiA9IGAke3RoaXMuU0VNVHlwZX0gKCR7dGhpcy5icmVha2VyMVZhbHVlfSDQkDsgJHt0aGlzLmJyZWFrZXIyVmFsdWV9INCQKS4gJHt0aGlzLmRlc2NyaXB0aW9ufSDQo9GB0YLQsNC90L7QstC60LAgJHt0aGlzLmluc3RhbGxhdGlvbn0uINCe0L/RgNC+0YHQvdGL0Lkg0LvQuNGB0YJgO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheU9mVXNlcklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAoYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpLmxlbmd0aCA9PT0gNikge1xyXG5cdFx0XHRyZXN1bHRBcnJheS5wdXNoKG5ldyBTRU0oYXJyYXlPZlVzZXJJbnB1dFtpXS5zcGxpdCgnLCcpKSk7XHJcblx0XHR9IGVsc2UgaWYgKGFycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGggPiA0KSB7XHJcblx0XHRcdGFsZXJ0KGDQtNC70LjQvdCwINC80LDRgdGB0LjQstCwICR7YXJyYXlPZlVzZXJJbnB1dFtpXX0gPSAke2FycmF5T2ZVc2VySW5wdXRbaV0uc3BsaXQoJywnKS5sZW5ndGh9INCy0LzQtdGB0YLQviA2IFxcbiDQtNCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyINC90LUg0LHRg9C00LXRgiDQvtCx0YDQsNCx0L7RgtCw0L1gKTtcclxuXHRcdCAgfVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhyZXN1bHRBcnJheSk7XHJcblxyXG5cdHJlc3VsdEFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGlmIChhLlNFTVR5cGUgPiBiLlNFTVR5cGUpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiByZXN1bHRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbk9iamVjdENvbGxlY3Q7XHJcbiIsImxldCBwcm9qZWN0SW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1pbmRleCcpOyAvLyDRiNC40YTRgFxyXG5sZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7IC8vINC90LDQt9Cy0LDQvdC40LUg0L7QsdGK0LXQutGC0LBcclxubGV0IHByb2plY3RTdGFnZUMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdGFnZS1jJyk7IC8v0YHRgtCw0LTQuNGPINChXHJcbmxldCBwcm9qZWN0U3RhZ2VBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3RhZ2UtYScpOyAvLyDRgdGC0LDQtNC40Y8g0JBcclxubGV0IHByb2plY3RTdGFnZVBQRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN0YWdlLXBwZCcpOyAvLyDRgdGC0LDQtNC40Y8g0J/Qn9CUXHJcbmxldCBnaXBOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpcCcpOyAvLyDQk9CY0J9cclxubGV0IGJvc3NOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvc3MnKTsgLy8g0L3QsNGH0LDQu9GM0L3QuNC6XHJcbmxldCBkZXZlbG9wZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmVsb3BlcicpOyAvLyDQoNCw0LfRgNCw0LHQvtGC0YfQuNC6XHJcbmxldCBkZXZlbG9wZXJTaWduYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV2ZWxvcGVyX3NpZ25hdHVyZScpOyAvLyDQoNCw0LfRgNCw0LHQvtGC0YfQuNC6XHJcbmxldCBib3NzU2lnbmF0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvc3Nfc2lnbmF0dXJlJyk7IC8vINCg0LDQt9GA0LDQsdC+0YLRh9C40LpcclxuXHJcbmZ1bmN0aW9uIHByb2plY3REYXRhQ29sbGVjdCgpIHtcclxuXHJcblx0bGV0IHN0YWdlO1xyXG5cdGlmIChwcm9qZWN0U3RhZ2VDLmNoZWNrZWQpIHtcclxuXHRcdHN0YWdlID0gJ9ChJztcclxuXHR9IGVsc2UgaWYgKHByb2plY3RTdGFnZUEuY2hlY2tlZCkge1xyXG5cdFx0c3RhZ2UgPSAn0JAnO1xyXG5cdH0gZWxzZSBpZiAocHJvamVjdFN0YWdlUFBELmNoZWNrZWQpIHtcclxuXHRcdHN0YWdlID0gJ9Cf0J/QlCc7XHJcblx0fVxyXG5cclxuXHRsZXQgcHJvamVjdERhdGEgPSB7XHJcblx0XHRjaXBoZXI6IHByb2plY3RJbmRleC52YWx1ZSxcclxuXHRcdG5hbWVPZlByb2plY3Q6IHByb2plY3ROYW1lLnZhbHVlLFxyXG5cdFx0c3RhZ2VPZlByb2plY3Q6IHN0YWdlLFxyXG5cdFx0bmFtZU9mR2lwOiBnaXBOYW1lLnZhbHVlLFxyXG5cdFx0bmFtZU9mQm9zczogYm9zc05hbWUudmFsdWUsXHJcblx0XHRuYW1lT2ZEZXZlbG9wZXI6IGRldmVsb3Blck5hbWUudmFsdWUsXHJcblx0XHRpc0RldmVsb3BlclNpZ25hdHVyZTogZGV2ZWxvcGVyU2lnbmF0dXJlLmNoZWNrZWQsXHJcblx0XHRpc0Jvc3NTaWduYXR1cmU6IGJvc3NTaWduYXR1cmUuY2hlY2tlZCxcclxuXHR9XHJcblx0Y29uc29sZS5sb2cocHJvamVjdERhdGEpO1xyXG5cdHJldHVybiBwcm9qZWN0RGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdERhdGFDb2xsZWN0O1xyXG4iLCJsZXQgcHJvamVjdEluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaW5kZXgnKTsgLy8g0YjQuNGE0YBcclxubGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpOyAvLyDQvdCw0LfQstCw0L3QuNC1INC+0LHRitC10LrRgtCwXHJcbmxldCBwcm9qZWN0U3RhZ2VDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Qtc3RhZ2UtYycpOyAvL9GB0YLQsNC00LjRjyDQoVxyXG5sZXQgcHJvamVjdFN0YWdlQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN0YWdlLWEnKTsgLy8g0YHRgtCw0LTQuNGPINCQXHJcbmxldCBwcm9qZWN0U3RhZ2VQUEQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1zdGFnZS1wcGQnKTsgLy8g0YHRgtCw0LTQuNGPINCf0J/QlFxyXG5sZXQgZ2lwTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXAnKTsgLy8g0JPQmNCfXHJcbmxldCBib3NzTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3NzJyk7IC8vINC90LDRh9Cw0LvRjNC90LjQulxyXG5sZXQgZGV2ZWxvcGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZlbG9wZXInKTsgLy8g0KDQsNC30YDQsNCx0L7RgtGH0LjQulxyXG5cclxubGV0IHRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJyk7IC8vINCf0L7Qu9C1INCy0LLQvtC00LAg0KnQo9CtXHJcblxyXG5sZXQgcHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdERhdGFcIikpO1xyXG5jb25zb2xlLmxvZyhnaXBOYW1lWzBdLnZhbHVlKTtcclxuXHJcbmxldCB1c2VySW5wdXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbnB1dFwiKTtcclxuXHJcblxyXG5sZXQgc2hvd1NhdmVkRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuXHRwcm9qZWN0SW5kZXgudmFsdWUgPSBwcm9qZWN0RGF0YS5jaXBoZXI7XHJcblx0cHJvamVjdE5hbWUudmFsdWUgPSBwcm9qZWN0RGF0YS5uYW1lT2ZQcm9qZWN0O1xyXG5cdHRleHRBcmVhLnZhbHVlID0gdXNlcklucHV0O1xyXG5cdGlmIChwcm9qZWN0RGF0YS5zdGFnZU9mUHJvamVjdCA9PT0gXCLQoVwiKSB7XHJcblx0XHRwcm9qZWN0U3RhZ2VDLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0cHJvamVjdFN0YWdlQS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcclxuXHRcdHByb2plY3RTdGFnZVBQRC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcclxuXHR9IGVsc2UgaWYgKHByb2plY3REYXRhLnN0YWdlT2ZQcm9qZWN0ID09PSBcItCQXCIpIHtcclxuXHRcdHByb2plY3RTdGFnZUMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblx0XHRwcm9qZWN0U3RhZ2VBLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0cHJvamVjdFN0YWdlUFBELnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cdH0gZWxzZSBpZiAocHJvamVjdERhdGEuc3RhZ2VPZlByb2plY3QgPT09IFwi0J/Qn9CUXCIpIHtcclxuXHRcdHByb2plY3RTdGFnZUMucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XHJcblx0XHRwcm9qZWN0U3RhZ2VBLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG5cdFx0cHJvamVjdFN0YWdlUFBELnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBnaXBOYW1lLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAocHJvamVjdERhdGEubmFtZU9mR2lwID09PSBnaXBOYW1lW2ldLnZhbHVlKSB7XHJcblx0XHRcdGdpcE5hbWUub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYm9zc05hbWUubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdGlmIChwcm9qZWN0RGF0YS5uYW1lT2ZCb3NzID09PSBib3NzTmFtZVtpXS52YWx1ZSkge1xyXG5cdFx0XHRib3NzTmFtZS5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkZXZlbG9wZXJOYW1lLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRpZiAocHJvamVjdERhdGEubmFtZU9mRGV2ZWxvcGVyID09PSBkZXZlbG9wZXJOYW1lW2ldLnZhbHVlKSB7XHJcblx0XHRcdGRldmVsb3Blck5hbWUub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93U2F2ZWREYXRhO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9