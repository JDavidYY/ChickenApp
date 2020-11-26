import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductModel } from '../../models/product-info.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  
  productSeleccionado:ProductModel = null;
  dataSourceOne: MatTableDataSource<ProductModel>;
  displayedColumnsOne: string[] = [
    'dni',
	  'fullnombre',
    'celular',
    'email'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private router:Router, private productservice:ProductService) { 
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarProduct();
    }

    seleccionarProduct(row:ProductModel):void {
        this.productSeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionar categories pasándole un parámetro y listar al product
    listarProduct()
    {
        this.productservice.seleccionarProducts()
        .subscribe(
            (response) => {
                console.log(response);
                if ( response.status && response.message != ""){
                    const product = response.listProduct;
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

    //Método para ir a la vista de agregar un product nuevo
    agregarProduct():void
    {
      this.router.navigate(['/product/agregar']);
    }
    
    //Método para eliminar categories
    eliminarProduct()
    {
      if (this.productSeleccionado == null) return;
	
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
          // llamados el servicio eliminar product desde product.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.productservice.eliminarProduct(this.productSeleccionado.idProduct)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarProduct();
              this.productSeleccionado = null;			
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }
    //Método para ir a la vista de un determinado product
    editarProduct()
    {
      if (this.productSeleccionado == null) return;
        let product = this.productSeleccionado;
        this.router.navigate(['/product/editar', product.idProduct ]);
    }

}
