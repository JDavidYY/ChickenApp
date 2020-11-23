import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule, CLIENT_COMPONENTS } from './client-routing.module';
import { ClientService } from './services/client.service';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';


// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        CLIENT_COMPONENTS,
        ClientEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ClientRoutingModule
    ],
    providers: [ 
        ClientService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class ClientModule {}