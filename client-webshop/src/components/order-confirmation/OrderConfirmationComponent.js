import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OrderConfirmationComponent.css';

function OrderConfirmationComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, totalPrice } = location.state || { id: null, totalPrice: 0 };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Order Confirmed</h2>
      <p>Your order has been placed successfully!</p>
      <p>Order ID: {id}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button className="primary" onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default OrderConfirmationComponent;

