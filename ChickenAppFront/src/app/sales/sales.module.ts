import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TopListComponent } from './pages/top-list/top-list.component';
import { SalesListComponent } from './pages/sales-list/sales-list.component';
import { SalesRoutingModule, SALES_COMPONENTS } from './sales-routing.module';
import { SalesService } from './services/sales.service';

@NgModule({
    declarations: [
        SALES_COMPONENTS,
        SalesListComponent,
        TopListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SalesRoutingModule
    ],
    providers: [
        SalesService
    ],
    entryComponents: [
    ]
  })

  export class SalesModule {}
