import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../services/apiService';
import { CartContext } from '../../contexts/CartContext';
import './ProductListComponent.css';

function ProductListComponent() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 9; // Show 9 items per page
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    loadProducts(currentPage);
  }, [currentPage]);

  const loadProducts = async (page) => {
    try {
      const data = await fetchProducts(page, itemsPerPage);
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleViewDetails(product.id)}>View Details</button>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductListComponent;