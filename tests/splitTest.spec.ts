import * as skift from '../src/skift';
import { BrowserEnv } from './browser';

declare const global: BrowserEnv;

describe('SplitTest', () => {
    describe('#setCondition', () => {
        it('should change test condition', async () => {
            const test = skift
                .create('test')
                .addVariation({
                    name: 'Variation 1'
                })
                .setCondition(() => false);
            const shouldRun = await test.setup();
            expect(shouldRun).toEqual(false);
        });
    });

    describe('#addVariation', () => {
        it('should fail to add variation with an incorrect name', (done) => {
            try {
                skift.create('test').addVariation({
                    name: '',
                });
            } catch (error) {
                done();
            }
        });

        it('should fail to create a variation that already existwith an incorrect name', (done) => {
            try {
                skift
                    .create('test')
                    .addVariation({
                        name: 'varaition1',
                    })
                    .addVariation({
                        name: 'varaition1',
                    });
            } catch (error) {
                done();
            }
        });

        it('should create a variation with a correct name', async () => {
            await skift
                .create('test')
                .addVariation({
                    name: 'Variation 1'
                }).setup();

            expect(global.document.cookie).toEqual('skiftABTest={\"test\":\"Variation 1\"}');
        });
    });

    describe('#setup', () => {
        it('should fail to setup test without variation', async (done) => {
            try {
                await skift.create('test').setup();
            } catch (error) {
                done();
            }
        });

        it('should setup a same test only once', async () => {
            // Tracking event (by default console.log) should be called only once
            console.log = jest.fn();

            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            await test.setup();
            await test.setup();

            expect(console.log).toHaveBeenCalledTimes(1);
        });

        it('should setup variation that returns a boolean', async () => {
            const spy = jest.fn();

            const test = skift.create('test').addVariation({
                name: 'Variation 1',
                setup: () => {
                    spy();
                    return true;
                }
            });

            const shouldRun = await test.setup();

            expect(spy).toHaveBeenCalledTimes(1);
            expect(shouldRun).toEqual(true);
        });

        it('should setup variation that returns a promise', async () => {
            const spy = jest.fn();

            const test = skift.create('test').addVariation({
                name: 'Variation 1',
                setup: () => {
                    spy();
                    return Promise.resolve(true);
                }
            });

            const shouldRun = await test.setup();

            expect(spy).toHaveBeenCalledTimes(1);
            expect(shouldRun).toEqual(true);
        });

        it('should not send tracking event if disable', async () => {
            console.log = jest.fn();

            const test = skift.create('test').addVariation({
                name: 'Variation 1',
                trackEventAutoPublish: false
            });

            const shouldRun = await test.setup();
            expect(console.log).toHaveBeenCalledTimes(0);
            expect(shouldRun).toEqual(true);
        });

        it('should previous test if identical', async () => {
            global.document.cookie = `skiftABTest=${JSON.stringify({test: 'Variation 1'})}`;
            const test = skift
                .create('test')
                .addVariation({
                    name: 'Variation 1'
                })
                .addVariation({
                    name: 'Variation 2'
                });

            const shouldRun = await test.setup();
            expect(shouldRun).toEqual(true);
        });
    });

    describe('#isInitialized', () => {
        it('should return false if test is canceled', async () => {
            const test = skift
                .create('test')
                .setCondition(() => false)
                .addVariation({
                    name: 'Variation 1'
                });

            const shouldRun = await test.setup();
            const isInitialized = await test.isInitialized();

            expect(shouldRun).toEqual(false);
            expect(isInitialized).toEqual(false);
        });

        it('should return true if test is correctly setup', async () => {
            const test = skift
                .create('test')
                .addVariation({
                    name: 'Variation 1'
                });

            const shouldRun = await test.setup();
            const isInitialized = await test.isInitialized();

            expect(shouldRun).toEqual(true);
            expect(isInitialized).toEqual(true);
        });

        it('should wait for state changes', async () => {
            const test = skift
                .create('test')
                .setCondition(() => new Promise((resolve) => setTimeout(() => resolve(true), 1000)))
                .addVariation({
                    name: 'Variation 1'
                });

            test.setup();
            const isInitialized = await test.isInitialized();

            expect(isInitialized).toEqual(true);
        });
    });

    describe('#getVariation', () => {
        it('should get an existing variation by name', () => {
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            const variation = test.getVariation('Variation 1');
            expect(variation).toEqual({
                name: 'Variation 1',
                normalizedWeight: 1,
                weight: 1
            });
        });

        it('should return undefined if the variation does not exist', () => {
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            const variation = test.getVariation('Variation 4');
            expect(variation).toBeUndefined();
        });
    });

    describe('#getVariationUrl', () => {
        it('should get variation url', async () => {
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            await test.setup();

            const url = test.getVariationUrl('Variation 1');
            expect(url).toEqual('about://blank?abtest=dGVzdD1WYXJpYXRpb24gMQ%3D%3D');
        });
    });

    describe('#trackViewed', () => {
        it('should call tracking function', async () => {
            console.log = jest.fn();
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });
            await test.setup();
            test.trackViewed();

            expect(console.log).toBeCalledWith('Split testing event: ExperimentViewed', {
                browser: 'Netscape',
                browserVersion: '4.0',
                experimentName: 'test',
                isMobile: false,
                variationName: 'Variation 1'
            });
        });
    });

    describe('#trackActionPerformed', () => {
        it('should call tracking function', async () => {
            console.log = jest.fn();
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });
            await test.setup();
            test.trackActionPerformed('Click', 'test');

            expect(console.log).toBeCalledWith('Split testing event: ExperimentActionPerformed', {
                action: 'Click',
                actionTarget: 'test',
                browser: 'Netscape',
                browserVersion: '4.0',
                experimentName: 'test',
                isMobile: false,
                variationName: 'Variation 1'
            });
        });

        it('should call tracking function with target', async () => {
            console.log = jest.fn();
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });
            await test.setup();
            test.trackActionPerformed('Click');

            expect(console.log).toBeCalledWith('Split testing event: ExperimentActionPerformed', {
                action: 'Click',
                actionTarget: '',
                browser: 'Netscape',
                browserVersion: '4.0',
                experimentName: 'test',
                isMobile: false,
                variationName: 'Variation 1'
            });
        });
    });

    describe('#trackLink', () => {
        it('should track a click on a link with an action target', async () => {
            const document = global.document;
            const link = document.createElement('a');
            link.textContent = 'test';
            link.setAttribute('id', 'test');
            document.body.appendChild(link);

            const element = document.getElementById('test');

            console.log = jest.fn();
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            const shouldRun = await test.setup();
            expect(shouldRun).toEqual(true);

            test.trackLink(element, 'Test target');
            element.click();
            expect(console.log).toHaveBeenCalledWith('Split testing event: ExperimentActionPerformed', {
                action: 'Click',
                actionTarget: 'Test target',
                browser: 'Netscape',
                browserVersion: '4.0',
                experimentName: 'test',
                isMobile: false,
                variationName: 'Variation 1'
            });
        });

        it('should track a click on a link without a target', async () => {
            const document = global.document;
            const link = document.createElement('a');
            link.textContent = 'test';
            link.setAttribute('id', 'test');
            document.body.appendChild(link);

            const element = document.getElementById('test');

            console.log = jest.fn();
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            const shouldRun = await test.setup();
            expect(shouldRun).toEqual(true);

            test.trackLink(element);
            element.click();
            expect(console.log).toHaveBeenCalledWith('Split testing event: ExperimentActionPerformed', {
                action: 'Click',
                actionTarget: 'test',
                browser: 'Netscape',
                browserVersion: '4.0',
                experimentName: 'test',
                isMobile: false,
                variationName: 'Variation 1'
            });
        });
    });

    describe('#getCurrentVariation', () => {
        it('should get the current variation', async () => {
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            await test.setup();
            expect(test.getCurrentVariation()).toEqual({
                name: 'Variation 1',
                normalizedWeight: 1,
                weight: 1
            });
        });
    });

    describe('#setCurrentVariation', () => {
        it('should set the current variation', async () => {
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            }).addVariation({
                name: 'Variation 2'
            });

            await test.setup();
            const currentVariation = test.getCurrentVariation();
            if (currentVariation.name === 'Variation 1') {
                await test.setCurrentVariation('Variation 2');
                expect(test.getCurrentVariation().name).toEqual('Variation 2');
            } else if (currentVariation.name === 'Variation 2') {
                await test.setCurrentVariation('Variation 1');
                expect(test.getCurrentVariation().name).toEqual('Variation 1');
            }
        });

        it('should return false if the variation is unknown', async () => {
            const test = skift.create('test').addVariation({
                name: 'Variation 1'
            });

            await test.setup();

            const success = await test.setCurrentVariation('Variation 3');
            expect(success).toEqual(false);
        });
    });
});
