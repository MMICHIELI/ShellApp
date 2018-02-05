import { InputTypeEnum } from '../util/components/table-form/input-type.enum';

/**
 * Created by gbray on 25/04/2017.
 */
export class TableFormColumnModel {

  // The name of a column must be the exact name of the field it will display
  public name: string;
  // The label is a trad KEY which will be display in the header
  public label: string;
  // The input type determine the type of input which will be displayed in a column
  public inputType: InputTypeEnum;
  // The selectValues must be filled if the input type is 'SELECT'. They represent the options of the select
  public selectValues: any[];
  // the suggestions are the suggestions displayed for the auto complete field
  public suggestions: any[];
  // the fieldToDisplay is the name of the field to display for the suggestions (ex: companyOrPersonName for SupplierModel)
  public fieldToDisplay;
  // the width of the column
  public columnWidth: string;
  // max lenght for input text
  public maxLength: number;
  // is the field mandatory?
  public isMandatory: boolean = false;
  // number of decimal after ","
  public decimalNumber: number = 0;
  // if the field is an object, specify the field of the object to display
  public objectField: string;
  // if the field is an object of a sub object, specify the sub object of the object
  public subObject: any;
  // if the field is an object of a sub object if a sub object, specify the sub object of the sub object
  public subSubObject: any;

  public fieldToSave: string;

  public filteredList: any;
  // Pattern used for duration
  public pattern: string;

  constructor(name: string, label: string, inputType: InputTypeEnum, columnWidth: string) {
    this.name = name;
    this.label = label;
    this.inputType = inputType;
    this.columnWidth = columnWidth;
  }
}
