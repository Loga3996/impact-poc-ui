// Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// HighCharts Imports
import * as Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import noData from 'highcharts/modules/no-data-to-display';
import Drilldown from 'highcharts/modules/drilldown';
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
noData(Highcharts);
Drilldown(Highcharts);

// Services
import { ChartReportService } from 'src/app/shared/services/chart-report.service';
import { ChartOptionsService } from 'src/app/shared/services/chart-options.service';

// Models
import { ChartsData } from 'src/app/shared/models/chart-data';

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
  companyCode: number;
  loading: boolean;

  // No data Message
  noData = `<span style="font-size:16px;color:black;">No data available<span>`;
  noDataMsg = this.chartOptions.officeChartOptions.lang.noData;

  constructor(
    public fb: FormBuilder,
    private chartService: ChartReportService,
    private chartOptions: ChartOptionsService
  ) { }

  // Chart Options
  monthlyChartOptions = this.chartOptions.monthlyChartOptions;
  officeChartOptions = this.chartOptions.officeChartOptions;

  ngOnInit() {
    this.loading = true;
    this.formGroup = this.fb.group({
      year: this.getYearSelectOptions(),
      company: this.getCompanySelectOptions(this.year),
    });
    this.getTopFiveProducts();
    this.selectYearChanges();
    this.loading = false;
    this.selectCompanyChanges();
  }

  selectYearChanges() {
    const years = 'year';
    this.formGroup.controls[years].valueChanges.subscribe((yearValue) => {
      this.getCompanySelectOptions(yearValue);
      this.getYearOrYearCompanyChart(yearValue);
      this.companyValue = 0;
    });
  }

  selectCompanyChanges() {
    const company = 'company';
    this.formGroup.controls[company].valueChanges.subscribe((companyValue) => {
      const year = this.formGroup.controls.year.value;
      this.getYearOrYearCompanyChart(year, companyValue);
      this.getOffAmtChartBasedOnYearCompany(year, companyValue);
      this.getOffBillChartBasedOnYearCompany(year, companyValue);
      this.getOffPromoChartBasedOnYearCompany(year, companyValue);
    });
  }
  // Get Year Select Options
  getYearSelectOptions() {
    const param = new ChartsData();
    this.chartService.getBillData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
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
            selectCompanyValue: r.companyCode,
          });
          this.selectCompanyOptions = companyValue;
        });
      });
  }
  // Get Month - Amount Chart based on params
  getYearOrYearCompanyChart(year: number, companyCode?: number) {
    const param = new ChartsData();
    param.year = year;
    param.companyCode = companyCode;
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
            companyCode: r.companyCode,
            monthCode: r.monthCode,
            company: r.company
          });
        });
        const id = 'month-amt';
        this.chartOptions.monthlyChartOptions.series[0].data = chartsValue;
        this.chartOptions.monthlyChartOptions.exporting.buttons.contextButton.onclick = () => { this.chartOptions.fullScreen(id); };
        if (year && companyCode) {
          const chartTitle = chartsValue[0].company;
          this.chartOptions.monthlyChartOptions.title.text = `Monthwise Revenue for ${chartTitle} (${year})`;
          this.chartOptions.monthlyChartOptions.plotOptions.series.point.events.click = (event) => {
            this.getOffAmtChartBasedOnYearCompany(event.point.year, event.point.companyCode, event.point.monthCode);
            this.getOffBillChartBasedOnYearCompany(event.point.year, event.point.companyCode, event.point.monthCode);
            this.getOffPromoChartBasedOnYearCompany(event.point.year, event.point.companyCode, event.point.monthCode);
          };
        } else {
          this.chartOptions.monthlyChartOptions.title.text = `Monthwise Revenue for ${year}`;
        }
        Highcharts.chart('month-amt', this.chartOptions.monthlyChartOptions);
      });
  }
  // Get Office wise Amount Chart based on params
  getOffAmtChartBasedOnYearCompany(year: number, companyCode: number, monthCode?: number) {
    const param = new ChartsData();
    param.year = year;
    param.companyCode = companyCode;
    param.monthCode = monthCode;
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
            months: r.months
          });
          this.companyName = chartsValue[0].company;
          this.monthName = chartsValue[0].months;
        });
        const companyName = this.companyName;
        const monthName = this.monthName;
        const id = 'office-amt';
        this.chartOptions.officeChartOptions.xAxis.title.text = `<span style="color:black;"><b>Offices</b><span>`;
        this.chartOptions.officeChartOptions.exporting.buttons.contextButton.onclick = () => { this.chartOptions.fullScreen(id); };
        if (year && companyCode && monthCode) {
          this.chartOptions.officeChartOptions.title.text = `Officewise Revenue for ${companyName} ( ${monthName} )`;
          this.chartOptions.officeChartOptions.yAxis.title.text = '<span style="color:black;"><b>Amount($)</b><span>';
          this.chartOptions.officeChartOptions.lang.noData = this.noData;
          this.chartOptions.officeChartOptions.navigator.enabled = true;
          this.chartOptions.officeChartOptions.series[0].data = chartsValue;
        } else {
          this.chartOptions.officeChartOptions.title.text = ``;
          this.chartOptions.officeChartOptions.lang.noData = this.noDataMsg;
          this.chartOptions.officeChartOptions.yAxis.title.text = '';
          this.chartOptions.officeChartOptions.series[0].data = chartEmpty;
        }
        Highcharts.chart('office-amt', this.chartOptions.officeChartOptions);
      });
  }
  // Get Office wise Bill to Office Chart based on params
  getOffBillChartBasedOnYearCompany(year: number, companyCode: number, monthCode?: number) {
    const param = new ChartsData();
    param.year = year;
    param.companyCode = companyCode;
    param.monthCode = monthCode;
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
        const id = 'office-bill';
        this.chartOptions.officeChartOptions.xAxis.title.text = `<span style="color:black;"><b>Offices</b><span>`;
        this.chartOptions.officeChartOptions.exporting.buttons.contextButton.onclick = () => { this.chartOptions.fullScreen(id); };
        if (year && companyCode && monthCode) {
          this.chartOptions.officeChartOptions.title.text = `Officewise Bill to Office for ${companyName} ( ${monthName} )`;
          this.chartOptions.officeChartOptions.yAxis.title.text = '<span style="color:black;"><b>Bill to Office($)</b><span>';
          this.chartOptions.officeChartOptions.navigator.enabled = false;
          this.chartOptions.officeChartOptions.series[0].data = chartsBillValue;
        } else {
          this.chartOptions.officeChartOptions.series[0].data = chartBillEmpty;
        }
        Highcharts.chart('office-bill', this.chartOptions.officeChartOptions);
      });
  }
  // get office promo chart based on params
  getOffPromoChartBasedOnYearCompany(year: number, companyCode: number, monthCode?: number) {
    const param = new ChartsData();
    param.year = year;
    param.companyCode = companyCode;
    param.monthCode = monthCode;
    this.chartService.getPromoData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        const chartsPromoValue = [];
        const chartsPromoDetail = [];
        const chartBillEmpty = [];
        this.result.forEach((r) => {
          chartsPromoValue.push({
            name: r.office,
            y: r.amount,
            drilldown: r.office
          });
          chartsPromoDetail.push({
            name: `<b>Amount</b>`,
            id: r.office,
            data: [
              ['Bill-to-Office', r.bill],
              ['Promo', r.promo],
            ]
          });
        });
        const companyName = this.companyName;
        const monthName = this.monthName;
        const id = 'office-promo';
        this.chartOptions.officeChartOptions.exporting.buttons.contextButton.onclick = () => { this.chartOptions.fullScreen(id); };
        this.chartOptions.officeChartOptions.xAxis.title.text = `<span style="color:black;"><b>Offices</b><span>`;
        if (year && companyCode && monthCode) {
          this.chartOptions.officeChartOptions.title.text = `Officewise Bill Office and Bill Office Promo for ${companyName} ( ${monthName} )`;
          this.chartOptions.officeChartOptions.yAxis.title.text = '<span style="color:black;"><b>Amount($)</b><span>';
          this.chartOptions.officeChartOptions.navigator.enabled = false;
          this.chartOptions.officeChartOptions.series[0].data = chartsPromoValue;
          this.chartOptions.officeChartOptions.drilldown.series = chartsPromoDetail;
        } else {
          this.chartOptions.officeChartOptions.title.text = '';
          this.chartOptions.officeChartOptions.series[0].data = chartBillEmpty;
        }
        Highcharts.chart('office-promo', this.chartOptions.officeChartOptions);
      });
  }
  // Top Five Products
  getTopFiveProducts() {
    const param = new ChartsData();
    this.chartService.getAmountData(param)
      .pipe()
      .subscribe((result: ChartsData[]) => {
        this.result = result;
        const chartsValue = [];
        this.result.forEach((r) => {
          chartsValue.push({
            name: decodeURIComponent(r.product),
            y: r.total,
          });
        });
        const id = 'product';
        this.chartOptions.officeChartOptions.title.text = 'Top Five Products';
        this.chartOptions.officeChartOptions.exporting.buttons.contextButton.onclick = () => { this.chartOptions.fullScreen(id); };
        this.chartOptions.officeChartOptions.xAxis.title.text = `<span style="color:black;"><b>Products</b><span>`;
        this.chartOptions.officeChartOptions.yAxis.title.text = '<span style="color:black;"><b>Amount($)</b><span>';
        this.chartOptions.officeChartOptions.navigator.enabled = false;
        this.chartOptions.officeChartOptions.series[0].data = chartsValue;
        Highcharts.chart('product', this.chartOptions.officeChartOptions);
      });
  }
}
