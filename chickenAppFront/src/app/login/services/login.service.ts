import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { HttpService } from '../../shared/services/http.service';
import { UserLoginModel } from '../models/userlogin.model';

@Injectable()
export class LoginService {
  //Construcción de la ruta hacia el método del back
	private api_url: string = environment.apiUrl + 'user';
    constructor
    (private http:HttpClient,private httpService:HttpService)
  		{ }

  //Api de login que enviar contraseña y correo para loguear al back
  login(user:UserLoginModel)
  {
    const url = this.api_url+'/login';
    const httpOptions = this.httpService.headerOptionsJson(true, true);
    return this.http.post<any>(url, user, httpOptions);
  }
}
