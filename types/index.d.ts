import { tests, config, getUserAgentInfo, getTest, create, getCurrentTestVariation, setCurrentTestVariation, reset, SplitTest, UserConfig } from './main';
import { UserAgentInfo } from './useragentinfo';
declare const ui: {
    show: () => void;
    hide: () => void;
};
export { tests, config, getUserAgentInfo, getTest, create, getCurrentTestVariation, setCurrentTestVariation, reset, ui, SplitTest };
declare const _default: {
    tests: SplitTest[];
    config: (userConfig?: UserConfig) => void;
    getUserAgentInfo: () => UserAgentInfo;
    getTest: (name: string) => SplitTest;
    create: (name: string) => SplitTest;
    getCurrentTestVariation: (testName: string) => string;
    setCurrentTestVariation: (testName: string, variation: string) => void;
    reset: () => void;
    ui: {
        show: () => void;
        hide: () => void;
    };
    SplitTest: typeof SplitTest;
    initialize: () => void;
};
export default _default;
