import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./DialogItem.module.scss";

const DialogItem = (props) => {
  let path = "/dialogs/*" + props.id;

  return (
    <div className={cl.dialog}>
      <NavLink to={path} className={navData => navData.isActive ? cl.activeLink : undefined}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;