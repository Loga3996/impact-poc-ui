//Angular Core
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//HighCharts Import
import * as Highcharts from 'highcharts/highstock';
import * as HC_customEvents from 'highcharts-custom-events';
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsExporting from "highcharts/modules/exporting";
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
HC_customEvents(Highcharts);
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
  companyValue: any;
  year: number;
  code: number;
  selected = this.yearValue;

  chartOptions: any;
  offChartOptions: any;
  loading: boolean;

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
      this.companyValue = "Select Company";
      this.getYearOrYearCompanyChart(this.param, yearValue);
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
    let componentScope = this
    this.chartService.getCompanyData(param).subscribe((result: ChartsData[]) => {
      this.result = result;
      let chartsValue = [];
      this.result.forEach((r) => {
        chartsValue.push({
          name: r.months,
          y: r.amount,
          year: r.year,
          code: r.code,
          mcode: r.mcode,
        })
      })
      this.getMonOffChartBasedOnCom(this.param, year, code, chartsValue.slice(-1)[0].mcode);
      //Chart Options
      this.chartOptions = {
        chart: {
          type: "column",
          borderRadius: 10
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
            text: '<span style="color:black;">Months<span>',
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
            text: '<span style="color:black;">Amount($)<span>',
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
                click: function (event) {
                  componentScope.getMonOffChartBasedOnCom(this.param, event.point.year, event.point.code, event.point.mcode);
                }
              }
            }
          }
        },
        series: [{
          name: `<b>Amount</b>`,
          data: chartsValue,
          color: '#F16230',
        }],
      }
    })
  }

  getMonOffChartBasedOnCom(param: ChartsData, year: number, code: number, mcode?: number) {
    var param = new ChartsData();
    param.year = year;
    param.code = code;
    param.mcode = mcode;
    this.chartService.getCompanyData(param).subscribe((result: ChartsData[]) => {
      this.result = result;
      let chartsValue = [];
      this.result.forEach((r) => {
        chartsValue.push({
          name: r.office,
          y: r.amount
        })
        //chart options
        if (year && code && mcode) {
          this.offChartOptions = {
            chart: {
              type: "area",
              borderRadius: 10
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
                formatter: function () {
                  return typeof this.value !== 'number' ? this.value : ''
                }
              },
              title: {
                text: '<span style="color:black;">Office<span>',
              },
            },
            yAxis: {
              labels: {
                // formatter: function() {
                //   if ( this.value >= 100 ) return Highcharts.numberFormat( this.value/100, 0);  // maybe only switch if > 1000
                //   return Highcharts.numberFormat(this.value,0);
                // } ,
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
                marker: {
                  enabled: true,
                  symbol: 'diamond',
                  radius: 8,
                  states: { hover: { radius: 12 } }
                },
                point: {
                  events: {
                  }
                }
              }
            },
            // scrollbar: {
            //   enabled: true,
            //   liveRedraw: false
            // },
            // navigator: {
            //   enabled: true,
            //   // width: 120,
            //   outlineWidth: 0,
            //   backgroundColor: '##000000',
            //   maskFill: '#F16230',
            //   handles: {
            //     backgroundColor: '##000000',
            //     borderColor: '#777',
            //     borderRadius: 5,
            //     symbols: [
            //       'customarrow',
            //       'customcircle'
            //     ]
            //   },
            // },
            series: [{
              name: `<b>Amount</b>`,
              data: chartsValue,
              color: '#F16230',
            }],
          }
        }
      })
    })
  }
}
