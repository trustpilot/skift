import { UserAgentInfo } from "./useragenthelper";
export interface TestVariantsMap {
    [key: string]: string;
}
export default class UserSession {
    private daysToLive;
    testSegment: number;
    private testVariants;
    readonly userAgent: UserAgentInfo;
    constructor(daysToLive: number, testSegment?: number, testVariants?: TestVariantsMap);
    setTestVariant(testName: string, variantName: string): void;
    getTestVariant(testName: string): string;
    save(key: string): void;
    static fromJson(json: string): UserSession;
}
