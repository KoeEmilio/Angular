import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="usuarios">
      <h2>Gestión de Usuarios</h2>
      <p>Esta sección requiere permisos de administrador</p>
      
      <div class="user-list">
        <div class="user-item" *ngFor="let user of users">
          <span>{{ user.name }}</span>
          <span class="user-role">{{ user.role }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .usuarios h2 {
      color: #333;
      margin-bottom: 1rem;
    }
    .user-list {
      margin-top: 2rem;
    }
    .user-item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
    .user-role {
      background: #007bff;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
    }
  `]
})
export class UsuariosComponent {
  users = [
    { name: 'Juan Pérez', role: 'Admin' },
    { name: 'María García', role: 'User' },
    { name: 'Carlos López', role: 'Moderator' }
  ];
}