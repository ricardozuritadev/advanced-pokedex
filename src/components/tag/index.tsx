import './styles.scss';
import { ITagsProps } from './models/ITagProps';

const Tag: React.FC<ITagsProps> = ({ name }) => {
  return (
    <div className="tag">
      <p className="tag__name">{name}</p>
    </div>
  );
};

export default Tag;
