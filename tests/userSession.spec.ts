import userSession from '../src/userSession';
import { BrowserEnv } from './browser';

declare const global: BrowserEnv;

describe('userSession', () => {
    describe('#setTestVariation', () => {
        it('should correctly save variation in cookie', () => {
            userSession.setTestVariation('test', 'variation');
            expect(global.document.cookie).toEqual(`skiftABTest=${JSON.stringify({test: 'variation'})}`);
        });
    });

    describe('#getTestVariation', () => {
        it('should rturn undefined if the variation is not found', () => {
            const variation = userSession.getTestVariation('nonExistingTestVariation');
            expect(variation).toBeUndefined();
        });

        it('should find a variation if it exists', () => {
            global.document.cookie = `skiftABTest=${JSON.stringify({test: 'variation'})}`;
            const variation = userSession.getTestVariation('test');
            expect(variation).toEqual('variation');
        });
    });

    describe('#reset', () => {
        it('should reset all variations', () => {
            global.document.cookie = `skiftABTest=${JSON.stringify({test: 'variation'})}`;
            userSession.reset();
            const variation = userSession.getTestVariation('test');
            expect(variation).toBeUndefined();
        });
    });
});
