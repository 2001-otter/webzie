import React from 'react';

import styles from './NavItems.module.css';
import NavigationItem from './NavItem/NavItem';

const navigationItems = () => (
    <div className={styles.rightItems}>
        <a href="search.php">
            <span>src</span>
        </a>

        <a href="profile.php">
            <span>prof</span>
        </a>

        <a href="login.php">
            <span>log</span>
        </a>
    </div>
);

export default navigationItems;