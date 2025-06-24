import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  template: `
    <div class="configuracion">
      <h2>Configuración del Sistema</h2>
      <p>Esta sección requiere permisos de administrador</p>
      
      <div class="config-section">
        <h3>Configuración General</h3>
        <div class="config-item">
          <label>Nombre del sitio:</label>
          <input type="text" value="Mi Aplicación" readonly>
        </div>
        <div class="config-item">
          <label>Email de contacto:</label>
          <input type="email" value="admin@miapp.com" readonly>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .configuracion h2 {
      color: #333;
      margin-bottom: 1rem;
    }
    .config-section {
      margin-top: 2rem;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    .config-item {
      margin-bottom: 15px;
    }
    .config-item label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    .config-item input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class ConfiguracionComponent {}