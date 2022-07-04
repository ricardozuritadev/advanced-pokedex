import { useNavigate } from 'react-router-dom';

const Pokemon = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/pokedex');

  return <div>Pokemon</div>;
};

export default Pokemon;
