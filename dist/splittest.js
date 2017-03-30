import * as $ from "jquery";
export let tests = [];
const cookieName = "trustpilotABTest", userSessionDaysToLive = 3;
let isInitialized = false, userSession, globalCondition, trackingEventHandler;
/**
 * Constructs a new TrackingDataExtender that extending the existing tracking data with the provided tracking data
 * @param newTrackingData
 */
function trackingDataExtenderFactory(newTrackingData) {
    return (trackingData) => $.extend(trackingData, newTrackingData);
}
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
/**
 * Linear Congruential Generator
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
class Rng {
    constructor(seed) {
        this.state = seed;
    }
    nextInt() {
        this.state = (Rng.a * this.state + Rng.c) % Rng.m;
        return this.state;
    }
    /**
     * Get a (integer) number in range [start, end): including start, excluding end.
     * @param start Range start (included)
     * @param end Range end (excluded)
     */
    nextRange(start, end) {
        // can't modulu nextInt because of weak randomness in lower bits
        const rangeSize = end - start;
        const randomUnder1 = this.nextInt() / Rng.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    }
}
// Using GCC's constants
Rng.m = 0x80000000; // 2**31;
Rng.a = 1103515245;
Rng.c = 12345;
class UserAgentHelper {
    static isMobile() {
        var ua = navigator.userAgent || navigator.vendor;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
    }
    static getNameAndVersion() {
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
    static getUserAgentInfo() {
        return $.extend(UserAgentHelper.getNameAndVersion(), {
            isMobile: UserAgentHelper.isMobile()
        });
    }
}
class CookieHelper {
    static createCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    static readCookie(name) {
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
    static eraseCookie(name) {
        CookieHelper.createCookie(name, "", -1);
    }
}
export class UserSession {
    constructor(daysToLive, testSegment = Math.floor((Math.random() * 100) + 1), testVariants = {}) {
        this.daysToLive = daysToLive;
        this.testSegment = testSegment;
        this.testVariants = testVariants;
        this.userAgent = UserAgentHelper.getUserAgentInfo();
    }
    setTestVariant(testName, variantName) {
        this.testVariants[testName] = variantName;
    }
    getTestVariant(testName) {
        return this.testVariants[testName];
    }
    save(key) {
        var json = JSON.stringify({
            testSegment: this.testSegment,
            testVariants: this.testVariants
        });
        CookieHelper.createCookie(key, json, this.daysToLive);
    }
    static fromJson(json) {
        var obj = JSON.parse(json);
        return new UserSession(userSessionDaysToLive, obj.testSegment, obj.testVariants);
    }
}
export class AbTest {
    constructor(name) {
        this.name = name;
        this.trackingDataExtender = baseTrackingDataExtenderFactory();
        this.variants = [];
        this.extendTrackingData(trackingDataExtenderFactory({
            "experimentName": name
        }));
    }
    /**
     * Determines whether this test is able to run or not.
     */
    canRun(userAgentInfo) {
        return (typeof globalCondition !== "function" || globalCondition(userAgentInfo)) &&
            (typeof this.condition !== "function" || this.condition(userAgentInfo));
    }
    setCondition(condition) {
        this.condition = condition;
        return this;
    }
    addVariant(variant) {
        if (typeof variant.name !== "string" || variant.name === "" || this.getVariant(variant.name)) {
            throw new Error(`A/B Test "${this.name}": Variant must have a unique name. Was "${variant.name}"`);
        }
        if (typeof variant.segment !== "number" || variant.segment < 0 || variant.segment > 100) {
            throw new Error(`A/B Test "${this.name}", variant "${variant.name}": "segment" must be a number between 0-100. Was ${variant.segment}`);
        }
        this.variants.push(variant);
        return this;
    }
    setup(userSession) {
        // Step 1: Validate whether this test is correctly configured
        const variantsSegmentationSum = Math.round(this.variants.reduce((sum, v) => sum + v.segment, 0));
        if (variantsSegmentationSum !== 100) {
            console.error(`A/B Test: IGNORING test "${this.name}", because variant segmentation does not add up to 100. Current value: ${variantsSegmentationSum}`);
            return false;
        }
        // Step 2: Run condition function, if any
        if (typeof this.condition === "function" && !this.condition(userSession.userAgent)) {
            return false;
        }
        // Step 3: Select and setup variant
        const variant = this.selectVariant(userSession);
        userSession.setTestVariant(this.name, variant.name);
        this.extendTrackingData(trackingDataExtenderFactory({
            "variationName": variant.name
        }));
        if (typeof variant.setup === "function") {
            variant.setup(userSession.userAgent, this);
        }
        // Step 4: Publish track event
        if (variant.trackEventAutoPublish !== false) {
            this.trackViewed();
        }
        return true;
    }
    getVariant(name) {
        return this.variants.filter((v) => v.name === name)[0];
    }
    getVariantUrl(variantName) {
        const param = `${this.name}=${variantName}`, query = deserializeQueryString(location.search);
        try {
            query["abtest"] = btoa(param);
            return location.protocol + "//" + location.host + location.pathname +
                "?" + $.param(query) +
                location.hash;
        }
        catch (e) {
            return location.href;
        }
    }
    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    extendTrackingData(trackingDataExtender) {
        if (typeof trackingDataExtender === "function") {
            let currentExtender = this.trackingDataExtender;
            this.trackingDataExtender = function (trackingData, eventName) {
                return trackingDataExtender(currentExtender(trackingData, eventName), eventName);
            };
        }
        return this;
    }
    trackEvent(event, trackingData) {
        if (trackingEventHandler) {
            const allTrackingData = this.trackingDataExtender(trackingData || {}, event);
            trackingEventHandler.track(event, allTrackingData);
        }
    }
    /**
     * Emits an "Experiment Viewed" tracking event
     */
    trackViewed() {
        this.trackEvent("ExperimentViewed");
    }
    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    trackActionPerformed(action, target) {
        this.trackEvent("ExperimentActionPerformed", {
            "action": action,
            "actionTarget": (target || "")
        });
    }
    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param elements The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    trackLink(elements, name) {
        if (trackingEventHandler) {
            const event = "ExperimentActionPerformed";
            const trackingData = this.trackingDataExtender({
                "action": "Click",
                "actionTarget": name || $(elements).text()
            }, event);
            trackingEventHandler.trackLink(elements, event, trackingData);
        }
    }
    /**
     * Selects a variation based on a user session.
     * If the user has already seen a specific variation, we select the same one again
     */
    selectVariant(userSession) {
        let selectedVariant = this.getVariant(userSession.getTestVariant(this.name) || "");
        if (!selectedVariant) {
            let testSegment = this.getTestSegment(userSession.testSegment);
            for (let i = 0, variantLowerBound = 0; i < this.variants.length; i++) {
                let variant = this.variants[i], variantUpperBound = variantLowerBound + this.variants[i].segment;
                if (variantLowerBound < testSegment && testSegment <= variantUpperBound) {
                    selectedVariant = variant;
                    break;
                }
                variantLowerBound = variantUpperBound;
            }
        }
        return selectedVariant;
    }
    /**
     * Rotates the user segment number using the name of this test.
     * @param userTestSegment The segment number chosen for this user (1-100)
     * @returns {number} A number between 1-100
     */
    getTestSegment(userTestSegment) {
        const seed = this.name.split("")
            .map(c => c.charCodeAt(0))
            .reduce((a, b) => a + (b * userTestSegment), 0);
        const rng = new Rng(seed);
        return rng.nextRange(1, 101);
    }
}
function getOrCreateUserSession() {
    const existingSession = CookieHelper.readCookie(cookieName);
    return existingSession != null
        ? UserSession.fromJson(existingSession)
        : new UserSession(userSessionDaysToLive);
}
function deserializeQueryString(queryString) {
    if (queryString === "")
        return {};
    const params = decodeURIComponent(queryString.replace('?', '')).split('&'), queryObj = {};
    params.forEach((item) => {
        const keyValue = item.split('=');
        queryObj[keyValue[0]] = keyValue.length > 1 ? keyValue[1] : '';
    });
    return queryObj;
}
function initializeFromQueryString(userSession) {
    const query = deserializeQueryString(location.search), abtestParam = query["abtest"];
    if (typeof abtestParam === "string") {
        try {
            let testAndVariant = atob(abtestParam).split("="), test = testAndVariant[0], variant = testAndVariant[1];
            userSession.setTestVariant(test, variant);
        }
        catch (e) { }
    }
}
(function initialize() {
    userSession = getOrCreateUserSession();
    // On DOMContentLoaded
    $(() => {
        if (typeof globalCondition !== "function" || globalCondition(userSession.userAgent)) {
            initializeFromQueryString(userSession);
            $(window).on("pagehide", () => {
                if (tests.length > 0) {
                    userSession.save(cookieName);
                }
            });
            tests = tests.filter((test) => {
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
        throw new Error(`A/B Test: Unknown test "${testName}"`);
    }
}
function reloadWithoutAbTestParameter() {
    const query = deserializeQueryString(location.search);
    delete query["abtest"];
    location.href = location.href.replace(location.search, "").replace(location.hash, "") +
        (Object.keys(query).length ? "?" : "") +
        $.param(query) +
        location.hash;
}
export function getUserAgentInfo() {
    return userSession.userAgent;
}
export function getTest(name) {
    return tests.filter(t => t.name === name)[0];
}
export function create(name) {
    const test = new AbTest(name);
    if (isInitialized) {
        if (globalCondition(userSession.userAgent)) {
            // Setup "immediately" in the next cycle of the event loop.
            // This will allow a condition and test variations to be added on beforehand.
            setTimeout(function () {
                if (test.setup(userSession)) {
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
export function getTestVariant(testName) {
    validateInitialized();
    validateTestName(testName);
    return userSession.getTestVariant(testName);
}
export function hasTestVariant(testName, variant) {
    if (!isInitialized) {
        console.warn(`A/B Test: Not yet initialized`);
    }
    return isInitialized && userSession.getTestVariant(testName) === variant && getTest(testName) != null;
}
export function setTestVariant(testName, variant) {
    validateInitialized();
    validateTestName(testName);
    userSession.setTestVariant(testName, variant);
    reloadWithoutAbTestParameter();
}
/** Set a global condition that must return true before initializing any tests */
export function setGlobalCondition(condition) {
    if (isInitialized) {
        throw new Error(`A/B Test: Too late. Tests already running`);
    }
    globalCondition = condition;
}
export function reset() {
    userSession = new UserSession(userSessionDaysToLive);
    reloadWithoutAbTestParameter();
}
export function setTrackingEventHandler(handler) {
    if (typeof handler === "object" && typeof handler.track === "function" && typeof handler.trackLink === "function") {
        trackingEventHandler = handler;
    }
}
export var ui;
(function (ui) {
    const uiClass = "abtest-ui-container";
    let condition = () => { return false; };
    let isInitialized = false;
    function showAbTestUi(test) {
        const variant = getTestVariant(test.name);
        const $abTestContainer = $(`<div class="${uiClass} hideme"></div>`)
            .appendTo('body')
            .append(`<div class="abtest-header">A/B test. Viewing <span class="abtest-variant">${variant}</span></div>`);
        const data = {
            "Test": test.name,
            "Variation": `${variant} (${test.getVariant(variant).segment}%)`,
            "A/B test segment": userSession.testSegment,
            "Browser": userSession.userAgent.name + " " + userSession.userAgent.version,
            "Mobile device": userSession.userAgent.isMobile
        };
        Object.keys(data).forEach((key) => {
            $abTestContainer.append(`<div><span class="abtest-data-label">${key}</span><span class="abtest-data-value">${data[key]}</span></div>`);
        });
        const variantHtml = test.variants.map((variant) => {
            return `<a href="${test.getVariantUrl(variant.name)}" title="Segment: ${variant.segment}%">${variant.name}</a>`;
        });
        $(variantHtml.join("&nbsp;&bull;&nbsp;")).appendTo($abTestContainer);
        $(`<br><button type="button">Reset all</button>`)
            .on("click", reset)
            .appendTo($abTestContainer);
        $('<div class="abtest-close">X</div>')
            .on("click", hide)
            .appendTo($abTestContainer);
        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        isInitialized = true;
    }
    $(() => {
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
            $(`.${uiClass}`).removeClass('hideme');
        }
        else if (tests.length > 0) {
            showAbTestUi(tests[0]);
        }
    }
    ui.show = show;
    function hide() {
        $(`.${uiClass}`).addClass('hideme');
    }
    ui.hide = hide;
})(ui || (ui = {}));
//# sourceMappingURL=splittest.js.map