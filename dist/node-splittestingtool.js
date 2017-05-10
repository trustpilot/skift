(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
	(factory((global['node-splittestingtool'] = global['node-splittestingtool'] || {}),global.jQuery));
}(this, (function (exports,$$1) { 'use strict';

$$1 = 'default' in $$1 ? $$1['default'] : $$1;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function getNameAndVersion() {
    var ua = navigator.userAgent, tem, match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
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
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        match.splice(1, 1, tem[1]);
    }
    return {
        name: match[0],
        version: match[1]
    };
}
function isMobile() {
    var ua = navigator.userAgent || navigator.vendor;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
}
function getUserAgentInfo$1() {
    return __assign({}, getNameAndVersion(), { isMobile: isMobile() });
}

var UserSession = (function () {
    function UserSession(testVariations) {
        if (testVariations === void 0) { testVariations = {}; }
        this.testVariations = testVariations;
    }
    UserSession.prototype.setTestVariation = function (testName, variationName) {
        this.testVariations[testName] = variationName;
    };
    UserSession.prototype.getTestVariation = function (testName) {
        return this.testVariations[testName];
    };
    UserSession.prototype.toJson = function () {
        return JSON.stringify({
            testVariations: this.testVariations
        });
    };
    UserSession.fromJson = function (json) {
        var obj = JSON.parse(json);
        return new UserSession(obj.testVariations);
    };
    return UserSession;
}());

/**
 * Constructs a new TrackingDataExtender that extending the existing tracking data with the provided tracking data
 * @param newTrackingData
 */
function trackingDataExtenderFactory(newTrackingData) {
    return function (trackingData) { return (__assign({}, trackingData, newTrackingData)); };
}

function parseQueryString(queryString) {
    if (queryString === void 0) { queryString = location.search; }
    var parameters = location.search.replace(/^\?/, "").split('&');
    var vars = {};
    for (var i = 0; i < parameters.length && parameters[i] !== ""; i++) {
        var _a = parameters[i].split('='), key = _a[0], value = _a[1];
        vars[key] = decodeURIComponent(value);
    }
    return vars;
}

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEq = name + "=";
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
        return readCookie(config$1.cookieName);
    },
    saveUserSession: function (userSession, daysToLive) {
        createCookie(config$1.cookieName, userSession, daysToLive);
    }
};

var defaultTrackingEventHandler = (function () {
    function log(event, trackingData) {
        console.log("Split testing event: " + event, trackingData);
    }
    return {
        track: log,
        trackLink: function (elements, event, trackingData) {
            $$1(elements).on("click", function () {
                log(event, trackingData);
            });
        }
    };
})();
var config$1 = {
    cookieName: "trustpilotABTest",
    globalCondition: function () { return true; },
    sessionPersister: persister,
    tracking: defaultTrackingEventHandler,
    userSessionDaysToLive: 3,
    uiCondition: function () { return false; },
};

