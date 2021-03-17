import React from "react";

import styles from "./Layout.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Contact from "../../components/Contact/Contact";

const Layout = (props: any) => {
  return (
    <div className={styles.Container}>
      <Navigation></Navigation>
      <main className={styles.Content}>{props.children}</main>
      <Contact></Contact>
    </div>
  );
};

export default Layout;
