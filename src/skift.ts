import SplitTest from './splitTest';
import * as userAgent from './userAgent';
import _config, { UserConfig } from './config';

export const tests: SplitTest[] = [];
const userAgentInfo = userAgent.getInfo();

export function config(userConfig: UserConfig = {}) {
    if (userConfig.cookieName) {
        _config.cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        _config.globalCondition = userConfig.globalCondition;
    }
    if (userConfig.trackingHandler) {
        _config.trackingHandler = userConfig.trackingHandler;
    }
    if (userConfig.userSessionDaysToLive) {
        _config.userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
}

export function getTest(name: string) {
    return tests.filter(t => t.name === name)[0];
}

export function create(name: string): SplitTest {
    const test = new SplitTest(
        name,
        userAgentInfo,
        _config,
    );
    tests.push(test);
    return test;
}
