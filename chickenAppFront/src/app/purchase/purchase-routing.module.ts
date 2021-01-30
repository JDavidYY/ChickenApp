import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from '../shared/components/container/container.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderActiveComponent } from './pages/order-active/order-active.component';
import { OrderEditComponent } from './pages/order-edit/order-edit.component';
import { OrdersHistoryComponent } from './pages/orders-history/orders-history.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

// se declara los componentes que se usaran en el modulo
export const PURCHASE_COMPONENTS = [
    MenuComponent,
    ShoppingCartComponent,
    OrderEditComponent,
    OrdersHistoryComponent
];

// se arma el path segun el componente que queremos mostrar
const purchaseRoutes:Routes = [
	{
        path: 'purchase',
        // component: ContainerComponent,
        children: [
          {
            path: 'menu',
            component: MenuComponent
          },
          {
            path: 'shopping-cart',
            component: ShoppingCartComponent
          },
          {
            path: 'order-edit',
            component: OrderEditComponent
          },
          {
            path: 'order-edit',
            component: OrderEditComponent
          },
          {
            path: 'orders-history',
            component: OrdersHistoryComponent
          },
          {
            path: 'order-active',
            component: OrderActiveComponent
          }
          // {
          //   path: 'shopping-cart',
          //   component: ShoppingCartComponent
          // }
          // {
          //   path: 'editar/:deliveryboy_id',
          //   component: DeliveryboyEditComponent
          // }     
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(purchaseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class PurchaseRoutingModule { }