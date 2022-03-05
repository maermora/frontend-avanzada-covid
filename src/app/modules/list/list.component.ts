import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DashboardService } from '../dashboard.service'
import { Paciente } from 'src/app/shared/pacientes';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pacientes: any[] = [];
  dataSource = new MatTableDataSource<Paciente>(this.pacientes);
  displayedColumns: string[] = ['no', 'fecha', 'ciudad', 'edad', 'sexo', 'estado'];
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getCasos().subscribe((casos: any[]) => {
      this.pacientes = [...casos];
      this.dataSource.data = this.pacientes;
    })
    this.dataSource.paginator = this.paginator;
  }
  //Get lista de pacientes
  // loadPacientes() {
  //   .subscribe((data: {})=> {
  //     this.pacientes = data;
  //     this.dataSource.data = this.pacientes;   
  //   })
  // }

}
