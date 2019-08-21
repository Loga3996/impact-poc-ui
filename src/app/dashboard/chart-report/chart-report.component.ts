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
  yearValue: number;
  companyValue: number;
  year: number;
  code: number;
  loading: boolean;
  selected = this.yearValue;

  // Chart Options
  monthlyAmtChartOptions: any = {
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
              this.getMonOffChartBasedOnCom(event.point.year, event.point.code, event.point.mcode);
              this.getMonOffBillChartBasedOnCom(event.point.year, event.point.code, event.point.mcode);
            }
          }
        }
      }
    },
    exporting: {
      buttons: {
        contextButton: {
          symbol: 'circle',
          text: `<b>PDF</b>`,
          symbolFill: '#F16230',
          menuItems: null,
          onclick() {
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
      name: `<b>Amount</b>`,
      data: [],
      color: '#F16230',
    }],
  };
  // Chart Options
  officeAmtChartOptions: any = {
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
      scale: 2,
      buttons: {
        contextButton: {
          symbol: 'circle',
          text: `<b>PDF</b>`,
          symbolFill: '#F16230',
          menuItems: null,
          onclick() {
            this.exportChart({
              type: 'application/pdf',
              filename: this.title.textStr
            });
          }
        }
      },
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
  noData = `<span style="font-size:16px;color:black;">No data available for selected company and month<span>`;
  noDataMsg = this.officeAmtChartOptions.lang.noData;

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
      this.getMonOffChartBasedOnCom(year, companyValue);
      this.getMonOffBillChartBasedOnCom(year, companyValue);
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

  // Get Year or Year & Company Month wise Chart based on params
  getYearOrYearCompanyChart(year: number, code?: number, selected?: any) {
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
        const chartTitle = selected && selected.point ? selected.point.name : this.result[0].company;
        // Chart
        this.monthlyAmtChartOptions.series[0].data = chartsValue;
        if (year && code) {
          this.monthlyAmtChartOptions.title.text = `Monthwise Revenue for ${chartTitle}(${year})`;
        } else {
          this.monthlyAmtChartOptions.title.text = `Monthwise Revenue for ${year}`;
        }
        Highcharts.chart('month-amt', this.monthlyAmtChartOptions);
      });
  }
  // Get Office Month wise Chart based on params
  getMonOffChartBasedOnCom(year: number, code: number, mcode?: number, selected?: any) {
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
            y: r.amount
          });
        });
        const companyName = selected && selected.point ? selected.point.name : this.result[0].company;
        const monthName = selected && selected.point ? selected.point.name : this.result[0].months;
        if (year && code && mcode) {
          this.officeAmtChartOptions.series[0].data = chartsValue;
          this.officeAmtChartOptions.title.text = `Officewise Revenue for ${companyName}(${monthName})`;
          this.officeAmtChartOptions.lang.noData = this.noData;
        } else {
          this.officeAmtChartOptions.series[0].data = chartEmpty;
          this.officeAmtChartOptions.title.text = ``;
          this.officeAmtChartOptions.lang.noData = this.noDataMsg;
        }
        Highcharts.chart('office-amt', this.officeAmtChartOptions);
      });
  }

  getMonOffBillChartBasedOnCom(year: number, code: number, mcode?: number, selected?: any) {
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
        if (year && code && mcode) {
          this.officeAmtChartOptions.series[0].data = chartsBillValue;
        } else {
          this.officeAmtChartOptions.series[0].data = chartBillEmpty;
        }
        Highcharts.chart('bill-amt', this.officeAmtChartOptions);
      });
  }
}
