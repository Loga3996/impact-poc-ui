import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartComponent } from 'highcharts-angular';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { OrderRevenueReportComponent } from './order-revenue-report/order-revenue-report.component';
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DashboardComponent,
                HeaderComponent,
                OrderRevenueReportComponent,
                HighchartsChartComponent
            ],
            imports: [
                CommonModule,
                DashboardRoutingModule,
                MaterialModule,
                FlexLayoutModule,
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map