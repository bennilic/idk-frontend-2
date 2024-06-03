import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutComponent.css';

function CheckoutComponent() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Name:', name);
    console.log('Address:', address);
    navigate('/order-confirmation');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="checkout-button">Submit</button>
      </form>
      <button onClick={goBack} className="go-back-button">Go Back</button>
    </div>
  );
}

export default CheckoutComponent;