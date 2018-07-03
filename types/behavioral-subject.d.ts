export declare class BehavioralSubject<A> {
    private subscribers;
    private _value;
    constructor(value: A);
    next(value: A): void;
    subscribe(observer: (value: A) => void): void;
}
