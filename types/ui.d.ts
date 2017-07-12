import { SplitTest } from './splittest';
import { UserAgentInfo } from './useragentinfo';
import { BehavioralSubject } from './behavioral-subject';
export declare const uiFactory: (tests: BehavioralSubject<SplitTest[]>, reset: () => void, getCurrentTestVariation: (testName: string) => string, getUserAgentInfo: () => UserAgentInfo) => {
    show: () => void;
    hide: () => void;
};
