(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global.skift = factory(global.jQuery));
}(this, (function ($$1) { 'use strict';

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
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
}
function getUserAgentInfo$1() {
    return __assign({}, getNameAndVersion(), { isMobile: isMobile() });
}

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
        return readCookie(config$1.cookieName);
    },
    saveUserSession: function (userSession, daysToLive) {
        createCookie(config$1.cookieName, userSession, daysToLive);
    }
};

var defaultTrackingEventHandler = (function () {
    function log(event, trackingData) {
        console.log('Split testing event: ' + event, trackingData);
    }
    return {
        track: log,
        trackLink: function (elements, event, trackingData) {
            $$1(elements).on('click', function () {
                log(event, trackingData);
            });
        }
    };
})();
var config$1 = {
    cookieName: 'skiftABTest',
    globalCondition: function () { return true; },
    sessionPersister: persister,
    tracking: defaultTrackingEventHandler,
    userSessionDaysToLive: 3,
    uiCondition: function () { return false; }
};

var UserSession = (function () {
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
        config$1.sessionPersister.saveUserSession(JSON.stringify(variationsMap), config$1.userSessionDaysToLive);
    };
    UserSession.prototype.loadVariations = function () {
        var variationsMap = JSON.parse(config$1.sessionPersister.loadUserSession() || '{}');
        return variationsMap;
    };
    return UserSession;
}());
var userSession = new UserSession();

/**
 * Constructs a new TrackingDataExtender that extending the existing tracking data with the provided tracking data
 * @param newTrackingData
 */
function trackingDataExtenderFactory(newTrackingData) {
    return function (trackingData) { return (__assign({}, trackingData, newTrackingData)); };
}

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
var stringify = querystringify;
var parse = querystring;

var index = {
	stringify: stringify,
	parse: parse
};

