import $ from "jquery";
import _getUserAgentInfo, { UserAgentInfo } from "./useragentinfo";
import UserSession from "./usersession";
import { SplitTest, InternalVariation } from "./splittest";
import { TrackingDataExtender, trackingDataExtenderFactory, TrackingEventHandler } from "./tracking";
import { parseQueryString } from "./utils";
import _config, { ConditionFunction } from "./config";

const userAgentInfo = _getUserAgentInfo();
export const config = { 
    get globalCondition() {
        return _config.globalCondition;
    },
    /** Set a global condition that must return true before initializing any tests */
    set globalCondition(value: ConditionFunction) {
        if (isInitialized) {
            throw new Error(`Split test: Too late. Tests already running`);
        }
        _config.globalCondition = value;
    },
    get tracking() {
        return _config.tracking;
    },
    set tracking(tracking: TrackingEventHandler){
        _config.tracking = tracking;
    },
    get uiCondition() {
        return _config.uiCondition;
    },
    set uiCondition(value: ConditionFunction) {
        _config.uiCondition = value;
    },
    get userSessionDaysToLive() {
        return _config.userSessionDaysToLive;
    },
    set userSessionDaysToLive(days: number) {
        _config.userSessionDaysToLive = days;
    },
};

const tests: SplitTest[] = [];
let isInitialized = false,
    userSession: UserSession;

/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory(): TrackingDataExtender { 
    return trackingDataExtenderFactory({
        "browser": userAgentInfo.name,
        "browserVersion": userAgentInfo.version,
        "isMobile": userAgentInfo.isMobile
    });
} 

function getOrCreateUserSession(): UserSession {
    const existingSession = _config.sessionPersister.loadUserSession();
    return existingSession != null
        ? UserSession.fromJson(existingSession)
        : new UserSession();
}


function initializeFromQueryString(userSession: UserSession): void {
    const query = parseQueryString(location.search),
            abtestParam = query["abtest"];
    
    if (typeof abtestParam === "string") {
        try {
            let testAndVariant = atob(abtestParam).split("="),
                test = testAndVariant[0],
                variant = testAndVariant[1];
            userSession.setTestVariation(test, variant);
        } catch (e) { }
    }
}

function initialize(): void {
    userSession = getOrCreateUserSession();

    // On DOMContentLoaded
    $(() => {
        if (config.globalCondition(userAgentInfo)) {
            initializeFromQueryString(userSession);

            window.addEventListener("pagehide", () => {
                if (tests.length > 0) {
                    _config.sessionPersister.saveUserSession(userSession.toJson(), config.userSessionDaysToLive);
                }
            });

            tests.forEach(function(test, index, tests) {
                if (!test.setup(userSession, userAgentInfo)){
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
setTimeout(() => initialize());


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

export function getUserAgentInfo() {
    return userAgentInfo;
}

export function getTest(name: string) {
    return tests.filter(t => t.name === name)[0];
}

export function canRunTest(test: SplitTest): boolean {
    return config.globalCondition(userAgentInfo) && test.canRun(userAgentInfo);
}

export function create(name: string) : SplitTest {
    const test = new SplitTest(name, baseTrackingDataExtenderFactory());
    if (isInitialized) {
        if (config.globalCondition(userAgentInfo)) {
            // Setup "immediately" in the next cycle of the event loop.
            // This will allow a condition and test variations to be added on beforehand.
            setTimeout(function() {
                if (test.setup(userSession, userAgentInfo)) {
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
    return userSession.getTestVariation(testName);
}

export function hasTestVariant(testName: string, variant: string): boolean {
    if (!isInitialized) {
        console.warn(`Split test: Not yet initialized`);
    }
    return isInitialized && userSession.getTestVariation(testName) === variant && getTest(testName) != null;
}

export function setTestVariant(testName: string, variant: string): void {
    validateInitialized();
    validateTestName(testName);
    userSession.setTestVariation(testName, variant);
    reloadWithoutAbTestParameter();
}

export function reset(): void {
    userSession = new UserSession();
    reloadWithoutAbTestParameter();
}

export namespace ui {
    const uiClass = "abtest-ui-container";
    let isInitialized = false;

    function getVariationPercentage(variation: InternalVariation): string {
        return Math.round(variation.normalizedWeight * 100) + "%";
    }

    function showSplitTestUi(test: SplitTest) {
        const variation = getTestVariant(test.name);
        const $abTestContainer = $(`<div class="${uiClass} hideme"></div>`)
                                    .appendTo('body')
                                    .append(`<div class="abtest-header">Split test. Viewing <span class="abtest-variant">${variation}</span></div>`);
        const data: { [key:string]: any } = {
            "Test": test.name,
            "Variation": `${variation} (${getVariationPercentage(<InternalVariation>test.getVariation(variation))})`,
            "Browser": getUserAgentInfo().name + " " +  getUserAgentInfo().version,
            "Mobile device": getUserAgentInfo().isMobile
        };
        Object.keys(data).forEach((key) => {
            $abTestContainer.append(`<div><span class="abtest-data-label">${key}</span><span class="abtest-data-value">${data[key]}</span></div>`);
        });

        const variationHtml = test.variations.map((variant) => {
            return `<a href="${test.getVariationUrl(variant.name)}" title="Segment: ${getVariationPercentage(<InternalVariation>variant)}">${variant.name}</a>`;
        });
        $(variationHtml.join("&nbsp;&bull;&nbsp;")).appendTo($abTestContainer);

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

    export function show(tests: SplitTest[]) {
        if (isInitialized) {
            $(`.${uiClass}`).removeClass('hideme');
        } else if (tests.length > 0) {
            showSplitTestUi(tests[0]);
        }
    }

    export function hide() {
        $(`.${uiClass}`).addClass('hideme');
    }

    $(() => {
        if (!config.uiCondition(userAgentInfo)) {
            return;
        }

        setTimeout(function() {
            show(tests);
        }, 1000);
    });
 }