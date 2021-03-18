import React from "react";

import styles from "./SideBar.module.css";
import dummy from "../../../assets/img/facebook.png";

import SideItem from "./SideItem/SideItem";

const SideBar = (props: any) => {
  return (
    <div className={styles.SideBar}>
      <SideItem>My Calendar</SideItem>
      <SideItem>Badge</SideItem>
      <SideItem>My Webinars</SideItem>
      <SideItem>E-Certificate</SideItem>
      <SideItem>Payment History</SideItem>
      <SideItem>Notifications</SideItem>
    </div>
  );
};

export default SideBar;
