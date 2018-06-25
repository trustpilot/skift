import { TrackingHandler } from './tracking';
import { SessionPersister } from './cookiePersister';
import { UserAgentInfo } from './userAgent';
export interface UserConfig {
    cookieName?: string;
    globalCondition?: ConditionFunction;
    sessionPersister?: SessionPersister;
    trackingHandler?: TrackingHandler;
    userSessionDaysToLive?: number;
}
export interface SkiftConfig {
    cookieName: string;
    globalCondition: ConditionFunction;
    sessionPersister: SessionPersister;
    trackingHandler: TrackingHandler;
    userSessionDaysToLive: number;
}
export declare type ConditionFunction = (userAgentInfo?: UserAgentInfo) => Promise<boolean>;
declare class Config {
    private _sessionPersister;
    private _trackingHandler;
    private _userSessionDaysToLive;
    private _cookieName;
    private _globalCondition;
    sessionPersister: SessionPersister;
    trackingHandler: TrackingHandler;
    userSessionDaysToLive: number;
    cookieName: string;
    globalCondition: ConditionFunction;
}
declare const _default: Config;
export default _default;
