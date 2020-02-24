window.addEventListener(
  'hashchange',
  (_) => route(location.hash)
);

window.addEventListener(
  'load',
  (_) => route(location.hash)
);


function route(hash) {
  const type = hash.substring(1);
  const shield = document.querySelector('#shield');
  shield.classList.remove('active');

  for (const link of document.querySelectorAll('type-link')) {
    const checked = link.id === 'link-' + type;

    if (checked) {
      shield.classList.add('active');
    }

    link[checked 
      ? 'setAttribute' 
      : 'removeAttribute'
    ]('checked', '');
  }
}
