import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="home">
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la aplicación con CanActivateChild Guard</p>
      
      <div class="actions">
        <a routerLink="/login" class="btn btn-primary">Iniciar Sesión</a>
        <a routerLink="/admin" class="btn btn-secondary">Panel Admin</a>
      </div>
    </div>
  `,
  styles: [`
    .home {
      text-align: center;
      padding: 50px 20px;
    }
    .actions {
      margin-top: 30px;
    }
    .btn {
      display: inline-block;
      padding: 12px 24px;
      margin: 0 10px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: bold;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
  `]
})
export class HomeComponent {}