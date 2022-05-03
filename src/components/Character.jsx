import { Link } from 'react-router-dom';
import styles from './Character.css';

const { characterContainer, characterLogo } = styles;
export default function Character({ character }) {
  const { nickname: name, image, characterId } = character;

  return (
    <Link to={`/character/${characterId}`}>
      <div className={characterContainer}>
        <img className={characterLogo} src={image} alt={`${name} logo`} />
      </div>
    </Link>
  );
}
