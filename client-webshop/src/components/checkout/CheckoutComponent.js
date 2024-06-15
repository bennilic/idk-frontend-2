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
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
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

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="grid">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="grid">
          <label htmlFor="street">Street</label>
          <input 
            type="text" 
            id="street" 
            value={street} 
            onChange={(e) => setStreet(e.target.value)} 
            required 
          />
        </div>
        <div className="grid">
          <label htmlFor="houseNumber">House Number</label>
          <input 
            type="text" 
            id="houseNumber" 
            value={houseNumber} 
            onChange={(e) => setHouseNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="grid">
          <label htmlFor="postalCode">Postal Code</label>
          <input 
            type="text" 
            id="postalCode" 
            value={postalCode} 
            onChange={(e) => setPostalCode(e.target.value)} 
            required 
          />
        </div>
        <div className="grid">
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </div>
        <div className="grid">
          <label htmlFor="country">Country</label>
          <input 
            type="text" 
            id="country" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default CheckoutComponent;