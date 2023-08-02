import { Component } from '../component.js';
export class Main extends Component {
    constructor(selector) {
        super(selector);
        this.template = this.createTemplate();
        this.render();
    }
    createTemplate() {
        return `
    <main></main>`;
    }
}
