import $ from 'jquery';
import _getUserAgentInfo, { UserAgentInfo } from './useragentinfo';
import userSession, { UserSession } from './usersession';
import { SplitTest, InternalVariation } from './splittest';
export { SplitTest } from './splittest';
import {
    TrackingDataExtender,
    trackingDataExtenderFactory,
    TrackingEventHandler
} from './tracking';
import qs from 'querystringify';
import _config, { ConditionFunction, UserSessionPersister } from './config';

export interface UserConfig {
    cookieName?: string;
    globalCondition?: ConditionFunction;
    sessionPersister?: UserSessionPersister;
    tracking?: TrackingEventHandler;
    uiCondition?: ConditionFunction;
    userSessionDaysToLive?: number;
}

const userAgentInfo = _getUserAgentInfo();
export const tests: SplitTest[] = [];

export function config(userConfig: UserConfig = {}) {
    if (userConfig.cookieName) {
        _config.cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        _config.globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        _config.tracking = userConfig.tracking;
    }
    if (userConfig.uiCondition) {
        _config.uiCondition = userConfig.uiCondition;
    }
    if (userConfig.userSessionDaysToLive) {
        _config.userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
}

/**
 * The base tracking data extender supplying general tracking data
 */
function baseTrackingDataExtenderFactory(): TrackingDataExtender {
    return trackingDataExtenderFactory({
        browser: userAgentInfo.name,
        browserVersion: userAgentInfo.version,
        isMobile: userAgentInfo.isMobile
    });
}

function initializeFromQueryString(session: UserSession): void {
    const query = qs.parse(location.search);
    const abtestParam = query['abtest'];

    if (typeof abtestParam === 'string') {
        try {
            const [test, variant] = atob(abtestParam).split('=');
            session.setTestVariation(test, variant);
        } catch (e) {
            // TODO: Handle error.
        }
    }
}

export function initialize(): void {
    initializeFromQueryString(userSession);
}

// Public API

function validateInitialized(test: SplitTest) {
    if (!test.isInitialized) {
        throw new Error('Skift: Test not initialized yet!');
    }
}
function validateTestName(testName: string) {
    if (!getTest(testName)) {
        throw new Error(`Skift: Unknown test '${testName}"`);
    }
}

function reloadWithoutAbTestParameter() {
    const query = qs.parse(location.search);
    delete query['abtest'];
    location.href = location.href.replace(location.search, '').replace(location.hash, '') +
        qs.stringify(query, Object.keys(query).length > 0) +
        location.hash;
}

export function getUserAgentInfo() {
    return userAgentInfo;
}

export function getTest(name: string) {
    return tests.filter((t) => t.name === name)[0];
}

export function create(name: string): SplitTest {
    const test = new SplitTest(name, userAgentInfo, baseTrackingDataExtenderFactory());
    tests.push(test);
    return test;
}

export function getCurrentTestVariation(testName: string): string {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    return userSession.getTestVariation(testName);
}

export function setCurrentTestVariation(testName: string, variation: string): void {
    validateTestName(testName);
    validateInitialized(getTest(testName));

    userSession.setTestVariation(testName, variation);
    reloadWithoutAbTestParameter();
}

export function reset(): void {
    userSession.reset();
    reloadWithoutAbTestParameter();
}

declare const require: any;

// tslint:disable
export namespace ui {
    const uiClassPrefix = 'skift';
    let isInitialized = false;
    let $abTestContainer: JQuery;

    function getVariationPercentage(variation: InternalVariation): string {
        return Math.round(variation.normalizedWeight * 100) + '%';
    }

    function showSplitTestUi(test: SplitTest) {

        if(!document.head.attachShadow) {
            console.warn(`Skift: Sorry, we don't support the UI in the browsers witout Shadow DOM for now`);
            return;
        }

        const containerElement = document.createElement('div');
        const shadowRoot = containerElement.attachShadow({mode: 'open'});
        const style = document.createElement('style');
        style.innerHTML = require('./main.css');
        const variation = getCurrentTestVariation(test.name);
        $abTestContainer = $(`<div class="${uiClassPrefix}-ui-container hideme"></div>`)
            .append(`
              <div class="${uiClassPrefix}-header">
                Split test. Viewing <span class="abtest-variant">${variation}</span>
              </div>
            `);
        const data: { [key: string]: any } = {
            'Test': test.name,
            'Variation': `${variation} (${getVariationPercentage(<InternalVariation>test.getVariation(variation))})`,
            'Browser': getUserAgentInfo().name + ' ' + getUserAgentInfo().version,
            'Mobile device': getUserAgentInfo().isMobile
        };
        Object.keys(data).forEach((key) => {
            $abTestContainer.append(`
              <div>
                <span class="${uiClassPrefix}-data-label">${key}</span>
                <span class="${uiClassPrefix}-data-value">${data[key]}</span>
              </div>
            `);
        });

        const variationHtml = test.variations.map((variant) => {
            return `
              <a href="${test.getVariationUrl(variant.name)}"
                 title="Segment: ${getVariationPercentage(<InternalVariation>variant)}">${variant.name}</a>`;
        });
        $(variationHtml.join('&nbsp;&bull;&nbsp;')).appendTo($abTestContainer);

        $(`<br><button type="button">Reset all</button>`)
            .on('click', reset)
            .appendTo($abTestContainer);

        $(`<div class="${uiClassPrefix}-close">X</div>`)
            .on('click', hide)
            .appendTo($abTestContainer);

        // Make UI fadein
        $abTestContainer.removeClass('hideme');
        shadowRoot.appendChild(style);
        shadowRoot.appendChild($abTestContainer[0]);
        document.body.appendChild(containerElement);
        isInitialized = true;
    }

    export function show(testsList: SplitTest[]) {
        if (isInitialized) {
            $abTestContainer.removeClass('hideme');
        } else if (testsList.length > 0) {
            showSplitTestUi(testsList[0]);
        }
    }

    export function hide() {
        $abTestContainer.addClass('hideme');
    }

    $(() => {
        if (!_config.globalCondition(userAgentInfo) || !_config.uiCondition(userAgentInfo)) {
            return;
        }

        setTimeout(() => show(tests), 1000);
    });
}
// tslint:enable
