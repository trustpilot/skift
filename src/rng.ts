/**
 * Linear Congruential Generator
 * https://en.wikipedia.org/wiki/Linear_congruential_generator
 */
export default class Rng {
    // Using GCC's constants
    static readonly m = 0x80000000; // 2**31;
    static readonly a = 1103515245;
    static readonly c = 12345;

    private state: number;

    constructor(seed: number) {
        this.state = seed;
    }

    nextInt() {
        this.state = (Rng.a * this.state + Rng.c) % Rng.m;
        return this.state;
    }

    /**
     * Get a (integer) number in range [start, end): including start, excluding end.
     * @param start Range start (included)
     * @param end Range end (excluded)
     */
    nextRange(start: number, end: number) {
        // can't modulu nextInt because of weak randomness in lower bits
        const rangeSize = end - start;
        const randomUnder1 = this.nextInt() / Rng.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    }
}