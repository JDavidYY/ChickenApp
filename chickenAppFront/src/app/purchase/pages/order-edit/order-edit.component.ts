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

  
  precioTotal: number = 0;
  order: OrderModel = new OrderModel();
  order_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  typeOrderFormControl = new FormControl('', [
    Validators.required
    ]);

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
    this.listarProducts();  
    this.calcularPrecio();
  }

  // seleccionarProduct(row:ProductModel):void {
  //   this.productSeleccionado = row;
  // }

  calcularPrecio(){
    let data = JSON.parse(localStorage.getItem("orderProducts"));
    if (data.length>1){
      data.forEach(element => {
        this.precioTotal = this.precioTotal + (element.cantidad*element.price)
      });
    } else {
      this.precioTotal = data.cantidad*data.price
    }
    
  }
listarPrueba(){
  // this.data = {idProduct:"1", name:"comida",price:"5", cantidad: "65", description:"hola mundo", image_name:"a"};
  let abc = JSON.stringify([{idProduct:"1", name:"comida",price:"5", cantidad: "65", description:"hola mundo", image_type:"a"}])
  let nodata = JSON.parse(abc);
  this.dataSourceOne.data = nodata;
  this.dataSourceOne.paginator = this.tableOnePaginator;
  this.dataSourceOne.sort = this.tableOneSort;
}

 listarProducts(){
  let data = JSON.parse(localStorage.getItem("orderProducts"));
  this.dataSourceOne.data = data;
  this.dataSourceOne.paginator = this.tableOnePaginator;
  this.dataSourceOne.sort = this.tableOneSort;
 }

 guardarOrder(){
   
  console.log("que fue")
  
    let data = JSON.parse(localStorage.getItem("orderProducts"));
    console.log(data);
    for(let i=0;i< data.length;i++){
      this.order.idproducts.push(data[i].idProduct)
      this.order.cantidades.push(data[i].cantidad)
      this.order.types.push(data[i].image_type)
      this.order.comments.push(data[i].description)
    }
    // data.forEach(element => {
    //   this.order.idproducts.push(element.idProduct)
    //   this.order.cantidades.push(element.cantidad)
    //   this.order.types.push(element.image_type)
    //   this.order.comments.push(element.description)
    // });
    this.order.idClient = localStorage.getItem("idClient");
  console.log("que fue")
  // validacion de campos para que no sean vacios
      if ( !this.order.typeOrder || !this.order.idproducts || !this.order.cantidades ||
        !this.order.comments || !this.order.types || !this.order.idClient) {
        return;
    }
 // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.typeOrderFormControl.invalid){
        return;
      }

  //modal para que muestre el mensaje para confirmación de guardado del combo mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas confirmar la orden?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarOrder desde order.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.orderservice.guardarOrder(this.order)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'La orden ha sido guardada.',
                'success'
                );
              this.router.navigate(['/purchase/menu']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  confirmarOrder(){
    this.dialog.open(OrderConfirmationComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'myapp-no-padding-dialog' });
  }

  regresar(){
    this.router.navigate(['/purchase/menu']);
  }

  

}
