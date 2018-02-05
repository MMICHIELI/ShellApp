import { FormControl } from '@angular/forms';
export class TableCellModel {

  public value: any;
  public inputType: string;
  public control: FormControl;

  constructor() {
    this.value = null;
    this.inputType = null;
    this.control = null;
  }

}
