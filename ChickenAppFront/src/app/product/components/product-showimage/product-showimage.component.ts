import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-showimage',
  templateUrl: './product-showimage.component.html',
  styleUrls: ['./product-showimage.component.scss']
})
export class ProductShowimageComponent implements OnInit {

	ruta: string = "";
  @Input() idProduct: string = '';
  @Input() tipo: string = '';
	constructor(public dialogRef: MatDialogRef<ProductShowimageComponent>) { }

  ngOnInit(): void {
    console.log(this.idProduct);
    if(this.tipo=='product')
    this.ruta = "https://storage.googleapis.com/mainkra/products/"+this.idProduct+".jpg";
    else
    this.ruta = "https://storage.googleapis.com/mainkra/combos/"+this.idProduct+".jpg";
  }

  cerrar() {
		this.dialogRef.close();
	}

}
