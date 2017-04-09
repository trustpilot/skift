/**
 * Linear Congruential Generator
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
export default class Rng {
    static readonly m: number;
    static readonly a: number;
    static readonly c: number;
    private state;
    constructor(seed: number);
    nextInt(): number;
    /**
     * Get a (integer) number in range [start, end): including start, excluding end.
     * @param start Range start (included)
     * @param end Range end (excluded)
     */
    nextRange(start: number, end: number): number;
}
