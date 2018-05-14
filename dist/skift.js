(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["skift"] = factory(require("jquery"));
	else
		root["skift"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usersessioncookiepersister__ = __webpack_require__(11);


var defaultTrackingEventHandler = (function () {
    function log(event, trackingData) {
        console.log('Split testing event: ' + event, trackingData);
    }
    return {
        track: log,
        trackLink: function (elements, event, trackingData) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a(elements).on('click', function () {
                log(event, trackingData);
            });
        }
    };
})();
var config = {
    cookieName: 'skiftABTest',
    globalCondition: function () { return true; },
    sessionPersister: __WEBPACK_IMPORTED_MODULE_1__usersessioncookiepersister__["a" /* default */],
    tracking: defaultTrackingEventHandler,
    userSessionDaysToLive: 3,
    uiCondition: function () { return false; }
};
/* harmony default export */ __webpack_exports__["a"] = (config);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserSession */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);

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
        __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].sessionPersister.saveUserSession(JSON.stringify(variationsMap), __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].userSessionDaysToLive);
    };
    UserSession.prototype.loadVariations = function () {
        var variationsMap = JSON.parse(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].sessionPersister.loadUserSession() || '{}');
        return variationsMap;
    };
    return UserSession;
}());

var userSession = new UserSession();
/* harmony default export */ __webpack_exports__["a"] = (userSession);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitTest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usersession__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behavioral_subject__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracking__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystringify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querystringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alwaysPromise__ = __webpack_require__(7);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
        this.changes = new __WEBPACK_IMPORTED_MODULE_1__behavioral_subject__["a" /* BehavioralSubject */](this);
        this.finalStateListeners = [];
        this._variations = [];
        this.condition = function () { return true; };
        this.extendTrackingData(__WEBPACK_IMPORTED_MODULE_2__tracking__["a" /* trackingDataExtenderFactory */]({
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
                            __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].globalCondition(userAgentInfo),
                            this.condition(userAgentInfo)
                        ].map(__WEBPACK_IMPORTED_MODULE_5__alwaysPromise__["a" /* alwaysPromise */]);
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
                        variation = this.getVariation(__WEBPACK_IMPORTED_MODULE_0__usersession__["a" /* default */].getTestVariation(this.name));
                        if (!variation) {
                            variation = this.selectRandomVariation();
                            __WEBPACK_IMPORTED_MODULE_0__usersession__["a" /* default */].setTestVariation(this.name, variation.name);
                        }
                        this.extendTrackingData(__WEBPACK_IMPORTED_MODULE_2__tracking__["a" /* trackingDataExtenderFactory */]({
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
            var _this = this;
            var state;
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
        var query = __WEBPACK_IMPORTED_MODULE_3_querystringify___default.a.parse(location.search);
        try {
            query.abtest = btoa(param);
            return (location.protocol +
                '//' +
                location.host +
                location.pathname +
                __WEBPACK_IMPORTED_MODULE_3_querystringify___default.a.stringify(query, true) +
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
     * @param elements The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    SplitTest.prototype.trackLink = function (elements, name) {
        var event = 'ExperimentActionPerformed';
        var trackingData = this.trackingDataExtender({
            action: 'Click',
            actionTarget: name || $(elements).text()
        }, event);
        __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].tracking.trackLink(elements, event, trackingData);
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
        for (var runningTotal = 0, testSegment = Math.random(); i < this._variations.length &&
            (runningTotal += this._variations[i].normalizedWeight) <
                testSegment; i++) { }
        // tslint:enable:max-line-length no-conditional-assignment no-empty
        return this._variations[i];
    };
    SplitTest.prototype.trackEvent = function (event, trackingData) {
        var allTrackingData = this.trackingDataExtender(trackingData || {}, event);
        __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].tracking.track(event, allTrackingData);
    };
    return SplitTest;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehavioralSubject; });
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = trackingDataExtenderFactory;
var __assign = (this && this.__assign) || Object.assign || function(t) {
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
/* 6 */
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

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decode(part[1])] = decode(part[2])
  );

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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = alwaysPromise;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return ui; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tests", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgentInfo", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getTest", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTestVariation", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTestVariation", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SplitTest", function() { return __WEBPACK_IMPORTED_MODULE_1__main__["a"]; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var _this = this;



__WEBPACK_IMPORTED_MODULE_1__main__["g" /* initialize */]();
var ui = __WEBPACK_IMPORTED_MODULE_2__ui__["a" /* uiFactory */](__WEBPACK_IMPORTED_MODULE_1__main__["l" /* testsObservable */], __WEBPACK_IMPORTED_MODULE_1__main__["h" /* reset */], __WEBPACK_IMPORTED_MODULE_1__main__["d" /* getCurrentTestVariation */], __WEBPACK_IMPORTED_MODULE_1__main__["f" /* getUserAgentInfo */]);
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a(function () {
    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1__main__["j" /* shouldShowUI */]()];
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
    tests: __WEBPACK_IMPORTED_MODULE_1__main__["k" /* tests */],
    config: __WEBPACK_IMPORTED_MODULE_1__main__["b" /* config */],
    getUserAgentInfo: __WEBPACK_IMPORTED_MODULE_1__main__["f" /* getUserAgentInfo */],
    getTest: __WEBPACK_IMPORTED_MODULE_1__main__["e" /* getTest */],
    create: __WEBPACK_IMPORTED_MODULE_1__main__["c" /* create */],
    getCurrentTestVariation: __WEBPACK_IMPORTED_MODULE_1__main__["d" /* getCurrentTestVariation */],
    setCurrentTestVariation: __WEBPACK_IMPORTED_MODULE_1__main__["i" /* setCurrentTestVariation */],
    reset: __WEBPACK_IMPORTED_MODULE_1__main__["h" /* reset */],
    ui: ui,
    SplitTest: __WEBPACK_IMPORTED_MODULE_1__main__["a" /* SplitTest */],
    initialize: __WEBPACK_IMPORTED_MODULE_1__main__["g" /* initialize */]
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return tests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return testsObservable; });
/* harmony export (immutable) */ __webpack_exports__["b"] = config;
/* harmony export (immutable) */ __webpack_exports__["g"] = initialize;
/* harmony export (immutable) */ __webpack_exports__["f"] = getUserAgentInfo;
/* harmony export (immutable) */ __webpack_exports__["e"] = getTest;
/* harmony export (immutable) */ __webpack_exports__["c"] = create;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCurrentTestVariation;
/* harmony export (immutable) */ __webpack_exports__["i"] = setCurrentTestVariation;
/* harmony export (immutable) */ __webpack_exports__["h"] = reset;
/* harmony export (immutable) */ __webpack_exports__["j"] = shouldShowUI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__useragentinfo__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usersession__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splittest__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behavioral_subject__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__splittest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracking__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querystringify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_querystringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_querystringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alwaysPromise__ = __webpack_require__(7);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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









var userAgentInfo = __WEBPACK_IMPORTED_MODULE_0__useragentinfo__["a" /* default */]();
var tests = [];
var testsObservable = new __WEBPACK_IMPORTED_MODULE_3__behavioral_subject__["a" /* BehavioralSubject */](tests);
function config(userConfig) {
    if (userConfig === void 0) { userConfig = {}; }
    if (userConfig.cookieName) {
        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].tracking = userConfig.tracking;
    }
    if (userConfig.uiCondition) {
        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].uiCondition = userConfig.uiCondition;
    }
    if (userConfig.userSessionDaysToLive) {
        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
}
/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory() {
    return __WEBPACK_IMPORTED_MODULE_4__tracking__["a" /* trackingDataExtenderFactory */]({
        browser: userAgentInfo.name,
        browserVersion: userAgentInfo.version,
        isMobile: userAgentInfo.isMobile
    });
}
function initializeFromQueryString(session) {
    var query = __WEBPACK_IMPORTED_MODULE_5_querystringify___default.a.parse(location.search);
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
    initializeFromQueryString(__WEBPACK_IMPORTED_MODULE_1__usersession__["a" /* default */]);
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
    var query = __WEBPACK_IMPORTED_MODULE_5_querystringify___default.a.parse(location.search);
    delete query['abtest'];
    location.href =
        location.href.replace(location.search, '').replace(location.hash, '') +
            __WEBPACK_IMPORTED_MODULE_5_querystringify___default.a.stringify(query, Object.keys(query).length > 0) +
            location.hash;
}
function getUserAgentInfo() {
    return userAgentInfo;
}
function getTest(name) {
    return tests.filter(function (t) { return t.name === name; })[0];
}
function create(name) {
    var test = new __WEBPACK_IMPORTED_MODULE_2__splittest__["a" /* SplitTest */](name, userAgentInfo, baseTrackingDataExtenderFactory());
    tests.push(test);
    test.changes.subscribe(function () { return testsObservable.next(tests); });
    return test;
}
function getCurrentTestVariation(testName) {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    return __WEBPACK_IMPORTED_MODULE_1__usersession__["a" /* default */].getTestVariation(testName);
}
function setCurrentTestVariation(testName, variation) {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    __WEBPACK_IMPORTED_MODULE_1__usersession__["a" /* default */].setTestVariation(testName, variation);
    reloadWithoutAbTestParameter();
}
function reset() {
    __WEBPACK_IMPORTED_MODULE_1__usersession__["a" /* default */].reset();
    reloadWithoutAbTestParameter();
}
function shouldShowUI() {
    return __awaiter(this, void 0, void 0, function () {
        var promises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promises = [
                        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].globalCondition(userAgentInfo),
                        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].uiCondition(userAgentInfo)
                    ].map(__WEBPACK_IMPORTED_MODULE_7__alwaysPromise__["a" /* alwaysPromise */]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 1: return [2 /*return*/, (_a.sent()).every(function (a) { return a; })];
            }
        });
    });
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUserAgentInfo;
var __assign = (this && this.__assign) || Object.assign || function(t) {
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(0);

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
        return readCookie(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].cookieName);
    },
    saveUserSession: function (userSession, daysToLive) {
        createCookie(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].cookieName, userSession, daysToLive);
    }
};
/* harmony default export */ __webpack_exports__["a"] = (persister);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uiFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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

