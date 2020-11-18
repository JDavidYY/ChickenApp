import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuHomeComponent } from './pages/menu-home/menu-home.component';
import { NavHomeComponent } from './pages/nav-home/nav-home.component';


// se declara los componentes que se usaran en el modulo
export const HOME_COMPONENTS = [
    MenuHomeComponent,
    NavHomeComponent
];

// se arma el path segun el componente que queremos mostrar
const homeRoutes:Routes = [
	{
        path: '',
        component: NavHomeComponent,
        children: [
          {
            path: '',
            component: MenuHomeComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