var SplitTest = (function () {
    function SplitTest(name, userAgentInfo, trackingDataExtender) {
        this.name = name;
        this.userAgentInfo = userAgentInfo;
        this.trackingDataExtender = trackingDataExtender;
        this.isInitialized = false;
        this._variations = [];
        this.extendTrackingData(trackingDataExtenderFactory({
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
    SplitTest.prototype.canRun = function (userAgentInfo) {
        return (typeof config$1.globalCondition !== 'function' || config$1.globalCondition(userAgentInfo))
            && (typeof this.condition !== 'function' || this.condition(userAgentInfo));
    };
    SplitTest.prototype.setCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    SplitTest.prototype.addVariation = function (variation) {
        if (typeof variation.name !== 'string' || variation.name === '' || this.getVariation(variation.name)) {
            throw new Error("Split test \"" + this.name + "\": Variation must have a unique name. Was \"" + variation.name + "\"");
        }
        this._variations.push(__assign({}, variation, { normalizedWeight: 0, weight: (typeof variation.weight === 'number' ? variation.weight : 1) }));
        this.normalizeVariationWeights();
        return this;
    };
    SplitTest.prototype.setup = function () {
        if (this.isInitialized) {
            return true;
        }
        // Step 1: Run condition function, if any
        if (!this.canRun(this.userAgentInfo)) {
            return false;
        }
        // Step 2: Select variation
        var variation = this.getVariation(userSession.getTestVariation(this.name));
        if (!variation) {
            variation = this.selectRandomVariation();
            userSession.setTestVariation(this.name, variation.name);
        }
        this.extendTrackingData(trackingDataExtenderFactory({
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
        this.isInitialized = true;
        return true;
    };
    SplitTest.prototype.getVariation = function (name) {
        return this._variations.filter(function (v) { return v.name === name; })[0];
    };
    SplitTest.prototype.getVariationUrl = function (variationName) {
        var param = this.name + "=" + variationName;
        var query = index.parse(location.search);
        try {
            query.abtest = btoa(param);
            return location.protocol + '//' + location.host + location.pathname +
                index.stringify(query, true) +
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
            actionTarget: (target || '')
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
        // Disable the rule for now and refactor this, when covered by a test.
        // tslint:disable-next-line:max-line-length no-conditional-assignment no-empty
        for (var runningTotal = 0, testSegment = Math.random(); i < this._variations.length && (runningTotal += this._variations[i].normalizedWeight) < testSegment; i++) {
        }
        return this._variations[i];
    };
    SplitTest.prototype.trackEvent = function (event, trackingData) {
        var allTrackingData = this.trackingDataExtender(trackingData || {}, event);
        config$1.tracking.track(event, allTrackingData);
    };
    return SplitTest;
}());

var userAgentInfo = getUserAgentInfo$1();
var tests = [];
function config(userConfig) {
    if (userConfig === void 0) { userConfig = {}; }
    if (userConfig.cookieName) {
        config$1.cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        config$1.globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        config$1.tracking = userConfig.tracking;
    }
    if (userConfig.uiCondition) {
        config$1.uiCondition = userConfig.uiCondition;
    }
    if (userConfig.userSessionDaysToLive) {
        config$1.userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
}
/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory() {
    return trackingDataExtenderFactory({
        browser: userAgentInfo.name,
        browserVersion: userAgentInfo.version,
        isMobile: userAgentInfo.isMobile
    });
}
function initializeFromQueryString(session) {
    var query = index.parse(location.search);
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
    initializeFromQueryString(userSession);
}
// Public API
function validateInitialized(test) {
    if (!test.isInitialized) {
        throw new Error('Skift: Test not initialized yet!');
    }
}
function validateTestName(testName) {
    if (!getTest(testName)) {
        throw new Error("Skift: Unknown test '" + testName + "\"");
    }
}
function reloadWithoutAbTestParameter() {
    var query = index.parse(location.search);
    delete query['abtest'];
    location.href = location.href.replace(location.search, '').replace(location.hash, '') +
        index.stringify(query, Object.keys(query).length > 0) +
        location.hash;
}
function getUserAgentInfo() {
    return userAgentInfo;
}
function getTest(name) {
    return tests.filter(function (t) { return t.name === name; })[0];
}
function create(name) {
    var test = new SplitTest(name, userAgentInfo, baseTrackingDataExtenderFactory());
    tests.push(test);
    return test;
}
function getCurrentTestVariation(testName) {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    return userSession.getTestVariation(testName);
}
function setCurrentTestVariation(testName, variation) {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    userSession.setTestVariation(testName, variation);
    reloadWithoutAbTestParameter();
}
function reset() {
    userSession.reset();
    reloadWithoutAbTestParameter();
}
// tslint:disable
var ui;
(function (ui) {
    var uiClass = 'abtest-ui-container';
    var isInitialized = false;
    function getVariationPercentage(variation) {
        return Math.round(variation.normalizedWeight * 100) + '%';
    }
    function showSplitTestUi(test) {
        var variation = getCurrentTestVariation(test.name);
        var $abTestContainer = $$1("<div class=\"" + uiClass + " hideme\"></div>")
            .appendTo('body')
            .append("\n              <div class=\"abtest-header\">Split test. Viewing <span class=\"abtest-variant\">" + variation + "</span></div>\n            ");
        var data = {
            'Test': test.name,
            'Variation': variation + " (" + getVariationPercentage(test.getVariation(variation)) + ")",
            'Browser': getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
            'Mobile device': getUserAgentInfo().isMobile
        };
        Object.keys(data).forEach(function (key) {
            $abTestContainer.append("\n              <div>\n                <span class=\"abtest-data-label\">" + key + "</span><span class=\"abtest-data-value\">" + data[key] + "</span>\n              </div>\n            ");
        });
        var variationHtml = test.variations.map(function (variant) {
            return "\n              <a href=\"" + test.getVariationUrl(variant.name) + "\"\n                 title=\"Segment: " + getVariationPercentage(variant) + "\">" + variant.name + "</a>";
        });
        $$1(variationHtml.join('&nbsp;&bull;&nbsp;')).appendTo($abTestContainer);
        $$1("<br><button type=\"button\">Reset all</button>")
            .on('click', reset)
            .appendTo($abTestContainer);
        $$1('<div class="abtest-close">X</div>')
            .on('click', hide)
            .appendTo($abTestContainer);
        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        isInitialized = true;
    }
    function show(testsList) {
        if (isInitialized) {
            $$1("." + uiClass).removeClass('hideme');
        }
        else if (testsList.length > 0) {
            showSplitTestUi(testsList[0]);
        }
    }
    ui.show = show;
    function hide() {
        $$1("." + uiClass).addClass('hideme');
    }
    ui.hide = hide;
    $$1(function () {
        if (!config$1.globalCondition(userAgentInfo) || !config$1.uiCondition(userAgentInfo)) {
            return;
        }
        setTimeout(function () { return show(tests); }, 1000);
    });
})(ui || (ui = {}));
// tslint:enable


var skift$1 = Object.freeze({
	tests: tests,
	config: config,
	initialize: initialize,
	getUserAgentInfo: getUserAgentInfo,
	getTest: getTest,
	create: create,
	getCurrentTestVariation: getCurrentTestVariation,
	setCurrentTestVariation: setCurrentTestVariation,
	reset: reset,
	get ui () { return ui; },
	SplitTest: SplitTest
});

initialize();

return skift$1;

})));
