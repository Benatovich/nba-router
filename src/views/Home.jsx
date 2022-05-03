import { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchMGSCharacters } from '../services/mgs';

export default function Home() {
  const [mgsCharacters, setMGSCharacters] = useState(() => {
    const defaultCharacters = localStorage.getItem('characters');
    if (defaultCharacters) return JSON.parse(defaultCharacters);
    return [];
  });

  useEffect(() => {
    if (mgsCharacters.length > 0) return;
    async function fetchCharacters() {
      const fetchedCharacters = await fetchMGSCharacters();
      setMGSCharacters(fetchedCharacters);
    }

    fetchCharacters();
  }, [mgsCharacters.length]);

  return <CharacterList characters={mgsCharacters} />;
}
