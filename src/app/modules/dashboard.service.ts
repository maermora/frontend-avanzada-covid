import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../shared/pacientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiURL = 'http://localhost:3000/pacientes';
  hombres = [];
  mujeres = [];


  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get<any>(this.apiURL)
  }
  getPacientesHombres() {
    return this.http.get<any>(this.apiURL + '?sexo=M')
  }
  getPacientesMujeres() {
    return this.http.get<any>(this.apiURL + '?sexo=F')
  }
  
  bigChart() {
    
    return [{
      name: 'Casos confirmados',
      data: [0, 53, 56, 500, 1000]
    }, {
      name: 'Decesos',
      data: [0, 23, 25, 25, 50]
    }];
    
  }

  pieChartEstado() {
    return [{
      name: 'Recuperados',
      y: 60
    }, {
      name: 'Leve',
      y: 30
    }, {
      name: 'Fallecido',
      y: 10
    }];
  }
  getNumeroSexo(){
    
  }
  pieChartSexo() {
    this.getPacientesHombres().subscribe((data) => {
      this.hombres = data;
    });
    this.getPacientesMujeres().subscribe((data) => {
      this.mujeres = data;
    });
    return [{
      name: 'Hombres',
      y: this.hombres.length
    }, {
      name: 'Mujeres',
      y: this.mujeres.length
  }]
  }
  pieChartEdad() {
    return [{
      name:'Infancia',
      y: 100
    }, {
      name: 'Juventud',
      y: 500
    }, {
      name: 'Adultez',
      y:200
    }, {
      name: 'Tercera edad',
      y: 50
    }]
  }
}
