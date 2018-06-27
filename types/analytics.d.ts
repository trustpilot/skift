export declare type TrackingType = 'ExperimentViewed' | 'ExperimentActionPerformed';
export declare type TrackingActionType = 'Click' | 'Type';
export interface TrackingData {
    [key: string]: any;
}
/**
 * Analytics interface used for tracking in the library
 */
export interface Analytics {
    /**
     * Records an action your user performs.
     * @param event The name of the event you’re tracking.
     * @param trackingData A dictionary of properties for the event
     */
    track(event: TrackingType, trackingData: TrackingData): void;
    /**
     * A helper method that attaches the track call as a handler to an element
     * @param element DOM element to be bound with track method
     * @param event The name of the event, passed to the track method
     * @param trackingData A dictionary of properties to pass with the track method.
     */
    trackLink(element: Element, event: TrackingType, trackingData: TrackingData): void;
}
declare class ConsoleAnalytics implements Analytics {
    track(event: TrackingType, trackingData: TrackingData): void;
    trackLink(element: Element, event: TrackingType, trackingData: TrackingData): void;
}
declare const _default: ConsoleAnalytics;
export default _default;
