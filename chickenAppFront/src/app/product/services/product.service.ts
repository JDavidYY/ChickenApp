import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductPostResponse } from '../models/product-post-response.model';
import { ProductModel } from '../models/product-info.model';
import { ProductListResponse } from '../models/product-list-response.model';
import { ProductGetResponse } from '../models/product-get-response.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "datos-product";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del product por POST
	guardarProduct(product:ProductModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/save";
		return this.httpClient.post<ProductPostResponse>(url, product, options);
	}
// api para obtener el listado de todoS los product por GET
	seleccionarProducts():Observable<ProductListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ProductListResponse>(url, options);
	}
	// api para obtener los datos de un Product por GET
  	getProduct(idProduct:string):Observable<ProductGetResponse> {
		const url = this.apiurl + "/get/" + idProduct;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ProductGetResponse>(url, options);
	}
	// api para eliminar a Product por GET
  	eliminarProduct(idProduct:string):Observable<ProductGetResponse> {
		const url = this.apiurl + "/delete/" + idProduct;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.delete<ProductGetResponse>(url, options);
	}	
}