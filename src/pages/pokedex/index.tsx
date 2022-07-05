import './styles.scss';

import { useNavigate } from 'react-router-dom';
import { useGetter } from '../../context';

import Header from '../../components/header';
import Title from '../../components/title';
import Input from '../../components/input';
import Card from '../../components/card';

const Pokedex = () => {
  const { pokedex } = useGetter();

  const navigate = useNavigate();

  const handleClick = () => navigate('/profile');

  return (
    <section className="pokedex">
      <Header title="Pokédex">
        <p>login</p>
        <p>test@test.com</p>
      </Header>

      <Title>Search for Pokémon by name or using the ID</Title>

      <section className="pokedex__list">
        {pokedex.map((pokemon: any) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </section>

      <section></section>
    </section>
  );
};

export default Pokedex;
