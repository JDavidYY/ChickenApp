
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { ComboService } from 'src/app/combo/services/combo.service';
import { ProductModel } from 'src/app/product/models/product-info.model';
import { OrderProductsModel } from 'src/app/purchase/models/order-products-info.model';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-detalle-product',
  templateUrl: './detalle-product.component.html',
  styleUrls: ['./detalle-product.component.scss']
})
export class DetalleProductComponent implements OnInit {

  @Input() product: ProductModel;
  productos: ProductModel = null;
  esCombo:boolean=false;

  constructor(public dialogRef: MatDialogRef<DetalleProductComponent>, private comboservice: ComboService) { }

  ngOnInit(): void {
    console.log(this.product);
    if(this.product.type=="combo")
    {
      //this.product.idCombo==this.product.id;
      console.log("Es un combo");
      this.esCombo=true;
      this.cargarProductos(this.product.idCombo);
    }
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

}
