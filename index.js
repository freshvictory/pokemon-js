import { Router } from './router.js';

const router = new Router()
  .add(
    'Home',
    '',
    () => routeType([], { get: () => '' })
  )
  .add(
    'Type',
    /\/([^+]+)\+?([^\/]*)?/,
    (matches, query) => routeType(matches, query)
  );

function routeType(matches, queryParams) {
  const [primary, secondary] = matches;

  const relationship = queryParams.get('list') || 'counter';

  document.body.classList.remove('active');

  for (const link of document.querySelectorAll('type-link')) {
    const checked = link.id === 'link-' + primary;

    if (checked) {
      document.body.classList.add('active');
      link.setAttribute('list', relationship);
      link.setAttribute('secondary', secondary || '');
    }

    link[checked
      ? 'setAttribute'
      : 'removeAttribute'
    ]('checked', '');
  }

  const legend = document.querySelector('type-legend');
  legend.setAttribute('selected', relationship);
}


window.addEventListener(
  'load',
  (_) => router.route()
);

window.history.push = (path) => {
  window.history.pushState({}, '', path);
  router.route();
}
window.onpopstate = () => router.route();
