
export interface SplitTestQueryString {
    [key: string]: any;
    abtest?: string;
}

export function parseQueryString(queryString: string = location.search): SplitTestQueryString {
    const parameters = location.search.replace(/^\?/, "").split('&');
    const vars:any = {};

    for (let i = 0; i < parameters.length && parameters[i] !== ""; i++) {
        const [key, value] = parameters[i].split('=');
        vars[key] = decodeURIComponent(value);
    }
    return vars;
}