// Angular
import { NgModule } from '@angular/core';
// Modules
import { UtilModule } from '../util';
import { FirstRoutingModule } from './first-routing.module';

@NgModule({
  imports: [
    UtilModule,
    FirstRoutingModule
  ]
})
export class FirstModule {
}
