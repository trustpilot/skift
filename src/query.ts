import * as  qs from 'querystringify';

export function removeAbTestParameter(search: string) {
    const query = qs.parse(search);
    delete query.abtest;
    return qs.stringify(query);
}

export function getAbTestParameter(search: string) {
    const query = qs.parse(search);

    if (!query) {
        return null;
    }

    const abTest = query.abtest;

    if (!abTest || typeof abTest !== 'string') {
        return null;
    }

    return abTest;
}

export function setAbTestParameter(search: string, abTest: string) {
    const query = qs.parse(search);
    query.abtest = abTest;
    return qs.stringify(query, true);
}
