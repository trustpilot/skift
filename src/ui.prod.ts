import { BehavioralSubject } from './behavioralSubject';
import { SplitTest } from './splitTest';
import { UserAgentInfo } from './userAgentInfo';

export const uiFactory = (
    tests: BehavioralSubject<SplitTest[]>,
    reset: () => void,
    getCurrentTestVariation: (testName: string) => string,
    getUserAgentInfo: () => UserAgentInfo,
    setCurrentTestVariation: (testName: string, variation: string) => void,
) => {
    function show() {
        console.log('[Skift] Running in production, UI is disabled');
    }

    function hide() {
        console.log('[Skift] Running in production, UI is disabled');
    }

    return {
        hide,
        show,
    };
};
