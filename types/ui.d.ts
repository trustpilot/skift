import { SplitTest } from './splittest';
import { UserAgentInfo } from './useragentinfo';
export declare const uiFactory: (tests: SplitTest[], reset: () => void, getCurrentTestVariation: (testName: string) => string, getUserAgentInfo: () => UserAgentInfo) => {
    show: () => void;
    hide: () => void;
};
