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
export declare const config: {
    globalCondition: ConditionFunction;
    tracking: TrackingEventHandler;
    uiCondition: ConditionFunction;
    userSessionDaysToLive: number;
    cookieName: string;
};
export declare function initialize(): void
export declare function getUserAgentInfo(): UserAgentInfo
export declare function getTest(name: string): SplitTest
export declare function canRunTest(test: SplitTest): boolean
export declare function create(name: string): SplitTest
export declare function getTestVariant(testName: string): string
export declare function hasTestVariant(
    testName: string,
    variant: string
): boolean
export declare function setTestVariant(testName: string, variant: string): void
export declare function reset(): void
export declare namespace ui {
    function show(testsList: SplitTest[]): void;
    function hide(): void;
}
