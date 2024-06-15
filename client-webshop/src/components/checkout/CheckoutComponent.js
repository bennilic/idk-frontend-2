import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutComponent.css';

function CheckoutComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorMessage = '';

    if (!name) errorMessage = 'Name is required.';
    else if (!email) errorMessage = 'Email is required.';
    else if (!validateEmail(email)) errorMessage = 'Please enter a valid email address.';
    else if (!street) errorMessage = 'Street is required.';
    else if (!houseNumber) errorMessage = 'House number is required.';
    else if (!postalCode) errorMessage = 'Postal code is required.';
    else if (!city) errorMessage = 'City is required.';
    else if (!country) errorMessage = 'Country is required.';

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Street:', street);
    console.log('House Number:', houseNumber);
    console.log('Postal Code:', postalCode);
    console.log('City:', city);
    console.log('Country:', country);
    navigate('/order-confirmation');
  };

  const goBack = () => {
    navigate(-1);
  };

  const closeError = () => {
    setError('');
  };

  return (
    <div className="container">
      {error && (
        <div className="error-popup">
          <div className="error-popup-content">
            <button className="error-close" onClick={closeError}>×</button>
            <div className="error-icon">⚠️</div>
            <h2>Ooops!</h2>
            <p>{error}</p>
            <button className="error-button" onClick={closeError}>Try Again</button>
          </div>
        </div>
      )}
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="street">Street</label>
          <input 
            type="text" 
            id="street" 
            value={street} 
            onChange={(e) => setStreet(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="houseNumber">House Number</label>
          <input 
            type="text" 
            id="houseNumber" 
            value={houseNumber} 
            onChange={(e) => setHouseNumber(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="postalCode">Postal Code</label>
          <input 
            type="text" 
            id="postalCode" 
            value={postalCode} 
            onChange={(e) => setPostalCode(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="country">Country</label>
          <input 
            type="text" 
            id="country" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default CheckoutComponent;