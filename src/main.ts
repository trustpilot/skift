import _getUserAgentInfo, { UserAgentInfo } from './useragentinfo';
import userSession, { UserSession } from './usersession';
import { SplitTest, InternalVariation } from './splittest';
import { BehavioralSubject } from './behavioral-subject';
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
export const testsObservable: BehavioralSubject<
    SplitTest[]
> = new BehavioralSubject(tests);

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
        throw new Error(`Skift: Test "${test.name}" is not initialized yet!`);
    }
}
function validateTestName(testName: string) {
    if (!getTest(testName)) {
        throw new Error(`Skift: Unknown test "${testName}"`);
    }
}

function reloadWithoutAbTestParameter() {
    const query = qs.parse(location.search);
    delete query['abtest'];
    location.href =
        location.href.replace(location.search, '').replace(location.hash, '') +
        qs.stringify(query, Object.keys(query).length > 0) +
        location.hash;
}

export function getUserAgentInfo() {
    return userAgentInfo;
}

export function getTest(name: string) {
    return tests.filter(t => t.name === name)[0];
}

export function create(name: string): SplitTest {
    const test = new SplitTest(
        name,
        userAgentInfo,
        baseTrackingDataExtenderFactory()
    );
    tests.push(test);
    test.changes.subscribe(() => testsObservable.next(tests));
    return test;
}

export function getCurrentTestVariation(testName: string): string {
    validateTestName(testName);
    validateInitialized(getTest(testName));
    return userSession.getTestVariation(testName);
}

export function setCurrentTestVariation(
    testName: string,
    variation: string
): void {
    validateTestName(testName);
    validateInitialized(getTest(testName));

    userSession.setTestVariation(testName, variation);
    reloadWithoutAbTestParameter();
}

export function reset(): void {
    userSession.reset();
    reloadWithoutAbTestParameter();
}

export function shouldShowUI() {
    return (
        !_config.globalCondition(userAgentInfo) ||
        !_config.uiCondition(userAgentInfo)
    );
}
