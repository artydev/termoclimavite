import{signal as s,computed as $,effect as y}from"https://cdn.jsdelivr.net/npm/@preact/signals@1.2.2/+esm";import{html as i}from"https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();const b=s([]),n=s([]),p=s(!1),l=s(!0),d=s("all"),C=s([]),u=s(null),S=$(()=>n.value.reduce((t,e)=>t+e.quantity,0)),k=$(()=>n.value.reduce((t,e)=>t+e.price*e.quantity,0).toFixed(2)),q=$(()=>{const t=d.value,e=b.value;return t==="all"?e:e.filter(a=>a.category===t)});function m(t){d.value=t}function P(t){const e=n.value.find(a=>a.id===t.id);e?(e.quantity+=1,n.value=[...n.value]):n.value=[...n.value,{...t,quantity:1}]}function O(t){n.value=n.value.filter(e=>e.id!==t)}function h(t,e){const a=n.value,r=a.find(o=>o.id===t);r&&(r.quantity+=e,r.quantity<=0?O(t):n.value=[...a])}function g(){p.value=!p.value}function w(){const t=k.value,e=n.value.map(a=>`${a.name} x${a.quantity}`).join(`
`);alert(`Checkout

Prodotti:
${e}

Totale: €${t}`)}function x(t){u.value=t}function f(){u.value=null}function A(){try{if(n.value.length===0&&typeof localStorage<"u"){localStorage.removeItem("cart");return}const t=JSON.stringify(n.value);typeof localStorage<"u"&&localStorage.setItem("cart",t)}catch(t){console.error("Error saving cart:",t)}}y(()=>{A()});function E(){return i`
  <div class="subheader">
     <nav>
       <ul>
         <li>Home</li>
         <li>Contact</li>
         <li>About</li>
       </ul>
     </nav>
  </div>`}function L(){return i`
  <header>
    <img src="./assets/logo.jpg" alt="Logo Termoclima" width="300" />
    <div>
      <h1 style="color:white"><span>Termo<span><span style="color:#A4DBE9">Clima</span> Shop</h1>
      ${E()}
    </div>
    <div class="cart-icon" onclick=${g}>
      🛒 Carrello (${S.value}) 
    </div>
  </header>`}function D(){return i`<div class="filters">
    <button 
      class=${d.value==="all"?"active":""} 
      onclick=${()=>m("all")}
    >
      Tutti i prodotti
    </button>${C.value.map(t=>i`<button 
        class=${d.value===t?"active":""} 
        onclick=${()=>m(t)}
      >
        ${t.charAt(0).toUpperCase()+t.slice(1)}
      </button>`)}
  </div>`}function F(t){return t.specifications&&Object.entries(t.specifications).slice(0,2),i`<div class="product">
    <img src=${t.image_url} alt=${t.name} />
    <div class="category-badge">${t.category}</div>
    <h3>${t.name}</h3>
    <div class="description">${t.description}</div>
  
    <div class="price">${t.currency}${t.price.toFixed(2)}</div>
    <button onclick=${()=>P(t)}>Aggiungi al carrello</button>
    <button class="details-btn" onclick=${()=>x(t)}>
      Dettagli
    </button>
  </div>`}function I(){const t=q.value;return l.value?i`<div class="loading">Caricamento prodotti...</div>`:t.length===0?i`<div class="loading">Nessun prodotto trovato</div>`:i`<div class="products">
    ${t.map(e=>F(e))}
  </div>`}function N(t){return i`<div class="cart-item">
    <div class="cart-item-name">${t.name}</div>
    <div class="cart-item-price">
      ${t.currency}${t.price.toFixed(2)} × ${t.quantity} = ${t.currency}${(t.price*t.quantity).toFixed(2)}
    </div>
    <div class="cart-item-controls">
      <button onclick=${()=>h(t.id,-1)}>-</button>
      <button onclick=${()=>h(t.id,1)}>+</button>
      <button class="remove-btn" onclick=${()=>O(t.id)}>Rimuovi</button>
    </div>
  </div>`}function T(){const t=k.value;return i`<div class="cart-overlay ${p.value?"active":""}" onclick=${g}>
    <div class="cart-panel" onclick=${e=>e.stopPropagation()}>
      <div class="cart-header">
        <h2>Carrello</h2>
        <span class="close-cart" onclick=${g}>×</span>
      </div>
      ${n.value.length===0?i`<p>Il tuo carrello è vuoto</p>`:i`<div>
            ${n.value.map(e=>N(e))}
            <div class="cart-total">
              Totale: €${t}
            </div>
            <button class="checkout-btn" onclick=${w}>Procedi al pagamento</button>
          </div>`}
    </div>
  </div>`}function j(){if(!u.value)return"";const t=u.value;return i`
        <div class="modal-overlay active" onclick=${f}>
          <div class="modal" onclick=${e=>e.stopPropagation()}>
            <span class="close-modal" onclick=${f}>×</span>
            <h2>${t.name}</h2>
            <img src=${t.image_url} alt=${t.name}>
            <p><strong>Prezzo:</strong> ${t.currency}${t.price.toFixed(2)}</p>
            <p><strong>Descrizione:</strong> ${t.description}</p>
            
            ${t.certificate?i`
              <div class="detail-section">
                <h3>Certificazione</h3>
                <div class="detail-item">${t.certificate}</div>
              </div>
            `:""}
            
            ${t.specifications&&Object.keys(t.specifications).length>0?i`
              <div class="detail-section">
                <h3>Specifiche techniques</h3>
                ${Object.entries(t.specifications).map(([e,a])=>i`
                  <div class="detail-item"><strong>${e}:</strong> ${a}</div>
                `)}
              </div>
            `:""}
            
            ${t.dimensions?i`
              <div class="detail-section">
                <h3>Dimensions</h3>
                ${Object.entries(t.dimensions).map(([e,a])=>i`
                  <div class="detail-item"><strong>${e}:</strong> ${a}</div>
                `)}
              </div>
            `:""}
            
            ${t.packaging&&t.packaging.length>0?i`
              <div class="detail-section">
                <h3>Confezionamento</h3>
                ${t.packaging.map(e=>i`
                  <div class="detail-item">• ${e}</div>
                `)}
              </div>
            `:""}
            
            ${t.availability?i`
              <div class="detail-section">
                <h3>Disponibilità</h3>
                <div class="detail-item">${t.availability}</div>
              </div>
            `:""}
            
            ${t.delivery?i`
              <div class="detail-section">
                <h3>Consegna</h3>
                <div class="detail-item">${t.delivery}</div>
              </div>
            `:""}
            
            ${t.payment?i`
              <div class="detail-section">
                <h3>Pagamento</h3>
                <div class="detail-item">${t.payment}</div>
              </div>
            `:""}
            
            <button style="width: 100%; padding: 12px; background: #333; color: white; border: none; cursor: pointer; border-radius: 4px; margin-top: 20px;" onclick=${()=>{P(t),f()}}>
              Aggiungi al carrello
            </button>
          </div>
        </div>
      `}function z(){return i`<div>
    ${L()}${l.value?"":D()}${I()}${T()}${j()}
  </div>`}const _="https://68fe03397c700772bb128814.mockapi.io/",B="products",H=`${_}${B}`;async function R(){try{if(typeof localStorage<"u"){const t=localStorage.getItem("cart");t&&(n.value=JSON.parse(t))}}catch(t){console.log("Error loading cart:",t)}}async function U(){try{const e=await(await fetch(H)).json();b.value=e;const a=[...new Set(e.map(r=>r.category))];C.value=a,l.value=!1}catch(t){console.error("Error fetching products:",t),l.value=!1}}const J=document.getElementById("app");y(()=>{J.replaceChildren(z())});async function M(){await R(),await U()}M();
