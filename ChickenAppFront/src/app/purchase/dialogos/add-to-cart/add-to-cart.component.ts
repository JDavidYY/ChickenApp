import { convertMetaToOutput } from '@angular/compiler/src/render3/util';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { ComboService } from 'src/app/combo/services/combo.service';
import { ProductModel } from 'src/app/product/models/product-info.model';
// import { runInThisContext } from 'vm';
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

  cantidadFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(9),
    Validators.maxLength(1)
    ]);

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

    // validacion de campos para que no sean vacios
    if(!this.orderProducts.cantidad){  
        return;
    }
    else {
      if (!this.orderProducts.cantidad ) {
        return;
    }
 // validacion de campos para que no sean incorrectos mediante FormControl
  if(this.cantidadFormControl.invalid){
      return;
  }
  else{
    if (this.cantidadFormControl.invalid)
        return;
      }
  }


    // this.data = {idProduct:"1", name:"comida",price:"5", cantidad: "65", description:"hola mundo", image_name:"a"};
    if (localStorage.getItem("orderProducts")!= null){
      if((JSON.parse(localStorage.getItem("orderProducts")) instanceof Array)){
        if(this.product.image_type=="combo" && this.orderProducts.cantidad<"10"){
          let data = JSON.parse(localStorage.getItem("orderProducts"));
          data.push({idProduct:this.product.idCombo, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_type:this.product.image_type});
          localStorage.setItem("orderProducts", JSON.stringify(data));
        } else {
          let data = JSON.parse(localStorage.getItem("orderProducts"));
          data.push({idProduct:this.product.idProduct, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_type:this.product.image_type}); 
          localStorage.setItem("orderProducts", JSON.stringify(data));
        }
        
        
      } else{
        if(this.product.image_type=="combo" && this.orderProducts.cantidad<"10"){
          
          let data = [JSON.parse(localStorage.getItem("orderProducts"))];
          data.push({idProduct:this.product.idCombo, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_type:this.product.image_type});
          
          localStorage.setItem("orderProducts", JSON.stringify(data));
          
        } else {
          let data = [JSON.parse(localStorage.getItem("orderProducts"))];
          data.push({idProduct:this.product.idProduct, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_type:this.product.image_type});
          
          localStorage.setItem("orderProducts", JSON.stringify(data));
          
        }
        

      }

    } else {
      if(this.product.image_type=="combo" && this.orderProducts.cantidad<"10"){
        let data = {idProduct:this.product.idCombo, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_type:this.product.image_type};
        localStorage.setItem("orderProducts", JSON.stringify(data));
        console.log(data)
      }else{
        let data = {idProduct:this.product.idProduct, name:this.product.name,price:this.product.price, cantidad: this.orderProducts.cantidad, description:this.orderProducts.description, image_type:this.product.image_type};
        localStorage.setItem("orderProducts", JSON.stringify(data));
        console.log(data)
      }
      
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

  cerrarModal(){
    this.dialogRef.close();
  }
  
  keypressNumbers(event: any) {
    const pattern = /[1-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
    }

}
