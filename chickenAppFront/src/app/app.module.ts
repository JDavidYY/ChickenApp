import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DeliveryboyListComponent } from './deliveryboy/pages/deliveryboy-list/deliveryboy-list.component';
import { DeliveryboyEditComponent } from './deliveryboy/pages/deliveryboy-edit/deliveryboy-edit.component';
import { ChefModule } from './chef/chef.module';
import { DeliveryboyModule } from './deliveryboy/deliveryboy.module';


@NgModule({
  declarations: [
    AppComponent,
    ChefModule,
    DeliveryboyModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    DashboardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
