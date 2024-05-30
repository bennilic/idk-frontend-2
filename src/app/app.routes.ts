import { Route } from '@angular/router';
import { HomeComponent } from './client/home/home.component';
import { ShoppingCartComponent } from './client/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { OrderConfirmationComponent } from './client/order-confirmation/order-confirmation.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: '**', redirectTo: '' }
];