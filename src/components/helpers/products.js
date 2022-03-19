const API_URL = 'https://6234f068ca22991339d8a978.mockapi.io/tiendadeluces/v1'

export function getProducts(categoryId) {
    return fetch(`${API_URL}/products${categoryId ? '?category='+categoryId : ''}`);
}

export function getProduct(id) {
    return fetch(`${API_URL}/products?id=${id}`);
}