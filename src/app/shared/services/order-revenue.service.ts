import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartsData } from '../models/chart-data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderRevenueService {

  constructor(private httpClient: HttpClient) { }

  getData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.YEAR_BACKEND_URL, param);
  }

  getCompanyData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.COMPANY_BACKEND_URL, param);
  }

  getOfficeData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.OFFICE_BACKEND_URL, param);
  }

}
