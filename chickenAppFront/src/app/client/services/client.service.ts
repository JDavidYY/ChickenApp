import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ClientModel } from '../models/client-info.model';
import { ClientPostResponse } from '../models/client-post-response.model';
import { ClientListResponse } from '../models/client-list-response.model';
import { ClientGetResponse } from '../models/client-get-response.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "client";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del chef por POST
	guardarClient(client:ClientModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<ClientPostResponse>(url, client, options);
  }

// api para obtener el listado de todoS los chef por GET
	seleccionarClients():Observable<ClientListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ClientListResponse>(url, options);
	}
	// api para obtener los datos de un Chef por GET
  	getClient(idClient:string):Observable<ClientGetResponse> {
		const url = this.apiurl + "/get/" + idClient;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ClientGetResponse>(url, options);
	}
	// api para eliminar a Chef por GET
  	eliminarClient(idClient:string):Observable<ClientGetResponse> {
		const url = this.apiurl + "/delete/" + idClient;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.delete<ClientGetResponse>(url, options);
<<<<<<< Updated upstream
	}	
}
=======
	}

	// api para que un cliente cambie su propia contraseña
	changePasswordClient(client:ClientModel):Observable<ClientPostResponse>{
		const url = this.apiurl + "/changepassword";
		var data = { email:client.email, password:client.password, newPassword:client.newPassword }
		const options = this.httpService.headerOptionsJson(true,true);
		return this.httpClient.post<ClientPostResponse>(url, data,options);
	}
}
>>>>>>> Stashed changes
