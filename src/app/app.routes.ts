import { Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario';
import { InicioComponent } from './components/inicio/inicio';
import { ContactoComponent } from './components/contacto/contacto';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { 
    path: 'formulario', 
    component: FormularioComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  { path: 'contacto', component: ContactoComponent }
];