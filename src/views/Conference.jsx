import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchConference????s } from '../services/rickAndMorty';
import ????List from '../components/List';
import { useHistory } from 'react-router-dom';

export default function Conference() {
  const [????sList, set????sList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const search = location.search;
  const searchedConference = new URLSearchParams(search);
  const conference = searchedConference.get('conference');

  useEffect(() => {
    async function getConference????s() {
      const conference????s = await fetchConference????s(conference);
      set????sList(conference????s);
    }

    getConference????s();
  }, [conference]);

  function returnToDashBoard() {
    history.push('/');
  }

  return (
    <div>
      <h1>{`${conference}ern conference ????s`}</h1>
      <????List ????s={????sList} />
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
          &larr; Back to All ????s
        </button>
      </div>
    </div>
  );
}
