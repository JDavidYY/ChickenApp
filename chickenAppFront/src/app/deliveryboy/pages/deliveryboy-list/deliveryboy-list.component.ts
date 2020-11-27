import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeliveryboyModel } from '../../models/deliveryboy-info.model';
import Swal from 'sweetalert2';
import { DeliveryboyService } from '../../services/deliveryboy.service';

@Component({
  selector: 'app-deliveryboy-list',
  templateUrl: './deliveryboy-list.component.html',
  styleUrls: ['./deliveryboy-list.component.scss']
})
export class DeliveryboyListComponent implements OnInit {


  deliveryboySeleccionado:DeliveryboyModel = null;
  dataSourceOne: MatTableDataSource<DeliveryboyModel>;
  displayedColumnsOne: string[] = [
    'dni',
	  'fullnombre',
    'celular',
    'email'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private router:Router, private deliveryboyservice:DeliveryboyService) {
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarDeliveryboy();
    }

    seleccionarDeliveryboy(row:DeliveryboyModel):void {
        this.deliveryboySeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionarDeliveryboys pasándole un parámetro y listar al deliveryboy
    listarDeliveryboy()
    {
        this.deliveryboyservice.seleccionarDeliveryboys()
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    const deliveryboy = response.result;
                    this.dataSourceOne.data = deliveryboy;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    //Método para ir a la vista de agregar un deliveryboy nuevo
    agregarDeliveryboy():void
    {
      this.router.navigate(['/deliveryboy/agregar']);
    }

    //Método para eliminar deliveryboys
    eliminarDeliveryboy()
    {
      if (this.deliveryboySeleccionado == null) return;

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
          // llamados el servicio eliminarDeliveryboy desde deliveryboy.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.deliveryboyservice.eliminarDeliveryboy(this.deliveryboySeleccionado.idDeliveryboy)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarDeliveryboy();
              this.deliveryboySeleccionado = null;
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }
    //Método para ir a la vista de un determinado Deliveryboy
    editarDeliveryboy()
    {
      if (this.deliveryboySeleccionado == null) return;
        let deliveryboy = this.deliveryboySeleccionado;
        this.router.navigate(['/deliveryboy/editar', deliveryboy.idDeliveryboy ]);
    }


}
