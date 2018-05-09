export async function alwaysPromise<T>(thing: T | Promise<T>) {
    return Promise.resolve(thing);
}
