import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PromotionListComponent } from './pages/promotion-list/promotion-list.component';
import { PromotionEditComponent } from './pages/promotion-edit/promotion-edit.component';
import { PROMOTION_COMPONENTS, PromotionRoutingModule } from './promotion-routing.module';
import { PromotionService } from './services/promotion.service';

// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        PROMOTION_COMPONENTS,
        PromotionListComponent,
        PromotionEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PromotionRoutingModule
    ],
    providers: [ 
        PromotionService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class PromotionModule {}