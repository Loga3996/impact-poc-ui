// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// Highcharts Import
import { HighchartsChartComponent } from 'highcharts-angular';

// Modules
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MaterialModule } from '../shared/material/material.module';

// Components
import { DashboardComponent } from './dashboard.component';
import { ChartReportComponent } from './chart-report/chart-report.component';

@NgModule({
  declarations: [
    HighchartsChartComponent,
    DashboardComponent,
    ChartReportComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    FlexLayoutModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
