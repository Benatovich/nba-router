import { Link } from 'react-router-dom';
import styles from './Team.css';

const { teamContainer, teamLogo } = styles;
export default function Team({ team }) {
  const { nickname: name, image, teamId } = team;

  return (
    <Link to={`/team/${teamId}`}>
      <div className={teamContainer}>
        <img className={teamLogo} src={image} alt={`${name} logo`} />
      </div>
    </Link>
  );
}
