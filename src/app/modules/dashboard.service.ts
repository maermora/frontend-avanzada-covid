import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiURL = 'http://localhost:3000';
  private sodaAPI = "https://www.datos.gov.co/resource/gt2j-8ykr.json?departamento_nom=NARIÑO&$limit=10000&$order=id_de_caso DESC"

  constructor(private http: HttpClient) { }

  getCasos(){
    //return this.http.get(`${this.apiURL}/casos`)
    return this.http.get(`${this.sodaAPI}`);
  }

  getSodaCasos(){
    return this.http.get(`${this.sodaAPI}`);
  }

  getDecesos(){
    return this.http.get(`${this.sodaAPI}&Estado=Fallecido`);
  }


  

  
}
