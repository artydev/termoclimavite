// src/components/ProductList.js

import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';
// IMPORT: l'état des produits et du chargement
import { loading, filteredProducts } from '../state/signals.js';
import { ProductCard } from './ProductCard.js'; // IMPORT: le composant enfant

export function ProductList() {
  const currentProducts = filteredProducts.value;
  
  // Cas 1: Chargement en cours
  if (loading.value) {
    return html`<div class="loading">Caricamento prodotti...</div>`;
  }
    
  // Cas 2: Aucun produit trouvé (après chargement)
  if (currentProducts.length === 0) {
    return html`<div class="loading">Nessun prodotto trovato</div>`;
  }

  // Cas 3: Affichage des produits (le template est compacté)
  // NOTE: Correction de .map(...) en supprimant le [0] final.
  return html`<div class="products">
    ${currentProducts.map(p => ProductCard(p))}
  </div>`;
}