var SplitTest = (function () {
    function SplitTest(name, trackingDataExtender) {
        this.name = name;
        this.trackingDataExtender = trackingDataExtender;
        this._variations = [];
        this.extendTrackingData(trackingDataExtenderFactory({
            "experimentName": name
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
    SplitTest.prototype.canRun = function (userAgentInfo) {
        return typeof this.condition !== "function" || this.condition(userAgentInfo);
    };
    SplitTest.prototype.setCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    SplitTest.prototype.addVariation = function (variation) {
        if (typeof variation.name !== "string" || variation.name === "" || this.getVariation(variation.name)) {
            throw new Error("Split test \"" + this.name + "\": Variation must have a unique name. Was \"" + variation.name + "\"");
        }
        this._variations.push(__assign({}, variation, { normalizedWeight: 0, weight: variation.weight || 1 }));
        this.normalizeVariationWeights();
        return this;
    };
    SplitTest.prototype.setup = function (userSession, userAgentInfo) {
        // Step 1: Run condition function, if any
        if (typeof this.condition === "function" && !this.condition(userAgentInfo)) {
            return false;
        }
        // Step 2: Select variation
        var variation = this.getVariation(userSession.getTestVariation(this.name));
        if (!variation) {
            variation = this.selectRandomVariation();
            userSession.setTestVariation(this.name, variation.name);
        }
        this.extendTrackingData(trackingDataExtenderFactory({
            "variationName": variation.name
        }));
        // Step 3: Setup variation
        if (typeof variation.setup === "function") {
            variation.setup.call(this, userAgentInfo);
        }
        // Step 4: Publish track event
        if (variation.trackEventAutoPublish !== false) {
            this.trackViewed();
        }
        return true;
    };
    SplitTest.prototype.getVariation = function (name) {
        return this._variations.filter(function (v) { return v.name === name; })[0];
    };
    SplitTest.prototype.getVariationUrl = function (variationName) {
        var param = this.name + "=" + variationName, query = parseQueryString(location.search);
        try {
            query.abtest = btoa(param);
            return location.protocol + "//" + location.host + location.pathname +
                "?" + $.param(query) +
                location.hash;
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
    SplitTest.prototype.trackEvent = function (event, trackingData) {
        var allTrackingData = this.trackingDataExtender(trackingData || {}, event);
        config$1.tracking.track(event, allTrackingData);
    };
    /**
     * Emits an "Experiment Viewed" tracking event
     */
    SplitTest.prototype.trackViewed = function () {
        this.trackEvent("ExperimentViewed");
    };
    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    SplitTest.prototype.trackActionPerformed = function (action, target) {
        this.trackEvent("ExperimentActionPerformed", {
            "action": action,
            "actionTarget": (target || "")
        });
    };
    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param elements The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    SplitTest.prototype.trackLink = function (elements, name) {
        var event = "ExperimentActionPerformed";
        var trackingData = this.trackingDataExtender({
            "action": "Click",
            "actionTarget": name || $(elements).text()
        }, event);
        config$1.tracking.trackLink(elements, event, trackingData);
    };
    SplitTest.prototype.normalizeVariationWeights = function () {
        var weightsSum = this._variations.reduce(function (sum, variation) { return sum + variation.weight; }, 0);
        this._variations.forEach(function (variation) {
            variation.normalizedWeight = variation.weight / weightsSum;
        });
    };
    SplitTest.prototype.selectRandomVariation = function () {
        var i = 0;
        for (var runningTotal = 0, testSegment = Math.random(); i < this._variations.length && (runningTotal += this._variations[i].normalizedWeight) < testSegment; i++) { }
        return this._variations[i];
    };
    return SplitTest;
}());

var userAgentInfo = getUserAgentInfo$1();
var config = {
    get globalCondition() {
        return config$1.globalCondition;
    },
    /** Set a global condition that must return true before initializing any tests */
    set globalCondition(value) {
        if (isInitialized) {
            throw new Error("Split test: Too late. Tests already running");
        }
        config$1.globalCondition = value;
    },
    get tracking() {
        return config$1.tracking;
    },
    set tracking(tracking) {
        config$1.tracking = tracking;
    },
    get uiCondition() {
        return config$1.uiCondition;
    },
    set uiCondition(value) {
        config$1.uiCondition = value;
    },
    get userSessionDaysToLive() {
        return config$1.userSessionDaysToLive;
    },
    set userSessionDaysToLive(days) {
        config$1.userSessionDaysToLive = days;
    },
};
var tests = [];
var isInitialized = false;
var userSession;
/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory() {
    return trackingDataExtenderFactory({
        "browser": userAgentInfo.name,
        "browserVersion": userAgentInfo.version,
        "isMobile": userAgentInfo.isMobile
    });
}
function getOrCreateUserSession() {
    var existingSession = config$1.sessionPersister.loadUserSession();
    return existingSession != null
        ? UserSession.fromJson(existingSession)
        : new UserSession();
}
function initializeFromQueryString(userSession) {
    var query = parseQueryString(location.search), abtestParam = query["abtest"];
    if (typeof abtestParam === "string") {
        try {
            var testAndVariant = atob(abtestParam).split("="), test = testAndVariant[0], variant = testAndVariant[1];
            userSession.setTestVariation(test, variant);
        }
        catch (e) { }
    }
}
function initialize() {
    userSession = getOrCreateUserSession();
    // On DOMContentLoaded
    $$1(function () {
        if (config.globalCondition(userAgentInfo)) {
            initializeFromQueryString(userSession);
            window.addEventListener("pagehide", function () {
                if (tests.length > 0) {
                    config$1.sessionPersister.saveUserSession(userSession.toJson(), config.userSessionDaysToLive);
                }
            });
            tests.forEach(function (test, index, tests) {
                if (!test.setup(userSession, userAgentInfo)) {
                    tests.splice(index);
                }
            });
            // tests = tests.filter((test) => {
            //     return test.setup(userSession, userAgentInfo);
            // });
        }
        isInitialized = true;
    });
}
setTimeout(function () { return initialize(); });
// Public API 
function validateInitialized() {
    if (!isInitialized) {
        throw new Error("A/B Test: Not ready yet! (wait for DOMContentLoaded)");
    }
}
function validateTestName(testName) {
    if (!getTest(testName)) {
        throw new Error("A/B Test: Unknown test \"" + testName + "\"");
    }
}
function reloadWithoutAbTestParameter() {
    var query = parseQueryString(location.search);
    delete query["abtest"];
    location.href = location.href.replace(location.search, "").replace(location.hash, "") +
        (Object.keys(query).length ? "?" : "") +
        $$1.param(query) +
        location.hash;
}
function getUserAgentInfo() {
    return userAgentInfo;
}
function getTest(name) {
    return tests.filter(function (t) { return t.name === name; })[0];
}
function canRunTest(test) {
    return config.globalCondition(userAgentInfo) && test.canRun(userAgentInfo);
}
function create(name) {
    var test = new SplitTest(name, baseTrackingDataExtenderFactory());
    if (isInitialized) {
        if (config.globalCondition(userAgentInfo)) {
            // Setup "immediately" in the next cycle of the event loop.
            // This will allow a condition and test variations to be added on beforehand.
            setTimeout(function () {
                if (test.setup(userSession, userAgentInfo)) {
                    tests.push(test);
                }
            });
        }
    }
    else {
        tests.push(test);
    }
    return test;
}
function getTestVariant(testName) {
    validateInitialized();
    validateTestName(testName);
    return userSession.getTestVariation(testName);
}
function hasTestVariant(testName, variant) {
    if (!isInitialized) {
        console.warn("Split test: Not yet initialized");
    }
    return isInitialized && userSession.getTestVariation(testName) === variant && getTest(testName) != null;
}
function setTestVariant(testName, variant) {
    validateInitialized();
    validateTestName(testName);
    userSession.setTestVariation(testName, variant);
    reloadWithoutAbTestParameter();
}
function reset() {
    userSession = new UserSession();
    reloadWithoutAbTestParameter();
}

(function (ui) {
    var uiClass = "abtest-ui-container";
    var isInitialized = false;
    function getVariationPercentage(variation) {
        return Math.round(variation.normalizedWeight * 100) + "%";
    }
    function showSplitTestUi(test) {
        var variation = getTestVariant(test.name);
        var $abTestContainer = $$1("<div class=\"" + uiClass + " hideme\"></div>")
            .appendTo('body')
            .append("<div class=\"abtest-header\">Split test. Viewing <span class=\"abtest-variant\">" + variation + "</span></div>");
        var data = {
            "Test": test.name,
            "Variation": variation + " (" + getVariationPercentage(test.getVariation(variation)) + ")",
            "Browser": getUserAgentInfo().name + " " + getUserAgentInfo().version,
            "Mobile device": getUserAgentInfo().isMobile
        };
        Object.keys(data).forEach(function (key) {
            $abTestContainer.append("<div><span class=\"abtest-data-label\">" + key + "</span><span class=\"abtest-data-value\">" + data[key] + "</span></div>");
        });
        var variationHtml = test.variations.map(function (variant) {
            return "<a href=\"" + test.getVariationUrl(variant.name) + "\" title=\"Segment: " + getVariationPercentage(variant) + "\">" + variant.name + "</a>";
        });
        $$1(variationHtml.join("&nbsp;&bull;&nbsp;")).appendTo($abTestContainer);
        $$1("<br><button type=\"button\">Reset all</button>")
            .on("click", reset)
            .appendTo($abTestContainer);
        $$1('<div class="abtest-close">X</div>')
            .on("click", hide)
            .appendTo($abTestContainer);
        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        isInitialized = true;
    }
    function show(tests) {
        if (isInitialized) {
            $$1("." + uiClass).removeClass('hideme');
        }
        else if (tests.length > 0) {
            showSplitTestUi(tests[0]);
        }
    }
    ui.show = show;
    function hide() {
        $$1("." + uiClass).addClass('hideme');
    }
    ui.hide = hide;
    $$1(function () {
        if (!config.globalCondition(userAgentInfo) || !config.uiCondition(userAgentInfo)) {
            return;
        }
        setTimeout(function () {
            show(tests);
        }, 1000);
    });
})(exports.ui || (exports.ui = {}));

exports.config = config;
exports.getUserAgentInfo = getUserAgentInfo;
exports.getTest = getTest;
exports.canRunTest = canRunTest;
exports.create = create;
exports.getTestVariant = getTestVariant;
exports.hasTestVariant = hasTestVariant;
exports.setTestVariant = setTestVariant;
exports.reset = reset;

Object.defineProperty(exports, '__esModule', { value: true });

})));
