import config from './config';

interface TestVariationsMap {
    [key: string]: string;
}

export class UserSession {

    setTestVariation(testName: string, variationName: string): void {
        const variationsMap = this.loadVariations();
        variationsMap[testName] = variationName;
        this.saveVariations(variationsMap);
    }

    getTestVariation(testName: string): string {
        const variationsMap = this.loadVariations();
        return variationsMap[testName];
    }

    reset() {
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

const userSession = new UserSession();
export default userSession;
