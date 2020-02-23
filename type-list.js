import { CustomElement } from './custom-element.js';
import { types } from './types.js';

class TypeList extends CustomElement {
  constructor() {
    super('type-list.css');
  }


  connectedCallback() {
    this.type = types[this.get('type')];

    this.list = this.shadow.add(
      'ul',
      {
        class: 'list'
      }
    );

    let counter = 0;
    for (const type of this.type.relationships.counters) {
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
        'div',
        {
          class: 'triangle'
        }
      );
      
      counter++;
    }
  }
}

customElements.define('type-list', TypeList);
