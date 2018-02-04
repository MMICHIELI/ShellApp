/**
 * Created by mmichieli on 04/02/2018.
 */
import { AbstractControl, ValidatorFn } from '@angular/forms';
export class NumberValidator {

  /**
   *
   * @returns {(control:AbstractControl)=>{}}
   */
  // Tests if a number is negative or not. Returns true in case of negative numbers
  public static validatorNumberNegative(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value === null || +control.value === 0) {
        return null;
      } else {
        let numberWithoutSpaces = control.value.toString().replace(/ /g, '').replace(',', '.');
        if (+numberWithoutSpaces >= 0) {
          return null;
        } else {
          return { validatorNumberNegative: true };
        }
      }
    };
  }

  // Tests if a number is a valid percentage value (between 0 and 100)
  public static validatorNumberValidPercentage(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value == null) {
        return null;
      }
      let numberWithoutComma = control.value.toString().replace(',', '.');
      if (+numberWithoutComma >= 0 && +numberWithoutComma <= 100) {
        return null;
      } else if (+control.value >= 0 && +control.value <= 100) {
        return null;
      } else {
        return { validatorNumberValidPercentages: true };
      }
    };
  }

  // tests if a number is not an integer(it contains another characters than digits and -). If the number is not an integer, it will return true.
  // Also tests if a number starts with 0. If the number starts with 0 -> return true
  public static validatorNumberInteger(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value === '' || control.value === undefined) {
        return null;
      } else if (+control.value === 0) {
        return null;
      } else if (control.value !== null) {
        let numberWithoutSpaces = control.value.toString().replace(/ /g, '');
        let myRegexNoDecimal = new RegExp(/^-?^[1-9]\d*$/, 'i');
        if (!myRegexNoDecimal.test(numberWithoutSpaces)) {
          return { validatorNumberInteger: true };
        }
      } else {
        return null;
      }
    };
  }

  // tests if a number is lesser than another number
  public static validatorNumberLesserThanAnother(anotherValue: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value === null) {
        return null;
      } else {
        let numberWithoutSpaces = control.value.toString().replace(/ /g, '').replace(',', '.');
        if (+numberWithoutSpaces <= anotherValue) {
            return null;
        } else {
          return { validatorNumberLesserThanAnother: true };
        }
      }
    };
  }

  constructor() {
  }

}
