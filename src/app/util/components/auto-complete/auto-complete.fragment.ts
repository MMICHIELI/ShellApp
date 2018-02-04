/**
 * Created by mmichieli on 04/02/2018.
 */
import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { Theme } from '../../decorators/theme.decorator';
import { MdAutocompleteTrigger } from '@angular/material';

@Component({
  selector: 'mmi-auto-complete-component',
  templateUrl: './auto-complete.component.html'
})

export class AutoCompleteFragment implements OnInit, AfterViewInit  {

  @Theme() public theme: string;

  @Input() public model: any;
  @Input() public focus: boolean;
  @Input() public fieldToDisplay: string;
  @Input() public suggestions: any[];
  @Input() public control: FormControl;
  @Input() public placeholder: string;        // define a placeholder
  @Input() public required: boolean = false;  // if required is true, '*' is added in the placeholder
  @Input() public width: string = '100%';
  @Input() public min: number = 0;
  @Input() public debounceDelay: number = 0;
  @Input() public id: string = '';
  public timeoutID: any;
  @Input() public ordered: boolean = false;

  // output called to load the suggestions of a auto complete field
  @Output('autoCompleteGenericEmitter') public autoCompleteGenericEmitter = new EventEmitter();
  // output called when a suggestion is selected in a auto complete field
  @Output('autoCompleteOnSelectGenericEmitter') public autoCompleteOnSelectGenericEmitter = new EventEmitter();

  @Output('onModelChangeEmitter') public onModelChangeEmitter = new EventEmitter();
  @ViewChild('autoCompleteInputField') public el: ElementRef;
  @ViewChild('autoCompleteInputField', { read: MdAutocompleteTrigger }) public trigger: MdAutocompleteTrigger;
  @ViewChild('auto') private auto: ElementRef;

  constructor(private rd: Renderer2) {
  }

  public ngOnInit(): void {
    if (this.required && this.placeholder !== null) {
      this.placeholder = this.placeholder + '*';
    }
  }

  public ngAfterViewInit() {
    if (!isNullOrUndefined(this.focus) && this.focus) {
      this.el.nativeElement.focus();
    }
  }

  /**
   * Search by throwing a autoCompleteGenericEmitter to the calling template or component.
   * The search is character by character if no debounceDelay specified,
   * When debounceDelay is reached else.
   *
   * @param event
   */
  public search(event) {

    // if no debounceDelay, send a request for each character of the input field.
    if (this.debounceDelay === 0) {
      this.doSearch(event);
      return;
    }

    // if debounceDelay asked, we setUp a timeout on the EventEmitter
    this.debounceEventEmitter(event);
  }

  public debounceEventEmitter(event) {
    if (this.timeoutID) {
      window.clearTimeout(this.timeoutID);
    }
    this.timeoutID = window.setTimeout(() => {
      this.doSearch(event);
    }, this.debounceDelay);
  }

  public doSearch(event): void {
    if (event.target.value.length >= this.min) {
      this.autoCompleteGenericEmitter.emit(event);
    } else if (event.target.value.length === 0) {
      let id = this.id;
      this.onModelChangeEmitter.emit({event, id});
    }
  }

  public onSelect(suggestion) {
    this.autoCompleteOnSelectGenericEmitter.emit(suggestion);
  }
}
