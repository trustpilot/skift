/// <reference types="jquery" />
export interface TrackingData {
    [key: string]: any;
}
/**
 * Describing a handler for A/B test events
 */
export interface TrackingEventHandler {
    /**
     * Records an action your user performs.
     * @param event The name of the event you’re tracking.
     * @param trackingData A dictionary of properties for the event
     */
    track(event: TrackEventType, trackingData: TrackingData): void;
    /**
     * A helper method that attaches the track call as a handler to a link
     * @param elements DOM element to be bound with track method
     * @param event The name of the event, passed to the track method
     * @param trackingData A dictionary of properties to pass with the track method.
     */
    trackLink(elements: Element | JQuery, event: TrackEventType, trackingData: TrackingData): void;
}
/**
 * A function that extends a tracking data object with even more data
 */
export interface TrackingDataExtender {
    (trackingData: TrackingData, event: string): TrackingData;
}
export declare type TrackEventType = 'ExperimentViewed' | 'ExperimentActionPerformed';
export declare type TrackEventActionType = 'Click' | 'Type';
/**
 * Constructs a new TrackingDataExtender that extending the existing tracking data with the provided tracking data
 * @param newTrackingData
 */
export declare function trackingDataExtenderFactory(newTrackingData: TrackingData): TrackingDataExtender;
