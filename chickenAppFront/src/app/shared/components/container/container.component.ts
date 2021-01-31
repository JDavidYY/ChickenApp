import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryboyService } from 'src/app/deliveryboy/services/deliveryboy.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
 	role_id: number = 0;
	usuario: string = "";
	name: string = "";
	email: string = "";
	rol: string = "";
  opened = true;
  state: string = "";

	appVersion = environment.appVersion;

	constructor(private router:Router, private deliveryboyservice: DeliveryboyService) {
	}

	ngOnDestroy(): void {

	}
	ngOnInit()
	{
	this.role_id = +localStorage.getItem("role_id");
	this.usuario = localStorage.getItem("usuario");
	this.name = localStorage.getItem("name");
	this.email = localStorage.getItem("email");
  this.rol = localStorage.getItem("rol");
  console.log(localStorage.getItem("role_id"));
  console.log(localStorage.getItem("state"));
  if(localStorage.getItem("role_id")=="4")
  {
    if(+localStorage.getItem("state")==1)
    {
      this.state="Disponible"
    }
    else
    {
      this.state="No Disponible"
    }
  }
	}

	goto(url):void
	{
		this.router.navigate([url]);
		this.opened = false;
	}

	logout(){
	this.router.navigate(['/login']);
	localStorage.clear();
  }

  cambiarDisponibilidad()
  {
    Swal.fire({
      title: 'Estas seguro que desea actualizar su disponibilidad?',
      text: "La disponibilidad se actualizará!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, cambiar!'
      }).then((result) => {
      if (result.value) {
      console.log(localStorage.getItem("idDeliveryboy"));
      this.deliveryboyservice.cambiarDisponibilidad(localStorage.getItem("idDeliveryboy"))
      .subscribe(
        (response) => {
          console.log(response);
          if (response.ok){
            Swal.fire(
              'Disponibilidad actualizada!',
              '',
              'success'
              );
              this.ngOnInit();
          }
        },
        (err) => {
          console.log(err);
        }
      );
      }
      })
  }

}
