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
  const info = hash.substring(1).split(',');
  const type = info[0];
  const relationship = info[1] || 'counter';

  document.body.classList.remove('active');

  for (const link of document.querySelectorAll('type-link')) {
    const checked = link.id === 'link-' + type;

    if (checked) {
      document.body.classList.add('active');
      const list = link.shadowRoot.querySelector('type-list');
      link.setAttribute('list', relationship);
      list.setAttribute('list', relationship);
    }

    link[checked 
      ? 'setAttribute' 
      : 'removeAttribute'
    ]('checked', '');
  }

  legend.setAttribute('selected', relationship);
}
