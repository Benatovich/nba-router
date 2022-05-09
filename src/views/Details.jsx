import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Details() {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const characterData = await res.json();
            setCharacter(characterData);
            setLoading(false);
        };
        fetchDetails();
    }, []);

  return (
    <>
        <h1>Character Details</h1>
        {loading ? (
            <p>LOADING...</p>
        ) : (
            <article>
                <h2>{character.name}</h2>
                <p>{character.species}</p>
                <p>Status: {character.status}</p>
                <img alt={`image of ${character.name} from rick and morty`} src={character.image} />
            </article>
        )}
    </>
  );
}
