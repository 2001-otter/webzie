import React from "react";

import styles from "./NavAuth.module.css";
import NavLinks from "../NavUnauth/NavLinks/NavLinks";

const NavAuth = (props: any) => {
  return (
    <div className={styles.NavAuth}>
      <NavLinks></NavLinks>
      <div></div>
    </div>
  );
};

export default NavAuth;
