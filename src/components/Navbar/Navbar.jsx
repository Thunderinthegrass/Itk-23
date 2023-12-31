import cl from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
  // debugger;
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
