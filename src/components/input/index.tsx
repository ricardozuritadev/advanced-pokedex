import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  position,
  small,
  fn = () => {},
  ...props
}) => {
  return (
    <section
      className={`input ${position && `input--${position}`} ${
        small && `input--small`
      }`}
    >
      <input className="input__text" {...fn()} {...props} />
    </section>
  );
};

export default Input;
