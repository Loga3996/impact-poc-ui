(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'deluxe-branded-marketing';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/company-revenue-report/company-revenue-report.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/company-revenue-report/company-revenue-report.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar fxLayoutGap='20px' class=\"toolbar\"><b>Overall Amount Report</b></mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\"  class = 'spinner' *ngIf=\"loading else loaded\">\n  <mat-spinner mode=\"indeterminate\" ></mat-spinner>\n</div>\n<div fxLayout='row' *ngIf=\"!loading else loaded\" fxLayoutGap=\"10px\">\n  <highcharts-chart \n    [Highcharts]=\"highcharts\" \n    [options]=\"companyChartOptions\"\n    style=\"width: 100%; height: 300px; display: block;\">\n  </highcharts-chart>\n  <highcharts-chart \n    [Highcharts]=\"highcharts\" \n    [options]=\"officeChartOptions\"\n    style=\"width: 100%; height: 300px; display: block;\">\n  </highcharts-chart>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/company-revenue-report/company-revenue-report.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/company-revenue-report/company-revenue-report.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wYW55LXJldmVudWUtcmVwb3J0L2NvbXBhbnktcmV2ZW51ZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/company-revenue-report/company-revenue-report.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/company-revenue-report/company-revenue-report.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CompanyRevenueReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRevenueReportComponent", function() { return CompanyRevenueReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular Core

var CompanyRevenueReportComponent = /** @class */ (function () {
    function CompanyRevenueReportComponent() {
    }
    CompanyRevenueReportComponent.prototype.ngOnInit = function () {
    };
    CompanyRevenueReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-revenue-report',
            template: __webpack_require__(/*! ./company-revenue-report.component.html */ "./src/app/dashboard/company-revenue-report/company-revenue-report.component.html"),
            styles: [__webpack_require__(/*! ./company-revenue-report.component.scss */ "./src/app/dashboard/company-revenue-report/company-revenue-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompanyRevenueReportComponent);
    return CompanyRevenueReportComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Toolbar -->\n<mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"toolbar\">\n  <span fxFlex=\"50\"><b>Cart-Orders Summary</b></span>\n  <!-- Year Selection Field -->\n  <form [formGroup]=\"formGroup\" fxLayout=\"row\" fxFlex>\n    <mat-form-field appearance=\"outline\" fxFlex=40>\n      <mat-label class='text-center'>Select Year</mat-label>\n      <mat-select [(ngModel)]=\"yearValue\" formControlName=\"year\">\n        <mat-option *ngFor=\"let year of selectYearOptions\" [value]=\"year.selectYearValue\">\n          {{year.selectYearValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <!-- Company Selection Field -->\n    <mat-form-field appearance=\"outline\" fxFlex=60>\n      <mat-label class='text-center'>Select Company</mat-label>\n      <mat-select [(ngModel)]=\"companyValue\" formControlName=\"company\">\n        <mat-option *ngFor=\"let company of selectCompanyOptions\" [value]=\"company.selectCompanyValue\">\n          {{company.selectCompanyName}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </form>\n</mat-toolbar>\n<!-- Loader -->\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class='spinner' *ngIf=\"loading else loaded\">\n  <mat-spinner mode=\"indeterminate\"></mat-spinner>\n</div>\n<!-- Charts -->\n<div fxLayout='column' fxLayoutGap=\"10px\" *ngIf=\"!loading else loaded\">\n  <!-- Year Wise Company & Office Charts -->\n  <highcharts-chart id=\"company\" [Highcharts]=\"highcharts\" [options]=\"companyChartOptions\"\n    style=\"width: 100%; height: 400px; display: block;\">\n  </highcharts-chart>\n  <highcharts-chart id=\"office\" [Highcharts]=\"highcharts\" [options]=\"officeChartOptions\"\n    style=\" width:100%; height: 400px; display: block;\">\n  </highcharts-chart>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background: #d3d3d3;\n  font-size: 16pt;\n  font-display: bold;\n  padding: 5px; }\n\n.company-select {\n  width: 70% !important; }\n\n::ng-deep .mat-form-field-appearance-outline {\n  display: inline-block !important;\n  font-size: 14px;\n  padding: 10px;\n  color: #020202 !important;\n  font-style: bold !important; }\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0.1em; }\n\n:host /deep/ .mat-select-value-text {\n  color: #f16230 !important;\n  font-style: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvZ2FuYXRoYW4vSW1wYWN0LXBvYy1jb2RlL2ltcGFjdC1wb2MtdWkvc3JjL2FwcC9kYXNoYm9hcmQvY29tcGFueS1yZXZlbnVlLXllYXItYW1vdW50L2NvbXBhbnktcmV2ZW51ZS15ZWFyLWFtb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcGFueS1yZXZlbnVlLXllYXItYW1vdW50L2NvbXBhbnktcmV2ZW51ZS15ZWFyLWFtb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2QzZDNkMztcbiAgZm9udC1zaXplOiAxNnB0O1xuICBmb250LWRpc3BsYXk6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jb21wYW55LXNlbGVjdCB7XG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMwMjAyMDIgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogYm9sZCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMC4xZW07XG59XG5cbjpob3N0IC9kZWVwLyAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgY29sb3I6ICNmMTYyMzAgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogYm9sZCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CompanyRevenueYearAmountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRevenueYearAmountComponent", function() { return CompanyRevenueYearAmountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_modules_no_data_to_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "./node_modules/highcharts/modules/no-data-to-display.js");
/* harmony import */ var highcharts_modules_no_data_to_display__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_no_data_to_display__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_models_chart_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/chart-data */ "./src/app/shared/models/chart-data.ts");
/* harmony import */ var src_app_shared_services_order_revenue_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/order-revenue.service */ "./src/app/shared/services/order-revenue.service.ts");

// Angular Imports


// HighCharts Imports




highcharts_modules_no_data_to_display__WEBPACK_IMPORTED_MODULE_6___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);
highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_5___default()(highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__);
// Models

// Services

var CompanyRevenueYearAmountComponent = /** @class */ (function () {
    function CompanyRevenueYearAmountComponent(fb, chartService) {
        var _this = this;
        this.fb = fb;
        this.chartService = chartService;
        this.highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__;
        this.selectYearOptions = [];
        this.selectCompanyOptions = [];
        this.clickOptions = [];
        this.selected = this.yearValue;
        // Chart Options
        this.companyChartOptions = {
            chart: {
                type: 'column',
                borderRadius: 10,
            },
            events: {},
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: 'black',
                    }
                },
                title: {
                    useHTML: true,
                    text: "<span style=\"color:black;\"><b>Months</b><span>",
                },
            },
            yAxis: {
                labels: {
                    style: {
                        color: 'black',
                    },
                },
                title: {
                    useHTML: true,
                    text: '<span style="color:black;"><b>Amount($)</b><span>',
                },
            },
            legend: {
                enabled: false,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                headerFormat: '<span style="font-size:16px; margin:auto"><b>{point.key}</b></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
                borderRadius: 30,
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    allowPointSelect: true,
                    states: { select: { color: null, borderWidth: 2, borderColor: '#000000' } },
                    dataLabels: {
                        enabled: true,
                        format: "$ {point.y:.2f}"
                    },
                    point: {
                        events: {
                            click: function (event) {
                                _this.getMonOffChartBasedOnCom(event.point.year, event.point.code, event.point.mcode);
                            }
                        }
                    }
                }
            },
            exporting: {
                buttons: {
                    contextButton: {
                        symbol: 'menu',
                        text: "<b>PDF</b>",
                        symbolFill: '#F16230',
                        menuItems: null,
                        onclick: function () {
                            this.exportChart({
                                type: 'application/pdf',
                                filename: this.title.textStr
                            });
                        }
                    }
                },
                sourceWidth: 1200,
                sourceHeight: 800,
                scale: 2,
            },
            series: [{
                    name: "<b>Amount</b>",
                    data: [],
                    color: '#F16230',
                }],
        };
        // Chart Options
        this.officeChartOptions = {
            chart: {
                type: 'column',
                borderRadius: 10,
            },
            lang: {
                noData: "<span style=\"font-size:16px;color:black;\">No data available.\n Please Select Company and Month<span>"
            },
            events: {},
            title: {
                text: ''
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: 'black',
                    },
                },
                title: {
                    useHTML: true,
                    text: "<span style=\"color:black;\"><b>Office</b><span>",
                },
            },
            yAxis: {
                labels: {
                    style: {
                        color: 'black',
                    }
                },
                title: {
                    useHTML: true,
                    text: '<span style="color:black;"><b>Amount($)</b><span>',
                },
            },
            legend: {
                enabled: false,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                headerFormat: '<span style="font-size:16px; margin:auto"><b>{point.key}</b></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
                borderRadius: 30,
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    allowPointSelect: true,
                    states: { select: { color: null, borderWidth: 2, borderColor: '#000000' } },
                    dataLabels: {
                        enabled: true,
                        format: "<b>$ {point.y:.2f}</b>"
                    },
                    point: {
                        events: {}
                    }
                }
            },
            exporting: {
                sourceWidth: 1200,
                sourceHeight: 800,
                scale: 2
            },
            navigator: {
                enabled: true,
                margin: 0,
                height: 12,
                // outlineColor: '#F16230',
                // outlineWidth: 2,
                maskFill: '#F16230',
                maskWidth: 300,
                series: {
                    name: 'navigator',
                    lineWidth: 0,
                    marker: {
                        enabled: false,
                    },
                },
                xAxis: {
                    plotBands: [{
                            from: -100,
                            to: 10000,
                            color: 'rgba(16, 16, 16, 0.5)'
                        }]
                },
                handles: {
                    backgroundColor: '#000000',
                    borderColor: '#777',
                    borderRadius: 5,
                },
            },
            series: [{
                    name: "<b>Amount</b>",
                    data: [],
                    color: '#F16230',
                }],
        };
    }
    CompanyRevenueYearAmountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.fb.group({
            year: this.getYearSelectOptions(),
            company: this.getCompanySelectOptions(this.year),
        });
        var years = 'year';
        this.formGroup.controls[years].valueChanges.subscribe(function (yearValue) {
            _this.getCompanySelectOptions(yearValue);
            _this.getYearOrYearCompanyChart(yearValue);
            _this.companyValue = 0;
        });
        var company = 'company';
        this.formGroup.controls[company].valueChanges.subscribe(function (companyValue) {
            var year = _this.formGroup.controls.year.value;
            _this.getYearOrYearCompanyChart(year, companyValue);
            _this.getMonOffChartBasedOnCom(year, companyValue);
        });
    };
    // Get Year Select Options
    CompanyRevenueYearAmountComponent.prototype.getYearSelectOptions = function () {
        var _this = this;
        this.loading = true;
        var param = new src_app_shared_models_chart_data__WEBPACK_IMPORTED_MODULE_7__["ChartsData"]();
        this.chartService.getSelectData(param)
            .subscribe(function (result) {
            _this.loading = false;
            _this.result = result;
            _this.result.forEach(function (r) {
                _this.selectYearOptions.push({
                    selectYearValue: r.year,
                });
                _this.yearValue = _this.selectYearOptions.slice(-1)[0].selectYearValue;
            });
        });
    };
    // Get Company select options based on selected year
    CompanyRevenueYearAmountComponent.prototype.getCompanySelectOptions = function (year) {
        var _this = this;
        var param = new src_app_shared_models_chart_data__WEBPACK_IMPORTED_MODULE_7__["ChartsData"]();
        param.year = year;
        this.chartService.getSelectData(param)
            .subscribe(function (result) {
            _this.result = result;
            var companyValue = [];
            _this.result.forEach(function (r) {
                companyValue.push({
                    selectCompanyName: r.company,
                    selectCompanyValue: r.code,
                });
                _this.selectCompanyOptions = companyValue;
            });
        });
    };
    // Get Year or Year & Company Month wise Chart based on params
    CompanyRevenueYearAmountComponent.prototype.getYearOrYearCompanyChart = function (year, code, selected) {
        var _this = this;
        var param = new src_app_shared_models_chart_data__WEBPACK_IMPORTED_MODULE_7__["ChartsData"]();
        param.year = year;
        param.code = code;
        this.chartService
            .getCompanyData(param)
            .subscribe(function (result) {
            _this.result = result;
            var chartsValue = [];
            var monthcodeValue = [];
            _this.result.forEach(function (r) {
                chartsValue.push({
                    name: r.months,
                    y: r.amount,
                    year: r.year,
                    code: r.code,
                    mcode: r.mcode,
                    company: r.company
                });
                monthcodeValue.push({
                    mcode: r.mcode,
                });
            });
            var chartTitle = selected && selected.point ? selected.point.name : _this.result[0].company;
            // Chart
            _this.companyChartOptions.series[0].data = chartsValue;
            if (year && code) {
                _this.companyChartOptions.title.text = "Monthwise Revenue for " + year + " and " + chartTitle;
            }
            else {
                _this.companyChartOptions.title.text = "Monthwise Revenue for " + year;
            }
            highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__["chart"]('company', _this.companyChartOptions);
        });
    };
    // Get Office Month wise Chart based on params
    CompanyRevenueYearAmountComponent.prototype.getMonOffChartBasedOnCom = function (year, code, mcode, selected) {
        var _this = this;
        var param = new src_app_shared_models_chart_data__WEBPACK_IMPORTED_MODULE_7__["ChartsData"]();
        param.year = year;
        param.code = code;
        param.mcode = mcode;
        this.chartService.getCompanyData(param)
            .pipe()
            .subscribe(function (result) {
            _this.result = result;
            var chartsValue = [];
            var chartEmpty = [];
            _this.result.forEach(function (r) {
                chartsValue.push({
                    name: r.office,
                    y: r.amount
                });
            });
            if (year && code && mcode) {
                _this.officeChartOptions.series[0].data = chartsValue;
            }
            else {
                _this.officeChartOptions.series[0].data = chartEmpty;
            }
            highcharts_highstock__WEBPACK_IMPORTED_MODULE_3__["chart"]('office', _this.officeChartOptions);
        });
    };
    CompanyRevenueYearAmountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-revenue-year-amount',
            template: __webpack_require__(/*! ./company-revenue-year-amount.component.html */ "./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.html"),
            styles: [__webpack_require__(/*! ./company-revenue-year-amount.component.scss */ "./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_order_revenue_service__WEBPACK_IMPORTED_MODULE_8__["OrderRevenueService"]])
    ], CompanyRevenueYearAmountComponent);
    return CompanyRevenueYearAmountComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #content id=\"content\" class=\"dashboard-header\">\n    <mat-toolbar fxLayout=\"row\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"25\">\n            <a class=\"navbar-brand\" href=\"index.html\">\n                <img src=\"assets/images/logo-black.png\" alt=\"homepage\" class=\"light-logo\">\n            </a>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"end end\" fxFlex=\"75\">\n            <button mat-raised-button class=\"button\" (click)=\"downloadPdf()\">\n                <!-- <b>Download PDF</b> -->\n                Download PDF\n            </button>\n        </div>\n    </mat-toolbar>\n    <app-company-revenue-year-amount></app-company-revenue-year-amount>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-header mat-toolbar {\n  background: #fff !important; }\n\n.dashboard-header .button {\n  color: #fff;\n  background: #F16230; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvZ2FuYXRoYW4vSW1wYWN0LXBvYy1jb2RlL2ltcGFjdC1wb2MtdWkvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksMkJBQTJCLEVBQUE7O0FBRi9CO0VBS0ksV0FBVztFQUNYLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmRhc2hib2FyZC1oZWFkZXJ7XG4gIG1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogI0YxNjIzMDtcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.downloadPdf = function () {
        var data = document.getElementById('content');
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(function (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('Deluxe_Branded_Marketing.pdf');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DashboardComponent.prototype, "content", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing.module */ "./src/app/dashboard/dashboard.routing.module.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _order_revenue_report_order_revenue_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-revenue-report/order-revenue-report.component */ "./src/app/dashboard/order-revenue-report/order-revenue-report.component.ts");
/* harmony import */ var _company_revenue_report_company_revenue_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company-revenue-report/company-revenue-report.component */ "./src/app/dashboard/company-revenue-report/company-revenue-report.component.ts");
/* harmony import */ var _company_revenue_year_amount_company_revenue_year_amount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./company-revenue-year-amount/company-revenue-year-amount.component */ "./src/app/dashboard/company-revenue-year-amount/company-revenue-year-amount.component.ts");














