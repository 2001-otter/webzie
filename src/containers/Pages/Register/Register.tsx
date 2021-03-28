import React, { Component } from "react";

import styles from "./Register.module.css";

class Register extends Component {
  render() {
    return (
      <div className={styles.SignInContainer}>
        <div className={styles.Column}>
          <div className={styles.Header}>
            <img src="assets/Images/logo.jpg" title="logo" alt="Logo img" />
            <h3>Sign Up</h3>
            <span>to continue to Webzie</span>
          </div>

          <form method="POST">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              required
            />

            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />

            <input type="email" name="email" placeholder="Email" required />
            <input
              type="email"
              name="email2"
              placeholder="Confirm email"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password2"
              placeholder="Confirm password"
              required
            />

            <input type="submit" name="submitButton" value="SUBMIT" />
          </form>

          <a href="login.php" className={styles.SignInMessage}>
            Already have an account? Sign in here!
          </a>
        </div>
      </div>
    );
  }
}

export default Register;
