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
  pacientes: any[] = [];
  fallecidos = [];
  vejez = [];
  decesos = [];
  pasto = [];


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getCasos();
  }
  
  
  // Get casos
  getCasos(){
    this.dashboardService.getCasos().subscribe((casos: any[]) => {
      this.pacientes = [...casos];
      this.getCasosVejez();
      this.loadPieCharts();
      this.bigChart = this.loadBigChard(this.pacientes);
      this.getDecesos();
      this.getCasosPasto();
    })
  }

  getDecesos(){
    const filtered = this.pacientes.filter(paciente => paciente.estado == 'Fallecido');
    this.decesos = this.loadBigChard(filtered);
  }

  getCasosPasto(){
    const filtered = this.pacientes.filter(paciente => paciente.ciudad_municipio_nom == 'PASTO');
    this.pasto = this.loadBigChard(filtered);
  }

  getCasosVejez(){
    const filtered = this.pacientes.filter(paciente => paciente.edad >= 60)
    this.vejez = filtered;

  }

  loadPieCharts(){

    // POR SEXO
    let M = this.pacientes.filter(paciente => paciente.sexo == 'M').length;
    let F = this.pacientes.filter(paciente => paciente.sexo == 'F').length;
    const male = { name: 'Hombres', y: M, sliced: true, selected: true }
    const female = { name: 'Mujeres', y: F, sliced: true, selected: true }
    this.pieChartSexo.push(male, female)

    // POR EDAD
    let adolescentes = this.pacientes.filter(paciente => paciente.edad >= 12 && paciente.edad <=18).length;
    let juventud = this.pacientes.filter(paciente => paciente.edad >= 14 && paciente.edad <=26).length;
    let adultez = this.pacientes.filter(paciente => paciente.edad >= 27 && paciente.edad <=59).length;
    const adole = { name: 'Adolescentes', y: adolescentes, sliced: true, selected: true}
    const juve = { name: 'Juventud', y: juventud, sliced: true, selected: true}
    const adulte = { name: 'Adultez', y: adultez, sliced: true, selected: true}
    const vejez = { name: 'Persona mayor', y: this.vejez.length, sliced: true, selected: true}
    this.pieChartEdad.push(adole, juve, adulte, vejez);

    // POR ESTADO
    const leve = this.pacientes.filter(paciente => paciente.estado == 'Leve').length;
    const fallecido = this.pacientes.filter(paciente => paciente.estado == 'Fallecido').length;
    this.pieChartEstado.push({name: 'Leve', y: leve, sliced: true, selected: true}, {name: 'Fallecido', y: fallecido, sliced: true, selected: true});
  }

  loadBigChard(arrayCasos){
    let fechas = [];
    arrayCasos.forEach(paciente => {
      const finded = fechas.find(fecha => fecha == paciente.fecha_reporte_web )
      if(finded == undefined){
        fechas.push([paciente.fecha_reporte_web]);
      }
    })
    fechas.forEach((fecha, index) => {
      const filtered = arrayCasos.filter(paciente => paciente.fecha_reporte_web == fecha)
      fechas[index].push(filtered.length);
      //fechas[index][0] = new Date(fechas[index][0]).getMilliseconds();
    })
    fechas.forEach(fecha => {
      fecha[0] = new Date(fecha[0]).getTime();
    })

    fechas.sort((a, b) => {
      if(a[0] == b[0]){
        return 0;
      }
      else {
        return (a[0] < b[0]) ? -1 : 1;
      }
    })

    return fechas;
    //this.bigChart = fechas
    // this.pacientes.forEach(paciente => {
    //   const date = new Date(paciente.)
    // })
  }




}
