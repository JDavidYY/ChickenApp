import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PromotionModel } from '../../models/promotion-info.model';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-promotion-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.scss']
})
export class PromotionEditComponent implements OnInit {


  promotion: PromotionModel = new PromotionModel();
  promotion_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

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

  constructor(private route:ActivatedRoute, private router:Router, private datePipe: DatePipe, private promotionservice: PromotionService) { }

  ngOnInit(): void {
    this.promotion_id = +this.route.snapshot.paramMap.get('promotion_id');
    if ( this.promotion_id > 0) {
      this.cargarPromotion( this.promotion_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }
  cargarPromotion(idPromotion){
    this.promotionservice.getPromotion(idPromotion)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Promotion encontrado');
          console.log(response.result);
          // this.promotion = response.promotion;
          this.promotion.idPromotion= response.result["idPromotion"];
          this.promotion.firstname= response.result["firstname"];
          this.promotion.lastname= response.result["lastname"];
          this.promotion.dni= response.result["dni"];
          this.promotion.phone= response.result["phone"];
          this.promotion.workshift= response.result["workshift"];
          this.promotion.age= response.result["age"];
          this.promotion.email= response.result["email"];
          this.promotion.password= "";
          this.promotion.adress= response.result["adress"];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  guardarPromotion(){

    // validacion de campos para que no sean vacios
    if(this.promotion_id>0){
      if ( !this.promotion.firstname || !this.promotion.lastname || !this.promotion.phone ||
        !this.promotion.workshift || !this.promotion.age || !this.promotion.dni ||
      !this.promotion.email  || !this.promotion.adress ) {
        return;
    }
  }else{
      if ( !this.promotion.firstname || !this.promotion.lastname || !this.promotion.phone ||
        !this.promotion.workshift || !this.promotion.age || !this.promotion.dni ||
      !this.promotion.email  || !this.promotion.adress || !this.promotion.password ) {
        return;
    }
  }
 // validacion de campos para que no sean incorrectos mediante FormControl
  if(this.promotion_id>0){
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
  //modal para que muestre el mensaje para confirmación de guardado del promotion mientras se hace el servicio
    if(this.promotion_id>0){
      Swal.fire({
        title: 'Aviso',
        text: "¿Estás seguro que deseas actualizar los datos del promotion?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, actualziar!' ,

        }).then((result) => {
        // llamado sel servicio guardarPromotion desde promotion.service.ts y se le pasa 2 parametros
        if (result.value) {
          this.promotionservice.guardarPromotion(this.promotion)
          .subscribe(
            (response) => {
              console.log(response);
              if ( response && response.ok && response.result != 0 )
                Swal.fire(
                  'Enhorabuena!',
                  'El promotion ha sido actualizado.',
                  'success'
                  );
                this.router.navigate(['/promotion/listado']);
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
      text: "¿Estás seguro que deseas guardar la promoción?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarPromotion desde promotion.service.ts y se le pasa 2 parametros
      if (result.value) {
        console.log(this.promotion);
        this.promotionservice.guardarPromotion(this.promotion)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'La promoción ha sido guardado.',
                'success'
                );
              this.router.navigate(['/promotion/listado']);
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
    this.router.navigate(['/promotion/listado']);
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
