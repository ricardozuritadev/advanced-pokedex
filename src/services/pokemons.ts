import { AxiosInstance } from 'axios';
import { catchAsync } from './utils';

const LENGTH: number = 15;
const FROM: number = 1;

const getSample = (client: AxiosInstance) => async () => {
  const listIDs: number[] = Array.from({ length: LENGTH }, () =>
    Math.floor(Math.random() * (152 - 1) + 1)
  );

  // const listIDs = Array.from({ length: LENGTH }, (_, i) => i + FROM);

  return await Promise.all(
    listIDs.map(id => catchAsync(client.get)(`/pokemon/${id}`))
  );
};

const getPokemonById = (client: AxiosInstance) => async (pokemon: any) => {
  return catchAsync(client.get)(`/pokemon/${pokemon}`);
};

const getPokemonBySpecies = (client: AxiosInstance) => async (pokemon: any) => {
  return catchAsync(client.get)(`/pokemon-species/${pokemon}`);
};

const pokemons = (client: AxiosInstance) => ({
  getSample: getSample(client),
  getPokemonById: getPokemonById(client),
  getPokemonBySpecies: getPokemonBySpecies(client),
});

export default pokemons;
