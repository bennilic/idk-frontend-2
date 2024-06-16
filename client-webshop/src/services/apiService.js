const BASE_URL = 'http://localhost:8080/idk-backend/api/v1';

export const fetchProducts = async (page = 1, amount = 9) => {
  const response = await fetch(`${BASE_URL}/products?page=${page}&amount=${amount}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.products;
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/product/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};