import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { SalesListComponent } from './pages/sales-list/sales-list.component';
import { TopListComponent } from './pages/top-list/top-list.component';
// se declara los componentes que se usaran en el modulo
export const SALES_COMPONENTS = [
    SalesListComponent,
    TopListComponent
];

const salesRoutes:Routes = [
	{
        path: 'sales',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: SalesListComponent
          },
          {
            path: 'top',
            component: TopListComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(salesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SalesRoutingModule { }
