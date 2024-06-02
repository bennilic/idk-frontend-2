import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartButton.css';

const MOCK_CART_PRODUCTS = [
  { id: 1, name: 'Product 1', quantity: 2 },
  { id: 2, name: 'Product 2', quantity: 1 },
];

function ShoppingCartButton() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    navigate('/cart');
  };

  const handleCheckoutButtonClick = () => {
    navigate('/checkout');
  };

  return (
    <div 
      className="shopping-cart-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="shopping-cart-button" onClick={handleButtonClick}>
        Shopping Cart
      </button>
      {isHovered && (
        <div className="shopping-cart-dropdown">
          <ul>
            {MOCK_CART_PRODUCTS.map(product => (
              <li key={product.id}>
                {product.name} (x{product.quantity})
              </li>
            ))}
          </ul>
          <button onClick={handleCheckoutButtonClick} className="checkout-button">
            Go to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartButton;