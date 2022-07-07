export type PokemonObj = {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: any;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

export type PokemonSpecies = {
  flavor_text_entries: any;
  habitat: {
    name: string;
  };
};
