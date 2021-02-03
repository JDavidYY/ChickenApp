import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DeliveryboyService } from './services/deliveryboy.service';
import { DeliveryboyEditComponent } from './pages/deliveryboy-edit/deliveryboy-edit.component';
import { DeliveryboyListComponent } from './pages/deliveryboy-list/deliveryboy-list.component';
import { DeliveryboyRoutingModule, DELIVERYBOY_COMPONENTS } from './deliveryboy-routing.module';
import { CompanyService } from './services/company.service';
// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        DELIVERYBOY_COMPONENTS,
        DeliveryboyListComponent,
        DeliveryboyEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        DeliveryboyRoutingModule
    ],
    providers: [ 
        DeliveryboyService,
        CompanyService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class DeliveryboyModule {}