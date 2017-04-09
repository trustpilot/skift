export default class CookieHelper {
    static createCookie(name: string, value: string, days: number): void;
    static readCookie(name: string): string | null;
    static eraseCookie(name: string): void;
}
