import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';

function SocialFooter () {
  return html`
    <div class="social-container">
      <a href="https://www.facebook.com/Termoclima23?locale=it_IT" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visita la pagina Facebook di Termoclima">
        <img src="/socials/facebook.png" alt="Facebook" class="social-icon">
      </a>
      <a href="https://www.instagram.com/termoclimapellet/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visita il profilo Instagram di Termoclima">
        <img src="/socials/instagram.png" alt="Instagram" class="social-icon">
      </a>
      <a href="https://www.tiktok.com/@termoclimapellet?_t=ZN-8vl42G1SGk2&amp;_r=1" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Visita il profilo TikTok di Termoclima">
        <img src="/socials/tiktok.png" alt="TikTok" class="social-icon">
      </a>
      <a href="https://wa.me/393883054433" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Contattaci su WhatsApp">
        <img src="/socials/whatsapp.png" alt="WhatsApp" class="social-icon">
      </a>
    </div>
  `;
}

export{ SocialFooter}