/**
 * Created by mmichieli on 04/02/2018.
 */
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ToasterEventsService {

  public toasterSuccessEvent: EventEmitter<any> = new EventEmitter();
  public toasterErrorEvent: EventEmitter<any> = new EventEmitter();
  public toasterWarnEvent: EventEmitter<any> = new EventEmitter();
  public toasterInfoEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('ToasterEventsService mounted');
  }

  // emit a success event toaster
  public successEvent(message: string) {
    this.toasterSuccessEvent.emit(message);
  }

  // emit a success event toaster
  public errorEvent(message: string) {
    this.toasterErrorEvent.emit(message);
  }

  // emit a success event toaster
  public warnEvent(message: string) {
    this.toasterWarnEvent.emit(message);
  }

  // emit a success event toaster
  public infoEvent(message: string) {
    this.toasterInfoEvent.emit(message);
  }
}
