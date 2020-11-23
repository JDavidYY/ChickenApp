import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CategoryPostResponse } from '../models/category-post-response.model';
import { CategoryListResponse } from '../models/category-list-response.model';
import { CategoryModel } from '../models/category-info.model';
import { CategoryGetResponse } from '../models/category-get-response.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "category";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del chef por POST
	guardarCategory(category:CategoryModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<CategoryPostResponse>(url, category, options);
	}
// api para obtener el listado de todoS los chef por GET
	seleccionarCategories():Observable<CategoryListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<CategoryListResponse>(url, options);
	}
	// api para obtener los datos de un Chef por GET
  	getCategory(idCategory:string):Observable<CategoryGetResponse> {
		const url = this.apiurl + "/get/" + idCategory;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<CategoryGetResponse>(url, options);
	}
	// api para eliminar a Chef por POST
  	eliminarCategory(idCategory:string):Observable<CategoryPostResponse> {
    const url = this.apiurl + "/delete";
    var data = { idCategory: idCategory }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<CategoryPostResponse>(url, data, options);
	}
}
