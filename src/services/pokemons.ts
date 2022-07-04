import { AxiosInstance } from 'axios';
import { catchAsync } from './utils';

const LENGTH: number = 10;

const getSample = (client: AxiosInstance) => async () => {
  const listIDs: number[] = Array.from({ length: LENGTH }, () =>
    Math.floor(Math.random() * (152 - 1) + 1)
  );

  return await Promise.all(
    listIDs.map(id => catchAsync(client.get)(`/pokemon/${id}`))
  );
};

const pokemons = (client: AxiosInstance) => ({
  getSample: getSample(client),
});

export default pokemons;
