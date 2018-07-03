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

function domReady(cb: () => void) {
    if (document.readyState !== 'loading') {
        return cb();
    }
    document.addEventListener('DOMContentLoaded', cb);
}

domReady(() => {
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
    SplitTest,
    initialize
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
