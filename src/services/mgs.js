import { getPic } from '../utils/helpers';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMGSCharacters = async () => {
  const response = await fetch(`https://www.giantbomb.com/api/franchise/3025-5/?api_key=${API_KEY}&field_list=characters`);
  const apiResults = await response.json();

  apiResults.forEach(getPic);
  window.localStorage.setItem('characters', JSON.stringify(apiResults));
  return apiResults;
};

// export const fetchNBAPlayers = () => {};

export const fetchGameCharacters = async (gameId) => {
  try {
    const response = await fetch(`https://www.giantbomb.com/api/game/${gameId}/?api_key=${API_KEY}`)
    const apiResults = await response.json();

    apiResults.forEach(getPic);
    return apiResults;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCharacterDetails = async (characterId) => {
  try {
    const response = await fetch(`https://www.giantbomb.com/api/character/3005-${characterId}/?api_key=${API_KEY}`)
    const apiResults = await response.json();
    const [fetchedCharacter] = apiResults.api.characters;
    return fetchedCharacter;
  } catch (error) {
    throw new Error(error);
  }
};
