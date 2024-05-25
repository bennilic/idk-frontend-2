import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    // This assumes you have an 'admin' directory inside your 'app' directory with an 'admin.module.ts'
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'  // Redirect to 'admin' by default
  }];
