import cl from './Navbar.module.scss';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.navList}>
        <li className="navItem post">
          <NavLink to="/profile" className={navData => navData.isActive ? cl.activeLink : cl.a}>
            Profile
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to="/Dialogs" className={navData => navData.isActive ? cl.activeLink : cl.a}>
            Messages
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to="/News" className={navData => navData.isActive ? cl.activeLink : cl.a}>
            News
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to="/Music" className={navData => navData.isActive ? cl.activeLink : cl.a}>
            Music
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to="/Settings" className={navData => navData.isActive ? cl.activeLink : cl.a}>
            Settings
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink to="/friends" className={navData => navData.isActive ? cl.activeLink : cl.a}>
            Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
