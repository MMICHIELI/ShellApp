/**
 * Created by mmichieli on 04/02/2018.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'mySanitizeHtml'
})
export class SanitizeHtml implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  public transform(html: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
