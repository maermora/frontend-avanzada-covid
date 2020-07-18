import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  pieChartSexo = [];
  pieChartEstado = [];
  pieChartEdad = [];
  pacientes: any = [];
  total = 1000;



  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadPacientes();
    this.bigChart = this.dashboardService.bigChart();
    this.pieChartEstado = this.dashboardService.pieChartEstado();
    this.pieChartSexo = this.dashboardService.pieChartSexo();
    this.pieChartEdad = this.dashboardService.pieChartEdad();
  }
  //Get lista de pacientes
  loadPacientes() {
    return this.dashboardService.getPacientes()
    .subscribe((data: {}) => {
      this.pacientes = data;
    })
  }

}
