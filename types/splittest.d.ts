import { UserAgentInfo } from './userAgent';
import { TrackingActionType } from './tracking';
import { SkiftConfig } from './config';
import { Condition } from './condition';
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
export declare enum State {
    UNINITIALIZED = "uninitialized",
    INITIALIZING = "initializing",
    INITIALIZED = "initialized",
    CANCELED = "canceled"
}
declare class SplitTest {
    private _condition;
    private _config;
    private _name;
    private _selectedVariation;
    private _state;
    private _userAgentInfo;
    private _userSession;
    private _finalStateListeners;
    private _variations;
    constructor(name: string, userAgentInfo: UserAgentInfo, config: SkiftConfig);
    readonly name: string;
    readonly config: SkiftConfig;
    setCondition(condition: Condition): SplitTest;
    addVariation(variation: Variation): SplitTest;
    setup(): Promise<boolean>;
    isInitialized(): Promise<boolean>;
    getVariation(name: string): Variation;
    getVariationUrl(variationName: string | null): string;
    /**
     * Emits an "Experiment Viewed" tracking event
     */
    trackViewed(): void;
    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    trackActionPerformed(action: TrackingActionType, target?: string): void;
    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param element The DOM element to be bound with track method.
     * @param target A human readable name of the link. If left out, the innerText of the element is used
     */
    trackLink(element: Element, target?: string): void;
    private internalTrackLink;
    private trackEvent;
    /**
     * Determines whether this test is able to run or not.
     */
    private shouldRun;
    private normalizeVariationWeights;
    private transitionState;
    private subscribeStateListener;
    private selectRandomVariation;
}
export default SplitTest;
