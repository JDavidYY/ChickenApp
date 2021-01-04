import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { ComboEditComponent } from './pages/combo-edit/combo-edit.component';
import { ComboListComponent } from './pages/combo-list/combo-list.component';
import { ComboVerproductosComponent } from './pages/combo-verproductos/combo-verproductos.component';

// se declara los componentes que se usaran en el modulo
export const COMBO_COMPONENTS = [
    ComboListComponent,
    ComboEditComponent
];

// se arma el path segun el componente que queremos mostrar
const comboRoutes:Routes = [
	{
        path: 'combo',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: ComboListComponent
          },
          {
            path: 'agregar',
            component: ComboEditComponent
          },
          {
            path: 'verproductos/:combo_id',
            component: ComboVerproductosComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(comboRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class ComboRoutingModule { }
