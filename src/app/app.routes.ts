import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { userGuard } from './guards/user.guard';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard.component';
import { RoleToggleComponent } from './role-toggle/role-toggle.component';

export const routes: Routes = [
  { path: '', component: RoleToggleComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canMatch: [adminGuard]
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canMatch: [userGuard]
  },
];
