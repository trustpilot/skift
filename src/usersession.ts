export interface TestVariationsMap {
    [key: string]: string; 
}

export default class UserSession {
    constructor(
        private testVariations : TestVariationsMap = {}
    ) { }

    setTestVariation(testName: string, variationName: string): void {
        this.testVariations[testName] = variationName;
    }

    getTestVariation(testName: string): string {
        return this.testVariations[testName];
    }

    toJson(): string {
        return JSON.stringify({
            testVariations: this.testVariations
        });
    }

    static fromJson(json: string): UserSession {
        const obj = JSON.parse(json);
        return new UserSession(obj.testVariations);
    }
}