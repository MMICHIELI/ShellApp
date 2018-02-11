// Angular
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const firstModuleRoutes: Routes = [
  {
    path: 'example',
    loadChildren: './modules/example/example.module#ExampleModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(firstModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FirstRoutingModule {}
