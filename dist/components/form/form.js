import { Component } from '../component.js';
export class Form extends Component {
    constructor(selector) {
        super(selector);
        this.template = this.createTemplate();
        this.render();
    }
    createTemplate() {
        return `<form>
  <input type="text" placeholder="Nombre de la mascota" required>
  <input type="text" placeholder="Especie de la mascota" required>
  <button type="submit">Añadir</button>
</form>`;
    }
}
