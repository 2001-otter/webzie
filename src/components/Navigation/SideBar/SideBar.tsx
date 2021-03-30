import React from "react";

import styles from "./SideBar.module.css";
import dummy from "../../../assets/img/facebook.png";
import badge from "../../../assets/img/badge.png";
import certificate from "../../../assets/img/certificate.png";
import home from "../../../assets/img/home.png";
import myCalendar from "../../../assets/img/myCalendar-icon.png";
import myWebinar from "../../../assets/img/myWebinar.png";
import notifications from "../../../assets/img/notifications.png";
import paymentHistory from "../../../assets/img/paymentHistory.png";

import SideItem from "./SideItem/SideItem";

const SideBar = (props: any) => {
  return (
    <div className={styles.SideBar}>
      <div className={styles.SideHeader}>
        <img src={home} alt="homeIcon"></img>
        <p>
          <b>Recommended for you</b>
        </p>
      </div>
      <SideItem img={myCalendar}>My Calendar</SideItem>
      <SideItem img={badge}>Badge</SideItem>
      <SideItem img={myWebinar}>My Webinars</SideItem>
      <SideItem img={certificate}>E-Certificate</SideItem>
      <SideItem img={paymentHistory}>Payment History</SideItem>
      <SideItem img={notifications}>Notifications</SideItem>
    </div>
  );
};

export default SideBar;
