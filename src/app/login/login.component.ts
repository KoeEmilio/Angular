import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Iniciar sesión</h2>
    <button (click)="login()">Entrar</button>
  `
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}
