import qs from 'querystringify';

import { getInfo, UserAgentInfo } from './userAgent';
import { UserSession } from './userSession';
import {
    TrackingData,
    TrackingType,
    TrackingActionType,
} from './tracking';
import { SkiftConfig } from './config';
import { Condition } from './condition';
import * as ui from './ui';

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

export enum State {
    UNINITIALIZED = 'uninitialized',
    INITIALIZING = 'initializing',
    INITIALIZED = 'initialized',
    CANCELED = 'canceled',
}

class SplitTest {
    private _condition: Condition;
    private _config: SkiftConfig;
    private _name: string;
    private _currentVariation: InternalVariation;
    private _state: State = State.UNINITIALIZED;
    private _userAgentInfo: UserAgentInfo;
    private _userSession: UserSession;
    private _finalStateListeners: Array<() => void> = [];
    private _variations: InternalVariation[] = [];

    constructor(name: string, config: SkiftConfig) {
        this._name = name;
        this._userAgentInfo = getInfo();
        this._condition = () => Promise.resolve(true);
        this._config = config;
        this._userSession = new UserSession(config);
    }

    public get name() {
        return this._name;
    }

    public get userAgentInfo() {
        return this._userAgentInfo;
    }

    public get variations() {
        return this._variations;
    }

    public getCurrentVariation() {
        return this._currentVariation;
    }

    public async setCurrentVariation(name: string) {
        const doesVariationExist = this._variations.some((variation) => variation.name === name);

        if (doesVariationExist) {
            this.transitionState(State.UNINITIALIZED);
            this._userSession.setTestVariation(this.name, name);
            await this.setup();
            location.reload();
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }

    public get config() {
        return this._config;
    }

    public setCondition(condition: Condition): SplitTest {
        this._condition = condition;
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
                    .name}": Variation must have a unique name. Was "${variation.name}"`
            );
        }
        this._variations.push({
            ...variation,
            normalizedWeight: 0,
            weight: typeof variation.weight === 'number' ? variation.weight : 1
        });
        this.normalizeVariationWeights();
        return this;
    }

    public async setup(): Promise<boolean> {
        if (this._variations.length === 0) {
            throw new Error('Skift: can\'t setup a test without variations');
        }

        if (this._state === State.INITIALIZED) {
            return true;
        }

        this.transitionState(State.INITIALIZING);

        // Step 1: Run condition function, if any
        const passesConditions = await this.shouldRun(this._userAgentInfo);
        if (!passesConditions) {
            this.transitionState(State.CANCELED);
            return false;
        }

        // Step 2: Select variation
        let variation = this.getVariation(this._userSession.getTestVariation(this.name));
        if (!variation) {
            variation = this.selectRandomVariation();
            this._userSession.setTestVariation(this.name, variation.name);
        }
        this._currentVariation = variation;

        // Step 3: Setup variation
        if (typeof variation.setup === 'function') {
            variation.setup.call(this, this._userAgentInfo);
        }

        // Step 4: Publish tracking event
        if (variation.trackEventAutoPublish !== false) {
            this.trackViewed();
        }

        this.transitionState(State.INITIALIZED);
        ui.show(this);
        return true;
    }

    public async isInitialized(): Promise<boolean> {
        if (this._state === State.INITIALIZING) {
            return await new Promise<boolean>((resolve) => {
                this.subscribeStateListener(() => {
                    resolve(this._state === State.INITIALIZED);
                });
            });
        }

        return this._state === State.INITIALIZED;
    }

    public getVariation(name: string) {
        return this._variations.filter(v => v.name === name)[0];
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
     * Emits an "Experiment Viewed" tracking event
     */
    public trackViewed() {
        this.trackEvent('ExperimentViewed');
    }

    /**
     * Emits an "Experiment Action Performed" tracking event
     * @param action Specifies the action type that has been performed
     * @param target Specifies a target the action has affected or originated from
     */
    public trackActionPerformed(action: TrackingActionType, target?: string) {
        this.trackEvent('ExperimentActionPerformed', {
            action,
            actionTarget: target || ''
        });
    }

    /**
     * Attaches a <code>trackActionPerformed</code> call as a handler to a link.
     * @param element The DOM element to be bound with track method.
     * @param target A human readable name of the link. If left out, the innerText of the element is used
     */
    public trackLink(element: Element, target?: string): void {
        this.internalTrackLink(element, 'ExperimentActionPerformed', {
            action: 'Click',
            actionTarget: target || element.textContent
        });
    }

    private internalTrackLink(element: Element, event: TrackingType, trackingData?: TrackingData) {
        const extendedTrackingData = {
            ...trackingData,
            experimentName: this._name,
            browser: this._userAgentInfo.name,
            browserVersion: this._userAgentInfo.version,
            isMobile: this._userAgentInfo.isMobile,
            variationName: this._currentVariation.name,
        };

        this._config.tracking.trackLink(element, event, extendedTrackingData);
    }

    private trackEvent(event: TrackingType, trackingData?: TrackingData) {
        const extendedTrackingData = {
            ...trackingData,
            experimentName: this._name,
            browser: this._userAgentInfo.name,
            browserVersion: this._userAgentInfo.version,
            isMobile: this._userAgentInfo.isMobile,
            variationName: this._currentVariation.name,
        };

        this._config.tracking.track(event, extendedTrackingData);
    }

    /**
     * Determines whether this test is able to run or not.
     */
    private async shouldRun(userAgentInfo?: UserAgentInfo): Promise<boolean> {
        const conditionPromises = [
            this._config.globalCondition(userAgentInfo),
            this._condition(userAgentInfo)
        ].map((condition) => Promise.resolve(condition));

        return (await Promise.all(conditionPromises)).every(a => a);
    }

    private normalizeVariationWeights(): void {
        const weightsSum = this._variations.reduce(
            (sum, variation) => sum + variation.weight,
            0
        );
        this._variations.forEach(variation => {
            variation.normalizedWeight = variation.weight / weightsSum;
        });
    }

    private transitionState(state: State) {
        this._state = state;
        if (state !== State.INITIALIZING) {
            this._finalStateListeners.forEach(l => l());
            this._finalStateListeners = [];
        }
    }

    private subscribeStateListener(listener: () => void) {
        this._finalStateListeners.push(listener);
    }

    private selectRandomVariation() {
        let i = 0;
        // tslint:disable:max-line-length no-conditional-assignment no-empty
        for (
            let runningTotal = 0, testSegment = Math.random();
            i < this._variations.length &&
            (runningTotal += this._variations[i].normalizedWeight) <
            testSegment;
            i++
        ) { }
        // tslint:enable:max-line-length no-conditional-assignment no-empty
        return this._variations[i];
    }
}

export default SplitTest;
