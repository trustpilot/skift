import config from './config';
export interface UserSessionPersister {
    loadUserSession(): string | null;
    saveUserSession(userSession: string, daysToLive: number): void;
}
