import React from "react";

import styles from "./Landing.module.css";

const Landing = (props: any) => {
  return (
    <div className={styles.Landing}>
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
              <p>Personalised features just for you</p>
            </div>
          </li>
          <li>
            <div className={styles.Feature}>
              <p>Find the webinar that suits you</p>
            </div>
          </li>
          <li>
            <div className={styles.Feature}>
              <p>Endless choices of webinars</p>
            </div>
          </li>
        </ul>
        <button>Learn more about us!</button>
      </div>
    </div>
  );
};

export default Landing;
