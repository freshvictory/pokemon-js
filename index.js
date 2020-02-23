window.addEventListener(
  'hashchange',
  (_) => route(location.hash)
);

window.addEventListener(
  'load',
  (_) => route(location.hash)
)



const allTypes =
  [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'fairy',
    'dark',
  ];


function route(hash) {
  const type = hash.substring(1);

  for (const link of document.querySelectorAll('type-link')) {
    const checked = link.id === 'link-' + type;

    link[checked 
      ? 'setAttribute' 
      : 'removeAttribute'
    ]('checked', '');
  }
}
