import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
      { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
      { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 }
    ]);
  }

  getProduct(id: number): Observable<Product> {
    const products = [
      { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
      { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
      { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 }
    ];
    const product = products.find(p => p.id === id);
    return of(product || { id: 0, name: '', description: '', price: 0 });
  }
}