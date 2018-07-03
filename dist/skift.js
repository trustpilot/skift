(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["skift"] = factory();
	else
		root["skift"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/ui.css":
/*!**********************************************!*\
  !*** ./node_modules/css-loader!./src/ui.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skift {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  width: 300px;\n  max-height: 500px;\n  color: #292929;\n  z-index: 999;\n  background-color: #FFFFFF;\n  border: 2px solid #00b67a;\n  transition: all .5s ease-out;\n  opacity: 1;\n  border-radius: 3px;\n}\n\n.skift li.selected {\n  font-weight: bold;\n}\n\n.skift li a {\n  color: #0c59f2;\n}\n\n.skift .variations .legend {\n  font-size: 12px;\n}\n\n.skift .header {\n  top: 0;\n  left: 0;\n  padding: 8px;\n  background-color: #00b67a;\n  color: #FFFFFF;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.skift.hideme {\n  bottom: -550px;\n  opacity: 0;\n}\n\n.skift .tests {\n  overflow-y: auto;\n}\n\n.skift .variations {\n  background: #f4f7f9;\n  box-shadow: inset 0 0 1px 1px #dfe2e5;\n  padding: 8px;\n}\n\n.skift .variations ul {\n  margin: 0;\n}\n\n.skift .test {\n  padding: 8px 8px 0 8px;\n}\n\n.skift .data-label {\n  display: inline-block;\n  margin-bottom: 2px;\n  margin-right: 5px;\n  color: #292929;\n}\n\n.skift .data-label:after {\n  content: \":\";\n}\n\n.skift .data-value {\n  color: #000;\n  font-weight: bold;\n}\n\n.skift .close {\n  position: absolute;\n  right: 8px;\n  background-color: #fff;\n  color: #00b67a;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  text-align: center;\n  font-size: 16px;\n  line-height: 20px\n}\n\n.skift .reset {\n  width: 100%;\n  padding: 5px 10px;\n  background-color: #00b67a;\n  font-size: 18px;\n  color: #FFFFFF;\n  border: 0;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./src/alwaysPromise.ts":
/*!******************************!*\
  !*** ./src/alwaysPromise.ts ***!
  \******************************/
/*! exports provided: alwaysPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alwaysPromise", function() { return alwaysPromise; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function alwaysPromise(thing) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.resolve(thing)];
        });
    });
}


/***/ }),

/***/ "./src/behavioral-subject.ts":
/*!***********************************!*\
  !*** ./src/behavioral-subject.ts ***!
  \***********************************/
/*! exports provided: BehavioralSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehavioralSubject", function() { return BehavioralSubject; });
var BehavioralSubject = /** @class */ (function () {
    function BehavioralSubject(value) {
        this.subscribers = [];
        this._value = value;
    }
    BehavioralSubject.prototype.next = function (value) {
        var _this = this;
        this._value = value;
        this.subscribers.forEach(function (observer) { return observer(_this._value); });
    };
    BehavioralSubject.prototype.subscribe = function (observer) {
        observer(this._value);
        this.subscribers.push(observer);
    };
    return BehavioralSubject;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usersessioncookiepersister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersessioncookiepersister */ "./src/usersessioncookiepersister.ts");

var defaultTrackingEventHandler = (function () {
    function log(event, trackingData) {
        console.log('Split testing event: ' + event, trackingData);
    }
    return {
        track: log,
        trackLink: function (element, event, trackingData) {
            element.addEventListener('click', function () {
                log(event, trackingData);
            });
        }
    };
})();
var config = {
    cookieName: 'skiftABTest',
    globalCondition: function () { return true; },
    sessionPersister: _usersessioncookiepersister__WEBPACK_IMPORTED_MODULE_0__["default"],
    tracking: defaultTrackingEventHandler,
    userSessionDaysToLive: 3,
    uiCondition: function () { return false; }
};
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: tests, config, getUserAgentInfo, getTest, create, getCurrentTestVariation, setCurrentTestVariation, reset, ui, SplitTest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return ui; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["tests"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserAgentInfo", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["getUserAgentInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTest", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["getTest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentTestVariation", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["getCurrentTestVariation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCurrentTestVariation", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["setCurrentTestVariation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["reset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitTest", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["SplitTest"]; });

/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;


Object(_main__WEBPACK_IMPORTED_MODULE_0__["initialize"])();
var ui = Object(_ui__WEBPACK_IMPORTED_MODULE_1__["uiFactory"])(_main__WEBPACK_IMPORTED_MODULE_0__["testsObservable"], _main__WEBPACK_IMPORTED_MODULE_0__["reset"], _main__WEBPACK_IMPORTED_MODULE_0__["getCurrentTestVariation"], _main__WEBPACK_IMPORTED_MODULE_0__["getUserAgentInfo"]);
function domReady(cb) {
    if (document.readyState !== 'loading') {
        return cb();
    }
    document.addEventListener('DOMContentLoaded', cb);
}
domReady(function () {
    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_main__WEBPACK_IMPORTED_MODULE_0__["shouldShowUI"])()];
                case 1:
                    if (_a.sent()) {
                        ui.show();
                    }
                    return [2 /*return*/];
            }
        });
    }); }, 0);
});

