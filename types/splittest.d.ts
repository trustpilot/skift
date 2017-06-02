/// <reference types="jquery" />
import { UserAgentInfo } from './useragentinfo';
import UserSession from './UserSession';
import { TrackingDataExtender, TrackEventActionType } from './tracking';
import { ConditionFunction } from './config';
export interface Variation {
    name: string;
    weight?: number;
    setup?: (this: SplitTest, userAgentInfo: UserAgentInfo) => void;
    trackEventAutoPublish?: boolean;
}
export interface InternalVariation extends Variation {
    normalizedWeight: number;
    weight: number;
}
export declare class SplitTest {
    name: string;
    private trackingDataExtender;
    private condition;
    private readonly _variations;
    readonly variations: Variation[];
    constructor(name: string, trackingDataExtender: TrackingDataExtender);
    /**
     * Determines whether this test is able to run or not.
     */
    canRun(userAgentInfo: UserAgentInfo): boolean;
    setCondition(condition: ConditionFunction): SplitTest;
    addVariation(variation: Variation): SplitTest;
    setup(userSession: UserSession, userAgentInfo: UserAgentInfo): boolean;
    getVariation(name: string): Variation;
    getVariationUrl(variationName: string | null): string;
    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    extendTrackingData(trackingDataExtender: TrackingDataExtender): SplitTest;
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
    private normalizeVariationWeights();
    private selectRandomVariation();
    private trackEvent(event, trackingData?);
}
