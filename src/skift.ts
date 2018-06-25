import SplitTest from './splitTest';
import _config, { UserConfig } from './config';

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

export function create(name: string): SplitTest {
    return new SplitTest(name, _config);
}
