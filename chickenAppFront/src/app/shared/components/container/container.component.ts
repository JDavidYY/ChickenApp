import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

	appVersion = environment.appVersion;

	constructor(private router:Router) {
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

}
