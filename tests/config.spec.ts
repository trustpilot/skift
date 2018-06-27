import config from '../src/config';

describe('config', () => {
    it('should get a default config', () => {
        expect(config.cookieName).toBeDefined();
        expect(config.globalCondition).toBeDefined();
        expect(config.sessionPersister).toBeDefined();
        expect(config.tracking).toBeDefined();
        expect(config.userSessionDaysToLive).toBeDefined();
    });
});