/* harmony default export */ __webpack_exports__["default"] = ({
    tests: _main__WEBPACK_IMPORTED_MODULE_0__["tests"],
    config: _main__WEBPACK_IMPORTED_MODULE_0__["config"],
    getUserAgentInfo: _main__WEBPACK_IMPORTED_MODULE_0__["getUserAgentInfo"],
    getTest: _main__WEBPACK_IMPORTED_MODULE_0__["getTest"],
    create: _main__WEBPACK_IMPORTED_MODULE_0__["create"],
    getCurrentTestVariation: _main__WEBPACK_IMPORTED_MODULE_0__["getCurrentTestVariation"],
    setCurrentTestVariation: _main__WEBPACK_IMPORTED_MODULE_0__["setCurrentTestVariation"],
    reset: _main__WEBPACK_IMPORTED_MODULE_0__["reset"],
    ui: ui,
    SplitTest: _main__WEBPACK_IMPORTED_MODULE_0__["SplitTest"],
    initialize: _main__WEBPACK_IMPORTED_MODULE_0__["initialize"]
});


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: SplitTest, tests, testsObservable, config, initialize, getUserAgentInfo, getTest, create, getCurrentTestVariation, setCurrentTestVariation, reset, shouldShowUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return tests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testsObservable", function() { return testsObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgentInfo", function() { return getUserAgentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTest", function() { return getTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTestVariation", function() { return getCurrentTestVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTestVariation", function() { return setCurrentTestVariation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldShowUI", function() { return shouldShowUI; });
/* harmony import */ var _useragentinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useragentinfo */ "./src/useragentinfo.ts");
/* harmony import */ var _usersession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersession */ "./src/usersession.ts");
/* harmony import */ var _splittest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splittest */ "./src/splittest.ts");
/* harmony import */ var _behavioral_subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behavioral-subject */ "./src/behavioral-subject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitTest", function() { return _splittest__WEBPACK_IMPORTED_MODULE_2__["SplitTest"]; });

