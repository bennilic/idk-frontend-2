import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { createOrder } from '../../services/apiService';
import './CheckoutComponent.css';

function CheckoutComponent() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errorMessage = '';

    if (!firstname) errorMessage = 'First name is required.';
    else if (!lastname) errorMessage = 'Last name is required.';
    else if (!email) errorMessage = 'Email is required.';
    else if (!validateEmail(email)) errorMessage = 'Please enter a valid email address.';
    else if (!streetNumber) errorMessage = 'Street and Number is required.';
    else if (!city) errorMessage = 'City is required.';
    else if (!zipCode) errorMessage = 'ZIP Code is required.';
    else if (!country) errorMessage = 'Country is required.';

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    const orderData = {
      firstname,
      lastname,
      email,
      streetNumber,
      city,
      zipCode,
      country,
      products: cartItems.map(item => ({
        productId: item.id,
        count: item.quantity,
      })),
    };

    try {
      await createOrder(orderData);
      navigate('/order-confirmation');
    } catch (error) {
      setError(error.message);
    }
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
          <label htmlFor="firstname">First Name</label>
          <input 
            type="text" 
            id="firstname" 
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)} 
          />
        </div>
        <div className="grid">
          <label htmlFor="lastname">Last Name</label>
          <input 
            type="text" 
            id="lastname" 
            value={lastname} 
            onChange={(e) => setLastname(e.target.value)} 
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
          <label htmlFor="streetNumber">Street and Number</label>
          <input 
            type="text" 
            id="streetNumber" 
            value={streetNumber} 
            onChange={(e) => setStreetNumber(e.target.value)} 
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
          <label htmlFor="zipCode">ZIP Code</label>
          <input 
            type="text" 
            id="zipCode" 
            value={zipCode} 
            onChange={(e) => setZipCode(e.target.value)} 
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
        <button type="submit" className="primary">Submit</button>
      </form>
      <button onClick={goBack} className="secondary">Go Back</button>
    </div>
  );
}

export default CheckoutComponent;