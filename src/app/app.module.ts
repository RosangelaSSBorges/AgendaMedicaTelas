import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MedicoComponent } from './medico/medico.component';
import { HomeComponent } from './home/home.component';
import { AgendaService } from './agenda.service';
import { SobreComponent } from './sobre/sobre.component';
import { ConvenioComponent } from './convenio/convenio.component';

@NgModule({
  imports: [
    BrowserModule,

    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBTDuiN40n-JK4rufVEAg3JrwlP9Vt-Teg',
      authDomain: 'autenticacaoangular-21729.firebaseapp.com',
      databaseURL: 'https://autenticacaoangular-21729.firebaseio.com',
      projectId: 'autenticacaoangular-21729',
      storageBucket: 'autenticacaoangular-21729.appspot.com',
      messagingSenderId: '318141514531',
    }),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'medicos', component: MedicoComponent },
      { path: 'pacientes', component: PacienteComponent },
      { path: 'agendamentos', component: AgendamentoComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'convenio', component: ConvenioComponent },
    ]),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],

  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AgendaService],
})
export class AppModule {}
