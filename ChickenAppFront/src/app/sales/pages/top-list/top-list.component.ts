import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductShowimageComponent } from 'src/app/product/components/product-showimage/product-showimage.component';
import { ProductModel } from 'src/app/product/models/product-info.model';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.scss']
})
export class TopListComponent implements OnInit {

  productSeleccionado:ProductModel = null;
  dataSourceOne: MatTableDataSource<ProductModel>;
  displayedColumnsOne: string[] = [
    'id',
    'name',
    'cantidad',
    'image'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private router:Router, private dialog: MatDialog, private salesservice:SalesService) {
    this.dataSourceOne = new MatTableDataSource;
   }

  ngOnInit(): void {
    this.listarTops();
  }

  //Método para llamar al api correspondiente a la api seleccionar categories pasándole un parámetro y listar al product
  listarTops()
  {
      this.salesservice.seleccionarTops()
      .subscribe(
          (response) => {
              console.log(response);
              if ( response != null && response.ok && response.result != null){
                  const product = response.result;
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

  mostrarImagenProduct(item:ProductModel){
    console.log(item);
    let dialogRef = this.dialog.open(ProductShowimageComponent,{autoFocus: false,panelClass: 'myapp-no-padding-dialog'});
  //nuevo codigo
    let instance = dialogRef.componentInstance;
    instance.idProduct = item.idProduct;
    instance.tipo = 'product';
    console.log(instance);
  }

}
