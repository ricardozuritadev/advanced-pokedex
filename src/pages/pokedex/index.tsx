import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Input from '../../components/input';
import Title from '../../components/title';
import Card from '../../components/card';

const Pokedex = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Header title="Pokédex">
        <p>test@test.com</p>
        <p>test@test.com</p>
      </Header>

      <Title></Title>

      <Input></Input>
      <section></section>
    </section>
  );
};

export default Pokedex;
