// Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// HighCharts Imports
import * as Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import noData from 'highcharts/modules/no-data-to-display';
noData(Highcharts);
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

// Models
import { ChartsData } from 'src/app/shared/models/chart-data';

// Services
import { ChartReportService } from 'src/app/shared/services/chart-report.service';

@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.scss']
})

export class ChartReportComponent implements OnInit {
  highcharts = Highcharts;
  formGroup: FormGroup;
  result: ChartsData[];
  param: ChartsData;
  selectYearOptions = [];
  selectCompanyOptions = [];
  title: string;
  companyName: string;
  monthName: string;
  yearValue: number;
  companyValue: number;
  year: number;
  code: number;
  loading: boolean;

  // Chart Options
  monthlyChartOptions: any = {
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
        text: `<span style="color:black;"><b>Months</b><span>`,
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
          format: `$ {point.y:.2f}`
        },
        point: {
          events: {
            click: (event) => {
              this.getOffAmtChartBasedOnYearCompany(event.point.year, event.point.code, event.point.mcode);
              this.getOffBillChartBasedOnYearCompany(event.point.year, event.point.code, event.point.mcode);
            }
          }
        }
      }
    },
    exporting: {
      enabled: false
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
      type: 'column',
      borderRadius: 10,
    },
    lang: {
      noData: `<span style="font-size:16px;color:black;">No data available.\n Please Select Company and Month<span>`
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
        text: '',
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
        dataLabels: {
          enabled: true,
          format: `<b>$ {point.y:.2f}</b>`
        },
      }
    },
    exporting: {
      enabled: false
    },
    navigator: {
      enabled: true,
      margin: 0,
      height: 12,
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
      name: `<b>Amount</b>`,
      data: [],
      color: '#F16230',
    }],
  };

  // No data Message
  noData = `<span style="font-size:16px;color:black;">No data available<span>`;
  noDataMsg = this.officeChartOptions.lang.noData;

  constructor(
    public fb: FormBuilder,
    private chartService: ChartReportService
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      year: this.getYearSelectOptions(),
      company: this.getCompanySelectOptions(this.year),
    });
    const years = 'year';
    this.formGroup.controls[years].valueChanges.subscribe((yearValue) => {
      this.getCompanySelectOptions(yearValue);
      this.getYearOrYearCompanyChart(yearValue);
      this.companyValue = 0;
    });
    const company = 'company';
    this.formGroup.controls[company].valueChanges.subscribe((companyValue) => {
      const year = this.formGroup.controls.year.value;
      this.getYearOrYearCompanyChart(year, companyValue);
      this.getOffAmtChartBasedOnYearCompany(year, companyValue);
      this.getOffBillChartBasedOnYearCompany(year, companyValue);
    });
  }

  // Get Year Select Options
  getYearSelectOptions() {
    this.loading = true;
    const param = new ChartsData();
    this.chartService.getBillData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.loading = false;
        this.result = result;
        this.result.forEach((r) => {
          this.selectYearOptions.push({
            selectYearValue: r.year,
          });
          this.yearValue = this.selectYearOptions.slice(-1)[0].selectYearValue;
        });
      });
  }

  // Get Company select options based on selected year
  getCompanySelectOptions(year: number) {
    const param = new ChartsData();
    param.year = year;
    this.chartService.getBillData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        const companyValue = [];
        this.result.forEach((r) => {
          companyValue.push({
            selectCompanyName: r.company,
            selectCompanyValue: r.code,
          });
          this.selectCompanyOptions = companyValue;
        });
      });
  }

  // Get Month wise Year or Year & Company Chart based on params
  getYearOrYearCompanyChart(year: number, code?: number) {
    const param = new ChartsData();
    param.year = year;
    param.code = code;
    this.chartService.getAmountData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        const chartsValue = [];
        this.result.forEach((r) => {
          chartsValue.push({
            name: r.months,
            y: r.amount,
            year: r.year,
            code: r.code,
            mcode: r.mcode,
            company: r.company
          });
        });
        const chartTitle = this.result[0].company;
        // Chart
        this.monthlyChartOptions.series[0].data = chartsValue;
        if (year && code) {
          this.monthlyChartOptions.title.text = `Monthwise Revenue for ${chartTitle} (${year})`;
        } else {
          this.monthlyChartOptions.title.text = `Monthwise Revenue for ${year}`;
        }
        Highcharts.chart('month-amt', this.monthlyChartOptions);
      });
  }

  // Get Office wise Amount Chart based on params
  getOffAmtChartBasedOnYearCompany(year: number, code: number, mcode?: number) {
    const param = new ChartsData();
    param.year = year;
    param.code = code;
    param.mcode = mcode;
    this.chartService.getAmountData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        const chartsValue = [];
        const chartEmpty = [];
        this.result.forEach((r) => {
          chartsValue.push({
            name: r.office,
            y: r.amount,
            company: r.company,
            month: r.months
          });
          this.companyName = chartsValue[0].company;
          this.monthName = chartsValue[0].month;
        });
        const companyName = this.companyName;
        const monthName = this.monthName;
        if (year && code && mcode) {
          this.officeChartOptions.series[0].data = chartsValue;
          this.officeChartOptions.lang.noData = this.noData;
          this.officeChartOptions.title.text = `Officewise Revenue for ${companyName} ( ${monthName} )`;
          this.officeChartOptions.yAxis.title.text = '<span style="color:black;"><b>Amount($)</b><span>';
        } else {
          this.officeChartOptions.series[0].data = chartEmpty;
          this.officeChartOptions.lang.noData = this.noDataMsg;
          this.officeChartOptions.title.text = ``;
          this.officeChartOptions.yAxis.title.text = '';
        }
        Highcharts.chart('office-amt', this.officeChartOptions);
      });
  }

  // Get Office wise Bill to Office Chart based on params
  getOffBillChartBasedOnYearCompany(year: number, code: number, mcode?: number) {
    const param = new ChartsData();
    param.year = year;
    param.code = code;
    param.mcode = mcode;
    this.chartService.getBillData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        const chartsBillValue = [];
        const chartBillEmpty = [];
        this.result.forEach((r) => {
          chartsBillValue.push({
            name: r.office,
            y: r.bill
          });
        });
        const companyName = this.companyName;
        const monthName = this.monthName;
        if (year && code && mcode) {
          this.officeChartOptions.series[0].data = chartsBillValue;
          this.officeChartOptions.title.text = `Officewise Bill to Office for ${companyName} ( ${monthName} )`;
          this.officeChartOptions.yAxis.title.text = '<span style="color:black;"><b>Bill to Office</b><span>';
        } else {
          this.officeChartOptions.series[0].data = chartBillEmpty;
        }
        Highcharts.chart('bill-amt', this.officeChartOptions);
      });
  }
}
