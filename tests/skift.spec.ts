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
                        // Doing nothing
                    },
                },
                trackingHandler: {
                    track: () => {
                        // Doing nothing
                    },
                },
            });

            const test = skift.create('test');

            expect(test.config.userSessionDaysToLive).toEqual(42);
        });
    });

    describe('#create', () => {
        skift.create('test');
        expect(skift.tests).toHaveLength(1);
    });

    describe('#getTest', () => {
        skift.create('test');
        expect(skift.getTest('test')).toBeDefined();
    });
});
