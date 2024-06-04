import * as query from '../src/query';

describe('Query', () => {
    describe('#removeAbTestParameter', () => {
        it('should remove abtest parameter if it exists', () => {
            const location = {
                search: '',
            };

            location.search = '?abtest=test';
            const newSearch = query.removeAbTestParameter(location.search);
            expect(newSearch).toEqual('');
        });

        it('should remove all abtest parameters if multiple are present', () => {
            const location = {
                search: '',
            };

            location.search = '?abtest=test1&abtest=test2&abtest=3';
            const newSearch = query.removeAbTestParameter(location.search);
            expect(newSearch).toEqual('');
        });
    });

    describe('#getAbTestParameter', () => {
        it('should return null if there is no query', () => {
            const abtest = query.getAbTestParameter(location.search);
            expect(abtest).toBeNull();
        });

        it('should return null if there is a query but no abtest parameter', () => {
            const location = {
                search: 'notabtest=test',
            };

            const abtest = query.getAbTestParameter(location.search);
            expect(abtest).toBeNull();
        });

        it('should return null if the abtest parameter is not a string', () => {
            const location = {
                search: 'abtest=',
            };

            const abtest = query.getAbTestParameter(location.search);
            expect(abtest).toBeNull();
        });

        it('should return the abtest parameter if it exists', () => {
            const location = {
                search: 'abtest=test',
            };

            const abtest = query.getAbTestParameter(location.search);
            expect(abtest).toEqual('test');
        });
    });

    describe('#setAbTestParameter', () => {
        it('should set a new abTest parameter if it does not exist', () => {
            const location = {
                search: '',
            };

            const newSearch = query.setAbTestParameter(location.search, 'test');

            expect(newSearch).toEqual('?abtest=test');
        });

        it('should replace the abTest parameter if it already exists', () => {
            const location = {
                search: 'abtest=test1',
            };

            const newSearch = query.setAbTestParameter(location.search, 'test2');

            expect(newSearch).toEqual('?abtest=test2');
        });
    });
});
