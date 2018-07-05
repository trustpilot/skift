import { Condition } from './condition';
import { removeAbTestParameter } from './query';
import { ConsoleTracking, Tracking } from './tracking';
import { CookiePersister, UserSessionPersister } from './userSessionPersister';

export interface Config {
    cookieName: string;
    globalCondition: Condition;
    /**
     * Function called everytime the user trigger a variation change.
     * This function is not called on initial setup but is called with no paramaters on reset.
     * @param testName Name of the split test
     * @param variationName Name of the new variation
     */
    onVariationChange: (testName?: string, variationName?: string) => void;
    sessionPersister: UserSessionPersister;
    tracking: Tracking;
    uiCondition: Condition;
    userSessionDaysToLive: number;
}

const config: Config = {
    cookieName: 'skiftABTest',
    globalCondition: () => true,
    onVariationChange: () => {
        const previousSearch = location.search;
        const newSearch = removeAbTestParameter(location.search);

        if (previousSearch !== newSearch) {
            location.search = newSearch;
        } else {
            location.reload();
        }
    },
    sessionPersister: new CookiePersister(),
    tracking: new ConsoleTracking(),
    uiCondition: () => false,
    userSessionDaysToLive: 3,
};

export default config;
