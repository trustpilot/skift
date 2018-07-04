import { Condition } from './condition';
import { ConsoleTracking, Tracking } from './tracking';
import { CookiePersister, UserSessionPersister } from './userSessionPersister';

export interface Config {
    cookieName: string;
    globalCondition: Condition;
    sessionPersister: UserSessionPersister;
    tracking: Tracking;
    uiCondition: Condition;
    userSessionDaysToLive: number;
}

const config: Config = {
    cookieName: 'skiftABTest',
    globalCondition: () => true,
    sessionPersister: new CookiePersister(),
    tracking: new ConsoleTracking(),
    uiCondition: () => false,
    userSessionDaysToLive: 3,
};

export default config;
