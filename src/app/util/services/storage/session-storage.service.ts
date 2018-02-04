/**
 * Created by mmichieli on 04/02/2018.
 */
// Angular 2
import { Injectable } from '@angular/core';
// Services
import { SessionStorageEventsService } from '../events/storage/session-storage-events.service';

@Injectable()
export class SessionStorageService {

  constructor(private sessionsStorageEvents: SessionStorageEventsService) {
  }

  // Check if the data exist in the session storage
  public exist(key: string) {
    return (undefined !== sessionStorage.getItem(key) && null !== sessionStorage.getItem(key)) ? true : false;
  }

  public get(key: string) {
    return this.exist(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
  }

  public post(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
    this.sessionsStorageEvents.emitUpdate();
  }

  // check if the key exist in the session storage and if it equals to the value param
  public contains(key: string, data: any) {
    return this.get(key).indexOf(JSON.stringify(data)) !== -1 ? true : false;
  }

  public delete(key: string): boolean {
    if (this.exist(key)) {
      sessionStorage.removeItem(key);
      return true;
    }
    return false;
  }
}
