import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { AuthService } from './auth.service';

interface Auth {
  token: string;
  username: string;
  profile: Array<string>;
  router: Router; //teste encaminhamento de rota
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  [x: string]: any;
  site = 'https://agendaciro.herokuapp.com';
  auth: Auth | null = null;
  // site = 'https://glacial-scrubland-11809.herokuapp.com';
  name = 'Agenda Médica';
  login = 'pedroca';
  senha = 'pedro123';
  //login = 'ricardo.larguesa@fatec.sp.gov.br';
  //password = '123456';

  list = null;

  //constructor(public authService: AuthService) {}
  constructor(private http: HttpClient, router: Router) {
    this.router = router;
  }
  ngOnInit() {}

  // + '/login'
  postLogin() {
    this.http
      .post<Auth>(this.site + '/login', {
        login: this.login,
        senha: this.senha,
      })
      .subscribe((data) => {
        this.auth = data;
      });
    //console.log(this.auth.profile);

    this.router.navigate(['/']);
  }

  postLogout() {
    this.auth = null;
  }

  getMedico() {
    this.http.get<any>(this.site + '/medicos');
  }

  getPaciente() {
    this.http.get<any>(this.site + '/pacientes', {}).subscribe((data) => {
      this.list = data;
    });
  }
  /*
  loginWithEmail() {
    this.authService.loginWithEmail(this.user, this.password);
    this.user = this.password = '';
  }
  */
  /*
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  */
  /*
  logout() {
    this.authService.logout();
  }
  */
}
