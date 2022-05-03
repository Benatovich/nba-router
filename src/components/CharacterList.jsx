import Character from './Character';
import styles from './CharacterList.css';

const { characterList, characterDisplay } = styles;

export default function CharacterList({ characters }) {
  return (
    <ul className={characterList}>
      {characters.map((character) => {
        return (
          <li key={character.characterId} className={characterDisplay}>
            <Character character={character} />
          </li>
        );
      })}
    </ul>
  );
}
