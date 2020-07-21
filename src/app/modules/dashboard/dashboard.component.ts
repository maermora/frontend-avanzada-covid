import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  // Arreglos para categorizacion por sexo:
  pieChartSexo = [];
  pieChartEstado = [];
  pieChartEdad = [];
  pacientes: any = [];



  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadPacientes();
    this.pieChartSexo = this.dashboardService.pieChartSexo();
    this.bigChart = this.dashboardService.bigChart();
    this.pieChartEstado = this.dashboardService.pieChartEstado();
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
