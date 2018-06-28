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
    shouldShowUI
} from './main';
import { uiFactory } from './ui';

initialize();

const ui = uiFactory(
    testsObservable,
    reset,
    getCurrentTestVariation,
    getUserAgentInfo
);

document.addEventListener('DOMContentLoaded', (event) => {
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
