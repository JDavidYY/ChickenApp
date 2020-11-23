import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
// se declara los componentes que se usaran en el modulo
export const PRODUCT_COMPONENTS = [
    ProductListComponent,
    ProductEditComponent
];

// se arma el path segun el componente que queremos mostrar
const productRoutes:Routes = [
	{
        path: 'product',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: ProductListComponent
          },
          {
            path: 'agregar',
            component: ProductEditComponent
          },
          {
            path: 'editar/:product_id',
            component: ProductEditComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class ProductRoutingModule { }
