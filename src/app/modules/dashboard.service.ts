import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../shared/pacientes';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiURL = 'http://localhost:3000/pacientes';
  hombres = [];
  mujeres = [];

  asintomaticos = [];
  leves = [];
  moderados = [];
  graves = [];
  fallecidos = [];

  infancia = [];
  juventud = [];
  adultez = [];
  vejez = [];

  marzo = [];
  abril = [];
  mayo = [];
  junio = [];
  julio = [];


  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get<any>(this.apiURL)
  }
  // Sexo
  getPacientesHombres() {
    return this.http.get<any>(this.apiURL + '?sexo=M')
  }
  getPacientesMujeres() {
    return this.http.get<any>(this.apiURL + '?sexo=F')
  }
  
  // Estado
  getPacientesAsintomatico() {
    return this.http.get<any>(this.apiURL + '?estado=Asintomático')
  }
  getPacientesLeves() {
    return this.http.get<any>(this.apiURL + '?estado=Leve')
  }
  getPacientesModerado() {
    return this.http.get<any>(this.apiURL + '?estado=Moderado')
  }
  getPacientesGrave() {
    return this.http.get<any>(this.apiURL + '?estado=Grave')
  }
  getPacientesFallecido() {
    return this.http.get<any>(this.apiURL + '?estado=Fallecido')
  }
  // Edad
  getPacientesInfancia(){
    return this.http.get<any>(this.apiURL + '?edad=infancia')
  }
  getPacientesJuventud(){
    return this.http.get<any>(this.apiURL + '?edad=juventud')
  }
  getPacientesAdultez(){
    return this.http.get<any>(this.apiURL + '?edad=adultez')
  }
  getPacientesVejez(){
    return this.http.get<any>(this.apiURL + '?edad=vejez')
  }
  // Tiempo
  getPacientesMarzo(){
    return this.http.get<any>(this.apiURL + '?fecha_notif=marzo')
  }
  getPacientesAbril(){
    return this.http.get<any>(this.apiURL + '?fecha_notif=abril')
  }
  getPacientesMayo(){
    return this.http.get<any>(this.apiURL + '?fecha_notif=mayo')
  }
  getPacientesJunio(){
    return this.http.get<any>(this.apiURL + '?fecha_notif=junio')
  }
  getPacientesJulio(){
    return this.http.get<any>(this.apiURL + '?fecha_notif=julio')
  }

  bigChart() {
    this.getPacientesMarzo().subscribe((data) => {this.marzo = data});
    this.getPacientesAbril().subscribe((data) => {this.abril = data})
    this.getPacientesMayo().subscribe((data) => {this.mayo = data});
    this.getPacientesJunio().subscribe((data) => {this.junio = data});
    this.getPacientesJulio().subscribe((data) => {this.julio = data});

    return [{
      name: 'Casos confirmados',
      data: [this.marzo.length, this.abril.length, this.mayo.length, this.junio.length, this.julio.length]
    }];
    
  }

  pieChartEstado() {
    this.getPacientesAsintomatico().subscribe((data) => { this.asintomaticos = data});
    this.getPacientesLeves().subscribe((data) => {this.leves = data});
    this.getPacientesModerado().subscribe((data) => {this.moderados = data});
    this.getPacientesGrave().subscribe((data) => {this.graves = data});
    this.getPacientesFallecido().subscribe((data) => {this.fallecidos = data});
    return [{
      name: 'Asintomaticos',
      y: this.asintomaticos.length
    }, {
      name: 'Leves',
      y: this.leves.length
    }, {
      name: 'Moderado',
      y: this.moderados.length
    }, {
      name: 'Grave',
      y: this.graves.length
    }, {
      name: 'Fallecido',
      y: this.fallecidos.length
    }];
  }
  
   pieChartSexo() {
    this.getPacientesMujeres().subscribe((data) => {this.mujeres =data})
    this.getPacientesHombres().subscribe((data) => {this.hombres = data})
    return [{
      name: 'Hombres',
      y:this.hombres.length
    }, {
      name: 'Mujeres',
      y:this.mujeres.length
    }]   
  }

  pieChartEdad() {
    this.getPacientesInfancia().subscribe((data) => {this.infancia = data})
    this.getPacientesJuventud().subscribe((data) => {this.juventud = data})
    this.getPacientesAdultez().subscribe((data) => {this.adultez =data})
    this.getPacientesVejez().subscribe((data) => {this.vejez = data})
    return [{
      name:'Infancia',
      y: this.infancia.length
    }, {
      name: 'Juventud',
      y: this.juventud.length
    }, {
      name: 'Adultez',
      y: this.adultez.length
    }, {
      name: 'Tercera edad',
      y: this.vejez.length
    }]
  }
}
