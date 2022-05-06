import Team from './Character';
import styles from './List.css';

const { teamList, teamDisplay } = styles;

export default function TeamList({ teams }) {
  return (
    <ul className={teamList}>
      {teams.map((team) => {
        return (
          <li key={team.teamId} className={teamDisplay}>
            <Team team={team} />
          </li>
        );
      })}
    </ul>
  );
}
