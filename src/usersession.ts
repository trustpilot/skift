import defaultConfig, { SkiftConfig } from './config';

interface TestVariationsMap {
    [key: string]: string;
}

export class UserSession {
    private _config: SkiftConfig;

    constructor(config: SkiftConfig) {
        this._config = config;
    }

    public setTestVariation(testName: string, variationName: string): void {
        const variationsMap = this.loadVariations();
        variationsMap[testName] = variationName;
        this.saveVariations(variationsMap);
    }

    public getTestVariation(testName: string): string {
        const variationsMap = this.loadVariations();
        return variationsMap[testName];
    }

    public reset() {
        this.saveVariations({});
    }

    private saveVariations(variationsMap: TestVariationsMap) {
        this._config.sessionPersister.saveUserSession(
            JSON.stringify(variationsMap),
            this._config.userSessionDaysToLive
        );
    }

    private loadVariations(): TestVariationsMap {
        const variationsMap: TestVariationsMap = JSON.parse(this._config.sessionPersister.loadUserSession() || '{}');
        return variationsMap;
    }
}

export default new UserSession(defaultConfig);
