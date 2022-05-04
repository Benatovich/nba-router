import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchConferenceTeams } from '../services/nba';
import TeamList from '../components/TeamList';
import { useHistory } from 'react-router-dom';

export default function Conference() {
  const [teamsList, setTeamsList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const search = location.search;
  const searchedConference = new URLSearchParams(search);
  const conference = searchedConference.get('conference');

  useEffect(() => {
    async function getConferenceTeams() {
      const conferenceTeams = await fetchConferenceTeams(conference);
      setTeamsList(conferenceTeams);
    }

    getConferenceTeams();
  }, [conference]);

  function returnToDashBoard() {
    history.push('/');
  }

  return (
    <div>
      <h1>{`${conference}ern conference teams`}</h1>
      <TeamList teams={teamsList} />
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '1.5rem',
        }}
      >
        <button
          onClick={returnToDashBoard}
          style={{
            textAlign: 'center',
          }}
        >
          {' '}
          &larr; Back to All Teams
        </button>
      </div>
    </div>
  );
}
