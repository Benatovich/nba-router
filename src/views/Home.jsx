import { useEffect, useState } from 'react';
import TeamList from '../components/List';
import { fetchNBATeams } from '../services/rickAndMorty';

export default function Home() {
  const [nbaTeams, setNBATeams] = useState(() => {
    const defaultTeams = localStorage.getItem('teams');
    if (defaultTeams) return JSON.parse(defaultTeams);
    return [];
  });

  useEffect(() => {
    if (nbaTeams.length > 0) return;
    async function fetchTeams() {
      const fetchedTeams = await fetchNBATeams();
      setNBATeams(fetchedTeams);
    }

    fetchTeams();
  }, [nbaTeams.length]);

  return <TeamList teams={nbaTeams} />;
}
