/**
 * Created by mmichieli on 04/02/2018.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ArrayService {

  /** Check if a value is in array */
  public inArray(value: any, array: any): boolean {
    if (value === null || array === null) {
      return false;
    } else {
      return array.indexOf(value) !== -1;
    }
  }
}
