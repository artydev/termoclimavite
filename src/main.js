// src/main.js

// IMPORT: effect pour le rendu réactif
import { effect } from 'https://cdn.jsdelivr.net/npm/@preact/signals@1.2.2/+esm';
// IMPORT: Le composant racine
import { App } from './components/App.js';
// IMPORT: les fonctions de chargement des données
import { loadCart, fetchProducts } from './utils/api.js';

// 1. Point de montage dans le DOM
const appElement = document.getElementById('app');

// 2. RENDU RACINE : Lance l'effet qui s'exécute immédiatement puis sur chaque changement de signal
effect(() => {
  appElement.replaceChildren(App());
});

// 3. LOGIQUE D'INITIALISATION
async function init() {
  // Charge l'état du panier (état local)
  await loadCart();
  // Charge les produits (état distant)
  await fetchProducts();
}
  
// Démarre l'application
init();