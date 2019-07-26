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
  chartOptions: any;
  monthChartOptions: any;
  result: ChartsData[];
  param: ChartsData;
  clickOptions = [];

  constructor(private service: OrderRevenueService) { }

  ngOnInit() {
    this.getCompanyWiseChart(this.param)
  }

  //Overall company wise amount Chart
  getCompanyWiseChart(param: ChartsData) {
    var param = new ChartsData();
    let componentScope = this;
    this.service.getCompanyData(param).subscribe((result: ChartsData[]) => {
      this.result = result;
      let chartsData = [];
      for (var i = 0; i < this.result.length; i++) {
        chartsData.push({
          name: this.result[i].company,
          y: this.result[i].amount,
          code: this.result[i].code
        })
        this.clickOptions.push({
          clickOptionsValue: this.result[i].code,
        })
        this.getOfficeWiseChart(param, this.clickOptions[i].clickOptionsValue)
      }
      //ChartOptions
      this.chartOptions = {
        chart: {
          type: "line",
        },
        events: {},
        title: {
          text: "Company Wise Overall Amount"
        },
        xAxis: {
          type: 'category',
          labels: {
            style: {
              color: 'black',
            }
          },
          title: {
            text: '<span style="color:black;">Company<span>',
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
          line: {
            cursor: 'pointer',
            point: {
              events: {
                click: function (event) {
                  if (event && event.point && event.point.code) {
                    componentScope.getOfficeWiseChart(this.param, event.point.code, event);
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

  //Office Wise Amount Column Chart
  getOfficeWiseChart(param: ChartsData, code: number, selected?: any) {
    var param = new ChartsData();
    param.code = code;
    this.service.getOfficeData(param)
      .subscribe(
        (result: ChartsData[]) => {
          this.result = result;
          let chartsData = [];
          this.result.forEach((r) => {
            //get X and Y values
            chartsData.push({
              name: r.office,
              y: r.amount,
              company: r.company
            });
          });
          const chartTitle = selected && selected.point ? selected.point.name : this.result[0].company;
          
          //ChartOptions
          this.monthChartOptions = {
            chart: {
              type: "line",
            },
            events: {},
            title: {
              text: `Office Wise Overall Amount for <b>${chartTitle} </b>Company`
            },
            xAxis: {
              type: 'category',
              labels: {
                style: {
                  color: 'black',
                }
              },
              title: {
                text: '<span style="color:black;">Office<span>',
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
              line: {
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
