import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

//Para declarar los componentes que se usarán en el módulo
export const LOGIN_COMPONENTS = [
    LoginComponent
];

//Se construyen las rutas para acceder a cada uno de los componentes
const loginRoutes:Routes = [
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})

//Se exporta la clase
export class LoginRoutingModule { }
