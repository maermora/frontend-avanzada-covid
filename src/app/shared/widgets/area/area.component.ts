import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any[] = [];
  @Input() decesos: any[] = [];
  @Input() pasto: any[] = [];
  Highcharts = Highcharts;
  constructor() { }
  ngOnInit() {
    this.chartOptions = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'Numero de casos'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Casos'
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: [{
        type: 'area',
        name: 'Casos Covid',
        data: this.data
      },{
        type: 'area',
        name: 'Decesos',
        data: this.decesos
      }, {
        type: 'area',
        name: 'Casos pasto',
        data: this.pasto
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
