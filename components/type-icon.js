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


    if (this.type.secondary) {
      this.createIcon(this.type.primary, 'top');
      this.createIcon(this.type.secondary, 'bottom');
    } else {
      this.createIcon(this.type.primary)
    }
  }


  createIcon(type, side) {
    this.wrapper = this.container.add(
      'div',
      {
        class: 'wrapper ' + (side ? 'half ' + side : '')
      }
    );
    this.wrapper.style.backgroundColor = `var(--c-light-${type})`;

    this.icon = this.wrapper.add(
      'div',
      {
        class: 'icon'
      }
    )
    this.icon.style.backgroundColor = `var(--c-${type})`;
    this.icon.style.backgroundImage = `var(--icon-${type})`;
  }
}

customElements.define('type-icon', TypeIcon);
