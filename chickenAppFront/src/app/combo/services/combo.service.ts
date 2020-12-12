import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ComboPostResponse } from '../models/combo-post-response.model';
import { ComboGetResponse } from '../models/combo-get-response.model';
import { ComboListResponse } from '../models/combo-list-response.model';
import { ComboModel } from '../models/combo-info.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ComboService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "combo";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del combo por POST
	guardarCombo(combo:ComboModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<ComboPostResponse>(url, combo, options);
	}
// api para obtener el listado de todoS los  combo por GET
	seleccionarCombos():Observable<ComboListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ComboListResponse>(url, options);
	}
	// api para obtener los datos de un Combo por GET
  	getCombo(idCombo:string):Observable<ComboGetResponse> {
		const url = this.apiurl + "/get/" + idCombo;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ComboGetResponse>(url, options);
	}
	// api para eliminar a Combo por GET
  	eliminarCombo(idCombo:string):Observable<ComboPostResponse> {
		const url = this.apiurl + "/delete";
		var data = { idCombo: idCombo }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<ComboPostResponse>(url,data, options);
	}
}
