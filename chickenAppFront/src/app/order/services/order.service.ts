import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { OrderModel } from '../models/order-info.model';
import { OrderGetResponse } from '../models/order-get-response.model';
import { OrderListResponse } from '../models/order-list-response.model';
import { OrderPostResponse } from '../models/order-post-response.model';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "order";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos de la orden por POST
	guardarOrder(order:OrderModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<OrderPostResponse>(url, order, options);
	}
	// api para obtener el listado de todas las ordenes por GET
	seleccionarOrders():Observable<OrderListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<OrderListResponse>(url, options);
	}
	// api para obtener los datos de una Orden por GET
  	getOrder(idOrder:string):Observable<OrderGetResponse> {
		const url = this.apiurl + "/get/" + idOrder;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<OrderGetResponse>(url, options);
	}
	// api para eliminar una Orden por GET
  	eliminarOrder(idOrder:string):Observable<OrderPostResponse> {
		const url = this.apiurl + "/delete";
		var data = { idOrder: idOrder }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<OrderPostResponse>(url,data, options);
	}
	// api para cambiar un estado
	cambiarEstado(idOrder:string):Observable<OrderPostResponse> {
		const url = this.apiurl + "/change-state";
		var data = { idOrder: idOrder }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<OrderPostResponse>(url,data, options);
	}
}
