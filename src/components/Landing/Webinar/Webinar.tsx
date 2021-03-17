import React, { Component } from "react";

import DummyImage from "../../../assets/img/logo.jpg";
import styles from "./Webinar.module.css";

class Webinar extends Component {
  render() {
    return (
      <div className={styles.Webinar}>
        <img className={styles.Poster} src={DummyImage} alt="poster"></img>
        <div className={styles.Info}>
          <h5>Pendidikan di Era New Normal</h5>
          <p style={{ fontSize: "0.8em" }}>
            Prof. Ir. Nirzam, M.Sc., Ph.D., IPM., ASEAN ENg. dr. Ketut Suarjaya,
            MPPM.
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
        <hr style={{ width: "80%" }} />
        <div className={styles.Host}>
          <strong>UNDIKSJA</strong>
          <button>More info</button>
        </div>
      </div>
    );
  }
}

export default Webinar;
