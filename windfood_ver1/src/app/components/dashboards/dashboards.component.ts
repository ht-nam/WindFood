import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { MapChart, Chart } from 'angular-highcharts';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardsService } from './dashboards.service';
@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  // lineChart1?: Chart;

  // lineChart2?: Chart;

  // barChart1?: Chart;

  // barChart2?: Chart;

  options?: Highcharts.Options;

  options1?: Highcharts.Options;

  // mapChart?: MapChart;

  options2?: Highcharts.Options;

  datas: Object[] = [];

  options3?: Highcharts.Options;

  key = 0;

  constructor(private dashboardService: DashboardsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.options = this.dashboardService.buildBarChart('Số lượt xét nghiệm và số người khẳng định dương tính theo tháng',
      ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'], '', 'Số người XN HIV', [10, 2, 4, 0, 0], [2, 1, 0, 0, 0], 'Số người XN HIV dương tính');

    this.options1 = this.dashboardService.buildBarChart('Khách hàng dương tính chuyển gửi điều trị thành công', ['0', '1'], '', 'Số lượng dương tính', [3, 0], [1, 0], 'Số lượng CGDDT thành công')

    this.options2 = this.dashboardService.buildPieChart('Phân bổ số khách hàng mua hàng', 'Asset Allocation', [
      { name: ' ', y: 33 },
      { name: ' ', y: 33 },
      { name: ' ', y: 33 },
    ]
    )

    this.options3 = this.dashboardService.buildPieChart('Phân bổ số XN theo nhóm đối tượng (1/1/2023 - 3/5/2023)', '', [
      { name: ' ', y: 6 },
      { name: ' ', y: 6 },
      { name: ' ', y: 13 },
      { name: ' ', y: 6 },
      { name: ' ', y: 6 },
      { name: ' ', y: 13 },
      { name: ' ', y: 50 },
    ],
    )

    // this.lineChart1 = new Chart(this.options2);
    // this.lineChart2 = new Chart(this.options3);
    // this.barChart1 = new Chart(this.options);
    // this.barChart2 = new Chart(this.options1);
  }

  async initMap() {
    const geojson = await fetch('../../../../assets/mapDataJSON/gadm36_VNM_1.json').then(response => response.json());

    geojson.features.map((it: any) => {
      this.datas.push([it.properties.HASC_1, this.key, it.properties?.code1, it.properties?.NAME_1])
      // this.key++
    });

    // this.mapChart = new MapChart({
    //   chart: {
    //     map: geojson,
    //     panning: {
    //       enabled: true, // enable panning
    //       type: 'xy' // allow panning in both x and y directions
    //     },
    //   },
    //   title: {
    //     text: 'Bản đồ tỉ lệ người mua hàng trên cả nước',
    //     style: { fontFamily: "Arial", "fontSize": "25", "fontWeight": "bold", 'textAlign': 'left' },
    //     useHTML: true,
    //   },

    //   colorAxis: {
    //     min: 0,
    //     max: 100,
    //     tickInterval: 5,
    //     // #900037
    //     tickPositions: [0, 25, 50, 75, 100],
    //     stops: [[0, 'rgb(242,242,242)'], [0.25, '#FF8A8A'], [0.75, '#FF2E2E'], [1, '#D10000']],
    //     labels: {
    //       format: '{value}'
    //     }
    //   },

    //   accessibility: {
    //     point: {
    //       valueDescriptionFormat: '{xDescription}.'
    //     },
    //   },

    //   mapNavigation: {
    //     enabled: true,
    //     buttonOptions: {
    //       verticalAlign: 'bottom'
    //     }
    //   },

    //   plotOptions: {
    //     map: {
    //       color: 'white',
    //       showInLegend: false,
    //       tooltip: {
    //         pointFormat: '{point.properties.NAME_1}: {point.value}'
    //       },
    //     },
    //   },

    //   series: [{
    //     data: this.datas,

    //     keys: ['HASC_1', 'value', 'code1', 'NAME_1'],
    //     joinBy: 'HASC_1',
    //     colorByPoint: true,
    //     name: '',
    //     states: {
    //       hover: {
    //         color: "white"
    //       }
    //     },

    //     // dataLabels: {
    //     //   enabled: true,
    //     // }
    //   } as Highcharts.SeriesOptionsType],
    //   legend: {
    //     layout: 'vertical',
    //     verticalAlign: 'top',
    //     align: 'right',
    //     floating: true,
    //     backgroundColor: ( // theme
    //       Highcharts.defaultOptions &&
    //       Highcharts.defaultOptions.legend &&
    //       Highcharts.defaultOptions.legend.backgroundColor
    //     ) || 'rgba(255, 255, 255, 0.85)'
    //   }
    // });


    // this.mapChart
  }
}
