import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../../../components/input';
import Button from '../../../components/button';

const Register = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/login');

  return (
    <section>
      <section>
        <img src="" alt="" />
      </section>

      <section>
        <Input type="text" placeholder="email" />
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
      </section>

      <section>
        <Button text="Sign up" handleClick={} />
        <p>Already have an account?</p>
        <p onClick={handleClick}>Log in here</p>
      </section>
    </section>
  );
};

export default Register;
