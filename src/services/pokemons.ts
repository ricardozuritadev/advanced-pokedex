import { AxiosInstance } from 'axios';
import { catchAsync } from './utils';

const LENGTH: number = 15;
const FROM: number = 40;
const IDs: number[] = Array.from({ length: LENGTH }, (_, i) => i + FROM);

const getSample = (client: AxiosInstance) => async () => {
  return await Promise.all(
    IDs.map(pokemon => catchAsync(client.get)(`/pokemon/${pokemon}`))
  );
};

const getPokemonSpecies = (client: AxiosInstance) => async () => {
  return await Promise.all(
    IDs.map(pokemon => catchAsync(client.get)(`/pokemon-species/${pokemon}`))
  );
};

const pokemons = (client: AxiosInstance) => ({
  getSample: getSample(client),
  getPokemonSpecies: getPokemonSpecies(client),
});

export default pokemons;
