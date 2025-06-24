import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log('CanActivateChild: Verificando acceso a ruta hija:', state.url);
    
    // Verificar si el usuario está autenticado
    if (!this.authService.isAuthenticated()) {
      console.log('Usuario no autenticado, redirigiendo a login');
      this.router.navigate(['/login']);
      return false;
    }

    // Verificar permisos específicos para rutas hijas
    const requiredRole = childRoute.data?.['role'];
    if (requiredRole && !this.authService.hasRole(requiredRole)) {
      console.log('Usuario sin permisos para:', requiredRole);
      alert('No tienes permisos para acceder a esta sección');
      this.router.navigate(['/admin']);
      return false;
    }

    console.log('Acceso permitido a:', state.url);
    return true;
  }
}