/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracking */ "./src/tracking.ts");
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js");
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _alwaysPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alwaysPromise */ "./src/alwaysPromise.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var userAgentInfo = Object(_useragentinfo__WEBPACK_IMPORTED_MODULE_0__["default"])();
var tests = [];
var testsObservable = new _behavioral_subject__WEBPACK_IMPORTED_MODULE_3__["BehavioralSubject"](tests);
function config(userConfig) {
    if (userConfig === void 0) { userConfig = {}; }
    if (userConfig.cookieName) {
        _config__WEBPACK_IMPORTED_MODULE_6__["default"].cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        _config__WEBPACK_IMPORTED_MODULE_6__["default"].globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        _config__WEBPACK_IMPORTED_MODULE_6__["default"].tracking = userConfig.tracking;
    }
    if (userConfig.uiCondition) {
        _config__WEBPACK_IMPORTED_MODULE_6__["default"].uiCondition = userConfig.uiCondition;
    }
    if (userConfig.userSessionDaysToLive) {
        _config__WEBPACK_IMPORTED_MODULE_6__["default"].userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
}
/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory() {
    return Object(_tracking__WEBPACK_IMPORTED_MODULE_4__["trackingDataExtenderFactory"])({
        browser: userAgentInfo.name,
        browserVersion: userAgentInfo.version,
        isMobile: userAgentInfo.isMobile
    });
}
function initializeFromQueryString(session) {
    var query = querystringify__WEBPACK_IMPORTED_MODULE_5__["parse"](location.search);
    var abtestParam = query['abtest'];
    if (typeof abtestParam === 'string') {
        try {
            var _a = atob(abtestParam).split('='), test = _a[0], variant = _a[1];
            session.setTestVariation(test, variant);
        }
        catch (e) {
            // TODO: Handle error.
        }
    }
}
function initialize() {
    initializeFromQueryString(_usersession__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
// Public API
function validateInitialized(test) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test.isInitialized()];
                case 1:
                    if (!(_a.sent())) {
                        throw new Error("Skift: Test \"" + test.name + "\" is not initialized yet!");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function validateTestName(testName) {
    if (!getTest(testName)) {
        throw new Error("Skift: Unknown test \"" + testName + "\"");
    }
}
function reloadWithoutAbTestParameter() {
    var query = querystringify__WEBPACK_IMPORTED_MODULE_5__["parse"](location.search);
    delete query['abtest'];
    location.href =
        location.href.replace(location.search, '').replace(location.hash, '') +
            querystringify__WEBPACK_IMPORTED_MODULE_5__["stringify"](query, Object.keys(query).length > 0) +
            location.hash;
}
function getUserAgentInfo() {
    return userAgentInfo;
}
function getTest(name) {
    return tests.filter(function (t) { return t.name === name; })[0];
}
function create(name) {
    var test = new _splittest__WEBPACK_IMPORTED_MODULE_2__["SplitTest"](name, userAgentInfo, baseTrackingDataExtenderFactory());
    tests.push(test);
    test.changes.subscribe(function () { return testsObservable.next(tests); });
    return test;
}
function getCurrentTestVariation(testName) {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    return _usersession__WEBPACK_IMPORTED_MODULE_1__["default"].getTestVariation(testName);
}
function setCurrentTestVariation(testName, variation) {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    _usersession__WEBPACK_IMPORTED_MODULE_1__["default"].setTestVariation(testName, variation);
    reloadWithoutAbTestParameter();
}
function reset() {
    _usersession__WEBPACK_IMPORTED_MODULE_1__["default"].reset();
    reloadWithoutAbTestParameter();
}
function shouldShowUI() {
    return __awaiter(this, void 0, void 0, function () {
        var promises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = [
                        _config__WEBPACK_IMPORTED_MODULE_6__["default"].globalCondition(userAgentInfo),
                        _config__WEBPACK_IMPORTED_MODULE_6__["default"].uiCondition(userAgentInfo)
                    ].map(_alwaysPromise__WEBPACK_IMPORTED_MODULE_7__["alwaysPromise"]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 1: return [2 /*return*/, (_a.sent()).every(function (a) { return a; })];
            }
        });
    });
}


/***/ }),

/***/ "./src/splittest.ts":
/*!**************************!*\
  !*** ./src/splittest.ts ***!
  \**************************/
