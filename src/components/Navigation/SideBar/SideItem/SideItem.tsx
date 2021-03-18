import React from "react";

import styles from "./SideItem.module.css";
import dummy from "../../../../assets/img/facebook.png";

const SideItem = (props: any) => {
  return (
    <div className={styles.SideItem}>
      <img src={dummy} alt="dummy"></img>
      <p>{props.children}</p>
    </div>
  );
};

export default SideItem;
