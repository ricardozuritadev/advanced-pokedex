import { useNavigate } from 'react-router-dom';
import { useGetter } from '../../context';

import Header from '../../components/header';
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
