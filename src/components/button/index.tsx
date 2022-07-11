import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <section onClick={handleClick}>
      <p>{text}</p>
    </section>
  );
};

export default Button;
