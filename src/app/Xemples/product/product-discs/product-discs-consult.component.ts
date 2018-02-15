// Angular
import { Component, Input, OnInit } from '@angular/core';
// Models
import { ProductModel } from '../../../../../models/product.model';
import { TableConsultColumnModel } from '../../../../../models/table-consult-column.model';
// Decorators
import { Theme } from '../../../../../util/decorators/theme.decorator';
// Enum
import { FieldTypeEnum } from '../../../../../util/components/table-consult/field-type.enum';
import { AlignTypeEnum } from '../../../../../util/components/table-consult/align-type.enum';

// Component configuration
@Component({
  selector: 'sc-product-discs-consult-component',
  templateUrl: 'product-discs-consult.component.html',
  styleUrls: [
    'product-discs-consult.component.css'
  ]
})

export class DiscsProductConsultComponent implements OnInit {

  @Input() public product: ProductModel;
  @Theme() public theme: string;

  public productDiscsColumns: TableConsultColumnModel[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.buildTable();
  }

  private buildTable() {

    let columnDiscNumber = new TableConsultColumnModel('position', 'PRODUCT.PRODUCT_DISC.NO_COLUMN', FieldTypeEnum.MODEL, '100px');
    columnDiscNumber.textAlign = AlignTypeEnum.CENTER;

    let columnDiscEan = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.EAN_COLUMN', FieldTypeEnum.SUB_MODEL, '250px');
    columnDiscEan.subField = 'refEan';
    columnDiscEan.textAlign = AlignTypeEnum.CENTER;

    let columnDiscLabel = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.LABEL_COLUMN', FieldTypeEnum.SUB_MODEL, '335px');
    columnDiscLabel.subField = 'label';

    let columnDiscSupport = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.SUPPORT_COLUMN', FieldTypeEnum.SUB_SUB_MODEL, '120px');
    columnDiscSupport.subField = 'support';
    columnDiscSupport.subSubField = 'label';
    columnDiscSupport.textAlign = AlignTypeEnum.CENTER;

    let columnDiscPressing = new TableConsultColumnModel('disc', 'PRODUCT.PRODUCT_DISC.PRESSING_COLUMN', FieldTypeEnum.SUB_SUB_MODEL, '145px');
    columnDiscPressing.subField = 'pressingFormat';
    columnDiscPressing.subSubField = 'label';
    columnDiscPressing.textAlign = AlignTypeEnum.CENTER;

    this.productDiscsColumns.push(columnDiscNumber);
    this.productDiscsColumns.push(columnDiscEan);
    this.productDiscsColumns.push(columnDiscLabel);
    this.productDiscsColumns.push(columnDiscSupport);
    this.productDiscsColumns.push(columnDiscPressing);
  }
}
