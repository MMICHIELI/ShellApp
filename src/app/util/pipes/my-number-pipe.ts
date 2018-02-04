/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';

const PADDING = '000000';

@Pipe({name: 'myNumberFormat'})
export class MyNumberPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor() {
    // TODO comes from configuration settings
    this.DECIMAL_SEPARATOR = '.';
    this.THOUSANDS_SEPARATOR = ' ';
  }

  public transform(value: number | string, fractionSize: number): string {

    if (value !== '') {
      let [integer, fraction = ''] = (value || '').toString()
        .split(this.DECIMAL_SEPARATOR);

      fraction = fractionSize > 0
        ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
        : '';

      // integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
      return integer + fraction;
    } else {
      return null;
    }
  }

  public parse(value: string, fractionSize: number): string {
    let [integer, fraction = ''] = (value || '').split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : '';

    return integer + fraction;
  }

}
