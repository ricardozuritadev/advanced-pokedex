import { createContext, useContext } from 'react';

interface IContext {
  user: object;
  pokedex: any;
  species: any;
  setUser: () => void;
  setPokedex: () => void;
  setSpecies: () => void;
}

const Context: any = createContext(null);

export const useGetter = () => {
  const { pokedex, setPokedex, species, setSpecies } =
    useContext<IContext>(Context);

  return { pokedex, setPokedex, species, setSpecies };
};

export default Context;
