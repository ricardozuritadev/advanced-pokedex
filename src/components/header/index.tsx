import './styles.scss';
import { IHeaderProps } from './models';

const Header: React.FC<IHeaderProps> = ({ title, children }) => {
  return (
    <section className="header">
      <h2 className="header__title">{title}</h2>

      <section className="header__links">{children}</section>
    </section>
  );
};

export default Header;
