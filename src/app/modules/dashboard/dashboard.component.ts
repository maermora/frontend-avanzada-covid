import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  // Arreglos para categorizacion por sexo:
  dataM = [];
  dataF = [];
  pieChartEstado = [];
  pieChartEdad = [];
  pacientes: any = [];



  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadPacientes();
    this.loadSexChart();
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
  loadSexChart() {
    this.dashboardService.getPacientesHombres().subscribe((data => {
      this.dataM = data
      console.log('hombres:',this.dataM);
    }))
    this.dashboardService.getPacientesMujeres().subscribe((data => {
      this.dataF = data
      console.log('mujeres', this.dataF);
    }))
    
  }
  

}
