import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserGuard } from '@my-diet-admin/shared';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('@my-diet-admin/dashboard').then((m) => m.DashboardModule),
  },
  {
    path: 'backend',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('@my-diet-admin/backend').then((m) => m.BackendModule),
  },
  {
    path: 'reports',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('@my-diet-admin/reports').then((m) => m.ReportsModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
