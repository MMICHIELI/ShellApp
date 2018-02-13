/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mySpacesNumberPipe'})
export class SpacesNumberPipe implements PipeTransform {

  public transform(value: any): any {
    // we remove all spaces
    const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return newValue;
  }
}
