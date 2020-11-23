import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductService } from './services/product.service';
import { ProductRoutingModule, PRODUCT_COMPONENTS } from './product-routing.module';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        PRODUCT_COMPONENTS,
        ProductListComponent,
        ProductEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ProductRoutingModule
    ],
    providers: [ 
        ProductService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class ProductModule {}