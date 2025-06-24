import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './formulario.html', // Corregido
  styleUrls: ['./formulario.css']   // Corregido
})
export class FormularioComponent implements CanComponentDeactivate {
  nombre: string = '';
  email: string = '';
  hasUnsavedChanges: boolean = false;

  onInputChange() {
    this.hasUnsavedChanges = true;
  }

  guardar() {
    // Simular guardado
    console.log('Datos guardados:', { nombre: this.nombre, email: this.email });
    this.hasUnsavedChanges = false;
    alert('Datos guardados correctamente');
  }

  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('Tienes cambios sin guardar. ¿Estás seguro de que quieres salir?');
    }
    return true;
  }
}