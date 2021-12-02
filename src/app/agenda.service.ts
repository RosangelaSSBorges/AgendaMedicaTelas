import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Injectable()
export class AgendaService {
  constructor(public http: HttpClient) {}
  baseUrl = 'https://agendaciro.herokuapp.com/agendamentos';

  getAgendamento(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Timestamp } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';

interface Medico {
  id: number;
  nome: string;
  especialidade: string;
  contato: string;
}

@Injectable()
export class AgendaService {
  site = 'https://agendaciro.herokuapp.com';
  login = 'pedroca';
  senha = 'pedro123';

  auth = null;
  list = null;

  name: string;

  constructor(private http: HttpClient) {}

  /*
  getMedico() {
    this.http
      .get<any>(this.site + '/medicos', {
        //headers: { Authorization: 'Bearer ' + this.auth.token },
        headers: { Authorization: this.login + this.senha },
      })
      .subscribe((data) => {
        this.list = data;
      });
  } //

  getMedico(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.site + '/medico');
  }

  getPaciente() {
    this.http
      .get<any>(this.site + '/pacientes', {
        //headers: { Authorization: 'Bearer ' + this.auth.token },
        headers: { Authorization: this.login + this.senha },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }

  addItem() {}

  deleteItem() {}
}
*/
