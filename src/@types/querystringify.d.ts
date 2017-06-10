declare module "querystringify"
{
    /**
     * Simple query string parser.
     * @param query The query string that needs to be parsed.
     */
    export function parse(query: string): { [key: string]: string; };

    /**
     * Transform an object to a query string.
     * @param obj Object that should be transformed.
     * @param prefix Optional prefix. Default prefix is '?' when passing true. Pass a string to use a custom prefix.
     */
    export function stringify(obj: object, prefix?: boolean | string): string;
}
