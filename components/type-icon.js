import { define } from './component.js';
import { types } from '../types.js';

export default define({
  id: 'type-icon',
  attributes: [ 'secondary' ],
  data: {
    type: undefined,
    secondary: undefined
  },
  refs: [
    'container',
    'icon',
    'secondary',
    'wrapper'
  ],
  render: (data, refs) => {
    const type = types.get(data.type, data.secondary);

    refs.wrapper.style.backgroundColor = `var(--c-${type.primary})`;
    
    refs.icon.alt = type.name;
    refs.icon.src = `/images/types/${type.primary}.svg`;

    if (type.secondary) {
      refs.secondary.alt = type.name;
      refs.secondary.src = `/images/types/${type.secondary}.svg`;
      refs.secondary.style.color = `var(--c-${type.secondary})`;
      refs.secondary.classList.remove('hide');
    } else {
      refs.secondary.classList.add('hide');
    }
  }
});

