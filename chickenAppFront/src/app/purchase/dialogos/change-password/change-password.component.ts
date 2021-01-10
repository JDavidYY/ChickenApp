import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/client/models/client-info.model';
import { ClientService } from 'src/app/client/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  client: ClientModel = new ClientModel();
  nacimiento: string;



  passwordFormControl = new FormControl('', [
  Validators.required,
  ]);


  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email
  ]);


  constructor(private router:Router, private clientservice: ClientService) { }

  ngOnInit(): void {
  }

  changePassword(){
    Swal.fire({
      title: 'Aviso',
      text: "Confirmar cambio de contraseña",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarClientclient desde client.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.clientservice.changePasswordClient(this.client)
        .subscribe(
          (response) => {
            console.log(response);
            // if ( response.status && response.statusCode == 200 && response.message != "" ){
            if ( response && response.ok && response.result != 0 ){
              Swal.fire(
                'Enhorabuena!',
                'La contraseña fue cambiada exitosamente.',
                'success'
                );
              this.router.navigate(['/purchase/menu']);
            }
            else{
              Swal.fire(
                'Oops!',
                'Usuario o contraseña ingresados son incorrectos.',
                'error'
                );
            }
            }
          ,
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}
