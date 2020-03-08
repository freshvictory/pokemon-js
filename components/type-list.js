import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeList extends CustomElement {
  static get observedAttributes() {
    return [ 'secondary' ];
  }


  constructor() {
    super('type-list.css');
  }


  connectedCallback() {
    this.type = types.get(this.get('type'), this.get('secondary'));
    this.relationship = this.get('list');

    this.addList(this.relationship, 'away');
  }


  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'secondary'
      && ((oldValue && !newValue) || (!oldValue && newValue))
    ) {
      this.list.innerHTML = '';
      this.connectedCallback();
    }
  }


  addList(id, direction) {
    this.list = this.list || this.shadow.add(
      'ul',
      {
        class: 'list ' + id,
        style: 'list-style: none'
      }
    );

    this.type.relationships[id]
      .sort((a, b) => {
        if (this.shouldEmphasize(id, this.type, a)) {
          return -1;
        } else if (this.shouldEmphasize(id, this.type, b)) {
          return 1;
        } else {
          return 0;
        }
      })
      .map((type, counter) => {
        const emphasize = this.shouldEmphasize(id, this.type, type);

        this.buildType(id, type, counter, direction, emphasize);
      });
  }


  buildType(id, type, counter, direction, emph) {
    this.wrapper = this.list.add(
      'li',
      {
        class: 'wrapper' + (emph ? ' emph' : ''),
        style: `--num: ${counter}; ${emph ? `--color: var(--c-${id})` : ''}`
      }
    );
    const relationship = this.wrapper.add(
      'div', 
      {
      class: 'relationship'
      }
    );
    const icon = relationship.add('div', {
      class: 'icon'
    });
    icon.add('type-icon', {
      type: type,
      style: `--icon-size: 20px;`
    });
    relationship.add('triangle-icon', {
      style: `--color: var(--c-${id});`,
      class: direction
    });
  }

  shouldEmphasize(id, type, other) {
    switch(id) {
      case 'resistant':
        const primaryIneffective =
          types.get(other).relationships.ineffective.indexOf(type.primary) >= 0;

        if (primaryIneffective || !type.secondary) {
          return primaryIneffective;
        }

        const secondaryIneffective =
          types.get(other).relationships.ineffective.indexOf(type.secondary) >= 0;

        return primaryIneffective
          || secondaryIneffective
          || (types.get(type.primary).relationships.resistant.indexOf(other) >= 0
            && types.get(type.secondary).relationships.resistant.indexOf(other) >= 0);
      case 'counter':
        if (!type.secondary) {
          return false;
        }

        return types.get(type.primary).relationships.counter.indexOf(other) >= 0
          && types.get(type.secondary).relationships.counter.indexOf(other) >= 0;
      default:
        return false;
    }
  }
}

customElements.define('type-list', TypeList);
