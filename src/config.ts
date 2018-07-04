import { TrackEventType, TrackingData, TrackingEventHandler } from './tracking';
import { UserAgentInfo } from './useragentinfo';
import usersessioncookiepersister from './usersessioncookiepersister';

export interface UserSessionPersister {
    loadUserSession(): string | null;
    saveUserSession(userSession: string, daysToLive: number): void;
}

export type ConditionFunction = (userAgentInfo: UserAgentInfo) => boolean | Promise<boolean>;

export interface SplitTestConfig {
    cookieName: string;
    globalCondition: ConditionFunction;
    sessionPersister: UserSessionPersister;
    tracking: TrackingEventHandler;
    uiCondition: ConditionFunction;
    userSessionDaysToLive: number;
}

const defaultTrackingEventHandler: TrackingEventHandler = (() => {
    function log(event: TrackEventType, trackingData: TrackingData) {
        console.log('Split testing event: ' + event, trackingData);
    }

    return {
        track: log,
        trackLink(
            element: Element,
            event: TrackEventType,
            trackingData: TrackingData,
        ) {
            element.addEventListener('click', () => {
                log(event, trackingData);
            });
        },
    };
})();

const config: SplitTestConfig = {
    cookieName: 'skiftABTest',
    globalCondition: () => true,
    sessionPersister: usersessioncookiepersister,
    tracking: defaultTrackingEventHandler,
    uiCondition: () => false,
    userSessionDaysToLive: 3,
};

export default config;
