const getApiUrl = (endpoint) => {
  let baseUrl;
  if (process.env.REACT_APP_ENVIRONMENT === "DEV") {
    baseUrl = "http://localhost:8080/idk-backend/api/v1";
  } else {
    baseUrl = "/idk-backend/api/v1";
  }
  return `${baseUrl}${endpoint}`;
};

export const fetchProducts = async (page, amountPerPage) => {
  const response = await fetch(getApiUrl(`/products?page=${page}&amount=${amountPerPage}`));
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};

export const fetchProductById = async (id) => {
  const response = await fetch(getApiUrl(`/product/${id}`));
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const data = await response.json();
  return data;
};

export const createOrder = async (orderData) => {
  const response = await fetch(getApiUrl('/order'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  if (!response.ok) {
    throw new Error('Failed to create order');
  }
  const data = await response.json();
  return data;
};
