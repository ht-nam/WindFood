import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './common/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboards/dashboards-routing.module').then(m => m.DashboardsRoutingModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home-routing.module').then(m => m.HomeRoutingModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products-routing.module').then(m => m.ProductsRoutingModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('./components/employees/employees-routing.module').then(m => m.EmployeesRoutingModule)
      },
      {
        path: 'suppliers',
        loadChildren: () => import('./components/suppliers/suppliers-routing.module').then(m => m.SuppliersRoutingModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
