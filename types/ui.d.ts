import { BehavioralSubject } from './behavioral-subject';
import { SplitTest } from './splittest';
import { UserAgentInfo } from './useragentinfo';
export declare const uiFactory: (tests: BehavioralSubject<SplitTest[]>, reset: () => void, getCurrentTestVariation: (testName: string) => string, getUserAgentInfo: () => UserAgentInfo) => {
    show: () => void;
    hide: () => void;
};
