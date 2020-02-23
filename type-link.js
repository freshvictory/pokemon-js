import { CustomElement } from './custom-element.js';
import { types } from './types.js';

class TypeLink extends CustomElement {
  static get observedAttributes() {
    return ['checked'];
  }


  constructor() {
    super('type-link.css');
  }


  connectedCallback() {
    this.type = types[this.get('type')];
    this.style.backgroundColor = `var(--c-light-${this.type.id})`;
    this.id = 'link-' + this.type.id;

    this.details = this.shadow.add(
      'div',
      {
        class: 'details'
      }
    );
    this.details.textContent = this.type.name;
    this.details.style.backgroundColor = `var(--c-light-${this.type.id})`;

    this.link = this.shadow.add(
      'a',
      {
        class: 'info',
        href: '#' + this.type.id,
        title: this.type.name
      }
    );

    this.icon = this.link.add(
      'div',
      {
        class: 'icon'
      }
    )
    this.icon.style.backgroundImage = `var(--icon-${this.type.id})`;
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') {
      this.link.href = '#' + (newValue === null ? this.type.id : '');
    }
  }
}

customElements.define('type-link', TypeLink);
