import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/apiService';
import './ProductListComponent.css';

const PRODUCTS_PER_PAGE = 9;

function ProductListComponent() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div>
      <div className="product-grid">
        {currentProducts.map(product => (
          <div key={product.id} className="card">
            <h3>{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => window.location.href = `/product/${product.id}`}>View Details</button>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(products.length / PRODUCTS_PER_PAGE)).keys()].map(number => (
            <li key={number + 1} className="page-item">
              <button onClick={() => paginate(number + 1)} className="page-link">
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProductListComponent;