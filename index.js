window.addEventListener(
  'hashchange',
  (_) => route(location.hash)
);

window.addEventListener(
  'load',
  (_) => route(location.hash)
);

const shield = document.querySelector('#shield');
const legend = document.querySelector('type-legend');

function route(hash) {
  const info = hash.substring(1).split('/');
  const [type, secondary] = info[0].split('+');
  const relationship = info[1] || 'counter';

  document.body.classList.remove('active');

  for (const link of document.querySelectorAll('type-link')) {
    const checked = link.id === 'link-' + type;

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

  legend.setAttribute('selected', relationship);
}
