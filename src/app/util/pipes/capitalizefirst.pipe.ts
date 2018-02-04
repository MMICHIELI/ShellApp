/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from 'util';

/*
@Pipe({
  name: 'capitalizeFirst'
})
*/

@Pipe({
  name: 'myCapitalizeFirst'
})
export class CapitalizefirstPipe implements PipeTransform {

  constructor() {
  }

  public transform(value: string): string {
    if (value == null) {
      return '';
    }
    let valueArgs;

    let args = (value.split('-'));
    if (args.length === 2) {
      for (let i = 0; i < args.length; i++) {
        args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1).toLowerCase();
        valueArgs = args.join('-');
      }
    } else {
      args = value.split(' ');
      for (let i = 0; i < args.length; i++) {
        args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1).toLowerCase();
        valueArgs = args.join(' ');
      }
    }

    return valueArgs;
  }
}
