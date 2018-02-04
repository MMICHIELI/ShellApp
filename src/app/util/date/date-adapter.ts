/**
 * Created by mmichieli on 04/02/2018.
 */
import { NativeDateAdapter } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {

  constructor(public translateService: TranslateService) {
    super();
    this.locale = this.translateService.currentLang;
    this.setLocale(this.translateService.currentLang);
  }

  public format(date: Date, displayFormat: Object): string {

    this.locale = this.translateService.currentLang;
    if (displayFormat === 'input') {
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();
      if (+month < 10) {
        month = '0' + month;
      }
      if (+day < 10) {
        day = '0' + day;
      }
      const year = date.getFullYear();
      if (this.translateService.currentLang === 'en') {
        return `${year}/${month}/${day}`;
      } else if (this.translateService.currentLang === 'fr') {
        return `${day}/${month}/${year}`;
      } else if (this.translateService.currentLang === 'de') {
        return `${day}.${month}.${year}`;
      }
    } else {
      return super.format(date, displayFormat);
    }
  }
}
