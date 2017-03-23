/**
 * Created by andrei on 23.03.2017.
 */
import React from 'react';

import styles from './style.css';

const Menu = () => (
    <nav className={styles.menu}>
        <div className={styles['toggle-btn']}>☰</div>
    </nav>
);

export default Menu;