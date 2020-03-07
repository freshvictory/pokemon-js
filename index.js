import { Router } from './router.js';

window.router = new Router()
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

function routeType(matches, params) {
  const [primary, secondary] = matches;

  const relationship = params['list'] || params.get('list') || 'counter';

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
  (_) => window.router.routeUrl()
);


window.history.replace = (path) => {
  window.history.replaceState({}, '', path);
  window.router.routeUrl();
};
window.history.push = (path) => {
  window.history.pushState({}, '', path);
  window.router.routeUrl();
};
window.onpopstate = () => window.router.routeUrl();
