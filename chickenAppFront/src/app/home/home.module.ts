import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HOME_COMPONENTS, HomeRoutingModule } from './home-routing.module';
import { HomeService } from './services/home.service';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        HOME_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule
    ],
    providers: [ 
        HomeService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class HomeModule {}