const API_BASE_URL = 'http://localhost:8080/idk-backend/api/v1';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?page=1&amount=10`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/product/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${API_BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }

  return await response.json();
};

export const uploadProductImage = async (productId, imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);

  const response = await fetch(`${API_BASE_URL}/product/${productId}/image/${imageFile.name}`, {
    method: 'PUT',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return await response.json();
};

export const deleteProductImage = async (productId, filename) => {
  const response = await fetch(`${API_BASE_URL}/product/${productId}/image/${filename}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete image');
  }

  return await response.json();
};