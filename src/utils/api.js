// src/utils/api.js

import { products, categories, loading, cart } from '../state/signals.js';

const BASE_URL = 'https://68fe03397c700772bb128814.mockapi.io/';

const EN_POINT = 'products';

const API_URL = `${BASE_URL}${EN_POINT}`;

// EXPORT: Charge le panier depuis localStorage
export async function loadCart() {
    try {
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('cart');
            if (saved) {
                cart.value = JSON.parse(saved);
            }
        }
    } catch (error) {
        console.log('Error loading cart:', error);
    }
}

// EXPORT: Récupère les données des produits
export async function fetchProducts() {
    try {
        const response = await fetch(API_URL);

        const data = await response.json();
        
        products.value = data; 
        
        console.clear()
        const cats = [...new Set(data.map(p => p.category))];

        console.log(data.filter(p => !p.category ));
        categories.value = cats; 
        
        loading.value = false; 
    } catch (error) {
        console.error('Error fetching products:', error);
        loading.value = false; 
    }
}