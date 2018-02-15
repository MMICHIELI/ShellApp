// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

// Module
import { UtilModule } from '../../util.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Fragment
import { TableConsultFragment } from './table-consult.fragment';

// Enum
import { FieldTypeEnum } from './field-type.enum';

// Models
import { TableConsultColumnModel } from '../../../models/table-consult-column.model';
import { ProductDiscModel } from '../../../models/product-disc.model';

describe('Test table consult fragment', () => {

  // Elements
  let de: DebugElement;

  // TestBed Component
  let comp: TableConsultFragment;
  let fixture: ComponentFixture<TableConsultFragment>;

  // Asynchronous beforeEach()
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilModule.forRoot(), TranslateModule.forRoot(), BrowserAnimationsModule]
    });
  }));

  // Synchronous beforeEach()
  beforeEach(() => {
    fixture = TestBed.createComponent(TableConsultFragment);
    comp = fixture.componentInstance;
    comp.columns = [];
    comp.rows = [];
    comp.withCheckBoxes = true;

    let columnDiscNumber = new TableConsultColumnModel('position', 'PRODUCT.PRODUCT_DISC.NO_COLUMN', FieldTypeEnum.MODEL, '100px');

    let columnDiscEan = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.EAN_COLUMN', FieldTypeEnum.SUB_MODEL, '250px');
    columnDiscEan.subField = 'refEan';

    let columnDiscLabel = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.LABEL_COLUMN', FieldTypeEnum.SUB_MODEL, '335px');
    columnDiscLabel.subField = 'label';

    let columnDiscSupport = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.SUPPORT_COLUMN', FieldTypeEnum.SUB_SUB_MODEL, '120px');
    columnDiscSupport.subField = 'support';
    columnDiscSupport.subSubField = 'label';

    let columnDiscPressing = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.PRESSING_COLUMN', FieldTypeEnum.SUB_SUB_MODEL, '145px');
    columnDiscPressing.subField = 'pressingFormat';
    columnDiscPressing.subSubField = 'label';

    comp.columns.push(columnDiscNumber);
    comp.columns.push(columnDiscEan);
    comp.columns.push(columnDiscLabel);
    comp.columns.push(columnDiscSupport);
    comp.columns.push(columnDiscPressing);

    comp.rows.push(new ProductDiscModel());

    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('Checkbox test : select and unselect', () => {

    spyOn(comp, 'addItemToSelectedList').and.stub();
    spyOn(comp, 'removeItemFromSelectedList').and.stub();

    comp.rows[0].checked = true;
    comp.selectOrUnselectItem(comp.rows[0]);
    expect(comp.addItemToSelectedList).toHaveBeenCalledWith(comp.rows[0]);

    comp.rows[0].checked = false;
    comp.selectOrUnselectItem(comp.rows[0]);
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

});
