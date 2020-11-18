import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CHEF_COMPONENTS, ChefRoutingModule } from './chef-routing.module';
import { ChefListComponent } from './pages/chef-list/chef-list.component';
import { ChefEditComponent } from './pages/chef-edit/chef-edit.component';
import { ChefService } from './services/chef.service';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        CHEF_COMPONENTS,
        ChefListComponent,
        ChefEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ChefRoutingModule
    ],
    providers: [ 
        ChefService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class ChefModule {}