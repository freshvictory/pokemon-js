import { CustomElement } from './custom-element.js';

class TypeLegend extends CustomElement {

  constructor() {
    super('type-legend.css');
  }


  connectedCallback() {
    this.container = this.shadow.add(
      'div',
      {
        class: 'container'
      }
    );

    this.group = this.container.add(
      'div',
      {
        id: 'against',
        class: 'group'
      }
    );

    this.buttons = {
      counter: this.addLegendEntry(this.group, 'counter', 'Good counters'),
      resistant: this.addLegendEntry(this.group, 'resistant', 'Bad counters')
    };
  }


  addLegendEntry(group, id, name) {
    const button = group.add(
      'input',
      {
        type: 'radio',
        id: id,
        name: group.id,
        class: 'button'
      }
    );

    const label = group.add(
      'label',
      {
        class: 'label',
        style: `--c-highlighted: var(--c-${id}-light)`,
        for: id,
      }
    );
    label.addEventListener('click', () => this.updateRoute(id));

    label.add(
      'triangle-icon',
      {
        style: `--color: var(--c-${id})`
      }
    );

    const text = label.add(
      'div',
      { }
    )
    text.textContent = name;

    return button;
  }


  updateRoute(id) {
    const hash = window.location.hash.replace(/\/.*/, '') + '/' + id;
    window.location.hash = hash;
  }
}

customElements.define('type-legend', TypeLegend);
