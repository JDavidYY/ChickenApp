import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClientModel } from '../../models/client-info.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  client: ClientModel = new ClientModel();
  nacimiento: string;

  lastnameFormControl = new FormControl('', [
  Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
  Validators.required,
  ]);

  firstnameFormControl = new FormControl('', [
  Validators.required
  ]);

  phoneFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(9)
  ]);

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email
  ]);

  adressFormControl = new FormControl('', [
  Validators.required
  ]);


  constructor(private router:Router, private datePipe: DatePipe, private clientservice: ClientService) { }

  ngOnInit(): void {
  }

  guardarClient(){


    // validacion de campos para que no sean vacios
    if ( !this.client.firstname || !this.client.lastname || 
        !this.client.phone || !this.client.adress || !this.client.password ||
      !this.client.email ) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.firstnameFormControl.invalid || this.lastnameFormControl.invalid 
      || this.phoneFormControl.invalid
      || this.adressFormControl.invalid || this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del categiry mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "Confirmar registro",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarClientclient desde client.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.clientservice.guardarClient(this.client)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response.status && response.statusCode == 200 && response.message != "" )
              Swal.fire(
                'Enhorabuena!',
                'El cliente ha sido guardado.',
                'success'
                );
              this.router.navigate(['/login']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/login']);
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
