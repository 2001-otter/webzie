import React from "react";

import styles from "./Landing.module.css";
import userIcon from "../../assets/img/user-icon.png";
import screenshot from "../../assets/img/screenshot.png";

const Landing = (props: any) => {
  return (
    <div className={styles.Landing}>
      <section className={styles.Header}>
        <div className={styles.TopHalf}>
          <strong>Find the Webinar you need.</strong>
          <p>
            Now you can FIND the Webinar,
            <br />
            that suits you!
          </p>
          <button>Find your webinar now!</button>
        </div>
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
                <img src={userIcon} alt="user-icon"></img>
                <p>Find the webinar that suits you</p>
              </div>
            </li>
            <li>
              <div className={styles.Feature}>
                <img src={userIcon} alt="user-icon"></img>
                <p>Endless choices of webinars</p>
              </div>
            </li>
          </ul>
          <button>Learn more about us!</button>
        </div>
      </section>
      <section className={styles.User}>
        <div className={styles.Left}>
          <h2>Find the webinar you like!</h2>
          <ul>
            <li>
              <h3>Search Engine</h3>
            </li>
            <li>
              <h3>E-Certificate collector</h3>
            </li>
            <li>
              <h3>Personal Calendar</h3>
            </li>
          </ul>
        </div>
        <div className={styles.Right}>
          <img src={screenshot} alt="randomtestt"></img>
        </div>
      </section>
      <section className={styles.Host}>
        <div className={styles.Left}></div>
        <div className={styles.Right}></div>
      </section>
    </div>
  );
};

export default Landing;