var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _order_revenue_report_order_revenue_report_component__WEBPACK_IMPORTED_MODULE_11__["OrderRevenueReportComponent"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_4__["HighchartsChartComponent"],
                _company_revenue_report_company_revenue_report_component__WEBPACK_IMPORTED_MODULE_12__["CompanyRevenueReportComponent"],
                _company_revenue_year_amount_company_revenue_year_amount_component__WEBPACK_IMPORTED_MODULE_13__["CompanyRevenueYearAmountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/order-revenue-report/order-revenue-report.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/order-revenue-report/order-revenue-report.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Order Revenue Chart -->\n<mat-toolbar class=\"toolbar\"><b>Orders Amount Report</b></mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class = 'spinner' *ngIf=\"loading else loaded\">\n  <mat-spinner mode=\"indeterminate\"></mat-spinner>\n</div>\n<div fxLayout='row'*ngIf=\"!loading else loaded\"  fxLayoutGap=\"10px\">\n  <highcharts-chart\n    [Highcharts]=\"highcharts\" \n    [options]=\"yearChartOptions\"\n    style=\"width: 100%; height: 300px; display: block;\">\n  </highcharts-chart>\n  <highcharts-chart \n    [Highcharts]=\"highcharts\" \n    [options]=\"monthChartOptions\"\n    style=\"width: 100%; height: 300px; display: block;\">\n  </highcharts-chart>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/order-revenue-report/order-revenue-report.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/order-revenue-report/order-revenue-report.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background: #d3d3d3;\n  font-size: 16pt;\n  font-display: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvZ2FuYXRoYW4vSW1wYWN0LXBvYy1jb2RlL2ltcGFjdC1wb2MtdWkvc3JjL2FwcC9kYXNoYm9hcmQvb3JkZXItcmV2ZW51ZS1yZXBvcnQvb3JkZXItcmV2ZW51ZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL29yZGVyLXJldmVudWUtcmVwb3J0L29yZGVyLXJldmVudWUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGZvbnQtZGlzcGxheTogYm9sZDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/order-revenue-report/order-revenue-report.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/order-revenue-report/order-revenue-report.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OrderRevenueReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRevenueReportComponent", function() { return OrderRevenueReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_order_revenue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order-revenue.service */ "./src/app/shared/services/order-revenue.service.ts");

// Angular core

// import Highchart

// Services

var OrderRevenueReportComponent = /** @class */ (function () {
    function OrderRevenueReportComponent(orderService) {
        this.orderService = orderService;
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.clickOptions = [];
    }
    OrderRevenueReportComponent.prototype.ngOnInit = function () {
        this.getOrderChart(this.param);
    };
    // Orders Amount Chart
    OrderRevenueReportComponent.prototype.getOrderChart = function (param) {
        var _this = this;
        this.loading = true;
        // const param = new ChartsData();
        var componentScope = this;
        this.orderService.getCompanyData(param).subscribe(function (result) {
            _this.result = result;
            var chartsData = [];
            _this.result.forEach(function (r) {
                // get chart values
                chartsData.push({
                    x: r.date,
                    y: r.amount,
                });
                _this.clickOptions.push({
                    clickYearValue: r.date,
                });
                _this.getMonthChart(param, _this.clickOptions.slice(-1)[0].clickYearValue);
            });
            _this.loading = false;
            // Chart Options
            _this.yearChartOptions = {
                chart: {
                    type: 'column',
                    borderRadius: 10
                },
                events: {},
                title: {
                    text: 'Year Wise Amount'
                },
                xAxis: {
                    type: 'date',
                    labels: {
                        style: {
                            color: 'black',
                        }
                    },
                    title: {
                        text: '<span style="color:black;">Years<span>',
                    },
                },
                yAxis: {
                    labels: {
                        style: {
                            color: 'black',
                        }
                    },
                    title: {
                        text: '<span style="color:black;">Amount($)<span>',
                    },
                },
                legend: {
                    enabled: false,
                },
                tooltip: {
                    headerFormat: '<span style="font-size:16px; margin:auto"><b>{point.key}</b></span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true,
                    borderRadius: 30,
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        allowPointSelect: true,
                        states: { select: { color: null, borderWidth: 2, borderColor: '#000000' } },
                        dataLabels: {
                            enabled: true,
                            format: "$ {point.y:.2f}"
                        },
                        point: {
                            events: {
                                click: function (event) {
                                    if (event && event.point && event.point.x) {
                                        componentScope.getMonthChart(this.param, event.point.x);
                                    }
                                    else {
                                        alert('Point is not present in Chart');
                                    }
                                }
                            }
                        }
                    }
                },
                series: [{
                        name: "<b>Amount</b>",
                        data: chartsData,
                        color: '#ff6300'
                    }],
            };
        });
    };
    // Month Wise Chart
    OrderRevenueReportComponent.prototype.getMonthChart = function (param, year) {
        var _this = this;
        // const param = new ChartsData();
        param.year = year;
        this.orderService.getCompanyData(param).subscribe(function (result) {
            _this.result = result;
            var chartsData = [];
            // get chart values
            _this.result.forEach(function (r) {
                chartsData.push({
                    name: r.months,
                    y: r.amount,
                });
            });
            // chart Options
            _this.monthChartOptions = {
                chart: {
                    type: 'column',
                    borderRadius: 10
                },
                events: {},
                title: {
                    text: "Month Wise Amount for <b>" + year + "</b>"
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {
                            color: 'black',
                        }
                    },
                    title: {
                        text: '<span style="color:black;">Months<span>',
                    },
                },
                yAxis: {
                    labels: {
                        style: {
                            color: 'black',
                        }
                    },
                    title: {
                        text: '<span style="color:black;">Amount($)<span>',
                    },
                },
                legend: {
                    enabled: false,
                },
                tooltip: {
                    headerFormat: '<span style="font-size:16px; margin:auto"><b>{point.key}</b></span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true,
                    borderRadius: 30,
                },
                plotOptions: {
                    column: {
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: "$ {point.y:.2f}"
                        },
                        point: {
                            events: {}
                        }
                    }
                },
                series: [{
                        name: "<b>Amount</b>",
                        data: chartsData,
                        color: '#ff6300'
                    }],
            };
        });
    };
    OrderRevenueReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-revenue-report',
            template: __webpack_require__(/*! ./order-revenue-report.component.html */ "./src/app/dashboard/order-revenue-report/order-revenue-report.component.html"),
            styles: [__webpack_require__(/*! ./order-revenue-report.component.scss */ "./src/app/dashboard/order-revenue-report/order-revenue-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_order_revenue_service__WEBPACK_IMPORTED_MODULE_3__["OrderRevenueService"]])
    ], OrderRevenueReportComponent);
    return OrderRevenueReportComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar fxLayout=\"row\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\"fxFlex=\"20\">\n        <a class=\"navbar-brand\" href=\"index.html\">\n            <img src=\"assets/images/logo-black.png\" alt=\"homepage\" class=\"light-logo\">\n        </a>\n    </div>\n    <div fxLayout=\"column\" fxLayoutAlign=\"end end\"fxFlex=\"80\"></div>\n</mat-toolbar> "

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  background: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xvZ2FuYXRoYW4vSW1wYWN0LXBvYy1jb2RlL2ltcGFjdC1wb2MtdWkvc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/models/chart-data.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/chart-data.ts ***!
  \*********************************************/
/*! exports provided: ChartsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsData", function() { return ChartsData; });
var ChartsData = /** @class */ (function () {
    function ChartsData() {
    }
    return ChartsData;
}());



/***/ }),

/***/ "./src/app/shared/services/order-revenue.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/order-revenue.service.ts ***!
  \**********************************************************/
/*! exports provided: OrderRevenueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRevenueService", function() { return OrderRevenueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var OrderRevenueService = /** @class */ (function () {
    function OrderRevenueService(httpClient) {
        this.httpClient = httpClient;
    }
    OrderRevenueService.prototype.getCompanyData = function (param) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].CART_BACKEND_URL, param);
    };
    OrderRevenueService.prototype.getSelectData = function (param) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].YM_BACKEND_URL, param);
    };
    OrderRevenueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderRevenueService);
    return OrderRevenueService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // backend info
    CART_BACKEND_URL: 'http://localhost:7000/cart-orders/Cart_Orders',
    YM_BACKEND_URL: 'http://localhost:7000/cart-orders/Ym',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




// import Hammer.js

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/loganathan/Impact-poc-code/impact-poc-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map