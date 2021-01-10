import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OrderConfirmationComponent } from '../../dialogos/order-confirmation/order-confirmation.component';
import { OrderModel } from '../../models/order-info.model';
import { OrderProductsModel } from '../../models/order-products-info.model';
import { OrderService } from '../../services/purchase.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  
 
  order: OrderModel = new OrderModel();
  order_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  data: OrderProductsModel = new OrderProductsModel();
  // productSeleccionado:ProductModel = null;
  // ProductArray: [] = null;
  // orderProductsSeleccionado:OrderProductsModel = null;
  dataSourceOne: MatTableDataSource<OrderProductsModel>;
  displayedColumnsOne: string[] = [
    'name',
    'cantidad',
    'price',
    'description'];

  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private route: ActivatedRoute, private router:Router, private datePipe: DatePipe, private orderservice: OrderService, private dialog: MatDialog) { 
    this.dataSourceOne = new MatTableDataSource;
  }
  
  ngOnInit(): void {
    this.listarPrueba();  
  }

  // seleccionarProduct(row:ProductModel):void {
  //   this.productSeleccionado = row;
  // }
listarPrueba(){
  // this.data = {idProduct:"1", name:"comida",price:"5", cantidad: "65", description:"hola mundo", image_name:"a"};
  let abc = JSON.stringify([{idProduct:"1", name:"comida",price:"5", cantidad: "65", description:"hola mundo", image_name:"a"}])
  let nodata = JSON.parse(abc);
  this.dataSourceOne.data = nodata;
  this.dataSourceOne.paginator = this.tableOnePaginator;
  this.dataSourceOne.sort = this.tableOneSort;
}
//  listarProducts(){
//   let data = JSON.parse(localStorage.getItem("orderProducts"));
//   this.dataSourceOne.data = data;
//   this.dataSourceOne.paginator = this.tableOnePaginator;
//   this.dataSourceOne.sort = this.tableOneSort;
//  }

  confirmarOrder(){
    this.dialog.open(OrderConfirmationComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'myapp-no-padding-dialog' });
  }

  regresar(){
    this.router.navigate(['/purchase/menu']);
  }

  

}
