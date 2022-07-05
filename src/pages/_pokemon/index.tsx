import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/header';
import { useEffect } from 'react';
import services from '../../services';

type Params = {
  pokemon: string;
};

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

  // console.log(id, name, sprites, types);

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
