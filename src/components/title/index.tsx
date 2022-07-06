import { TitleProps } from './types/TitleProps';

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <section>
      <p>{children}</p>
    </section>
  );
};

export default Title;
