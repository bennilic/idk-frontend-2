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
  const url = getApiUrl(`/products?page=${page}&amount=${amountPerPage}`);
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to fetch products. Status: ${response.status}. Endpoint: ${url}. Error: ${errorData.message}`);
  }
  const data = await response.json();
  return data;
};

export const fetchProductById = async (id) => {
  const url = getApiUrl(`/product/${id}`);
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to fetch product. Status: ${response.status}. Endpoint: ${url}. Error: ${errorData.message}`);
  }
  const data = await response.json();
  return data;
};

export const createOrder = async (orderData) => {
  const url = getApiUrl('/order');
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Failed to create order. Status: ${response.status}. Endpoint: ${url}. Error: ${errorData.message}`);
  }
  const data = await response.json();
  return data;
};
