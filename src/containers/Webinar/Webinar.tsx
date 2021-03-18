import React, { Component } from "react";

import dummyImage from "../../assets/img/logo-square.png";
import poster from "../../assets/img/poster.jpg";
import styles from "./Webinar.module.css";

class Webinar extends Component {
  render() {
    return (
      <div className={styles.Webinar}>
        <div className={styles.UpperPart}>
          <img className={styles.Poster} src={poster} alt="poster"></img>
          <div className={styles.Info}>
            <h5>Pendidikan di Era New Normal</h5>
            <p style={{ fontSize: "0.8em" }}>
              Prof. Ir. Nirzam, M.Sc., Ph.D., IPM., ASEAN ENg. dr. Ketut
              Suarjaya, MPPM.
            </p>
            <strong style={{ fontSize: "0.8em" }}>FREE</strong>
            <p style={{ fontSize: "0.75em" }}>13.00 - 16.00 | E-certificate</p>
            <p
              style={{
                fontSize: "0.75em",
                fontWeight: 700,
                color: "#555555",
                textAlign: "center",
              }}
            >
              Senin, 16 Januari 2021
            </p>
            <div className={styles.Container}>
              <button>join</button>
            </div>
          </div>
        </div>
        <hr style={{ width: "80%" }} />
        <div className={styles.Host}>
          <div className={styles.Profile}>
            <img src={dummyImage} alt="profile"></img>
            <strong>UNDIKSJA</strong>
          </div>
          <button>More info</button>
        </div>
      </div>
    );
  }
}

export default Webinar;
