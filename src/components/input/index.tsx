import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ position, small, ...props }) => {
  return (
    <section
      className={`input ${position && `input--${position}`} ${
        small && `input--small`
      }`}
    >
      <input className="input__text" {...props} />
    </section>
  );
};

export default Input;