var uiClassPrefix = 'skift';
var isInitialized = false;
var $abTestContainer;
function getVariationPercentage(variation) {
    return Math.round(variation.normalizedWeight * 100) + '%';
}
var uiFactory = function (tests, reset, getCurrentTestVariation, getUserAgentInfo) {
    function renderTest(test) {
        return __awaiter(this, void 0, void 0, function () {
            var variation, data_1, variationHtml, canRun;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test.isInitialized()];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 2];
                        variation = getCurrentTestVariation(test.name);
                        data_1 = {
                            Test: test.name,
                            Variation: variation + " (" + getVariationPercentage(test.getVariation(variation)) + ")",
                            Browser: getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
                            'Mobile device': getUserAgentInfo().isMobile
                        };
                        variationHtml = test.variations.map(function (variant) {
                            return "<a href=\"" + test.getVariationUrl(variant.name) + "\" title=\"Segment: " + getVariationPercentage(variant) + "\">" + variant.name + "</a>";
                        });
                        return [2 /*return*/, "\n            <div class=\"test\">\n              <div class=\"header\">\n                Viewing: <span class=\"abtest-variant\">" + variation + "</span>\n              </div>" + Object.keys(data_1)
                                .map(function (key) {
                                return "<div><span class=\"data-label\">" + key + "</span><span class=\"data-value\">" + data_1[key] + "</span></div>";
                            })
                                .join('') + "\n            " + variationHtml.join('&nbsp;&bull;&nbsp;') + "</div>"];
                    case 2: return [4 /*yield*/, test.shouldRun(getUserAgentInfo())];
                    case 3:
                        canRun = _a.sent();
                        return [2 /*return*/, "<div class=\"test\">\n                    <div class=\"header\">\n                      Viewing: <span class=\"abtest-variant\">Not initialized</span>\n                    </div>\n                    <div>Test <span class=\"data-value\">" + test.name + "</span> is not initialized</div>\n                    <div><span class=\"data-label\">Can run</span><span class=\"data-value\">" + canRun + "</span></div>\n                </div>"];
                }
            });
        });
    }
    function showSplitTestUi() {
        var _this = this;
        if (!document.head.attachShadow) {
            console.warn("Skift: Sorry, we don't support the UI in the browsers without Shadow DOM for now");
            return;
        }
        var containerElement = document.createElement('div');
        var shadowRoot = containerElement.attachShadow({ mode: 'open' });
        var style = document.createElement('style');
        style.innerHTML = __webpack_require__(13);
        var testListEl = document.createElement('div');
        testListEl.className = 'test-list';
        tests.subscribe(function (list) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        while (testListEl.hasChildNodes()) {
                            testListEl.removeChild(testListEl.lastChild);
                        }
                        _a = testListEl;
                        return [4 /*yield*/, Promise.all(list.map(renderTest))];
                    case 1:
                        _a.innerHTML = (_b.sent()).join('');
                        return [2 /*return*/];
                }
            });
        }); });
        $abTestContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a("<div class=\"ui-container hideme\"></div>").append(testListEl);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a("<button type=\"button\" class=\"reset\">Reset all</button>")
            .on('click', reset)
            .appendTo($abTestContainer);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a("<div class=\"close\">X</div>")
            .on('click', hide)
            .appendTo($abTestContainer);
        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        shadowRoot.appendChild(style);
        shadowRoot.appendChild($abTestContainer[0]);
        document.body.appendChild(containerElement);
        isInitialized = true;
    }
    function show() {
        if (isInitialized) {
            $abTestContainer.removeClass('hideme');
        }
        else {
            showSplitTestUi();
        }
    }
    function hide() {
        $abTestContainer.addClass('hideme');
    }
    return {
        show: show,
        hide: hide
    };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(14);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n  font-family: Helvetica Neue, serif;\r\n}\r\n\r\n.ui-container {\r\n  position: fixed;\r\n  bottom: 15px;\r\n  right: 15px;\r\n  width: 300px;\r\n  height: 300px;\r\n  color: #292929;\r\n  z-index: 999;\r\n  background-color: #FFFFFF;\r\n  border: 1px solid #f2800d;\r\n  box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.2);\r\n  transition: all .5s ease-out;\r\n  opacity: 1;\r\n}\r\n.ui-container.hideme {\r\n  bottom: -350px;\r\n  opacity: 0;\r\n}\r\n.test-list {\r\n  overflow-y: scroll;\r\n  height: 250px;\r\n}\r\n.test {\r\n  padding: 10px;\r\n}\r\n.header {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  background-color: #292929;\r\n  color: #FFFFFF;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n.data-label {\r\n  display: inline-block;\r\n  margin-bottom: 2px;\r\n  margin-right: 5px;\r\n  color: #292929;\r\n}\r\n.data-label:after {\r\n  content: \":\";\r\n}\r\n.data-value {\r\n  color: #000;\r\n  font-weight: bold;\r\n  text-transform: capitalize;\r\n}\r\n.variant {\r\n  text-transform: uppercase;\r\n  color: #66ff33;\r\n}\r\n.close {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: -8px;\r\n  right: -8px;\r\n  background-color: #f2800d;\r\n  color: #000;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n.reset {\r\n  display: block;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n  background-color: #f2800d;\r\n  font-size: 18px;\r\n  color: #FFFFFF;\r\n  border: 0;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 15 */
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=skift.source.map