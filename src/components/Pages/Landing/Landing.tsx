import React from "react";

import "slick-carousel/slick/slick.css";
import "./slick-theme.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Landing.module.css";
import userIcon from "../../../assets/img/landing/user_icon.png";
import listIcon from "../../../assets/img/landing/list_icon.png";
import searchIcon from "../../../assets/img/landing/search_icon.png";

import screenshot from "../../../assets/img/screenshot.png";
import poster from "../../../assets/img/poster.jpg";

import Slider from "../../../containers/WebinarSlider/Slider/Slider";
import Slick from "react-slick";

const Landing = (props: any) => {
  function ArrowRight(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          zIndex: "20",
          left: "25px",
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function ArrowLeft(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          right: "25px",
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: <ArrowRight />,
    nextArrow: <ArrowLeft />,
    // dotsClass: styles.Dots,
    // customPaging: () => {
    //   return <p>test</p>;
    // },
  };

  return (
    <div className={styles.Landing}>
      <section className={styles.Header}>
        {/* TopHalf */}
        <Slick {...settings}>
          <div className={`${styles.Slide} ${styles.One}`}>
            <strong>Find the Webinar you need.</strong>
            <p>
              Now you can FIND the Webinar,
              <br />
              that suits you!
            </p>
            <button>Find your webinar now!</button>
          </div>
          <div className={`${styles.Slide} ${styles.Two}`}>
            <div className={styles.Container}>
              <strong>Register your webinar now!</strong>
              <p>
                With our feature, you can manage
                <br />
                your webinar with just an app
              </p>
              <button>Register your webinar</button>
            </div>
          </div>
          <div className={styles.Container}>
            <div className={`${styles.Slide} ${styles.Three}`}>
              <div className={styles.Desc}>
                <strong>Webinar: Saham Dasar</strong>
                <p>
                  Webinar ini akan membahas tentang cara menganalisa suatu saham
                  menggunakan analisa. Webinar ini akan dibawakan langsung oleh
                  salah satu investor Indoneisa.
                </p>
                <button>Register your webinar</button>
              </div>
              <div className={styles.Poster}>
                <img src={poster} alt="poster" />
              </div>
            </div>
          </div>
        </Slick>
        <div className={styles.BottomHalf}>
          <h3>How can we help you?</h3>
          <ul className={styles.Features}>
            <li>
              <div className={styles.Feature}>
                <img src={userIcon} alt="user-icon"></img>
                <p>Personalised features just for you</p>
              </div>
            </li>
            <li>
              <div className={styles.Feature}>
                <img src={searchIcon} alt="search-icon"></img>
                <p>Find the webinar that suits you</p>
              </div>
            </li>
            <li>
              <div className={styles.Feature}>
                <img src={listIcon} alt="list-icon"></img>
                <p>Endless choices of webinars</p>
              </div>
            </li>
          </ul>
          <button>Learn more about us!</button>
        </div>
      </section>
      <section className={styles.User}>
        <div className={styles.Benefits}>
          <h2>Find the webinar you like!</h2>
          <ul>
            <li>
              <h3>Search Engine</h3>
              <p>
                Find the perfect webinar for you | Use our filter to get what
                you want
              </p>
            </li>
            <li>
              <h3>E-Certificate collector</h3>
              <p>
                Download and keep all your certificates in your accounts |
                Autofill names for a faster process
              </p>
            </li>
            <li>
              <h3>Personal Calendar</h3>
              <p>
                Keep track of all your registered webinars | Get notifications
                for upcoming events
              </p>
            </li>
          </ul>
          <button>Find the webinar now!</button>
        </div>
        <div className={styles.Screenshot}>
          <img src={screenshot} alt="screenshot"></img>
        </div>
      </section>
      <section className={styles.Host}>
        <div className={styles.Screenshot}>
          <img src={screenshot} alt="screenshot"></img>
        </div>
        <div className={styles.Benefits}>
          <h2>Find the webinar you like!</h2>
          <ul>
            <li>
              <h3>Search Engine</h3>
              <p>
                Find the perfect webinar for you | Use our filter to get what
                you want
              </p>
            </li>
            <li>
              <h3>E-Certificate collector</h3>
              <p>
                Download and keep all your certificates in your accounts |
                Autofill names for a faster process
              </p>
            </li>
            <li>
              <h3>Personal Calendar</h3>
              <p>
                Keep track of all your registered webinars | Get notifications
                for upcoming events
              </p>
            </li>
          </ul>
          <button>Register your webinar now!</button>
        </div>
      </section>
      <h2
        style={{
          backgroundColor: "#f2f2f2",
          marginTop: 0,
          paddingLeft: "7em",
          paddingBottom: "1em",
          textAlign: "left",
        }}
      >
        Recommended
      </h2>
      <section className={styles.Recommended}>
        <div className={styles.Webinars}>
          <Slider></Slider>
        </div>
      </section>
      <div className={styles.LineBreak}></div>
    </div>
  );
};

export default Landing;
