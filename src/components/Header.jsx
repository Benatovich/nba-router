import styles from './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../assets/rickAndMorty.png';

const Header = () => {
  return (
    <header>
      <img src={logo} className={styles.appLogo} alt="logo" />
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
      </ul>
    </header>
  );
};

export default Header;
