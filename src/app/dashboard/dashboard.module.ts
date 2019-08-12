import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { OrderRevenueReportComponent } from './order-revenue-report/order-revenue-report.component';
import { CompanyRevenueReportComponent } from './company-revenue-report/company-revenue-report.component';
import { CompanyRevenueYearAmountComponent } from './company-revenue-year-amount/company-revenue-year-amount.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    OrderRevenueReportComponent,
    HighchartsChartComponent,
    CompanyRevenueReportComponent,
    CompanyRevenueYearAmountComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
