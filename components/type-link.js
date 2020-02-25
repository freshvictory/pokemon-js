import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeLink extends CustomElement {
  static get observedAttributes() {
    return [ 'checked', 'list' ];
  }


  constructor() {
    super('type-link.css');
  }


  connectedCallback() {
    this.type = types[this.get('type')];
    this.style.backgroundColor = `var(--c-light-${this.type.id})`;
    this.id = 'link-' + this.type.id;
    this.setAttribute('data_placement', this.calculatePlacement());

    // this.label = this.shadow.add(
    //   'div',
    //   {
    //     class: 'label'
    //   }
    // );
    // this.label.textContent = this.type.name;
    // this.label.style.backgroundColor = `var(--c-light-${this.type.id})`;

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
          type: this.type.id,
          class: 'list',
          list: 'counter'
        }
      ),
      resistant: this.details.add(
        'type-list',
        {
          type: this.type.id,
          class: 'list',
          list: 'resistant'
        }
      )
    }

    this.link = this.shadow.add(
      'a',
      {
        class: 'info',
        href: '#' + this.type.id,
        title: this.type.name
      }
    );

    this.icon = this.link.add(
      'type-icon',
      {
        type: this.type.id
      }
    );
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') {
      this.link.href = '#' + (newValue === null ? this.type.id : '');
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
    }
  }


  calculatePlacement() {
    const rect = this.getBoundingClientRect();
    const horiz = rect.x > (window.innerWidth / 2) ? 'right' : 'left';
    const vert = rect.y < (rect.height + 40)
      ? 'top'
      : (window.innerHeight - rect.bottom) < rect.height
        ? 'bottom'
        : 'center';

    return horiz + ' ' + vert;
  }
}

customElements.define('type-link', TypeLink);
