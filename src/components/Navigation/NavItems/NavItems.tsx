import React from "react";

import styles from "./NavItems.module.css";
import NavigationItem from "./NavItem/NavItem";

const navigationItems = () => (
  <div className={styles.rightItems}>
    <a href="search.php">
      <span>Login</span>
    </a>

    <a href="profile.php">
      <span>Register</span>
    </a>

    <a href="login.php">
      <span>EN</span>
    </a>
  </div>
);

export default navigationItems;
