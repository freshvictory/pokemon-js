export const types =
{
  'normal': {
    id: 'normal',
    primary: 'normal',
    secondary: null,
    name: 'Normal',
    relationships: {
      effectiveAgainst: [],
      weakAgainst: [
        'rock',
        'steel'
      ],
      ineffectiveAgainst: [
        'ghost'
      ],
      resistantTo: [
        'ghost'
      ],
      counters: [
        'fighting'
      ]
    }
  },
  
  
  'fighting': {
    id: 'fighting',
    primary: 'fighting',
    secondary: null,
    name: 'Fighting',
    relationships: {
      effectiveAgainst: [
        'normal',
        'rock',
        'steel',
        'ice',
        'dark'
      ],
      weakAgainst: [
        'flying',
        'poison',
        'psychic',
        'bug',
        'fairy'
      ],
      ineffectiveAgainst: [
        'ghost'
      ],
      resistantTo: [
        'rock',
        'bug',
        'dark'
      ],
      counters: [
        'flying',
        'psychic',
        'fairy'
      ]
    }
  },
  
  
  'flying': {
    id: 'flying',
    primary: 'flying',
    secondary: null,
    name: 'Flying',
    relationships: {
      effectiveAgainst: [
        'fighting',
        'bug',
        'grass'
      ],
      weakAgainst: [
        'rock',
        'steel',
        'electric'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'fighting',
        'ground',
        'bug',
        'grass'
      ],
      counters: [
        'rock',
        'electric',
        'ice'
      ]
    }
  },
  
  
  'poison': {
    id: 'poison',
    primary: 'poison',
    secondary: null,
    name: 'Poison',
    relationships: {
      effectiveAgainst: [
        'grass',
        'fairy'
      ],
      weakAgainst: [
        'poison',
        'ground',
        'rock',
        'ghost'
      ],
      ineffectiveAgainst: [
        'steel'
      ],
      resistantTo: [
        'fighting',
        'poison',
        'grass',
        'fairy'
      ],
      counters: [
        'ground',
        'psychic'
      ]
    }
  },
  
  
  'ground': {
    id: 'ground',
    primary: 'ground',
    secondary: null,
    name: 'Ground',
    relationships: {
      effectiveAgainst: [
        'poison',
        'rock',
        'steel',
        'fire',
        'electric'
      ],
      weakAgainst: [
        'bug',
        'grass'
      ],
      ineffectiveAgainst: [
        'flying'
      ],
      resistantTo: [
        'poison',
        'rock',
        'electric'
      ],
      counters: [
        'water',
        'grass',
        'ice'
      ]
    }
  },
  
  
  'rock': {
    id: 'rock',
    primary: 'rock',
    secondary: null,
    name: 'Rock',
    relationships: {
      effectiveAgainst: [
        'flying',
        'bug',
        'fire',
        'ice'
      ],
      weakAgainst: [
        'fighting',
        'ground',
        'steel'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'normal',
        'flying',
        'poison',
        'fire'
      ],
      counters: [
        'fighting',
        'ground',
        'steel',
        'water',
        'grass'
      ]
    }
  },
  
  
  'bug': {
    id: 'bug',
    primary: 'bug',
    secondary: null,
    name: 'Bug',
    relationships: {
      effectiveAgainst: [
        'grass',
        'psychic',
        'dark'
      ],
      weakAgainst: [
        'fighting',
        'flying',
        'poison',
        'ghost',
        'steel',
        'fire',
        'fairy'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'fighting',
        'ground',
        'grass'
      ],
      counters: [
        'flying',
        'rock',
        'fire'
      ]
    }
  },
  
  
  'ghost': {
    id: 'ghost',
    primary: 'ghost',
    secondary: null,
    name: 'Ghost',
    relationships: {
      effectiveAgainst: [
        'ghost',
        'psychic'
      ],
      weakAgainst: [
        'dark'
      ],
      ineffectiveAgainst: [
        'normal'
      ],
      resistantTo: [
        'normal',
        'fighting',
        'poison',
        'bug'
      ],
      counters: [
        'ghost',
        'dark'
      ]
    }
  },
  
  
  'steel': {
    id: 'steel',
    primary: 'steel',
    secondary: null,
    name: 'Steel',
    relationships: {
      effectiveAgainst: [
        'rock',
        'ice',
        'fairy'
      ],
      weakAgainst: [
        'steel',
        'fire',
        'water',
        'electric'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'normal',
        'flying',
        'poison',
        'rock',
        'bug',
        'steel',
        'grass',
        'psychic',
        'ice',
        'dragon',
        'fairy'
      ],
      counters: [
        'fighting',
        'ground',
        'fire'
      ]
    }
  },
  
  
  'fire': {
    id: 'fire',
    primary: 'fire',
    secondary: null,
    name: 'Fire',
    relationships: {
      effectiveAgainst: [
        'bug',
        'steel',
        'grass',
        'ice'
      ],
      weakAgainst: [
        'rock',
        'fire',
        'water',
        'dragon'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'bug',
        'steel',
        'fire',
        'grass',
        'ice',
        'fairy'
      ],
      counters: [
        'ground',
        'rock',
        'water'
      ]
    }
  },
  
  
  'water': {
    id: 'water',
    primary: 'water',
    secondary: null,
    name: 'Water',
    relationships: {
      effectiveAgainst: [
        'ground',
        'rock',
        'fire'
      ],
      weakAgainst: [
        'water',
        'grass',
        'dragon'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'steel',
        'fire',
        'water',
        'ice'
      ],
      counters: [
        'grass',
        'electric'
      ]
    }
  },
  
  
  'grass': {
    id: 'grass',
    primary: 'grass',
    secondary: null,
    name: 'Grass',
    relationships: {
      effectiveAgainst: [
        'ground',
        'rock',
        'water'
      ],
      weakAgainst: [
        'flying',
        'poison',
        'bug',
        'steel',
        'fire',
        'grass',
        'dragon'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'ground',
        'water',
        'grass',
        'electric'
      ],
      counters: [
        'flying',
        'poison',
        'bug',
        'fire',
        'ice'
      ]
    }
  },
  
  
  'electric': {
    id: 'electric',
    primary: 'electric',
    secondary: null,
    name: 'Electric',
    relationships: {
      effectiveAgainst: [
        'flying',
        'water'
      ],
      weakAgainst: [
        'grass',
        'electric',
        'dragon'
      ],
      ineffectiveAgainst: [
        'ground'
      ],
      resistantTo: [
        'flying',
        'steel',
        'electric'
      ],
      counters: [
        'ground'
      ]
    }
  },
  
  
  'psychic': {
    id: 'psychic',
    primary: 'psychic',
    secondary: null,
    name: 'Psychic',
    relationships: {
      effectiveAgainst: [
        'fighting',
        'poison'
      ],
      weakAgainst: [
        'steel',
        'psychic'
      ],
      ineffectiveAgainst: [
        'dark'
      ],
      resistantTo: [
        'fighting',
        'psychic'
      ],
      counters: [
        'bug',
        'ghost',
        'dark'
      ]
    }
  },
  
  
  'ice': {
    id: 'ice',
    primary: 'ice',
    secondary: null,
    name: 'Ice',
    relationships: {
      effectiveAgainst: [
        'flying',
        'ground',
        'grass',
        'dragon'
      ],
      weakAgainst: [
        'steel',
        'fire',
        'water',
        'ice'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'ice'
      ],
      counters: [
        'fighting',
        'rock',
        'steel',
        'fire'
      ]
    }
  },
  
  
  'dragon': {
    id: 'dragon',
    primary: 'dragon',
    secondary: null,
    name: 'Dragon',
    relationships: {
      effectiveAgainst: [
        'dragon'
      ],
      weakAgainst: [
        'steel'
      ],
      ineffectiveAgainst: [
        'fairy'
      ],
      resistantTo: [
        'fire',
        'water',
        'grass',
        'electric'
      ],
      counters: [
        'ice',
        'dragon',
        'fairy'
      ]
    }
  },
  
  
  'fairy': {
    id: 'fairy',
    primary: 'fairy',
    secondary: null,
    name: 'Fairy',
    relationships: {
      effectiveAgainst: [
        'fighting',
        'dragon',
        'dark'
      ],
      weakAgainst: [
        'poison',
        'steel',
        'fire'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'fighting',
        'bug',
        'dragon',
        'dark'
      ],
      counters: [
        'poison',
        'steel'
      ]
    }
  },
  
  
  'dark': {
    id: 'dark',
    primary: 'dark',
    secondary: null,
    name: 'Dark',
    relationships: {
      effectiveAgainst: [
        'ghost',
        'psychic'
      ],
      weakAgainst: [
        'fighting',
        'dark',
        'fairy'
      ],
      ineffectiveAgainst: [],
      resistantTo: [
        'ghost',
        'psychic',
        'dark'
      ],
      counters: [
        'fighting',
        'bug',
        'fairy'
      ]
    }
  },
}