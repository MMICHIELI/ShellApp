import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class FormActionsEventsService {

  public updateEvent: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  public consultToEdit: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  public EditToConsult: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  public consultToDuplicate: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor() {
  }

  public emitUpdateEvent() {
    this.updateEvent.emit();
  }

  public emitEventIsUpdateTrue() {
    this.consultToEdit.emit(true);
  }

  public emitConsultEvent() {
    this.EditToConsult.emit();
  }
}
