import axios, { AxiosInstance } from 'axios';
import pokemons from './pokemons';
import auth from './auth';

const pokeApi: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

const authApi: AxiosInstance = axios.create({
  baseURL: 'https://localhost:5000',
  withCredentials: true,
});

const services = {
  pokemons: pokemons(pokeApi),
  auth: auth(authApi),
};

export default services;
