import { TrackingEventHandler } from './tracking';
import { UserAgentInfo } from './useragentinfo';
export interface UserSessionPersister {
    loadUserSession(): string | null;
    saveUserSession(userSession: string, daysToLive: number): void;
}
export interface ConditionFunction {
    (userAgentInfo: UserAgentInfo): boolean;
}
export interface SplitTestConfig {
    cookieName: string;
    globalCondition: ConditionFunction;
    sessionPersister: UserSessionPersister;
    tracking: TrackingEventHandler;
    uiCondition: ConditionFunction;
    userSessionDaysToLive: number;
}
declare const config: SplitTestConfig;
export default config;
