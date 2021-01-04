import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PromotionModel } from '../models/promotion-info.model';
import { PromotionPostResponse } from '../models/promotion-post-response.model';
import { PromotionListResponse } from '../models/promotion-list-response.model';
import { PromotionGetResponse } from '../models/promotion-get-response.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "promo";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del promotion por POST
	guardarPromotion(promotion:PromotionModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<PromotionPostResponse>(url, promotion, options);
	}
// api para obtener el listado de toda promocion por GET
	seleccionarPromotions():Observable<PromotionListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<PromotionListResponse>(url, options);
	}
	// api para obtener los datos de un Promotion por GET
  	getPromotion(idPromotion:string):Observable<PromotionGetResponse> {
		const url = this.apiurl + "/get/" + idPromotion;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<PromotionGetResponse>(url, options);
	}
	// api para eliminar a Promotion por GET
  	eliminarPromotion(idProduct:string):Observable<PromotionPostResponse> {
		const url = this.apiurl + "/delete";
		var data = { idProduct: idProduct }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<PromotionPostResponse>(url,data, options);
	}
}
