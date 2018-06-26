import { Analytics } from './analytics';
import { SessionPersister } from './cookiePersister';
import { Condition } from './condition';
export interface UserConfig {
    cookieName?: string;
    globalCondition?: Condition;
    sessionPersister?: SessionPersister;
    analytics?: Analytics;
    userSessionDaysToLive?: number;
}
export interface SkiftConfig {
    cookieName: string;
    globalCondition: Condition;
    sessionPersister: SessionPersister;
    analytics: Analytics;
    userSessionDaysToLive: number;
}
declare class Config {
    private _sessionPersister;
    private _analytics;
    private _userSessionDaysToLive;
    private _cookieName;
    private _globalCondition;
    sessionPersister: SessionPersister;
    analytics: Analytics;
    userSessionDaysToLive: number;
    cookieName: string;
    globalCondition: Condition;
}
declare const _default: Config;
export default _default;
