import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/product/models/product-info.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() product: ProductModel;

  constructor(public dialogRef: MatDialogRef<AddToCartComponent>, private router:Router) { }

  ngOnInit(): void {

  }

  addToCart()
  {
    this.router.navigate(['/purchase/menu']);
  }

}
