import axios, { AxiosInstance } from 'axios';
import pokemons from './pokemons';

const pokeapi: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const services = {
  pokemons: pokemons(pokeapi),
};

export default services;
