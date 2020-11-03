import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './services/login.service';
import { LoginComponent } from './pages/login/login.component';
import { LOGIN_COMPONENTS, LoginRoutingModule } from './login-routing.module';

//Se declaran los componentes y se importan algunos componentes como en "SharedModule"
@NgModule({
    declarations: [
        LOGIN_COMPONENTS,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        SharedModule
    ],
    providers: [
        LoginService,
        DatePipe
    ]
  })

  //Se exporta la clase al componente "app.module.ts"
  export class LoginModule {}
