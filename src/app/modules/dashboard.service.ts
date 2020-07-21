import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../shared/pacientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiURL = 'http://localhost:3000/pacientes';


  constructor(private _http: HttpClient) { }

  getPacientes(): Observable<any> {
    return this._http.get<any>(this.apiURL)
  }
  getPacientesHombres(): Observable<any> {
    return this._http.get<any>(this.apiURL + '?sexo=M')
  }
  getPacientesMujeres(): Observable<any> {
    return this._http.get<any>(this.apiURL + '?sexo=F')
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
  pieChartSexo() {
    return [{
      name: 'Hombres',
      y: 500
    }, {
      name: 'Mujeres',
      y: 600
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
