import { convertMetaToOutput } from '@angular/compiler/src/render3/util';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { ComboService } from 'src/app/combo/services/combo.service';
import { ProductModel } from 'src/app/product/models/product-info.model';
//import { runInThisContext } from 'vm';
import { OrderProductsModel } from '../../models/order-products-info.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() product: ProductModel;
  // order: OrderModel = new OrderModel();
  orderProducts: OrderProductsModel = new OrderProductsModel();
  productos: ProductModel = null;
  esCombo:boolean=false;

  constructor(public dialogRef: MatDialogRef<AddToCartComponent>, private router:Router, private comboservice: ComboService) { }

  ngOnInit(): void {
    console.log(this.product);
    if(this.product.image_type=="combo")
    {
      console.log("Es un combo");
      this.esCombo=true;
      this.cargarProductos(this.product.idCombo);
    }
  }

  addToCart()
  {
    // this.data = {idProduct:"1", name:"comida",price:"5", cantidad: "65", description:"hola mundo", image_name:"a"};
    if (localStorage.getItem("orderProducts")!= null){
      if((JSON.parse(localStorage.getItem("orderProducts")) instanceof Array)){
        let data = JSON.parse(localStorage.getItem("orderProducts"));
        data.push({idProduct:this.product.idProduct, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_name:this.product.image_name});
        console.log("aqui vab kis oriductis");
        console.log(this.product.idProduct);
        console.log("aqui va la cantidad");
        console.log(this.orderProducts.cantidad);
        console.log("aqui termnina la pruebna");
        localStorage.setItem("orderProducts", JSON.stringify(data));
      } else{
        let data = [JSON.parse(localStorage.getItem("orderProducts"))];
        data.push({idProduct:this.product.idProduct, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_name:this.product.image_name});
        console.log("aqui vab kis oriductis");
        console.log(this.product.idProduct);
        console.log("aqui va la cantidad");
        console.log(this.orderProducts.cantidad);
        console.log("aqui termnina la pruebna");
        localStorage.setItem("orderProducts", JSON.stringify(data));

      }

    } else {
      let data = {idProduct:this.product.idProduct, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_name:this.product.image_name};
      localStorage.setItem("orderProducts", JSON.stringify(data));
      console.log("aqui vab kis oriductis");
      console.log(this.product.idProduct);
      console.log("aqui va la cantidad");
      console.log(this.orderProducts.cantidad);
      console.log("aqui termnina la pruebna");
    }

    this.dialogRef.close();

    //   this.dataSourceOne.data = data;
    //   this.dataSourceOne.paginator = this.tableOnePaginator;
    //   this.dataSourceOne.sort = this.tableOneSort;
  }

  cargarProductos(idCombo:string)
  {
    console.log(idCombo);
    this.comboservice.selectProducts(idCombo)
        .subscribe(
            (response) => {
                console.log(response);
                if ( response != null && response.ok && response.result != null){
                  this.productos=response.result;
                }
            },
            (err) => {
                console.log(err);
            }
        );
  }

}
