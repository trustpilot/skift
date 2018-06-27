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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/skift.ts");
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
exports.push([module.i, ".skiftui .container{\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  max-width: 300px;\n  max-height: 500px;\n  color: #292929;\n  z-index: 999;\n  background-color: #FFFFFF;\n  border: 2px solid #00b67a;\n}\n\n.skiftui.hideme {\n  display: none;\n}\n\n.skiftui .header {\n  position: relative;\n  padding: 8px;\n  background-color: #00b67a;\n  color: #FFFFFF;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: bold;\n}\n\n.skiftui .close {\n  position: absolute;\n  right: 8px;\n  background-color: #fff;\n  color: #00b67a;\n  width: 16px;\n  border-radius: 50%;\n  cursor: pointer;\n  text-align: center;\n  line-height: 16px;\n  font-size: 12px;\n}\n\n.skiftui .test.info {\n  padding: 8px 8px 0 8px;\n}\n\n.skiftui .test.details {\n  padding: 8px;\n  background: #f4f7f9;\n  border-top: 1px solid #dfe2e5;\n  font-size: 12px;\n}\n\n.skiftui .test.details ul {\n  margin: 0;\n}\n\n.skiftui .data-label {\n  display: inline-block;\n  margin-bottom: 2px;\n  margin-right: 5px;\n  color: #292929;\n}\n\n.skiftui .data-label:after {\n  content: \":\";\n}\n\n.skiftui .data-value {\n  color: #000;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n", ""]);

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

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking */ "./src/tracking.ts");
/* harmony import */ var _cookiePersister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookiePersister */ "./src/cookiePersister.ts");


