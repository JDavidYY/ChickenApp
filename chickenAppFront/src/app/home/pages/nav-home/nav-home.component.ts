import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeliveryboyModel } from '../../../deliveryboy/models/deliveryboy-info.model';
import Swal from 'sweetalert2';
import { CompanyService } from '../../../deliveryboy/services/company.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss']
})
export class NavHomeComponent implements OnInit {

  disponibilidad: string="";
  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {
  this.verDisponibilidad();
  }

  verDisponibilidad()
    {
        this.companyservice.getDisponibilidad()
        .subscribe(
            (response) => {
                console.log(response);
                if (response != null && response.ok && response.result != null){
                    this.disponibilidad = response.result["disponibilidad"];
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
