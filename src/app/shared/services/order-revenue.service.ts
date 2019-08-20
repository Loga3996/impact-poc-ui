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

  getCompanyData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.CART_BACKEND_URL, param);
  }

  getSelectData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.YM_BACKEND_URL, param);
  }
}
