import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChartsData } from '../models/chart-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderRevenueService {

  apiUrl: string = 'http://localhost:7000/cart-orders/Company';

  officeUrl: string = 'http://localhost:7000/cart-orders/Office';

  constructor(private httpClient: HttpClient) { }

  getData(param: ChartsData): Observable<any> {
    return this.httpClient.post('http://localhost:7000/cart-orders/YM', param);
  }

  getCompanyData(param: ChartsData): Observable<any> {
    return this.httpClient.post(this.apiUrl, param);
  }

  getOfficeData(param: ChartsData): Observable<any> {
    return this.httpClient.post(this.officeUrl, param);
  }


}
