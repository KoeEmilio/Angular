import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private role: 'admin' | 'user' = 'user';

  setRole(role: 'admin' | 'user') {
    this.role = role;
  }

  isAdmin() {
    return this.role === 'admin';
  }

  isUser() {
    return this.role === 'user';
  }

  getRole() {
    return this.role;
  }
}
