class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        form {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto 2rem;
        }
        input, textarea {
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: inherit;
        }
        textarea {
          min-height: 120px;
          resize: vertical;
        }
        button {
          padding: 0.75rem;
          background-color: #7c4dff;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #6200ea;
        }
      </style>
      <form id="addNoteForm">
        <input 
          type="text" 
          placeholder="Judul catatan" 
          id="noteTitle" 
          required
        />
        <textarea 
          placeholder="Isi catatan" 
          id="noteBody" 
          required
        ></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>
    `;

    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = this.shadowRoot.getElementById('noteTitle').value;
      const body = this.shadowRoot.getElementById('noteBody').value;

      const newNote = {
        id: `notes-${Date.now()}`,
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false
      };

      notesData.unshift(newNote); // Tambahkan di awal array
      renderNotes();
      this.shadowRoot.querySelector('form').reset();
    });
  }
}

customElements.define('note-form', NoteForm);