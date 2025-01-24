class Header extends HTMLElement { constructor() { super(); }
connectedCallback() { this.innerHTML = `<div>HEADER</div>`; } }
customElements.define("header-component", Header);
