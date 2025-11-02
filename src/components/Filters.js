// src/components/Filters.js

import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';
// IMPORT: l'état et l'action de filtrage
import { categories, selectedCategory, filterByCategory } from '../state/signals.js';

export function Filters() {
  return html`<div class="filters">
    <button 
      class=${selectedCategory.value === 'all' ? 'active' : ''} 
      onclick=${() => filterByCategory('all')}
    >
      Tutti i prodotti
    </button>${categories.value.map(cat => html`<button 
        class=${selectedCategory.value === cat ? 'active' : ''} 
        onclick=${() => filterByCategory(cat)}
      >
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>`)}
  </div>`;
}