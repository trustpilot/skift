import skift from '../src/index';

describe('Top-level api', () => {
    it('should export the object', () => {
        expect(typeof skift).toBe('object');
    });
});
