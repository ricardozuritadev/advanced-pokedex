import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <section className="header">
      <h2 className="header__title">{title}</h2>

      <section className="header__links">{children}</section>
    </section>
  );
};

export default Header;
