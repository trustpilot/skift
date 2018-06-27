import { Tracking } from './tracking';
import { SessionPersister } from './cookiePersister';
import { Condition } from './condition';
export interface UserConfig {
    cookieName?: string;
    globalCondition?: Condition;
    sessionPersister?: SessionPersister;
    tracking?: Tracking;
    userSessionDaysToLive?: number;
}
export interface SkiftConfig {
    cookieName: string;
    globalCondition: Condition;
    sessionPersister: SessionPersister;
    tracking: Tracking;
    userSessionDaysToLive: number;
}
declare class Config {
    private _sessionPersister;
    private _tracking;
    private _userSessionDaysToLive;
    private _cookieName;
    private _globalCondition;
    sessionPersister: SessionPersister;
    tracking: Tracking;
    userSessionDaysToLive: number;
    cookieName: string;
    globalCondition: Condition;
}
declare const _default: Config;
export default _default;
