/**
 * Created by mmichieli on 04/02/2018.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class RegexService {

  public isDecimalOrNegative(numberToCheck: number = null): boolean {
    if (numberToCheck == null) {
      return false;
    } else {
      let myRegexNoDecimal = new RegExp(/^\d+$/, 'i');
      if (!myRegexNoDecimal.test(numberToCheck.toString())) {
        return true;
      }
    }
    return false;
  }
}
