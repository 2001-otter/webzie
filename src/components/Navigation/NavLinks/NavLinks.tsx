import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './NavLinks.module.css';

const NavLinks = (props: any) => {
    return(
        <ul className={styles.NavLinks}>
            <NavLink to="index.php">Home</NavLink>
            <NavLink to="about-us.php">About Us</NavLink>
        </ul>
    );
};

export default NavLinks;