import React from "react";

import logo from "../../assets/img/logo.jpg";
import styles from "./Navigation.module.css";
import NavItems from "./NavItems/NavItems";
import NavLinks from "./NavLinks/NavLinks";

const Navigation = (props: any) => {
  return (
    <div className={styles.TopBar}>
      <div className={styles.LogoContainer}>
        <img alt="logo" src={logo}></img>
        <p>Webzie</p>
      </div>
      <NavLinks></NavLinks>
      <NavItems></NavItems>
    </div>
  );
};

export default Navigation;
