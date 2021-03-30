import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.css";

const NavLinks = (props: any) => {
  return (
    <ul className={styles.NavLinks}>
      <NavLink to="home">Home</NavLink>
      <NavLink to="about-us">Home (no-login)</NavLink>
    </ul>
  );
};

export default NavLinks;
