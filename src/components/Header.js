// src/components/Header.js

import { html } from "https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm";
import { cartCount, toggleCart } from "../state/signals.js";

function SubHeader() {
  return html` 
    <div class="subheader">
      <nav>
        <ul>
     
          <li><a href="#footer">Contact</a></li>
        
        </ul>
      </nav>
    </div>`;
}

export function Header() {
  return html`
    <div class="header">
      <div class="left">
        <img src="./assets/logo.jpg" alt="Logo Termoclima" width="300" />
      </div>

      <div class="center">
        <h1 style="color:var(--button_info)">
          <span>Termo</span><span style="color:#A4DBE9">Clima</span> Shop
        </h1>
      </div>

      <div class="right">

        ${SubHeader()}

                <div class="cart-icon" onclick=${toggleCart}>
          🛒 Carrello (${cartCount.value})
        </div>
      </div>
    </div>
  `;
}
