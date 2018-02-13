/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myTrimString'})
export class TrimStringPipe implements PipeTransform {

  public transform(value: string, size: number, message: string): string {
    // Case 1: test value param
    if (value === null || value === undefined || value === '') {
      return value;
    }

    if (value.length < size) {
      return value;
    }

    const posSpace = value.indexOf(' ', size);
    if (posSpace !== -1) {
      return value.substring(0, posSpace) + ' ' + message;
    }

    return value.substring(0, size) + ' ' + message;
  }

}
