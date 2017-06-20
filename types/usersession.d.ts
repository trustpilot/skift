export declare class UserSession {
    setTestVariation(testName: string, variationName: string): void;
    getTestVariation(testName: string): string;
    reset(): void;
    private saveVariations(variationsMap);
    private loadVariations();
}
declare const userSession: UserSession;
export default userSession;
