import { Component } from '../component.js';
export class Footer extends Component {
    constructor(selector) {
        super(selector);
        this.template = this.createTemplate();
        this.render();
    }
    createTemplate() {
        return `<footer id='main-footer'>
    <address>Adopta tu pulpo</address>
    </footer>`;
    }
}
