import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  template: `<h1>Admin Dashboard</h1>
  <p>Welcome to the admin panel!</p>
  <a routerLink="/admin/products">Manage Products</a> | 
  <a routerLink="/admin/orders">Manage Orders</a>`,
  standalone: true,
  imports:[
  RouterModule]   
    
})

export class AdminDashboardComponent {

}
