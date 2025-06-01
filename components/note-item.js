class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const body = this.getAttribute('body');
    const date = this.getAttribute('date');

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border-top: 4px solid #b388ff;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        h3 {
          margin: 0 0 0.5rem;
          color: #6200ea;
          font-size: 1.2rem;
        }
        p {
          margin: 0 0 1rem;
          color: #555;
          flex-grow: 1;
          white-space: pre-wrap;
        }
        small {
          color: #888;
          font-size: 0.8rem;
          display: block;
          text-align: right;
        }
      </style>
      <div class="card">
        <h3>${title}</h3>
        <p>${body}</p>
        <small>${date}</small>
      </div>
    `;
  }
}
customElements.define('note-item', NoteItem);