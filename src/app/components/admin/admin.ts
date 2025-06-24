import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class AdminComponent {

  constructor(private authService: AuthService, private router: Router) {}

  get userRole() {
    return this.authService.getRole();
  }

  logout() {
    // Llamar al método logout del servicio de autenticación
    this.authService.logout();
    
    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
    
    console.log('Sesión cerrada correctamente');
  }
}