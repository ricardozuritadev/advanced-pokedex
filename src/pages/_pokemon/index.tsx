import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Params } from './types';

import Header from '../../components/header';
import services from '../../services';

const Pokemon = () => {
  const { pokemon } = useParams<Params>();

  const getPokemon = async () => {
    const result = await services.pokemons.getPokemonById(pokemon);

    console.log(result);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => navigate('/pokedex');

  return (
    <section>
      <Header title="Pokémon info">
        <p>prueba</p>
      </Header>
    </section>
  );
};

export default Pokemon;
