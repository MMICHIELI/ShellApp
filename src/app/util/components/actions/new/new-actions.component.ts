/**
 * Created by mmichieli on 04/02/2018.
 */
import {

  Component,
  EventEmitter,
  Input,
  OnInit,
  Output

} from '@angular/core';
import { trigger, keyframes, state, animate, transition, style, query, stagger } from '@angular/animations';

import { Location } from '@angular/common';
import { ActionModel } from './action.model';

@Component({
  selector: 'sc-new-actions',
  templateUrl: './new-actions.component.html',
  styleUrls: ['./new-actions.component.css'],
  animations: [

    trigger('flyInOut', [

      transition('out => in', [
        query('.animate', stagger('100ms', [
          animate(500, keyframes([
            style({ opacity: 0, transform: 'translateX(150px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(-15px)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ]))
        ]))
      ]),

      transition('in => out', [
        query('.animate', stagger('100ms', [
          animate(500, keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(-15px)', offset: 0.5 }),
            style({ opacity: 0, transform: 'translateX(150px)', offset: 1.0 })
          ]))
        ]))
      ])
    ])
  ]
})

export class NewActionsComponent implements OnInit {

  @Input() public actionModel: ActionModel;

  @Output('postEvent') public postEvent = new EventEmitter();
  @Output('putEvent') public putEvent = new EventEmitter();
  @Output('duplicateEvent') public duplicateEvent = new EventEmitter();
  @Output('editEvent') public editEvent = new EventEmitter();
  @Output('deleteEvent') public deleteEvent = new EventEmitter();
  @Output('submitToValidationEvent') public submitToValidationEvent = new EventEmitter();
  @Output('addEvent') public addEvent = new EventEmitter();
  @Output('signEvent') public signEvent = new EventEmitter();
  @Output('cancelEvent') public cancelEvent = new EventEmitter();
  @Output('validateEvent') public validateEvent = new EventEmitter();
  @Output('AddNewRightEvent') public AddNewRightEvent = new EventEmitter();
  @Output('createDuplicateEvent') public createDuplicateEvent = new EventEmitter();
  @Output('protectEvent') public protectEvent = new EventEmitter();
  @Output('downloadDraftPdfEvent') public downloadDraftPdfEvent = new EventEmitter();
  @Output('downloadPdfEvent') public downloadPdfEvent = new EventEmitter();
  @Output('addInSessionEvent') public addInSessionEvent = new EventEmitter();
  @Output('updateInSessionEvent') public updateInSessionEvent = new EventEmitter();
  @Output('undoConfirmEvent') public undoConfirmEvent = new EventEmitter();

  public state: string = 'out';

  public isToggle: boolean = false;
  public isOnMenu: boolean = false;
  public show: boolean = false;

  constructor(private location: Location) {
  }

  public ngOnInit(): void {
    console.log('state: ', this.state);
  }

  public mouseEnter() {
    this.state = 'in';
    setTimeout(() => {
      this.show = true;
    }, 500);
  }

  public mouseLeave() {
    this.state = 'out';
    setTimeout(() => {
      this.show = false;
    }, 500);
  }

  public post() {
    this.postEvent.emit();
  }

  public AddNewRight() {
    this.AddNewRightEvent.emit();
  }

  public put() {
    this.putEvent.emit();
  }

  public duplicate() {
    this.duplicateEvent.emit();
  }

  public edit() {
    this.editEvent.emit();
  }

  public delete() {
    this.deleteEvent.emit();
  }

  public undoConfirm() {
    this.undoConfirmEvent.emit();
  }

  public undo() {
    this.location.back();
  }

  public submitToValidation() {
    this.submitToValidationEvent.emit();
  }

  public add() {
    this.addEvent.emit();
  }

  public addInSession() {
    this.addInSessionEvent.emit();
  }

  public updateInSession() {
    this.updateInSessionEvent.emit();
  }

  public cancel() {
    this.cancelEvent.emit();
  }

  public validate() {
    this.validateEvent.emit();
  }

  public createDuplicate() {
    this.createDuplicateEvent.emit();
  }

  public sign() {
    this.signEvent.emit();
  }

  public protect() {
    this.protectEvent.emit();
  }

  public downloadDraftPdf() {
    this.downloadDraftPdfEvent.emit();
  }

  public downloadPdf() {
    this.downloadPdfEvent.emit();
  }

}
