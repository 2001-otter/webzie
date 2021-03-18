import React, { Component } from "react";

import styles from "./WebinarSlider.module.css";

import Webinar from "../Webinar/Webinar";

class WebinarSlider extends Component {
  render() {
    return (
      <div className={styles.WebinarSlider}>
        <div className={styles.Header}>
          <h3>{this.props.children}</h3>
          <p>see all</p>
        </div>
        <div className={styles.Content}>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
        </div>
      </div>
    );
  }
}

export default WebinarSlider;
<div></div>;
