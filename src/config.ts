import $ from 'jquery';
import {TrackingEventHandler, TrackEventType, TrackingData} from './tracking';
import usersessioncookiepersister from './usersessioncookiepersister';
import {UserAgentInfo} from './useragentinfo';

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

const defaultTrackingEventHandler: TrackingEventHandler = (() => {
    function log(event: TrackEventType, trackingData: TrackingData) {
        console.log('Split testing event: ' + event, trackingData);
    }

    return {
        track: log,
        trackLink(elements: Element | JQuery, event: TrackEventType, trackingData: TrackingData) {
            $(elements).on('click', () => {
                log(event, trackingData);
            });
        }
    };
})();

const config: SplitTestConfig = {
    cookieName: 'trustpilotABTest',
    globalCondition: () => true,
    sessionPersister: usersessioncookiepersister,
    tracking: defaultTrackingEventHandler,
    userSessionDaysToLive: 3,
    uiCondition: () => false,
};

export default config;
