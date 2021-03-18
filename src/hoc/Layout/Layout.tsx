import React from "react";

import styles from "./Layout.module.css";
import NavUnauth from "../../components/Navigation/NavUnauth/NavUnauth";
import Contact from "../../components/Contact/Contact";

const Layout = (props: any) => {
  return (
    <div className={styles.Container}>
      <NavUnauth></NavUnauth>
      <main className={styles.Content}>{props.children}</main>
      <Contact></Contact>
    </div>
  );
};

export default Layout;
