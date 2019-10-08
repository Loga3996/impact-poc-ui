import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Import Charts Data
import { ChartsData } from '../models/chart-data';

@Injectable({
  providedIn: 'root'
})
export class ChartReportService {

  constructor(private httpClient: HttpClient) { }

  getAmountData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.CART_AMOUNT_URL, param);
  }
  getBillData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.CART_BILL_URL, param);
  }
  getPromoData(param: ChartsData): Observable<any> {
    return this.httpClient.post(environment.CART_PROMO_URL, param);
  }

}
