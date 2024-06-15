import React from 'react';
import './HomeComponent.css';
import ShoppingCartButton from '../shopping-cart/ShoppingCartButton';
import ProductListComponent from '../products/ProductListComponent';

function HomeComponent() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <ShoppingCartButton />
      <ProductListComponent />
    </div>
  );
}

export default HomeComponent;