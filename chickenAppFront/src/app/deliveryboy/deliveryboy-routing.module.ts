import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from '../shared/components/container/container.component';
import { DeliveryboyEditComponent } from './pages/deliveryboy-edit/deliveryboy-edit.component';
import { DeliveryboyListComponent } from './pages/deliveryboy-list/deliveryboy-list.component';

// se declara los componentes que se usaran en el modulo
export const DELIVERYBOY_COMPONENTS = [
    DeliveryboyListComponent,
    DeliveryboyEditComponent
];

// se arma el path segun el componente que queremos mostrar
const deliveryboyRoutes:Routes = [
	{
        path: 'deliveryboy',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: DeliveryboyListComponent
          },
          {
            path: 'agregar',
            component: DeliveryboyEditComponent
          },
          {
            path: 'editar/:deliveryboy_id',
            component: DeliveryboyEditComponent
          }     
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(deliveryboyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class DeliveryboyRoutingModule { }