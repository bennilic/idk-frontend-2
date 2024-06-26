import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import './ShoppingCartComponent.css';

function ShoppingCartComponent() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckoutButtonClick = () => {
    navigate('/checkout');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ul className="cart-product-list">
        {cartItems.map(product => (
          <li key={product.id} className="cart-product-item">
            <img src={product.images[0]} alt={product.title} className="cart-thumbnail" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckoutButtonClick} className="primary">
        Go to Checkout
      </button>
      <button onClick={goBack} className="secondary">
        Go Back
      </button>
    </div>
  );
}

export default ShoppingCartComponent;
