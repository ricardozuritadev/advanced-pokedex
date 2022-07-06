import { TagProps } from './types/TagProps';

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <div className="tag">
      <p className="tag__name">{name}</p>
    </div>
  );
};

export default Tag;
