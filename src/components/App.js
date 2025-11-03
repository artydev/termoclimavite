// src/components/App.js

import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';
// IMPORT: l'état du chargement
import { loading } from '../state/signals.js';
// IMPORT: tous les composants enfants
import { Header } from './Header.js';
import { Filters } from './Filters.js';
import { ProductList } from './ProductList.js';
import { Cart } from './Cart.js';
import { ProductDetailsModal } from './ProductDetailsModal.js';
import { Footer } from './Footer.js'; 

// EXPORT: Le composant principal de l'application
export function App() {
  // Le template est compacté pour éviter les nœuds de texte vides/espaces.
  return html`<div>
    ${Header()}
    ${!loading.value ? Filters() : ''}
    ${ProductList()}
    ${Cart()}
    ${ProductDetailsModal()}
    ${ Footer() } ;
  </div>`
}