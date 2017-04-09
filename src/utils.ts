
export interface QueryString extends Array<string> {
    [key: string]: any;
}

export function parseQueryString<T extends QueryString>(queryString?: string): T {
    queryString = queryString || location.search;
    const parameters = queryString.replace(/^\?/, "").split('&');
    const vars: QueryString = [];

    for (let i = 0; i < parameters.length && parameters[i] !== ""; i++) {
        const [key, value] = parameters[i].split('=');
        vars.push(key);
        vars[key] = decodeURIComponent(value);
    }
    return <T>vars;
}