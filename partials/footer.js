class Footer extends HTMLElement { constructor() { super(); }
connectedCallback() { this.innerHTML = `     <div class="footer">
        <div class="footer-top">
          <div class="logo">
            <img src="/assets/img/spoticar-logo.png" alt="Spoticar Logo" />
          </div>
          <div class="footer-nav">
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Copy Right</li>
              <li>Terms of Use</li>
              <li>Legal, Safety and Trademark Information</li>
            </ul>
          </div>
        </div>

        <div class="footer-mid">
          <div class="text">
            <p>
              Dealer price excludes taxes, title, registration fees, and dealer
              fees. Pricing and offers may change at any time without
              notification. To get full pricing details, see your dealer.
            </p>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="divider"></div>
          <span>© Spoticar - 2024 | All Right Reserved</span>
        </div>
      </div>`; } }
customElements.define("footer-component", Footer);
