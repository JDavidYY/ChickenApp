import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductShowimageComponent } from 'src/app/product/components/product-showimage/product-showimage.component';
import Swal from 'sweetalert2';
import { ComboModel } from '../../models/combo-info.model';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-combo-list',
  templateUrl: './combo-list.component.html',
  styleUrls: ['./combo-list.component.scss']
})
export class ComboListComponent implements OnInit {

  comboSeleccionado:ComboModel = null;
  dataSourceOne: MatTableDataSource<ComboModel>;
  displayedColumnsOne: string[] = [
    'name',
    'description',
    'image'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private dialog: MatDialog, private router:Router, private comboservice:ComboService) {
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarCombo();
    }

    seleccionarCombo(row:ComboModel):void {
        this.comboSeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionarCombos pasándole un parámetro y listar al combo
    listarCombo()
    {
        this.comboservice.seleccionarCombos()
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    const combo = response.result;
                    this.dataSourceOne.data = combo;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    verProductos()
    {
      if (this.comboSeleccionado == null) return;
      let combo = this.comboSeleccionado;
      this.router.navigate(['/combo/verproductos', combo.idCombo ]);
    }

    //Método para ir a la vista de agregar un combo nuevo
    agregarCombo():void
    {
      this.router.navigate(['/combo/agregar']);
    }

    //Método para eliminar combos
    eliminarCombo()
    {
      if (this.comboSeleccionado == null) return;

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
          // llamados el servicio eliminarCombo desde combo.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.comboservice.eliminarCombo(this.comboSeleccionado.idCombo)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarCombo();
              this.comboSeleccionado = null;
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }

    mostrarImagenCombo(item:ComboModel){
      console.log(item);
      let dialogRef = this.dialog.open(ProductShowimageComponent,{autoFocus: false,panelClass: 'myapp-no-padding-dialog'});
    //nuevo codigo
      let instance = dialogRef.componentInstance;
      instance.idProduct = item.idCombo;
      instance.tipo = 'combo';
      console.log(instance);
    }


}
