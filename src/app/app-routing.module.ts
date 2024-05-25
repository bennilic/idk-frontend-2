
// src/app/app-routing.module.ts
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)  // Ensure AdminModule is also standalone or properly configured
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

// Export RouterModule directly for standalone compatibility
export const AppRoutingModule = RouterModule.forRoot(routes);