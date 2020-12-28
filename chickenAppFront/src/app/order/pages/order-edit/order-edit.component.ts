import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { OrderModel } from '../../models/order-info.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

 
  order: OrderModel = new OrderModel();
  order_id: number = 0;
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

  constructor(private route: ActivatedRoute, private router:Router, private datePipe: DatePipe, private orderservice: OrderService) { }
  
  ngOnInit(): void {   
    this.order_id = +this.route.snapshot.paramMap.get('order_id');
    if ( this.order_id > 0) {
      this.cargarChef( this.order_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }

  cargarOrder(idOrder){
    this.orderservice.getChef(idOrder)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Order encontrado');
          console.log(response.result);
          // this.deliveryboy = response.deliveryboy;
          this.order.idOrder= response.result["idOrder"];
          this.order.firstname= response.result["firstname"];
          this.order.lastname= response.result["lastname"];
          this.order.dni= response.result["dni"];
          this.order.phone= response.result["phone"];
          this.order.workshift= response.result["workshift"];
          this.order.age= response.result["age"];
          this.order.email= response.result["email"];
          this.order.password= "";
          this.order.adress= response.result["adress"];
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }


  guardarOrder(){


    // validacion de campos para que no sean vacios
    if(this.order_id>0){
      if ( !this.order.firstname || !this.order.lastname || !this.order.phone || 
        !this.order.workshift || !this.order.age || !this.order.dni ||
      !this.order.email  || !this.order.adress ) {
        return;
    }
  }else{
      if ( !this.order.firstname || !this.order.lastname || !this.order.phone || 
        !this.order.workshift || !this.order.age || !this.order.dni ||
      !this.order.email  || !this.order.adress || !this.order.password ) {
        return;
    }
  }
 // validacion de campos para que no sean incorrectos mediante FormControl
  if(this.order_id>0){
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
  //modal para que muestre el mensaje para confirmación de guardado del chef mientras se hace el servicio
    if(this.order_id>0){
      Swal.fire({
        title: 'Aviso',
        text: "¿Estás seguro que deseas actualizar los datos del order?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, actualizar!' ,
  
        }).then((result) => {
        // llamado sel servicio guardarOrder desde order.service.ts y se le pasa 2 parametros
        if (result.value) {
          this.orderservice.guardarOrder(this.order)
          .subscribe(
            (response) => {
              console.log(response);
              if ( response && response.ok && response.result != 0 )
                Swal.fire(
                  'Enhorabuena!',
                  'El order ha sido actualizado.',
                  'success'
                  );
                this.router.navigate(['/order/listado']);
            },
            (err) => {
              console.log(err);
            }
          );
        }
      });
    } else {
      Swal.fire({
      title: 'Aviso',
      text: "¿Estás seguro que deseas guardar el order?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado sel servicio guardarOrder desde order.service.ts y se le pasa 2 parametros
      if (result.value) {
        this.orderservice.guardarOrder(this.order)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'El order ha sido guardado.',
                'success'
                );
              this.router.navigate(['/order/listado']);
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
    this.router.navigate(['/order/listado']);
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