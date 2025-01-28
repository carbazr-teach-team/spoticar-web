class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `   <nav class="navbar navbar-expand-lg">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
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
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Jeep</a></li>
                  <li><a class="dropdown-item" href="#">Citreon</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="value-my-vehicle.html">Value My Vehicle</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/about-us.html">About Spoticar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
  }
}
customElements.define("header-component", Header);
