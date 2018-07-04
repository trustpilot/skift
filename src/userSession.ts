import config from './config';

interface TestVariationsMap {
    [key: string]: string;
}

export class UserSession {
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
        config.sessionPersister.saveUserSession(JSON.stringify(variationsMap), config.userSessionDaysToLive);
    }

    private loadVariations(): TestVariationsMap {
        const variationsMap: TestVariationsMap = JSON.parse(config.sessionPersister.loadUserSession() || '{}');
        return variationsMap;
    }
}

export default new UserSession();
