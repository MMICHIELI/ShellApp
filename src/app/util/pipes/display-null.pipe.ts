/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDisplayNullPipe'})
export class DisplayNullPipe implements PipeTransform {

  public transform(value: any, fieldName: string): any {
    // Case 1: test value param
    if (fieldName === null || fieldName === undefined) {
      return this.returnCorrectFormat(value);
    } else {
      // Case 2: test sub attribut value
      if (value !== null && value !== undefined) {
        return this.returnCorrectFormat(value[fieldName]);
      } else {
        return '-';
      }
    }
  }

  public returnCorrectFormat(object: any) {
    if (object === null || object === undefined || object === '') {
      return '-';
    } else {
      return object;
    }
  }
}
