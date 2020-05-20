import { define } from './component.js';

export default define({
  id: 'type-legend',
  refs: [
    'counter-label',
    'resistant-label'
  ],
  render: (data, refs) => {
    const updateRoute = (id) => {
      window.router.route(window.location.pathname, { list: id });
    };
    refs['counter-label'].addEventListener('click', () => updateRoute('counter'));
    refs['resistant-label'].addEventListener('click', () => updateRoute('resistant'));
  }
});

