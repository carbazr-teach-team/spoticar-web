class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="/index.html">
                <img
                  src="/assets/img/spoticar-logo-black.png"
                  alt="Spoticar Logo"
                  class="d-inline-block align-text-top"
                />
              </a>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="offcanvas offcanvas-start nav-side-bar"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >

              <div class="offcanvas-header">
                <a class="navbar-brand" href="/index.html">
                  <img
                    src="/assets/img/spoticar-logo.png"
                    alt="Spoticar Logo"
                    class="d-inline-block align-text-top"
                  />
                </a>
                <div class="nav-side-bar-close">
                  <img src="/assets/icons/close.svg" data-bs-dismiss="offcanvas" alt="close-icon">
                </div>
              </div>
              <div class="offcanvas-body">

                <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="buy-used.html">Buy Used</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      New Car
                    </a>
                    <ul class="dropdown-menu black-text">
                      <li><a class="dropdown-item" href="#">Jeep</a></li>
                      <li><a class="dropdown-item" href="#">Citreon</a></li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="value-my-vehicle.html"
                      >Value My Vehicle</a
                    >
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/about-us.html">About Spoticar</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    `;
  }
}
customElements.define("header-component", Header);
