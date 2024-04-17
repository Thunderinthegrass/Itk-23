import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./NavbarItem.module.scss";

const NavbarItem = (props) => {
  return (
    <li className={cl.navItem}>
      <NavLink
        to={props.path}
        className={(navData) => (navData.isActive ? cl.activeLink : cl.a)}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
