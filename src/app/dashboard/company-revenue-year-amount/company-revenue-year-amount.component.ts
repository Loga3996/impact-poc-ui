//Angular Core
import { Component, OnInit } from '@angular/core';
//HighCharts Import
import * as Highcharts from 'highcharts';
//Models
import { ChartsData } from 'src/app/shared/models/chart-data';
//Services
import { OrderRevenueService } from 'src/app/shared/services/order-revenue.service';
//Angular MatSelectChange
import { MatSelectChange } from '@angular/material/select';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-company-revenue-year-amount',
  templateUrl: './company-revenue-year-amount.component.html',
  styleUrls: ['./company-revenue-year-amount.component.scss']
})

export class CompanyRevenueYearAmountComponent implements OnInit {

  highcharts = Highcharts;
  companyChartOptions: any;
  officeChartOptions: any;
  companyMonthChartOptions: any;
  officeMonthChartOptions: any;
  selectValue: number;
  result: ChartsData[];
  param: any;
  year: number;
  code: number;
  selectOptions = [];
  chartsData = [];
  clickOptions = [];
  loading: boolean = true;

  constructor(private chartService: OrderRevenueService) { }

  ngOnInit() {
    this.requestDataFromMultipleSources();
    this.loading = false;
  }

  //change chart based on selection value
  onSelect(selected: MatSelectChange) {
    this.getCompayWiseAmountBasedOnYear(this.param, selected.value);
    this.getOfficeWiseAmountBasedOnYear(this.param, selected.value);
  }
  public requestDataFromMultipleSources(): Observable<any> {
    let response1 = this.getChart(this.param);
    let response2 = this.getCompayWiseAmountBasedOnYear(this.param, this.year);
    let response3 = this.getOfficeWiseAmountBasedOnYear(this.param, this.year);
    return forkJoin([response1, response2, response3]);

  }
  //get Charts Based on selection value
  getChart(param: ChartsData) {
    var param = new ChartsData();
    this.chartService
      .getData(param)
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        this.result.forEach((r) => {
          //get selection values
          this.selectOptions.push({
            selectYearOptions: r.date,
          });
          this.selectValue = this.selectOptions.slice(-1)[0].selectYearOptions;
          this.getCompayWiseAmountBasedOnYear(param, this.selectValue);
          this.getOfficeWiseAmountBasedOnYear(param, this.selectValue);
        });
      })
  }
  //Company wise Amount Based On year
  getCompayWiseAmountBasedOnYear(param: ChartsData, year: number) {
    var param = new ChartsData();
    param.year = year;
    let componentScope = this;
    this.chartService
      .getCompanyData(param).
      subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsData = [];
        this.result.forEach((r) => {
          //get chart values
          chartsData.push({
            name: r.company,
            y: r.amount,
            code: r.code,
            year: r.date
          });
          this.clickOptions.push({
            clickYearValue: r.date,
            clickCodeValue: r.code,
          });
          this.getCompayMonthWiseAmountBasedOnYear(this.param, year, this.clickOptions.slice(-1)[0].clickCodeValue)
        });
        // ChartOptions
        this.companyChartOptions = {
          chart: {
            type: "column"
          },
          events: {},
          title: {
            text: `Company Wise Amount for <b>${year}</b>`
          },
          xAxis: {
            type: 'category',
            labels: {
              style: {
                color: 'black',
              }
            },
          },
          yAxis: {
            labels: {
              style: {
                color: 'black',
              }
            },
            title: {
              text: '<span style="color:black;">Amount ($)<span>',
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
            useHTML: true
          },
          plotOptions: {
            column: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function (event) {
                    componentScope.getCompayMonthWiseAmountBasedOnYear(this.param, event.point.year, event.point.code);
                  }
                }
              }
            }
          },
          series: [{
            name: `<b>Amount</b>`,
            data: chartsData,
            color: '#003BFF'
          }],
        }
      })
  }
  //Month wise Company chart based on year
  getCompayMonthWiseAmountBasedOnYear(param: ChartsData, year: number, code: number, selected?: any) {
    var param = new ChartsData();
    param.code = code;
    param.year = year;
    this.chartService
      .getCompanyData(param).
      subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsData = [];
        this.result.forEach((r) => {
          //get chart values
          chartsData.push({
            name: r.month,
            y: r.amount,
            company: r.company,
          });
        });
        const chartTitle = selected && selected.point ? selected.point.name : this.result.slice(-1)[0].company;
        // Chart Options
        this.companyMonthChartOptions = {
          chart: {
            type: "column"
          },
          events: {},
          title: {
            text: `Month Wise Amount for <b>${chartTitle}</b> Company in <b>${year}</b> `
          },
          xAxis: {
            type: 'category',
            labels: {
              style: {
                color: 'black',
              }
            },
          },
          yAxis: {
            labels: {
              style: {
                color: 'black',
              }
            },
            title: {
              text: '<span style="color:black;">Amount ($)<span>',
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
            useHTML: true
          },
          plotOptions: {
            column: {
              cursor: 'pointer',
              point: {
                events: {}
              }
            }
          },
          series: [{
            name: `<b>Amount</b>`,
            data: chartsData,
            color: '#FF6A00'
          }],
        }
      })
  }
  //Office wise chart based on year
  getOfficeWiseAmountBasedOnYear(param: ChartsData, year: number) {
    var param = new ChartsData();
    param.year = year;
    let componentScope = this;
    this.chartService
      .getOfficeData(param).
      subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsData = [];
        this.result.forEach((r) => {
          //get chart values
          chartsData.push({
            name: r.office,
            y: r.amount,
            code: r.code,
            year: r.date
          });
          this.clickOptions.push({
            clickYearValue: r.date,
            clickCodeValue: r.code,
          });
          this.getOfficeMonthWiseAmountBasedOnYear(this.param, year, this.clickOptions.slice(-1)[0].clickCodeValue)
        });
        // chart Options
        this.officeChartOptions = {
          chart: {
            type: "spline"
          },
          events: {},
          title: {
            text: `Office Wise Amount for <b>${year}</b>`
          },
          xAxis: {
            type: 'category',
            labels: {
              style: {
                color: 'black',
              }
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
            useHTML: true
          },
          plotOptions: {
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function (event) {
                    if (event && event.point && event.point.year && event.point.code) {
                      componentScope.getOfficeMonthWiseAmountBasedOnYear(this.param, event.point.year, event.point.code);
                    } else {
                      alert('Point is not present in Chart')
                    }
                  }
                }
              }
            }
          },
          series: [{
            name: `<b>Amount</b>`,
            data: chartsData,
            color: '#003BFF'
          }],
        }
      })
  }
  //Month wise office chart amount based on year and company
  getOfficeMonthWiseAmountBasedOnYear(param: ChartsData, year: number, code: number, selected?: any) {
    var param = new ChartsData();
    param.code = code;
    param.year = year;
    this.chartService
      .getOfficeData(param).
      subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsData = [];
        //get chart values
        this.result.forEach((r) => {
          //get X and Y values
          chartsData.push({
            name: r.month,
            y: r.amount,
            office: r.office
          });
        });
        const chartTitle = selected && selected.point ? selected.point.name : this.result.slice(-1)[0].office;
        // Column Chart
        this.officeMonthChartOptions = {
          chart: {
            type: "column"
          },
          events: {},
          title: {
            text: `Month Wise Amount for <b>${chartTitle}</b> Company in <b>${year}</b> `
          },
          xAxis: {
            type: 'category',
            labels: {
              style: {
                color: 'black',
              }
            },
          },
          yAxis: {
            labels: {
              style: {
                color: 'black',
              }
            },
            title: {
              text: '<span style="color:black;">Amount ($)<span>',
            },
          },
          legend: {
            enabled: false,
          },
          tooltip: {
            headerFormat: `<span style="font-size:16px; margin:auto"><b>{point.key}</b></span><table>`,
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>$ {point.y:.2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              cursor: 'pointer',
              point: {
                events: {}
              }
            }
          },
          series: [{
            name: `<b>Amount</b>`,
            data: chartsData,
            color: '#FF6A00'
          }],
        }
      })
  }
}
