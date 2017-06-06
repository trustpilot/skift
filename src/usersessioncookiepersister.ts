import config, {UserSessionPersister} from './config';

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
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length);
        }
    }
    return null;
}

const persister: UserSessionPersister = {
    loadUserSession(): string | null {
        return readCookie(config.cookieName);
    },

    saveUserSession(userSession: string, daysToLive: number): void {
        createCookie(config.cookieName, userSession, daysToLive);
    }
};
export default persister;
