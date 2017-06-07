import * as skift from './main';

export default (userConfig: skift.UserConfig = {}) => {
    if (userConfig.cookieName) {
        skift.config.cookieName = userConfig.cookieName;
    }
    if (userConfig.globalCondition) {
        skift.config.globalCondition = userConfig.globalCondition;
    }
    if (userConfig.tracking) {
        skift.config.tracking = userConfig.tracking;
    }
    if (userConfig.uiCondition) {
        skift.config.uiCondition = userConfig.uiCondition;
    }
    if (userConfig.userSessionDaysToLive) {
        skift.config.userSessionDaysToLive = userConfig.userSessionDaysToLive;
    }
    skift.initialize();
    return skift;
};
