import { CustomElement } from './custom-element.js';
import { types } from '../types.js';

class TypeList extends CustomElement {
  constructor() {
    super('type-list.css');
  }


  connectedCallback() {
    this.type = types[this.get('type')];
    this.relationship = this.get('list');

    this.addList(this.relationship, 'away');
  }


  addList(id, direction) {
    this.list = this.shadow.add(
      'ul',
      {
        class: 'list ' + id
      }
    );

    const emphasized = [];

    this.type.relationships[id]
      .sort((a, b) => {
        if (this.shouldEmphasize(id, this.type.id, a)) {
          return -1;
        } else if (this.shouldEmphasize(id, this.type.id, b)) {
          return 1;
        } else {
          return 0;
        }
      })
      .map((type, counter) => {
        const emphasize = this.shouldEmphasize(id, this.type.id, type);
        if (emphasized) {
          emphasized.push(type);
        }

        this.buildType(id, type, counter, direction, emphasize);
      });
  }


  buildType(id, type, counter, direction, emph) {
    this.wrapper = this.list.add('span', {
      class: 'wrapper' + (emph ? ' emph' : ''),
      style: `--num: ${counter};`
    });
    const relationship = this.wrapper.add('li', {
      class: 'relationship'
    });
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
        return types[other].relationships.ineffective.indexOf(type) >= 0;
      default:
        return false;
    }
  }
}

customElements.define('type-list', TypeList);
