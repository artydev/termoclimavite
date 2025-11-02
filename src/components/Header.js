// src/components/Header.js

import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';
// IMPORT: les valeurs réactives et les actions nécessaires pour le Header
import { cartCount, toggleCart } from '../state/signals.js';


function SubHeader () {
  return html`
  <div class="subheader">
     <nav>
       <ul>
         <li>Home</li>
         <li>Contact</li>
         <li>About</li>
       </ul>
     </nav>
  </div>`;
} 

export function Header() {
  return html`
  <header>
    <img src="./assets/logo.jpg" alt="Logo Termoclima" width="300" />
    <div>
      <h1 style="color:white"><span>Termo<span><span style="color:#A4DBE9">Clima</span> Shop</h1>
      ${SubHeader()}
    </div>
    <div class="cart-icon" onclick=${toggleCart}>
      🛒 Carrello (${cartCount.value}) 
    </div>
  </header>`;
}