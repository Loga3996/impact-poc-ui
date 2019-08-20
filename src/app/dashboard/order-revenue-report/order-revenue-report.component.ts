// Angular core
import { Component, OnInit } from '@angular/core';
// import Highchart
import * as Highcharts from 'highcharts';
// Services
import { OrderRevenueService } from 'src/app/shared/services/order-revenue.service';
// Models
import { ChartsData } from 'src/app/shared/models/chart-data';

@Component({
   selector: 'app-order-revenue-report',
   templateUrl: './order-revenue-report.component.html',
   styleUrls: ['./order-revenue-report.component.scss']
})

export class OrderRevenueReportComponent implements OnInit {
   highcharts = Highcharts;
   yearChartOptions: any;
   monthChartOptions: any;
   result: ChartsData[];
   param: ChartsData;
   clickOptions = [];
   clickOptionsValue: any;
   year: number;
   loading: boolean;
   constructor(private orderService: OrderRevenueService) { }

   ngOnInit() {
      this.getOrderChart(this.param);
   }
   // Orders Amount Chart
   getOrderChart(param: ChartsData) {
      this.loading = true;
      // const param = new ChartsData();
      const componentScope = this;
      this.orderService.getCompanyData(param).subscribe((result: ChartsData[]) => {
         this.result = result;
         const chartsData = [];
         this.result.forEach((r) => {
            // get chart values
            chartsData.push({
               x: r.date,
               y: r.amount,
            });
            this.clickOptions.push({
               clickYearValue: r.date,
            });
            this.getMonthChart(param, this.clickOptions.slice(-1)[0].clickYearValue);
         });
         this.loading = false;
         // Chart Options
         this.yearChartOptions = {
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
                     format: `$ {point.y:.2f}`
                  },
                  point: {
                     events: {
                        click(event) {
                           if (event && event.point && event.point.x) {
                              componentScope.getMonthChart(this.param, event.point.x);
                           } else {
                              alert('Point is not present in Chart');
                           }
                        }

                     }
                  }
               }
            },
            series: [{
               name: `<b>Amount</b>`,
               data: chartsData,
               color: '#ff6300'
            }],
         };
      });
   }
   // Month Wise Chart
   getMonthChart(param: ChartsData, year: number) {
      // const param = new ChartsData();
      param.year = year;
      this.orderService.getCompanyData(param).subscribe((result: ChartsData[]) => {
         this.result = result;
         const chartsData = [];
         // get chart values
         this.result.forEach((r) => {
            chartsData.push({
               name: r.months,
               y: r.amount,
            });
         });
         // chart Options
         this.monthChartOptions = {
            chart: {
               type: 'column',
               borderRadius: 10
            },
            events: {},
            title: {
               text: `Month Wise Amount for <b>${year}</b>`
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
                     format: `$ {point.y:.2f}`
                  },
                  point: {
                     events: {}
                  }
               }
            },
            series: [{
               name: `<b>Amount</b>`,
               data: chartsData,
               color: '#ff6300'
            }],
         };
      });
   }
}
