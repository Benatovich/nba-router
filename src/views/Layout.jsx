import Header from '../components/Header';
import styles from './Layout.css';

const { layoutContainer, mainContent } = styles;

const Layout = ({ children }) => {
  return (
    <div className={layoutContainer}>
      <Header />
      <main className={mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
