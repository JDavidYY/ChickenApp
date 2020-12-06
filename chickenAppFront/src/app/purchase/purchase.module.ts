import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './pages/menu/menu.component';
import { PurchaseRoutingModule, PURCHASE_COMPONENTS } from './purchase-routing.module';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        PURCHASE_COMPONENTS,
        MenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PurchaseRoutingModule
    ],
    providers: [ 
        // PurchaseService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class PurchaseModule {}