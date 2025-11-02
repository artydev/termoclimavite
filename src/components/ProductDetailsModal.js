// src/components/ProductDetailsModal.js

import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';
// IMPORT: l'état des détails et les actions
import { detailsProduct, closeDetails, addToCart } from '../state/signals.js';

export function ProductDetailsModal() {
        if (!detailsProduct.value) return '';
      
      const p = detailsProduct.value;

      return html`
        <div class="modal-overlay active" onclick=${closeDetails}>
          <div class="modal" onclick=${(e) => e.stopPropagation()}>
            <span class="close-modal" onclick=${closeDetails}>×</span>
            <h2>${p.name}</h2>
            <img src=${p.image_url} alt=${p.name}>
            <p><strong>Prezzo:</strong> ${p.currency}${p.price.toFixed(2)}</p>
            <p><strong>Descrizione:</strong> ${p.description}</p>
            
            ${p.certificate ? html`
              <div class="detail-section">
                <h3>Certificazione</h3>
                <div class="detail-item">${p.certificate}</div>
              </div>
            ` : ''}
            
            ${p.specifications && Object.keys(p.specifications).length > 0 ? html`
              <div class="detail-section">
                <h3>Specifiche techniques</h3>
                ${Object.entries(p.specifications).map(([key, value]) => html`
                  <div class="detail-item"><strong>${key}:</strong> ${value}</div>
                `)}
              </div>
            ` : ''}
            
            ${p.dimensions ? html`
              <div class="detail-section">
                <h3>Dimensions</h3>
                ${Object.entries(p.dimensions).map(([key, value]) => html`
                  <div class="detail-item"><strong>${key}:</strong> ${value}</div>
                `)}
              </div>
            ` : ''}
            
            ${p.packaging && p.packaging.length > 0 ? html`
              <div class="detail-section">
                <h3>Confezionamento</h3>
                ${p.packaging.map(pack => html`
                  <div class="detail-item">• ${pack}</div>
                `)}
              </div>
            ` : ''}
            
            ${p.availability ? html`
              <div class="detail-section">
                <h3>Disponibilità</h3>
                <div class="detail-item">${p.availability}</div>
              </div>
            ` : ''}
            
            ${p.delivery ? html`
              <div class="detail-section">
                <h3>Consegna</h3>
                <div class="detail-item">${p.delivery}</div>
              </div>
            ` : ''}
            
            ${p.payment ? html`
              <div class="detail-section">
                <h3>Pagamento</h3>
                <div class="detail-item">${p.payment}</div>
              </div>
            ` : ''}
            
            <button style="width: 100%; padding: 12px; background: #333; color: white; border: none; cursor: pointer; border-radius: 4px; margin-top: 20px;" onclick=${() => { addToCart(p); closeDetails(); }}>
              Aggiungi al carrello
            </button>
          </div>
        </div>
      `;
}