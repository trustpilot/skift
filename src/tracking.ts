import { UserAgentInfo } from './userAgentInfo';

export interface TrackEventData {
    [key: string]: any;
}

export interface TrackSplitTestInfo {
    experimentName: string;
    variationName: string;
}

/**
 * Describing a handler for A/B test events
 */
export interface Tracking {
    /**
     * Records an action your user performs.
     * @param event The name of the event you’re tracking.
     * @param eventData A dictionary of properties for the event
     */
    track(
        event: TrackEventType,
        eventData: TrackEventData,
        splitTest: TrackSplitTestInfo,
        userAgent: UserAgentInfo,
    ): void;

    /**
     * A helper method that attaches the track call as a handler to a link
     * @param element DOM element to be bound with track method
     * @param event The name of the event, passed to the track method
     * @param eventData A dictionary of properties to pass with the track method.
     */
    trackLink(
        element: Element,
        event: TrackEventType,
        eventData: TrackEventData,
        splitTest: TrackSplitTestInfo,
        userAgent: UserAgentInfo,
    ): void;
}

export declare type TrackEventType = 'ExperimentViewed' | 'ExperimentActionPerformed';
export declare type TrackEventActionType = 'Click' | 'Type';

export class ConsoleTracking implements Tracking {
    public track(
        event: TrackEventType,
        eventData: TrackEventData,
        splitTest: TrackSplitTestInfo,
        userAgent: UserAgentInfo,
    ) {
        console.log('Split testing event: ' + event, {
            ...splitTest,
            ...userAgent,
            ...eventData,
        });
    }

    public trackLink(
        element: Element,
        event: TrackEventType,
        eventData: TrackEventData,
        splitTest: TrackSplitTestInfo,
        userAgent: UserAgentInfo,
    ) {
        element.addEventListener('click', () => {
            this.track(event, eventData, splitTest, userAgent);
        });
    }
}
