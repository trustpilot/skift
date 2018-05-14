/// <reference types="jquery" />
import { UserAgentInfo } from './useragentinfo';
import { BehavioralSubject } from './behavioral-subject';
import { TrackingDataExtender, TrackEventActionType } from './tracking';
import { ConditionFunction } from './config';
export interface Variation {
    /** A descriptive unique name of this variation */
    name: string;
    /** A relative weight defining how many users should see this variation. Default value is 1 */
    weight?: number;
    /**
     * Function to be called when this variation has been chosen and should be setup.
     * It's always called after DOMContentLoaded
     */
    setup?: (this: SplitTest, userAgentInfo: UserAgentInfo) => void;
    /** Whether a track event should automatically be published once this variation has been setup. Default is true. */
    trackEventAutoPublish?: boolean;
}
export interface InternalVariation extends Variation {
    normalizedWeight: number;
    weight: number;
}
export declare type State = 'uninitialized' | 'initializing' | 'initialized' | 'canceled';
export declare class SplitTest {
    name: string;
    private userAgentInfo;
    private trackingDataExtender;
    state: State;
    changes: BehavioralSubject<this>;
    private finalStateListeners;
    private readonly _variations;
    readonly variations: Variation[];
    constructor(name: string, userAgentInfo: UserAgentInfo, trackingDataExtender: TrackingDataExtender);
    /**
     * Determines whether this test is able to run or not.
     */
    shouldRun(userAgentInfo: UserAgentInfo): Promise<boolean>;
    setCondition(condition: ConditionFunction): SplitTest;
    addVariation(variation: Variation): SplitTest;
    setup(): Promise<boolean>;
    isInitialized(): Promise<boolean>;
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
    private condition;
    private normalizeVariationWeights();
    private transitionState(state);
    private subscribeStateListener(listener);
    private selectRandomVariation();
    private trackEvent(event, trackingData?);
}
