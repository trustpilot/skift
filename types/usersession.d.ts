import { SkiftConfig } from './config';
export declare class UserSession {
    private _config;
    constructor(config: SkiftConfig);
    setTestVariation(testName: string, variationName: string): void;
    getTestVariation(testName: string): string;
    reset(): void;
    private saveVariations;
    private loadVariations;
}
declare const _default: UserSession;
export default _default;
