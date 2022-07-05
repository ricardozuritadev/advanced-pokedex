import { createContext, useContext } from 'react';

interface IContext {
  user: object;
  pokedex: any;
  setUser: () => void;
  setPokedex: () => void;
}

const Context: any = createContext(null);

export const useGetter = () => {
  const { user, setUser, pokedex, setPokedex } = useContext<IContext>(Context);

  return { user, setUser, pokedex, setPokedex };
};

export default Context;
