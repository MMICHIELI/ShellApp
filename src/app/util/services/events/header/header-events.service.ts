/**
 * Created by mmichieli on 04/02/2018.
 */
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class HeaderEventsService {

  public toggleMenu: EventEmitter<any> = new EventEmitter<any>();
  public toggleLight: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  public menuSwitch() {
    console.log('Menu switch');
    this.toggleMenu.emit();
  }

  public lightSwitch() {
    this.toggleLight.emit();
  }
}
