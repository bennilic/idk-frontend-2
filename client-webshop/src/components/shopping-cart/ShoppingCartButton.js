import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './ShoppingCartButton.css';

function ShoppingCartButton() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    navigate('/cart');
  };

  const handleCheckoutButtonClick = () => {
    navigate('/checkout');
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="shopping-cart-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="shopping-cart-button" onClick={handleButtonClick}>
        🛒
      </button>
      {isHovered && (
        <div className="shopping-cart-dropdown">
          <ul>
            {cartItems.map(product => (
              <li key={product.id} className="cart-product-item">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="cart-product-image"
                  onClick={() => handleProductClick(product.id)}
                />
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
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
