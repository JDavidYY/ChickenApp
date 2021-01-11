import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PromotionListComponent } from './pages/promotion-list/promotion-list.component';
import { PROMOTION_COMPONENTS, PromotionRoutingModule } from './promotion-routing.module';
import { PromotionService } from './services/promotion.service';
import { PromotionEditComponent } from './components/promotion-edit/promotion-edit.component';

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
    ],
    entryComponents: [PromotionEditComponent]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class PromotionModule {}