var Config = /** @class */ (function () {
    function Config() {
        this._sessionPersister = _cookiePersister__WEBPACK_IMPORTED_MODULE_1__["default"];
        this._tracking = _tracking__WEBPACK_IMPORTED_MODULE_0__["default"];
        this._userSessionDaysToLive = 3;
        this._cookieName = 'skiftABTest';
        this._globalCondition = function () { return Promise.resolve(true); };
    }
    Object.defineProperty(Config.prototype, "sessionPersister", {
        get: function () {
            return this._sessionPersister;
        },
        set: function (value) {
            this._sessionPersister = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "tracking", {
        get: function () {
            return this._tracking;
        },
        set: function (value) {
            this._tracking = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "userSessionDaysToLive", {
        get: function () {
            return this._userSessionDaysToLive;
        },
        set: function (value) {
            this._userSessionDaysToLive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "cookieName", {
        get: function () {
            return this._cookieName;
        },
        set: function (value) {
            this._cookieName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "globalCondition", {
        get: function () {
            return this._globalCondition;
        },
        set: function (value) {
            this._globalCondition = value;
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Config());


/***/ }),

/***/ "./src/cookiePersister.ts":
/*!********************************!*\
  !*** ./src/cookiePersister.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");

function createCookie(name, value, days) {
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
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


/***/ }),

/***/ "./src/skift.ts":
/*!**********************!*\
  !*** ./src/skift.ts ***!
  \**********************/
/*! exports provided: config, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _splitTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splitTest */ "./src/splitTest.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");


function config(userConfig) {
    if (userConfig === void 0) { userConfig = {}; }
    if (userConfig.cookieName) {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].tracking = userConfig.tracking;
    }
    if (userConfig.userSessionDaysToLive) {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
    if (userConfig.sessionPersister) {
        _config__WEBPACK_IMPORTED_MODULE_1__["default"].sessionPersister = userConfig.sessionPersister;
    }
}
function create(name) {
    return new _splitTest__WEBPACK_IMPORTED_MODULE_0__["default"](name, _config__WEBPACK_IMPORTED_MODULE_1__["default"]);
}


/***/ }),

/***/ "./src/splitTest.ts":
/*!**************************!*\
  !*** ./src/splitTest.ts ***!
  \**************************/
/*! exports provided: State, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js");
/* harmony import */ var querystringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userAgent */ "./src/userAgent.ts");
/* harmony import */ var _userSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userSession */ "./src/userSession.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");
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




var State;
(function (State) {
    State["UNINITIALIZED"] = "uninitialized";
    State["INITIALIZING"] = "initializing";
    State["INITIALIZED"] = "initialized";
    State["CANCELED"] = "canceled";
})(State || (State = {}));
var SplitTest = /** @class */ (function () {
    function SplitTest(name, config) {
        this._state = State.UNINITIALIZED;
        this._finalStateListeners = [];
        this._variations = [];
        this._name = name;
        this._userAgentInfo = Object(_userAgent__WEBPACK_IMPORTED_MODULE_1__["getInfo"])();
        this._condition = function () { return Promise.resolve(true); };
        this._config = config;
        this._userSession = new _userSession__WEBPACK_IMPORTED_MODULE_2__["UserSession"](config);
    }
    Object.defineProperty(SplitTest.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitTest.prototype, "userAgentInfo", {
        get: function () {
            return this._userAgentInfo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitTest.prototype, "variations", {
        get: function () {
            return this._variations;
        },
        enumerable: true,
        configurable: true
    });
    SplitTest.prototype.getCurrentVariation = function () {
        return this._currentVariation;
    };
    SplitTest.prototype.setCurrentVariation = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var doesVariationExist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        doesVariationExist = this._variations.some(function (variation) { return variation.name === name; });
                        if (!doesVariationExist) return [3 /*break*/, 2];
                        this.transitionState(State.UNINITIALIZED);
                        this._userSession.setTestVariation(this.name, name);
                        return [4 /*yield*/, this.setup()];
                    case 1:
                        _a.sent();
                        location.reload();
                        return [2 /*return*/, Promise.resolve(true)];
                    case 2: return [2 /*return*/, Promise.resolve(false)];
                }
            });
        });
    };
    Object.defineProperty(SplitTest.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    SplitTest.prototype.setCondition = function (condition) {
        this._condition = condition;
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
        return this;
    };
    SplitTest.prototype.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var passesConditions, variation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._variations.length === 0) {
                            throw new Error('Skift: can\'t setup a test without variations');
                        }
                        if (this._state === State.INITIALIZED) {
                            return [2 /*return*/, true];
                        }
                        this.transitionState(State.INITIALIZING);
                        return [4 /*yield*/, this.shouldRun(this._userAgentInfo)];
                    case 1:
                        passesConditions = _a.sent();
                        if (!passesConditions) {
                            this.transitionState(State.CANCELED);
                            return [2 /*return*/, false];
                        }
                        variation = this.getVariation(this._userSession.getTestVariation(this.name));
                        if (!variation) {
                            variation = this.selectRandomVariation();
                            this._userSession.setTestVariation(this.name, variation.name);
                        }
                        this._currentVariation = variation;
                        // Step 3: Setup variation
                        if (typeof variation.setup === 'function') {
                            variation.setup.call(this, this._userAgentInfo);
                        }
                        // Step 4: Publish tracking event
                        if (variation.trackEventAutoPublish !== false) {
                            this.trackViewed();
                        }
                        this.transitionState(State.INITIALIZED);
                        _ui__WEBPACK_IMPORTED_MODULE_3__["show"](this);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SplitTest.prototype.isInitialized = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._state === State.INITIALIZING)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.subscribeStateListener(function () {
                                    resolve(_this._state === State.INITIALIZED);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, this._state === State.INITIALIZED];
                }
            });
        });
    };
    SplitTest.prototype.getVariation = function (name) {
        return this._variations.filter(function (v) { return v.name === name; })[0];
    };
    SplitTest.prototype.getVariationUrl = function (variationName) {
        var param = this.name + "=" + variationName;
        var query = querystringify__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search);
        try {
            query.abtest = btoa(param);
            return (location.protocol +
                '//' +
                location.host +
                location.pathname +
                querystringify__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(query, true) +
                location.hash);
        }
        catch (e) {
            return location.href;
        }
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
     * @param target A human readable name of the link. If left out, the innerText of the element is used
     */
    SplitTest.prototype.trackLink = function (element, target) {
        this.internalTrackLink(element, 'ExperimentActionPerformed', {
            action: 'Click',
            actionTarget: target || element.textContent
        });
    };
    SplitTest.prototype.internalTrackLink = function (element, event, trackingData) {
        var extendedTrackingData = __assign({}, trackingData, { experimentName: this._name, browser: this._userAgentInfo.name, browserVersion: this._userAgentInfo.version, isMobile: this._userAgentInfo.isMobile, variationName: this._currentVariation.name });
        this._config.tracking.trackLink(element, event, extendedTrackingData);
    };
    SplitTest.prototype.trackEvent = function (event, trackingData) {
        var extendedTrackingData = __assign({}, trackingData, { experimentName: this._name, browser: this._userAgentInfo.name, browserVersion: this._userAgentInfo.version, isMobile: this._userAgentInfo.isMobile, variationName: this._currentVariation.name });
        this._config.tracking.track(event, extendedTrackingData);
    };
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
                            this._config.globalCondition(userAgentInfo),
                            this._condition(userAgentInfo)
                        ].map(function (condition) { return Promise.resolve(condition); });
                        return [4 /*yield*/, Promise.all(conditionPromises)];
                    case 1: return [2 /*return*/, (_a.sent()).every(function (a) { return a; })];
                }
            });
        });
    };
    SplitTest.prototype.normalizeVariationWeights = function () {
        var weightsSum = this._variations.reduce(function (sum, variation) { return sum + variation.weight; }, 0);
        this._variations.forEach(function (variation) {
            variation.normalizedWeight = variation.weight / weightsSum;
        });
    };
    SplitTest.prototype.transitionState = function (state) {
        this._state = state;
        if (state !== State.INITIALIZING) {
            this._finalStateListeners.forEach(function (l) { return l(); });
            this._finalStateListeners = [];
        }
    };
    SplitTest.prototype.subscribeStateListener = function (listener) {
        this._finalStateListeners.push(listener);
    };
    SplitTest.prototype.selectRandomVariation = function () {
        var i = 0;
        // tslint:disable:max-line-length no-conditional-assignment no-empty
        for (var runningTotal = 0, testSegment = Math.random(); i < this._variations.length &&
            (runningTotal += this._variations[i].normalizedWeight) <
                testSegment; i++) { }
        // tslint:enable:max-line-length no-conditional-assignment no-empty
        return this._variations[i];
    };
    return SplitTest;
}());
/* harmony default export */ __webpack_exports__["default"] = (SplitTest);


