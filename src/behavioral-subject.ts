export class BehavioralSubject<A> {
    private subscribers: Array<(value: A) => void> = [];
    private _value: A;

    constructor(value: A) {
        this._value = value;
    }

    public next(value: A) {
        this._value = value;
        this.subscribers.forEach((observer) => observer(this._value));
    }

    public subscribe(observer: (value: A) => void) {
        observer(this._value);
        this.subscribers.push(observer);
    }
}
