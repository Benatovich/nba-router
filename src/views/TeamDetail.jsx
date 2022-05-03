import { useEffect, useState } from 'react';
import { useParams, useLocation, Redirect, Link } from 'react-router-dom';
import { fetchTeamDetails } from '../services/nba';
import styles from './TeamDetail.css';

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
  const { image, name, description, firstAppearance, voice } = teamDetails;

  return (
    <div className={teamDetailsContainer}>
      <div className={teamDetailsList}>
        <Link to="/">
          <img src={image} alt={`${name} image`} />
        </Link>
        <div className={content}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{voice}</p>
          <p>{firstAppearance}</p>
        </div>
      </div>
    </div>
  );
}
