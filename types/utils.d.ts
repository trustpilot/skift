export interface SplitTestQueryString {
    [key: string]: any;
    abtest?: string;
}
export declare function parseQueryString(queryString?: string): SplitTestQueryString;
