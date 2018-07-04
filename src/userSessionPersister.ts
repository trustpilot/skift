import config from './config';

export interface UserSessionPersister {
    loadUserSession(): string | null;
    saveUserSession(userSession: string, daysToLive: number): void;
}

function createCookie(name: string, value: string, days: number): void {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name: string): string | null {
    const nameEq = name + '=';
    const ca = document.cookie.split(';');
    for (let c of ca) {
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length);
        }
    }
    return null;
}

export class CookiePersister implements UserSessionPersister {
    public loadUserSession() {
        return readCookie(config.cookieName);
    }

    public saveUserSession(userSession: string, daysToLive: number) {
        createCookie(config.cookieName, userSession, daysToLive);
    }
}