/*! exports provided: SplitTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitTest", function() { return SplitTest; });
/* harmony import */ var _usersession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersession */ "./src/usersession.ts");
/* harmony import */ var _behavioral_subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./behavioral-subject */ "./src/behavioral-subject.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracking */ "./src/tracking.ts");
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js");
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _alwaysPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alwaysPromise */ "./src/alwaysPromise.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SplitTest = /** @class */ (function () {
    function SplitTest(name, userAgentInfo, trackingDataExtender) {
        this.name = name;
        this.userAgentInfo = userAgentInfo;
        this.trackingDataExtender = trackingDataExtender;
        this.state = 'uninitialized';
        this.changes = new _behavioral_subject__WEBPACK_IMPORTED_MODULE_1__["BehavioralSubject"](this);
        this.finalStateListeners = [];
        this._variations = [];
        this.condition = function () { return true; };
        this.extendTrackingData(Object(_tracking__WEBPACK_IMPORTED_MODULE_2__["trackingDataExtenderFactory"])({
            experimentName: name
        }));
    }
    Object.defineProperty(SplitTest.prototype, "variations", {
        get: function () {
            return this._variations;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines whether this test is able to run or not.
     */
    SplitTest.prototype.shouldRun = function (userAgentInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var conditionPromises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        conditionPromises = [
                            _config__WEBPACK_IMPORTED_MODULE_4__["default"].globalCondition(userAgentInfo),
                            this.condition(userAgentInfo)
                        ].map(_alwaysPromise__WEBPACK_IMPORTED_MODULE_5__["alwaysPromise"]);
                        return [4 /*yield*/, Promise.all(conditionPromises)];
                    case 1: return [2 /*return*/, (_a.sent()).every(function (a) { return a; })];
                }
            });
        });
    };
    SplitTest.prototype.setCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    SplitTest.prototype.addVariation = function (variation) {
        if (typeof variation.name !== 'string' ||
            variation.name === '' ||
            this.getVariation(variation.name)) {
            throw new Error("Split test \"" + this
                .name + "\": Variation must have a unique name. Was \"" + variation.name + "\"");
        }
        this._variations.push(__assign({}, variation, { normalizedWeight: 0, weight: typeof variation.weight === 'number' ? variation.weight : 1 }));
        this.normalizeVariationWeights();
        this.changes.next(this);
        return this;
    };
    SplitTest.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var passesConditions, variation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._variations.length === 0) {
                            throw new Error("Skift: can't setup a test without variations");
                        }
                        if (this.state === 'initialized') {
                            // Already set up?
                            return [2 /*return*/, true];
                        }
                        this.transitionState('initializing');
                        return [4 /*yield*/, this.shouldRun(this.userAgentInfo)];
                    case 1:
                        passesConditions = _a.sent();
                        if (!passesConditions) {
                            this.transitionState('canceled');
                            return [2 /*return*/, false];
                        }
                        variation = this.getVariation(_usersession__WEBPACK_IMPORTED_MODULE_0__["default"].getTestVariation(this.name));
                        if (!variation) {
                            variation = this.selectRandomVariation();
                            _usersession__WEBPACK_IMPORTED_MODULE_0__["default"].setTestVariation(this.name, variation.name);
                        }
                        this.extendTrackingData(Object(_tracking__WEBPACK_IMPORTED_MODULE_2__["trackingDataExtenderFactory"])({
                            variationName: variation.name
                        }));
                        // Step 3: Setup variation
                        if (typeof variation.setup === 'function') {
                            variation.setup.call(this, this.userAgentInfo);
                        }
                        // Step 4: Publish track event
                        if (variation.trackEventAutoPublish !== false) {
                            this.trackViewed();
                        }
                        this.transitionState('initialized');
                        this.changes.next(this);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SplitTest.prototype.isInitialized = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        state = this.state;
                        if (!(state === 'initializing')) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.subscribeStateListener(function () {
                                    resolve(_this.state === 'initialized');
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, this.state === 'initialized'];
                }
            });
        });
    };
    SplitTest.prototype.getVariation = function (name) {
        return this._variations.filter(function (v) { return v.name === name; })[0];
    };
    SplitTest.prototype.getVariationUrl = function (variationName) {
        var param = this.name + "=" + variationName;
        var query = querystringify__WEBPACK_IMPORTED_MODULE_3__["parse"](location.search);
        try {
            query.abtest = btoa(param);
            return (location.protocol +
                '//' +
                location.host +
                location.pathname +
                querystringify__WEBPACK_IMPORTED_MODULE_3__["stringify"](query, true) +
                location.hash);
        }
        catch (e) {
            return location.href;
        }
    };
    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    SplitTest.prototype.extendTrackingData = function (trackingDataExtender) {
        var currentExtender = this.trackingDataExtender;
        this.trackingDataExtender = function (trackingData, eventName) {
            return trackingDataExtender(currentExtender(trackingData, eventName), eventName);
        };
        return this;
    };
    /**
     * Emits an "Experiment Viewed" tracking event
     */
    SplitTest.prototype.trackViewed = function () {
        this.trackEvent('ExperimentViewed');
    };
    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    SplitTest.prototype.trackActionPerformed = function (action, target) {
        this.trackEvent('ExperimentActionPerformed', {
            action: action,
            actionTarget: target || ''
        });
    };
    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param element The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    SplitTest.prototype.trackLink = function (element, name) {
        var event = 'ExperimentActionPerformed';
        var trackingData = this.trackingDataExtender({
            action: 'Click',
            actionTarget: name || element.textContent
        }, event);
        _config__WEBPACK_IMPORTED_MODULE_4__["default"].tracking.trackLink(element, event, trackingData);
    };
    SplitTest.prototype.normalizeVariationWeights = function () {
        var weightsSum = this._variations.reduce(function (sum, variation) { return sum + variation.weight; }, 0);
        this._variations.forEach(function (variation) {
            variation.normalizedWeight = variation.weight / weightsSum;
        });
    };
    SplitTest.prototype.transitionState = function (state) {
        this.state = state;
        if (state !== 'initializing') {
            this.finalStateListeners.forEach(function (l) { return l(); });
            this.finalStateListeners = [];
        }
    };
    SplitTest.prototype.subscribeStateListener = function (listener) {
        this.finalStateListeners.push(listener);
    };
    SplitTest.prototype.selectRandomVariation = function () {
        var i = 0;
        // Disable the rule for now and refactor this, when covered by a test.
        // tslint:disable:max-line-length no-conditional-assignment no-empty
        for (var runningTotal = 0, testSegment = Math.random(); i < this._variations.length && (runningTotal += this._variations[i].normalizedWeight) < testSegment; i++) { }
        // tslint:enable:max-line-length no-conditional-assignment no-empty
        return this._variations[i];
    };
    SplitTest.prototype.trackEvent = function (event, trackingData) {
        var allTrackingData = this.trackingDataExtender(trackingData || {}, event);
        _config__WEBPACK_IMPORTED_MODULE_4__["default"].tracking.track(event, allTrackingData);
    };
    return SplitTest;
}());



