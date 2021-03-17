import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinks = (props: any) => {
  return (
    <ul className={styles.NavLinks}>
      <NavLink to="index">Home</NavLink>
      <NavLink to="about-us">About Us</NavLink>
    </ul>
  );
};

export default NavLinks;
