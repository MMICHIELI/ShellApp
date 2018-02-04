/**
 * Created by mmichieli on 04/02/2018.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ObservableUtilsService {

  constructor() {
    console.info('ObservableUtilsService mounted')
  }

  // Check if the observable is set before unsubscribe
  safeUnsubscribe(observables: any[]): void {
    observables
      .filter((obs) => (obs !== null && obs !== undefined))
      .forEach((obs) => obs.unsubscribe());
  }
}
