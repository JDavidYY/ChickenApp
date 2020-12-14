import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductPostResponse } from '../models/product-post-response.model';
import { ProductModel } from '../models/product-info.model';
import { ProductListResponse } from '../models/product-list-response.model';
import { ProductGetResponse } from '../models/product-get-response.model';
import { FilePostResponse } from '../models/file-post-response';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "product";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del product por POST
	saveProduct(product:ProductModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
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
  	eliminarProduct(idProduct:string):Observable<ProductPostResponse> {
		const url = this.apiurl + "/delete/";
		var data = { idProduct: idProduct }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<ProductPostResponse>(url,data, options);
	}

	// downloadfile(filename:string): Observable<any> {
	// 	const url = this.apiurl + "download/" + filename;
	// 	const headers = this.httpService.headersDownloadGET(true);
	// 	return this.httpClient.get<any>(url, headers);
	// }

	// savedownloadFile(filename:string): Observable<any> {
	// 	let url = this.apiurl + "save-downloadfile";
	// 	var data = {filename: filename}
	// 	return this.httpClient.post<any>(url, data, this.httpService.headerOptionsJson(true, true));
	// }

	cargarImagen(file: File, idProduct: any) {
		const options = this.httpService.headerOptionsForm(true);
		const formData: FormData = new FormData();
		//console.log(file);
		//console.log(file.name);
		formData.append('image', file, file.name);
		formData.append('idProduct', idProduct);
		const url = this.apiurl + '/uploadimg';
		return this.httpClient.post<FilePostResponse>(url, formData, options);
	}

}
