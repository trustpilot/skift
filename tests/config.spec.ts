import config from '../src/config';
import skift from '../src/index';

describe('Config', () => {
    it('should get default configuration', () => {
        expect(config).toBeDefined();
        expect(config.cookieName).toBeDefined();
        expect(config.globalCondition).toBeDefined();
        expect(config.sessionPersister).toBeDefined();
        expect(config.tracking).toBeDefined();
        expect(config.uiCondition).toBeDefined();
        expect(config.userSessionDaysToLive).toBeDefined();
    });

    it('should override default config', () => {
        skift.config({
            cookieName: 'Test',
        });

        expect(config).toBeDefined();
        expect(config.cookieName).toEqual('Test');
    });
});
