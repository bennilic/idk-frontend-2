import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../services/apiService';
import { CartContext } from '../../contexts/CartContext';
import './ProductDetailsComponent.css';

function ProductDetailsComponent() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchProductById(productId).then(setProduct).catch(error => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };


  return (
    <div className="container">
      <h2>{product.title}</h2>
      <div className="grid">
        <img src={product.images[0]} alt={product.title} className="product-image" />
        <div>
          <h4>Description:</h4>
          <p>{product.description}</p>
          <h4>AI Description:</h4>
          <p>{product.aiDescription}</p>
          <p>Price: ${product.price}</p>
          <div>
            <label>Quantity:</label>
            <input type="number" min="1" defaultValue="1" id="quantity" />
          </div>
          <button className="primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
        <div className="images-list">
          {product.images.map((image, index) => (
            <div key={index} className="image-item">
            </div>
          ))}
        </div>
      </div>

  );
}

export default ProductDetailsComponent;
