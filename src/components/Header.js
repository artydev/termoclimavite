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

export function _Header() {
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

export function Header() {
  return html`
    <div class="header">
      <div class="left">
        <img src="./assets/logo.jpg" alt="Logo Termoclima" width="300" />
      </div>
      <div class="center">CENTER</div>
      <div class="right">RIGHT</div>
    </div>`;
}


// .header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   height: 60px;
//   background: green;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   z-index: 1000;
//   padding: 0 1rem;
// }

// /* Left and right behave normally */
// .header .left,
// .header .right {
//   background: red;
// }

// /* Center is absolutely centered */
// .header .center {
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   text-align: center;
//   background: none; /* or whatever you want */
// }
