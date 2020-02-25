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

    let counter = 0;
    for (const type of this.type.relationships[id]) {
      this.wrapper = this.list.add(
        'span',
        {
          class: 'wrapper',
          style: `--num: ${counter};`
        }
      );
      const relationship = this.wrapper.add(
        'li',
        {
          class: 'relationship'
        }
      );
      const icon = relationship.add(
        'div',
        {
          class: 'icon'
        }
      );
      icon.add(
        'type-icon',
        {
          type: type,
          style: `--icon-size: 20px;`
        }
      );
      relationship.add(
        'triangle-icon',
        {
          style: `--color: var(--c-${id})`,
          class: direction
        }
      );
      
      counter++;
    }    
  }
}

customElements.define('type-list', TypeList);
