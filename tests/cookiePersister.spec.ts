import cookiePersister from '../src/cookiePersister';

declare const global: any;

describe('CookiePersister', () => {
    beforeEach(() => {
        delete global.document.cookie;
    });

    describe('#loadUserSession', () => {
        it('should return undefined is the cookie does not exit', () => {
            const cookie = cookiePersister.loadUserSession();
            expect(cookie).toBeFalsy();
        });

        it('should return the test name if it exists', () => {
            global.document.cookie = 'skiftABTest=loadUserSessionTest';
            const cookie = cookiePersister.loadUserSession();
            expect(cookie).toEqual('loadUserSessionTest');
        });
    });

    describe('#saveUserSession', () => {
        it('should set a cookie using the default values', () => {
            cookiePersister.saveUserSession('saveUserSessionTest', 3);
            const cookie = global.document.cookie;
            expect(cookie).toEqual('skiftABTest=saveUserSessionTest');
        });
    });
});
