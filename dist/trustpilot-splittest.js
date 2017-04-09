(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery'], factory) :
	(factory((global['trustpilot-splittest'] = global['trustpilot-splittest'] || {}),global.jQuery));
}(this, (function (exports,$$1) { 'use strict';

$$1 = 'default' in $$1 ? $$1['default'] : $$1;

var CookieHelper = (function () {
    function CookieHelper() {
    }
    CookieHelper.createCookie = function (name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };
    CookieHelper.readCookie = function (name) {
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
    };
    CookieHelper.eraseCookie = function (name) {
        CookieHelper.createCookie(name, "", -1);
    };
    return CookieHelper;
}());

var UserAgentHelper = (function () {
    function UserAgentHelper() {
    }
    UserAgentHelper.isMobile = function () {
        var ua = navigator.userAgent || navigator.vendor;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
    };
    UserAgentHelper.getNameAndVersion = function () {
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
    };
    UserAgentHelper.getUserAgentInfo = function () {
        return $$1.extend(UserAgentHelper.getNameAndVersion(), {
            isMobile: UserAgentHelper.isMobile()
        });
    };
    return UserAgentHelper;
}());

var userSessionDaysToLive$1 = 3;
var UserSession = (function () {
    function UserSession(daysToLive, testSegment, testVariants) {
        if (testSegment === void 0) { testSegment = Math.floor((Math.random() * 100) + 1); }
        if (testVariants === void 0) { testVariants = {}; }
        this.daysToLive = daysToLive;
        this.testSegment = testSegment;
        this.testVariants = testVariants;
        this.userAgent = UserAgentHelper.getUserAgentInfo();
    }
    UserSession.prototype.setTestVariant = function (testName, variantName) {
        this.testVariants[testName] = variantName;
    };
    UserSession.prototype.getTestVariant = function (testName) {
        return this.testVariants[testName];
    };
    UserSession.prototype.save = function (key) {
        var json = JSON.stringify({
            testSegment: this.testSegment,
            testVariants: this.testVariants
        });
        CookieHelper.createCookie(key, json, this.daysToLive);
    };
    UserSession.fromJson = function (json) {
        var obj = JSON.parse(json);
        return new UserSession(userSessionDaysToLive$1, obj.testSegment, obj.testVariants);
    };
    return UserSession;
}());

/**
 * Linear Congruential Generator
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
var Rng = (function () {
    function Rng(seed) {
        this.state = seed;
    }
    Rng.prototype.nextInt = function () {
        this.state = (Rng.a * this.state + Rng.c) % Rng.m;
        return this.state;
    };
    /**
     * Get a (integer) number in range [start, end): including start, excluding end.
     * @param start Range start (included)
     * @param end Range end (excluded)
     */
    Rng.prototype.nextRange = function (start, end) {
        // can't modulu nextInt because of weak randomness in lower bits
        var rangeSize = end - start;
        var randomUnder1 = this.nextInt() / Rng.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    };
    return Rng;
}());
// Using GCC's constants
Rng.m = 0x80000000; // 2**31;
Rng.a = 1103515245;
Rng.c = 12345;

var trackingEventHandler;
/**
 * Constructs a new TrackingDataExtender that extending the existing tracking data with the provided tracking data
 * @param newTrackingData
 */
function trackingDataExtenderFactory(newTrackingData) {
    return function (trackingData) { return $.extend(trackingData, newTrackingData); };
}

function parseQueryString(queryString) {
    queryString = queryString || location.search;
    var parameters = queryString.replace(/^\?/, "").split('&');
    var vars = [];
    for (var i = 0; i < parameters.length && parameters[i] !== ""; i++) {
        var _a = parameters[i].split('='), key = _a[0], value = _a[1];
        vars.push(key);
        vars[key] = decodeURIComponent(value);
    }
    return vars;
}

var AbTest = (function () {
    function AbTest(name, trackingDataExtender) {
        this.name = name;
        this.trackingDataExtender = trackingDataExtender;
        this.variants = [];
        this.extendTrackingData(trackingDataExtenderFactory({
            "experimentName": name
        }));
    }
    /**
     * Determines whether this test is able to run or not.
     */
    AbTest.prototype.canRun = function (userAgentInfo) {
        return typeof this.condition !== "function" || this.condition(userAgentInfo);
    };
    AbTest.prototype.setCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    AbTest.prototype.addVariant = function (variant) {
        if (typeof variant.name !== "string" || variant.name === "" || this.getVariant(variant.name)) {
            throw new Error("A/B Test \"" + this.name + "\": Variant must have a unique name. Was \"" + variant.name + "\"");
        }
        if (typeof variant.segment !== "number" || variant.segment < 0 || variant.segment > 100) {
            throw new Error("A/B Test \"" + this.name + "\", variant \"" + variant.name + "\": \"segment\" must be a number between 0-100. Was " + variant.segment);
        }
        this.variants.push(variant);
        return this;
    };
    AbTest.prototype.setup = function (userSession) {
        // Step 1: Validate whether this test is correctly configured
        var variantsSegmentationSum = Math.round(this.variants.reduce(function (sum, v) { return sum + v.segment; }, 0));
        if (variantsSegmentationSum !== 100) {
            console.error("A/B Test: IGNORING test \"" + this.name + "\", because variant segmentation does not add up to 100. Current value: " + variantsSegmentationSum);
            return false;
        }
        // Step 2: Run condition function, if any
        if (typeof this.condition === "function" && !this.condition(userSession.userAgent)) {
            return false;
        }
        // Step 3: Select and setup variant
        var variant = this.selectVariant(userSession);
        userSession.setTestVariant(this.name, variant.name);
        this.extendTrackingData(trackingDataExtenderFactory({
            "variationName": variant.name
        }));
        if (typeof variant.setup === "function") {
            variant.setup.call(this, userSession.userAgent, this);
        }
        // Step 4: Publish track event
        if (variant.trackEventAutoPublish !== false) {
            this.trackViewed();
        }
        return true;
    };
    AbTest.prototype.getVariant = function (name) {
        return this.variants.filter(function (v) { return v.name === name; })[0];
    };
    AbTest.prototype.getVariantUrl = function (variantName) {
        var param = this.name + "=" + variantName, query = parseQueryString(location.search);
        try {
            query["abtest"] = btoa(param);
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
    AbTest.prototype.extendTrackingData = function (trackingDataExtender) {
        if (typeof trackingDataExtender === "function") {
            var currentExtender_1 = this.trackingDataExtender;
            this.trackingDataExtender = function (trackingData, eventName) {
                return trackingDataExtender(currentExtender_1(trackingData, eventName), eventName);
            };
        }
        return this;
    };
    AbTest.prototype.trackEvent = function (event, trackingData) {
        if (trackingEventHandler) {
            var allTrackingData = this.trackingDataExtender(trackingData || {}, event);
            trackingEventHandler.track(event, allTrackingData);
        }
    };
    /**
     * Emits an "Experiment Viewed" tracking event
     */
    AbTest.prototype.trackViewed = function () {
        this.trackEvent("ExperimentViewed");
    };
    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    AbTest.prototype.trackActionPerformed = function (action, target) {
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
    AbTest.prototype.trackLink = function (elements, name) {
        if (trackingEventHandler) {
            var event_1 = "ExperimentActionPerformed";
            var trackingData = this.trackingDataExtender({
                "action": "Click",
                "actionTarget": name || $(elements).text()
            }, event_1);
            trackingEventHandler.trackLink(elements, event_1, trackingData);
        }
    };
    /**
     * Selects a variation based on a user session.
     * If the user has already seen a specific variation, we select the same one again
     */
    AbTest.prototype.selectVariant = function (userSession) {
        var selectedVariant = this.getVariant(userSession.getTestVariant(this.name) || "");
        if (!selectedVariant) {
            var testSegment = this.getTestSegment(userSession.testSegment);
            for (var i = 0, variantLowerBound = 0; i < this.variants.length; i++) {
                var variant = this.variants[i], variantUpperBound = variantLowerBound + this.variants[i].segment;
                if (variantLowerBound < testSegment && testSegment <= variantUpperBound) {
                    selectedVariant = variant;
                    break;
                }
                variantLowerBound = variantUpperBound;
            }
        }
        return selectedVariant;
    };
    /**
     * Rotates the user segment number using the name of this test.
     * @param userTestSegment The segment number chosen for this user (1-100)
     * @returns {number} A number between 1-100
     */
    AbTest.prototype.getTestSegment = function (userTestSegment) {
        var seed = this.name.split("")
            .map(function (c) { return c.charCodeAt(0); })
            .reduce(function (a, b) { return a + (b * userTestSegment); }, 0);
        var rng = new Rng(seed);
        return rng.nextRange(1, 101);
    };
    return AbTest;
}());

exports.tests = [];
var cookieName = "trustpilotABTest";
var userSessionDaysToLive = 3;
var isInitialized = false;
var userSession;
var globalCondition;
/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory() {
    return trackingDataExtenderFactory({
        "browser": userSession.userAgent.name,
        "browserVersion": userSession.userAgent.version,
        "isMobile": userSession.userAgent.isMobile
    });
}
function getOrCreateUserSession() {
    var existingSession = CookieHelper.readCookie(cookieName);
    return existingSession != null
        ? UserSession.fromJson(existingSession)
        : new UserSession(userSessionDaysToLive);
}
function initializeFromQueryString(userSession) {
    var query = parseQueryString(location.search), abtestParam = query["abtest"];
    if (typeof abtestParam === "string") {
        try {
            var testAndVariant = atob(abtestParam).split("="), test = testAndVariant[0], variant = testAndVariant[1];
            userSession.setTestVariant(test, variant);
        }
        catch (e) { }
    }
}
(function initialize() {
    userSession = getOrCreateUserSession();
    // On DOMContentLoaded
    $$1(function () {
        if (typeof globalCondition !== "function" || globalCondition(userSession.userAgent)) {
            initializeFromQueryString(userSession);
            $$1(window).on("pagehide", function () {
                if (exports.tests.length > 0) {
                    userSession.save(cookieName);
                }
            });
            exports.tests = exports.tests.filter(function (test) {
                return test.setup(userSession);
            });
        }
        isInitialized = true;
    });
})();
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
    return userSession.userAgent;
}
function getTest(name) {
    return exports.tests.filter(function (t) { return t.name === name; })[0];
}
function canRunTest(test) {
    return (typeof globalCondition !== "function" || globalCondition(userSession.userAgent)) &&
        test.canRun(userSession.userAgent);
}
function create(name) {
    var test = new AbTest(name, baseTrackingDataExtenderFactory());
    if (isInitialized) {
        if (globalCondition(userSession.userAgent)) {
            // Setup "immediately" in the next cycle of the event loop.
            // This will allow a condition and test variations to be added on beforehand.
            setTimeout(function () {
                if (test.setup(userSession)) {
                    exports.tests.push(test);
                }
            });
        }
    }
    else {
        exports.tests.push(test);
    }
    return test;
}
function getTestVariant(testName) {
    validateInitialized();
    validateTestName(testName);
    return userSession.getTestVariant(testName);
}
function hasTestVariant(testName, variant) {
    if (!isInitialized) {
        console.warn("A/B Test: Not yet initialized");
    }
    return isInitialized && userSession.getTestVariant(testName) === variant && getTest(testName) != null;
}
function setTestVariant(testName, variant) {
    validateInitialized();
    validateTestName(testName);
    userSession.setTestVariant(testName, variant);
    reloadWithoutAbTestParameter();
}
/** Set a global condition that must return true before initializing any tests */
function setGlobalCondition(condition) {
    if (isInitialized) {
        throw new Error("A/B Test: Too late. Tests already running");
    }
    globalCondition = condition;
}
function reset() {
    userSession = new UserSession(userSessionDaysToLive);
    reloadWithoutAbTestParameter();
}

(function (ui) {
    var uiClass = "abtest-ui-container";
    var condition = function () { return false; };
    var isInitialized = false;
    function showAbTestUi(test) {
        var variant = getTestVariant(test.name);
        var $abTestContainer = $$1("<div class=\"" + uiClass + " hideme\"></div>")
            .appendTo('body')
            .append("<div class=\"abtest-header\">A/B test. Viewing <span class=\"abtest-variant\">" + variant + "</span></div>");
        var data = {
            "Test": test.name,
            "Variation": variant + " (" + test.getVariant(variant).segment + "%)",
            "A/B test segment": userSession.testSegment,
            "Browser": userSession.userAgent.name + " " + userSession.userAgent.version,
            "Mobile device": userSession.userAgent.isMobile
        };
        Object.keys(data).forEach(function (key) {
            $abTestContainer.append("<div><span class=\"abtest-data-label\">" + key + "</span><span class=\"abtest-data-value\">" + data[key] + "</span></div>");
        });
        var variantHtml = test.variants.map(function (variant) {
            return "<a href=\"" + test.getVariantUrl(variant.name) + "\" title=\"Segment: " + variant.segment + "%\">" + variant.name + "</a>";
        });
        $$1(variantHtml.join("&nbsp;&bull;&nbsp;")).appendTo($abTestContainer);
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
    $$1(function () {
        if (!condition(userSession.userAgent)) {
            return;
        }
        setTimeout(show, 1000);
    });
    // Public API
    function setCondition(newCondition) {
        condition = newCondition;
    }
    ui.setCondition = setCondition;
    function show() {
        if (isInitialized) {
            $$1("." + uiClass).removeClass('hideme');
        }
        else if (exports.tests.length > 0) {
            showAbTestUi(exports.tests[0]);
        }
    }
    ui.show = show;
    function hide() {
        $$1("." + uiClass).addClass('hideme');
    }
    ui.hide = hide;
})(exports.ui || (exports.ui = {}));

exports.getUserAgentInfo = getUserAgentInfo;
exports.getTest = getTest;
exports.canRunTest = canRunTest;
exports.create = create;
exports.getTestVariant = getTestVariant;
exports.hasTestVariant = hasTestVariant;
exports.setTestVariant = setTestVariant;
exports.setGlobalCondition = setGlobalCondition;
exports.reset = reset;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=trustpilot-splittest.js.map
