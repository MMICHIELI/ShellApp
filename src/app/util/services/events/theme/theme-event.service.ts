/**
 * Created by mmichieli on 04/02/2018.
 */
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ThemeEventsService {

  public switchThemeEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  // emit an event when local storage change
  public switchTheme() {
    this.switchThemeEmitter.emit();
  }
}