/***/ }),

/***/ "./src/tracking.ts":
/*!*************************!*\
  !*** ./src/tracking.ts ***!
  \*************************/
/*! exports provided: trackingDataExtenderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackingDataExtenderFactory", function() { return trackingDataExtenderFactory; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * Constructs a new TrackingDataExtender that extending the existing tracking data with the provided tracking data
 * @param newTrackingData
 */
function trackingDataExtenderFactory(newTrackingData) {
    return function (trackingData) { return (__assign({}, trackingData, newTrackingData)); };
}


/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../node_modules/css-loader!./ui.css */ "./node_modules/css-loader/index.js!./src/ui.css");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! exports provided: uiFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiFactory", function() { return uiFactory; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getVariationPercentage(variation) {
    return Math.round(variation.normalizedWeight * 100) + '%';
}
var isInitialized = false;
var skift;
var uiFactory = function (tests, reset, getCurrentTestVariation, getUserAgentInfo) {
    function renderTest(test) {
        return __awaiter(this, void 0, void 0, function () {
            var variation_1, data_1, canRun;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test.isInitialized()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 2];
                        variation_1 = getCurrentTestVariation(test.name);
                        data_1 = {
                            Test: test.name,
                            Variation: variation_1 + " (" + getVariationPercentage(test.getVariation(variation_1)) + ")",
                            Browser: getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
                            'Mobile device': getUserAgentInfo().isMobile
                        };
                        return [2 /*return*/, "\n                <div class=\"test\">\n                    " + Object.keys(data_1).map(function (key) { return "\n                        <div>\n                            <span class=\"data-label\">" + key + "</span>\n                            <span class=\"data-value\">" + data_1[key] + "</span>\n                        </div>\n                    "; }).join('') + "\n                </div>\n                <div class=\"variations\">\n                    <span class=\"legend\">Variations available:</span>\n                    <ul>\n                        " + test.variations.map(function (variant) {
                                if (variation_1 === variant.name) {
                                    return "\n                                    <li class=\"selected\">" + variant.name + "</li>\n                                ";
                                }
                                return "\n                                <li>\n                                    <a\n                                        href=\"" + test.getVariationUrl(variant.name) + "\"\n                                        title=\"Segment: " + getVariationPercentage(variant) + "\"\n                                    >\n                                        " + variant.name + "\n                                    </a>\n                                </li>\n                            ";
                            }).join('') + "\n                    </ul>\n                </div>\n            "];
                    case 2: return [4 /*yield*/, test.shouldRun(getUserAgentInfo())];
                    case 3:
                        canRun = _a.sent();
                        return [2 /*return*/, "\n                <div class=\"test\">\n                    <div>Test <span class=\"data-value\">" + test.name + "</span> is not initialized</div>\n                    <div>\n                        <span class=\"data-label\">Can run</span>\n                        <span class=\"data-value\">" + canRun + "</span>\n                    </div>\n                </div>\n            "];
                }
            });
        });
    }
    function showSplitTestUi() {
        var _this = this;
        var previousContainer = document.querySelector('.skift');
        if (previousContainer) {
            skift = previousContainer;
        }
        else {
            skift = document.createElement('div');
            skift.className = 'skift';
        }
        var style = document.createElement('style');
        style.innerHTML = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
        var header = document.createElement('div');
        header.className = 'header';
        header.textContent = 'Skift';
        var testList = document.createElement('div');
        testList.className = 'tests';
        tests.subscribe(function (list) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        while (testList.hasChildNodes()) {
                            testList.removeChild(testList.lastChild);
                        }
                        _a = testList;
                        return [4 /*yield*/, Promise.all(list.map(renderTest))];
                    case 1:
                        _a.innerHTML = (_b.sent()).join('');
                        return [2 /*return*/];
                }
            });
        }); });
        var button = document.createElement('button');
        button.className = 'reset';
        button.textContent = 'Reset all';
        button.setAttribute('type', 'button');
        button.addEventListener('click', function () {
            reset();
        });
        var close = document.createElement('span');
        close.className = 'close';
        close.textContent = 'X';
        close.addEventListener('click', function () {
            hide();
        });
        header.appendChild(close);
        skift.appendChild(header);
        skift.appendChild(style);
        skift.appendChild(testList);
        skift.appendChild(button);
        document.body.appendChild(skift);
        isInitialized = true;
    }
    function show() {
        if (isInitialized) {
            skift.className = 'skift';
        }
        else {
            showSplitTestUi();
        }
    }
    function hide() {
        skift.className = 'skift hideme';
    }
    return {
        show: show,
        hide: hide
    };
};


