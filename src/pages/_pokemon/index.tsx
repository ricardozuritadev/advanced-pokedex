import { useNavigate } from 'react-router-dom';

import Header from '../../components/header';

const Pokemon = () => {
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
