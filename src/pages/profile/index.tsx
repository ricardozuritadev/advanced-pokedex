import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/pokedex');

  return (
    <section>
      <Header title="Profile">
        <p>logout</p>
      </Header>
    </section>
  );
};

export default Profile;
