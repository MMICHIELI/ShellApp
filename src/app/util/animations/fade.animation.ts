/**
 * Created by mmichieli on 04/02/2018.
 */
// import the required animation functions from the angular animations module
import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [
    state('void', style({position: 'absolute', width: '100%'})),
    state('*', style({position: 'absolute', width: '100%'})),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({opacity: 0}),
      animate('0.2s ease-in-out', style({opacity: 1}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({opacity: 1}),
      animate('0.2s ease-in-out', style({opacity: 0}))
    ])
  ]);
