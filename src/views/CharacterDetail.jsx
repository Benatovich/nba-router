import { useEffect, useState } from 'react';
import { useParams, useLocation, Redirect, Link } from 'react-router-dom';
import { fetchCharacterDetails } from '../services/mgs';
import styles from './CharacterDetail.css';

export default function CharacterDetail() {
  const [characterDetails, setCharacterDetails] = useState({});

  const { characterId } = useParams();

  if (!characterId) {
    <Redirect to={{ pathname: '/' }} />;
  }

  useEffect(() => {
    async function fetchDetails() {
      const characterDetails = await fetchCharacterDetails(characterId);
      console.log('characterDetails', characterDetails);
      setCharacterDetails(characterDetails);
    }

    fetchDetails();
  }, []);

  const { characterDetailsList, characterDetailsContainer, content } = styles;
  const { image, name, description, firstAppearance, voice } = characterDetails;

  return (
    <div className={characterDetailsContainer}>
      <div className={characterDetailsList}>
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
