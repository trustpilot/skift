import consoleTracking, { Tracking } from './tracking';
import userSessionCookiePersister, { SessionPersister } from './cookiePersister';
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

class Config {
    private _sessionPersister = userSessionCookiePersister;
    private _tracking = consoleTracking;
    private _userSessionDaysToLive = 3;
    private _cookieName = 'skiftABTest';
    private _globalCondition: Condition = () => Promise.resolve(true);

    public get sessionPersister() {
        return this._sessionPersister;
    }

    public set sessionPersister(value: SessionPersister) {
        this._sessionPersister = value;
    }

    public get tracking() {
        return this._tracking;
    }

    public set tracking(value: Tracking) {
        this._tracking = value;
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

    public set globalCondition(value: Condition) {
        this._globalCondition = value;
    }
}

export default new Config();
