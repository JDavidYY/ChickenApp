import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryModel } from '../../models/category-info.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

 
  category: CategoryModel = new CategoryModel();
  nacimiento: string;

  dniFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(8)
  ]);

  apellidoPatFormControl = new FormControl('', [
  Validators.required,
  ]);

  apellidoMatFormControl = new FormControl('', [
  Validators.required,
  ]);

  nombresFormControl = new FormControl('', [
  Validators.required
  ]);

  fechaNacimientoFormControl = new FormControl('', [
  Validators.required
  ]);

  celularFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(9)
  ]);

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email
  ]);

  direccionFormControl = new FormControl('', [
  Validators.required
  ]);


  constructor(private router:Router, private datePipe: DatePipe, private categoryservice: CategoryService) { }

  ngOnInit(): void {
  }

  guardarCategory(){

    let selectedDate = this.datePipe.transform(this.nacimiento, 'yyyy/MM/dd');
    this.category.nacimiento=selectedDate;

    // validacion de campos para que no sean vacios
    if ( !this.category.nombre || !this.category.apellidoPat || !this.category.apellidoMat || 
        !this.category.celular || !this.category.direccion || !this.category.dni ||
      !this.category.email  || !this.category.nacimiento ) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.dniFormControl.invalid || this.nombresFormControl.invalid || this.apellidoPatFormControl.invalid 
      || this.apellidoMatFormControl.invalid || this.celularFormControl.invalid
      || this.direccionFormControl.invalid || this.dniFormControl.invalid || this.emailFormControl.invalid
       || this.fechaNacimientoFormControl.invalid ) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del categiry mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el category?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarCategory desde category.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.categoryservice.guardarCategory(this.category)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response.status && response.statusCode == 200 && response.message != "" )
              Swal.fire(
                'Enhorabuena!',
                'El category ha sido guardado.',
                'success'
                );
              this.router.navigate(['/category/list']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/category/list']);
  }

  keypressNumbers(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
    }

  keypressLetters(event: any) {
    const pattern = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
    }   

}
