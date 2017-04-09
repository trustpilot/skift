export interface QueryString extends Array<string> {
    [key: string]: any;
}
export declare function parseQueryString<T extends QueryString>(queryString?: string): T;
