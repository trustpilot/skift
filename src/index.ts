import { InMemoryPersister } from './inMemoryPersister';
import {
    config,
    create,
    getCurrentTestVariation,
    getTest,
    getUserAgentInfo,
    reset,
    setCurrentTestVariation,
    shouldShowUI,
    tests,
    testsObservable,
} from './main';
import { SplitTest } from './splitTest';
import { uiFactory } from './ui';
import { CookiePersister } from './userSessionPersister';
import type { UserSessionPersister } from "./userSessionPersister";

const ui = uiFactory(
    testsObservable,
    reset,
    getCurrentTestVariation,
    getUserAgentInfo,
    setCurrentTestVariation,
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
    UserSessionPersister,
    InMemoryPersister,
    CookiePersister,
};

export default {
    SplitTest,
    config,
    create,
    getCurrentTestVariation,
    getTest,
    getUserAgentInfo,
    reset,
    setCurrentTestVariation,
    tests,
    ui,
};
