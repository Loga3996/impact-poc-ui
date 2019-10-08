import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartOptionsService {
ele: any;
  constructor() { }

  public monthlyChartOptions: any = {
    chart: {
      type: 'column',
      borderRadius: 10,
    },
    events: {},
    title: {
      text: '',
      widthAdjust: -100,
      style: {
        color: '#F16230',
        fontWeight: 'bold',
      }
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
        '<td style="padding:0"><b> $ {point.y:,.0f}</b></td></tr>',
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
          format: `$ {point.y:,.0f}`,
          allowOverlap: true,
        },
        point: {
          events: {
            click: ''
          }
        }
      }
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          symbol: 'url(https://image.flaticon.com/icons/svg/2089/2089746.svg)',
          height: 25,
          width: 25,
          symbolSize: 15,
          symbolX: 20,
          symbolY: 20,
          symbolStrokeWidth: 2,
          menuItems: ['viewFullscreen'],
          onclick: ''
        }
      }
    },
    series: [{
      name: `<b>Amount</b>`,
      data: [],
      color: '#F16230',
    }],
  };
  public officeChartOptions: any = {
    chart: {
      type: 'column',
      borderRadius: 10,
    },
    lang: {
      noData: `<span style="font-size:16px;color:black;">No data available.\n Please Select Company and Month<span>`,
    },
    events: {},
    title: {
      text: '',
      widthAdjust: -50,
      style: {
        color: '#F16230',
        fontWeight: 'bold',
      }
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
        text: ''
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
      pointFormat: '<tr><td style="color:{series.color};padding:0"><b>Amount:</b> </td>' +
        '<td style="padding:0"><b> $ {point.y:,.0f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
      borderRadius: 30,
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        dataLabels: {
          allowOverlap: true,
          enabled: true,
          format: `<b>$ {point.y:,.0f}</b>`
        },
      }
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          symbol: 'url(https://image.flaticon.com/icons/svg/2089/2089746.svg)',
          height: 25,
          width: 25,
          symbolSize: 15,
          symbolX: 20,
          symbolY: 20,
          symbolStrokeWidth: 2,
          menuItems: ['viewFullscreen'],
          onclick: ''
        }
      }
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
      name: `<b>Offices</b>`,
      data: [],
      color: '#F16230',
    }],
    drilldown: {
      drillUpButton: {
        theme: {
          stroke: '#F16230'
        }
      },
      series: []
    }
  };

  fullScreen(id) {
    const elem = document.getElementById(id);
    const methodToBeInvoked = elem.requestFullscreen;
    if (methodToBeInvoked) { methodToBeInvoked.call(elem); }
  }
}
