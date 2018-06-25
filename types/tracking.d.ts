export declare type TrackingType = 'ExperimentViewed' | 'ExperimentActionPerformed';
export declare type TrackingActionType = 'Click' | 'Type';
export interface TrackingData {
    [key: string]: any;
}
/**
 * Describing a handler for A/B test events
 */
export interface TrackingHandler {
    /**
     * Records an action your user performs.
     * @param event The name of the event you’re tracking.
     * @param trackingData A dictionary of properties for the event
     */
    track(event: TrackingType, trackingData: TrackingData): void;
    /**
     * A helper method that attaches the track call as a handler to a link
     * @param element DOM element to be bound with track method
     * @param event The name of the event, passed to the track method
     * @param trackingData A dictionary of properties to pass with the track method.
     */
    trackLink(element: Element, event: TrackingType, trackingData: TrackingData): void;
}
declare function log(event: TrackingType, trackingData: TrackingData): void;
declare function clickAndLog(element: Element, event: TrackingType, trackingData: TrackingData): void;
export declare function getDefaultTrackingEventHandler(): {
    track: typeof log;
    trackLink: typeof clickAndLog;
};
export {};
