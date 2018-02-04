/**
 * Created by mmichieli on 04/02/2018.
 */
import { Injectable } from '@angular/core';
import { LocalStorageEventsService } from '../events/storage/local-storage-events.service';

@Injectable()
export class LocalStorageService {

  constructor(private localStorageEvents: LocalStorageEventsService) {
  }

  // Check if the data exist in the session storage
  public exist(key: string) {
    return localStorage.hasOwnProperty(key);
  }

  public get(key: string) {
    return this.exist(key) ? JSON.parse(localStorage.getItem(key)) : null;
  }

  public post(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
    this.localStorageEvents.emitLocalStorageEvent();
  }

  // check if the key exist in the local storage and if it equals to the value param
  public contains(key: string, data: any) {
    return localStorage.getItem(key).indexOf(JSON.stringify(data)) !== -1 ? true : false;
  }

  public delete(key: string): boolean {
    if (this.exist(key)) {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  }
}
