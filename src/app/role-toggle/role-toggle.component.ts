import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-toggle',
  standalone: true,
  template: `
    <h3>Rol actual: {{ role }}</h3>
    <button (click)="setRole('admin')">Ser Admin</button>
    <button (click)="setRole('user')">Ser Usuario</button>
    <button (click)="irDashboard()">Ir al Dashboard</button>
  `
})
export class RoleToggleComponent {
  role: string;

  constructor(private userService: UserService, private router: Router) {
    this.role = this.userService.getRole();
  }

  setRole(role: 'admin' | 'user') {
    this.userService.setRole(role);
    this.role = role;
  }

  irDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
