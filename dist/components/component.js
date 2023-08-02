/* eslint-disable @typescript-eslint/indent */
export class Component {
    selector;
    template;
    element;
    constructor(selector) {
        this.selector = selector;
    }
    render(position = 'beforeend') {
        const element = document.querySelector(this.selector);
        if (!element)
            return;
        this.element = element;
        this.element.insertAdjacentHTML(position, this.template);
    }
}
