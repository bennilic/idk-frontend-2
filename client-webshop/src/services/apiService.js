export async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
  }
  
  export async function fetchUsers() {
    // Mock implementation using dummyjson.com
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data.users;
  }