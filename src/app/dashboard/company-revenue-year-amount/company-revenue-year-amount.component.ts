//Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

//HighCharts Imports
import * as Highcharts from 'highcharts/highstock';
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
import noData from 'highcharts/modules/no-data-to-display';

noData(Highcharts)
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

//Models
import { ChartsData } from 'src/app/shared/models/chart-data';

//Services
import { OrderRevenueService } from 'src/app/shared/services/order-revenue.service';

@Component({
  selector: 'app-company-revenue-year-amount',
  templateUrl: './company-revenue-year-amount.component.html',
  styleUrls: ['./company-revenue-year-amount.component.scss']
})

export class CompanyRevenueYearAmountComponent implements OnInit {
  highcharts = Highcharts;
  formGroup: FormGroup;
  result: ChartsData[];
  param: ChartsData;
  selectYearOptions = [];
  selectCompanyOptions = [];
  clickOptions = [];
  title: string;
  yearValue: number;
  companyValue: number;
  year: number;
  code: number;
  loading: boolean;
  selected = this.yearValue;

  //Chart Options
  companyChartOptions: any = {
    chart: {
      type: "column",
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
        text: '<span style="color:black;"><b>Months</b><span>',
      },
    },
    yAxis: {
      labels: {
        style: {
          color: 'black',
        },
        formatter: function () {
          if (this.value > 1000) return Highcharts.numberFormat(this.value / 1000, 1) + "K";  // maybe only switch if > 1000
          return Highcharts.numberFormat(this.value, 0);
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
          format: `$ {point.y:.2f}`
        },
        point: {
          events: {
            click: (event) => {
              this.getMonOffChartBasedOnCom(this.param, event.point.year, event.point.code, event.point.mcode);
            }
          }
        }
      }
    },
    exporting: {
      sourceWidth: 1200,
      sourceHeight: 800,
      scale: 2
    },
    series: [{
      name: `<b>Amount</b>`,
      data: [],
      color: '#F16230',
    }],
  };

  // Chart Options
  officeChartOptions: any = {
    chart: {
      type: "column",
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
        },
      },
      title: {
        useHTML: true,
        text: `<span style="color:black;"><b>Office</b><span>`,
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
          format: `<b>$ {point.y:.2f}</b>`
        },
        point: {
          events: {
          }
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
      outlineColor: '#F16230',
      outlineWidth: 2,
      maskFill: '#F16230',
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
      name: `<b>Amount</b>`,
      data: [],
      color: '#F16230',
    }],
  };

  constructor(
    public fb: FormBuilder,
    private chartService: OrderRevenueService
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      year: this.getYearSelectOptions(this.param),
      company: this.getCompanySelectOptions(this.param, this.year),
    });
    this.formGroup.controls['year'].valueChanges.subscribe((yearValue) => {
      this.getCompanySelectOptions(this.param, yearValue);
      this.getYearOrYearCompanyChart(this.param, yearValue);
      this.companyValue = 0;
    })
    this.formGroup.controls['company'].valueChanges.subscribe((companyValue) => {
      const year = this.formGroup.controls['year'].value;
      this.getYearOrYearCompanyChart(this.param, year, companyValue);
    })
  }

  // Get Year Select Options 
  getYearSelectOptions(param: ChartsData) {
    this.loading = true;
    var param = new ChartsData()
    this.chartService.getSelectData(param)
      .subscribe((result: ChartsData[]) => {
        this.loading = false;
        this.result = result;
        this.result.forEach((r) => {
          this.selectYearOptions.push({
            selectYearValue: r.year,
          })
          this.yearValue = this.selectYearOptions.slice(-1)[0].selectYearValue;
        });
      })
  }

  // Get Company select options based on selected year
  getCompanySelectOptions(param: ChartsData, year: number) {
    var param = new ChartsData();
    param.year = year;
    this.chartService.getSelectData(param)
      .subscribe((result) => {
        this.result = result;
        let companyValue = [];
        this.result.forEach((r) => {
          companyValue.push({
            selectCompanyName: r.company,
            selectCompanyValue: r.code,
          })
          this.selectCompanyOptions = companyValue;
        });
      })
  }

  //Get Year or Year & Company Month wise Chart based on params
  getYearOrYearCompanyChart(param: ChartsData, year: number, code?: number) {
    var param = new ChartsData();
    param.year = year;
    param.code = code;
    this.chartService
      .getCompanyData(param)
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsValue = [];
        let monthcodeValue = [];
        this.result.forEach((r) => {
          chartsValue.push({
            name: r.months,
            y: r.amount,
            year: r.year,
            code: r.code,
            mcode: r.mcode,
          })
          monthcodeValue.push({
            mcode: r.mcode,
          })
        })
        //Chart
        this.companyChartOptions.series[0]['data'] = chartsValue;
        Highcharts.chart('company', this.companyChartOptions);
      })
  }
  //Get Office Month wise Chart based on params
  getMonOffChartBasedOnCom(param: ChartsData, year: number, code: number, mcode: number) {
    var param = new ChartsData();
    param.year = year;
    param.code = code;
    param.mcode = mcode;
    this.chartService
      .getCompanyData(param)
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        let chartsValue = [];
        this.result.forEach((r) => {
          chartsValue.push({
            name: r.office,
            y: r.amount
          })
        })
        //chart options
        this.officeChartOptions.series[0]['data'] = chartsValue;
        Highcharts.chart('office', this.officeChartOptions);
      })
  }
}
