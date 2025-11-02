// src/components/ProductCard.js

import { html } from "https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm";
// IMPORT: les actions pour ajouter au panier et afficher les détails
import { addToCart, showDetails } from "../state/signals.js";

export function ProductCard(product) {
  const specs = product.specifications
    ? Object.entries(product.specifications).slice(0, 2)
    : [];
  
  // Le template HTL est compacté pour éliminer les nœuds de texte vides
  return html`<div class="product">
    <img src=${product.image_url} alt=${product.name} />
    <div class="category-badge">${product.category}</div>
    <h3>${product.name}</h3>
    <div class="description">${product.description}</div>
  
    <div class="price">${product.currency}${product.price.toFixed(2)}</div>
    <button onclick=${() => addToCart(product)}>Aggiungi al carrello</button>
    <button class="details-btn" onclick=${() => showDetails(product)}>
      Dettagli
    </button>
  </div>`;
}