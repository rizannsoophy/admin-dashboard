import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
 Highcharts = Highcharts
 chartOptions={}


 constructor(){

  this.chartOptions={
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
      categories: ['MEARN', 'Python', 'DATA SCIENCE', 'TESTING', 'FLUTTER', '.NET',
          'BIG DATA', 'JAVA SPRING', 'AI', 'ML']
  },
  yAxis: {
      title: {
          enabled: false
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Placements: {point.y}'
  },
  title: {
      text: 'Yearly placement analysis of Luminar Technolab,2022-2023',
      align: 'center'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://ofv.no/registreringsstatistikk"' +
          'target="_blank">OFV</a>',
      align: 'left'
  },
  legend: {
      enabled: false
  },

  credits:{
    enabled: false
  },

  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
      colorByPoint: true
  }]
};

  HC_exporting(Highcharts);




  };
  }

 


