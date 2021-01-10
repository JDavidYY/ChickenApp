import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';

// se declara los componentes que se usaran en el modulo
export const CLIENT_COMPONENTS = [
    ClientEditComponent
];

// se arma el path segun el componente que queremos mostrar
const clientRoutes:Routes = [
	{
        path: 'client',
        component: ClientEditComponent,
        children: [
          {
            path: 'editar/:client_id',
            component: ClientEditComponent
          },
          {
            path: 'agregar',
            component: ClientEditComponent
          },
    ]
        
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(clientRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class ClientRoutingModule { }