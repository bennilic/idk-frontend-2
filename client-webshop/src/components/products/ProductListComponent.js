import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';
import './ProductListComponent.css';

function ProductListComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListComponent;