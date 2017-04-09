import { UserAgentInfo } from "./useragenthelper";
import UserSession from "./UserSession";
import Rng from "./rng";
import { TrackingDataExtender, trackingDataExtenderFactory, TrackingData, TrackEventType, TrackEventActionType, trackingEventHandler } from "./tracking";
import { parseQueryString } from "./utils";

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

export class AbTest {
 
    //private trackingDataExtender: TrackingDataExtender = baseTrackingDataExtenderFactory();
    private condition: ConditionFunction;
    readonly variants: Variant[] = [];

    constructor(public name: string, private trackingDataExtender: TrackingDataExtender) {
        this.extendTrackingData(trackingDataExtenderFactory({
            "experimentName": name
        }));
    }

    /**
     * Determines whether this test is able to run or not.
     */
    public canRun(userAgentInfo: UserAgentInfo): boolean {
        return typeof this.condition !== "function" || this.condition(userAgentInfo);
    }

    public setCondition(condition: ConditionFunction): AbTest {
        this.condition = condition;
        return this;
    }

    addVariant(variant: Variant): AbTest {
        if (typeof variant.name !== "string" || variant.name === "" || this.getVariant(variant.name)) {
            throw new Error(`A/B Test "${this.name}": Variant must have a unique name. Was "${variant.name}"`);
        }
        if (typeof variant.segment !== "number" || variant.segment < 0 || variant.segment > 100) {
            throw new Error(`A/B Test "${this.name}", variant "${variant.name}": "segment" must be a number between 0-100. Was ${variant.segment}`);
        }
        this.variants.push(variant);
        return this;
    }

    setup(userSession: UserSession): boolean {
        // Step 1: Validate whether this test is correctly configured
        const variantsSegmentationSum = Math.round(this.variants.reduce((sum, v) => sum + v.segment, 0));
        if (variantsSegmentationSum !== 100) {
            console.error(`A/B Test: IGNORING test "${this.name}", because variant segmentation does not add up to 100. Current value: ${variantsSegmentationSum}`);
            return false;
        }

        // Step 2: Run condition function, if any
        if (typeof this.condition === "function" && !this.condition(userSession.userAgent)) {
            return false;
        }

        // Step 3: Select and setup variant
        const variant = this.selectVariant(userSession);
        userSession.setTestVariant(this.name, variant.name);
        this.extendTrackingData(trackingDataExtenderFactory({
            "variationName": variant.name
        }));
        if (typeof variant.setup === "function") {
            variant.setup.call(this, userSession.userAgent, this);
        }
        
        // Step 4: Publish track event
        if (variant.trackEventAutoPublish !== false) {
            this.trackViewed();
        }
        return true;
    }

    getVariant(name: string): Variant {
        return this.variants.filter((v) => v.name === name)[0];
    }

    getVariantUrl(variantName: string | null): string {
        const param = `${this.name}=${variantName}`,
            query = parseQueryString(location.search);
        try {
            query["abtest"] = btoa(param);
            return location.protocol + "//" + location.host + location.pathname +
                "?" + $.param(query) +
                location.hash;
        } catch (e) {
            return location.href;
        }
    }

    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    extendTrackingData(trackingDataExtender: TrackingDataExtender): AbTest {
        if (typeof trackingDataExtender === "function") {
            let currentExtender = this.trackingDataExtender;
            this.trackingDataExtender = function(trackingData: TrackingData, eventName: string) {
                return trackingDataExtender(currentExtender(trackingData, eventName), eventName);
            }
        }
        return this;
    }

    private trackEvent(event: TrackEventType, trackingData?: TrackingData): void {
        if (trackingEventHandler) {
            const allTrackingData = this.trackingDataExtender(trackingData || {}, event);
            trackingEventHandler.track(event, allTrackingData);
        }
    }

    /**
     * Emits an "Experiment Viewed" tracking event 
     */
    trackViewed(): void {
        this.trackEvent("ExperimentViewed");
    }

    /**
     * Emits an "Experiment Action Performed" tracking event 
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    trackActionPerformed(action: TrackEventActionType, target?: string): void {
        this.trackEvent("ExperimentActionPerformed", {
            "action": action,
            "actionTarget": (target || "")
        });
    }

    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param elements The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    trackLink(elements: Element | JQuery, name?: string): void {
        if (trackingEventHandler) {
            const event: TrackEventType = "ExperimentActionPerformed";
            const trackingData = this.trackingDataExtender({
                "action": "Click",
                "actionTarget": name || $(elements).text()
            }, event);
            trackingEventHandler.trackLink(elements, event, trackingData);
        }
    }

    /**
     * Selects a variation based on a user session.
     * If the user has already seen a specific variation, we select the same one again
     */
    private selectVariant(userSession: UserSession): Variant {
        let selectedVariant = this.getVariant(userSession.getTestVariant(this.name) || "");
        
        if (!selectedVariant) { // Select a new variation
            let testSegment = this.getTestSegment(userSession.testSegment);
            for (let i = 0, variantLowerBound = 0; i < this.variants.length; i++) {
                let variant = this.variants[i],
                    variantUpperBound = variantLowerBound + this.variants[i].segment;
                if (variantLowerBound < testSegment && testSegment <= variantUpperBound) {
                    selectedVariant = variant;
                    break;
                }
                variantLowerBound = variantUpperBound;
            }
        }
        return selectedVariant;
    }

    /**
     * Rotates the user segment number using the name of this test.
     * @param userTestSegment The segment number chosen for this user (1-100)
     * @returns {number} A number between 1-100 
     */
    private getTestSegment(userTestSegment: number): number {
        const seed = this.name.split("")
                                .map(c => c.charCodeAt(0))
                                .reduce((a, b) => a + (b * userTestSegment), 0);
        const rng = new Rng(seed);
        return rng.nextRange(1,101);
    }
} 