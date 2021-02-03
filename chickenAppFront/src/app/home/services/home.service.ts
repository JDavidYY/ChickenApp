import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class HomeService {
    	//construccion del api para llamar el servicio del back

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

  }
  
  
  
  }