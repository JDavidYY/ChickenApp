import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ChefModule } from './chef/chef.module';
import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { CategoryModule } from './category/category.module';
//import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
//import { PromotionListComponent } from './promotion/pages/promotion-list/promotion-list.component';
//import { MenuComponent } from './purchase/pages/menu/menu.component';
//import { ComboEditComponent } from './combo/pages/combo-edit/combo-edit.component';
//import { ComboListComponent } from './combo/pages/combo-list/combo-list.component';
import { PurchaseModule } from './purchase/purchase.module';
import { PromotionModule } from './promotion/promotion.module';
import { ComboModule } from './combo/combo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    HomeModule,
    ChefModule,
    DeliveryboyModule,
    PurchaseModule,
    PromotionModule,
    CategoryModule,
    ComboModule,
    //ProductModule,
    ClientModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
