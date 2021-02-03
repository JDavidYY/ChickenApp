import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SalesModel } from '../models/sales-info.model';
import { SalesListResponse } from '../models/sales-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  apiurl:string = environment.apiUrl + "sales";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	seleccionarSales():Observable<SalesListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<SalesListResponse>(url, options);
  }

  seleccionarTops():Observable<SalesListResponse> {
		const url = this.apiurl + "/select-top";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<SalesListResponse>(url, options);
  }

}
