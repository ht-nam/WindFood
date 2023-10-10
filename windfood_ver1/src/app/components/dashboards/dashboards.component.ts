import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MapChart, Chart } from 'angular-highcharts';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardsService } from './dashboards.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductModel } from 'src/app/models/products.model';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/employees/payment/payment.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  barChart?:Chart;

  barChart1?:Chart;

  options?: Highcharts.Options;

  options1?: Highcharts.Options;

  trendingChart?: Chart;

  orderChart?: Chart;

  customerChart?: Chart;

  newCustomerChart?: Chart;

  horizontalBarChart?: Chart;

  datas = [  
    [1, 225000],
  [2, 225000],
  [3, 254000],
  [4, 325000],
  [5, 425000],
  [6, 625000],
  [7, 722500],
  [8, 725000],
  [9, 925000],
  [10, 1022500],
  [11, 3225000],
  [12, 2225000],
];

  form?: UntypedFormGroup;

  products: ProductModel[] = [];

  summary:any;

  key = 0;

  incomeChart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0];

  profitChart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  constructor(private dashboardService: DashboardsService, private router: Router, private fb: UntypedFormBuilder, private service: PaymentService) {

  }

  ngOnInit() {
      this.initForm();
      this.onSubmit();
}

  initForm(){
    this.form = this.fb.group({
        fromDate: new Date().toISOString().split('T')[0],
        toDate: new Date().toISOString().split('T')[0], 
    })
  }

  onSubmit(){
    this.service.getBillDashboard(this.form?.value).subscribe(
        {
            next: (response) =>{
                this.summary = response;
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                for (let index = 0; index < this.summary.length; index++) {
                    // if(this.summary[index].month === 6){
                    
                    this.incomeChart[this.summary[index].month - 1] = parseInt(this.summary[index].revenue)

                    this.profitChart[this.summary[index].month - 1] = parseInt(this.summary[index].profit)
                    
                    // }
                    console.log('summary', this.summary[index].profit);
                                        
                } 
                this.options = this.dashboardService.buildBarChart('Biểu đồ doanh thu',
                ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Thángs 9', 'Tháng 10','Tháng 11', 'Tháng 12'], '', 'Doanh Thu', this.incomeChart);

                this.options1 = this.dashboardService.buildBarChart('Biểu đồ lợi nhuận',
                ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Thángs 9', 'Tháng 10','Tháng 11', 'Tháng 12'], '', 'Doanh Thu', this.profitChart);
                
                this.barChart = new Chart(this.options);
                this.barChart1 = new Chart(this.options1);
                this.initTrendingChart();
                this.initOrderChart();
                this.initCustomerChart();
                this.intiNewCustomerChart();
                this.initHorizontalBarChart();
            }
        }
    )
  }

  async initMap() {
    const geojson = await fetch('../../../../assets/mapDataJSON/gadm36_VNM_1.json').then(response => response.json());

    geojson.features.map((it: any) => {
      this.datas.push([it.properties.HASC_1, this.key, it.properties?.code1, it.properties?.NAME_1])
      // this.key++
    });
  }

  initHorizontalBarChart(){
    this.horizontalBarChart = new Chart({
      chart: {
        type: 'bar'
    },
    title: {
        text: 'Doanh thu hàng tháng',
        align: 'left'
    },
    xAxis: {
        categories: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: null,
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' VNĐ'
    },
    plotOptions: {
        bar: {
            // borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
    },
    credits: {
        enabled: false
    },
      series: [{
          name: 'Tháng 6',
          data: [631, 727, 3202, 721, 26],
          color: '#DE3163'
      }] as any
    });
  }

  intiNewCustomerChart(){
    
    this.newCustomerChart = new Chart({
      
      chart: {
        type: 'area',
        zoomType: 'x',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600,
        },
        width: 270,
        height: 200,
    },
    
    title: {
        text: 'Người dùng mới',
        align: 'left'
    },
  
    xAxis: {
        labels: {
            format: 'Tháng {value}'
        },
        minRange: 5,
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 187.8km.'
        }
    },
  
    yAxis: {
        // startOnTick: true,
        // endOnTick: false,
        // maxPadding: 0.35,
        title: {
            text: null
        },
    },
  
    tooltip: {
        headerFormat: 'Tháng {point.x}<br>',
        pointFormat: '{point.y} VNĐ',
        shared: true
    },
  
    legend: {
        enabled: false
    },
  
    series: [{
        data: data,
        lineColor: '#FFFF',
        color: '#DE3163',
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
            enabled: false
        },
        threshold: null
    }] as any
      });
  }

  initCustomerChart(){
    
    this.customerChart = new Chart({
      
      chart: {
        type: 'area',
        zoomType: 'x',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600,
        },
        width: 270,
        height: 200,
    },
    
    title: {
        text: 'Khách hàng',
        align: 'left'
    },
  
    xAxis: {
        labels: {
            format: 'Tháng {value}'
        },
        minRange: 5,
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 187.8km.'
        }
    },
  
    yAxis: {
        // startOnTick: true,
        // endOnTick: false,
        // maxPadding: 0.35,
        title: {
            text: null
        },
    },
  
    tooltip: {
        headerFormat: 'Tháng {point.x}<br>',
        pointFormat: '{point.y} VNĐ',
        shared: true
    },
  
    legend: {
        enabled: false
    },
  
    series: [{
        data: data,
        lineColor: '#FFFF',
        color: '#DE3163',
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
            enabled: false
        },
        threshold: null
    }] as any
      });
  }

  initOrderChart(){
    
    this.orderChart = new Chart({
      
      chart: {
        type: 'area',
        zoomType: 'x',
        // panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600,
        },
        width: 270,
        height: 200,
    },
    
    title: {
        text: 'Đơn đặt',
        align: 'left'
    },
  
    xAxis: {
        labels: {
            format: 'Tháng {value}'
        },
        minRange: 5,
        title: {
            text: null
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 187.8km.'
        }
    },
  
    yAxis: {
        // startOnTick: true,
        // endOnTick: false,
        // maxPadding: 0.35,
        title: {
            text: null
        },
    },
  
    tooltip: {
        headerFormat: 'Tháng {point.x}<br>',
        pointFormat: '{point.y} VNĐ',
        shared: true
    },
  
    legend: {
        enabled: false
    },
  
    series: [{
        data: data,
        lineColor: '#FFFF',
        color: '#DE3163',
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
            enabled: false
        },
        threshold: null
    }] as any
      });
  }

  initTrendingChart(){

    this.trendingChart = new Chart({
      
    chart: {
      type: 'area',
      zoomType: 'x',
      // panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
          minWidth: 600,
      },
      width: 270,
      height: 200,
  },
  
  title: {
      text: 'Doanh thu',
      align: 'left'
  },

  xAxis: {
      labels: {
          format: 'Tháng {value}'
      },
      minRange: 5,
      title: {
          text: null
      },
      accessibility: {
          rangeDescription: 'Range: 0 to 187.8km.'
      }
  },

  yAxis: {
      // startOnTick: true,
      // endOnTick: false,
      // maxPadding: 0.35,
      title: {
          text: null
      },
  },

  tooltip: {
      headerFormat: 'Tháng {point.x}<br>',
      pointFormat: '{point.y} VNĐ',
      shared: true
  },

  legend: {
      enabled: false
  },

  series: [{
      data: data,
      lineColor: '#FFFF',
      color: '#DE3163',
      fillOpacity: 0.5,
      name: 'Elevation',
      marker: {
          enabled: false
      },
      threshold: null
  }] as any
    });
  }
}

export const data = [
  [1, 225000],
  [2, 225000],
  [3, 254000],
  [4, 325000],
  [5, 425000],
  [6, 625000],
  [7, 722500],
  [8, 725000],
  [9, 925000],
  [10, 1022500],
  [11, 3225000],
  [12, 2225000],
]