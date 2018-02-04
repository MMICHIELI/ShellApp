/**
 * Created by mmichieli on 04/02/2018.
 */
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SessionStorageEventsService {

  public sessionsStorageUpdateEvent: EventEmitter<any> = new EventEmitter();
  public updateSubscriberEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('SessionStorageEventsService mounted');
  }

  // emit a success event toaster
  public emitUpdate() {
    this.sessionsStorageUpdateEvent.emit('update');
  }
}
