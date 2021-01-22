import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { ContainerComponent } from '../shared/components/container/container.component';
import { OrderListChefComponent } from './pages/order-list-chef/order-list-chef.component';
import { OrderListDeliveryboyComponent } from './pages/order-list-deliveryboy/order-list-deliveryboy.component';

// se declara los componentes que se usaran en el modulo
export const ORDER_COMPONENTS = [
    OrderListComponent,
    OrderListChefComponent,
    OrderListDeliveryboyComponent
];

// se arma el path segun el componente que queremos mostrar
const orderRoutes:Routes = [
	{
        path: 'order',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: OrderListComponent
          },
          {
            path: 'listado-chef',
            component: OrderListChefComponent
          },
          {
            path: 'listado-deliveryboy',
            component: OrderListDeliveryboyComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class OrderRoutingModule { }
