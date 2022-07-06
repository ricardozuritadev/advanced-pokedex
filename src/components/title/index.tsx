import { TitleProps } from './types/TitleProps';

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <section className="title">
      <p className="title__text">{children}</p>
    </section>
  );
};

export default Title;
