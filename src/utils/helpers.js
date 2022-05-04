import nbaLogos from './logos';

export const getLogo = (nbaTeam) => {
  const logo = nbaLogos.find((logo) => logo.shortName === nbaTeam.shortName);
  nbaTeam.image = logo?.teamLogo;
};
