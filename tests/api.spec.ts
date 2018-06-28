import skift from '../src/index';
import { SplitTest } from '../src/splittest';

describe('Top-level api', () => {
    it('should export the object', () => {
        expect(typeof skift).toBe('object');
        expect(skift).toBeDefined();
    });

    it('should be impossible to create an empty test', (done) => {
        skift.create('Awesome test!').setup()
            .then(() => expect('not').toBe('here'))
            .catch((err) => {
                expect(skift.getTest('Awesome test!')).toBeDefined();
                expect(skift.getTest('Awesome test!') instanceof SplitTest).toBe(true);
                done();
            });
    });

    it('should be possible to get a variation', () => {
        const test = skift
            .create('Another test!')
            .addVariation({ name: 'Variation A' });

        expect(test.getVariation('Variation A')).toBeDefined();
    });

    it('should be possible to setup a test with two variations and retrieve it by name', async (done) => {
        const test = skift
            .create('Another awesome test!')
            .addVariation({ name: 'Variation C' })
            .addVariation({ name: 'Variation D' });

        expect(await test.setup()).toBe(true);
        expect(skift.getTest('Another awesome test!')).toBeDefined();
        expect(test === skift.getTest('Another awesome test!')).toBeTruthy();
        done();
    });

    it.skip('should be possible to show the UI', () => {
        const testName = 'The test to check out!';
        skift
            .create(testName)
            .addVariation({ name: 'Variation A' })
            .addVariation({ name: 'Variation B' })
            .setup();

        skift.ui.show();

        const div = <HTMLElement>document.querySelector('body');
        const root = <ShadowRoot>div.shadowRoot;

        expect(root.querySelector('.skift-ui-container')).toBeDefined();
    });

    describe('when setting a condition', () => {
        it('allows for a promise', async (done) => {
            expect(await skift
                .create('testing conditions')
                .setCondition(() => Promise.resolve(true))
                .addVariation({ name: 'A'})
                .setup()).toBe(true);
            done();
        });

        it('allows for a boolean', async (done) => {
            expect(await skift
                .create('testing conditions')
                .setCondition(() => true)
                .addVariation({ name: 'A'})
                .setup()).toBe(true);
            done();
        });
    });

    describe('when checking for initialization', () => {
        it('resolves to true when setup is called, completes, and was successful', async (done) => {
            const test = skift
                .create('testing conditions')
                .setCondition(() => true)
                .addVariation({ name: 'A'});

            const setupPromise = test.setup();
            const initializedPromise = test.isInitialized();

            await setupPromise;
            expect(await initializedPromise).toBe(true);
            done();
        });

        it('resolves to false when setup is called, completes, and was canceled', async (done) => {
            const test = skift
                .create('testing conditions')
                .setCondition(() => false)
                .addVariation({ name: 'A'});

            const setupPromise = test.setup();
            const initializedPromise = test.isInitialized();

            await setupPromise;
            expect(await initializedPromise).toBe(false);
            done();
        });

        it('resolves to false when setup is never called', async (done) => {
            const test = skift
                .create('testing conditions')
                .setCondition(() => false)
                .addVariation({ name: 'A'});

            const initializedPromise = test.isInitialized();

            expect(await initializedPromise).toBe(false);
            done();
        });
    });
});
