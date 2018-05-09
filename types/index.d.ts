import { tests, config, getUserAgentInfo, getTest, create, getCurrentTestVariation, setCurrentTestVariation, reset, SplitTest, initialize } from './main';
declare const ui: {
    show: () => void;
    hide: () => void;
};
export { tests, config, getUserAgentInfo, getTest, create, getCurrentTestVariation, setCurrentTestVariation, reset, ui, SplitTest };
declare const _default: {
    tests: SplitTest[];
    config: typeof config;
    getUserAgentInfo: typeof getUserAgentInfo;
    getTest: typeof getTest;
    create: typeof create;
    getCurrentTestVariation: typeof getCurrentTestVariation;
    setCurrentTestVariation: typeof setCurrentTestVariation;
    reset: typeof reset;
    ui: {
        show: () => void;
        hide: () => void;
    };
    SplitTest: typeof SplitTest;
    initialize: typeof initialize;
};
export default _default;
