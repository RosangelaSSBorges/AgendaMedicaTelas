import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css'],
})
export class MedicoComponent implements OnInit {
  nome: string;
  especialidade: string;
  contato: string;

  listRef: AngularFireList<any>;
  listMedico: Observable<any[]>;
  constructor(public agendaService: AgendaService) {
   // this.nome = '';
    /*this.listRef = db.list('listMedico');
    this.listMedico = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );*/
  }

  ngOnInit() {}
  addItem() {
    this.listRef.push({
      nome: this.nome,
      especialidade: this.especialidade,
      contato: this.contato,
      //email: this.authService.currentUserEmail,
    });
    this.nome = null;
    this.especialidade = null;
    this.contato = null;
  }

  deleteItem(key: string) {
    this.listRef.remove(key);
  }
}
