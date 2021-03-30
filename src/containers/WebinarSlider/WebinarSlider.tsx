import React, { Component } from "react";

import styles from "./WebinarSlider.module.css";

import Slider from "./Slider/Slider";

class WebinarSlider extends Component {
  render() {
    return (
      <div className={styles.Slider}>
        <div className={styles.Header}>
          <h3>{this.props.children}</h3>
          <p>see all</p>
        </div>
        <Slider></Slider>
      </div>
    );
  }
}

export default WebinarSlider;
