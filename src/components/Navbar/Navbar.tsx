import React from 'react';

import styles from "./Navbar.module.css"
import {Dialogs} from "../Dialogs/Dialogs";

export const Navbar = () => {
    return (
    <nav className={styles.nav}>
        <div><a href="/profile">Profile</a></div>
        <div><a href="/dialogs">Dialogs</a></div>
        <div><a>News</a></div>
        <div ><a>Music</a></div>
        <div><a>News</a></div>

    </nav>
    );
}

