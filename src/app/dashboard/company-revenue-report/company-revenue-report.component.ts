//Angular Core
import { Component, OnInit } from '@angular/core';
//Highchart Module
import * as Highcharts from 'highcharts';
//Models
import { ChartsData } from 'src/app/shared/models/chart-data';
//services
import { OrderRevenueService } from 'src/app/shared/services/order-revenue.service';

@Component({
  selector: 'app-company-revenue-report',
  templateUrl: './company-revenue-report.component.html',
  styleUrls: ['./company-revenue-report.component.scss']
})

export class CompanyRevenueReportComponent implements OnInit {

  highcharts = Highcharts;
  companyChartOptions: any;
  officeChartOptions: any;
  result: ChartsData[];
  param: ChartsData;
  clickOptions = [];
  loading: boolean;

  constructor(private companyService: OrderRevenueService) { }

  ngOnInit() {
    
  }

 
}
