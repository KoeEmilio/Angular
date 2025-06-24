import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private userRole = 'user'; // 'admin', 'user', 'moderator'

  constructor() { }

  login(username: string, password: string): boolean {
    // Simulación de login
    if (username === 'admin' && password === 'admin') {
      this.authenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.authenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }

  logout(): void {
    this.authenticated = false;
    this.userRole = 'user';
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  hasRole(role: string): boolean {
    return this.userRole === role;
  }

  getRole(): string {
    return this.userRole;
  }
}