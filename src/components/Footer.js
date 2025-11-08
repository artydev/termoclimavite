import { html } from 'https://cdn.jsdelivr.net/npm/htl@0.3.1/+esm';


function Footer () {
    return html`<footer class="footer" id="contattaci">
    <div class="footer-container">
      
      <!-- Sassoferrato Location -->
      <div class="store-location">
        <div class="store-header">
         
          <p class="store-name">TERMOCLIMA SRL</p>
             <h2>Sede di Sassoferrato</h
          <hr class="divider">
        </div>
        
        <div class="contact-info">
          <div class="address">
            Via Bruno Buozzi, 40/A<br>
            60041 Sassoferrato (AN)
          </div>
          <a href="tel:+390732770238" aria-label="Chiama Termoclima Sassoferrato">Tel: 0732 770238</a>
          <a href="tel:+393883054433" aria-label="Chiama cellulare Termoclima Sassoferrato">Cell: 388 3054433</a>
        </div>

        <div class="opening-hours">
          <p class="opening-hours-title">ORARI DI APERTURA</p>
          <div class="hours-block">
            <p class="day">Lunedì - Venerdì</p>
            <span class="time">09:00 - 13:00, 15:00 - 19:30</span>
          </div>
          <div class="hours-block">
            <p class="day">Sabato</p>
            <span class="time">09:00 - 12:30, 15:30 - 19:30</span>
          </div>
          <div class="hours-block">
            <p class="day">Domenica</p>
            <span class="time">Chiuso</span>
          </div>
        </div>
      </div>

      <!-- Fossato di Vico Location -->
      <div class="store-location">
        <div class="store-header">
         
          <p class="store-name">TERMOCLIMA SRL</p>
          <h2>Sede di Fossato di Vico</h2>
          <hr class="divider">
        </div>
        
        <div class="contact-info">
          <div class="address">
            Via del Rigo, 32<br>
            06022 Fossato di Vico (PG)
          </div>
          <a href="tel:+390758630134" aria-label="Chiama Termoclima Fossato di Vico">Tel: 075 8630134</a>
          <a href="tel:+393922882315" aria-label="Chiama cellulare Termoclima Fossato di Vico">Cell: 392 2882315</a>
        </div>

        <div class="opening-hours">
          <p class="opening-hours-title">ORARI DI APERTURA</p>
          <div class="hours-block">
            <p class="day">Lunedì - Sabato</p>
            <span class="time">08:30 - 13:00, 15:00 - 19:30</span>
          </div>
          <div class="hours-block">
            <p class="day">Domenica</p>
            <span class="time">Chiuso</span>
          </div>
        </div>
      </div>

    </div>
  </footer>`;
}


export { Footer} 