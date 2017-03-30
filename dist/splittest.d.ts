/// <reference types="jquery" />
export declare let tests: AbTest[];
export interface ConditionFunction {
    (userAgentInfo: UserAgentInfo): boolean;
}
export interface TrackingData extends ObjectLiteral {
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
export declare type TrackEventType = "ExperimentViewed" | "ExperimentActionPerformed";
export declare type TrackEventActionType = "Click";
export interface ObjectLiteral {
    [key: string]: any;
}
export interface UserAgentInfo {
    name: string;
    version: string;
    isMobile: boolean;
}
export interface Variant {
    /** A descriptive unique name of this variant */
    name: string;
    /** The percentage of users who should see this variant */
    segment: number;
    /** Function to be called when this variant has been chosen and should be setup. It's always called after DOMContentLoaded */
    setup?: (userAgentInfo: UserAgentInfo, test: AbTest) => void;
    /** Whether a track event should automatically be published once this variant has been setup. Default is true. */
    trackEventAutoPublish?: boolean;
}
export interface TestVariantsMap {
    [key: string]: string;
}
export declare class UserSession {
    private daysToLive;
    testSegment: number;
    private testVariants;
    readonly userAgent: UserAgentInfo;
    constructor(daysToLive: number, testSegment?: number, testVariants?: TestVariantsMap);
    setTestVariant(testName: string, variantName: string): void;
    getTestVariant(testName: string): string;
    save(key: string): void;
    static fromJson(json: string): UserSession;
}
export declare class AbTest {
    name: string;
    private trackingDataExtender;
    private condition;
    readonly variants: Variant[];
    constructor(name: string);
    /**
     * Determines whether this test is able to run or not.
     */
    canRun(userAgentInfo: UserAgentInfo): boolean;
    setCondition(condition: ConditionFunction): AbTest;
    addVariant(variant: Variant): AbTest;
    setup(userSession: UserSession): boolean;
    getVariant(name: string): Variant;
    getVariantUrl(variantName: string | null): string;
    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    extendTrackingData(trackingDataExtender: TrackingDataExtender): AbTest;
    private trackEvent(event, trackingData?);
    /**
     * Emits an "Experiment Viewed" tracking event
     */
    trackViewed(): void;
    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    trackActionPerformed(action: TrackEventActionType, target?: string): void;
    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param elements The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    trackLink(elements: Element | JQuery, name?: string): void;
    /**
     * Selects a variation based on a user session.
     * If the user has already seen a specific variation, we select the same one again
     */
    private selectVariant(userSession);
    /**
     * Rotates the user segment number using the name of this test.
     * @param userTestSegment The segment number chosen for this user (1-100)
     * @returns {number} A number between 1-100
     */
    private getTestSegment(userTestSegment);
}
export declare function getUserAgentInfo(): UserAgentInfo;
export declare function getTest(name: string): AbTest;
export declare function create(name: string): AbTest;
export declare function getTestVariant(testName: string): string;
export declare function hasTestVariant(testName: string, variant: string): boolean;
export declare function setTestVariant(testName: string, variant: string): void;
/** Set a global condition that must return true before initializing any tests */
export declare function setGlobalCondition(condition: ConditionFunction): void;
export declare function reset(): void;
export declare function setTrackingEventHandler(handler: TrackingEventHandler): void;
export declare namespace ui {
    function setCondition(newCondition: ConditionFunction): void;
    function show(): void;
    function hide(): void;
}
