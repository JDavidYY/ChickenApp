import { Component, OnInit , ViewChild} from '@angular/core';
import { Router} from  '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

import { FormControl, Validators } from '@angular/forms';
import { SalesModel } from '../../models/sales-info.model';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  dataSourceOne: MatTableDataSource<SalesModel>;
  displayedColumnsOne: string[] = [
    'idventa',
    'totalventa',
    'impuestoventa',
    'fechaventa',
    'idpedido',
    'tipopedido',
    'nombrecliente',
    'detalle'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private router:Router, private salesservice:SalesService) { this.dataSourceOne = new MatTableDataSource; }

  ngOnInit(): void {
    this.listarSales();
  }

  listarSales()
    {
        this.salesservice.seleccionarSales()
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    const sale = response.result;
                    this.dataSourceOne.data = sale;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    mostrarDetalle(idOrders:string)
    {
        if (idOrders == null) return;
          this.router.navigate(['/order/detail/', idOrders]);
    }

}
