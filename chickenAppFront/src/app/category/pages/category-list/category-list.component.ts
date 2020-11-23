import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryModel } from '../../models/category-info.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  
  categorySeleccionado:CategoryModel = null;
  dataSourceOne: MatTableDataSource<CategoryModel>;
  displayedColumnsOne: string[] = [
    'dni',
	  'fullnombre',
    'celular',
    'email'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private router:Router, private categoryservice:CategoryService) { 
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarCategory();
    }

    seleccionarCategory(row:CategoryModel):void {
        this.categorySeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionar categories pasándole un parámetro y listar al category
    listarCategory()
    {
        this.categoryservice.seleccionarCategories()
        .subscribe(
            (response) => {
                console.log(response);
                if ( response.status && response.message != ""){
                    const category = response.listCategory;
                    this.dataSourceOne.data = category;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    //Método para ir a la vista de agregar un category nuevo
    agregarCategory():void
    {
      this.router.navigate(['/category/agregar']);
    }
    
    //Método para eliminar categories
    eliminarCategory()
    {
      if (this.categorySeleccionado == null) return;
	
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
          // llamados el servicio eliminar category desde category.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.categoryservice.eliminarCategory(this.categorySeleccionado.idCategory)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.status){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarCategory();
              this.categorySeleccionado = null;			
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }
    //Método para ir a la vista de un determinado category
    editarCategory()
    {
      if (this.categorySeleccionado == null) return;
        let category = this.categorySeleccionado;
        this.router.navigate(['/category/editar', category.idCategory ]);
    }
  
}
