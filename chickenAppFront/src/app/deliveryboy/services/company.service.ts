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
export class CompanyService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "company";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	

  cambiarDisponibilidadTienda():Observable<DeliveryboyPostResponse>{
	const url = this.apiurl + "/change-availability";
	const options = this.httpService.headerOptionsJson(true, true);
	return this.httpClient.post<DeliveryboyPostResponse>(url, options);
    }
    
    
    getDisponibilidad():Observable<DeliveryboyListResponse> {
        const url = this.apiurl + "/select/state";
        const options = this.httpService.headerOptionsJson(true, true);
        return this.httpClient.get<DeliveryboyListResponse>(url, options);
    }

}
