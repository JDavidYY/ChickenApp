import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ORDER_COMPONENTS, OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderService } from './services/order.service';
import { OrderListChefComponent } from './pages/order-list-chef/order-list-chef.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { DetalleProductComponent } from './dialogos/detalle-product/detalle-product.component';
//import { OrderListDeliveryboyComponent } from './pages/order-list-deliveryboy/order-list-deliveryboy.component';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        ORDER_COMPONENTS,
        OrderListComponent,
        OrderListChefComponent,
        OrderDetailComponent,
        DetalleProductComponent
        //OrderListDeliveryboyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        OrderRoutingModule
    ],
    providers: [
        OrderService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class OrderModule {}
