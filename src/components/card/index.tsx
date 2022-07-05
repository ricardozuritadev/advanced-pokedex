import { useNavigate } from 'react-router-dom';
import { ICardProps } from './models/ICardProps';

import Tag from '../tag';

const Card: React.FC<ICardProps> = ({ id, name, sprites, types }) => {
  const navigate = useNavigate();

  const artwork =
    sprites.versions['generation-v']['black-white'].animated.front_default ||
    sprites.front_default;

  const handleClick = () => navigate(`/${name}`);

  return (
    <section>
      <section>
        <p>#{id}</p>
        <p>{name}</p>
        {/* <section>
          {types.map(({ type }, index) => (
            <Tag key={index} {...type} />
          ))}
        </section> */}
      </section>

      <section className="card__sprite">
        <img src={artwork} alt="artwork" />
      </section>
    </section>
  );
};

export default Card;
