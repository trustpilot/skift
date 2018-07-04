import {
    config,
    create,
    getCurrentTestVariation,
    getTest,
    getUserAgentInfo,
    initialize,
    reset,
    setCurrentTestVariation,
    shouldShowUI,
    SplitTest,
    tests,
    testsObservable,
} from './main';
import { uiFactory } from './ui';

initialize();

const ui = uiFactory(
    testsObservable,
    reset,
    getCurrentTestVariation,
    getUserAgentInfo,
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
    initialize,
};

export default {
    SplitTest,
    config,
    create,
    getCurrentTestVariation,
    getTest,
    getUserAgentInfo,
    initialize,
    reset,
    setCurrentTestVariation,
    tests,
    ui,
};
