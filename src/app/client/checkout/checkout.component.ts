import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    document.querySelector('form')?.addEventListener('submit', this.placeOrder.bind(this));
  }

  placeOrder(event: Event): void {
    event.preventDefault();  // Prevent default form submission
    console.log('Placing order...');
    this.router.navigate(['/order-confirmation']).then(() => {
      console.log('Navigation successful');
    }).catch(err => {
      console.error('Navigation error', err);
    });
  }
}