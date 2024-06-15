export const MOCK_PRODUCTS = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 },
  { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 400 },
  { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 500 },
  { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 600 },
  { id: 7, name: 'Product 7', description: 'Description of Product 7', price: 700 },
  { id: 8, name: 'Product 8', description: 'Description of Product 8', price: 800 },
  { id: 9, name: 'Product 9', description: 'Description of Product 9', price: 900 },
  { id: 10, name: 'Product 10', description: 'Description of Product 10', price: 1000 },
  { id: 11, name: 'Product 11', description: 'Description of Product 11', price: 1100 },
  { id: 12, name: 'Product 12', description: 'Description of Product 12', price: 1200 },
  // Add more products as needed
];

export function getProducts() {
  return Promise.resolve(MOCK_PRODUCTS);
}

export function getProduct(id) {
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  return Promise.resolve(product || { id: 0, name: '', description: '', price: 0 });
}