import cl from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
// import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
  // console.log(props.navbar[1])
  // debugger;
  // let navbarItem = props.navbar.map(elem => <NavbarItem name={elem.name} path={elem.path} />)

  // { id: 1, name: "Profile", path: "/profile" },
  //         { id: 1, name: "Messages", path: "/Dialogs" },
  //         { id: 1, name: "News", path: "/News" },
  //         { id: 1, name: "Music", path: "/Music" },
  //         { id: 1, name: "Settings", path: "/Settings" },
  //         { id: 1, name: "Friends", path: "/Friends" },
  return (
    <nav className={cl.nav}>
      <ul className={cl.navList}>
        {/* {navbarItem} */}
        <li className={cl.navItem}>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
          >
            Profile
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink
            to="/Dialogs"
            className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
          >
            Dialogs
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink
            to="/News"
            className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
          >
            News
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink
            to="/Music"
            className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
          >
            Music
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink
            to="/Settings"
            className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
          >
            Settings
          </NavLink>
        </li>
        <li className={cl.navItem}>
          <NavLink
            to="/Friends"
            className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
          >
            Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
