export const MOCK_PRODUCTS = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 }
];

export async function getProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products;
}

export async function getProduct(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}