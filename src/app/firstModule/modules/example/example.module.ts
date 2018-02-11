// Angular
import { NgModule } from '@angular/core';
// Modules
import { UtilModule } from '../../../util';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule({
  imports: [
    UtilModule,
    ExampleRoutingModule
  ],
  declarations: [

  ],
  providers: [
     // Any Services Reposirories used
  ]
})
export class ExampleModule {}
