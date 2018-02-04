/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'myLocalDateFormat' })
export class LocalDatePipe implements PipeTransform {
  constructor() {
  }

  public transform(value: string, currentLanguage: string, format: string): string {
    if (currentLanguage === 'en') {
      if (format === 'shortDate') {
        format = 'yyyy/MM/dd';
      } else if (format === 'short') {
        format = 'yyyy/MM/dd h:mm a';
      }
    }
    return new DatePipe(currentLanguage).transform(value, format);
  }
}
