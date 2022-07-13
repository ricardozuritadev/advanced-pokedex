import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../../hooks';
import images from '../../../utils/imgLoader';

import Input from '../../../components/input';
import Button from '../../../components/button';

const Register = () => {
  const submitRef = useRef<any>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const signup = useRegister({ onSuccess: () => navigate('/login') });

  const handleClick = () => navigate('/login');
  const handleButton = () => submitRef.current.click();

  const onSubmit = (data: any) => {
    signup(data);
  };

  return (
    <section>
      <section>
        <img src="" alt="" />
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <picture>
            <img src={images.maleTrainer} alt="Male-trainer" />
          </picture>
          <picture>
            <img src={images.femaleTrainer} alt="Female-trainer" />
          </picture>
        </section>

        <Input type="text" placeholder="email" fn={() => register('email')} />
        <Input
          type="text"
          placeholder="username"
          fn={() => register('username')}
        />
        <Input
          type="password"
          placeholder="password"
          fn={() => register('password')}
        />
        <input
          ref={submitRef}
          type="submit"
          style={{ position: 'absolute', visibility: 'hidden' }}
        />
      </form>

      <section>
        <Button handleClick={handleButton} text="Sign up" />
        <p>Already have an account?</p>
        <p onClick={handleClick}>Log in here</p>
      </section>
    </section>
  );
};

export default Register;
