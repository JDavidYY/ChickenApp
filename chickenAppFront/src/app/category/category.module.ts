import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './services/category.service';
import { CategoryRoutingModule, CATEGORY_COMPONENTS } from './category-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';


// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        CATEGORY_COMPONENTS,
        CategoryListComponent,
        CategoryEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CategoryRoutingModule
    ],
    providers: [ 
        CategoryService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class CategoryModule {}