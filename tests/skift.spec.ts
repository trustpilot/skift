import * as skift from '../src/skift';

describe('skift', () => {
    describe('#config', () => {
        it('should correctly override default config', () => {
            skift.config({
                userSessionDaysToLive: 42,
                cookieName: 'test',
                globalCondition: () => Promise.resolve(false),
                sessionPersister: {
                    loadUserSession: () => 'test',
                    saveUserSession: (userSession: string, dayToLive: number) => {
                        // Do nothing
                    },
                },
                trackingHandler: {
                    track: () => {
                        // Do nothing
                    },
                    trackLink: () => {
                        // Do nothing
                    },
                },
            });

            const test = skift.create('test');

            expect(test.config.userSessionDaysToLive).toEqual(42);
        });
    });

    describe('#create', () => {
        expect(skift.create('test')).toBeDefined();
    });
});
