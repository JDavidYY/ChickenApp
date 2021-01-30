import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';
import { UserLoginModel } from '../../models/userlogin.model';
import { Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserLoginModel = new UserLoginModel();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor(private router:Router, private route:ActivatedRoute,private loginService:LoginService) { }

	ngOnInit() {
    localStorage.clear();
	}

	goto(url):void
	{
		this.router.navigate([url]);
  }
  
  // Método para ir al registro de un nuevo cliente
  newClient():void
  {
    this.router.navigate(['/client/agregar']);
  }

  //Método para iniciar sesión
	login()
	{
    if( !this.user.email || !this.user.password )
    {
			return;
		}

    if( this.emailFormControl.invalid || this.passwordFormControl.invalid )
    {
			return;
    }

    // this.router.navigate(['/principal/dashboard']);
    this.loginService.login(this.user)
    .subscribe(
      (response) => {
      console.log(response);
      if ( response && response.ok && response.result != 0)	{
        localStorage.setItem("role_id", response.result["typeUser"] );
          Swal.fire(
        'Enhorabuena!',
        'Usuario verificado.',
        'success'
        );

        setTimeout(() => {
        if( response.result["typeUser"] == 2 ){
          localStorage.clear();
          localStorage.setItem("name", "Admin");
          localStorage.setItem("email", "admin@empresa.com");
          localStorage.setItem("rol", "Admin");
          localStorage.setItem("role_id", "2" );
          localStorage.setItem("usuario", "Admin");
          this.router.navigate(['/principal/dashboard']);
//  Cliente
        }else if ( response.result["typeUser"] == 1){
          localStorage.clear();
          localStorage.setItem("idClient", response.result["idClient"]);
          localStorage.setItem("usuario", response.result["firstname"]);
          localStorage.setItem("role_id", response.result["typeUser"]);
          localStorage.setItem("rol", "Cliente");
          localStorage.setItem("name", response.result["firstname"]);
          localStorage.setItem("email", response.result["email"]);
          this.router.navigate(['/purchase/menu']);
          // Cocinero
        }else if ( response.result["typeUser"] == "3" ){
          localStorage.clear();
          localStorage.setItem("idEmpleado", response.result["idChef"]);
          localStorage.setItem("usuario", response.result["firstname"]);
          localStorage.setItem("role_id", response.result["typeUser"]);
          localStorage.setItem("nombreCompleto", response.result["nombre"]+ ' '+ response.result["apellidoPat"] + ' ' + response.result["apellidoMat"]);
          localStorage.setItem("rol", "Chef");
          localStorage.setItem("name", response.result["firstname"]);
          localStorage.setItem("email", response.result["email"]);
          this.router.navigate(['/principal/dashboard']);
          // Delivery
        }else if ( response.result["typeUser"] == "4" ){
          localStorage.clear();
          localStorage.setItem("idDeliveryboy", response.result["idDeliveryboy"]);
          localStorage.setItem("usuario", response.result["firstname"]);
          localStorage.setItem("role_id", response.result["typeUser"]);
          localStorage.setItem("nombreCompleto", response.result["nombre"]+ ' '+ response.result["apellidoPat"] + ' ' + response.result["apellidoMat"]);
          localStorage.setItem("rol", "Chef");
          localStorage.setItem("name", response.result["firstname"]);
          localStorage.setItem("email", response.result["email"]);
          this.router.navigate(['/principal/dashboard']);
          // Gerente
        }else if ( response.result["typeUser"] == "5" ){
          localStorage.clear();
          localStorage.setItem("idEmpleado", response.result["idEmpleado"]);
          localStorage.setItem("usuario", response.result["firstname"]);
          localStorage.setItem("role_id", response.result["typeUser"]);
          localStorage.setItem("nombreCompleto", response.result["nombre"]+ ' '+ response.result["apellidoPat"] + ' ' + response.result["apellidoMat"]);
          localStorage.setItem("rol", "Chef");
          localStorage.setItem("name", response.result["firstname"]);
          localStorage.setItem("email", response.result["email"]);
          this.router.navigate(['/principal/dashboard']);
        }else{
          // localStorage.setItem("idMaestro", response.result["idMaestro"]);
          console.log("Este rol no existe en el sistema");
          this.router.navigate(['/login']);
        }
        }, 1500);
      }else{
        Swal.fire(
          'Oops!',
          'Usuario o contraseña ingresados son incorrectos.',
          'error'
          );
      }
      },
      (err) => {
      console.log(err);
      }
    );
    // this.loginService.login(this.user)
		// 		.subscribe(
		// 		  (response) => {
    //       console.log(response);
    //       if ( response && response.ok && response.result != 0 )
    //         this.router.navigate(['/principal/dashboard']);
    // });

    }

}
