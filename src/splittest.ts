import {UserAgentInfo} from './useragentinfo';
import UserSession from './usersession';
import {
    TrackingDataExtender,
    trackingDataExtenderFactory,
    TrackingData,
    TrackEventType,
    TrackEventActionType
} from './tracking';
import {parseQueryString} from './utils';
import config, {ConditionFunction} from './config';

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

export class SplitTest {

    private condition: ConditionFunction;
    private readonly _variations: InternalVariation[] = [];

    get variations(): Variation[] {
        return this._variations;
    }

    constructor(public name: string, private trackingDataExtender: TrackingDataExtender) {
        this.extendTrackingData(trackingDataExtenderFactory({
            experimentName: name
        }));
    }

    /**
     * Determines whether this test is able to run or not.
     */
    public canRun(userAgentInfo: UserAgentInfo): boolean {
        return typeof this.condition !== 'function' || this.condition(userAgentInfo);
    }

    public setCondition(condition: ConditionFunction): SplitTest {
        this.condition = condition;
        return this;
    }

    addVariation(variation: Variation): SplitTest {
        if (typeof variation.name !== 'string' || variation.name === '' || this.getVariation(variation.name)) {
            throw new Error(`Split test "${this.name}": Variation must have a unique name. Was "${variation.name}"`);
        }
        this._variations.push({
            ...variation,
            normalizedWeight: 0,
            weight: (typeof variation.weight === 'number' ? variation.weight : 1)
        });
        this.normalizeVariationWeights();
        return this;
    }

    setup(userSession: UserSession, userAgentInfo: UserAgentInfo): boolean {
        // Step 1: Run condition function, if any
        if (typeof this.condition === 'function' && !this.condition(userAgentInfo)) {
            return false;
        }

        // Step 2: Select variation
        let variation = this.getVariation(userSession.getTestVariation(this.name));
        if (!variation) {
            variation = this.selectRandomVariation();
            userSession.setTestVariation(this.name, variation.name);
        }
        this.extendTrackingData(trackingDataExtenderFactory({
            variationName: variation.name
        }));

        // Step 3: Setup variation
        if (typeof variation.setup === 'function') {
            variation.setup.call(this, userAgentInfo);
        }

        // Step 4: Publish track event
        if (variation.trackEventAutoPublish !== false) {
            this.trackViewed();
        }
        return true;
    }

    getVariation(name: string): Variation {
        return this._variations.filter((v) => v.name === name)[0];
    }

    getVariationUrl(variationName: string | null): string {
        const param = `${this.name}=${variationName}`;
        const query = parseQueryString(location.search);
        try {
            query.abtest = btoa(param);
            return location.protocol + '//' + location.host + location.pathname +
                '?' + $.param(query) +
                location.hash;
        } catch (e) {
            return location.href;
        }
    }

    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    extendTrackingData(trackingDataExtender: TrackingDataExtender): SplitTest {
        const currentExtender = this.trackingDataExtender;
        this.trackingDataExtender = (trackingData: TrackingData, eventName: string) => {
            return trackingDataExtender(currentExtender(trackingData, eventName), eventName);
        };
        return this;
    }

    /**
     * Emits an "Experiment Viewed" tracking event
     */
    trackViewed(): void {
        this.trackEvent('ExperimentViewed');
    }

    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    trackActionPerformed(action: TrackEventActionType, target?: string): void {
        this.trackEvent('ExperimentActionPerformed', {
            action,
            actionTarget: (target || '')
        });
    }

    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param elements The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    trackLink(elements: Element | JQuery, name?: string): void {
        const event: TrackEventType = 'ExperimentActionPerformed';
        const trackingData = this.trackingDataExtender({
            action: 'Click',
            actionTarget: name || $(elements).text()
        }, event);
        config.tracking.trackLink(elements, event, trackingData);
    }

    private normalizeVariationWeights(): void {
        const weightsSum = this._variations.reduce((sum, variation) => sum + variation.weight, 0);
        this._variations.forEach((variation) => {
            variation.normalizedWeight = variation.weight / weightsSum;
        });
    }

    private selectRandomVariation(): Variation {
        let i = 0;
        // Disable the rule for now and refactor this, when covered by a test.
        // tslint:disable-next-line:max-line-length no-conditional-assignment no-empty
        for (let runningTotal = 0, testSegment = Math.random(); i < this._variations.length && (runningTotal += this._variations[i].normalizedWeight) < testSegment; i++) {
        }
        return this._variations[i];
    }

    private trackEvent(event: TrackEventType, trackingData?: TrackingData): void {
        const allTrackingData = this.trackingDataExtender(trackingData || {}, event);
        config.tracking.track(event, allTrackingData);
    }
}
