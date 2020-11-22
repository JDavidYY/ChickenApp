import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DeliveryboyModel } from '../../models/deliveryboy-info.model';
import { DeliveryboyService } from '../../services/deliveryboy.service';

@Component({
  selector: 'app-deliveryboy-edit',
  templateUrl: './deliveryboy-edit.component.html',
  styleUrls: ['./deliveryboy-edit.component.scss']
})
export class DeliveryboyEditComponent implements OnInit {


  deliveryboy: DeliveryboyModel = new DeliveryboyModel();
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


  constructor(private router:Router, private datePipe: DatePipe, private deliveryboyservice: DeliveryboyService) { }

  ngOnInit(): void {
  }

  guardarDeliveryboy(){

    let selectedDate = this.datePipe.transform(this.nacimiento, 'yyyy/MM/dd');
    this.deliveryboy.nacimiento=selectedDate;

    // validacion de campos para que no sean vacios
    if ( !this.deliveryboy.nombre || !this.deliveryboy.apellidoPat || !this.deliveryboy.apellidoMat || 
        !this.deliveryboy.celular || !this.deliveryboy.direccion || !this.deliveryboy.dni ||
      !this.deliveryboy.email  || !this.deliveryboy.nacimiento ) {

      return;
    }
   // validacion de campos para que no sean incorrectos mediante FormControl
    if ( this.dniFormControl.invalid || this.nombresFormControl.invalid || this.apellidoPatFormControl.invalid 
      || this.apellidoMatFormControl.invalid || this.celularFormControl.invalid
      || this.direccionFormControl.invalid || this.dniFormControl.invalid || this.emailFormControl.invalid
       || this.fechaNacimientoFormControl.invalid ) {
      return;
    }
  //modal para que muestre el mensaje para confirmación de guardado del deliveryboy mientras se hace el servicio
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el deliveryboy?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarDeliveryboy desde deliveryboy.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.deliveryboyservice.guardarDeliveryboy(this.deliveryboy)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response.status && response.statusCode == 200 && response.message != "" )
              Swal.fire(
                'Enhorabuena!',
                'El deliveryboy ha sido guardado.',
                'success'
                );
              this.router.navigate(['/deliveryboy/list']);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  regresar(){
    this.router.navigate(['/deliveryboy/list']);
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
