import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, uploadProductImage, deleteProductImage } from '../../services/apiService';
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

  const handleImageUpload = async (event) => {
    event.preventDefault();
    if (!selectedImage) return;

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      await uploadProductImage(productId, selectedImage.name, formData);
      setProduct(prevProduct => ({
        ...prevProduct,
        images: [...prevProduct.images, selectedImage.name]
      }));
      setSelectedImage(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageDelete = async (filename) => {
    try {
      await deleteProductImage(productId, filename);
      setProduct(prevProduct => ({
        ...prevProduct,
        images: prevProduct.images.filter(img => img !== filename)
      }));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <div className="grid">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div>
            <label>Quantity:</label>
            <input type="number" min="1" defaultValue="1" id="quantity" />
          </div>
          <button className="primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="image-management">
        <h3>Manage Images</h3>
        <form onSubmit={handleImageUpload}>
          <input type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
          <button type="submit">Upload Image</button>
        </form>
        <div className="images-list">
          {product.images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={`/path_to_images/${product.id}/${image}`} alt={image} />
              <button onClick={() => handleImageDelete(image)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComponent;