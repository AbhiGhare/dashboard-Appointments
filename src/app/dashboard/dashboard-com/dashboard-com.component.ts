import { Component, OnInit ,ViewChild} from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexAnnotations,
} from 'ng-apexcharts';

import { series } from './data';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  annotations?: ApexAnnotations;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  labels?: string[];
  stroke?: ApexStroke;
  title?: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard-com',
  templateUrl: './dashboard-com.component.html',
  styleUrls: ['./dashboard-com.component.scss']
})
export class DashboardComComponent implements OnInit {

  
  ngOnInit(): void {
   
  }

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'image_url',
          data: series.monthDataSeries1.prices,
        },
        {
          name: 'secondary_heading',
          data: series.monthDataSeries2.prices,
        },
      ],
      chart: {
        type: 'line',
        width:'100%',
        height:'250px',
      },
      annotations: {
        points: [
          {
            x: new Date('14 Nov 2017').getTime(),
            y: 1,
            marker: {
              size: 6,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
            },
            label: {
              text: 'Data feature',
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 3,
      },
      grid: {
        padding: {
          right: 30,
          left: 20,
        },
      },
      title: {
        text: 'Notification anomalies',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
    };
  }
}
