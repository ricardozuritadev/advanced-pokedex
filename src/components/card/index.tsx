import { useNavigate } from 'react-router-dom';
import { CardProps } from './types/CardProps';
import { capitalize, startWithZeroes } from '../../utils/commons';
import colors from '../../utils/colors';

import Tag from '../tag';

const Card: React.FC<CardProps> = ({ id, name, sprites, types }) => {
  const navigate = useNavigate();

  // const sprite =
  //   sprites.versions['generation-v']['black-white'].animated.front_default ||
  //   sprites.front_default;

  const sprite = sprites.other['official-artwork'].front_default;

  const backgroundColor = colors[types[0].type.name];

  const handleClick = () => navigate(`/${name}`);

  return (
    <section className="card" style={{ backgroundColor }} onClick={handleClick}>
      <section className="card__info">
        <div className="card__header">
          <p className="card__name">{capitalize(name)}</p>
          <p className="card__id">#{startWithZeroes(id)}</p>
        </div>

        <section className="card__tags">
          {types.map((type: any, index: number) => {
            return <Tag key={index} {...type.type} />;
          })}
        </section>
      </section>

      <section className="card__sprite">
        <img className="card__img" src={sprite} alt="sprite" />
      </section>
    </section>
  );
};

export default Card;
