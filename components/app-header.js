class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(135deg, #7c4dff 0%, #6200ea 100%);
          color: white;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }
        h1 {
          margin: 0;
          font-size: 1.8rem;
        }
      </style>
      <header>
        <h1>📝 Notes App Imut</h1>
      </header>
    `;
  }
}
customElements.define('app-header', AppHeader);