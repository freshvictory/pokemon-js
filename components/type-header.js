import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeHeader extends CustomElement {
  static get observedAttributes() {
    return ['type'];
  }

  constructor() {
    super('type-header.css');
  }


  connectedCallback() {
    this.header = this.shadow.add(
      'header',
      {
        id: 'header'
      }
    );

    this.h1 = this.header.add(
      'h1',
      {
        class: 'title'
      }
    );
    this.h1.textContent = 'Pokémon types';

    this.typeHeader = this.header.add(
      'div',
      {
        id: 'type-header'
      }
    );

    this.typeName = this.typeHeader.add(
      'h2',
      {
        id: 'type-name'
      }
    );
    this.typeName.textContent = 'Pokémon type';
  }


  renderType(type) {
    this.header.classList.add('active');
    this.typeHeader.style.backgroundColor = `var(--c-light-${type})`;
    this.typeHeader.style.borderColor = `var(--c-${type})`;

    const info = types[type];
    this.typeName.textContent = info.name;
  }


  clear() {
    this.header.classList.remove('active');
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'type') {
      if (newValue !== null) {
        this.renderType(newValue);
      } else {
        this.clear();
      }
    }
  }
}

customElements.define('type-header', TypeHeader);
