import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="dashboard">
      <h2>Dashboard</h2>
      <p>Bienvenido al panel de control</p>
      <div class="stats">
        <div class="stat-card">
          <h3>Usuarios</h3>
          <p class="stat-number">150</p>
        </div>
        <div class="stat-card">
          <h3>Ventas</h3>
          <p class="stat-number">$25,000</p>
        </div>
        <div class="stat-card">
          <h3>Pedidos</h3>
          <p class="stat-number">89</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard h2 {
      color: #333;
      margin-bottom: 1rem;
    }
    .stats {
      display: flex;
      gap: 20px;
      margin-top: 2rem;
    }
    .stat-card {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      flex: 1;
    }
    .stat-number {
      font-size: 2rem;
      font-weight: bold;
      color: #007bff;
      margin: 0;
    }
  `]
})
export class DashboardComponent {}