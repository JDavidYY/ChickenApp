import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ComboListComponent } from './pages/combo-list/combo-list.component';
import { ComboEditComponent } from './pages/combo-edit/combo-edit.component';
import { ComboRoutingModule, COMBO_COMPONENTS } from './combo-routing.module';
import { ComboService } from './services/combo.service';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        COMBO_COMPONENTS,
        ComboListComponent,
        ComboEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ComboRoutingModule
    ],
    providers: [ 
        ComboService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class ComboModule {}