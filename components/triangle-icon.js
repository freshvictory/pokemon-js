import { CustomElement } from './custom-element.js';

export class TriangleIcon extends CustomElement {
  constructor() {
    super('triangle-icon.css');
  }


  connectedCallback() {
    this.shadow.add(
      'div',
      {
        class: 'triangle'
      }
    );
  }
}

customElements.define('triangle-icon', TriangleIcon);
