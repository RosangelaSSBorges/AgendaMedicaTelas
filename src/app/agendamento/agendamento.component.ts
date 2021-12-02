import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
})
export class AgendamentoComponent implements OnInit {
  dataSource: Array<any> = [];

  constructor(public agendaService: AgendaService) {}
  listar(): void {
    this.agendaService.getAgendamento().subscribe((data: any[]) => {
      data.forEach((i) => this.dataSource.push(i));
      console.log(this.dataSource);
    });
  }

  ngOnInit() {
    this.listar();
    console.log(this.dataSource);
  }
}
