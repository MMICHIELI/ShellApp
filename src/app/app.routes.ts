import { Routes } from '@angular/router';
import { DashboardTemplate } from './core/templates/dashboard/dashboard.template';
import { ErrorsComponent } from './error/errors.component';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardTemplate
  },
  {
    path: 'shell1',
    loadChildren: './shell1#Shell1Module'
  },
  {
    path: 'shell2',
    loadChildren: './shell2#Shell2Module'
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**'},
];
