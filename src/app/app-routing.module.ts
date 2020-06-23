import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {
    path: 'registration',
    loadChildren: () => import('./features/auth/registration/registration.module').then(m => m.RegistrationModule),
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/login/login.module').then(m => m.LoginModule),
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: 'showcases/ux-h1',
    loadChildren: () => import('./features/showcases/ux-h1/ux-h1.module').then(m => m.UxH1Module),
    data: { showHeader: true, showSidebar: true }
  },
  {
    path: 'showcases/ux-dynamic-form-builder',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./features/showcases/ux-dynamic-form-builder/ux-dynamic-form-builder.module').then(m => m.UxDynamicFormBuilderModule),
    data: { showHeader: true, showSidebar: true }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
