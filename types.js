export const types =
{
  get: function(primary, secondary) {
    const primaryType = this[primary];

    if (!secondary) {
      return primaryType;
    }

    if (this[primary + '+' + secondary]) {
      return this[primary + '+' + secondary];
    }

    const type = { };
    const secondaryType = this.get(secondary);
    type.id = primaryType.id + '+' + secondaryType.id;
    type.primary = primaryType.id;
    type.secondary = secondaryType.id;
    type.name = primaryType.name + '+' + secondaryType.name;

    type.relationships = {
      counter: [],
      resistant: []
    };

    const resistances = new Set([
      ...primaryType.relationships.resistant,
      ...secondaryType.relationships.resistant
    ]);

    const counters = new Set([
      ...primaryType.relationships.counter,
      ...secondaryType.relationships.counter
    ]);

    for (const r of resistances) {
      if (counters.has(r)) {
        resistances.delete(r);
        counters.delete(r);
      }
    }

    type.relationships.resistant = [...resistances];

    type.relationships.counter = [...counters];

    this[type.id] = type;

    return type;
  },


  'normal': {
    id: 'normal',
    primary: 'normal',
    secondary: null,
    name: 'Normal',
    relationships: {
      effective: [],
      weak: [
        'rock',
        'steel'
      ],
      ineffective: [
        'ghost'
      ],
      resistant: [
        'ghost'
      ],
      counter: [
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
      effective: [
        'normal',
        'rock',
        'steel',
        'ice',
        'dark'
      ],
      weak: [
        'flying',
        'poison',
        'psychic',
        'bug',
        'fairy'
      ],
      ineffective: [
        'ghost'
      ],
      resistant: [
        'rock',
        'bug',
        'dark'
      ],
      counter: [
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
      effective: [
        'fighting',
        'bug',
        'grass'
      ],
      weak: [
        'rock',
        'steel',
        'electric'
      ],
      ineffective: [],
      resistant: [
        'fighting',
        'ground',
        'bug',
        'grass'
      ],
      counter: [
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
      effective: [
        'grass',
        'fairy'
      ],
      weak: [
        'poison',
        'ground',
        'rock',
        'ghost'
      ],
      ineffective: [
        'steel'
      ],
      resistant: [
        'fighting',
        'poison',
        'grass',
        'fairy'
      ],
      counter: [
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
      effective: [
        'poison',
        'rock',
        'steel',
        'fire',
        'electric'
      ],
      weak: [
        'bug',
        'grass'
      ],
      ineffective: [
        'flying'
      ],
      resistant: [
        'poison',
        'rock',
        'electric'
      ],
      counter: [
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
      effective: [
        'flying',
        'bug',
        'fire',
        'ice'
      ],
      weak: [
        'fighting',
        'ground',
        'steel'
      ],
      ineffective: [],
      resistant: [
        'normal',
        'flying',
        'poison',
        'fire'
      ],
      counter: [
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
      effective: [
        'grass',
        'psychic',
        'dark'
      ],
      weak: [
        'fighting',
        'flying',
        'poison',
        'ghost',
        'steel',
        'fire',
        'fairy'
      ],
      ineffective: [],
      resistant: [
        'fighting',
        'ground',
        'grass'
      ],
      counter: [
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
      effective: [
        'ghost',
        'psychic'
      ],
      weak: [
        'dark'
      ],
      ineffective: [
        'normal'
      ],
      resistant: [
        'normal',
        'fighting',
        'poison',
        'bug'
      ],
      counter: [
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
      effective: [
        'rock',
        'ice',
        'fairy'
      ],
      weak: [
        'steel',
        'fire',
        'water',
        'electric'
      ],
      ineffective: [],
      resistant: [
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
      counter: [
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
      effective: [
        'bug',
        'steel',
        'grass',
        'ice'
      ],
      weak: [
        'rock',
        'fire',
        'water',
        'dragon'
      ],
      ineffective: [],
      resistant: [
        'bug',
        'steel',
        'fire',
        'grass',
        'ice',
        'fairy'
      ],
      counter: [
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
      effective: [
        'ground',
        'rock',
        'fire'
      ],
      weak: [
        'water',
        'grass',
        'dragon'
      ],
      ineffective: [],
      resistant: [
        'steel',
        'fire',
        'water',
        'ice'
      ],
      counter: [
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
      effective: [
        'ground',
        'rock',
        'water'
      ],
      weak: [
        'flying',
        'poison',
        'bug',
        'steel',
        'fire',
        'grass',
        'dragon'
      ],
      ineffective: [],
      resistant: [
        'ground',
        'water',
        'grass',
        'electric'
      ],
      counter: [
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
      effective: [
        'flying',
        'water'
      ],
      weak: [
        'grass',
        'electric',
        'dragon'
      ],
      ineffective: [
        'ground'
      ],
      resistant: [
        'flying',
        'steel',
        'electric'
      ],
      counter: [
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
      effective: [
        'fighting',
        'poison'
      ],
      weak: [
        'steel',
        'psychic'
      ],
      ineffective: [
        'dark'
      ],
      resistant: [
        'fighting',
        'psychic'
      ],
      counter: [
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
      effective: [
        'flying',
        'ground',
        'grass',
        'dragon'
      ],
      weak: [
        'steel',
        'fire',
        'water',
        'ice'
      ],
      ineffective: [],
      resistant: [
        'ice'
      ],
      counter: [
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
      effective: [
        'dragon'
      ],
      weak: [
        'steel'
      ],
      ineffective: [
        'fairy'
      ],
      resistant: [
        'fire',
        'water',
        'grass',
        'electric'
      ],
      counter: [
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
      effective: [
        'fighting',
        'dragon',
        'dark'
      ],
      weak: [
        'poison',
        'steel',
        'fire'
      ],
      ineffective: [],
      resistant: [
        'fighting',
        'bug',
        'dragon',
        'dark'
      ],
      counter: [
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
      effective: [
        'ghost',
        'psychic'
      ],
      weak: [
        'fighting',
        'dark',
        'fairy'
      ],
      ineffective: [],
      resistant: [
        'ghost',
        'psychic',
        'dark'
      ],
      counter: [
        'fighting',
        'bug',
        'fairy'
      ]
    }
  },
}