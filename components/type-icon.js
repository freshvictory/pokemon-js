import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeIcon extends CustomElement {
  static get observedAttributes() {
    return ['secondary'];
  }


  constructor() {
    super('type-icon.css');
  }


  connectedCallback() {
    this.container = this.shadow.add(
      'div',
      {
        class: 'container'
      }
    );
    this.render();
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'secondary' && this.container) {
      this.render();
    }
  }


  render() {
    this.container.innerHTML = '';

    this.type = types.get(this.get('type'), this.get('secondary'));

    this.wrapper = this.container.add(
      'div',
      {
        class: 'wrapper'
      }
    );
    this.wrapper.style.backgroundColor = `var(--c-light-${this.type.primary})`;

    this.icon = this.wrapper.add(
      'div',
      {
        class: 'icon'
      }
    )
    this.icon.style.backgroundColor = `var(--c-${this.type.primary})`;
    this.icon.style.backgroundImage = `var(--icon-${this.type.primary})`;

    if (this.type.secondary) {
      this.secondary = this.container.add(
        'div',
        {
          class: 'icon secondary'
        }
      );
      this.secondary.style.backgroundColor = `var(--c-${this.type.secondary})`;
      this.secondary.style.backgroundImage = `var(--icon-${this.type.secondary})`;
    }
  }


  createIcon(type) {
  }
}

customElements.define('type-icon', TypeIcon);
