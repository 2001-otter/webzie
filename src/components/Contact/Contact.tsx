import React from "react";

import styles from "./Contact.module.css";
import facebook from "../../assets/img/facebook.png";
import logo from "../../assets/img/logo.jpg";
import { isTypeAliasDeclaration } from "typescript";

const Contact = (props: any) => {
  return (
    <div className={styles.Contact}>
      <div className={styles.Logo}>
        <div className={styles.Webzie}>
          <img src={logo} alt="logo"></img>
          <p>Webzie</p>
        </div>
        <div className={styles.SocialMedia}>
          <img src={facebook} alt="facebook"></img>
          <img src={facebook} alt="instagram"></img>
          <img src={facebook} alt="facebook"></img>
        </div>
      </div>
      <table className={styles.Info}>
        <td>
          <tr>Home</tr>
          <tr>About Us</tr>
          <tr>Plans</tr>
        </td>
        <td>
          <tr>Contact us at:</tr>
          <tr>contact.webzie@gmail.com</tr>
          <tr>+62 812 8578 7840</tr>
        </td>
        <td>
          <tr>Terms of service</tr>
          <tr>Privacy Rights</tr>
          <tr>All Rights Reserved Ⓒ webzie</tr>
        </td>
      </table>
    </div>
  );
};

export default Contact;
