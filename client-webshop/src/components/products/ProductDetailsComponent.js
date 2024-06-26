import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../services/apiService';
import { CartContext } from '../../contexts/CartContext';
import './ProductDetailsComponent.css';

function ProductDetailsComponent() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductById(productId).then(setProduct).catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    addToCart(product, quantity);
    setShowInfoWindow(true);
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="image-gallery">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.title} ${index + 1}`} className="thumbnail" />
          ))}
        </div>
        <div>
          <img src={product.thumbnail} alt={product.title} className="product-image" />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <h4>Details:</h4>
          <p>{product.details}</p>
          <h4>AI Description:</h4>
          <p>{product.aiDescription}</p>
          <div>
            <label>Quantity:</label>
            <input type="number" min="1" defaultValue="1" id="quantity" />
          </div>
          <div className="button-group">
            <button className="primary" onClick={handleAddToCart}>Add to Cart</button>
            <button className="secondary" onClick={handleGoBack}>Go Back</button>
          </div>
        </div>
      </div>

      {showInfoWindow && (
        <div className="info-window">
          <p>Product has been added to the cart.</p>
          <button className="primary" onClick={handleGoToCart}>Go to Shopping Cart</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsComponent;