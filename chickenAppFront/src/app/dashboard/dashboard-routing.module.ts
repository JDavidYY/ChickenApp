import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const DASHBOARD_COMPONENTS = [
    DashboardComponent
];

const dashboardRoutes:Routes = [
	{
      path: 'principal',
      component: ContainerComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
