import $ from "jquery";
import { UserAgentHelper, UserAgentInfo } from "./useragenthelper";
import CookieHelper from "./cookiehelper";
import UserSession from "./usersession";
import { AbTest, ConditionFunction } from "./splittest";
import {TrackingDataExtender, TrackingEventHandler, trackingDataExtenderFactory } from "./tracking";
import { parseQueryString } from "./utils";

export let tests: AbTest[] = [];
const cookieName = "trustpilotABTest",
        userSessionDaysToLive = 3;
let isInitialized = false,
    userSession: UserSession,
    globalCondition: ConditionFunction;


export interface ObjectLiteral {
    [key: string]: any;
}

/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory(): TrackingDataExtender { 
    return trackingDataExtenderFactory({
        "browser": userSession.userAgent.name,
        "browserVersion": userSession.userAgent.version,
        "isMobile": userSession.userAgent.isMobile
    });
} 

function getOrCreateUserSession(): UserSession {
    const existingSession = CookieHelper.readCookie(cookieName);
    return existingSession != null
        ? UserSession.fromJson(existingSession)
        : new UserSession(userSessionDaysToLive);
}


function initializeFromQueryString(userSession: UserSession): void {
    const query = parseQueryString(location.search),
            abtestParam = query["abtest"];
    
    if (typeof abtestParam === "string") {
        try {
            let testAndVariant = atob(abtestParam).split("="),
                test = testAndVariant[0],
                variant = testAndVariant[1];
            userSession.setTestVariant(test, variant);
        } catch (e) { }
    }
}

(function initialize(): void {
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
function validateTestName(testName: string) {
    if (!getTest(testName)) {
        throw new Error(`A/B Test: Unknown test "${testName}"`);
    }
}

function reloadWithoutAbTestParameter() {
    const query = parseQueryString(location.search);
    delete query["abtest"];
    location.href = location.href.replace(location.search, "").replace(location.hash, "") +
                        (Object.keys(query).length? "?" : "") +
                        $.param(query) +
                        location.hash;
}

export function getUserAgentInfo(): UserAgentInfo {
    return userSession.userAgent;
}

export function getTest(name: string) {
    return tests.filter(t => t.name === name)[0];
}

export function canRunTest(test: AbTest): boolean {
    return (typeof globalCondition !== "function" || globalCondition(userSession.userAgent)) &&
            test.canRun(userSession.userAgent);
}

export function create(name: string) : AbTest {
    const test = new AbTest(name, baseTrackingDataExtenderFactory());
    if (isInitialized) {
        if (globalCondition(userSession.userAgent)) {
            // Setup "immediately" in the next cycle of the event loop.
            // This will allow a condition and test variations to be added on beforehand.
            setTimeout(function() {
                if (test.setup(userSession)) {
                    tests.push(test);
                }
            });
        }
    } else {
        tests.push(test);
    }
    return test;
}

export function getTestVariant(testName: string): string {
    validateInitialized();
    validateTestName(testName);
    return userSession.getTestVariant(testName);
}

export function hasTestVariant(testName: string, variant: string): boolean {
    if (!isInitialized) {
        console.warn(`A/B Test: Not yet initialized`);
    }
    return isInitialized && userSession.getTestVariant(testName) === variant && getTest(testName) != null;
}

export function setTestVariant(testName: string, variant: string): void {
    validateInitialized();
    validateTestName(testName);
    userSession.setTestVariant(testName, variant);
    reloadWithoutAbTestParameter();
}

/** Set a global condition that must return true before initializing any tests */
export function setGlobalCondition(condition: ConditionFunction): void {
    if (isInitialized) {
        throw new Error(`A/B Test: Too late. Tests already running`);
    }
    globalCondition = condition;
}

export function reset(): void {
    userSession = new UserSession(userSessionDaysToLive);
    reloadWithoutAbTestParameter();
}

export namespace ui {
    const uiClass = "abtest-ui-container";
    let condition : ConditionFunction = () => { return false; }
    let isInitialized = false;

    function showAbTestUi(test: AbTest) {
        const variant = getTestVariant(test.name);
        const $abTestContainer = $(`<div class="${uiClass} hideme"></div>`)
                                    .appendTo('body')
                                    .append(`<div class="abtest-header">A/B test. Viewing <span class="abtest-variant">${variant}</span></div>`);
        const data: ObjectLiteral = {
            "Test": test.name,
            "Variation": `${variant} (${test.getVariant(variant).segment}%)`,
            "A/B test segment": userSession.testSegment,
            "Browser": userSession.userAgent.name + " " +  userSession.userAgent.version,
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
    export function setCondition(newCondition: ConditionFunction) {
        condition = newCondition;
    }

    export function show() {
        if (isInitialized) {
            $(`.${uiClass}`).removeClass('hideme');
        } else if (tests.length > 0) {
            showAbTestUi(tests[0]);
        }
    }

    export function hide() {
        $(`.${uiClass}`).addClass('hideme');
    }
}