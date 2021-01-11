import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { PromotionListComponent } from './pages/promotion-list/promotion-list.component';

// se declara los componentes que se usaran en el modulo
export const PROMOTION_COMPONENTS = [
    PromotionListComponent
];

// se arma el path segun el componente que queremos mostrar
const promotionRoutes:Routes = [
	{
        path: 'promotion',
        component: ContainerComponent,
        children: [
          {
            path: 'listado',
            component: PromotionListComponent
          },
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(promotionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class PromotionRoutingModule { }
