window.addEventListener(
  'hashchange',
  (_) => route(location.hash)
);

window.addEventListener(
  'load',
  (_) => route(location.hash)
);

const header = document.querySelector('type-header');
const shield = document.querySelector('#shield');

function route(hash) {
  const type = hash.substring(1);


  header.removeAttribute('type');
  shield.classList.remove('active');

  for (const link of document.querySelectorAll('type-link')) {
    const checked = link.id === 'link-' + type;

    if (checked) {
      shield.classList.add('active');
      header.setAttribute('type', type);
    }

    link[checked 
      ? 'setAttribute' 
      : 'removeAttribute'
    ]('checked', '');
  }
}
