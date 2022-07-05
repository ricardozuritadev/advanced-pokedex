import { useState } from 'react';
import services from '../services/index';

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState<object[]>([]);

  const getPokedex = async () => {
    const result: object[] = await services.pokemons.getSample();
    result && setPokedex(result);
  };

  return [pokedex, getPokedex];
};
