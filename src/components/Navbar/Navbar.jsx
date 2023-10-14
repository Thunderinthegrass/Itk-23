import cl from './Navbar.module.scss';
// import { NavLink } from 'react-router-dom'
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {

let navbarItem = props.navbar.map(elem => <NavbarItem name={elem.name} path={elem.path} />)

  return (
    <nav className={cl.nav}>
      <ul className={cl.navList}>
        {navbarItem}
      </ul>
    </nav>
  );
};

export default Navbar;
