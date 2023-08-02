/* eslint-disable @typescript-eslint/indent */
export abstract class Component {
  selector: string;
  template!: string;
  element!: Element;
  constructor(selector: string) {
    this.selector = selector;
  }

  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) return;
    this.element = element;
    this.element.insertAdjacentHTML(position, this.template);
  }
}
