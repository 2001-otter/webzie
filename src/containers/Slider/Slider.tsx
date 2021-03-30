import React, { Component } from "react";

import styles from "./Slider.module.css";
import Webinar from "../Webinar/Webinar";

import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

// const renderArrows = () => {
//   return (
//     <div>next</div>
//   );
// };

class Slider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow className={styles.SliderButton} />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className={styles.Slider}>
        <div className={styles.Header}>
          <h3>{this.props.children}</h3>
          <p>see all</p>
        </div>
        <Slick {...settings}>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
        </Slick>
      </div>
    );
  }
}

export default Slider;
