import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ORDER_COMPONENTS, OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderService } from './services/order.service';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        ORDER_COMPONENTS,
        OrderListComponent
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
