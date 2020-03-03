import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeLink extends CustomElement {
  static get observedAttributes() {
    return [ 'checked', 'list', 'secondary' ];
  }


  constructor() {
    super('type-link.css');
  }


  connectedCallback() {
    this.type = types.get(this.get('type'), this.get('secondary'));
    this.style.backgroundColor = `var(--c-light-${this.type.primary})`;
    this.id = 'link-' + this.type.primary;
    this.setAttribute('data_placement', this.calculatePlacement());

    this.details = this.shadow.add(
      'div',
      {
        class: 'details'
      }
    );
    this.lists = {
      counter: this.details.add(
        'type-list',
        {
          type: this.type.primary,
          class: 'list',
          list: 'counter'
        }
      ),
      resistant: this.details.add(
        'type-list',
        {
          type: this.type.primary,
          class: 'list',
          list: 'resistant'
        }
      )
    }

    this.link = this.shadow.add(
      'internal-link',
      {
        href: this.type.primary,
        title: this.type.name,
        class: 'info'
      }
    );

    this.icon = this.link.add(
      'type-icon',
      {
        type: this.type.primary,
        secondary: this.type.secondary || ''
      }
    );
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') {
      this.link.href = '/' + (newValue === null ? this.type.id : '');
      if (newValue === null) {
        this.lists[this.get('list')].removeAttribute('checked');
      } else {
        this.setAttribute('data_placement', this.calculatePlacement());
        this.lists[this.get('list')].setAttribute('checked', newValue);
      }
    } else if (name === 'list') {
      if (oldValue) {
        this.lists[oldValue].removeAttribute('checked');
      }

      this.lists[newValue].setAttribute('checked', '');
      this.classList[
        this.type.relationships[newValue].length > 5 ? 'add' : 'remove'
      ]('half');
      this.classList[
        this.type.relationships[newValue].length >= 9 ? 'add' : 'remove'
      ]('full');
    } else if (name === 'secondary') {
      for (const [_, list] of Object.entries(this.lists)) {
        list.setAttribute('secondary', this.get('secondary') || '');
      }

      this.icon.setAttribute('secondary', newValue || '');
    }
  }


  calculatePlacement() {
    const rect = this.getBoundingClientRect();
    const horiz = rect.x < rect.width
      ? 'left'
      : (window.innerWidth - rect.left) < rect.right
        ? 'right'
        : 'center';
    const vert = rect.y < rect.height
      ? 'top'
      : (window.innerHeight - rect.bottom) < (rect.height + 40)
        ? 'bottom'
        : 'center';

    return vert + ' ' + horiz;
  }
}

customElements.define('type-link', TypeLink);
