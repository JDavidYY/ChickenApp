import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PromotionModel } from '../../models/promotion-info.model';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {


  promotionSeleccionado:PromotionModel = null;
  dataSourceOne: MatTableDataSource<PromotionModel>;
  displayedColumnsOne: string[] = [
    'dni',
	  'fullnombre',
    'celular',
    'email',
    'turno'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private router:Router, private promotionservice:PromotionService) {
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarPromotion();
    }

    seleccionarPromotion(row:PromotionModel):void {
        this.promotionSeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionarpromotions pasándole un parámetro y listar al promotion
    listarPromotion()
    {
        this.promotionservice.seleccionarPromotions()
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    const promotion = response.result;
                    this.dataSourceOne.data = promotion;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    //Método para ir a la vista de agregar un promotion nuevo
    agregarPromotion():void
    {
      this.router.navigate(['/promotion/agregar']);
    }

    //Método para eliminar promotions
    eliminarPromotion()
    {
      if (this.promotionSeleccionado == null) return;

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
          // llamados el servicio eliminarPromotion desde promotion.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.promotionservice.eliminarPromotion(this.promotionSeleccionado.idPromotion)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarPromotion();
              this.promotionSeleccionado = null;
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }
    //Método para ir a la vista de un determinado Promotion
    editarPromotion()
    {
      if (this.promotionSeleccionado == null) return;
        let promotion = this.promotionSeleccionado;
        this.router.navigate(['/promotion/editar', promotion.idPromotion ]);
    }



}
