import * as ua from 'useragent-generator';

import * as userAgent from '../src/userAgent';

describe('UserAgent', () => {
    describe('#getInfo', () => {
        it('should get Chrome', () => {
            expect(userAgent.getInfo(ua.chrome(60))).toEqual({
                isMobile: false,
                name: 'Chrome',
                version: '60',
            });
        });

        it('should get Firefox', () => {
            expect(userAgent.getInfo(ua.firefox(60))).toEqual({
                isMobile: false,
                name: 'Firefox',
                version: '60',
            });
        });

        it('should get IE', () => {
            expect(userAgent.getInfo(ua.ie(60))).toEqual({
                isMobile: false,
                name: 'IE',
                version: '60',
            });
        });

        it('should get Safari', () => {
            expect(userAgent.getInfo(ua.safari(60))).toEqual({
                isMobile: false,
                name: 'Safari',
                version: '60',
            });
        });
    });
});
