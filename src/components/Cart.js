// src/components/Cart.js

import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';
// IMPORT: les signaux et les actions du panier
import { cart, cartOpen, cartTotal, toggleCart, checkout, updateQuantity, removeFromCart } from '../state/signals.js';

// Fonction interne pour un seul article du panier
function CartItem(item) {
  // Template compacté pour l'article
  return html`<div class="cart-item">
    <div class="cart-item-name">${item.name}</div>
    <div class="cart-item-price">
      ${item.currency}${item.price.toFixed(2)} × ${item.quantity} = ${item.currency}${(item.price * item.quantity).toFixed(2)}
    </div>
    <div class="cart-item-controls">
      <input value="0"  />
      <button onclick=${() => updateQuantity(item.id, -1)}>-</button>
      <button onclick=${() => updateQuantity(item.id, 1)}>+</button>
      <button class="remove-btn" onclick=${() => removeFromCart(item.id)}>Rimuovi</button>
    </div>
  </div>`;
}

// Composant principal du panier
export function Cart() {
  const total = cartTotal.value;
  
  // Template du panier, très compacté
  return html`<div class="cart-overlay ${cartOpen.value ? 'active' : ''}" onclick=${toggleCart}>
    <div class="cart-panel" onclick=${(e) => e.stopPropagation()}>
      <div class="cart-header">
        <h2>Carrello</h2>
        <span class="close-cart" onclick=${toggleCart}>×</span>
      </div>
      ${cart.value.length === 0 
        ? html`<p>Il tuo carrello è vuoto</p>`
        : html`<div>
            ${cart.value.map(item => CartItem(item))}
            <div class="cart-total">
              Totale: €${total}
            </div>
            <button class="checkout-btn" onclick=${checkout}>Procedi al pagamento</button>
          </div>`
      }
    </div>
  </div>`;
}