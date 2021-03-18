import React, { Component } from "react";

import styles from "./Home.module.css";
import SideBar from "../../../components/Navigation/SideBar/SideBar";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <SideBar></SideBar>
        {/* <img> */}
      </div>
    );
  }
}

export default Home;
