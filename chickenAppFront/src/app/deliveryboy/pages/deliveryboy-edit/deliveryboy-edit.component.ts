import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  deliveryboy_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  dniFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(8)
  ]);

  lastnameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
    ]);

    firstnameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
    ]);

    phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(9)
    ]);

    ageFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(2),
    Validators.min(18),
    Validators.max(50)
    ]);

    workshiftFormControl = new FormControl('', [
    Validators.required
    ]);

    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.maxLength(50)
    ]);

    passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(20)
    ]);

    adressFormControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(80),
      Validators.minLength(15)
      ]);

  constructor(private route:ActivatedRoute, private router:Router, private datePipe: DatePipe, private deliveryboyservice: DeliveryboyService) { }

  ngOnInit(): void {
    this.deliveryboy_id = +this.route.snapshot.paramMap.get('deliveryboy_id');
    if ( this.deliveryboy_id > 0) {
      this.cargarDeliveryboy( this.deliveryboy_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }
  cargarDeliveryboy(idDeliveryboy){
    this.deliveryboyservice.getDeliveryboy(idDeliveryboy)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Deliveryboy encontrado');
          console.log(response.result);
          // this.deliveryboy = response.deliveryboy;
          this.deliveryboy.idDeliveryboy= response.result["idDeliveryboy"];
          this.deliveryboy.firstname= response.result["firstname"];
          this.deliveryboy.lastname= response.result["lastname"];
          this.deliveryboy.dni= response.result["dni"];
          this.deliveryboy.phone= response.result["phone"];
          this.deliveryboy.workshift= response.result["workshift"];
          this.deliveryboy.age= response.result["age"];
          this.deliveryboy.email= response.result["email"];
          this.deliveryboy.password= "";
          this.deliveryboy.adress= response.result["adress"];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  guardarDeliveryboy(){

    // validacion de campos para que no sean vacios
    if(this.deliveryboy_id>0){
      if ( !this.deliveryboy.firstname || !this.deliveryboy.lastname || !this.deliveryboy.phone ||
        !this.deliveryboy.workshift || !this.deliveryboy.age || !this.deliveryboy.dni ||
      !this.deliveryboy.email  || !this.deliveryboy.adress ) {
        return;
    }
  }else{
      if ( !this.deliveryboy.firstname || !this.deliveryboy.lastname || !this.deliveryboy.phone ||
        !this.deliveryboy.workshift || !this.deliveryboy.age || !this.deliveryboy.dni ||
      !this.deliveryboy.email  || !this.deliveryboy.adress || !this.deliveryboy.password ) {
        return;
    }
  }
 // validacion de campos para que no sean incorrectos mediante FormControl
  if(this.deliveryboy_id>0){
    if ( this.dniFormControl.invalid || this.firstnameFormControl.invalid || this.lastnameFormControl.invalid
      || this.workshiftFormControl.invalid || this.phoneFormControl.invalid
      || this.ageFormControl.invalid || this.adressFormControl.invalid || this.emailFormControl.invalid) {

      return;
    }
  }else{
    if ( this.dniFormControl.invalid || this.firstnameFormControl.invalid || this.lastnameFormControl.invalid
      || this.workshiftFormControl.invalid || this.phoneFormControl.invalid
      || this.ageFormControl.invalid || this.adressFormControl.invalid || this.passwordFormControl.invalid || this.emailFormControl.invalid){

        return;
      }
  }
  //modal para que muestre el mensaje para confirmación de guardado del deliveryboy mientras se hace el servicio
    if(this.deliveryboy_id>0){
      Swal.fire({
        title: 'Aviso',
        text: "¿Estás seguro que deseas actualizar los datos del deliveryboy?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, actualziar!' ,

        }).then((result) => {
        // llamado sel servicio guardarDeliveryboy desde deliveryboy.service.ts y se le pasa 2 parametros
        if (result.value) {
          this.deliveryboyservice.guardarDeliveryboy(this.deliveryboy)
          .subscribe(
            (response) => {
              console.log(response);
              if ( response && response.ok && response.result != 0 )
                Swal.fire(
                  'Enhorabuena!',
                  'El deliveryboy ha sido actualizado.',
                  'success'
                  );
                this.router.navigate(['/deliveryboy/listado']);
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
        console.log(this.deliveryboy);
        this.deliveryboyservice.guardarDeliveryboy(this.deliveryboy)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'El deliveryboy ha sido guardado.',
                'success'
                );
              this.router.navigate(['/deliveryboy/listado']);
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
    this.router.navigate(['/deliveryboy/listado']);
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
