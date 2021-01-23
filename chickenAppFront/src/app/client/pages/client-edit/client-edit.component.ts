import { DatePipe } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  client_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  private emailPattern: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  private palabra: any = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]/;

  lastnameFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(5),
  Validators.maxLength(70),
  Validators.pattern(this.palabra)
  ]);

  passwordFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(4),
  Validators.maxLength(70)
  ]);

  firstnameFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(5),
  Validators.maxLength(60),
  Validators.pattern(this.palabra)
  ]);

  phoneFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(9)
  ]);

  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
  Validators.minLength(13),
  Validators.maxLength(40),
  Validators.pattern(this.emailPattern)
  ]);

  adressFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(20),
  Validators.maxLength(60)
  ]);


  constructor(private router:Router, private route: ActivatedRoute,  private datePipe: DatePipe, private clientservice: ClientService) { }

  ngOnInit(): void {
    console.log("aaaaaaaaaaaa")
    // this.client_id = +this.route.snapshot.paramMap.get('client_id');
    this.client_id = +localStorage.getItem("idClient");
    console.log(this.client_id);
    if ( this.client_id > 0) {
      this.cargarClient( this.client_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }

  cargarClient(idClient){
    this.clientservice.getClient(idClient)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Cliente encontrado');
          console.log(response.result);
          // this.deliveryboy = response.deliveryboy;
          this.client.idClient= response.result["idClient"];
          this.client.firstname= response.result["firstname"];
          this.client.lastname= response.result["lastname"];
          this.client.phone= response.result["phone"];
          this.client.adress= response.result["adress"];
          this.client.email= response.result["email"];
          this.client.password= "";
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  guardarClient(){


    // validacion de campos para que no sean vacios
    if(this.client_id>0){
      if ( !this.client.firstname || !this.client.lastname || 
          !this.client.phone || !this.client.adress) {

        return;
      }
    } else{
      if ( !this.client.firstname || !this.client.lastname || 
        !this.client.phone || !this.client.adress || !this.client.password ||
      !this.client.email ) {

      return;
      }
    }

   // validacion de campos para que no sean incorrectos mediante FormControl
   if(this.client_id>0){
      if ( this.firstnameFormControl.invalid || this.lastnameFormControl.invalid 
        || this.phoneFormControl.invalid
        || this.adressFormControl.invalid) {
        return;
      }
    } else {
      if ( this.firstnameFormControl.invalid || this.lastnameFormControl.invalid 
        || this.phoneFormControl.invalid
        || this.adressFormControl.invalid || this.emailFormControl.invalid || this.passwordFormControl.invalid) {
        return;
      }
    }
    
  //modal para que muestre el mensaje para confirmación de guardado del categiry mientras se hace el servicio
    if(this.client_id>0){
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
            // if ( response.status && response.statusCode == 200 && response.message != "" ){
            if ( response && response.ok && response.result != 0 ){
              Swal.fire(
                'Enhorabuena!',
                'El cliente ha sido guardado.',
                'success'
                );
              this.router.navigate(['/login']);
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  } else{
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
            // if ( response.status && response.statusCode == 200 && response.message != "" ){
            if ( response && response.ok && response.result != 0 ){
              Swal.fire(
                'Enhorabuena!',
                'El cliente ha sido guardado.',
                'success'
                );
              this.router.navigate(['/purchase/menu']);
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}

  regresar(){
    this.router.navigate(['/purchase/menu']);
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
