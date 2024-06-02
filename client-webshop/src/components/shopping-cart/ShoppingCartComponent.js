import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartComponent.css';

const MOCK_CART_PRODUCTS = [
  { id: 1, name: 'Product 1', quantity: 2 },
  { id: 2, name: 'Product 2', quantity: 1 },
];

function ShoppingCartComponent() {
  const navigate = useNavigate();

  const handleCheckoutButtonClick = () => {
    navigate('/checkout');
  };

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>
      <ul className="cart-product-list">
        {MOCK_CART_PRODUCTS.map(product => (
          <li key={product.id} className="cart-product-item">
            {product.name} (x{product.quantity})
          </li>
        ))}
      </ul>
      <button onClick={handleCheckoutButtonClick} className="checkout-button">
        Go to Checkout
      </button>
    </div>
  );
}

export default ShoppingCartComponent;