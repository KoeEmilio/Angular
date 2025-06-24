import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './admin.html', // Corregido
  styleUrls: ['./admin.css']   // Corregido
})
export class AdminComponent {

  constructor(private authService: AuthService, private router: Router) {}

  get userRole() {
    return this.authService.getRole();
  }

  logout() {
    // Tu lógica de logout
  }
}