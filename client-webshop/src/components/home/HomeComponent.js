import React from 'react';
import './HomeComponent.css';
import ShoppingCartButton from '../shopping-cart/ShoppingCartButton';
import ProductListComponent from '../products/ProductListComponent';

function HomeComponent() {
  return (
    <div>
      <h1>IDK</h1>
      <p>Welcome to our shop!</p>
      <ShoppingCartButton />
      <ProductListComponent />
    </div>
  );
}

export default HomeComponent;