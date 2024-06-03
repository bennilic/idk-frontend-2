import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmationComponent.css';

function OrderConfirmationComponent() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="order-confirmation-container">
      <h2>Order Confirmed</h2>
      <p>Your order has been placed successfully!</p>
      <button onClick={goBack} className="go-back-button">Go Back</button>
    </div>
  );
}

export default OrderConfirmationComponent;