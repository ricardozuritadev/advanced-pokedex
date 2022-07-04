import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import services from '../../services';

import Header from '../../components/header';
import Card from '../../components/card';

const Pokedex = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/profile');

  const sample = async () => {
    const result = await services.pokemons.getSample();
    console.log(result);
  };

  useEffect(() => {
    sample();
  }, []);

  return (
    <section>
      <Header title="Pokédex">
        <p>login</p>
        <p>test@test.com</p>
      </Header>

      <section></section>
    </section>
  );
};

export default Pokedex;
