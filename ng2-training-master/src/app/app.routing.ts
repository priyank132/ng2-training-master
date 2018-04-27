import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreViewComponent } from './store-view/store-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CheckoutViewComponent } from './check-out-view/check-out-view.component';
import { LoginComponent } from './router/login/login.component';
import { AuthGuard } from './router/auth-guard-service';

const appRoutes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: StoreViewComponent
  },
  {
    path: 'cart', component: CartViewComponent
  },
  {
    path: 'checkout', component: CheckoutViewComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
