import $ from 'jquery';
import {
    tests,
    testsObservable,
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

const ui = uiFactory(
    testsObservable,
    reset,
    getCurrentTestVariation,
    getUserAgentInfo
);

$(() => {
    setTimeout(async () => {
        if (await shouldShowUI()) {
            ui.show();
        }
    }, 0);
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
