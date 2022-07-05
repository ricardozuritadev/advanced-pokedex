import { ITitleProps } from './models/ITitleProps';

const Title: React.FC<ITitleProps> = ({ children }) => {
  return (
    <section>
      <p>{children}</p>
    </section>
  );
};

export default Title;
