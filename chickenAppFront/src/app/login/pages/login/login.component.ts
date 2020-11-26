import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';
import { UserLoginModel } from '../../models/userlogin.model';
import { Validators, FormControl } from '@angular/forms';

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

	}

	goto(url):void
	{
		this.router.navigate([url]);
  }
  
  // Método para ir al registro de un nuevo cliente
  newClient():void
  {
    this.router.navigate(['/newClient/']);
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

    this.loginService.login(this.user)
				.subscribe(
				  (response) => {
					console.log(response);

    });

    }

}
