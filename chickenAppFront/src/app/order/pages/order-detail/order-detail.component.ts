import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe} from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { OrderModel } from '../../models/order-info.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

 
  order: OrderModel = new OrderModel();
  order_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  dateFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(10)
  ]);

  typeFormControl = new FormControl('', [
  Validators.required,
  ]);

  estateFormControl = new FormControl('', [
  Validators.required,
  ]);

  feedbackFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(10)
  ]);


  constructor(private route: ActivatedRoute, private router:Router, private datePipe: DatePipe, private orderservice: OrderService) { }
  
  ngOnInit(): void {   
    this.order_id = +this.route.snapshot.paramMap.get('order_id');
    if ( this.order_id > 0) {
      this.cargarOrder( this.order_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }

  cargarOrder(idOrder){
    this.orderservice.getOrder(idOrder)
    .subscribe(
      (response) => {
        console.log(response);
        if ( response != null && response.ok && response.result != null){
          console.log('Orden encontrada');
          console.log(response.result);
          this.order.idOrder= response.result["idOrder"];
          this.order.date= response.result["date"];
          this.order.type= response.result["type"];
          this.order.estate= response.result["estate"];
          this.order.feedback= response.result["feedback"];
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
      if ( !this.order.date || !this.order.type || !this.order.estate || 
        !this.order.feedback ) {
        return;
    }
    }else{
      if ( !this.order.date || !this.order.type || !this.order.estate || 
        !this.order.feedback) {
        return;
    }
  }
 // validacion de campos para que no sean incorrectos mediante FormControl
  if(this.order_id>0){
    if ( this.dateFormControl.invalid || this.typeFormControl.invalid 
      || this.estateFormControl.invalid || this.feedbackFormControl.invalid) {
   
      return;
    }
  }else{
    if ( this.dateFormControl.invalid || this.typeFormControl.invalid 
      || this.estateFormControl.invalid || this.feedbackFormControl.invalid){
   
        return;
      }
  }
  //modal para que muestre el mensaje para confirmación de guardado de la orden 
  //mientras se hace el servicio
    if(this.order_id>0){
      Swal.fire({
        title: 'Aviso',
        text: "¿Estás seguro que desea actualizar los datos de la orden?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, actualizar!' ,
  
        }).then((result) => {
        // llamado del servicio guardarOrder desde order.service.ts 
        //y se le pasa 2 parametros
        if (result.value) {
          this.orderservice.guardarOrder(this.order)
          .subscribe(
            (response) => {
              console.log(response);
              if ( response && response.ok && response.result != 0 )
                Swal.fire(
                  'Enhorabuena!',
                  'La orden ha sido actualizada.',
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
      text: "¿Estás seguro que deseas guardar la orden?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, guardar!' ,

      }).then((result) => {
      // llamado del servicio guardarOrder desde order.service.ts y 
      // se le pasa 2 parametros
      if (result.value) {
        this.orderservice.guardarOrder(this.order)
        .subscribe(
          (response) => {
            console.log(response);
            if ( response && response.ok && response.result != 0 )
              Swal.fire(
                'Enhorabuena!',
                'La orden ha sido guardada.',
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
