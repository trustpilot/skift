import SplitTest from './splitTest';
import skifConfig, { UserConfig } from './config';

export function config(userConfig: UserConfig = {}) {
    if (userConfig.cookieName) {
        skifConfig.cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        skifConfig.globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        skifConfig.tracking = userConfig.tracking;
    }
    if (userConfig.userSessionDaysToLive) {
        skifConfig.userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
    if (userConfig.sessionPersister) {
        skifConfig.sessionPersister = userConfig.sessionPersister;
    }
}

export function create(name: string): SplitTest {
    return new SplitTest(name, skifConfig);
}
