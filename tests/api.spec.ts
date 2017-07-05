import * as skift from '../src/index';
import { SplitTest } from '../src/splittest';

describe('Top-level api', () => {
    it('should export the object', () => {
        expect(typeof skift).toBe('object');
        expect(skift).toBeDefined();
    });

    it('should be impossible to create an empty test', () => {
        expect(() => skift.create('Awesome test!').setup()).toThrowError();
        expect(skift.getTest('Awesome test!')).toBeDefined();
        expect(skift.getTest('Awesome test!') instanceof SplitTest).toBe(true);
    });

    it('should be possible to get a variation', () => {
        const test = skift
            .create('Another test!')
            .addVariation({ name: 'Variation A' });

        expect(test.getVariation('Variation A')).toBeDefined();
    });

    it('should be possible to setup a test with two variations and retrieve it by name', () => {
        const test = skift
            .create('Another awesome test!')
            .addVariation({ name: 'Variation C' })
            .addVariation({ name: 'Variation D' });

        expect(test.setup()).toBe(true);
        expect(skift.getTest('Another awesome test!')).toBeDefined();
        expect(test === skift.getTest('Another awesome test!')).toBeTruthy();
    });

    it('should be possible to show the UI', () => {
        const testName = 'The test to check out!';
        skift
            .create(testName)
            .addVariation({ name: 'Variation A' })
            .addVariation({ name: 'Variation B' })
            .setup();

        skift.ui.show([skift.getTest(testName)]);

        const div = <HTMLElement>document.querySelector('div');
        const root = <ShadowRoot>div.shadowRoot;

        expect(root.querySelector('.skift-ui-container')).toBeDefined();
    });
});
