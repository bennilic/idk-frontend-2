import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from '../components/home/HomeComponent';
import ShoppingCartComponent from '../components/shopping-cart/ShoppingCartComponent';
import CheckoutComponent from '../components/checkout/CheckoutComponent';
import OrderConfirmationComponent from '../components/order-confirmation/OrderConfirmationComponent';
import ProductDetailsComponent from '../components/products/ProductDetailsComponent';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/cart" element={<ShoppingCartComponent />} />
        <Route path="/checkout" element={<CheckoutComponent />} />
        <Route path="/order-confirmation" element={<OrderConfirmationComponent />} />
        <Route path="/product/:productId" element={<ProductDetailsComponent />} />
        <Route path="*" element={<HomeComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;