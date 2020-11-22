import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ChefModule } from './chef/chef.module';
<<<<<<< Updated upstream
//import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
=======
import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent
<<<<<<< Updated upstream
    //DeliveryboyModule
=======
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
<<<<<<< Updated upstream
    ChefModule,
    SharedModule
=======
    SharedModule,
    HomeModule,
    ChefModule,
    DeliveryboyModule,
    CategoryModule,
    ProductModule,
    ClientModule,
    LoginModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
