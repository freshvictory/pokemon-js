import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeIcon extends CustomElement {
  constructor() {
    super('type-icon.css');
  }


  connectedCallback() {
    this.type = types[this.get('type')];

    this.wrapper = this.shadow.add(
      'div',
      {
        class: 'wrapper'
      }
    );
    this.wrapper.style.backgroundColor = `var(--c-light-${this.type.id})`;

    this.icon = this.wrapper.add(
      'div',
      {
        class: 'icon'
      }
    )
    this.icon.style.backgroundImage = `var(--icon-${this.type.id})`;
  }
}

customElements.define('type-icon', TypeIcon);
