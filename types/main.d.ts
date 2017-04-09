import { UserAgentInfo } from "./useragenthelper";
import { AbTest, ConditionFunction } from "./splittest";
export declare let tests: AbTest[];
export interface ObjectLiteral {
    [key: string]: any;
}
export declare function getUserAgentInfo(): UserAgentInfo;
export declare function getTest(name: string): AbTest;
export declare function canRunTest(test: AbTest): boolean;
export declare function create(name: string): AbTest;
export declare function getTestVariant(testName: string): string;
export declare function hasTestVariant(testName: string, variant: string): boolean;
export declare function setTestVariant(testName: string, variant: string): void;
/** Set a global condition that must return true before initializing any tests */
export declare function setGlobalCondition(condition: ConditionFunction): void;
export declare function reset(): void;
export declare namespace ui {
    function setCondition(newCondition: ConditionFunction): void;
    function show(): void;
    function hide(): void;
}
