import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ActionsEventsService {

  public switchToUpdateModeEvent: EventEmitter<any> = new EventEmitter<any>();
  public switchToCreateModeEvent: EventEmitter<any> = new EventEmitter<any>();
  public switchToConsultModeEvent: EventEmitter<any> = new EventEmitter<any>();
  public displayDeletePopupDeal: EventEmitter<boolean> = new EventEmitter();
  public displayDeletePopupWorkRecord: EventEmitter<boolean> = new EventEmitter();
  public displayCancelPopupWorkRecord: EventEmitter<boolean> = new EventEmitter();
  public displayCancelPopupDeal: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  public switchToUpdateMode() {
    this.switchToUpdateModeEvent.emit();
  }

  public switchToCreateMode() {
    this.switchToCreateModeEvent.emit();
  }

  public switchToConsultMode() {
    this.switchToConsultModeEvent.emit();
  }

  public displayPopupDeal() {
    this.displayDeletePopupDeal.emit(true);
  }

  public displayPopupWorkRecord() {
    this.displayDeletePopupWorkRecord.emit(true);
  }
}
