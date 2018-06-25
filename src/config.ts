import { getDefaultTrackingEventHandler, TrackingHandler} from './tracking';
import userSessionCookiePersister, { SessionPersister } from './cookiePersister';
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

export type ConditionFunction = (userAgentInfo?: UserAgentInfo) => Promise<boolean>;

class Config {
    private _sessionPersister = userSessionCookiePersister;
    private _trackingHandler = getDefaultTrackingEventHandler();
    private _userSessionDaysToLive = 3;
    private _cookieName = 'skiftABTest';
    private _globalCondition = () => Promise.resolve(true);

    public get sessionPersister() {
        return this._sessionPersister;
    }

    public set sessionPersister(value: SessionPersister) {
        this._sessionPersister = value;
    }

    public get trackingHandler() {
        return this._trackingHandler;
    }

    public set trackingHandler(value: TrackingHandler) {
        this._trackingHandler = value;
    }

    public get userSessionDaysToLive() {
        return this._userSessionDaysToLive;
    }

    public set userSessionDaysToLive(value: number) {
        this._userSessionDaysToLive = value;
    }

    public get cookieName() {
        return this._cookieName;
    }

    public set cookieName(value: string) {
        this._cookieName = value;
    }

    public get globalCondition() {
        return this._globalCondition;
    }

    public set globalCondition(value: ConditionFunction) {
        this._globalCondition = value;
    }
}

export default new Config();