/***/ }),

/***/ "./src/tracking.ts":
/*!*************************!*\
  !*** ./src/tracking.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ConsoleTracking = /** @class */ (function () {
    function ConsoleTracking() {
    }
    ConsoleTracking.prototype.track = function (event, trackingData) {
        console.log('Split testing event: ' + event, trackingData);
    };
    ConsoleTracking.prototype.trackLink = function (element, event, trackingData) {
        var _this = this;
        element.addEventListener('click', function () {
            _this.track(event, trackingData);
        });
    };
    return ConsoleTracking;
}());
/* harmony default export */ __webpack_exports__["default"] = (new ConsoleTracking());


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
/*! exports provided: show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);

function getVariationPercentage(variation) {
    return '(' + Math.round(variation.normalizedWeight * 100) + '%)';
}
function renderTest(splitTest, hide) {
    var currentVariation = splitTest.getCurrentVariation();
    var userAgentInfo = splitTest.userAgentInfo;
    var info = document.createElement('div');
    info.className = 'test info';
    var details = document.createElement('div');
    details.className = 'test details';
    var name = document.createElement('div');
    name.innerHTML = "<span class=\"data-label\">Test</span><span class=\"data-value\">" + splitTest.name + "</span>";
    var variation = document.createElement('div');
    variation.innerHTML = "\n        <span class=\"data-label\">Current variation</span>\n        <span class=\"data-value\">" + (currentVariation.name + ' ' + getVariationPercentage(currentVariation)) + "</span>\n    ";
    var browser = document.createElement('div');
    browser.innerHTML = "\n        <span class=\"data-label\">Browser</span>\n        <span class=\"data-value\">" + (userAgentInfo.name + ' ' + userAgentInfo.version) + "</span>\n    ";
    var mobile = document.createElement('div');
    mobile.innerHTML = "\n        <span class=\"data-label\">Mobile device</span>\n        <span class=\"data-value\">" + userAgentInfo.isMobile + "</span>\n    ";
    var variationsTitle = document.createElement('div');
    variationsTitle.innerText = 'Variations available: ';
    details.appendChild(variationsTitle);
    var variations = document.createElement('ul');
    splitTest.variations.map(function (variant) {
        var item = document.createElement('li');
        var link = document.createElement('a');
        link.innerText = variant.name;
        link.setAttribute('href', '#');
        link.addEventListener('click', function () {
            hide();
            splitTest.setCurrentVariation(variant.name);
        });
        item.appendChild(link);
        variations.appendChild(item);
    });
    info.appendChild(name);
    info.appendChild(variation);
    info.appendChild(browser);
    info.appendChild(mobile);
    details.appendChild(variations);
    return [info, details];
}
function show(splitTest) {
    var skiftUI = document.createElement('div');
    skiftUI.className = 'skiftui';
    var style = document.createElement('style');
    style.innerHTML = _ui_css__WEBPACK_IMPORTED_MODULE_0__;
    var container = document.createElement('div');
    container.className = 'container';
    var close = document.createElement('span');
    close.className = 'close';
    close.innerText = 'X';
    function hide() {
        skiftUI.className = 'skiftui hideme';
    }
    close.addEventListener('click', hide);
    var header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'Skift';
    header.appendChild(close);
    container.appendChild(header);
    renderTest(splitTest, hide).forEach(function (e) {
        container.appendChild(e);
    });
    skiftUI.appendChild(style);
    skiftUI.appendChild(container);
    document.body.appendChild(skiftUI);
}


/***/ }),

/***/ "./src/userAgent.ts":
/*!**************************!*\
  !*** ./src/userAgent.ts ***!
  \**************************/
/*! exports provided: getInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function getNameAndVersion(ua) {
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
function isMobile(ua) {
    // tslint:disable-next-line:max-line-length
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
}
function getInfo(userAgent) {
    if (userAgent === void 0) { userAgent = navigator.userAgent; }
    return __assign({}, getNameAndVersion(userAgent), { isMobile: isMobile(userAgent || navigator.vendor) });
}


/***/ }),

/***/ "./src/userSession.ts":
/*!****************************!*\
  !*** ./src/userSession.ts ***!
  \****************************/
/*! exports provided: UserSession, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSession", function() { return UserSession; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");

var UserSession = /** @class */ (function () {
    function UserSession(config) {
        this._config = config;
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
        this._config.sessionPersister.saveUserSession(JSON.stringify(variationsMap), this._config.userSessionDaysToLive);
    };
    UserSession.prototype.loadVariations = function () {
        var variationsMap = JSON.parse(this._config.sessionPersister.loadUserSession() || '{}');
        return variationsMap;
    };
    return UserSession;
}());

/* harmony default export */ __webpack_exports__["default"] = (new UserSession(_config__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ })

/******/ });
});
//# sourceMappingURL=skift.source.map