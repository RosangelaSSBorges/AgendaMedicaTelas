import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgendaService } from '../agenda.service';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

//import { MedicosComponent } from '../medicos/medicos.component';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  nome: string;
  data: Date;
  medico: string;

  listRef: AngularFireList<any>;
  listPaciente: Observable<any[]>;

  constructor(private http: HttpClient, public agendaService: AgendaService) {}
  site: 'https://agendaciro.herokuapp.com';
  username: 'pedroca';
  password: 'pedro123';
  list = null;

  ngOnInit() {}
  getPaciente() {
    this.http
      .get<any>(this.site + '/pacientes', {
        //headers: { Authorization: 'Bearer ' + this.auth.token },
        headers: { Authorization: this.username + this.password },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }
  addItem() {}

  deleteItem() {}
}
