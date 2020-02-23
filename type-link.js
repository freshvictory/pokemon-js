import { CustomElement } from './custom-element.js';

class TypeLink extends CustomElement {
  static get observedAttributes() {
    return ['checked'];
  }


  constructor() {
    super('type-link.css');
  }


  connectedCallback() {
    this.type = this.get('type');
    this.style.backgroundColor = `var(--c-light-${this.type})`;
    this.id = 'link-' + this.type;

    this.details = this.shadow.add(
      'div',
      {
        class: 'details'
      }
    );
    this.details.textContent = this.type;
    this.details.style.backgroundColor = `var(--c-light-${this.type})`;

    this.link = this.shadow.add(
      'a',
      {
        class: 'info',
        href: '#' + this.type,
        title: this.type
      }
    );

    this.icon = this.link.add(
      'div',
      {
        class: 'icon'
      }
    )
    this.icon.style.backgroundImage = `var(--icon-${this.type})`;
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') {
      this.link.href = '#' + (newValue === null ? this.type : '');
    }
  }
}

customElements.define('type-link', TypeLink);
