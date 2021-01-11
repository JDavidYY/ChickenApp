import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductShowimageComponent } from 'src/app/product/components/product-showimage/product-showimage.component';
import { ProductModel } from 'src/app/product/models/product-info.model';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'app-combo-verproductos',
  templateUrl: './combo-verproductos.component.html',
  styleUrls: ['./combo-verproductos.component.scss']
})
export class ComboVerproductosComponent implements OnInit {

  combo_id:string="";
  dataSourceOne: MatTableDataSource<ProductModel>;
  products:ProductModel[]=null;
  productSeleccionado:ProductModel = null;
  displayedColumnsOne: string[] = [
    'name',
    'price',
    'cantidad',
    'image'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private route: ActivatedRoute, private router:Router, private dialog: MatDialog, private comboservice: ComboService) {
    this.dataSourceOne = new MatTableDataSource;
  }

  ngOnInit(): void {
    this.combo_id =this.route.snapshot.paramMap.get('combo_id');
    this.listarProductos();
  }

  listarProductos()
    {
        this.comboservice.selectProducts(this.combo_id)
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

    regresar(){
      this.router.navigate(['/combo/listado']);
    }

    seleccionarProduct(row:ProductModel):void {
      this.productSeleccionado = row;
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
