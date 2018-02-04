/**
 * Created by mmichieli on 04/02/2018.
 */
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PopinService {

  // Right popin
  public openRightPopinEmitter: EventEmitter<any> = new EventEmitter();
  public closeRightPopinEmitter: EventEmitter<any> = new EventEmitter();

  // Bottom popin
  public openBottomPopinEmitter: EventEmitter<any> = new EventEmitter();
  public closeBottomPopinEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public openRightPopin() {
    this.openRightPopinEmitter.emit();
  }
  public closeRightPopin() {
    this.closeRightPopinEmitter.emit();
  }

  public openBottomPopin() {
    this.openBottomPopinEmitter.emit();
  }

  public closeBottomPopin() {
    this.closeBottomPopinEmitter.emit();
  }
}
