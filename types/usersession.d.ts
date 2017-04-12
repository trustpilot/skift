export interface TestVariationsMap {
    [key: string]: string;
}
export default class UserSession {
    private testVariations;
    constructor(testVariations?: TestVariationsMap);
    setTestVariation(testName: string, variationName: string): void;
    getTestVariation(testName: string): string;
    toJson(): string;
    static fromJson(json: string): UserSession;
}