/***/ }),

/***/ "./src/useragentinfo.ts":
/*!******************************!*\
  !*** ./src/useragentinfo.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUserAgentInfo; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function getNameAndVersion() {
    var ua = navigator.userAgent;
    var tem;
    var match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(match[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
            name: 'IE',
            version: (tem[1] || '')
        };
    }
    if (match[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return {
                name: 'Opera',
                version: tem[1]
            };
        }
    }
    match = match[2] ? [match[1], match[2]] : [navigator.appName, navigator.appVersion, '-?'];
    tem = ua.match(/version\/(\d+)/i);
    if (tem !== null) {
        match.splice(1, 1, tem[1]);
    }
    return {
        name: match[0],
        version: match[1]
    };
}
function isMobile() {
    var ua = navigator.userAgent || navigator.vendor;
    // Disable the rule for now and consider using RegExp constructor with a string.
    // tslint:disable-next-line:max-line-length
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
}
function getUserAgentInfo() {
    return __assign({}, getNameAndVersion(), { isMobile: isMobile() });
}


/***/ }),

/***/ "./src/usersession.ts":
/*!****************************!*\
  !*** ./src/usersession.ts ***!
  \****************************/
/*! exports provided: UserSession, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSession", function() { return UserSession; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");

var UserSession = /** @class */ (function () {
    function UserSession() {
    }
    UserSession.prototype.setTestVariation = function (testName, variationName) {
        var variationsMap = this.loadVariations();
        variationsMap[testName] = variationName;
        this.saveVariations(variationsMap);
    };
    UserSession.prototype.getTestVariation = function (testName) {
        var variationsMap = this.loadVariations();
        return variationsMap[testName];
    };
    UserSession.prototype.reset = function () {
        this.saveVariations({});
    };
    UserSession.prototype.saveVariations = function (variationsMap) {
        _config__WEBPACK_IMPORTED_MODULE_0__["default"].sessionPersister.saveUserSession(JSON.stringify(variationsMap), _config__WEBPACK_IMPORTED_MODULE_0__["default"].userSessionDaysToLive);
    };
    UserSession.prototype.loadVariations = function () {
        var variationsMap = JSON.parse(_config__WEBPACK_IMPORTED_MODULE_0__["default"].sessionPersister.loadUserSession() || '{}');
        return variationsMap;
    };
    return UserSession;
}());

var userSession = new UserSession();
/* harmony default export */ __webpack_exports__["default"] = (userSession);


/***/ }),

/***/ "./src/usersessioncookiepersister.ts":
/*!*******************************************!*\
  !*** ./src/usersessioncookiepersister.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");

function createCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
function readCookie(name) {
    var nameEq = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length);
        }
    }
    return null;
}
var persister = {
    loadUserSession: function () {
        return readCookie(_config__WEBPACK_IMPORTED_MODULE_0__["default"].cookieName);
    },
    saveUserSession: function (userSession, daysToLive) {
        createCookie(_config__WEBPACK_IMPORTED_MODULE_0__["default"].cookieName, userSession, daysToLive);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (persister);


/***/ })

/******/ });
});
//# sourceMappingURL=skift.source.map