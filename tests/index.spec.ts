import skift from '../src/index';

describe('Top-level api', () => {
    it('should export the function', () => {
        expect(typeof skift).toBe('function');
    });

    it('should export the function', () => {
        expect(typeof skift()).toBe('object');
    });
});
