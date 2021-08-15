import React from 'react';

import styles from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav className={styles.nav}>
        <div><NavLink activeClassName={styles.active} to="/profile">Profile</NavLink></div>
        <div><NavLink activeClassName={styles.active} to="/dialogs">Dialogs</NavLink></div>
        <div><a>News</a></div>
        <div ><a>Music</a></div>
        <div><a>News</a></div>
    </nav>
    );
}

