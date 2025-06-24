import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { AdminComponent } from './components/admin/admin';
import { DashboardComponent } from './components/admin/dashboard/dashboard';
import { UsuariosComponent } from './components/admin/usuarios/usuarios';
import { ConfiguracionComponent } from './components/admin/configuracion/configuracion';
import { CanActivateChildGuard } from './guards/can-activate-child.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [CanActivateChildGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { 
        path: 'usuarios', 
        component: UsuariosComponent,
        data: { role: 'admin' }
      },
      { 
        path: 'configuracion', 
        component: ConfiguracionComponent,
        data: { role: 'admin' }
      }
    ]
  }
];