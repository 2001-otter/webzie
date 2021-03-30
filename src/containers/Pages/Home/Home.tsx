import React, { Component } from "react";

import styles from "./Home.module.css";
import homePoster from "../../../assets/img/home-poster.png";
import SideBar from "../../../components/Navigation/SideBar/SideBar";
import Webinar from "../../Webinar/Webinar";
import WebinarSlider from "../../WebinarSlider/WebinarSlider";

class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <div className={styles.UpperHalf}>
          <SideBar></SideBar>
          <div>
            <div className={styles.HomePoster}>
              <img src={homePoster} alt="homePoster"></img>
            </div>
            <div className={styles.MainRec}>
              <h4>You May Like:</h4>
              <div className={styles.MainWebinars}>
                <Webinar></Webinar>
                <Webinar></Webinar>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.BottomHalf}>
          <WebinarSlider>Money and Investmenst</WebinarSlider>
          <WebinarSlider>Education</WebinarSlider>
        </div>
        <div className={styles.Footer}>
          <button>Register your webinar now!</button>
          <p>
            Want to see The Value that <a>You</a> will receive
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
