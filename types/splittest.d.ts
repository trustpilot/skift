/// <reference types="jquery" />
import { UserAgentInfo } from "./useragenthelper";
import UserSession from "./UserSession";
import { TrackingDataExtender, TrackEventActionType } from "./tracking";
export interface Variant {
    /** A descriptive unique name of this variant */
    name: string;
    /** The percentage of users who should see this variant */
    segment: number;
    /** Function to be called when this variant has been chosen and should be setup. It's always called after DOMContentLoaded */
    setup?: (this: AbTest, userAgentInfo: UserAgentInfo) => void;
    /** Whether a track event should automatically be published once this variant has been setup. Default is true. */
    trackEventAutoPublish?: boolean;
}
export interface ConditionFunction {
    (userAgentInfo: UserAgentInfo): boolean;
}
export declare class AbTest {
    name: string;
    private trackingDataExtender;
    private condition;
    readonly variants: Variant[];
    constructor(name: string, trackingDataExtender: TrackingDataExtender);
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
