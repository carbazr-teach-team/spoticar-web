class Footer extends HTMLElement { constructor() { super(); }
connectedCallback() { this.innerHTML = `<div>FOOTER</div> `; } }
customElements.define("footer-component", Footer);
