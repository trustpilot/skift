import { UserSessionPersister } from './userSessionPersister';

export class InMemoryPersister implements UserSessionPersister {
  private endOfLife: number = 0;
  private storage: string = '';
  public loadUserSession() {
      return !this.endOfLife || (Date.now() > this.endOfLife) ? '' : this.storage;
  }
  public saveUserSession(userSession: string, daysToLive: number) {
      this.storage = userSession;
      this.endOfLife = Date.now() + (daysToLive * 24 * 60 * 60 * 1000);
  }
}
