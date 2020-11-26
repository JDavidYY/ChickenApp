import { Component, OnInit , ViewChild} from '@angular/core';
import { Router} from  '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

import { FormControl, Validators } from '@angular/forms';
import { ChefModel } from '../../models/chef-info.model';
import { ChefService } from '../../services/chef.service';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.scss']
})
export class ChefListComponent implements OnInit {
  
  chefSeleccionado:ChefModel = null;
  dataSourceOne: MatTableDataSource<ChefModel>;
  displayedColumnsOne: string[] = [
    'dni',
	  'fullnombre',
    'celular',
    'email'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

    constructor(private router:Router, private chefservice:ChefService) { 
      this.dataSourceOne = new MatTableDataSource;
    }

    ngOnInit(): void {
      this.listarChef();
    }

    seleccionarChef(row:ChefModel):void {
        this.chefSeleccionado = row;
    }
    //Método para llamar al api correspondiente a la api seleccionarChefs pasándole un parámetro y listar al chef
    listarChef()
    {
        this.chefservice.seleccionarChefs()
        .subscribe(
            (response) => {
                console.log(response);
                if ( response.status && response.message != ""){
                    const chef = response.listChef;
                    this.dataSourceOne.data = chef;
                    this.dataSourceOne.paginator = this.tableOnePaginator;
                    this.dataSourceOne.sort = this.tableOneSort;
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    //Método para ir a la vista de agregar un chef nuevo
    agregarChef():void
    {
      this.router.navigate(['/chef/agregar']);
    }
    
    //Método para eliminar chefs
    eliminarChef()
    {
      if (this.chefSeleccionado == null) return;
	
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
          // llamados el servicio eliminarChef desde chef.service.ts y se le pasa 1 parámetro
        if (result.value) {
        this.chefservice.eliminarChef(this.chefSeleccionado.idChef)
        .subscribe(
          (response) => {
            console.log(response);
            if (response.ok){
              Swal.fire(
                'Eliminado!',
                'El registro a sido removido.',
                'success'
                );
              this.listarChef();
              this.chefSeleccionado = null;			
            }
          },
          (err) => {
            console.log(err);
          }
        );
        }
        })
    }
    //Método para ir a la vista de un determinado chef
    editarChef()
    {
      if (this.chefSeleccionado == null) return;
        let chef = this.chefSeleccionado;
        this.router.navigate(['/chef/editar', chef.idChef ]);
    }
  
  }
  