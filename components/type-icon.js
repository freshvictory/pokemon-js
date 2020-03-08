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
    if (name === 'secondary' && this.container && oldValue !== newValue) {
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
    this.wrapper.style.backgroundColor = `var(--c-${this.type.primary})`;


    this.icon = this.wrapper.add(
      'img',
      {
        class: 'icon',
        alt: this.type.name,
        src: `/images/types/${this.type.primary}.svg`
      }
    );

    if (this.type.secondary) {
      this.secondary = this.container.add(
        'img',
        {
          class: 'icon secondary',
          alt: this.type.name,
          src: `/images/types/${this.type.secondary}.svg`
        }
      );
      this.secondary.style.color = `var(--c-${this.type.secondary})`;
    }
  }
}

customElements.define('type-icon', TypeIcon);
