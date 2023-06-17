import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './common/guard/auth.guard';
import { roleGuard } from './common/guard/role.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: '',
    canActivate: [authGuard, roleGuard],
    data: {
      role: 'ADMIN'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboards/dashboards-routing.module').then(m => m.DashboardsRoutingModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./components/products/products-routing.module').then(m => m.ProductsRoutingModule),
      },
      {
        path: 'employees',
        loadChildren: () => import('./components/employees/employees-routing.module').then(m => m.EmployeesRoutingModule),
      },
      {
        path: 'suppliers',
        loadChildren: () => import('./components/suppliers/suppliers-routing.module').then(m => m.SuppliersRoutingModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('./components/categories/categories-routing.module').then(m => m.CategoriesRoutingModule),
      }
    ]
  },
  {
    path: 'employees',
    canActivate: [authGuard],
    data: {
      role: 'NV'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./employees/sales/sales-routing.module').then(m => m.SalesRoutingModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('./employees/sales/sales-routing.module').then(m => m.SalesRoutingModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./employees/my-cart/my-cart-routing.module').then(m => m.CartRoutingModule)
      },
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
