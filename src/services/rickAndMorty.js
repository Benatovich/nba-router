const API_KEY = process.env.API_KEY;

export const fetchNBATeams = async () => {
  const response = await fetch(
    'https://api-nba-v1.p.rapidapi.com/teams/',
    {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
      },
    }
  );
  const apiResults = await response.json();

  console.log('!apiresults', apiResults)
  // const teamList = apiResults.api.teams.filter(
  //   (team) => team.nbaFranchise === '1' && team.allStar === '0'
  // );

  apiResults.response.forEach(getLogo);
  window.localStorage.setItem('teams', JSON.stringify(apiResults.response));
  return apiResults.response;
};

export const fetchNBAPlayers = () => {};

export const fetchConferenceTeams = async (conference) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/teams/confName/${conference}`,
      {
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        },
      }
    );
    const apiResults = await response.json();
    const fetchedTeams = apiResults.api.teams.filter(
      (team) => team.nbaFranchise === '1' && team.allStar === '0'
    );

    fetchedTeams.forEach(getLogo);
    return fetchedTeams;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchTeamDetails = async (teamId) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamId}`,
      {
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        },
      }
    );
    const apiResults = await response.json();
    const [fetchedTeam] = apiResults.api.teams;
    return fetchedTeam;
  } catch (error) {
    throw new Error(error);
  }
};
