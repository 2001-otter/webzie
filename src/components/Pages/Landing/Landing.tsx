import React from "react";

import styles from "./Landing.module.css";
import userIcon from "../../../assets/img/user-icon.png";
import screenshot from "../../../assets/img/screenshot.png";

import Webinar from "./Webinar/Webinar";

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
      <section className={styles.Recommended}>
        <h2>Recommended</h2>
        <div className={styles.Webinars}>
          <Webinar></Webinar>
          <Webinar></Webinar>
          <Webinar></Webinar>
        </div>
      </section>
      <div className={styles.LineBreak}></div>
    </div>
  );
};

export default Landing;
