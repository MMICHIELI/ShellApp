// Angular
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

// Models
import { TableConsultColumnModel } from '../../../models/table-consult-column.model';

// Decorators
import { Theme } from '../../decorators/theme.decorator';

@Component({
  selector: 'sc-table-consult',
  templateUrl: './table-consult.fragment.html',
  styleUrls: ['./table-consult.fragment.css']
})

export class TableConsultFragment implements OnInit {

  @ViewChild('inputAuto') public inputAuto: ElementRef;

  // columns to display
  @Input() public columns: TableConsultColumnModel[];
  // list of objects (deals, cost centers, products etc...)
  @Input() public rows: any[];
  // Whether or not you want check boxes
  @Input() public withCheckBoxes: boolean = false;
  @Output('getCheckedList') public getCheckedList = new EventEmitter();

  @Theme() public theme: string;

  public selectAllItems: boolean = false;
  @Output() public selectedItems: any[] = [];

  constructor() {
  }

  public ngOnInit(): void {
  }

  /**
   * Manage checkbox for each item
   * @param item
   */
  public selectOrUnselectItem(item): void {
    if (item.checked) {
      this.addItemToSelectedList(item);
    } else {
      this.removeItemFromSelectedList(item);
    }
    this.getListForSimpleAuto();
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
    this.getListForSimpleAuto();
  }

  public getListForSimpleAuto() {
    this.getCheckedList.emit(this.selectedItems);
  }

}
