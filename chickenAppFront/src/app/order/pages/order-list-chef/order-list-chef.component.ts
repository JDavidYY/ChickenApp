import { Component, OnInit , ViewChild} from '@angular/core';
import { Router} from  '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

import { FormControl, Validators } from '@angular/forms';
import { OrderModel } from '../../models/order-info.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-list-chef',
  templateUrl: './order-list-chef.component.html',
  styleUrls: ['./order-list-chef.component.scss']
})
export class OrderListChefComponent implements OnInit {

  orderSeleccionado:OrderModel = null;
  dataSourceOne: MatTableDataSource<OrderModel>;
  displayedColumnsOne: string[] = [
    'idpedido',
	  'fechapedido',
    'estadopedido',
    'detalle'];

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
        this.orderservice.seleccionarOrdersChef()
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
    /*eliminarOrder()
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
        confirmButtonText: 'Si, actualizar!'
        }).then((result) => {
          // llamados el servicio eliminarOrder desde order.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.orderservice.eliminarOrder(this.orderSeleccionado.idOrders)
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
    }*/

    cambiarEstado(item:OrderModel){
      Swal.fire({
        title: 'Estas seguro que desea actualizar el estado del pedido?',
        text: "El estado se actualizará!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, actualizar!'
        }).then((result) => {
          // llamados el servicio eliminarOrder desde order.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.orderservice.cambiarEstadoChef(item.idpedido)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Estado actualizado!',
                'El pedido cambió de estado.',
                'success'
                );
              this.listarOrder();
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }

    mostrarDetalle(idOrders:string)
    {
        if (idOrders == null) return;
          this.router.navigate(['/order/detail/', idOrders]);
    }
}
