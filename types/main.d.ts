import { UserAgentInfo } from './useragentinfo';
import { SplitTest } from './splittest';
export { SplitTest } from './splittest';
import { TrackingEventHandler } from './tracking';
import { ConditionFunction, UserSessionPersister } from './config';
export interface UserConfig {
    cookieName?: string;
    globalCondition?: ConditionFunction;
    sessionPersister?: UserSessionPersister;
    tracking?: TrackingEventHandler;
    uiCondition?: ConditionFunction;
    userSessionDaysToLive?: number;
}
export declare const tests: SplitTest[];
export declare function config(userConfig?: UserConfig): void;
export declare function initialize(): void;
export declare function getUserAgentInfo(): UserAgentInfo;
export declare function getTest(name: string): SplitTest;
export declare function create(name: string): SplitTest;
export declare function getCurrentTestVariation(testName: string): string;
export declare function setCurrentTestVariation(testName: string, variation: string): void;
export declare function reset(): void;
export declare namespace ui {
    function show(testsList: SplitTest[]): void;
    function hide(): void;
}
