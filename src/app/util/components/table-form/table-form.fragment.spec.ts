import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilModule } from '../../util.module';
import { TranslateModule } from '@ngx-translate/core';
import { TableFormFragment } from './table-form.fragment';
import { DebugElement, EventEmitter } from '@angular/core';
import { InputTypeEnum } from './input-type.enum';
import { TableFormColumnModel } from '../../../models/table-form-column.model';
import { InsertModel } from '../../../models/insert.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TableActionButtons } from '../../../models/table-action-button.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Test table form fragment', () => {

  // Elements
  let de: DebugElement;

  // TestBed Component
  let comp: TableFormFragment;
  let fixture: ComponentFixture<TableFormFragment>;

  // Asynchronous beforeEach()
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilModule.forRoot(), TranslateModule.forRoot(), BrowserAnimationsModule]
    });
  }));

  // Synchronous beforeEach()
  beforeEach(() => {
    fixture = TestBed.createComponent(TableFormFragment);
    comp = fixture.componentInstance;
    comp.formGroup = new FormBuilder().group({});
    comp.columns = [];
    comp.rows = [];
    comp.theme = 'terapy';
    comp.prefix = 'insert';
    comp.withCheckBoxes = true;
    comp.selectedItems = [];

    comp.tableActionButtons = new TableActionButtons(true, false, true, false);

    let columnDescription = new TableFormColumnModel('description', 'MANUFACTURING.FORM.INSERT.DESCRIPTION', InputTypeEnum.TEXT, '1px');
    let columnFormat = new TableFormColumnModel('format', 'MANUFACTURING.FORM.INSERT.FORMAT', InputTypeEnum.TEXT, '1px');
    let columnColor = new TableFormColumnModel('color', 'MANUFACTURING.FORM.INSERT.COLOR', InputTypeEnum.TEXT, '1px');
    let columnSupplierMiloId = new TableFormColumnModel('supplierName', 'MANUFACTURING.FORM.INSERT.SUPPLIER_MILO_ID', InputTypeEnum.AUTO_COMPLETE, '1px');
    columnSupplierMiloId.fieldToDisplay = 'companyOrPersonName';
    let columnCost = new TableFormColumnModel('unitPrice', 'MANUFACTURING.FORM.INSERT.COST', InputTypeEnum.NUMBER, '1px');
    let columnUnitQuantity = new TableFormColumnModel('unitQuantity', 'MANUFACTURING.FORM.INSERT.QUANTITY', InputTypeEnum.NUMBER, '1px');

    comp.columns.push(columnDescription);
    comp.columns.push(columnFormat);
    comp.columns.push(columnColor);
    comp.columns.push(columnSupplierMiloId);
    comp.columns.push(columnCost);
    comp.columns.push(columnUnitQuantity);

    let insert = new InsertModel();

    comp.formGroup.addControl('insert-unitPrice0'
      , new FormControl(insert.unitPrice,
        [Validators.pattern('[0-9]+(\.[0-9][0-9]?[0-9]?)?')]));
    comp.formGroup.addControl('insert-unitQuantity0'
      , new FormControl(insert.unitQuantity,
        [Validators.pattern('[0-9]+')]));
    comp.formGroup.addControl('insert-supplierName0'
      , new FormControl(insert.supplierMiloId, Validators.required));
    comp.formGroup.addControl('insert-format0'
      , new FormControl(insert.format, Validators.required));
    comp.formGroup.addControl('insert-color0'
      , new FormControl(insert.color, Validators.required));
    comp.formGroup.addControl('insert-description0',
      new FormControl(insert.description, Validators.required));

    comp.rows.push(insert);

    comp.addEmitter = new EventEmitter();
    comp.autoCompleteEmitter = new EventEmitter<any>();
    comp.autoCompleteOnSelectEmitter = new EventEmitter<any>();

    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('Triggering click event on the addButton should call addEmitter.emit', () => {

    spyOn(comp.addEmitter, 'emit').and.callThrough();
    let span = de.query(By.css('#addButton'));
    span.nativeElement.click();

    fixture.detectChanges();

    expect(comp.addEmitter.emit).toHaveBeenCalledTimes(1);
  });

  it('Test search method', () => {

    let spy = spyOn(comp.autoCompleteEmitter, 'emit')
      .and.callThrough();
    let event = '';
    comp.search(event, 'column');

    expect(comp.autoCompleteEmitter.emit).toHaveBeenCalledWith({event, column: 'column'});
  });

  it('Test onSelect method', () => {

    let column = new TableFormColumnModel('', '', null, '');
    let spy = spyOn(comp.autoCompleteOnSelectEmitter, 'emit')
      .and.callThrough();
    let event = '';
    comp.onSelect(event, 1, column);
    expect(comp.autoCompleteOnSelectEmitter.emit).toHaveBeenCalledWith({event, index: 1, column});
  });

  it('Checkbox test : select and unselect', () => {

    spyOn(comp, 'addItemToSelectedList').and.stub();
    spyOn(comp, 'removeItemFromSelectedList').and.stub();

    comp.rows[0].checked = true;
    comp.selectOrUnselectItem(comp.rows[0]);
    expect(comp.addItemToSelectedList).toHaveBeenCalledWith(comp.rows[0]);

    comp.rows[0].checked = false;
    comp.selectOrUnselectItem(comp.rows[0]);
    expect(comp.selectAllItems).toBeFalsy();
    expect(comp.removeItemFromSelectedList).toHaveBeenCalledWith(comp.rows[0]);
  });

  it('Test addItemToSelectedList', () => {

    comp.addItemToSelectedList(comp.rows[0]);

    expect(comp.selectedItems[0]).toBe(comp.rows[0]);

  });

  it('Test removeItemFromSelectedList', () => {

    comp.addItemToSelectedList(comp.rows[0]);
    comp.removeItemFromSelectedList(comp.rows[0]);

    expect(comp.selectedItems.length).toBe(0);

  });

  it('Test selectAllItem', () => {

    comp.selectAllItems = true;
    comp.selectAllItem();
    expect(comp.selectedItems[0]).toBe(comp.rows[0]);
    expect(comp.rows[0].checked).toBeTruthy();

    comp.selectAllItems = false;
    comp.selectAllItem();
    expect(comp.selectedItems.length).toBe(0);
    expect(comp.rows[0].checked).toBeFalsy();
  });

  it('clic on (\"trash\") should remove selected item and its controls', () => {

    comp.selectedItems.push(comp.rows[0]);

    let trash = de.query(By.css('#removeItem'));
    trash.nativeElement.click();
    expect(comp.selectedItems.length).toEqual(0);
    expect(comp.rows.length).toEqual(0);

    expect(comp.formGroup.controls['insert-unitPrice0']).toBeUndefined();
    expect(comp.formGroup.controls['insert-unitQuantity0']).toBeUndefined();
    expect(comp.formGroup.controls['insert-supplierName0']).toBeUndefined();
    expect(comp.formGroup.controls['insert-format0']).toBeUndefined();
    expect(comp.formGroup.controls['insert-color0']).toBeUndefined();
    expect(comp.formGroup.controls['insert-description0']).toBeUndefined();
  });

});
