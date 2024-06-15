import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/productService';
import './ProductDetailsComponent.css';

function ProductDetailsComponent() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(parseInt(productId)).then(setProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <div className="grid">
        <img src={`path_to_images/${product.id}.jpg`} alt={product.name} className="product-image" />
        <div>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComponent;