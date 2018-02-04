/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform, WrappedValue } from '@angular/core';
@Pipe({ name: 'myAddSpacesInputPipe' })

export class FormatNumberInput implements PipeTransform {

  public transform(numberValue: any): any {
    if (numberValue === null || numberValue < 0 || isNaN(numberValue)) {
      return null;
    }
    numberValue = numberValue.toString();

    // remove spaces
    numberValue = numberValue.replace(/ /g, '');

    // add spaces
    numberValue = numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return WrappedValue.wrap(numberValue).wrapped;
  }
}
