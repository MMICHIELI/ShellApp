import { FieldTypeEnum } from '../util/components/table-consult/field-type.enum';
import { AlignTypeEnum } from '../util/components/table-consult/align-type.enum';

export class TableConsultColumnModel {

  // Specify the field to display
  public field: string;

  // If the field is an object, specify the sub field of the object to display
  public subField: string;

  // If the sub field is an object, specify the sub sub field of the object to display
  public subSubField: string;

  // If the sub sub field is an object, specify the sub sub sub field of the object to display
  public subSubSubField: string;

  // The label is a trad KEY which will be display in the header
  public label: string;

  // The input type determine the type of the field
  public fieldType: FieldTypeEnum;

  // the width of the column
  public columnWidth: string;

  // the alignement of the data in the column: left (default), center or right
  public textAlign: AlignTypeEnum = AlignTypeEnum.LEFT;

  constructor(field: string, label: string, fieldType: FieldTypeEnum, columnWidth: string) {
    this.field = field;
    this.label = label;
    this.fieldType = fieldType;
    this.columnWidth = columnWidth;
  }
}
