import { useState } from 'react';
import services from '../services/index';

export const usePokedex = () => {
  const [pokedex, setPokedex] = useState<object[]>([]);
  const [species, setSpecies] = useState<object[]>([]);

  const getPokedex = async () => {
    const result: object[] = await services.pokemons.getSample();
    result && setPokedex(result);
  };

  const getSpecies = async () => {
    const result: object[] = await services.pokemons.getPokemonSpecies();
    result && setSpecies(result);
  };

  return [pokedex, getPokedex, species, getSpecies];
};
