import { IHeaderProps } from './models';

const Header: React.FC<IHeaderProps> = ({ title, children }) => {
  return (
    <section className="title">
      <h2>{title}</h2>

      <section
        className={`title__links ${
          Array.isArray(children)
            ? 'title__links--multiple'
            : 'title__links--single'
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Header;
