/**
 * Created by mmichieli on 04/02/2018.
 */
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableFormColumnModel } from '../../../models/table-form-column.model';
import { TableActionButtons } from '../../../models/table-action-button.model';

@Component({
  selector: 'mmi-table-form',
  templateUrl: './table-form.fragment.html',
  styleUrls: ['./table-form.fragment.css']
})

export class TableFormFragment implements OnInit {

  // columns to display
  @Input() public columns: TableFormColumnModel[];
  // list of objects (deals, cost centers, products etc...)
  @Input() public rows: any[];
  @Input() public formGroup: FormGroup;
  // list of available actions (add, delete, copy etc..)
  @Input() public actions: any[];
  // The prefix is needed to correctly distinct controls and attributes
  @Input() public prefix: string;
  // The icon name(ie file_upload) you want to display in the ICON_ACTION column
  @Input() public iconName: string;
  // The icon tooltip(ie "Uploading") you want to display when mouse over the displayed action icon.
  @Input() public iconTooltip: string;
  // Whether or not you want check boxes
  @Input() public withCheckBoxes: boolean = false;
  @Input() public theme: string;
  @Input() public tableActionButtons: TableActionButtons;
  @Input() public isOk: boolean;

  // output called when clicking on the + button
  @Output('addEmitter') public addEmitter = new EventEmitter();
  // output called to load the suggestions of a auto complete field
  @Output('autoCompleteEmitter') public autoCompleteEmitter = new EventEmitter();
  // output called when a suggestion is selected in a auto complete field
  @Output('autoCompleteOnSelectEmitter') public autoCompleteOnSelectEmitter = new EventEmitter();
  @Output('checkBoxClickEmitter') public checkBoxClickEmitter = new EventEmitter();
  @Output('updatedValueEmitter') public updatedValueEmitter = new EventEmitter();
  // output called when clicking on the Search button
  @Output('searchEmitter') public searchEmitter = new EventEmitter();
  @Output('getListForSimpleAutoEmitter') public getListForSimpleAutoEmitter = new EventEmitter();

  // output called when clicking on the + button
  @Output('imageActionEmitter') public imageActionEmitter = new EventEmitter();

  public selectAllItems: boolean = false;
  public selectedItems: any[] = [];
  public rowsNumber: number;
  public newlyAdded: boolean[] = [];
  public eventTest: Event = new Event('click');

  constructor() {
  }

  public ngOnInit(): void {
    if (this.rows) {
      this.rowsNumber = this.rows.length;
      this.rows.forEach((row) =>
        this.newlyAdded.push(false)
      );
    }
  }

  public getIconName(): string {
    return this.iconName;
  }

  public getIconTooltip(): string {
    return this.iconTooltip;
  }

  public onActionIconClick(index: number) {
    this.imageActionEmitter.emit(index);
  }

  public onAddClick() {
    this.addEmitter.emit();
    this.newlyAdded.push(true);
  }

  public search(event, column: string) {
    this.autoCompleteEmitter.emit({event, column});
  }

  public onSelect(event, index, column) {
    this.autoCompleteOnSelectEmitter.emit({event, index, column});
    column.suggestions = [];
  }

  public onCheckBoxClick(event, index, column) {
    this.checkBoxClickEmitter.emit({event, column, index});
  }

  /**
   * Emit the new Value
   * @param event
   * @param index
   * @param column
   */
  public onUpdateValue(event, index, column) {
    this.updatedValueEmitter.emit({event, index, column});
  }

  public onSearchClick() {
    this.searchEmitter.emit();
  }

  /**
   * Manage checkbox for each item
   * @param item
   */
  public selectOrUnselectItem(item): void {
    if (item.checked) {
      this.addItemToSelectedList(item);
    } else {
      this.selectAllItems = false;
      this.removeItemFromSelectedList(item);
    }
  }

  /**
   * addItemToSelectedList
   * @param item
   */
  public addItemToSelectedList(item): void {
    let index = this.selectedItems.indexOf(item);
    if (index === -1) {
      this.selectedItems.push(item);
    }
  }

  /**
   * removeItemFromSelectedList
   * @param item
   */
  public removeItemFromSelectedList(item): void {
    let index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
  }

  /**
   * Manage "checkbox all" button
   */
  public selectAllItem(): void {
    this.rows.forEach(
      (item) => {
        if (this.selectAllItems) {
          this.addItemToSelectedList(item);
          item.checked = true;
        } else {
          this.removeItemFromSelectedList(item);
          item.checked = false;
        }
      }
    );
  }

  /**
   * Remove item in the table and in the model
   */
  public removeItem(): void {
    let itemToRemoveFromSelection = [];
    // For each selected insert...
    this.selectedItems.forEach(
      (item) => {
        let index = this.rows.indexOf(item);
        if (index !== -1) {
          this.rows.splice(index, 1);
          this.newlyAdded.splice(index, 1);
          itemToRemoveFromSelection.push(item);

          if (index >= this.rows.length) {
            this.columns.forEach((column) => {
              this.formGroup.removeControl(this.prefix + '-' + column.name + index);
            });
          } else {

            while (index <= this.rows.length - 1) {
              this.columns.forEach((column) => {
                this.formGroup.setControl(this.prefix + '-' + column.name + index, this.formGroup.controls[this.prefix + '-' + column.name + (index + 1)]);
                this.formGroup.removeControl(this.prefix + '-' + column.name + (index + 1));
              });
              index++;
            }
          }
        }
      }
    );
    itemToRemoveFromSelection.forEach((item) => this.removeItemFromSelectedList(item));
    this.selectAllItems = false;
  }

  public getListForSimpleAuto(i: number, column: TableFormColumnModel) {
    column.filteredList = null;
    this.getListForSimpleAutoEmitter.emit({index: i, columnValue: column.name});
  }
}
