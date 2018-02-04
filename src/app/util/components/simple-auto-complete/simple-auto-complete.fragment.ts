import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sc-simple-auto-complete-fragment',
  templateUrl: './simple-auto-complete.fragment.html',
})
export class SimpleAutocompleteFragment implements OnInit {

  @Input() public control: FormControl;
  @Input() public filteredList: any[];
  @Input() public model: string;
  @Input() public fieldToDisplay: string;
  @Input() public fieldToSave: string;
  @Output('getListEmitter') public getListEmitter = new EventEmitter();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getList() {
    this.filteredList = null;
    this.getListEmitter.emit();
  }
}
