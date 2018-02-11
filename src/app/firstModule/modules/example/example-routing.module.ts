// Angular
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const exampleRoutes: Routes = [
  {}
];
@NgModule({
  imports: [
    RouterModule.forChild(exampleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExampleRoutingModule {}
