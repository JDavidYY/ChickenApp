import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DeliveryboyModel } from '../models/deliveryboy-info.model';
import { DeliveryboyPostResponse } from '../models/deliveryboy-post-response.model';
import { DeliveryboyGetResponse } from '../models/deliveryboy-get-response.model';
import { DeliveryboyListResponse } from '../models/deliveryboy-list-response.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class DeliveryboyService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "deliveryboy";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del chef por POST
	guardarDeliveryboy(deliveryboy:DeliveryboyModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<DeliveryboyPostResponse>(url, deliveryboy, options);
	}
// api para obtener el listado de todo el persona por GET
	seleccionarDeliveryboys():Observable<DeliveryboyListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<DeliveryboyListResponse>(url, options);
	}
	// api para obtener los datos de un Deliveryboy por GET
  	getDeliveryboy(idDeliveryboy:string):Observable<DeliveryboyGetResponse> {
		const url = this.apiurl + "/get/" + idDeliveryboy;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<DeliveryboyGetResponse>(url, options);
	}
	// api para eliminar a Chef por GET
  	eliminarDeliveryboy(idDeliveryboy:string):Observable<DeliveryboyPostResponse> {
		const url = this.apiurl + "/delete";
		var data = { idDeliveryboy: idDeliveryboy }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<DeliveryboyPostResponse>(url,data, options);
	}
}
