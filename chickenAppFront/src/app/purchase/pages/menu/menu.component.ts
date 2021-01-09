import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../../dialogos/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientModel } from 'src/app/client/models/client-info.model';
import { CategoryService } from 'src/app/category/services/category.service';
import { CategoryModel } from 'src/app/category/models/category-info.model';
import { ProductModel } from 'src/app/product/models/product-info.model';
import { ProductService } from 'src/app/product/services/product.service';
import { AddToCartComponent } from '../../dialogos/add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  client: ClientModel = null;
  categories: CategoryModel = null;
  products: ProductModel = null;

  constructor(private router:Router, private dialog:MatDialog, private categoryservice: CategoryService, private productservice: ProductService) { }

  ngOnInit(): void {
    this.cargarCategories();
    this.cargarProducts(1);
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
    /*antiguo*/
    /*this.dialog.open(ChangePasswordComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'custom-dialog-container' });*/
    /*nuevo: se cambio custom-dialog-container por myapp-no-padding-dialog*/
    this.dialog.open(ChangePasswordComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'myapp-no-padding-dialog' });
  }

  changeData(){
    let cliente = localStorage.getItem("idClient");
    this.router.navigate(['/client/editar', cliente ]);
  }

  cargarCategories(){
    this.categoryservice.seleccionarCategories()
    .subscribe(
        (response) => {
            console.log(response);
            if (response != null && response.ok && response.result != null){
                this.categories = response.result;
            }
        },
        (err) => {
            console.log(err);
        }
    );
  }

  cargarProducts(idCategory:number){
    this.productservice.seleccionarProductsByCategory(idCategory)
    .subscribe(
      (response) => {
          console.log(response);
          if (response != null && response.ok && response.result != null){
              this.products = response.result;
          }
      },
      (err) => {
          console.log(err);
      }
  );
  }

  pedirProduct(item:ProductModel)
  {
    let dialogRef = this.dialog.open(AddToCartComponent,{autoFocus: false,panelClass: 'myapp-no-padding-dialog'});
    //nuevo codigo
      let instance = dialogRef.componentInstance;
      instance.product = item;
      console.log(instance);
  }
}
