import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OrderModel } from '../../models/order-info.model';
import { OrderService } from '../../services/purchase.service';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.scss']
})
export class OrdersHistoryComponent implements OnInit {

  orderSeleccionado:OrderModel = null;
  dataSourceOne: MatTableDataSource<OrderModel>;
  displayedColumnsOne: string[] = [
    'idpedido',
	  'preciopedido',
    'tipopedido',
    'fechapedido',
    'estadopedido'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private router:Router, private orderservice:OrderService) {
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarOrder();
    }

    seleccionarOrder(row:OrderModel):void {
        this.orderSeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionarOrders pasándole un parámetro y listar al order
    listarOrder()
    {
        let idClient = localStorage.getItem("idClient")
        this.orderservice.seleccionarOrdersClientHistory(idClient)
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    const order = response.result;
                    this.dataSourceOne.data = order;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    //Método para ir a la vista de agregar un order nuevo
    agregarOrder():void
    {
      this.router.navigate(['/order/agregar']);
    }

    //Método para eliminar orders
    eliminarOrder()
    {
      if (this.orderSeleccionado == null) return;

      Swal.fire({
        title: 'Estas seguro?',
        text: "El registro seleccionado se eliminará!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
          // llamados el servicio eliminarOrder desde order.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.orderservice.eliminarOrder(this.orderSeleccionado.idOrder)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarOrder();
              this.orderSeleccionado = null;
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }
    //Método para ir a la vista de un determinado order
    editarOrder()
    {
      if (this.orderSeleccionado == null) return;
        let order = this.orderSeleccionado;
        this.router.navigate(['/order/editar', order.idOrder ]);
    }
    
    regresar(){
      this.router.navigate(['/purchase/menu']);
    }
}
