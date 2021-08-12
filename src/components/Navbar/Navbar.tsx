import React from 'react';

import styles from "./Navbar.module.css"

export const Navbar = () => {
    return (
    <nav className={styles.nav}>
        <div><a>Profile</a></div>
        <div><a>Message</a></div>
        <div><a>News</a></div>
        <div ><a>Music</a></div>
        <div><a>News</a></div>

    </nav>
    );
}

