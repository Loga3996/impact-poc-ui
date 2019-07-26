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

  constructor(private chartService: OrderRevenueService) { }

  ngOnInit() {
    this.getChart(this.param);
  }

  //change chart based on selection value
  onSelect(selected: MatSelectChange) {
    this.getCompayWiseAmountBasedOnYear(this.param, selected.value);
    this.getOfficeWiseAmountBasedOnYear(this.param, selected.value);
  }

  //get Charts Based on selection value
  getChart(param: ChartsData) {
    var param = new ChartsData();
    this.chartService
      .getData(param)
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        for (var i = 0; i < this.result.length; i++) {
          this.selectOptions.push({
            selectYearOptions: this.result[i].date,
          })
          this.selectValue = this.selectOptions[i].selectYearOptions;
          this.getCompayWiseAmountBasedOnYear(param, this.selectOptions[i].selectYearOptions);
          this.getOfficeWiseAmountBasedOnYear(param, this.selectOptions[i].selectYearOptions);
        }
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
        //get chart values
        for (var i = 0; i < this.result.length; i++) {
          chartsData.push({
            name: this.result[i].company,
            y: this.result[i].amount,
            code: this.result[i].code,
            year: this.result[i].date,
          })
          this.clickOptions.push({
            clickYearValue: this.result[i].date,
            clickCodeValue: this.result[i].code
          })
          this.getCompayMonthWiseAmountBasedOnYear(this.param, year, this.clickOptions[i].clickCodeValue)
        }
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
                    // if (event && event.point && event.point.year && event.point.code) {
                    componentScope.getCompayMonthWiseAmountBasedOnYear(this.param, event.point.year, event.point.code);
                    // } else {
                    //   alert('Point is not present in Chart')
                    // }
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
        //get chart values
        for (var i = 0; i < this.result.length; i++) {
          chartsData.push({
            name: this.result[i].month,
            y: this.result[i].amount,
            company: this.result[i].company,
          })
        }
        const chartTitle = selected && selected.point ? selected.point.name : this.result[0].company;
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
        //get chart values
        for (var i = 0; i < this.result.length; i++) {
          chartsData.push({
            name: this.result[i].office,
            y: this.result[i].amount,
            year: this.result[i].date,
            code: this.result[i].code,
          })
          this.clickOptions.push({
            clickYearValue: this.result[i].date,
            clickCodeValue: this.result[i].code,
          })
          this.getOfficeMonthWiseAmountBasedOnYear(this.param, year, this.clickOptions[i].clickCodeValue)
        }
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
    param.year = year;
    param.code = code;
    this.chartService
      .getOfficeData(param).
      subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsData = [];
        //get chart values
        for (var i = 0; i < this.result.length; i++) {
          chartsData.push({
            name: this.result[i].month,
            y: this.result[i].amount,
            office: this.result[i].office,
          })
        }
        const chartTitle = selected && selected.point ? selected.point.name : this.result[0].office;
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
