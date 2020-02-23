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

    for (const type of this.type.relationships.counters) {
      const relationship = this.list.add(
        'li',
        {
          class: 'relationship'
        }
      );
      relationship.add(
        'type-icon',
        {
          type: type,
          class: 'icon'
        }
      )
    }
  }
}

customElements.define('type-list', TypeList);
