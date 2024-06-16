import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../services/apiService';
import { CartContext } from '../../contexts/CartContext';
import './ProductDetailsComponent.css';

function ProductDetailsComponent() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductById(productId).then(setProduct).catch(error => console.error(error));
  }, [productId]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <div className="grid">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))} 
            min="1" 
          />
          <button className="primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComponent;