//Angular core
import { Component, OnInit } from '@angular/core';
//import Highchart
import * as Highcharts from 'highcharts';
//Services
import { OrderRevenueService } from 'src/app/shared/services/order-revenue.service';
//Models
import { ChartsData } from 'src/app/shared/models/chart-data';

@Component({
   selector: 'app-order-revenue-report',
   templateUrl: './order-revenue-report.component.html',
   styleUrls: ['./order-revenue-report.component.scss']
})

export class OrderRevenueReportComponent implements OnInit {
   highcharts = Highcharts;
   chartOptions: any;
   monthChartOptions: any;
   result: ChartsData[];
   param: ChartsData;
   clickOptions = [];
   clickOptionsValue: any;
   year: number;

   constructor(private orderService: OrderRevenueService) { }

   ngOnInit() {
      this.getOrderChart(this.param);
   }
   //Orders Amount Chart
   getOrderChart(param: ChartsData) {
      var param = new ChartsData();
      let componentScope = this;
      this.orderService.getData(param).subscribe((result: ChartsData[]) => {
         this.result = result;
         let chartsData = [];
         //get chart values
         for (var i = 0; i < this.result.length; i++) {
            chartsData.push({
               x: this.result[i].date,
               y: this.result[i].amount,
            })
            this.clickOptions.push({
               clickOptionsValue: this.result[i].date,
            })
            this.getMonthChart(param, this. clickOptions[i].clickOptionsValue)
         }
         // Chart Options
         this.chartOptions = {
            chart: {
               type: "column",
            },
            events: {},
            title: {
               text: "Year Wise Amount"
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
               useHTML: true
            },
            plotOptions: {
               column: {
                  cursor: 'pointer',
                  point: {
                     events: {
                        click: function (event) {
                           if (event && event.point && event.point.x) {
                              componentScope.getMonthChart(this.param, event.point.x);
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

   //Month Wise Chart
   getMonthChart(param: ChartsData, year: number) {
      var param = new ChartsData();
      param.year = year;
      this.orderService.getData(param).subscribe((result: ChartsData[]) => {
         this.result = result;
         let chartsData = [];
         //get chart values
         for (var i = 0; i < this.result.length; i++) {
            chartsData.push({
               name: this.result[i].month,
               y: this.result[i].amount,
            })
         }
         //chart Options
         this.monthChartOptions = {
            chart: {
               type: "column",
            },
            events: {},
            title: {
               text: `Month Wise Amount for <b>${param.year}</b>`
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
