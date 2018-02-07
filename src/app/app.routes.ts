import { Routes } from '@angular/router';
import { DashboardTemplate } from './core/templates/dashboard/dashboard.template';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardTemplate
  },
  // {
  //   path: 'first',
  //   loadChildren: './first#FirstModule'
  // },
  // {
  //   path: 'second',
  //   loadChildren: './second#SecondModule'
  // },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
