import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DatePipe} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { ChefModel } from '../../models/chef-info.model';
import { ChefService } from '../../services/chef.service';

@Component({
  selector: 'app-chef-edit',
  templateUrl: './chef-edit.component.html',
  styleUrls: ['./chef-edit.component.scss']
})
export class ChefEditComponent implements OnInit {

 
  chef: ChefModel = new ChefModel();
  nacimiento: string;

  dniFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(8)
  ]);

  lastnameFormControl = new FormControl('', [
  Validators.required,
  ]);

  firstnameFormControl = new FormControl('', [
  Validators.required,
  ]);

  phoneFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(9)
  ]);

  ageFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(2)
  ]);

  workshiftFormControl = new FormControl('', [
  Validators.required
  ]);

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email
  ]);

  passwordFormControl = new FormControl('', [
  Validators.required
  ]);

  adressFormControl = new FormControl('', [
    Validators.required
    ]);

  constructor(private router:Router, private datePipe: DatePipe, private chefservice: ChefService) { }

  ngOnInit(): void {
  }

  guardarChef(){


    // validacion de campos para que no sean vacios
    if ( !this.chef.firstname || !this.chef.lastname || !this.chef.phone || 
        !this.chef.workshift || !this.chef.age || !this.chef.dni ||
      !this.chef.email  || !this.chef.adress ||  !this.chef.password ) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.dniFormControl.invalid || this.firstnameFormControl.invalid || this.lastnameFormControl.invalid 
      || this.workshiftFormControl.invalid || this.phoneFormControl.invalid
      || this.ageFormControl.invalid  || this.adressFormControl.invalid || this.passwordFormControl.invalid || this.emailFormControl.invalid) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del chef mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el chef?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarChef desde chef.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.chefservice.guardarChef(this.chef)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'El chef ha sido guardado.',
                'success'
                );
              this.router.navigate(['/chef/listado']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/chef/listado']);
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
