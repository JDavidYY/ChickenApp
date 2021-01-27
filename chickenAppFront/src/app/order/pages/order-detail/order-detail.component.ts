import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ProductModel } from 'src/app/product/models/product-info.model';
import { MatDialog } from '@angular/material/dialog';
import { DetalleProductComponent } from '../../dialogos/detalle-product/detalle-product.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  idOrder:string;
  dataSourceOne:MatTableDataSource<ProductModel>;
  displayedColumnsOne: string[] = [
	  'name',
    'type',
    'quantity',
    'commentary',
    'price',
    'detalle'];

  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private dialog:MatDialog, private route: ActivatedRoute, private orderservice: OrderService) {
    this.dataSourceOne = new MatTableDataSource;
   }

  ngOnInit(): void {
    this.idOrder = this.route.snapshot.paramMap.get('idOrders');
    this.cargarProducts(this.idOrder);
  }

  cargarProducts(idOrder:string)
  {
    this.orderservice.cargarProducts(idOrder)
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    const product = response.result;
                    console.log(product);
                    this.dataSourceOne.data = product;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
  }

  mostrarDetalle(item:ProductModel)
  {
    let dialogRef = this.dialog.open(DetalleProductComponent,{autoFocus: false,panelClass: 'myapp-no-padding-dialog'});
    //nuevo codigo
      let instance = dialogRef.componentInstance;
      instance.product = item;
      console.log(instance);
  }

}
