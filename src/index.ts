import $ from 'jquery';
import {
    tests,
    config,
    getUserAgentInfo,
    getTest,
    create,
    getCurrentTestVariation,
    setCurrentTestVariation,
    reset,
    SplitTest,
    initialize,
    UserConfig,
    shouldShowUI
} from './main';
import { UserAgentInfo } from './useragentinfo';
import { uiFactory } from './ui';

initialize();

const ui = uiFactory(tests, reset, getCurrentTestVariation, getUserAgentInfo);

$(() => {
    if (shouldShowUI()) {
        return;
    }

    setTimeout(() => ui.show(), 1000);
});

export {
    tests,
    config,
    getUserAgentInfo,
    getTest,
    create,
    getCurrentTestVariation,
    setCurrentTestVariation,
    reset,
    ui,
    SplitTest
};

export default {
    tests,
    config,
    getUserAgentInfo,
    getTest,
    create,
    getCurrentTestVariation,
    setCurrentTestVariation,
    reset,
    ui,
    SplitTest,
    initialize
};
