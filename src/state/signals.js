// src/state/signals.js

import { signal, computed, effect } from 'https://cdn.jsdelivr.net/npm/@preact/signals@1.2.2/+esm';

// =================================================================
// EXPORTS: SIGNALS & COMPUTED
// =================================================================

// État de base
export const products = signal([]); 
export const cart = signal([]);     
export const cartOpen = signal(false); 
export const loading = signal(true); 
export const selectedCategory = signal('all'); 
export const categories = signal([]); 
export const detailsProduct = signal(null); 

// État dérivé
export const cartCount = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.quantity, 0);
});

export const cartTotal = computed(() => {
    return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
});

export const filteredProducts = computed(() => {
  
    const category = selectedCategory.value;
    const allProducts = products.value;
    if (category === 'all') {
        return allProducts;
    } else {
        return allProducts.filter(p => p.category === category);
    }
});

// =================================================================
// EXPORTS: ACTIONS (Mutateurs)
// =================================================================

export function filterByCategory(category) {
    selectedCategory.value = category; 
}

export function addToCart(product) {
    const existing = cart.value.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
        cart.value = [...cart.value]; 
    } else {
        cart.value = [...cart.value, { ...product, quantity: 1 }];
    }
}

export function removeFromCart(productId) {
    cart.value = cart.value.filter(item => item.id !== productId);
}

export function updateQuantity(productId, delta) {
    const items = cart.value;
    const item = items.find(i => i.id === productId);

    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            cart.value = [...items]; 
        }
    }
}

export function toggleCart() {
    cartOpen.value = !cartOpen.value; 
}

export function checkout() {
    const total = cartTotal.value; 
    const items = cart.value.map(item => `${item.name} x${item.quantity}`).join('\n');
    alert(`Checkout\n\nProdotti:\n${items}\n\nTotale: €${total}`);
}

export function showDetails(product) {
    detailsProduct.value = product; 
}

export function closeDetails() {
    detailsProduct.value = null; 
}

// =================================================================
// EFFECT (Sauvegarde Locale)
// =================================================================

function saveCart() {
    try {
        if (cart.value.length === 0 && typeof localStorage !== 'undefined') {
            localStorage.removeItem('cart');
            return;
        }
        const data = JSON.stringify(cart.value);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('cart', data);
        }
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

// S'abonne automatiquement au signal 'cart'
effect(() => {
    saveCart();
});