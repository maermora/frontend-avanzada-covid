import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  pieChartSexo: any = [];
  pieChartEstado = [];
  pieChartEdad = [];
  pacientes: any = [];
  fallecidos = [];
  vejez = [];



  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadPacientes();
    this.loadFallecidos();
    this.loadTerceraEdad();
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
  loadFallecidos(){
    return this.dashboardService.getPacientesFallecido()
    .subscribe((data) => {
      this.fallecidos = data;

    })
  }
  loadTerceraEdad(){
    return this.dashboardService.getPacientesVejez()
    .subscribe((data) => {
      this.vejez = data;
    })
  }


}
