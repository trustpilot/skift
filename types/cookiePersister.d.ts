export interface SessionPersister {
    loadUserSession(): string | null;
    saveUserSession(userSession: string, daysToLive: number): void;
}
declare const persister: {
    loadUserSession(): string | null;
    saveUserSession(userSession: string, daysToLive: number): void;
};
export default persister;
