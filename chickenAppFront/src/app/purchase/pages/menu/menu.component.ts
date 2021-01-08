import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../../dialogos/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientModel } from 'src/app/client/models/client-info.model';
import { CategoryService } from 'src/app/category/services/category.service';
import { CategoryModel } from 'src/app/category/models/category-info.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  client: ClientModel = null;
  dishes: CategoryModel = null;
  
  constructor(private router:Router, private dialog:MatDialog, private categoryservice: CategoryService) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }

  goShoppingCart():void
  {
    this.router.navigate(['/purchase/shopping-cart']);
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.clear();
    }
  
  changePassword(){
    this.dialog.open(ChangePasswordComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'custom-dialog-container' });
  }
  
  changeData(){
    this.client.idClient = localStorage.getItem("idClient");
    this.router.navigate(['/client/editar', this.client.idClient ]);
  }

  cargarCategorias(){
    this.categoryservice.seleccionarCategories()
    .subscribe(
        (response) => {
            console.log(response);
            if (response != null && response.ok && response.result != null){
                this.dishes = response.result;
            }
        },
        (err) => {
            console.log(err);
        }
    );
  }
}
