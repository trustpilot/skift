import * as qs from 'querystringify';

import { alwaysPromise } from './alwaysPromise';
import { BehavioralSubject } from './behavioralSubject';
import { Condition } from './condition';
import config from './config';
import {
    TrackEventActionType,
    TrackEventType,
    TrackingData,
    TrackingDataExtender,
    trackingDataExtenderFactory,
} from './tracking';
import { UserAgentInfo } from './userAgentInfo';
import userSession from './userSession';

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

export type State = 'uninitialized' | 'initializing' | 'initialized' | 'canceled';

export class SplitTest {
    public state: State = 'uninitialized';
    public changes = new BehavioralSubject(this);
    private finalStateListeners: Array<() => void> = [];
    private readonly _variations: InternalVariation[] = [];

    get variations(): Variation[] {
        return this._variations;
    }

    constructor(
        public name: string,
        private userAgentInfo: UserAgentInfo,
        private trackingDataExtender: TrackingDataExtender,
    ) {
        this.extendTrackingData(
            trackingDataExtenderFactory({
                experimentName: name,
            }),
        );
    }

    /**
     * Determines whether this test is able to run or not.
     */
    public async shouldRun(userAgentInfo: UserAgentInfo): Promise<boolean> {
        const conditionPromises = [
            config.globalCondition(userAgentInfo),
            this.condition(userAgentInfo),
        ].map(alwaysPromise);

        return (await Promise.all(conditionPromises)).every((a) => a);
    }

    public setCondition(condition: Condition): SplitTest {
        this.condition = condition;
        return this;
    }

    public addVariation(variation: Variation): SplitTest {
        if (
            typeof variation.name !== 'string' ||
            variation.name === '' ||
            this.getVariation(variation.name)
        ) {
            throw new Error(
                `Split test "${this
                    .name}": Variation must have a unique name. Was "${variation.name}"`,
            );
        }
        this._variations.push({
            ...variation,
            normalizedWeight: 0,
            weight: typeof variation.weight === 'number' ? variation.weight : 1,
        });
        this.normalizeVariationWeights();
        this.changes.next(this);
        return this;
    }

    public async setup(): Promise<boolean> {
        if (this._variations.length === 0) {
            throw new Error("Skift: can't setup a test without variations");
        }

        if (this.state === 'initialized') {
            // Already set up?
            return true;
        }

        this.transitionState('initializing');

        // Step 1: Run condition function, if any
        const passesConditions = await this.shouldRun(this.userAgentInfo);
        if (!passesConditions) {
            this.transitionState('canceled');
            return false;
        }

        // Step 2: Select variation
        let variation = this.getVariation(
            userSession.getTestVariation(this.name),
        );
        if (!variation) {
            variation = this.selectRandomVariation();
            userSession.setTestVariation(this.name, variation.name);
        }
        this.extendTrackingData(
            trackingDataExtenderFactory({
                variationName: variation.name,
            }),
        );

        // Step 3: Setup variation
        if (typeof variation.setup === 'function') {
            variation.setup.call(this, this.userAgentInfo);
        }

        // Step 4: Publish track event
        if (variation.trackEventAutoPublish !== false) {
            this.trackViewed();
        }
        this.transitionState('initialized');
        this.changes.next(this);
        return true;
    }

    public async isInitialized(): Promise<boolean> {
        const { state } = this;

        if (state === 'initializing') {
            return await new Promise<boolean>((resolve, reject) => {
                this.subscribeStateListener(() => {
                    resolve(this.state === 'initialized');
                });
            });
        }

        return this.state === 'initialized';
    }

    public getVariation(name: string): Variation {
        return this._variations.filter((v) => v.name === name)[0];
    }

    public getVariationUrl(variationName: string | null): string {
        const param = `${this.name}=${variationName}`;
        const query = qs.parse(location.search);

        try {
            query.abtest = btoa(param);
            return (
                location.protocol +
                '//' +
                location.host +
                location.pathname +
                qs.stringify(query, true) +
                location.hash
            );
        } catch (e) {
            return location.href;
        }
    }

    /**
     * The tracking data extenders are called just before any event is published to the event handler.
     */
    public extendTrackingData(trackingDataExtender: TrackingDataExtender): SplitTest {
        const currentExtender = this.trackingDataExtender;
        this.trackingDataExtender = (
            trackingData: TrackingData,
            eventName: string,
        ) => {
            return trackingDataExtender(
                currentExtender(trackingData, eventName),
                eventName,
            );
        };
        return this;
    }

    /**
     * Emits an "Experiment Viewed" tracking event
     */
    public trackViewed(): void {
        this.trackEvent('ExperimentViewed');
    }

    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    public trackActionPerformed(action: TrackEventActionType, target?: string): void {
        this.trackEvent('ExperimentActionPerformed', {
            action,
            actionTarget: target || '',
        });
    }

    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param element The DOM element to be bound with track method.
     * @param name A human readable name of the link. If left out, the innerText of the element is used
     */
    public trackLink(element: Element, name?: string): void {
        const event: TrackEventType = 'ExperimentActionPerformed';
        const trackingData = this.trackingDataExtender({
            action: 'Click',
            actionTarget: name || element.textContent,
        }, event);
        config.tracking.trackLink(element, event, trackingData);
    }

    private condition: Condition = () => true;

    private normalizeVariationWeights(): void {
        const weightsSum = this._variations.reduce(
            (sum, variation) => sum + variation.weight,
            0,
        );
        this._variations.forEach((variation) => {
            variation.normalizedWeight = variation.weight / weightsSum;
        });
    }

    private transitionState(state: State) {
        this.state = state;
        if (state !== 'initializing') {
            this.finalStateListeners.forEach((l) => l());
            this.finalStateListeners = [];
        }
    }

    private subscribeStateListener(listener: () => void) {
        this.finalStateListeners.push(listener);
    }

    private selectRandomVariation(): Variation {
        let i = 0;
        // Disable the rule for now and refactor this, when covered by a test.
        // tslint:disable:max-line-length no-conditional-assignment no-empty
        for (
            let runningTotal = 0, testSegment = Math.random();
            i < this._variations.length && (runningTotal += this._variations[i].normalizedWeight) < testSegment;
            i++
        ) { }
        // tslint:enable:max-line-length no-conditional-assignment no-empty
        return this._variations[i];
    }

    private trackEvent(
        event: TrackEventType,
        trackingData?: TrackingData,
    ): void {
        const allTrackingData = this.trackingDataExtender(
            trackingData || {},
            event,
        );
        config.tracking.track(event, allTrackingData);
    }
}
