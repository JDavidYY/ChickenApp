import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

// se declara los componentes que se usaran en el modulo
export const CATEGORY_COMPONENTS = [
    CategoryListComponent,
    CategoryEditComponent
];

// se arma el path segun el componente que queremos mostrar
const categoryRoutes:Routes = [
	{
        path: 'category',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: CategoryListComponent
          },
          {
            path: 'agregar',
            component: CategoryEditComponent
          },
          {
            path: 'editar/:category_id',
            component: CategoryEditComponent
          }     
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class CategoryRoutingModule { }