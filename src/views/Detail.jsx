import { useEffect, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { fetchTeamDetails } from '../services/rickAndMorty';
import styles from './Detail.css';

export default function TeamDetail() {
  const [teamDetails, setTeamDetails] = useState({});

  const { teamId } = useParams();

  if (!teamId) {
    <Redirect to={{ pathname: '/' }} />;
  }

  useEffect(() => {
    async function fetchDetails() {
      const teamDetails = await fetchTeamDetails(teamId);
      console.log('teamDetails', teamDetails);
      setTeamDetails(teamDetails);
    }

    fetchDetails();
  }, []);

  const { teamDetailsList, teamDetailsContainer, content } = styles;
  const { logo, nickname, shortName, fullName, leagues } = teamDetails;

  return (
    <div className={teamDetailsContainer}>
      <div className={teamDetailsList}>
        <Link to="/">
          <img src={logo} alt={`${nickname} Logo`} />
        </Link>
        <div className={content}>
          <h1>{fullName}</h1>
          <p>Conference: {leagues?.standard?.confName}</p>
          <p>Division: {leagues?.standard?.divName}</p>
          <p>{nickname}</p>
          <p>{shortName}</p>
        </div>
      </div>
    </div>
  );
}
