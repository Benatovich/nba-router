import styles from './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/mgs.png';

const Header = () => {
  return (
    <header>
      <img src={logo} className={styles.appLogo} alt="nba logo" />
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            style={(isActive) => ({
              color: isActive ? 'black' : 'blue',
            })}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/conference?conference=east"
            style={(isActive) => ({
              color: isActive ? 'black' : 'blue',
            })}
          >
            Eastern
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/conference?conference=west"
            style={(isActive) => ({
              color: isActive ? 'black' : 'blue',
            })}
          >
            Western
          </NavLink>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
