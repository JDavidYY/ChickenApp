import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { ChefModel } from '../models/chef-info.model';
import { ChefGetResponse } from '../models/chef-get-response.model';
import { ChefListResponse } from '../models/chef-list-response.model';
import { ChefPostResponse } from '../models/chef-post-response.model';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ChefService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "chef";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del chef por POST
	guardarChef(chef:ChefModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<ChefPostResponse>(url, chef, options);
	}
// api para obtener el listado de todoS los chef por GET
	seleccionarChefs():Observable<ChefListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ChefListResponse>(url, options);
	}
	// api para obtener los datos de un Chef por GET
  	getChef(idChef:string):Observable<ChefGetResponse> {
		const url = this.apiurl + "/get/" + idChef;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ChefGetResponse>(url, options);
	}
	// api para eliminar a Chef por GET
  	eliminarChef(idChef:string):Observable<ChefPostResponse> {
		const url = this.apiurl + "/delete/";
		var data = { idChef: idChef }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<ChefPostResponse>(url,data, options);
	}	
}